// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb_Cr7n0prsytclhO78HruMZcE0oS-K1E",
  authDomain: "send-notes-e0a0d.firebaseapp.com",
  databaseURL: "https://send-notes-e0a0d-default-rtdb.firebaseio.com",
  projectId: "send-notes-e0a0d",
  storageBucket: "send-notes-e0a0d.appspot.com",
  messagingSenderId: "342464384018",
  appId: "1:342464384018:web:f5224a66924871dcdd9ccb",
  measurementId: "G-X5PYJMNG5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { app, storage }; // Export Firebase app and storage for use in other components
