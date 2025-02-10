const Product = require('../models/Product');

// Create new product => /api/v1/product/new
exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            product
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// Get all products => /api/v1/products
exports.getProducts = async (req, res) => {
    try {
        // Add timeout for database query with longer duration
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Database query timeout')), 30000)
        );

        const queryPromise = Product.find().lean().exec();

        // Race between query and timeout
        const products = await Promise.race([queryPromise, timeoutPromise]);

        // Send response in chunks if data is large
        res.status(200).json({
            success: true,
            count: products.length,
            products: products.map(product => ({
                ...product,
                image: product.image ? product.image.substring(0, 100) + '...' : null // Truncate base64 for response
            }))
        });
    } catch (error) {
        console.error('Product fetch error:', error);
        res.status(error.message === 'Database query timeout' ? 504 : 500).json({
            success: false,
            error: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
};

// Get single product details => /api/v1/product/:id
exports.getSingleProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        res.status(200).json({
            success: true,
            product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Update Product => /api/v1/product/:id
exports.updateProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            success: true,
            product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Delete Product => /api/v1/product/:id
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}; 