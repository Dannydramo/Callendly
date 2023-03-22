import React from "react";
import Sales from "../../assets/Sales.svg";
import Education from "../../assets/Education.svg";
import Marketing from "../../assets/Marketing.svg";
import Customer from "../../assets/Customer.svg";
import Recruiting from "../../assets/Recruiting.svg";
import Information from "../../assets/Information.svg";
import Dollar from "../../assets/Dollar.svg";
import Deals from "../../assets/Deals.svg";
import Speed from "../../assets/Speed.svg";
import DesignedImage from "../../assets/DesignGuy.png";
import Rounded from "../../assets/Rounded.png";

const DesignedTeam = () => {
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto sm:mt-24">
      <div className="">
        <h1 className="text-center text-dimBlue text-4xl md:w-[50%] font-bold mx-auto my-12">
          Designed for teams who conduct meetings at scale
        </h1>
        <div className="flex justify-between items-center my-12 w-full overflow-x-auto scroll_bar">
          <div className="flex flex-col items-center min-w-[50%] md:min-w-0">
            <img src={Sales} alt="" />
            <p>Sales</p>
          </div>
          <div className="flex flex-col items-center min-w-[50%] md:min-w-0">
            <img src={Marketing} alt="" />
            <p>Marketing</p>
          </div>
          <div className="flex flex-col items-center min-w-[50%] md:min-w-0">
            <img src={Education} alt="" />
            <p>Education</p>
          </div>
          <div className="flex flex-col items-center min-w-[50%] md:min-w-0">
            <img src={Customer} alt="" />
            <p>Customer Success</p>
          </div>
          <div className="flex flex-col items-center min-w-[50%] md:min-w-0">
            <img src={Recruiting} alt="" />
            <p>Recruting</p>
          </div>
          <div className="flex flex-col items-center min-w-[50%] md:min-w-0">
            <img src={Information} alt="" />
            <p>Information Technology</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center my-16">
        <div className="lg:w-[30%] lg:text-start">
          <div className="flex items-start">
            <img src={Dollar} alt="" className="mt-1 ml-2" />
            <div className="text-dimBlue ml-4">
              <h3 className="font-semibold">Drive more revenue</h3>
              <p className="my-4">
                Book high value meetings in seconds and turn scheduling into a
                competitive advantage
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <img src={Speed} alt="" className="mt-1" />
            <div className="text-dimBlue ml-4">
              <h3 className="font-semibold">Speed up your sales cycle</h3>
              <p className="my-4">
                Keep your deal momentum high and remove scheduling friction at
                every stage of your salese
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <img src={Deals} alt="" className="mt-1" />
            <div className="text-dimBlue ml-4">
              <h3 className="font-semibold">Close more deals</h3>
              <p className="my-4">
                Customize reminder and follow up work-flows to move deals along,
                integrate with sales tools, and remove logistical tasks to focus
                on selling
              </p>
            </div>
          </div>
        </div>
        <div className="relative -right-16 sm:right-[-8rem] lg:right-[-14.5rem]">
          <img src={DesignedImage} alt="" className="h-[400px] md:h-[550px] md:w-[750px]" />
          <div className="box rounded-[100%] bg-white p-3 sm:p-6 absolute top-[4rem] left-[-4rem] text-xs md:text-base sm:left-[-1rem] text-center">
            <img src={Speed} alt="" className="block mx-auto my-2" />
            <p className="my-2">Round Robbin</p>
          </div>
          <div className="absolute top-[9rem] sm:top-[11rem] left-[-4rem] sm:left-0">
            {" "}
            <img src={Rounded} alt="" />
          </div>
          <div className="box bg-white p-3 sm:p-4 absolute bottom-[1.5rem] left-[-4rem] text-xs md:text-base sm:left-[-6rem] rounded-md sm:w-[200px]">
            <ul>
                <li className="mb-2">9 AM - 10 AM</li>
            </ul>
            <p className="my-2 lg:my-4 font-bold">Discovery Call</p>
            <p>Consultation</p>
          </div>
          <div className="box bg-white p-3 sm:p-6 absolute top-[14rem] sm:top-[10rem] rounded-md right-16 text-xs md:text-base sm:right-[12rem] w-[150px] sm:w-[195px]">
            <p className="text-3xl lg:text-5xl text-lightBlue">89%</p>
            <p>Of awesome and satisfied customers and still counting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignedTeam;
