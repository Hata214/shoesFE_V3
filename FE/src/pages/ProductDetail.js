import React, { useState } from 'react';
import { products } from '../assets';

function ProductDetail() {
    const [mainImage, setMainImage] = useState(products.nikeAirMax270);

    return (
        <div className="bg-gray-50">
            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 mb-8 pt-32">
                <nav className="flex text-gray-500 text-sm">
                    <a href="/" className="hover:text-black">Home</a>
                    <span className="mx-2">/</span>
                    <a href="/shop" className="hover:text-black">Shop</a>
                    <span className="mx-2">/</span>
                    <span className="text-black">Nike Air Max 270</span>
                </nav>
            </div>

            {/* Product Section */}
            <section className="max-w-7xl mx-auto px-4 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Images */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                            <img
                                src={mainImage}
                                alt="Nike Air Max 270"
                                className="w-full h-[500px] object-contain"
                            />
                            <button className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm">
                                <i className="fas fa-360-degrees mr-2"></i>360° View
                            </button>
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 gap-4">
                            {Object.values(products).map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setMainImage(image)}
                                    className={`bg-white rounded-lg p-4 border-2 ${mainImage === image ? 'border-black' : 'border-transparent'} hover:border-black`}
                                >
                                    <img
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-20 object-contain"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-8">
                        <div>
                            <span className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium mb-4">
                                New Arrival
                            </span>
                            <h1 className="text-4xl font-bold mb-4">Nike Air Max 270</h1>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center">
                                    <div className="flex text-yellow-400">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <span className="ml-2 text-gray-600">(128 reviews)</span>
                                </div>
                                <span className="text-gray-400">|</span>
                                <span className="text-green-500">In Stock</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-3xl font-bold">$150.00</span>
                                <span className="text-gray-400 line-through text-xl">$189.99</span>
                                <span className="bg-red-100 text-red-500 px-2 py-1 rounded text-sm">Save 21%</span>
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div>
                            <h3 className="font-semibold mb-4">Select Size</h3>
                            <div className="grid grid-cols-4 gap-3">
                                {['US 7', 'US 8', 'US 9', 'US 10'].map((size) => (
                                    <label key={size} className="text-center border-2 rounded-lg py-2 cursor-pointer hover:border-black">
                                        {size}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <div className="flex gap-4">
                            <div className="flex items-center border-2 rounded-lg">
                                <button className="px-4 py-2 hover:bg-gray-100">-</button>
                                <input type="number" value="1" min="1" className="w-16 text-center border-x-2" />
                                <button className="px-4 py-2 hover:bg-gray-100">+</button>
                            </div>
                            <button className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                                Add to Cart
                            </button>
                            <button className="w-12 h-12 flex items-center justify-center border-2 rounded-lg hover:bg-gray-100">
                                <i className="far fa-heart"></i>
                            </button>
                        </div>

                        {/* Product Description */}
                        <div className="border-t pt-8">
                            <h3 className="font-semibold mb-4">Product Description</h3>
                            <p className="text-gray-600 leading-relaxed">
                                The Nike Air Max 270 delivers a bold look inspired by Air Max icons.
                                Featuring Nike's biggest heel Air unit yet, it provides unrivaled comfort
                                and a sleek, modern design.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductDetail; 