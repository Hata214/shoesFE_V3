import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <nav className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold">
                        SneakerVault
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
                        <Link to="/shop" className="text-gray-600 hover:text-black">Shop</Link>
                        <Link to="/about" className="text-gray-600 hover:text-black">About</Link>
                        <Link to="/help" className="text-gray-600 hover:text-black">Help</Link>
                    </div>

                    {/* User Actions */}
                    <div className="flex items-center space-x-4">
                        <Link to="/search" className="text-gray-600 hover:text-black">
                            <i className="fas fa-search"></i>
                        </Link>
                        <Link to="/wishlist" className="text-gray-600 hover:text-black">
                            <i className="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" className="text-gray-600 hover:text-black">
                            <i className="fas fa-shopping-cart"></i>
                        </Link>
                        <Link to="/auth" className="text-gray-600 hover:text-black">
                            <i className="far fa-user"></i>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header; 