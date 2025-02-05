const fs = require('fs');
const path = require('path');
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
        rating: 4.6,
        reviews: 189
    }
];

// Function to convert image to base64
const imageToBase64 = (imagePath) => {
    try {
        const image = fs.readFileSync(imagePath);
        return `data:image/jpeg;base64,${image.toString('base64')}`;
    } catch (error) {
        console.error(`Error reading image: ${imagePath}`, error);
        return null;
    }
};

// Function to seed the database
async function seedProducts() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        // Clear existing products
        await Product.deleteMany({});
        console.log('Cleared existing products');

        // Read images and create products
        const productsWithImages = await Promise.all(products.map(async (product, index) => {
            const imageName = product.name.toLowerCase().replace(/ /g, '-') + '.jpg';
            const imagePath = path.join(__dirname, '../../FE/src/assets/images/products', imageName);
            const imageBase64 = imageToBase64(imagePath);

            return {
                ...product,
                image: imageBase64
            };
        }));

        // Insert products into database
        await Product.insertMany(productsWithImages);
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