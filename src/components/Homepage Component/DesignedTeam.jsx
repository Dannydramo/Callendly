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
// import DesignedImage from '../../assets/DesignGuy.png'

const DesignedTeam = () => {
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto sm:mt-24">
      <div className="">
        <h1 className="lg:w-[85%] mx-auto text-center my-6 text-dimBlue mb-10 text-[2rem] leading-[1.4] md:text-[3rem] lg:leading-[1.2] xl:text-[4rem] font-bold">
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

      <div className="flex flex-col md:flex-row justify-between items-center my-16">
        <div className="md:w-[48%] lg:w-[35%]">
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
        <div className="my-8">
          {/* <img src={DesignedImage} alt="" className="relative left-8 md:left-322 xl:left-[10rem]"/> */}
        </div>
      </div>
    </div>
  );
};

export default DesignedTeam;
