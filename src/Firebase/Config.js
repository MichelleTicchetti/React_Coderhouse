// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-F2LI-SfLF-OCsXCZyIqT_Wa8qwGpedU",
  authDomain: "coderhouse-ecommerce-ticchetti.firebaseapp.com",
  projectId: "coderhouse-ecommerce-ticchetti",
  storageBucket: "coderhouse-ecommerce-ticchetti.appspot.com",
  messagingSenderId: "300050194974",
  appId: "1:300050194974:web:381f57ee2b13a4c494040f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
