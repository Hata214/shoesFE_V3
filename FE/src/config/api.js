export const API_URL = process.env.REACT_APP_API_URL || 'https://shoes-fe-v3-backend-bdh0hh1t1-hata214s-projects.vercel.app/api/v1';

export const endpoints = {
    products: '/products',
    product: '/product',
    newProduct: '/product/new',
};

// Add axios configuration
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'https://shoes-fe-v3-backend-bdh0hh1t1-hata214s-projects.vercel.app/api/v1',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    validateStatus: function (status) {
        return status >= 200 && status < 500;
    }
});

// Add request interceptor for debugging
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

// Add response interceptor for debugging
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

export default api; 