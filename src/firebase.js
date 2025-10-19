// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import getAuth
import { getFirestore, doc, setDoc } from "firebase/firestore"; // Import getFirestore

// Your web app's Firebase configuration (use your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyATXA2SFAqvuRMfE44WTywIvIOcMWzKyj4",
  authDomain: "quick-plate-app-8dc81.firebaseapp.com",
  projectId: "quick-plate-app-8dc81",
  storageBucket: "quick-plate-app-8dc81.firebasestorage.app",
  messagingSenderId: "776981023841",
  appId: "1:776981023841:web:04c1e13efa1b8886e06e20",
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
