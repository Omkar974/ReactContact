// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC90KYsPd5EHHQ1jblqsl-IFL8R6bADhiM",
  authDomain: "vite-contact-a6023.firebaseapp.com",
  projectId: "vite-contact-a6023",
  storageBucket: "vite-contact-a6023.firebasestorage.app",
  messagingSenderId: "382515330570",
  appId: "1:382515330570:web:db7c79253c30798e57e9f3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
