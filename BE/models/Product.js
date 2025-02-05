const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        min: [1, 'Price cannot be less than 1'],
        default: 1
    },
    description: {
        type: String,
        required: [true, 'Please enter product description']
    },
    brand: {
        type: String,
        required: [true, 'Please enter product brand']
    },
    category: {
        type: String,
        required: [true, 'Please select category for this product'],
        enum: {
            values: [
                'Running',
                'Basketball',
                'Casual',
                'Football',
                'Tennis',
                'Training'
            ],
            message: 'Please select correct category for product'
        }
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        min: [1, 'Stock cannot be less than 1'],
        max: [999, 'Stock cannot exceed 999'],
        default: 1
    },
    image: {
        type: String  // Để lưu trữ ảnh dạng Base64
    },
    rating: {
        type: Number,
        default: 0
    },
    reviews: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema); 