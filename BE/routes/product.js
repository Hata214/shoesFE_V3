const express = require('express');
const router = express.Router();
const { processImage } = require('../middleware/imageProcessor');

const {
    getProducts,
    createProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

router.route('/products').get(getProducts);
router.route('/product/new').post(processImage, createProduct);
router.route('/product/:id')
    .get(getSingleProduct)
    .put(processImage, updateProduct)
    .delete(deleteProduct);

module.exports = router; 