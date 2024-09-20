const { initializeApp } = require('firebase/app');
const firebaseConfig = require('../firebaseConfig');
const { getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc, collection, getDocs } = require('firebase/firestore');

initializeApp(firebaseConfig);

const db = getFirestore();

const commentsCollection = collection(db, 'comments');

let commentsList = [];

exports.getComments = async () => {
    try {
        // const snapshot = await getDocs(commentsCollection);
        // const commentsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return commentsList;
    } catch (error) {
        console.error('Error fetching comments:', error);
        throw new Error('Failed to fetch comments');
    }
};

exports.addComment = async (comment) => {
    try {
        const newComment = { id: commentsList.length + 1, ...comment, time: new Date().toLocaleString() };
        commentsList.push(newComment); 
        return newComment; 
    } catch (error) {
        console.error('Error adding comment:', error);
        throw new Error('Failed to add comment');
    }
};