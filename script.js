// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZgulVGwn4IobZhGchL5nxR8Z533H3ksk",
  authDomain: "dbatu-qp.firebaseapp.com",
  projectId: "dbatu-qp",
  storageBucket: "dbatu-qp.appspot.com",
  messagingSenderId: "815340616459",
  appId: "1:815340616459:web:3083e3f9bc8cbeb53a800e",
  measurementId: "G-RN5QFTMPC4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// Reference to your database path
const ref = database.ref("/");

// Reading data once
onValue(
  dataRef,
  (snapshot) => {
    // Access your data
    const data = snapshot.val();
    console.log(data);
  },
  {
    onlyOnce: true, // This ensures that the callback function is invoked only once
  }
);
