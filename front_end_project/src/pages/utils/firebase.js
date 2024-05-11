import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import userEvent from "@testing-library/user-event";

const firebaseConfig = {
  apiKey: "AIzaSyCgBPNTLuvfKQpZiOCJs1PRKVgy3nDhwn0",
  authDomain: "chameleon-website-login-page.firebaseapp.com",
  projectId: "chameleon-website-login-page",
  storageBucket: "chameleon-website-login-page.appspot.com",
  messagingSenderId: "462355158431",
  appId: "1:462355158431:web:ea9cfdc4489153ca8999aa",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

signOut(auth)
  .then(() => {
    console.log("logged out successfully");
  })
  .catch((error) => {
    error.message();
  });
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth.email) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { fullname, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        fullname,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signinAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
