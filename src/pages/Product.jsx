import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Product = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  //  const userId = JSON.parse(localStorage.getItem('user'))
  //  console.log(userId);
  return (
    <div className="w-[95%] md:w-[90%] mx-auto mt-[6rem] sm:mt-24">{`Hello`}</div>
  );
};

export default Product;
