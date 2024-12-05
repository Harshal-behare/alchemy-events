// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// Replace these with your actual Firebase config values

const firebaseConfig = {
  apiKey: "AIzaSyAp_13pKXBoI1n06SrYqL9fDtHB4BXWcIQ",
  authDomain: "alchemy-events.firebaseapp.com",
  projectId: "alchemy-events",
  storageBucket: "alchemy-events.firebasestorage.app",
  messagingSenderId: "158252192799",
  appId: "1:158252192799:web:588f2b5b5b50e445edf12a",
  measurementId: "G-B1GGJBSWZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

const analytics = getAnalytics(app);

export default app; 