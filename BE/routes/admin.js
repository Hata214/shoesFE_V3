const express = require('express');
const router = express.Router();

const {
    registerAdmin,
    loginAdmin,
    getAdminProfile
} = require('../controllers/adminController');

const { isAuthenticatedAdmin } = require('../middleware/auth');

router.route('/admin/register').post(registerAdmin);
router.route('/admin/login').post(loginAdmin);
router.route('/admin/me').get(isAuthenticatedAdmin, getAdminProfile);

module.exports = router; 