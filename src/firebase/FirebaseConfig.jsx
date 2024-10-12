// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkp5RhWgxi3rk_ANHh1BhLqZ7bCDYkna4",
  authDomain: "internship-35db8.firebaseapp.com",
  projectId: "internship-35db8",
  storageBucket: "internship-35db8.appspot.com",
  messagingSenderId: "667840039372",
  appId: "1:667840039372:web:c1fcf920bff99a61093569"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
