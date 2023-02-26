
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwM_B3191eE4R_w3zX6nBkHdm_52ieTcI",
  authDomain: "metatrends-8f9d2.firebaseapp.com",
  projectId: "metatrends-8f9d2",
  storageBucket: "metatrends-8f9d2.appspot.com",
  messagingSenderId: "353826523729",
  appId: "1:353826523729:web:46442342bae7766abe0670",
  measurementId: "G-J6BHBTM12B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()

export {app,auth};