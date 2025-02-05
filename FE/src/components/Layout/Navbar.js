import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <span className="text-xl font-bold">SneakerVault</span>
                        </Link>

                        {/* Navigation Links */}
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link
                                to="/"
                                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
                            >
                                Home
                            </Link>
                            <Link
                                to="/shop"
                                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
                            >
                                Shop
                            </Link>
                            <Link
                                to="/about"
                                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
                            >
                                About
                            </Link>
                            <Link
                                to="/help"
                                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
                            >
                                Help
                            </Link>
                        </div>
                    </div>

                    {/* Right side buttons */}
                    <div className="flex items-center">
                        <Link
                            to="/search"
                            className="p-2 text-gray-400 hover:text-gray-500"
                        >
                            <i className="fas fa-search"></i>
                        </Link>
                        <Link
                            to="/wishlist"
                            className="p-2 text-gray-400 hover:text-gray-500"
                        >
                            <i className="fas fa-heart"></i>
                        </Link>
                        <Link
                            to="/cart"
                            className="p-2 text-gray-400 hover:text-gray-500"
                        >
                            <i className="fas fa-shopping-cart"></i>
                        </Link>
                        <Link
                            to="/login"
                            className="p-2 text-gray-400 hover:text-gray-500"
                        >
                            <i className="fas fa-user"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 