import { initializeApp } from "firebase/app";
import { 
    getFirestore, collection
} from "firebase/firestore";
import {
    getStorage, ref
} from 'firebase/storage';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBv17BqKG-D8yDBi6M6so6cme6xzMZUbjo",
    authDomain: "blog-82926.firebaseapp.com",
    projectId: "blog-82926",
    storageBucket: "blog-82926.appspot.com",
    messagingSenderId: "43407965553",
    appId: "1:43407965553:web:1df55e4ea549f3691ecad0"
  };

initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage();
export const storageRef = ref(storage);
export const colRef = collection(db, 'posty');
export const listRef = ref(storage, '');
export const auth = getAuth();
export const provider = new GoogleAuthProvider();


