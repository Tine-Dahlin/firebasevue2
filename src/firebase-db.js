import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyBFJYg_FUjUkHd3rLF3UAutAj50brlooFA",
    authDomain: "vuefirebase-49d5c.firebaseapp.com",
    databaseURL: "https://vuefirebase-49d5c.firebaseio.com",
    projectId: "vuefirebase-49d5c",
    storageBucket: "vuefirebase-49d5c.appspot.com",
    messagingSenderId: "108838893369",
    appId: "1:108838893369:web:9fc1e2aa30a2da51d7dae8",
    measurementId: "G-DPQ1695FS6"
  })
  .firestore();

export const postRef = db.collection("posts");
