import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database"; // Import Realtime Database
import { LocalStorage } from 'quasar'; // Import LocalStorage

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY4e3vQGbk-LEPwzNuqSqDMcLhCDyCoPM",
  authDomain: "baas-project-test.firebaseapp.com",
  projectId: "baas-project-test",
  storageBucket: "baas-project-test.appspot.com",
  messagingSenderId: "416360362388",
  appId: "1:416360362388:web:52f3c8ba6905a56cba5f81",
  measurementId: "G-23DRRM62JZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app); // Initialize Realtime Database

/**
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const database = getDatabase(app); // Initialize Realtime Database
 */



// Auth state listener
onAuthStateChanged(auth, user => {
  if (user) {
    LocalStorage.set('user',user)
    console.log('User is signed in:', user);
    // Perform any additional actions based on the authenticated user
  } else {
    LocalStorage.remove('user')
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
