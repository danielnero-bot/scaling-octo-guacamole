// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import getAuth
import { getFirestore, doc, setDoc } from "firebase/firestore"; // Import getFirestore

// Your web app's Firebase configuration (use your actual config)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-SWDSQ3NXM9",
};

// 1. Initialize Firebase App
const app = initializeApp(firebaseConfig);

// 2. Initialize Firebase Authentication and EXPORT it
// The Signup.jsx file needs this: { auth }
export const auth = getAuth(app);

// 3. Initialize Firebase Firestore and EXPORT it
// The Signup.jsx file needs this: { db }
export const db = getFirestore(app);

// 4. Initialize Google Auth Provider and EXPORT it (Needed for Login.jsx)
export const googleProvider = new GoogleAuthProvider();
