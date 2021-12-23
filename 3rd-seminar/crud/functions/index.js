const admin = require('firebase-admin');
const serviceAccount = require('wesopt29-b9a12-firebase-adminsdk-66h4c-fdc505fa9b');
const dotenv = require('dotenv');

dotenv.config();

let firebase;
if(admin.apps.length === 0){
    firebase = admin.initializeApp({
        credential:admin.credential.cert(serviceAccount),
    });
} else{
    firebase = admin.app();
}

module.exports = {
    api: require('./api'),
}