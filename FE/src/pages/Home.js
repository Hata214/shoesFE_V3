import React from 'react';
import { bannerImage, products } from '../assets';

function Home() {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-screen">
                <img
                    src={bannerImage}
                    alt="Hero Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Step into Style with SneakerVault
                        </h1>
                        <p className="text-xl text-white mb-8">
                            Discover the latest collection of premium sneakers and elevate your footwear game.
                        </p>
                        <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100">
                            Shop Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Product Card */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={products.nikeAirMax270}
                                alt="Nike Air Max 270"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Nike Air Max 270</h3>
                                <p className="text-gray-600 mb-4">Premium comfort and style</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold">$150</span>
                                    <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Add more product cards */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home; 