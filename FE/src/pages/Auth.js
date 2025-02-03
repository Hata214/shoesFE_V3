import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const toggleAuth = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add authentication logic here
        console.log('Form submitted');
    };

    return (
        <div className="font-['Poppins'] bg-gradient-to-br from-gray-100 to-white min-h-screen flex items-center justify-center p-4">
            {/* Logo and Back Button */}
            <div className="fixed top-8 left-8 z-10">
                <Link to="/" className="flex items-center gap-2 text-black hover:text-red-500 transition-colors">
                    <i className="fas fa-arrow-left"></i>
                    <span>Back to Home</span>
                </Link>
            </div>

            <div className="container max-w-6xl mx-auto">
                <div className="relative min-h-[600px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-auth-pattern opacity-10"></div>

                    {/* Left Panel */}
                    <div className="w-1/2 bg-gradient-to-br from-gray-900 to-black p-12 flex flex-col justify-center relative">
                        {/* Decorative Elements */}
                        <div className="absolute -top-20 -left-20 w-40 h-40 bg-red-500 rounded-full filter blur-[100px] opacity-20 animate-float"></div>
                        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-red-500 rounded-full filter blur-[100px] opacity-20 animate-float delay-1000"></div>

                        {/* Auth State Message */}
                        <div className={`text-white space-y-6 animate-slide-in relative z-10 ${!isLogin && 'hidden'}`}>
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Welcome Back!</h1>
                            <p className="text-lg text-gray-400">Sign in to continue your sneaker journey</p>
                            <button onClick={toggleAuth}
                                className="mt-8 px-8 py-3 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300">
                                Create Account
                            </button>
                        </div>

                        <div className={`text-white space-y-6 animate-slide-in relative z-10 ${isLogin && 'hidden'}`}>
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Join SneakerVault</h1>
                            <p className="text-lg text-gray-400">Already have an account? Sign in to continue</p>
                            <button onClick={toggleAuth}
                                className="mt-8 px-8 py-3 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300">
                                Sign In
                            </button>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="w-1/2 bg-white p-12 flex flex-col justify-center">
                        {/* Login Form */}
                        <form onSubmit={handleSubmit} className={`space-y-6 transition-all duration-300 ${!isLogin && 'hidden'}`}>
                            <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
                            <div className="space-y-4">
                                <div className="group transition-transform duration-200 hover:translate-x-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <div className="relative">
                                        <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                        <input type="email" required
                                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300" />
                                    </div>
                                </div>
                                <div className="group transition-transform duration-200 hover:translate-x-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                    <div className="relative">
                                        <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                        <input type="password" required
                                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500" />
                                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                                    </label>
                                    <Link to="/forgot-password" className="text-sm text-red-500 hover:text-red-700">Forgot password?</Link>
                                </div>
                                <button type="submit"
                                    className="w-full py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full hover:from-red-700 hover:to-red-600 transition-all duration-300 transform hover:scale-[1.02]">
                                    Sign In
                                </button>
                            </div>
                        </form>

                        {/* Register Form */}
                        <form onSubmit={handleSubmit} className={`space-y-6 transition-all duration-300 ${isLogin && 'hidden'}`}>
                            <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
                            <div className="space-y-4">
                                <div className="group transition-transform duration-200 hover:translate-x-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <div className="relative">
                                        <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                        <input type="text" required
                                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300" />
                                    </div>
                                </div>
                                <div className="group transition-transform duration-200 hover:translate-x-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <div className="relative">
                                        <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                        <input type="email" required
                                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300" />
                                    </div>
                                </div>
                                <div className="group transition-transform duration-200 hover:translate-x-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                    <div className="relative">
                                        <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                        <input type="password" required
                                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300" />
                                    </div>
                                </div>
                                <div>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            required
                                            className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                                            checked={agreeToTerms}
                                            onChange={(e) => setAgreeToTerms(e.target.checked)}
                                        />
                                        <span className="ml-2 text-sm text-gray-600">
                                            I agree to the <Link to="/terms" className="text-red-500 hover:text-red-700">Terms</Link> and{' '}
                                            <Link to="/privacy" className="text-red-500 hover:text-red-700">Privacy Policy</Link>
                                        </span>
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    disabled={!agreeToTerms}
                                    className={`w-full py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full transition-all duration-300 transform hover:scale-[1.02] ${!agreeToTerms && 'opacity-50 cursor-not-allowed'}`}
                                >
                                    Create Account
                                </button>
                            </div>
                        </form>

                        {/* Social Login */}
                        <div className="mt-6">
                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">
                                        Or continue with
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <button type="button" className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <i className="fab fa-google text-red-500"></i>
                                </button>
                                <button type="button" className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <i className="fab fa-facebook-f text-blue-600"></i>
                                </button>
                                <button type="button" className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <i className="fab fa-apple"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth; 