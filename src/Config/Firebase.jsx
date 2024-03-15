// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPYDnzazkC39UqKY-ingi5uHxYcp2h7pQ",
  authDomain: "mini-hacathon-project.firebaseapp.com",
  projectId: "mini-hacathon-project",
  storageBucket: "mini-hacathon-project.appspot.com",
  messagingSenderId: "323660559667",
  appId: "1:323660559667:web:029dc4956c7db3e3553a46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth };