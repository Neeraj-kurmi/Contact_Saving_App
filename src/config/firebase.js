// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFEm1DBgy4nfVLvXEUiQOJipjcVmM9Bjs",
  authDomain: "contactapp-c7d09.firebaseapp.com",
  projectId: "contactapp-c7d09",
  storageBucket: "contactapp-c7d09.appspot.com",
  messagingSenderId: "813183994827",
  appId: "1:813183994827:web:0b0dd6ccbfefef9b73044e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)