import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Success Icon */}
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-check text-3xl text-green-500"></i>
                    </div>

                    {/* Success Message */}
                    <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
                    <p className="text-gray-600 mb-8">
                        Your order has been successfully placed and will be processed shortly.
                        We'll send you an email confirmation with your order details.
                    </p>

                    {/* Order Details */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-xl font-semibold mb-4">Order Details</h2>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Order Number:</span>
                            <span className="font-medium">#ORD123456</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Order Date:</span>
                            <span className="font-medium">{new Date().toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Estimated Delivery:</span>
                            <span className="font-medium">3-5 Business Days</span>
                        </div>
                    </div>

                    {/* Next Steps */}
                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
                        <h3 className="font-semibold mb-4">What's Next?</h3>
                        <ul className="text-left space-y-2 text-gray-600">
                            <li className="flex items-center">
                                <i className="fas fa-envelope text-red-500 mr-2"></i>
                                You'll receive an order confirmation email shortly
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-box text-red-500 mr-2"></i>
                                We'll notify you when your order ships
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-truck text-red-500 mr-2"></i>
                                Track your order status in your account dashboard
                            </li>
                        </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/profile"
                            className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors"
                        >
                            View Order Status
                        </Link>
                        <Link
                            to="/shop"
                            className="border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSuccess; 