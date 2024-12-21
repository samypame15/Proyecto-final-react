import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUXt-Jmth6JAbt682WTVxaeGnSPsxCTyA",
  authDomain: "ecomerce-emicake.firebaseapp.com",
  projectId: "ecomerce-emicake",
  storageBucket: "ecomerce-emicake.firebasestorage.app",
  messagingSenderId: "109009613544",
  appId: "1:109009613544:web:179a7efe864e19c3a98f5d"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)