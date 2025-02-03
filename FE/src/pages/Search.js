import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import hình ảnh trực tiếp
import nikeAirMax270 from '../assets/images/products/nike-air-max-270.jpg';
import nikeAirForce1 from '../assets/images/products/nike-air-force-1.jpg';
import nikeAirMax90 from '../assets/images/products/nike-air-max-90.jpg';

function Search() {
    const [sortBy, setSortBy] = useState('relevance');
    const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    // Sample product data
    const productList = [
        {
            id: 1,
            name: 'Nike Air Max 270',
            brand: 'Nike',
            category: 'Running',
            price: 129.99,
            image: nikeAirMax270,
            rating: 4.5,
            reviews: 128,
            isNew: true,
        },
        {
            id: 2,
            name: 'Nike Air Force 1',
            brand: 'Nike',
            category: 'Lifestyle',
            price: 120.00,
            image: nikeAirForce1,
            rating: 5,
            reviews: 95,
        },
        {
            id: 3,
            name: 'Nike Air Max 90',
            brand: 'Nike',
            category: 'Running',
            price: 140.00,
            originalPrice: 169.99,
            image: nikeAirMax90,
            rating: 4.8,
            reviews: 75,
            isNew: true,
        },
    ];

    // Function to render star rating
    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <i
                key={index}
                className={`fas fa-star ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            />
        ));
    };

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-8 pt-32">
                <div className="flex justify-between items-center mb-6">
                    <p>Showing {productList.length} of {productList.length} results</p>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border rounded px-4 py-2"
                    >
                        <option value="relevance">Sort by: Relevance</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Highest Rated</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productList.map(product => (
                        <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <div className="aspect-square bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://via.placeholder.com/400x400?text=Product+Image';
                                    }}
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold mb-1">{product.name}</h3>
                                <p className="text-gray-600 text-sm mb-2">
                                    {product.brand} · {product.category}
                                </p>
                                <div className="flex items-center mb-2">
                                    <div className="flex text-yellow-400">
                                        {renderStars(product.rating)}
                                    </div>
                                    <span className="text-gray-600 text-sm ml-2">
                                        {product.rating} ({product.reviews} reviews)
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-red-500 font-semibold">${product.price.toFixed(2)}</p>
                                    {product.originalPrice && (
                                        <p className="text-gray-500 line-through text-sm">
                                            ${product.originalPrice.toFixed(2)}
                                        </p>
                                    )}
                                </div>
                                {product.isNew && (
                                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded absolute top-2 right-2">
                                        New
                                    </span>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Search; 