import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBkmW6WQ1anEVf716Uhy0C70vhmIZzHANM",
    authDomain: "reels-auth-1cc6f.firebaseapp.com",
    projectId: "reels-auth-1cc6f",
    storageBucket: "reels-auth-1cc6f.appspot.com",
    messagingSenderId: "474390073722",
    appId: "1:474390073722:web:5329022183e5563361c6c3"
  };
let app = initializeApp(firebaseConfig);
//from these three lines you are able to include firebase in your react app
export let auth = getAuth(app);
export const db = getFirestore(app);




