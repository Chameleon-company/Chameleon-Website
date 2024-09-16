const authService = require('../services/authService');
const { getAuth } = require('firebase/auth');

const auth = getAuth();

exports.userSignUp = async (req, res) => {
  const { email, password } = req.body;

  if (!isStrongPassword(password)) {
    return res.status(400).json({ 
      error: 'Password does not meet security requirements',
      requirements: {
        minLength: 8,            // Minimum password length
        uppercase: true,         // Requires uppercase letters
        lowercase: true,         // Requires lowercase letters
        digit: true,             // Requires at least one digit
        specialCharacter: true,  // Requires at least one special character (!@#$%^&*)
      }
    });
  }

  try {
    const user = await authService.createUser(email, password);
    res.status(201).json({ message: 'User signed up successfully. Please verify your email.', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.userSignIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await authService.signInUser(email, password);
    
    if (!user.emailVerified) {
      return res.status(401).json({ error: 'Email is not verified. Please verify your email address.' });
    }

    res.status(200).json({ message: 'User signed in successfully', user });
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed' });
  }
};

// Function to check if the password meets security requirements
function isStrongPassword(password) {
  const minLength = 8;  // Minimum password length
  const hasUppercase = /[A-Z]/.test(password);  // Contains uppercase letters
  const hasLowercase = /[a-z]/.test(password);  // Contains lowercase letters
  const hasDigit = /\d/.test(password);  // Contains digits
  const hasSpecialChar = /[!@#$%^&*]/.test(password);  // Contains special characters

  return (
    password.length >= minLength &&
    hasUppercase &&
    hasLowercase &&
    hasDigit &&
    hasSpecialChar
  );
}

exports.sendVerificationEmail = async (req, res) => {
  try {
    const user = auth.currentUser;
    if (user) {
      await authService.sendVerificationEmail();
      res.status(200).json({ message: 'Verification email sent' });
    } else {
      res.status(401).json({ error: 'User not authenticated' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.sendPasswordResetEmail = async (req, res) => {
  const { email } = req.body;
  
  try {
    await authService.sendPasswordResetEmail(email);
    res.status(200).json({ message: 'Password reset email sent' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.userSignOut = async (req, res) => {
  try {
    await authService.signOutUser();
    res.status(200).json({ message: 'User signed out successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.LoginStatus = (req, res) => {
  const user = authService.getCurrentUser();
  if (user) {
    res.status(200).json({ message: `Hello, ${user.displayName || 'User'}` });
  } else {
    res.status(401).json({ message: 'Please sign in' });
  }
};

exports.getUserID = (req, res) => {
  const user = authService.getCurrentUser();
  if (user) {
    res.status(200).json({ uid: user.uid });
  } else {
    res.status(401).json({ error: 'User not authenticated' });
  }
};
