import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutFailed = () => {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Error Icon */}
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-times text-3xl text-red-500"></i>
                    </div>

                    {/* Error Message */}
                    <h1 className="text-3xl font-bold mb-4">Payment Failed</h1>
                    <p className="text-gray-600 mb-8">
                        We're sorry, but there was an issue processing your payment.
                        Your order has not been placed and you have not been charged.
                    </p>

                    {/* Common Issues */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-xl font-semibold mb-4">Common Issues</h2>
                        <ul className="text-left space-y-3">
                            <li className="flex items-start">
                                <i className="fas fa-credit-card text-red-500 mt-1 mr-3"></i>
                                <span className="text-gray-600">
                                    Insufficient funds or card declined
                                </span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-exclamation-triangle text-red-500 mt-1 mr-3"></i>
                                <span className="text-gray-600">
                                    Incorrect card information or expired card
                                </span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-lock text-red-500 mt-1 mr-3"></i>
                                <span className="text-gray-600">
                                    Transaction blocked by your bank for security reasons
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* What to Do Next */}
                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
                        <h3 className="font-semibold mb-4">What to Do Next</h3>
                        <ul className="text-left space-y-2 text-gray-600">
                            <li className="flex items-center">
                                <i className="fas fa-redo text-red-500 mr-2"></i>
                                Try the payment again with the same or different card
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-phone text-red-500 mr-2"></i>
                                Contact your bank to resolve any issues
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-envelope text-red-500 mr-2"></i>
                                Contact our support team for assistance
                            </li>
                        </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/checkout"
                            className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors"
                        >
                            Try Again
                        </Link>
                        <Link
                            to="/help"
                            className="border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutFailed; 