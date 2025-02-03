import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-800">
                            Welcome To Shoe Shop
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                            consequat consequat enim, non auctor massa ultrices non. Morbi
                            sed odio massa. Quisque at vehicula tellus, sed tincidunt augue.
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                            Read More
                        </button>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="/images/about.jpg"
                                alt="About Us"
                                className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; 