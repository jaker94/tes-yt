// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhczvdEM-fWvlEpKN6uH2Gdgvh3rzLM3w",
  authDomain: "tes-clone-af67f.firebaseapp.com",
  projectId: "tes-clone-af67f",
  storageBucket: "tes-clone-af67f.appspot.com",
  messagingSenderId: "775489180137",
  appId: "1:775489180137:web:45442e18adb0eead3f7b78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = app.auth();

export { auth }