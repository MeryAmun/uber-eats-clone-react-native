// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjDt84weSGfrEhSLBJrszKdHiSes0cIC0",
  authDomain: "react-native-uber-eats-project.firebaseapp.com",
  projectId: "react-native-uber-eats-project",
  storageBucket: "react-native-uber-eats-project.appspot.com",
  messagingSenderId: "952457490529",
  appId: "1:952457490529:web:951cd65e5eafbd66d8fa20",
  measurementId: "G-Q23QBKXS9F"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);

export { db, auth, storage };
