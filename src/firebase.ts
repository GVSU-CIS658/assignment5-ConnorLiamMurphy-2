import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB6fIpusx6zQjI2k0vdnmQSUiAuy1D3Ftc",
  authDomain: "beverageshop-e16b7.firebaseapp.com",
  projectId: "beverageshop-e16b7",
  storageBucket: "beverageshop-e16b7.firebasestorage.app",
  messagingSenderId: "98936489052",
  appId: "1:98936489052:web:b8b2358244a209408cd299"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
