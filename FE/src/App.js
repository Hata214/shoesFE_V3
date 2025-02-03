import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

// Import pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Auth from './pages/Auth';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Wishlist from './pages/Wishlist';
import Profile from './pages/Profile';
import Help from './pages/Help';
import Checkout from './pages/Checkout';
import CheckoutSuccess from './pages/CheckoutSuccess';
import CheckoutFailed from './pages/CheckoutFailed';
import SearchResults from './pages/SearchResults';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/checkout/success" element={<CheckoutSuccess />} />
                    <Route path="/checkout/failed" element={<CheckoutFailed />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App; 