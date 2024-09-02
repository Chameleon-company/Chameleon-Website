const authService = require('../services/authService');
const { doc, getDoc, getFirestore } = require('firebase/firestore'); // Import Firestore methods
const auth = require('firebase/auth'); // Import Firebase auth
exports.userSignUp = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  if (!isStrongPassword(password)) {
    return res.status(400).json({
      error: 'Password does not meet security requirements',
      requirements: {
        minLength: 8, // Minimum password length
        uppercase: true, // Requires uppercase letters
        lowercase: true, // Requires lowercase letters
        digit: true, // Requires at least one digit
        specialCharacter: true, // Requires at least one special character (!@#$%^&*)
      },
    });
  }
  try {
    const user = await authService.createUser(email, password);
    res.status(201).json({ message: 'User signed up successfully', user });
    
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return res.status(400).json({ error: 'Email already exists' });
    } else {
      return res.status(500).json({ error: error.message });
    }
  }
};

exports.userSignIn = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    const user = await authService.signInUser(email, password);

    if (!user.emailVerified) {
      return res.status(401).json({
        error: 'Email is not verified. Please verify your email address.',
      });
    }

    res.status(200).json({ message: 'User signed in successfully', user });
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed' });
  }
};

// Function to check if the password meets security requirements
function isStrongPassword(password) {
  // Define password security requirements
  const minLength = 8; // Minimum password length
  const hasUppercase = /[A-Z]/.test(password); // Contains uppercase letters
  const hasLowercase = /[a-z]/.test(password); // Contains lowercase letters
  const hasDigit = /\d/.test(password); // Contains digits
  const hasSpecialChar = /[!@#$%^&*]/.test(password); // Contains special characters

  // Check if the password meets the requirements
  if (
    password.length < minLength ||
    !hasUppercase ||
    !hasLowercase ||
    !hasDigit ||
    !hasSpecialChar
  ) {
    return false;
  }

  return true;
}

exports.sendVerificationEmail = async (req, res) => {
  const user = auth.currentUser;
  if (user) {
    await sendEmailVerification(user);
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
    res.send(`Hello, ${user.displayName || 'User'}`);
  } else {
    res.send('Please sign in');
  }
};

exports.getUserID = (req, res) => {
  const user = authService.getCurrentUser();
  res.send(user.uid);

}

const firestore = getFirestore(); // Initialize Firestore instance

exports.getUserProfile = async (req, res) => {
  try {
    const currentUser = authService.getCurrentUser();
    if (!currentUser || !currentUser.uid) {
      throw new Error('User is not authenticated');
    }

    const userDocRef = doc(firestore, 'userprofile', currentUser.uid);
    const userDoc = await getDoc(userDocRef); // Await for the asynchronous operation

    if (userDoc.exists()) {
      console.log('User Profile:', userDoc.data());
      res.json(userDoc.data());
    } else {
      console.log('No such document!');
      res.json({});
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
};

const { setDoc, updateDoc } = require('firebase/firestore');

exports.updateUserData = async (req, res) => {
  const user = authService.getCurrentUser();
  console.log(user);

  console.log('updatedatta', req.body);

  if (!user) {
    return res.status(401).json({ error: 'User not authenticated' });
  }

  const userDocRef = doc(firestore, 'userprofile', user.uid);

  try {
    // Using setDoc with merge: true to update the existing document or create one if it doesn't exist
    await setDoc(userDocRef, req.body, { merge: true });

    console.log('User data updated successfully');
    res.status(200).json({ msg: 'Updated data successfully' });
  } catch (err) {
    console.error('Error updating user data:', err);
    res.status(500).json({ error: 'Failed to update the database' });
  }
};
