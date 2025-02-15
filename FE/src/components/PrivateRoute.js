import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const token = localStorage.getItem('adminToken');

    if (!token) {
        // Redirect to login page with return url
        return <Navigate to="/admin/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute; 