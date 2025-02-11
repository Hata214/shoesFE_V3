const mongoose = require('mongoose');
const Admin = require('../models/Admin');
require('dotenv').config();

async function createAdmin() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
            connectTimeoutMS: 30000
        });
        console.log('Connected to MongoDB');

        // Create admin
        const admin = await Admin.create({
            username: 'admin',
            email: 'admin@shoeshop.com',
            password: 'admin123'
        });

        console.log('Admin created successfully:', {
            username: admin.username,
            email: admin.email
        });

    } catch (error) {
        console.error('Error creating admin:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
}

createAdmin(); 