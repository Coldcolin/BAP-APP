// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZNt6-bLXa6OcEO4CgDxCDwSHksY_iXsM",
  authDomain: "fir-tuts-37f6f.firebaseapp.com",
  projectId: "fir-tuts-37f6f",
  storageBucket: "fir-tuts-37f6f.appspot.com",
  messagingSenderId: "895171290234",
  appId: "1:895171290234:web:30a5992c9fa086f46e07c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app)

export { db } ;