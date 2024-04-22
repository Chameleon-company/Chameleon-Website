const { initializeApp } = require('firebase/app');
const firebaseConfig = require('../firebaseConfig');
const { getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc, collection, getDocs } = require('firebase/firestore');

// Initialize Firebase
initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore();

exports.createNews = async (newsData) => {
    try {
        // Ensure all fields are included
        const fullNewsData = {
            title: newsData.title || "",  // Use an empty string if title is not provided
            content: newsData.content || "",
            author: newsData.author || "",
            publishedDate: newsData.publishedDate || new Date().toISOString(),  // Use current date/time if not provided
            category: newsData.category || "",
            imageURL: newsData.imageURL || "http://example.com/default.jpg",  // Default image URL
            source: newsData.source || "Unknown",
            commentsCount: newsData.commentsCount || 0,
            likesCount: newsData.likesCount || 0,
            status: newsData.status || "Draft",  // Default status
            editor: newsData.editor || "None"  // Default editor
        };

        const newsRef = doc(collection(db, "ChameleonNews"));
        await setDoc(newsRef, fullNewsData);
        return { id: newsRef.id, ...fullNewsData };
    } catch (error) {
        throw new Error('Unable to create news item: ' + error.message);
    }
};

exports.getNewsById = async (id) => {
    try {
        const newsRef = doc(db, "ChameleonNews", id);
        const newsSnap = await getDoc(newsRef);
        if (!newsSnap.exists()) {
            throw new Error('News item not found');
        }
        return { id: newsSnap.id, ...newsSnap.data() };
    } catch (error) {
        throw new Error('Unable to retrieve news item: ' + error.message);
    }
};

exports.updateNews = async (id, newsData) => {
    try {
        const newsRef = doc(db, "ChameleonNews", id);
        await updateDoc(newsRef, newsData);
        return { id, ...newsData };
    } catch (error) {
        throw new Error('Unable to update news item: ' + error.message);
    }
};

exports.deleteNews = async (id) => {
    try {
        const newsRef = doc(db, "ChameleonNews", id);
        await deleteDoc(newsRef);
        return { message: 'News item deleted successfully' };
    } catch (error) {
        throw new Error('Unable to delete news item: ' + error.message);
    }
};

exports.getAllNews = async () => {
    try {
        const newsCollection = collection(db, "ChameleonNews");
        const snapshot = await getDocs(newsCollection);
        const newsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return newsList;
    } catch (error) {
        throw new Error('Unable to retrieve news items: ' + error.message);
    }
};
