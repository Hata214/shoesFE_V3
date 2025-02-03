import React from 'react';
import { products } from '../assets';

function Cart() {
    const cartItems = [
        {
            id: 1,
            name: 'Nike Air Max 270',
            category: 'Running',
            price: 150.00,
            originalPrice: 189.99,
            image: products.nikeAirMax270,
            size: 'US 9',
            quantity: 1,
        },
        {
            id: 2,
            name: 'Nike Air Force 1',
            category: 'Lifestyle',
            price: 120.00,
            image: products.nikeAirForce1,
            size: 'US 8',
            quantity: 2,
        },
    ];

    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = 0; // Free shipping
    const total = subtotal + shipping;

    return (
        <div className="bg-gray-50">
            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 mb-8 pt-32">
                <nav className="flex text-gray-500 text-sm">
                    <a href="/" className="hover:text-black">Home</a>
                    <span className="mx-2">/</span>
                    <span className="text-black">Shopping Cart</span>
                </nav>
            </div>

            {/* Cart Section */}
            <section className="max-w-7xl mx-auto px-4 mb-20">
                <h1 className="text-3xl font-bold mb-8">Shopping Cart (2)</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="flex-1">
                        <div className="space-y-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="bg-white rounded-xl p-6 shadow-lg">
                                    <div className="flex gap-6">
                                        {/* Product Image */}
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-32 h-32 object-cover rounded-lg"
                                        />

                                        {/* Product Details */}
                                        <div className="flex-1">
                                            <div className="flex justify-between">
                                                <div>
                                                    <h3 className="font-bold text-xl mb-2">{item.name}</h3>
                                                    <p className="text-gray-600 mb-1">{item.category}</p>
                                                    <p className="text-gray-600 mb-4">Size: {item.size}</p>
                                                </div>
                                                <button className="text-gray-400 hover:text-red-500">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center border-2 rounded-lg">
                                                    <button className="px-4 py-2 hover:bg-gray-100">-</button>
                                                    <input
                                                        type="number"
                                                        value={item.quantity}
                                                        min="1"
                                                        className="w-16 text-center border-x-2"
                                                    />
                                                    <button className="px-4 py-2 hover:bg-gray-100">+</button>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-2xl font-bold">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </span>
                                                    {item.originalPrice && (
                                                        <span className="text-gray-400 line-through ml-2">
                                                            ${(item.originalPrice * item.quantity).toFixed(2)}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Continue Shopping */}
                        <div className="mt-8">
                            <a
                                href="/shop"
                                className="inline-flex items-center text-gray-600 hover:text-black"
                            >
                                <i className="fas fa-arrow-left mr-2"></i>
                                Continue Shopping
                            </a>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-96">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="text-green-500">Free</span>
                                </div>
                                <div className="border-t pt-4">
                                    <div className="flex justify-between">
                                        <span className="font-bold">Total</span>
                                        <span className="font-bold">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Promo Code */}
                            <div className="mb-6">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Enter promo code"
                                        className="flex-1 border-2 rounded-lg px-4 py-2"
                                    />
                                    <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                                        Apply
                                    </button>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>

                {/* Empty Cart State (hidden by default) */}
                <div className="hidden text-center py-20">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-shopping-cart text-4xl text-gray-400"></i>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                    <p className="text-gray-600 mb-8">
                        Looks like you haven't added any items to your cart yet
                    </p>
                    <a
                        href="/shop"
                        className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 inline-block"
                    >
                        Start Shopping
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Cart; 