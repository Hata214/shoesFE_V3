import React from 'react';

const Help = () => {
    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">Help Center</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* FAQs */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-medium mb-2">How do I track my order?</h3>
                                <p className="text-gray-600">
                                    You can track your order by logging into your account and viewing your order history.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-medium mb-2">What is your return policy?</h3>
                                <p className="text-gray-600">
                                    We offer a 30-day return policy for unworn items in original condition.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-medium mb-2">Customer Support</h3>
                                <p className="text-gray-600">
                                    Email: support@sneakervault.com<br />
                                    Phone: +1 (555) 123-4567
                                </p>
                            </div>
                            <div>
                                <h3 className="font-medium mb-2">Business Hours</h3>
                                <p className="text-gray-600">
                                    Monday - Friday: 9:00 AM - 6:00 PM EST
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help; 