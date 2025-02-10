const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

// MongoDB connection options
const mongooseOptions = {
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
    connectTimeoutMS: 30000
};

const app = express();

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// CORS configuration
const allowedOrigins = [
    'http://localhost:3000',
    'https://shoes-fe-v3.vercel.app',
    'https://shoes-fe-v3-fullweb.vercel.app'
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};
app.use(cors(corsOptions));

// Root route
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to ShoeShop API'
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    console.log('Health check endpoint called');
    res.status(200).json({
        success: true,
        message: 'Server is healthy',
        environment: process.env.NODE_ENV,
        mongodbUri: process.env.MONGODB_URI ? 'Configured' : 'Missing',
        corsOrigin: process.env.CORS_ORIGIN || 'Default: http://localhost:3000'
    });
});

// Connect to database
mongoose.connect(process.env.MONGODB_URI, mongooseOptions)
    .then(() => {
        console.log('MongoDB Connected Successfully');
        console.log('Environment:', process.env.NODE_ENV);
        console.log('CORS Origin:', process.env.CORS_ORIGIN);
        console.log('Port:', process.env.PORT);
        console.log('Routes initialized');

        // Routes
        app.use('/api/v1', require('./routes/product'));
        app.use('/api/v1', require('./routes/admin'));

        // Handle undefined routes
        app.use('*', (req, res) => {
            console.log('404 Error - Route not found:', req.originalUrl);
            res.status(404).json({
                success: false,
                message: 'Route not found',
                path: req.originalUrl
            });
        });

        // Start server
        const PORT = process.env.PORT || 8080;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`);
        });
    })
    .catch(err => {
        console.error('MongoDB connection error details:', {
            name: err.name,
            message: err.message,
            code: err.code,
            stack: err.stack
        });
        process.exit(1);
    }); 