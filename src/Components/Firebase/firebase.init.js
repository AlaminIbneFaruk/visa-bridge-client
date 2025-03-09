
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZJkGo41nhIq04hQ0I4W9WBcES8fcj5yc",
  authDomain: "sunflower-auth-7b253.firebaseapp.com",
  projectId: "sunflower-auth-7b253",
  storageBucket: "sunflower-auth-7b253.firebasestorage.app",
  messagingSenderId: "346084739829",
  appId: "1:346084739829:web:4542ea52523304d4cc53bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)