import React, { Fragment } from "react";
import GirlImage from "../assets/Girl.png";
import GirlConnect from "../assets/GirlConnect.png";
import GuyConnect from "../assets/GuyConnect.png";

const Schedule = () => {
  return (
    <Fragment>
      <div className="flex flex-col lg:flex-row justify-between items-center w-[95%] md:w-[90%] mx-auto mt-28">
        <div className="lg:w-[35%] text-center lg:text-start">
          <h1 className="text-5xl lg:text-7xl text-dimBlue">
            Easy Scheduling <span className="text-lightBlue">ahead</span>
          </h1>
          <p className="text-lg text-coralBlue my-4">
            Callendly is your scheduling automation platform for eliminating the
            back-and-forth emails for finding the perfect time - and so much
            more.
          </p>
          <button className="bg-lightBlue text-white px-4 py-2 rounded-md">
            Get Started
          </button>
        </div>
        <div className="relative">
          <div className="flex absolute top-8 items-center">
            <img src={GirlConnect} alt="" className="h-[50px] mr-2" />
            <div className="box bg-white rounded-md p-2 text-xs">
              <p>Let's find a time to connect</p>
              <p className="text-lightBlue">candly.com-xdr-wsa/003</p>
            </div>
          </div>
          <div className="flex absolute bottom-2 left-[-2%] items-center">
            <img src={GuyConnect} alt="" className="h-[50px] mr-2" />
            <div className="box bg-white rounded-md p-2 text-xs">
              <p>Let's find a time to connect</p>
              <p className="text-lightBlue">candly.com-xdr-wsa/003</p>
            </div>
          </div>
          <div className="absolute bottom-20 right-0 sm:right-[12%] box bg-white rounded-md p-2 text-xs">
            <p className="text-dimBlue font-bold text-center">
              Wednesday Aug 18
            </p>
            <p className="text-center my-2 text-lightBlue borderCol rounded py-2">
              10 : 00 AM
            </p>
            <div className="flex space-x-3 my-2 text-white">
              <button className="bg-dimBlue px-2 py-1 rounded">Snooze</button>
              <button className="bg-lightBlue px-2 py-1 rounded">
                Confirm
              </button>
            </div>
          </div>
          <img src={GirlImage} alt="" className="h-[550px] w-[750px]" />
        </div>
      </div>
    </Fragment>
  );
};

export default Schedule;
