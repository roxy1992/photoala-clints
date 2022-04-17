// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJbz6KTSWvescdnsjQfRMS-1Y4Z3GrwPg",
    authDomain: "fotoala-8bc96.firebaseapp.com",
    projectId: "fotoala-8bc96",
    storageBucket: "fotoala-8bc96.appspot.com",
    messagingSenderId: "303360340028",
    appId: "1:303360340028:web:cf8e53ff855916c36b5339"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;