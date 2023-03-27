import React, { Fragment } from "react";
import Ebay from "../../assets/Ebay.svg";
import Zenefits from "../../assets/Zenefits.svg";
import Compass from "../../assets/COMPASS.svg";
import Twillo from "../../assets/Twillo.svg";
import Dropbox from "../../assets/Dropbox.svg";


const Schedule = () => {

  
  return (
    <Fragment>

      {/* ==== Schedule Section ======== */}
      
      <section>
        <div className="flex flex-col md:flex-row justify-between items-center w-[95%] md:w-[90%] mx-auto mt-20 sm:mt-28">
          <div className="md:w-[48%] lg:w-[35%] text-center md:text-start">
            <h1 className="text-[2rem] leading-[1.4] md:text-[3rem] lg:leading-[1.2] xl:text-[4rem] font-bold text-dimBlue">
              Easy Scheduling <span className="text-lightBlue">ahead</span>
            </h1>
            <p className="text-lg text-coralBlue my-4">
              Callendly is your scheduling automation platform for eliminating
              the back-and-forth emails for finding the perfect time - and so
              much more.
            </p>
            <button className="bg-lightBlue text-white px-4 py-2 rounded-md">
              Get Started
            </button>
          </div>
          <div className="my-8">
            {/* <img src={Circle} alt="" className="block mx-auto sm:w-[100%] sm:h-[100%]"/> */}
          </div>
        </div>
      </section>

      {/* ======= End Of Schedule Section ========= */}


      {/* ======== Simplified Section ========= */}
      <section>
        <div className="w-[95%] lg:w-[85%] mx-auto mt-12 md:mt-24">
          <h2 className="text-center my-6 text-dimBlue mb-10 text-[2rem] leading-[1.4] md:text-[3rem] lg:leading-[1.2] xl:text-[4rem] font-bold">
            Simplified scheduling for more than{" "}
            <span className="text-lightBlue">10,000,000</span> users worldwide
          </h2>
          <div className="flex justify-between items-center w-full overflow-x-auto scroll_bar my-8">
            <img src={Ebay} alt="" className="md:w-[100px]" width='39' height='10' />
            <img
              src={Zenefits}
              alt=""
              className="md:w-[100px]" width='39' height='10' 
            />
            <img src={Compass} alt="" className="md:w-[100px]" width={'39'} height='10'/>
            <img src={Twillo} alt="" className="md:w-[100px]" width='39' height='10' />
            <img src={Dropbox} alt="" className="md:w-[100px]" width='39' height='10' />
          </div>
        </div>
      </section>

      {/* =========== End Of Simplified Section =========== */}
    </Fragment>
  );
};

export default Schedule;
