const { initializeApp } = require('firebase/app');
const firebaseConfig = require('../firebaseConfig');

const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
} = require('firebase/auth');
const {
  getUserProfile,
  updateUserData,
} = require('../controllers/authController');

// Initialize Firebase
initializeApp(firebaseConfig);

// Get Firebase Authentication instance
const auth = getAuth();

// Function to create a user with email and password
exports.createUser = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  await sendVerificationEmail();
  return userCredential.user;
};

// Function to sign in a user with email and password
exports.signInUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );
  console.log(userCredential?._tokenResponse?.localId);
  const user = userCredential.user;

  return user;
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
exports.getUserProfile = () => {
  return getUserProfile(auth);
};

exports.UpdateUserData = (UpdatingData) => {
  return updateUserData(UpdatingData);
};
