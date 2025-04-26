//DONOT SHARE FIREBASE CONFIG PUBLIC
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF77L5a3z5N5MuXh--udDluo0ZCEngAIU",
  authDomain: "low-bd.firebaseapp.com",
  projectId: "low-bd",
  storageBucket: "low-bd.firebasestorage.app",
  messagingSenderId: "470021536503",
  appId: "1:470021536503:web:c8d42ef8ccc861443871f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);