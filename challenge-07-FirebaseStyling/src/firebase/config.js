import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 👈 FALTA ESTO

const firebaseConfig = {
  apiKey: "AIzaSyDoXORR9eOhLGpj7KTt1eyPpjr3gGiyPMM",
  authDomain: "proyecto-fake-login.firebaseapp.com",
  databaseURL: "https://proyecto-fake-login-default-rtdb.firebaseio.com",
  projectId: "proyecto-fake-login",
  storageBucket: "proyecto-fake-login.firebasestorage.app",
  messagingSenderId: "82615424498",
  appId: "1:82615424498:web:38dbcafb95c3bdc8c6476b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 👇 CREA Y EXPORTA AUTH
export const auth = getAuth(app);