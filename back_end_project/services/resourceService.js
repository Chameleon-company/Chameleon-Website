//Added by Varun Kumar
const { initializeApp } = require('firebase/app');
const firebaseConfig = require('../firebaseConfig');
const { getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc, collection, getDocs } = require('firebase/firestore');

// Initialize Firebase
initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore();

exports.getIotStats = async () => {
    try {
        const resourceCollection = collection(db, "IotStats");
        const snapshot = await getDocs(resourceCollection);
        const resources = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return resources[0];
    } catch (error) {
        throw new Error('Error fetching Resource Data: ' + error.message);
    }
};
exports.getIotSecurity = async () => {
    try {
        const resourceCollection = collection(db, "IotSecurity");
        const snapshot = await getDocs(resourceCollection);
        const resources = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return resources;
    }
    catch (error) {
        throw new Error('Error fetching Resource Data: ' + error.message);
    }
};
exports.getIotTech = async () => {
    try {
        const resourceCollection = collection(db, "IotTech");
        const snapshot = await getDocs(resourceCollection);
        const resources = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return resources;
    }
    catch (error) {
        throw new Error('Error fetching Resource Data: ' + error.message);
    }
};

exports.getIotUpdates = async () => {
    try {
        const resourceCollection = collection(db, "IotUpdates");
        const snapshot = await getDocs(resourceCollection);
        const resources = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return resources;
    }
    catch (error) {
        throw new Error('Error fetching Resource Data: ' + error.message);
    }
};