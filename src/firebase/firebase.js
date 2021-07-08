import firebase from "firebase/app"
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyA6x-FOAKQdozSQV-V7Hh9XS_or6Li-5Fw",
    authDomain: "ch-14220-lerdafelipe.firebaseapp.com",
    projectId: "ch-14220-lerdafelipe",
    storageBucket: "ch-14220-lerdafelipe.appspot.com",
    messagingSenderId: "172937557058",
    appId: "1:172937557058:web:9f187609db93052e4069db"
  };
  // Initialize Firebase
const fb =  firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
