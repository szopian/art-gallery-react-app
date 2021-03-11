import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBfr9B2orpsosrYNhByd2cBbyZvsl9Yrqw",
  authDomain: "photo-gallery-1d534.firebaseapp.com",
  projectId: "photo-gallery-1d534",
  storageBucket: "photo-gallery-1d534.appspot.com",
  messagingSenderId: "735005351130",
  appId: "1:735005351130:web:59b805b4d9b7629c9719e3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
