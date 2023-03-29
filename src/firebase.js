import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBu8VfpAgcDJe-pPO_bCkVCsdfc1hMo14k",
  authDomain: "callendly-d77e7.firebaseapp.com",
  projectId: "callendly-d77e7",
  storageBucket: "callendly-d77e7.appspot.com",
  messagingSenderId: "699813390032",
  appId: "1:699813390032:web:2737ce697dd585596d60d5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
