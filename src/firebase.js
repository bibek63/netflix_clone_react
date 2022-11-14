// import firebase from "firebase";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpdF4HUXaXIlCXNIPls1Y5nPB9J6ChTQ8",
  authDomain: "netflix-clone-60623.firebaseapp.com",
  projectId: "netflix-clone-60623",
  storageBucket: "netflix-clone-60623.appspot.com",
  messagingSenderId: "802561789292",
  appId: "1:802561789292:web:0987f4e5bf328314493749",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
