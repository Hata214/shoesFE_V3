import { useState, useEffect } from 'react';
import api from '../config/api';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            setIsAuthenticated(false);
            setIsLoading(false);
            return;
        }

        try {
            const response = await api.get('/admin/me');
            setIsAuthenticated(response.data.success);
        } catch (error) {
            console.error('Auth check failed:', error);
            localStorage.removeItem('adminToken');
            setIsAuthenticated(false);
        }
        setIsLoading(false);
    };

    const login = async (email, password) => {
        try {
            const response = await api.post('/admin/login', { email, password });
            if (response.data.success) {
                localStorage.setItem('adminToken', response.data.token);
                setIsAuthenticated(true);
                return { success: true };
            }
            return { success: false, error: response.data.message };
        } catch (error) {
            console.error('Login failed:', error);
            return {
                success: false,
                error: error.response?.data?.message || 'Login failed'
            };
        }
    };

    const logout = () => {
        localStorage.removeItem('adminToken');
        setIsAuthenticated(false);
    };

    return {
        isAuthenticated,
        isLoading,
        login,
        logout,
        checkAuthStatus
    };
};

export default useAuth; 