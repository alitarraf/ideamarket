import { initializeApp, getApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const config = {
  apiKey: process.env.REACT_APP_PROD_API_KEY,
  authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROD_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_PROD_APP_ID,
};

const firebaseApp = initializeApp(config);

export default firebaseApp;

const auth = getAuth();
const db = getFirestore();
const functions = getFunctions(getApp());

if (window.location.hostname === "localhost") {
  // auth emulator working
  connectAuthEmulator(auth, "http://localhost:9099");
  // firestore emulator working
  connectFirestoreEmulator(db, "localhost", 8080);
  // functions emulator working
  connectFunctionsEmulator(functions, "localhost", 5001);
}
