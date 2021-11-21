import { firebase } from "@firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

const config = {
  apiKey: process.env.REACT_APP_PROD_API_KEY,
  authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROD_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_PROD_APP_ID,
};

firebase.initializeApp(config);

export default firebase;

// const db = firebase.firestore();
// const auth = firebase.auth();
// const funct = firebase.functions();

// if (window.location.hostname === "localhost") {
//   auth.useEmulator("http://localhost:9099");
//   // // firestore emulator working
//   db.useEmulator("localhost", 8081);
//   // // functions emulator working
//   funct.useEmulator("localhost", 5001);
// }
