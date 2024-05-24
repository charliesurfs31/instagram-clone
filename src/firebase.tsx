import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQ7mL0orLa-ML21Fuh6l8xjqnH1lVqt5g",
  authDomain: "instagram-clone-fc359.firebaseapp.com",
  projectId: "instagram-clone-fc359",
  storageBucket: "instagram-clone-fc359.appspot.com",
  messagingSenderId: "176185282771",
  appId: "1:176185282771:web:286ceca2dddd2a16e4c426",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
