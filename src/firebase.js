import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4PF9IYBn_OCWMxuCf3AeKTmQ9q83_hGc",
    authDomain: "reelify-ce534.firebaseapp.com",
    projectId: "reelify-ce534",
    storageBucket: "reelify-ce534.appspot.com",
    messagingSenderId: "1031563941047",
    appId: "1:1031563941047:web:6ddd71f3f7c45c137a6932"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
  getTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
};

export const storage = firebase.storage();