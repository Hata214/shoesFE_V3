const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

// MongoDB connection options
const mongooseOptions = {
    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
};

// Connect to database
mongoose.connect(process.env.MONGODB_URI, mongooseOptions)
    .then(() => console.log('MongoDB Connected Successfully'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

const app = express();

// Middleware
app.use(express.json({ limit: '50mb' }));  // Tăng giới hạn kích thước request
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors({
    origin: 'http://localhost:3000',  // Thay đổi port nếu frontend chạy ở port khác
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Routes
app.use('/api/v1', require('./routes/product'));
app.use('/api/v1', require('./routes/admin'));

// Handle undefined routes
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

const PORT = process.env.PORT || 8000;

// Handle server errors
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please try a different port.`);
        process.exit(1);
    } else {
        console.error('Server error:', err);
        process.exit(1);
    }
}); 