import React from "react";
import Ebay from "../assets/Ebay.svg";
import Zenefits from "../assets/Zenefits.svg";
import Compass from "../assets/COMPASS.svg";
import Twillo from "../assets/Twillo.svg";
import Dropbox from "../assets/Dropbox.svg";

const Simplified = () => {
  return (
    <div>
      <div className="w-[95%] lg:w-[85%] mx-auto mt-12 md:mt-24">
        <h2 className="text-center text-3xl text-dimBlue font-bold mb-10">
          Simplified scheduling for more than{" "}
          <span className="text-lightBlue">10,000,000</span> users worldwide
        </h2>
        <div className="flex justify-between items-center w-full overflow-x-auto scroll_bar">
          <img src={Ebay} alt="" className="w-[40%] md:max-w-[10%] mr-6" />
          <img src={Zenefits} alt="" className="w-[40%] md:max-w-[10%]  mr-6" />
          <img src={Compass} alt="" className="w-[40%] md:max-w-[10%] mr-6" />
          <img src={Twillo} alt="" className="w-[40%] md:max-w-[10%] mr-6" />
          <img src={Dropbox} alt="" className="w-[40%] md:max-w-[10%]" />
        </div>
      </div>
    </div>
  );
};

export default Simplified;
