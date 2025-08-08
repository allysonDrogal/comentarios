
import 'firebase/compat/database'
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyA5krpVnyDwgbf-8Gpo5XyMmAjdEiYh114",
  authDomain: "comments-6c64b.firebaseapp.com",
  projectId: "comments-6c64b",
  storageBucket: "comments-6c64b.appspot.com",
  messagingSenderId: "29862843227",
  appId: "1:29862843227:web:2eb102407e90c3f2c0007e",
  measurementId: "G-L3BZM2XMCE"
};
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();