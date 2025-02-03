import React, { useState } from 'react';

const Help = () => {
    const [activeTab, setActiveTab] = useState('faq');
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            question: 'How do I track my order?',
            answer: 'You can track your order by logging into your account and visiting the order history section. Alternatively, you can use the tracking number provided in your shipping confirmation email.'
        },
        {
            question: 'What is your return policy?',
            answer: 'We offer a 30-day return policy for unworn items in their original packaging. Returns are free for store credit, or you can receive a full refund minus shipping costs.'
        },
        {
            question: 'How do I know if the products are authentic?',
            answer: 'All our products are sourced directly from authorized retailers and undergo a rigorous authentication process by our expert team before being listed on our site.'
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and various digital payment methods including Apple Pay and Google Pay.'
        }
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-center">Help Center</h1>

                {/* Navigation Tabs */}
                <div className="flex justify-center mb-8">
                    <button
                        className={`px-6 py-2 ${activeTab === 'faq' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('faq')}
                    >
                        FAQ
                    </button>
                    <button
                        className={`px-6 py-2 ${activeTab === 'contact' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('contact')}
                    >
                        Contact Us
                    </button>
                </div>

                {/* FAQ Section */}
                <div className={activeTab === 'faq' ? 'block' : 'hidden'}>
                    <div className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4">
                                <button
                                    className="w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-md"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="font-medium">{faq.question}</span>
                                    <i className={`fas fa-chevron-${openFaq === index ? 'up' : 'down'} text-gray-500`}></i>
                                </button>
                                {openFaq === index && (
                                    <div className="p-4 bg-gray-50 rounded-b-lg">
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <div className={activeTab === 'contact' ? 'block' : 'hidden'}>
                    <div className="max-w-2xl mx-auto">
                        <form className="bg-white p-6 rounded-lg shadow-md">
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Subject
                                </label>
                                <select
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    required
                                >
                                    <option value="">Select a subject</option>
                                    <option value="order">Order Issue</option>
                                    <option value="return">Return/Refund</option>
                                    <option value="product">Product Inquiry</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-red-500 text-white py-3 rounded-full hover:bg-red-600 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help; 