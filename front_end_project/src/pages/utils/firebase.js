import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import userEvent from "@testing-library/user-event";

const firebaseConfig =
{
    apiKey: "AIzaSyAm1ebex7fJDBas2UJs-qh8uQ3Wr6d60cU",
    authDomain: "login-page-c4e72.firebaseapp.com",
    projectId: "login-page-c4e72",
    storageBucket: "login-page-c4e72.appspot.com",
    messagingSenderId: "111235036213",
    appId: "1:111235036213:web:c337c5f6aa95a9585cad7c",
    // measurementId: "G-8K8JWNKKL1"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

signOut(auth).then(() => {
    console.log("logged out successfully");
}).catch((error) => {
    error.message();
});
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth.email) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { fullname, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef,
                {
                    fullname,
                    email,
                    createdAt,
                    ...additionalInformation
                })
        }
        catch (error) {
            console.log('error', error.message)
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signinAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}

