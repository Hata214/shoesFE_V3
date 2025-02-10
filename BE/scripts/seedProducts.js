const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Import Product model
const Product = require('../models/Product');

// Function to convert image to base64
const imageToBase64 = (imagePath) => {
    try {
        // Read image file
        const image = fs.readFileSync(imagePath);
        // Convert to base64 and prepend data URI scheme
        return `data:image/jpeg;base64,${image.toString('base64')}`;
    } catch (error) {
        console.error('Error converting image to base64:', error);
        return null;
    }
};

// Sample product data
const products = [
    {
        name: 'Nike Air Max 270',
        price: 150,
        description: 'The Nike Air Max 270 delivers visible cushioning under every step. Updated for modern comfort, it nods to the original, 1991 Air Max 180 with its exaggerated tongue top and heritage tongue logo.',
        brand: 'Nike',
        category: 'Running',
        stock: 50,
        image: imageToBase64(path.join(__dirname, '../../FE/src/assets/images/products/nike-air-max-270.jpg')),
        rating: 4.5,
        reviews: 128
    },
    {
        name: 'Nike Air Force 1',
        price: 100,
        description: 'The radiance lives on in the Nike Air Force 1, the basketball original that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine.',
        brand: 'Nike',
        category: 'Basketball',
        stock: 75,
        image: imageToBase64(path.join(__dirname, '../../FE/src/assets/images/products/nike-air-force-1.jpg')),
        rating: 4.8,
        reviews: 256
    },
    {
        name: 'Nike Air Max 90',
        price: 120,
        description: 'The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle outsole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey.',
        brand: 'Nike',
        category: 'Running',
        stock: 35,
        image: imageToBase64(path.join(__dirname, '../../FE/src/assets/images/products/nike-air-max-90.jpg')),
        rating: 4.6,
        reviews: 189
    }
];

// Function to seed the database
async function seedProducts() {
    try {
        // Connect to MongoDB with increased timeout
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
            connectTimeoutMS: 30000
        });
        console.log('Connected to MongoDB');

        // Clear existing products
        await Product.deleteMany({});
        console.log('Cleared existing products');

        // Filter out products with failed image conversion
        const validProducts = products.filter(product => product.image !== null);

        if (validProducts.length === 0) {
            throw new Error('No valid products to seed');
        }

        // Insert products into database
        await Product.insertMany(validProducts);
        console.log('Products seeded successfully');

    } catch (error) {
        console.error('Error seeding products:', error);
        process.exit(1);
    } finally {
        // Disconnect from MongoDB
        try {
            await mongoose.disconnect();
            console.log('Disconnected from MongoDB');
        } catch (error) {
            console.error('Error disconnecting from MongoDB:', error);
        }
    }
}

// Run the seeding function
seedProducts(); 