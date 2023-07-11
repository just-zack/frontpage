// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUu5QAiGCkGzhwOdkbF1ZfHWjEbw2u2lo",
  authDomain: "front-page-development.firebaseapp.com",
  projectId: "front-page-development",
  storageBucket: "front-page-development.appspot.com",
  messagingSenderId: "558348555081",
  appId: "1:558348555081:web:5b222649527d7cf7384098",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
