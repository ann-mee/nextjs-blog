import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA6IFvVHGkdz_WOLNbiaIWTrgdOy7C-ll4",
  authDomain: "nextjs-blog-725ec.firebaseapp.com",
  projectId: "nextjs-blog-725ec",
  storageBucket: "nextjs-blog-725ec.appspot.com",
  messagingSenderId: "60320043753",
  appId: "1:60320043753:web:ade82225aa274582899678",
};

// Initialize Firebase
let firebaseApp;

if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApps()[0];
}

// Get a reference to the database service
const database = getDatabase(firebaseApp);

export { firebaseApp, database };
