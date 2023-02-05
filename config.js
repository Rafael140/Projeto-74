import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDBKALvmN7bJUDx8pCPhpIpj8GbDnExWfk",
  authDomain: "projeto-74-7200d.firebaseapp.com",
  projectId: "projeto-74-7200d",
  storageBucket: "projeto-74-7200d.appspot.com",
  messagingSenderId: "473533245452",
  appId: "1:473533245452:web:0d1bc3c5d2f45abae8a629",
  measurementId: "G-1V78NLTX2C"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
