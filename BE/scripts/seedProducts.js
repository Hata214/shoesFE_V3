const mongoose = require('mongoose');
require('dotenv').config();

// Import Product model
const Product = require('../models/Product');

// Sample product data
const products = [
    {
        name: 'Nike Air Max 270',
        price: 150,
        description: 'The Nike Air Max 270 delivers visible cushioning under every step. Updated for modern comfort, it nods to the original, 1991 Air Max 180 with its exaggerated tongue top and heritage tongue logo.',
        brand: 'Nike',
        category: 'Running',
        stock: 50,
        image: 'https://raw.githubusercontent.com/Hata214/shoesFE_V3/main/FE/src/assets/images/products/nike-air-max-270.jpg',
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
        image: 'https://raw.githubusercontent.com/Hata214/shoesFE_V3/main/FE/src/assets/images/products/nike-air-force-1.jpg',
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
        image: 'https://raw.githubusercontent.com/Hata214/shoesFE_V3/main/FE/src/assets/images/products/nike-air-max-90.jpg',
        rating: 4.6,
        reviews: 189
    }
];

// Function to seed the database
async function seedProducts() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        // Clear existing products
        await Product.deleteMany({});
        console.log('Cleared existing products');

        // Insert products into database
        await Product.insertMany(products);
        console.log('Products seeded successfully');

        // Disconnect from MongoDB
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Error seeding products:', error);
        process.exit(1);
    }
}

// Run the seeding function
seedProducts(); 