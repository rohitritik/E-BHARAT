// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl85ERj_DTyHfqME94iV8Izr4YOSwyTKc",
  authDomain: "myappp-e2603.firebaseapp.com",
  projectId: "myappp-e2603",
  storageBucket: "myappp-e2603.appspot.com",
  messagingSenderId: "914810458010",
  appId: "1:914810458010:web:b5f894460c97a2699fb423"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;