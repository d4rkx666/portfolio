// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyATx02_T3VuA3SVjE-9bx8hRm6CQEHAfvQ",
  authDomain: "felix-portfolio-11288.firebaseapp.com",
  projectId: "felix-portfolio-11288",
  storageBucket: "felix-portfolio-11288.firebasestorage.app",
  messagingSenderId: "402137780411",
  appId: "1:402137780411:web:50f6aaa2fbd25e9bcd999e",
  measurementId: "G-HGCVDZ9H4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);