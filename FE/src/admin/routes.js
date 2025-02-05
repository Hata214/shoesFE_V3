import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/Dashboard';
import ProductManagement from './pages/ProductManagement';

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<ProductManagement />} />
        </Routes>
    );
};

export default AdminRoutes; 