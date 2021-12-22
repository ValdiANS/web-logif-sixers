// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAn9Q4vpZpQj3OWra7UP-9J77KbGA0CdHw',
  authDomain: 'logif-sixers-61229.firebaseapp.com',
  projectId: 'logif-sixers-61229',
  storageBucket: 'logif-sixers-61229.appspot.com',
  messagingSenderId: '897742317031',
  appId: '1:897742317031:web:67237182be7fc8c2e68942',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

// export { app, db, testEnv };
module.exports = {
  app,
  db,
};
