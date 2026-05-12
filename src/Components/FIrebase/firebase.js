import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage'

firebase.initializeApp({

    apiKey: "AIzaSyALH2zgdYP9TMPQl9hfsX1Aq1GG9RMoCdQ",
    authDomain: "quality-lab-6d8e9.firebaseapp.com",
    projectId: "quality-lab-6d8e9",
    storageBucket: "quality-lab-6d8e9.firebasestorage.app",
    messagingSenderId: "755528078043",
    appId: "1:755528078043:web:4cecb24bf4f164e12cb2fe"
});

const fb = firebase;

export default fb;