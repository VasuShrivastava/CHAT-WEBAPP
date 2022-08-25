import firebase from "firebase";
const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyC9KHzWHZ4Uid-AvS58qu0BXubDVkMeGN8",
    authDomain: "messenger-30222.firebaseapp.com",
    databaseURL: "https://messenger-30222.firebaseio.com",
    projectId: "messenger-30222",
    storageBucket: "messenger-30222.appspot.com",
    messagingSenderId: "748365401204",
    appId: "1:748365401204:web:64ce44cf4a96daa3279521",
    measurementId: "G-34LC8XYS9V"
});

const db= firebaseApp.firestore();
export default db;
