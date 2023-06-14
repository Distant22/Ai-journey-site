// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const getDB = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBbbbB_GQnT6RjAl5oEXwB5xjyhLcEzBhg",
        authDomain: "ai-journey-50521.firebaseapp.com",
        projectId: "ai-journey-50521",
        storageBucket: "ai-journey-50521.appspot.com",
        messagingSenderId: "560218933148",
        appId: "1:560218933148:web:10faa12bb3b081213a6a59",
        measurementId: "G-SFXG95BTBB"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      return db
}

// export const getDB = () => {
//   const firebaseConfig = {
//     apiKey: "AIzaSyB_w3S1s1GbW6Jt79Dsd-WzB7r2mHvuNZY",
//     authDomain: "ai-journey-website.firebaseapp.com",
//     projectId: "ai-journey-website",
//     storageBucket: "ai-journey-website.appspot.com",
//     messagingSenderId: "625053111311",
//     appId: "1:625053111311:web:a57e6d84e8d2217977bf7a"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const db = getFirestore(app);
//   return db;
// }
