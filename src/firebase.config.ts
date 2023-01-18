import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCDtg5WJOuJxqhXNuX48N-G0iYjXaGKFjY",
    authDomain: "saylani-student-guide-portal.firebaseapp.com",
    projectId: "saylani-student-guide-portal",
    storageBucket: "saylani-student-guide-portal.appspot.com",
    messagingSenderId: "250845922030",
    appId: "1:250845922030:web:5dbd1802b6b610544be9ff",
    measurementId: "G-71E79R29V1"
};

const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const storage = getStorage(app)
