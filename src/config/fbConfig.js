import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 var fbConfig = {
    apiKey: "AIzaSyCFyO9AtLY5f1nfT0IWfmJ3Odk8TiFPLgo",
    authDomain: "blogtrooper-842ae.firebaseapp.com",
    databaseURL: "https://blogtrooper-842ae.firebaseio.com",
    projectId: "blogtrooper-842ae",
    storageBucket: "blogtrooper-842ae.appspot.com",
    messagingSenderId: "141945489533",
    appId: "1:141945489533:web:d7c00778ac14c664d48914",
    measurementId: "G-DJXKTHLKBK"
  };
  // Initialize Firebase
  firebase.initializeApp(fbConfig);
  // firebase.firestore().settings({ timestampsInSnapshots:true })

  export default firebase;
