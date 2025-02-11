import axios from 'axios';

// Constants
const BASE_URL = process.env.REACT_APP_API_URL || 'https://shoes-fe-v3-fprf.vercel.app/api/v1';

// Helper function to handle API URL
const getApiUrl = (endpoint) => {
    return `${BASE_URL}${endpoint}`;
};

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
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    validateStatus: function (status) {
        return status >= 200 && status < 500;
    }
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        console.log('API Request:', {
            url: config.url,
            method: config.method,
            headers: config.headers
        });
        return config;
    },
    (error) => {
        console.error('API Request Error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    (response) => {
        console.log('API Response:', {
            status: response.status,
            data: response.data
        });
        return response;
    },
    (error) => {
        console.error('API Response Error:', {
            message: error.message,
            response: error.response?.data
        });
        return Promise.reject(error);
    }
);

// Exports
export const API_URL = BASE_URL;
export { getApiUrl };
export default api; 