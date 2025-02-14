import axios from 'axios';

// Constants
const BASE_URL = process.env.REACT_APP_API_URL;

// API endpoints
export const endpoints = {
    products: '/products',
    product: '/product',
    newProduct: '/product/new',
    adminLogin: '/admin/login'
};

// Axios instance configuration
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('adminToken');

        // Debug logging
        console.log('API Request:', {
            url: config.url,
            baseURL: config.baseURL,
            method: config.method
        });

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            // Debug logging
            console.log('Token found:', token.substring(0, 20) + '...');
            console.log('Full headers:', config.headers);
        } else {
            console.log('No token found in localStorage');
        }

        return config;
    },
    (error) => {
        console.error('Request interceptor error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    (response) => {
        console.log('API Response:', {
            status: response.status,
            url: response.config.url
        });
        return response;
    },
    (error) => {
        if (error.response) {
            console.error('API Error Response:', {
                status: error.response.status,
                data: error.response.data,
                headers: error.response.headers,
                url: error.config.url
            });

            if (error.response.status === 401) {
                console.log('Token expired or invalid - redirecting to login');
                localStorage.removeItem('adminToken');
                window.location.href = '/admin/login';
            }
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Error setting up request:', error.message);
        }

        return Promise.reject(error);
    }
);

export const API_URL = BASE_URL;
export default api; 