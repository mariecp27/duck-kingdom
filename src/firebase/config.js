// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9zzpDzRKO1GFxMH8ZlSiJYwHZioEA0aM",
    authDomain: "duck-kingdom.firebaseapp.com",
    projectId: "duck-kingdom",
    storageBucket: "duck-kingdom.appspot.com",
    messagingSenderId: "89464531016",
    appId: "1:89464531016:web:302e0f3e0adf84c295507d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Obtain Firestore from Firebase 
export const db = getFirestore(app);