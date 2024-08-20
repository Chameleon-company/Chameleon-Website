const { initializeApp } = require('firebase/app');
const firebaseConfig = require('../firebaseConfig');
const { getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc, collection, getDocs } = require('firebase/firestore');

// Initialize Firebase
initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore();
exports.getIotStats = async () => {
    try {
        // const resourceCollection = collection(db, "IotStats");
        // const snapshot = await getDocs(resourceCollection);
        // const resources = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const resources = {
            "content": "By 2028, the Australian IoT market is projected to have increased from US$15.46 billion to US$27.13 billion. The largest IoT market in Australia is the automotive industry, followed by the industrial and retail sectors. In Australia, there will be 16.7 million linked IoT devices by 2022. By 2028, Australia is projected to have 28.9 million linked IoT devices. IoT devices are connected to 10 ordinary Australian homes. Smart speakers, smart thermostats, and smart security cameras are the most widely used IoT devices in Australia. The adoption of Industry 4.0 technologies, the rise of the Internet of Vehicles (IAV), and the desire for smart city solutions are what are driving the IoT market in Australia."
          }
        return resources;
    } catch (error) {
        throw new Error('Error fetching Resource Data: ' + error.message);
    }
};