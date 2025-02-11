const Product = require('../models/Product');

// Create new product => /api/v1/product/new
exports.createProduct = async (req, res) => {
    try {
        // Log request body for debugging
        console.log('Creating product with data:', req.body);

        // Validate required fields
        const requiredFields = ['name', 'price', 'description', 'brand', 'category'];
        const missingFields = requiredFields.filter(field => !req.body[field]);

        if (missingFields.length > 0) {
            console.error('Missing required fields:', missingFields);
            return res.status(400).json({
                success: false,
                error: `Missing required fields: ${missingFields.join(', ')}`
            });
        }

        // Validate price
        if (req.body.price && (isNaN(req.body.price) || req.body.price <= 0)) {
            console.error('Invalid price:', req.body.price);
            return res.status(400).json({
                success: false,
                error: 'Price must be a positive number'
            });
        }

        // Create product
        const product = await Product.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            brand: req.body.brand,
            category: req.body.category,
            stock: req.body.stock || 1,
            image: req.body.image || null
        });

        console.log('Hello World - Product created successfully');
        res.status(201).json({
            success: true,
            product
        });
    } catch (error) {
        console.error('Error creating product:', error);
        // Check for validation errors from Mongoose
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                error: Object.values(error.errors).map(err => err.message)
            });
        }
        // Check for duplicate key error
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                error: 'Product with this name already exists'
            });
        }
        res.status(500).json({
            success: false,
            error: 'Internal server error while creating product'
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

        console.log('Hello World - Products fetched successfully');
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
        console.log('Hello World - Single product fetched successfully');
        res.status(200).json({
            success: true,
            product
        });
    } catch (error) {
        console.error('Error fetching product:', error);
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
        console.log('Hello World - Product updated successfully');
        res.status(200).json({
            success: true,
            product
        });
    } catch (error) {
        console.error('Error updating product:', error);
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
        console.log('Hello World - Product deleted successfully');
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}; 