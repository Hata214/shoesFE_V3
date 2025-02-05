import axiosInstance from './axiosConfig';
import { endpoints } from '../config/api';

// Get all products
export const getAllProducts = async () => {
    try {
        const response = await axiosInstance.get(endpoints.products);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// Get single product
export const getProduct = async (id) => {
    try {
        const response = await axiosInstance.get(`${endpoints.product}/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// Create new product
export const createProduct = async (productData) => {
    try {
        const response = await axiosInstance.post(endpoints.newProduct, productData);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// Update product
export const updateProduct = async (id, productData) => {
    try {
        const response = await axiosInstance.put(`${endpoints.product}/${id}`, productData);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// Delete product
export const deleteProduct = async (id) => {
    try {
        const response = await axiosInstance.delete(`${endpoints.product}/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}; 