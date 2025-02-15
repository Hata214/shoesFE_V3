const express = require('express');
const router = express.Router();
const { processImage } = require('../middleware/imageProcessor');
const { isAuthenticatedAdmin } = require('../middleware/auth');

const {
    getProducts,
    createProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

// Public routes - No authentication required
router.get('/products', getProducts);
router.get('/product/:id', getSingleProduct);

// Protected routes - Admin authentication required
router.post('/product/new', isAuthenticatedAdmin, processImage, createProduct);
router.put('/product/:id', isAuthenticatedAdmin, processImage, updateProduct);
router.delete('/product/:id', isAuthenticatedAdmin, deleteProduct);

module.exports = router; 