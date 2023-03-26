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
          {/* <div className="relative lg:right-[-6.5rem]">
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
            <img
              src={GirlImage}
              alt=""
              className="h-[400px] md:h-[550px] w-full md:w-[750px]"
            />
          </div> */}
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
