import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvV_sI9poT2bInZEC5xcEdGNueAuj9JYA",
  authDomain: "callendly-authentication.firebaseapp.com",
  projectId: "callendly-authentication",
  storageBucket: "callendly-authentication.appspot.com",
  messagingSenderId: "155182495395",
  appId: "1:155182495395:web:f77e97ee99c4b4cebdb116",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
