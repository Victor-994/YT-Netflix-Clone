// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// require('dotenv').config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFflZn0MbWKp9M1MFfPXJ1m3zzFn-Zoc4",
  authDomain: "netflix-clone-ceb60.firebaseapp.com",
  projectId: "netflix-clone-ceb60",
  storageBucket: "netflix-clone-ceb60.appspot.com",
  messagingSenderId: "599744861854",
  appId: "1:599744861854:web:ac19788ce6030a3b118d8f",
  measurementId: "G-4D80CSQEB9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);

