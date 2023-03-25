import React, { Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;
    console.log(emailInput, passwordInput);
  };

  return (
    <Fragment>
      <div className="max-w-[600px] mx-auto mt-20 sm:mt-24 p-4">
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
