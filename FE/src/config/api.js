export const API_URL = process.env.REACT_APP_API_URL || 'https://shoes-fe-v3-backend-bdh0hh1t1-hata214s-projects.vercel.app/api/v1';

export const endpoints = {
    products: '/products',
    product: '/product',
    newProduct: '/product/new',
};

// Add axios configuration
import axios from 'axios';

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api; 