
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQTR5SxVQVtIvLoiYUtQqFf6aQX66KsGc",
  authDomain: "callendly-auth.firebaseapp.com",
  projectId: "callendly-auth",
  storageBucket: "callendly-auth.appspot.com",
  messagingSenderId: "99842417981",
  appId: "1:99842417981:web:71e68620cfff82b48ad154"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

