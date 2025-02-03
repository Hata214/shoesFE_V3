import React, { useState } from 'react';
import { products } from '../assets';

function Checkout() {
    const [paymentMethod, setPaymentMethod] = useState('credit-card');

    const cartItems = [
        {
            id: 1,
            name: 'Nike Air Max 270',
            category: 'Running',
            price: 150.00,
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
                    <a href="/cart" className="hover:text-black">Cart</a>
                    <span className="mx-2">/</span>
                    <span className="text-black">Checkout</span>
                </nav>
            </div>

            {/* Checkout Section */}
            <section className="max-w-7xl mx-auto px-4 mb-20">
                <h1 className="text-3xl font-bold mb-8">Checkout</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Checkout Form */}
                    <div className="flex-1">
                        {/* Shipping Information */}
                        <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                            <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-600 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full border-2 rounded-lg px-4 py-2"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full border-2 rounded-lg px-4 py-2"
                                        placeholder="Doe"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-gray-600 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full border-2 rounded-lg px-4 py-2"
                                        placeholder="john.doe@example.com"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-gray-600 mb-2">Address</label>
                                    <input
                                        type="text"
                                        className="w-full border-2 rounded-lg px-4 py-2"
                                        placeholder="1234 Main St"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-2">City</label>
                                    <input
                                        type="text"
                                        className="w-full border-2 rounded-lg px-4 py-2"
                                        placeholder="New York"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-2">Postal Code</label>
                                    <input
                                        type="text"
                                        className="w-full border-2 rounded-lg px-4 py-2"
                                        placeholder="10001"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h2 className="text-xl font-bold mb-6">Payment Method</h2>
                            <div className="space-y-4">
                                <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="credit-card"
                                        checked={paymentMethod === 'credit-card'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <i className="fab fa-cc-visa text-2xl"></i>
                                    <span>Credit Card</span>
                                </label>
                                <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="paypal"
                                        checked={paymentMethod === 'paypal'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <i className="fab fa-paypal text-2xl"></i>
                                    <span>PayPal</span>
                                </label>
                            </div>

                            {paymentMethod === 'credit-card' && (
                                <div className="mt-6 space-y-4">
                                    <div>
                                        <label className="block text-gray-600 mb-2">Card Number</label>
                                        <input
                                            type="text"
                                            className="w-full border-2 rounded-lg px-4 py-2"
                                            placeholder="1234 5678 9012 3456"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-600 mb-2">Expiry Date</label>
                                            <input
                                                type="text"
                                                className="w-full border-2 rounded-lg px-4 py-2"
                                                placeholder="MM/YY"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-600 mb-2">CVV</label>
                                            <input
                                                type="text"
                                                className="w-full border-2 rounded-lg px-4 py-2"
                                                placeholder="123"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-96">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                            {/* Order Items */}
                            <div className="space-y-4 mb-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-lg"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-medium">{item.name}</h3>
                                            <p className="text-gray-600 text-sm">Size: {item.size}</p>
                                            <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
                                            <p className="font-medium">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Order Total */}
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

                            {/* Place Order Button */}
                            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Checkout; 