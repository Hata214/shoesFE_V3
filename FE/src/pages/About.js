import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
                <div className="prose max-w-none">
                    <p className="text-lg text-gray-600 mb-6">
                        Welcome to SneakerVault, your premier destination for authentic sneakers.
                        We are passionate about bringing you the latest and most exclusive sneaker releases
                        from top brands around the world.
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        Our mission is to provide sneaker enthusiasts with a seamless shopping experience
                        and access to authentic products. We carefully curate our collection to ensure
                        you get only the best quality footwear.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About; 