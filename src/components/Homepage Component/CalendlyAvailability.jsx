import React, { Fragment } from "react";
import AvailableImg from '../../assets/AvailableImg.png'
import Arrow3 from '../../assets/Arrow 3.png'

const CalendlyAvailability = () => {
  return (
    <Fragment>
      <div className="w-[95%] md:w-[90%] mx-auto my-12">
      <h1 className="lg:w-[85%] mx-auto text-center my-6 text-dimBlue mb-10 text-[2rem] leading-[1.4] md:text-[3rem] lg:leading-[1.2] xl:text-[4rem] font-bold mt-[-5rem] md:mt-0">
          We make scheduling for you easier than ever
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-[48%] lg:w-[35%] text-start">
        <h1 className="text-[2rem] leading-[1.4] md:text-[3rem] lg:leading-[1.2] xl:text-[4rem] font-bold text-dimBlue">
              Share your Calelendly availability with others
            </h1>
            <p className="text-lg text-coralBlue my-4">
              Grow your business with scheduling automation. Simply email text,
              or add your Callendly availability to your website - and watch
              prospects and recruits book high - value meetings with you.
            </p>
            <button className="text-lightBlue flex items-center">
            Learn more
            <img src={Arrow3} alt="" className="ml-2 mt-1 w-[20px]"/>
          </button>
          </div>
          <div className="">
              <img src={AvailableImg} alt="" width='479' height='406'  className="w-[100%]"/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CalendlyAvailability;
