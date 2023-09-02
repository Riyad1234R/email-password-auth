// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa6Ev1bbvBkZckGNyW5mzLxsk5EWHtBDc",
  authDomain: "email-password-auth-d8e2d.firebaseapp.com",
  projectId: "email-password-auth-d8e2d",
  storageBucket: "email-password-auth-d8e2d.appspot.com",
  messagingSenderId: "859794818255",
  appId: "1:859794818255:web:93e7fa3006dd52d69023ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;