import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {

    apiKey: "AIzaSyA0GwIab9oDL79edSeKnz-SaNx88rzDWxg",

    authDomain: "quizical-stem.firebaseapp.com",

    projectId: "quizical-stem",

    storageBucket: "quizical-stem.appspot.com",

    messagingSenderId: "85311220381",

    appId: "1:85311220381:web:845d2b4dd8338e731f8274"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
