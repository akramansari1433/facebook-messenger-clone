import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyB235w14aZMTCK79w6N81j_gw7i7SFi-rE",
    authDomain: "facebook-messenger-clone-8c9fa.firebaseapp.com",
    projectId: "facebook-messenger-clone-8c9fa",
    storageBucket: "facebook-messenger-clone-8c9fa.appspot.com",
    messagingSenderId: "314949005275",
    appId: "1:314949005275:web:841f166e2385b563bf01fe",
    measurementId: "G-P530PTE8D0"
})

const db=firebaseApp.firestore();

export default db;