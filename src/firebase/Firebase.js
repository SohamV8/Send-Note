// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb_Cr7n0prsytclhO78HruMZcE0oS-K1E",
  authDomain: "send-notes-e0a0d.firebaseapp.com",
  projectId: "send-notes-e0a0d",
  storageBucket: "send-notes-e0a0d.appspot.com",
  messagingSenderId: "342464384018",
  appId: "1:342464384018:web:f5224a66924871dcdd9ccb",
  measurementId: "G-X5PYJMNG5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);