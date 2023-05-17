// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "",
    authDomain: "sanguinetti-react-coderhouse.firebaseapp.com",
    projectId: "sanguinetti-react-coderhouse",
    storageBucket: "sanguinetti-react-coderhouse.appspot.com",
    messagingSenderId: "660683994851",
    appId: "1:660683994851:web:a029c69805e231228fb7d6",
    measurementId: "G-WNH7MXLVY3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
