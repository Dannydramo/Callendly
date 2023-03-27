import React from 'react'


const Product = () => {

   const userId = JSON.parse(localStorage.getItem('user'))
   console.log(userId);
  return (
    <div className="w-[95%] md:w-[90%] mx-auto mt-[6rem] sm:mt-24">{`Hello ${userId}`}</div>
  )
}

export default Product