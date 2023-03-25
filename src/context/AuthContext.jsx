import { createContext } from "react";
import { signOut, signInWithEmailAndPassword, onAuthStateChanged,  createUserWithEmailAndPassword } from "firebase/auth";



const AuthContext = createContext()


export const AuthProvider = ({children}) =>{

    const signupUser = (email, password)=>{
        console.log(email, password);
        return createUserWithEmailAndPassword(email, password)
    }

 return(
    <AuthContext.Provider value={{ signupUser }}>
    {children}
</AuthContext.Provider>
 );
}

export default AuthContext

