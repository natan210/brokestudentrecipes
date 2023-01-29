// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCyPD4kEbIhVGzqHQrPgP4yK7qSTFSdC0",
  authDomain: "brokestudentrecipes.firebaseapp.com",
  projectId: "brokestudentrecipes",
  storageBucket: "brokestudentrecipes.appspot.com",
  messagingSenderId: "382795285528",
  appId: "1:382795285528:web:4019b2b2aa602ab89cef6d",
  measurementId: "G-J6LN54ZPWK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db}
