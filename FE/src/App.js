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

// Admin imports
import AdminLogin from './admin/pages/AdminLogin';
import AdminLayout from './admin/components/AdminLayout';

function App() {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin/login" element={<AdminLogin />} />

                {/* Admin Routes */}
                <Route path="/admin/*" element={<AdminLayout />} />

                {/* Customer Routes */}
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="about" element={<About />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="product/:id" element={<ProductDetail />} />
                    <Route path="wishlist" element={<Wishlist />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="help" element={<Help />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="checkout/success" element={<CheckoutSuccess />} />
                    <Route path="checkout/failed" element={<CheckoutFailed />} />
                    <Route path="search" element={<SearchResults />} />
                    <Route path="privacy" element={<Privacy />} />
                    <Route path="terms" element={<Terms />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App; 