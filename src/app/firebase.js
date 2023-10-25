import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyC2lcbXxABVzkOXHvKvMfiCTENgxB4V78k",
  
    authDomain: "class-vision.firebaseapp.com",
  
    databaseURL: "https://class-vision-default-rtdb.europe-west1.firebasedatabase.app",
  
    projectId: "class-vision",
  
    storageBucket: "class-vision.appspot.com",
  
    messagingSenderId: "827165782062",
  
    appId: "1:827165782062:web:504f792920cc1fb8026fbf",
  
    measurementId: "G-4KG0ZHZSY9"
  
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export default firebaseApp;