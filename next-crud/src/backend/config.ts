import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; 

// Configurações do Firebase
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_apiKey,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_authDomain,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_projectId,
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export default firebaseConfig;
