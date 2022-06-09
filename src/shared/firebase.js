import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuMJ1CU8YtVJqGYRUAKMCBnQFcl-_XuHs",
  authDomain: "react4-d2029.firebaseapp.com",
  projectId: "react4-d2029",
  storageBucket: "react4-d2029.appspot.com",
  messagingSenderId: "258217460043",
  appId: "1:258217460043:web:bd8ccb09621949161aa8ce",
  measurementId: "G-KLYVYGZLHK",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
