import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAIrnMgut6J7CFB0srTxyVCIFKtceXC7Uk',
  authDomain: 'curated-tube-ac4c1.firebaseapp.com',
  databaseURL: 'https://curated-tube-ac4c1.firebaseio.com',
  projectId: 'curated-tube-ac4c1',
  storageBucket: 'curated-tube-ac4c1.appspot.com',
  messagingSenderId: '944756446335',
  appId: '1:944756446335:web:b4cd69618105e922741b4a',
  measurementId: 'G-BSWQXE11DD',
};

const Firebase = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {Firebase, db};
