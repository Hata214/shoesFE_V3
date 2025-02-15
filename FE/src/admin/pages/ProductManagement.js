import React, { useState, useEffect } from 'react';
import api, { endpoints } from '../../config/api';
import { useNavigate } from 'react-router-dom';
import defaultProductImage from '../../assets/images/products/default-product.jpg';

const ProductManagement = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        brand: '',
        category: 'Running',
        stock: '',
        image: ''
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [notification, setNotification] = useState({ show: false, message: '', type: '' });
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        sortBy: 'name', // name, brand, price
        sortOrder: 'asc' // asc, desc
    });

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
            return;
        }
        fetchProducts();
    }, [navigate]);

    const fetchProducts = async () => {
        try {
            const response = await api.get(endpoints.products);
            console.log('Fetched products:', response.data);
            if (response.data && Array.isArray(response.data.products)) {
                setProducts(response.data.products);
                setError(null);
            } else {
                setError('Invalid data format received from server');
            }
        } catch (err) {
            console.error('Error fetching products:', err);
            if (err.response?.status === 401) {
                navigate('/admin/login');
            }
            setError('Error fetching products: ' + (err.response?.data?.message || err.message));
        } finally {
            setLoading(false);
        }
    };

    const showNotification = (message, type = 'success') => {
        setNotification({ show: true, message, type });
        setTimeout(() => {
            setNotification({ show: false, message: '', type: '' });
        }, 3000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'stock') {
            // Chuyển đổi giá trị thành số
            const numValue = parseInt(value);
            // Kiểm tra giới hạn
            if (numValue < 1) {
                setFormData(prev => ({ ...prev, [name]: '1' }));
                return;
            }
            if (numValue > 999) {
                setFormData(prev => ({ ...prev, [name]: '999' }));
                return;
            }
        }

        if (name === 'price') {
            // Chuyển đổi giá trị thành số
            const numValue = parseFloat(value);
            // Kiểm tra giới hạn
            if (numValue < 1) {
                setFormData(prev => ({ ...prev, [name]: '1' }));
                return;
            }
        }

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                setError('Image size should be less than 5MB');
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({
                    ...prev,
                    image: reader.result
                }));
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Validate form
            if (!formData.name || !formData.price || !formData.description || !formData.brand || !formData.category) {
                setError('Please fill in all required fields');
                return;
            }

            // Convert price and stock to numbers
            const productData = {
                ...formData,
                price: Number(formData.price),
                stock: Number(formData.stock) || 1
            };

            // Log form data before submission
            console.log('Submitting product data:', productData);

            const response = await api.post(endpoints.newProduct, productData);

            if (response.data.success) {
                showNotification('Product created successfully');
                // Reset form
                setFormData({
                    name: '',
                    price: '',
                    description: '',
                    brand: '',
                    category: 'Running',
                    stock: '1',
                    image: ''
                });
                setImagePreview(null);
                // Refresh product list
                await fetchProducts();
            } else {
                setError(response.data.error || 'Failed to create product');
            }
        } catch (err) {
            console.error('Error saving product:', err);
            setError(err.response?.data?.message || 'Failed to create product');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                const response = await api.delete(`${endpoints.product}/${id}`);
                console.log('Delete response:', response.data);
                showNotification('Product deleted successfully');
                fetchProducts();
            } catch (err) {
                console.error('Error deleting product:', err);
                showNotification('Error deleting product', 'error');
            }
        }
    };

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setFormData({
            name: product.name,
            price: product.price,
            description: product.description,
            brand: product.brand,
            category: product.category,
            stock: product.stock,
            image: product.image
        });
        setImagePreview(product.image);
    };

    const resetForm = () => {
        setSelectedProduct(null);
        setFormData({
            name: '',
            price: '',
            description: '',
            brand: '',
            category: 'Running',
            stock: '',
            image: ''
        });
        setImagePreview(null);
    };

    const handleSort = (field) => {
        setFilters(prev => ({
            sortBy: field,
            sortOrder: prev.sortBy === field && prev.sortOrder === 'asc' ? 'desc' : 'asc'
        }));
    };

    const getProductImageUrl = (imageUrl) => {
        if (!imageUrl) return defaultProductImage;
        if (imageUrl.startsWith('http')) return imageUrl;
        return `${process.env.REACT_APP_ASSETS_URL}${imageUrl}`;
    };

    const filteredProducts = products
        .filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            const order = filters.sortOrder === 'asc' ? 1 : -1;
            if (filters.sortBy === 'price') {
                return (a.price - b.price) * order;
            }
            return a[filters.sortBy].localeCompare(b[filters.sortBy]) * order;
        });

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Product Management</h1>

            {/* Notification */}
            {notification.show && (
                <div className={`fixed top-4 right-4 p-4 rounded shadow-lg ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                    } text-white`}>
                    {notification.message}
                </div>
            )}

            {/* Product Form */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-xl font-semibold mb-4">
                    {selectedProduct ? 'Edit Product' : 'Add New Product'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Product Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="border p-2 rounded"
                            required
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="Price (min: $1)"
                            value={formData.price}
                            onChange={handleInputChange}
                            className="border p-2 rounded"
                            min="1"
                            step="0.01"
                            required
                        />
                        <input
                            type="text"
                            name="brand"
                            placeholder="Brand"
                            value={formData.brand}
                            onChange={handleInputChange}
                            className="border p-2 rounded"
                            required
                        />
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className="border p-2 rounded"
                            required
                        >
                            <option value="Running">Running</option>
                            <option value="Basketball">Basketball</option>
                            <option value="Casual">Casual</option>
                            <option value="Football">Football</option>
                            <option value="Tennis">Tennis</option>
                            <option value="Training">Training</option>
                        </select>
                        <input
                            type="number"
                            name="stock"
                            placeholder="Stock (1-999)"
                            value={formData.stock}
                            onChange={handleInputChange}
                            className="border p-2 rounded"
                            min="1"
                            max="999"
                            required
                        />
                        <div className="space-y-2">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="border p-2 rounded w-full"
                            />
                            {imagePreview && (
                                <div className="relative w-full h-32">
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="h-full object-cover rounded"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setImagePreview(null);
                                            setFormData(prev => ({ ...prev, image: '' }));
                                        }}
                                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="border p-2 rounded w-full"
                        rows="4"
                        required
                    />
                    <div className="flex gap-2">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            {selectedProduct ? 'Update Product' : 'Add Product'}
                        </button>
                        {selectedProduct && (
                            <button
                                type="button"
                                onClick={resetForm}
                                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* Search and Filters */}
            <div className="bg-white p-4 rounded-lg shadow mb-4">
                <div className="flex flex-wrap gap-4 items-center">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Search by name or brand..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleSort('name')}
                            className={`px-3 py-1 rounded ${filters.sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                                }`}
                        >
                            Name {filters.sortBy === 'name' && (filters.sortOrder === 'asc' ? '↑' : '↓')}
                        </button>
                        <button
                            onClick={() => handleSort('brand')}
                            className={`px-3 py-1 rounded ${filters.sortBy === 'brand' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                                }`}
                        >
                            Brand {filters.sortBy === 'brand' && (filters.sortOrder === 'asc' ? '↑' : '↓')}
                        </button>
                        <button
                            onClick={() => handleSort('price')}
                            className={`px-3 py-1 rounded ${filters.sortBy === 'price' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                                }`}
                        >
                            Price {filters.sortBy === 'price' && (filters.sortOrder === 'asc' ? '↑' : '↓')}
                        </button>
                    </div>
                </div>
            </div>

            {/* Products List */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Brand</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredProducts.map((product) => (
                            <tr key={product._id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <img
                                        src={getProductImageUrl(product.image)}
                                        alt={product.name}
                                        className="w-12 h-12 object-cover rounded"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = defaultProductImage;
                                        }}
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">${product.price}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.brand}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.stock}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button
                                        onClick={() => handleEdit(product)}
                                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(product._id)}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductManagement; 