import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

  var firebaseConfig = {
    apiKey: "AIzaSyBD2Bc2c57y8h8t6Ydw51kUKoTBYG6s8ck",
    authDomain: "chat-zilla.firebaseapp.com",
    databaseURL: "https://chat-zilla.firebaseio.com",
    projectId: "chat-zilla",
    storageBucket: "chat-zilla.appspot.com",
    messagingSenderId: "312456676056",
    appId: "1:312456676056:web:0e6409b0f8cd2ab4960dad",
    measurementId: "G-D1QH8SL0K8"
 
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;
