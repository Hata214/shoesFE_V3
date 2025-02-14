const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

exports.isAuthenticatedAdmin = async (req, res, next) => {
    try {
        // Get token from Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'Please login first to access this resource'
            });
        }

        const token = authHeader.split(' ')[1];

        // Log token for debugging
        console.log('Received token:', token ? 'Token exists' : 'No token');

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded token:', decoded);

        // Get admin from token
        const admin = await Admin.findById(decoded.id);
        if (!admin) {
            return res.status(401).json({
                success: false,
                message: 'Invalid Authentication Token'
            });
        }

        // Add admin to request
        req.admin = admin;
        next();
    } catch (error) {
        console.error('Auth Error:', error);
        return res.status(401).json({
            success: false,
            message: 'Not authorized to access this resource'
        });
    }
}; 