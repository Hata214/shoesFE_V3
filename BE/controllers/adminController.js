const Admin = require('../models/Admin');

// Register admin => /api/v1/admin/register
exports.registerAdmin = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const admin = await Admin.create({
            username,
            email,
            password
        });

        const token = admin.getJwtToken();

        res.status(201).json({
            success: true,
            token,
            admin: {
                id: admin._id,
                username: admin.username,
                email: admin.email
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// Login admin => /api/v1/admin/login
exports.loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please enter email and password'
            });
        }

        const admin = await Admin.findOne({ email }).select('+password');

        if (!admin) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        const isPasswordMatched = await admin.comparePassword(password);

        if (!isPasswordMatched) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        const token = admin.getJwtToken();

        res.status(200).json({
            success: true,
            token,
            admin: {
                id: admin._id,
                username: admin.username,
                email: admin.email
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Get admin profile => /api/v1/admin/me
exports.getAdminProfile = async (req, res) => {
    try {
        const admin = await Admin.findById(req.admin.id);

        res.status(200).json({
            success: true,
            admin
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}; 