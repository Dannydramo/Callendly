import React, { Fragment } from "react";
import Chat from "../../assets/Chat.svg";
import LinkedIn from "../../assets/LinkedIn.svg"
import Twitter from "../../assets/Twitter.svg"
import Yahoo from "../../assets/Yahoo.svg"
import Instagram from "../../assets/Instagram.svg"
import Arrow3 from '../../assets/Arrow 3.png'

const CalendlyAvailability = () => {
  return (
    <Fragment>
      <div className="w-[95%] md:w-[90%] mx-auto my-12">
      <h1 className="lg:w-[85%] mx-auto text-center my-6 text-dimBlue mb-10 text-[2rem] leading-[1.4] md:text-[3rem] lg:leading-[1.2] xl:text-[4rem] font-bold mt-[-5rem] md:mt-0">
          We make scheduling for you easier than ever
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-[48%] lg:w-[35%] text-center md:text-start">
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
          {/* <div className="relative">
            <img src={Chat} alt="" />
          <div className="absolute top-[5rem] right-0 sm:right-[3.5rem] sm:flex sm:flex-row-reverse">
          <div className="w-[304px] h-[295px] text-dimBlue box rounded-md bg-white text-xs ml-20">
              <p className="bg-dimBlue text-white p-2 rounded-md">
                Lets Chat Soon
              </p>
              <p className="p-2">michael.o.jordan@gmail.com</p>
              <hr />
              <p className="p-2">Your Interview</p>
              <hr />
              <p className="p-2 w-[180px]">
                Hi Michael,We are excited to learn about your skills and
                qualifications please schedule your interview
              </p>
              <div className="flex justify-between w-[220px] p-2">
                <p>Tuesday Jul 20</p>
                <p>Thursday Jul 25</p>
              </div>
              <div className="grid gap-2 p-2 grid-cols-4 mb-2">
                    <p className="p-1 text-lightBlue border-lightBlue border rounded">9 : 00 AM</p>
                    <p className="p-1 text-lightBlue border-lightBlue border rounded">2 : 00 AM</p>
                    <p className="p-1 text-lightBlue border-lightBlue border rounded">3 : 00 AM</p>
                    <p className="p-1 text-lightBlue border-lightBlue border rounded">6 : 00 AM</p>
                    <p className="p-1 text-lightBlue border-lightBlue border rounded">7 : 00 AM</p>
                    <p className="p-1 text-lightBlue border-lightBlue border rounded">1 : 00 AM</p>
                    <p className="p-1 text-lightBlue border-lightBlue border rounded">4 : 00 AM</p>
                    <p className="p-1 text-lightBlue border-lightBlue border rounded">5 : 00 AM</p>
              </div>
            </div>
          <div className="flex justify-between mt-8 sm:mt-0 ml-[5rem] lg:ml-0 sm:flex-col">
            <div className="box p-4 rounded-lg bg-white">
                <img src={LinkedIn} alt="" />
            </div>
            <div className="box p-4 rounded-lg bg-white md:mt-6 ml-2 md:ml-0">
                <img src={Twitter} alt="" />
            </div>
            <div className="box p-4 rounded-lg bg-white md:mt-6 ml-2 md:ml-0">
                <img src={Yahoo} alt="" />
            </div>
            <div className="box p-4 rounded-lg bg-white md:mt-6 ml-2 md:ml-0">
                <img src={Instagram} alt="" />
            </div>

          </div>
          </div> 
          </div>*/}
        </div>
      </div>
    </Fragment>
  );
};

export default CalendlyAvailability;
