// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwEJXhlSz_2PPORwQcsqcOGTmZuUC4UZ8",
  authDomain: "tcoin-3d985.firebaseapp.com",
  databaseURL: "https://tcoin-3d985-default-rtdb.firebaseio.com",
  projectId: "tcoin-3d985",
  storageBucket: "tcoin-3d985.firebasestorage.app",
  messagingSenderId: "599645098741",
  appId: "1:599645098741:web:2dc7d49cfc40ce49a52bbc",
  measurementId: "G-5S3R9EP31T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
