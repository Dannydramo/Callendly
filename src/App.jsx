import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthProvider } from "./context/AuthContext";


function App() {
  
  
  
  return (
    <Fragment>
        
      <AuthProvider>
      <div className="min-h-screen absolute top-0 bg-[#E5E5E5] w-full overflow-x-hidden">
        <Navbar /> 
       <div>
       <Routes>
       <Route exact path="/" element={<Home />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login"  element={<Login />} />
       </Routes>
       </div>

      </div>
      </AuthProvider>
    </Fragment>
  );
}

export default App;
