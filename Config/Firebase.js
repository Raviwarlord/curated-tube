import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCB0XHqXY4jlG4CUF4iJr90JJX9Jhapttg",
  authDomain: "curated-tube.firebaseapp.com",
  databaseURL: "https://curated-tube.firebaseio.com",
  projectId: "curated-tube",
  storageBucket: "curated-tube.appspot.com",
  messagingSenderId: "1015070410238",
  appId: "1:1015070410238:web:b37fa65e8586cc07ae6caf",
  measurementId: "G-96MEY7K1S4",
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
