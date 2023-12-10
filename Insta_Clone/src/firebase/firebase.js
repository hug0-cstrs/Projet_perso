// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Add the Firebase products that you want to use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmVEE72uUU2Y3v5muPwP99i7bOUI7Pkk4",
  authDomain: "insta-clone-261cf.firebaseapp.com",
  projectId: "insta-clone-261cf",
  storageBucket: "insta-clone-261cf.appspot.com",
  messagingSenderId: "575433020151",
  appId: "1:575433020151:web:7bc795ce5daf91c0c179f2",
  measurementId: "G-XE0DXCCXS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };