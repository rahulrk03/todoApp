
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB2lZ1D1G7At0rVYrS5l2lp6-lxOensPEs",
    authDomain: "todo-app-cp-815ac.firebaseapp.com",
    projectId: "todo-app-cp-815ac",
    storageBucket: "todo-app-cp-815ac.appspot.com",
    messagingSenderId: "662392912610",
    appId: "1:662392912610:web:0ee8c366fc1a2c17037cbb",
    measurementId: "G-5MZC7DZR4V"
})

const db = firebaseApp.firestore();
export default db;