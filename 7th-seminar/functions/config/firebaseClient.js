const {initializeApp} = require('firebase/app');
const {getAuth} = require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyAMOcchFyUuz-KlW975krFVU5h04weECzY",
    authDomain: "wesopt29-b9a12.firebaseapp.com",
    projectId: "wesopt29-b9a12",
    storageBucket: "wesopt29-b9a12.appspot.com",
    messagingSenderId: "1041914815190",
    appId: "1:1041914815190:web:4dc91f3c801cb68c815f77",
    measurementId: "G-HX3BFBH02D"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

module.exports = {firebaseApp, firebaseAuth, firebaseConfig};