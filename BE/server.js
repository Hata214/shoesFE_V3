const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

// MongoDB connection options
const mongooseOptions = {
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    connectTimeoutMS: 10000,
    keepAlive: true,
    keepAliveInitialDelay: 300000,
    maxPoolSize: 50,
    minPoolSize: 10,
    maxIdleTimeMS: 10000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,
    w: "majority"
};

const app = express();

// Basic middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Enable CORS for all routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://shoes-fe-v3-frontend.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// Routes
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to ShoeShop API'
    });
});

app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is healthy',
        environment: process.env.NODE_ENV,
        mongodbUri: process.env.MONGODB_URI ? 'Configured' : 'Missing',
        corsOrigin: 'https://shoes-fe-v3-frontend.vercel.app'
    });
});

// API Routes
app.use('/api/v1', require('./routes/product'));
app.use('/api/v1', require('./routes/admin'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Connect to database and start server
const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected');

        const PORT = process.env.PORT || 8080;
        app.listen(PORT, () => {
            console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
            console.log('CORS Origin: https://shoes-fe-v3-frontend.vercel.app');
        });
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
};

startServer(); 