import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Help from './pages/Help';
import Wishlist from './pages/Wishlist';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import CheckoutSuccess from './pages/CheckoutSuccess';
import CheckoutFailed from './pages/CheckoutFailed';
import SearchResults from './pages/SearchResults';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './components/NotFound';

// Admin imports
import AdminLogin from './admin/pages/AdminLogin';

// Auth Provider
import { AuthProvider } from './contexts/AuthContext';

// Components
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Layout><Home /></Layout>} />
                    <Route path="/products" element={<Layout><Shop /></Layout>} />
                    <Route path="/about" element={<Layout><About /></Layout>} />
                    <Route path="/cart" element={<Layout><Cart /></Layout>} />
                    <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
                    <Route path="/wishlist" element={<Layout><Wishlist /></Layout>} />
                    <Route path="/profile" element={<Layout><Profile /></Layout>} />
                    <Route path="/help" element={<Layout><Help /></Layout>} />
                    <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
                    <Route path="/checkout/success" element={<Layout><CheckoutSuccess /></Layout>} />
                    <Route path="/checkout/failed" element={<Layout><CheckoutFailed /></Layout>} />
                    <Route path="/search" element={<Layout><SearchResults /></Layout>} />
                    <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
                    <Route path="/terms" element={<Layout><Terms /></Layout>} />
                    <Route path="/login" element={<Layout><Login /></Layout>} />
                    <Route path="/register" element={<Layout><Register /></Layout>} />

                    {/* Admin Routes */}
                    <Route path="/admin/login" element={<AdminLogin />} />

                    {/* All other admin routes show 404 */}
                    <Route path="/admin/*" element={<NotFound />} />

                    {/* 404 Route */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App; 