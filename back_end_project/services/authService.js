const { initializeApp } = require('firebase/app');
const firebaseConfig = require('../firebaseConfig');

const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signOut } = require('firebase/auth');
const { getFirestore, setDoc, getDoc, doc, collection, updateDoc } = require('firebase/firestore');

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

    const userData = {
        uid: user.uid,
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
        // console.log(userData);
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
    return userCredential.user;
};

// Function to get the user role
exports.getUserRole = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const docRef = doc(db, "users", userCredential.user.uid);
    return docRef;
}

// Function to set user role
exports.setUserRole = async (uid, role) => {
    const docRef = doc(db, "users", uid);
    updateDoc(docRef, {
        'role': role
    });
}

// Function to get a collection (just user collection for now)
exports.getCollection = async () => {
    const colRef = collection(db, "users");
    return colRef;
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
