const { initializeApp } = require('firebase/app');
const firebaseConfig = require('../firebaseConfig');
const { getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc, collection, getDocs } = require('firebase/firestore');

// Initialize Firebase
initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore();

// Define the collection reference
const commentsCollection = collection(db, 'comments');


// Local in-memory data store for testing
let commentsList = [
    { id: 1, text: 'This is the first comment', user: 'User1', time: new Date().toLocaleString() },
    { id: 2, text: 'This is the second comment', user: 'User2', time: new Date().toLocaleString() }
];

exports.getComments = async () => {
    try {
        //const snapshot = await getDocs(commentsCollection);
        //const commentsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return commentsList;
    } catch (error) {
        console.error('Error fetching comments:', error);
        throw new Error('Failed to fetch comments');
    }
};

exports.createComment = async (comment) => {
    try {
        const newComment = { ...comment, time: new Date().toLocaleString() };
        const docRef = await addDoc(commentsCollection, newComment);
        return { id: docRef.id, ...newComment };  // Include the Firestore document ID
    } catch (error) {
        console.error('Error adding comment:', error);
        throw new Error('Failed to add comment');
    }
};