import firebase from "firebase/compat/app";
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyD5erqRA2JE3fmTdopqaYb9SXFyOx4SxRQ",
    authDomain: "shopifly-699a9.firebaseapp.com",
    databaseURL: "https://shopifly-699a9-default-rtdb.firebaseio.com",
    projectId: "shopifly-699a9",
    storageBucket: "shopifly-699a9.appspot.com",
    messagingSenderId: "687060021693",
    appId: "1:687060021693:web:f24d80d71dc16b1be822d4",
    measurementId: "G-PZDRED39EN"
  };
  
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;