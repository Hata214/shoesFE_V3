import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [sortBy, setSortBy] = useState('relevance');

    // Placeholder search results
    const results = [
        {
            id: 1,
            name: 'Nike Air Max',
            price: 129.99,
            brand: 'Nike',
            category: 'Running',
            rating: 4.5,
            image: 'placeholder.jpg'
        },
        {
            id: 2,
            name: 'Adidas Ultraboost',
            price: 179.99,
            brand: 'Adidas',
            category: 'Running',
            rating: 4.8,
            image: 'placeholder.jpg'
        },
        {
            id: 3,
            name: 'Nike Air Force 1',
            price: 109.99,
            brand: 'Nike',
            category: 'Casual',
            rating: 4.7,
            image: 'placeholder.jpg'
        }
    ];

    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Search Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">
                        Search Results for "{query}"
                    </h1>
                    <p className="text-gray-600">
                        {results.length} results found
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="font-semibold mb-4">Filters</h2>

                            {/* Price Range */}
                            <div className="mb-6">
                                <h3 className="font-medium mb-2">Price Range</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span className="text-gray-600">Under $50</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span className="text-gray-600">$50 - $100</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span className="text-gray-600">$100 - $200</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span className="text-gray-600">Over $200</span>
                                    </label>
                                </div>
                            </div>

                            {/* Brands */}
                            <div className="mb-6">
                                <h3 className="font-medium mb-2">Brands</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span className="text-gray-600">Nike</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span className="text-gray-600">Adidas</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span className="text-gray-600">Puma</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span className="text-gray-600">New Balance</span>
                                    </label>
                                </div>
                            </div>

                            {/* Categories */}
                            <div>
                                <h3 className="font-medium mb-2">Categories</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span className="text-gray-600">Running</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span className="text-gray-600">Casual</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span className="text-gray-600">Basketball</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span className="text-gray-600">Training</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Grid */}
                    <div className="lg:w-3/4">
                        {/* Sort Options */}
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-gray-600">
                                Showing {results.length} of {results.length} results
                            </p>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="border rounded-lg px-4 py-2"
                            >
                                <option value="relevance">Sort by: Relevance</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Rating</option>
                            </select>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {results.map((product) => (
                                <Link
                                    key={product.id}
                                    to={`/product/${product.id}`}
                                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                                >
                                    <div className="aspect-square bg-gray-100"></div>
                                    <div className="p-4">
                                        <h3 className="font-semibold mb-1">{product.name}</h3>
                                        <p className="text-gray-600 text-sm mb-2">
                                            {product.brand} · {product.category}
                                        </p>
                                        <div className="flex items-center mb-2">
                                            <div className="flex text-yellow-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <i
                                                        key={i}
                                                        className={`fas fa-star ${i < Math.floor(product.rating)
                                                            ? 'text-yellow-400'
                                                            : 'text-gray-300'
                                                            }`}
                                                    ></i>
                                                ))}
                                            </div>
                                            <span className="text-gray-600 text-sm ml-2">
                                                {product.rating}
                                            </span>
                                        </div>
                                        <p className="text-red-500 font-semibold">
                                            ${product.price}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* No Results */}
                        {results.length === 0 && (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-search text-2xl text-gray-400"></i>
                                </div>
                                <h2 className="text-xl font-semibold mb-2">No Results Found</h2>
                                <p className="text-gray-600 mb-6">
                                    Try adjusting your search or filter criteria
                                </p>
                                <Link
                                    to="/shop"
                                    className="inline-block bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors"
                                >
                                    Browse All Products
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResults; 