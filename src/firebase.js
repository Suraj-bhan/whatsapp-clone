import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs7YPr0ORgVHj2RNm9NmSc1WcsJSH6deU",
  authDomain: "whatsapp-clone-f1d79.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-f1d79-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-f1d79",
  storageBucket: "whatsapp-clone-f1d79.appspot.com",
  messagingSenderId: "1072052801544",
  appId: "1:1072052801544:web:b63442ec033dcfd248c1bd",
  measurementId: "G-12RPQM3F73"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
