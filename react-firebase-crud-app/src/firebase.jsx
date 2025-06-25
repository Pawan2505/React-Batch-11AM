// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcCASJxhDVoCEKKSYjx0EZkWWSxjkK2aI",
  authDomain: "project-f9756.firebaseapp.com",
  projectId: "project-f9756",
  storageBucket: "project-f9756.firebasestorage.app",
  messagingSenderId: "472181908332",
  appId: "1:472181908332:web:eb076982e545d0a1e68949"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);