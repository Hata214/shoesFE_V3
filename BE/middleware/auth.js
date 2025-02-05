const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

exports.isAuthenticatedAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Login first to access this resource'
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = await Admin.findById(decoded.id);

        if (!req.admin) {
            return res.status(401).json({
                success: false,
                message: 'Invalid token'
            });
        }

        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Authentication failed'
        });
    }
}; 