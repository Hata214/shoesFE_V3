import React, { useState } from 'react';
import { products } from '../assets';

function Shop() {
    const [sortBy, setSortBy] = useState('popular');
    const [viewMode, setViewMode] = useState('grid');

    const productList = [
        {
            id: 1,
            name: 'Nike Air Max 270',
            category: 'Running',
            price: 150.00,
            originalPrice: 189.99,
            image: products.nikeAirMax270,
            rating: 4.5,
            reviews: 128,
            isNew: true,
        },
        {
            id: 2,
            name: 'Nike Air Force 1',
            category: 'Lifestyle',
            price: 120.00,
            image: products.nikeAirForce1,
            rating: 5,
            reviews: 95,
        },
        {
            id: 3,
            name: 'Nike Air Max 90',
            category: 'Running',
            price: 140.00,
            originalPrice: 169.99,
            image: products.nikeAirMax90,
            rating: 4.8,
            reviews: 75,
            isNew: true,
        },
    ];

    return (
        <div className="bg-gray-50">
            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 mb-8 pt-32">
                <nav className="flex text-gray-500 text-sm">
                    <a href="/" className="hover:text-black">Home</a>
                    <span className="mx-2">/</span>
                    <span className="text-black">Shop</span>
                </nav>
            </div>

            {/* Shop Section */}
            <section className="max-w-7xl mx-auto px-4 mb-20">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">All Products</h1>
                    <div className="flex items-center gap-4">
                        {/* Sort */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="border-2 rounded-lg px-4 py-2 bg-white"
                        >
                            <option value="popular">Most Popular</option>
                            <option value="newest">Newest</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                        </select>

                        {/* View Mode */}
                        <div className="flex border-2 rounded-lg">
                            <button
                                className={`px-4 py-2 ${viewMode === 'grid' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                                onClick={() => setViewMode('grid')}
                            >
                                <i className="fas fa-grid-2"></i>
                            </button>
                            <button
                                className={`px-4 py-2 ${viewMode === 'list' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                                onClick={() => setViewMode('list')}
                            >
                                <i className="fas fa-list"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productList.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl p-6 shadow-lg">
                            {/* Product Image */}
                            <div className="relative mb-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                                {product.isNew && (
                                    <span className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                                        New Arrival
                                    </span>
                                )}
                                <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100">
                                    <i className="far fa-heart"></i>
                                </button>
                            </div>

                            {/* Product Info */}
                            <div>
                                <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-2">{product.category}</p>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex text-yellow-400">
                                        {[...Array(Math.floor(product.rating))].map((_, i) => (
                                            <i key={i} className="fas fa-star"></i>
                                        ))}
                                        {product.rating % 1 !== 0 && (
                                            <i className="fas fa-star-half-alt"></i>
                                        )}
                                    </div>
                                    <span className="text-gray-600">({product.reviews})</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                                        {product.originalPrice && (
                                            <span className="text-gray-400 line-through ml-2">
                                                ${product.originalPrice.toFixed(2)}
                                            </span>
                                        )}
                                    </div>
                                    <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Shop; 