const { initializeApp } = require('firebase/app');
const firebaseConfig = require('../firebaseConfig');

const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signOut } = require('firebase/auth');
const { getFirestore, setDoc, getDoc, doc } = require('firebase/firestore');

// Initialize Firebase
initializeApp(firebaseConfig);

// Get Firebase Authentication instance
const auth = getAuth();

// Get Firestore
const db = getFirestore();

// Function to create a user with email and password
exports.createUser = async (email, password, fname, lname, role, project, phone, github) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await sendVerificationEmail();

    // Get user data from the web page
    // const firstName = document.getElementById('fname').value;
    // const lastName = document.getElementById('lname').value;
    // const role = document.getElementById('role').value;
    // const project = document.getElementById('project').value;
    // const phone = document.getElementById('phone').value;
    // const github = document.getElementById('github').value;

    const userData = {
        email: email,
        firstName: fname,
        lastName: lname,
        role: role,
        project: project,
        phone: phone,
        github: github
    }

    const docRef = doc(db, "users", user.uid);
    try {
        console.log(userData);
        setDoc(docRef, userData);
    }
    catch (error) {
        console.error("Error writing document", error);
    }
    return user;
};

// Function to sign in a user with email and password
exports.signInUser = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // sessionStorage.setItem('loggedInUserId', userCredential.user.uid);
    return userCredential.user;
};

exports.getUserRole = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // console.log(userCredential.user.uid);
    const docRef = doc(db, "users", userCredential.user.uid);
    var userRole = '';
    getDoc(docRef)
    .then((docSnap) => {
        if(docSnap.exists()) {
            userRole = docSnap.data().role;
            console.log(userRole);
            // sessionStorage.setItem('userRole', userRole);
        }
    })
    return userRole;
}

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
