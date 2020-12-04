// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCn16GzaQ9EwEKX5aMjh4KDQEbN0ygZre8",
  authDomain: "clone-dc9d4.firebaseapp.com",
  databaseURL: "https://clone-dc9d4.firebaseio.com",
  projectId: "clone-dc9d4",
  storageBucket: "clone-dc9d4.appspot.com",
  messagingSenderId: "175053455428",
  appId: "1:175053455428:web:83e97fb9fb02221ff8fc11",
  measurementId: "G-R0T17W01DD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
