import axios from 'axios';

// Constants
const BASE_URL = process.env.REACT_APP_API_URL || 'https://shoes-fe-v3-backend.vercel.app/api/v1';

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
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'https://shoes-fe-v3-frontend.vercel.app'
    },
    withCredentials: true,
    timeout: 30000 // 30 seconds timeout
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        // Add CORS headers
        config.headers['Access-Control-Allow-Origin'] = 'https://shoes-fe-v3-frontend.vercel.app';
        config.headers['Access-Control-Allow-Credentials'] = 'true';

        // Log request
        console.log('API Request:', {
            url: config.url,
            method: config.method,
            data: config.data,
            headers: config.headers,
            baseURL: config.baseURL
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
        // Log response
        console.log('API Response:', {
            status: response.status,
            data: response.data,
            headers: response.headers
        });
        return response;
    },
    (error) => {
        // Log error details
        if (error.response) {
            // Server trả về response với status code nằm ngoài range 2xx
            console.error('API Response Error:', {
                data: error.response.data,
                status: error.response.status,
                headers: error.response.headers
            });
        } else if (error.request) {
            // Request đã được gửi nhưng không nhận được response
            console.error('API Request Error:', {
                request: error.request,
                message: 'No response received'
            });
        } else {
            // Có lỗi khi setting up request
            console.error('API Error:', {
                message: error.message,
                config: error.config
            });
        }
        return Promise.reject(error);
    }
);

// Exports
export const API_URL = BASE_URL;
export { getApiUrl };
export default api; 