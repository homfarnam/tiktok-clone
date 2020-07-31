import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyDblZrt7-hKHhggNdKyBs93IxOqdzOEyKQ",
    authDomain: "tiktok-14.firebaseapp.com",
    databaseURL: "https://tiktok-14.firebaseio.com",
    projectId: "tiktok-14",
    storageBucket: "tiktok-14.appspot.com",
    messagingSenderId: "262813462386",
    appId: "1:262813462386:web:10b22bfcc9dac91870b7eb",
    measurementId: "G-V157N3TCS1"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;