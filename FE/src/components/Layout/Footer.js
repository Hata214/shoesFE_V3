import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">SneakerVault</h3>
                        <p className="text-gray-400 mb-4">
                            Your premier destination for authentic sneakers and streetwear.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/shop" className="text-gray-400 hover:text-white">Shop</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
                            </li>
                            <li>
                                <Link to="/help" className="text-gray-400 hover:text-white">Help</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="font-semibold mb-4">Customer Service</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/shipping" className="text-gray-400 hover:text-white">Shipping Info</Link>
                            </li>
                            <li>
                                <Link to="/returns" className="text-gray-400 hover:text-white">Returns</Link>
                            </li>
                            <li>
                                <Link to="/size-guide" className="text-gray-400 hover:text-white">Size Guide</Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <i className="fas fa-map-marker-alt mr-2"></i>
                                69/68 Đ. Đặng Thuỳ Trâm, Phường 13, Bình Thạnh, Hồ Chí Minh
                            </li>
                            <li>
                                <i className="fas fa-phone mr-2"></i>
                                +84 (123) 456-789
                            </li>
                            <li>
                                <i className="fas fa-envelope mr-2"></i>
                                support@sneakervault.com
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2024 SneakerVault. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 