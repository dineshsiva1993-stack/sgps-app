import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Ungaloda Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyA_82IuTGBjB0oAEXOZKY1bH_0hP_JwB6k",
  authDomain: "sgps-tirupur.firebaseapp.com",
  projectId: "sgps-tirupur",
  storageBucket: "sgps-tirupur.firebasestorage.app",
  messagingSenderId: "260394106228",
  appId: "1:260394106228:web:73ea8d4f4bfe5316440021"
};

// Firebase app ah initialize pandrom
const app = initializeApp(firebaseConfig);

// Firestore Database handle ah export pandrom
export const db = getFirestore(app);