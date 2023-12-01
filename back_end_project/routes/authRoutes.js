const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// User registration
router.post('/signup', authController.userSignUp);

// User login
router.post('/signin', authController.userSignIn);

// Send email verification
router.post('/send-verification-email', authController.sendVerificationEmail);

// Send password reset email
router.post('/send-password-reset-email', authController.sendPasswordResetEmail);

// User logout
router.post('/signout', authController.userSignOut);

// Login status
router.get('/status', authController.LoginStatus);

module.exports = router;
