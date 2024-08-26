const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBnTFv6f1j3JmUR7QNfxypuZYeYJd7kG-I",
//   authDomain: "cw-test-database.firebaseapp.com",
//   projectId: "cw-test-database",
//   storageBucket: "cw-test-database.appspot.com",
//   messagingSenderId: "380225909132",
//   appId: "1:380225909132:web:2e6cf62112c0bf09bd26a9",
//   measurementId: "G-X549SPGDEP"
// };


module.exports = firebaseConfig;