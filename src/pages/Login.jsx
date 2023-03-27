import React, { Fragment, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../context/AuthContext";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {loginUser} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;
 

    try {
      await loginUser(emailInput, passwordInput)
      navigate("/product");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
       <div className="max-w-[600px] mx-auto mt-[6rem] md:mt-24 p-4">
        <h1 className="text-3xl">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="rounded-xl box p-8 my-4 flex flex-col text-md sm:text-xl">
            <div className="my-4">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                className="bg-transparent outline-none borderCols w-full p-2 rounded-md"
                ref={emailRef}
              />
            </div>

            <div className="my-4">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                className="bg-transparent outline-none borderCols w-full p-2 rounded-md"
                ref={passwordRef}
              />
            </div>

            <button
              type="submit"
              className="bg-lightBlue text-white px-4 py-2 rounded-md my-4"
            >
              Login
            </button>

            <div className="grid">
              <button className="flex items-center w-full text-center justify-center my-4 space-x-4 bg-gray-700 py-2 rounded-md text-white">
                <FcGoogle /> <span>Login with Google </span>{" "}
              </button>
            </div>

            <div className="flex justify-center">
              <p>Don't have an account?</p>
              <Link to="/signup" className="underline text-blue-700">
                Signup
              </Link>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
