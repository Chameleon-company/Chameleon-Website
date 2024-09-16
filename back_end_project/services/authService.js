const { initializeApp } = require('firebase/app');
const firebaseConfig = require('../firebaseConfig');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signOut } = require('firebase/auth');

// Initialize Firebase
initializeApp(firebaseConfig);

// Get Firebase Authentication instance
const auth = getAuth();

// Function to validate password
function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
        throw new Error(`Password must be at least ${minLength} characters long.`);
    }
    if (!hasUpperCase) {
        throw new Error('Password must contain at least one uppercase letter.');
    }
    if (!hasLowerCase) {
        throw new Error('Password must contain at least one lowercase letter.');
    }
    if (!hasNumbers) {
        throw new Error('Password must contain at least one number.');
    }
    if (!hasSpecialChar) {
        throw new Error('Password must contain at least one special character.');
    }

    return true;
}

// Function to create a user with email and password
exports.createUser = async (email, password) => {
    // Validate the password before creating the user
    validatePassword(password);

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await sendVerificationEmail();
    return userCredential.user;
};

// Function to sign in a user with email and password
exports.signInUser = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
};

// Function to send a verification email
async function sendVerificationEmail() {
    const user = auth.currentUser;
    if (user) {
        await sendEmailVerification(user);
    }
}

// Function to send a password reset email
exports.sendPasswordResetEmail = async (email) => {
    await sendPasswordResetEmail(auth, email);
};

// Function to sign out the user
exports.signOutUser = async () => {
    await signOut(auth);
};

// Function to get the current user
exports.getCurrentUser = () => {
    return auth.currentUser;
};
