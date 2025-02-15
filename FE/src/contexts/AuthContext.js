import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../config/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Kiểm tra token và lấy thông tin user khi component mount
    useEffect(() => {
        const initializeAuth = async () => {
            const token = localStorage.getItem('adminToken');
            if (token) {
                try {
                    const response = await api.get('/admin/me');
                    if (response.data.success) {
                        setUser(response.data.admin);
                        setIsAuthenticated(true);
                    } else {
                        handleLogout();
                    }
                } catch (error) {
                    console.error('Auth initialization error:', error);
                    handleLogout();
                }
            }
            setLoading(false);
        };

        initializeAuth();
    }, []);

    const handleLogin = async (email, password) => {
        try {
            const response = await api.post('/admin/login', { email, password });

            if (response.data.success) {
                const { token, admin } = response.data;

                // Lưu token vào localStorage
                localStorage.setItem('adminToken', token);

                // Cập nhật state
                setUser(admin);
                setIsAuthenticated(true);

                return { success: true };
            }

            return {
                success: false,
                error: response.data.message || 'Login failed'
            };
        } catch (error) {
            console.error('Login error:', error);
            return {
                success: false,
                error: error.response?.data?.message || 'Login failed'
            };
        }
    };

    const handleLogout = () => {
        // Xóa token từ localStorage
        localStorage.removeItem('adminToken');

        // Reset state
        setUser(null);
        setIsAuthenticated(false);
    };

    const checkAuthStatus = async () => {
        try {
            const response = await api.get('/admin/me');
            return response.data.success;
        } catch (error) {
            console.error('Auth check failed:', error);
            handleLogout();
            return false;
        }
    };

    const value = {
        isAuthenticated,
        user,
        loading,
        login: handleLogin,
        logout: handleLogout,
        checkAuthStatus
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext; 