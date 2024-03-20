// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// Initialize Firebase

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMye2LfcrafObobfksXRXJJgymwCfo2eg",
  authDomain: "linktree-sveltekit-course.firebaseapp.com",
  projectId: "linktree-sveltekit-course",
  storageBucket: "linktree-sveltekit-course.appspot.com",
  messagingSenderId: "298368765038",
  appId: "1:298368765038:web:fe9016850872fb1db66a7f",
  measurementId: "G-SZM3PEZGSZ"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();