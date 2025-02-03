import React from 'react';
import { products } from '../assets';

function Wishlist() {
    return (
        <div className="bg-gray-50">
            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 mb-8 pt-32">
                <nav className="flex text-gray-500 text-sm">
                    <a href="/" className="hover:text-black">Home</a>
                    <span className="mx-2">/</span>
                    <span className="text-black">Wishlist</span>
                </nav>
            </div>

            {/* Wishlist Section */}
            <section className="max-w-7xl mx-auto px-4 mb-20">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">My Wishlist (2)</h1>
                    <button className="text-gray-600 hover:text-black">
                        Clear All
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {/* Wishlist Item 1 */}
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center gap-6">
                            <img src={products.nikeAirMax270}
                                alt="Nike Air Max 270"
                                className="w-32 h-32 object-cover rounded-lg" />

                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-xl mb-2">Nike Air Max 270</h3>
                                        <p className="text-gray-600 mb-2">Running Collection</p>
                                        <div className="flex text-yellow-400 text-sm">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                            <span className="text-gray-600 ml-2">(128)</span>
                                        </div>
                                    </div>
                                    <button className="text-gray-400 hover:text-red-500">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <span className="text-2xl font-bold">$150.00</span>
                                        <span className="text-gray-400 line-through ml-2">$189.99</span>
                                    </div>
                                    <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Wishlist Item 2 */}
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center gap-6">
                            <img src={products.nikeAirForce1}
                                alt="Adidas Ultraboost"
                                className="w-32 h-32 object-cover rounded-lg" />

                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-xl mb-2">Adidas Ultraboost</h3>
                                        <p className="text-gray-600 mb-2">Performance Series</p>
                                        <div className="flex text-yellow-400 text-sm">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span className="text-gray-600 ml-2">(95)</span>
                                        </div>
                                    </div>
                                    <button className="text-gray-400 hover:text-red-500">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <span className="text-2xl font-bold">$180.00</span>
                                    </div>
                                    <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Empty State (hidden by default) */}
                <div className="hidden text-center py-20">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="far fa-heart text-4xl text-gray-400"></i>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
                    <p className="text-gray-600 mb-8">Browse our products and add your favorites to the wishlist</p>
                    <a href="/shop" className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 inline-block">
                        Continue Shopping
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Wishlist; 