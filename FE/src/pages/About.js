import React from 'react';

const About = () => {
    return (
        <div className="pt-24 pb-16">
            {/* Hero Section */}
            <section className="bg-gray-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-6">About SneakerVault</h1>
                        <p className="text-xl text-gray-300">
                            Your premier destination for authentic sneakers and streetwear.
                            We're passionate about bringing you the best selection of footwear.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
                        <p className="text-gray-600 mb-6">
                            Founded in 2024, SneakerVault began with a simple mission: to provide sneaker enthusiasts
                            with authentic, high-quality footwear. What started as a small passion project has grown
                            into one of the most trusted names in the sneaker community.
                        </p>
                        <p className="text-gray-600 mb-6">
                            We take pride in our curated selection of sneakers, ensuring that every pair meets our
                            strict standards for authenticity and quality. Our team of experts carefully verifies
                            each product, giving you peace of mind with every purchase.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-check text-2xl text-white"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Authenticity</h3>
                            <p className="text-gray-600">
                                We guarantee 100% authentic products, verified by our expert team.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-heart text-2xl text-white"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Customer First</h3>
                            <p className="text-gray-600">
                                Your satisfaction is our top priority, with exceptional service every step of the way.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-gem text-2xl text-white"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Quality</h3>
                            <p className="text-gray-600">
                                We maintain the highest standards for every product in our inventory.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About; 