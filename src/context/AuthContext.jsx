import { createContext } from "react";


const AuthContext = createContext()


export const AuthProvider = ({children}) =>{

    const someValue = 'Hello, world!';

 return(
    <AuthContext.Provider value={{ someValue }}>
    {children}
</AuthContext.Provider>
 );
}



