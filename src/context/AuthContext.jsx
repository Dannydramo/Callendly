import { createContext, useEffect, useState } from "react";
import {
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [userName, setUserName] = useState()
  const signupUser = (email, password, userName) => {
      setUserName(userName)
      localStorage.setItem('user', JSON.stringify(userName))
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const loginUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }


  const signoutUser = ()=>{
    localStorage.removeItem('user')
    return signOut(auth)

  }


  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
    console.log(currentUser);
    setUser(currentUser)
  })
  
    return () => {
      unsubscribe()
    }
  }, [])
  

  return (
    <AuthContext.Provider value={{ signupUser, user, loginUser, signoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
