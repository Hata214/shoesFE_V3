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

// Public routes
router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);

// Protected routes - require admin authentication
router.route('/product/new').post(isAuthenticatedAdmin, processImage, createProduct);
router.route('/product/:id')
    .put(isAuthenticatedAdmin, processImage, updateProduct)
    .delete(isAuthenticatedAdmin, deleteProduct);

module.exports = router; 