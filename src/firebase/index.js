import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database"; // Import Realtime Database
import { LocalStorage } from 'quasar'; // Import LocalStorage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app); // Initialize Realtime Database


// Auth state listener
onAuthStateChanged(auth, user => {
  if (user) {
    console.log('User is signed in:', user);
    // Perform any additional actions based on the authenticated user
  } else {
    console.log('No user is signed in.');
    // Perform any additional actions based on the unauthenticated state
  }
});

// Export utils/refs
export {
  app,
  analytics,
  auth,
  db,
  storage,
  database // Export the database
};
