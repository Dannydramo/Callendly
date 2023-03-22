import React, { Fragment } from "react";
import Circle from "../../assets/CircleImg.png";
import Arrow3 from "../../assets/Arrow 3.png";


const ScheduleTeam = () => {
  return (
    <Fragment>
      <div className="w-[95%] md:w-[90%] mx-auto mt-[12rem] sm:mt-24">
        <div className="flex flex-col lg:flex-row justify-between items-center ">
          <div className="lg:w-[40%] text-center lg:text-start">
            <h1 className="text-5xl lg:text-5xl text-dimBlue">
              Schedule as a team
            </h1>
            <p className="text-lg text-coralBlue my-4">
              Callendly adapts to both you and your teams scheduling prefrences.
              Co - host a client call with a colleague, email reminders and
              follow-ups, and integrate everything with your prefrred software
              tools.
            </p>
            <button className="text-lightBlue flex items-center">
              Learn more
              <img src={Arrow3} alt="" className="ml-2 mt-1 w-[20px]" />
            </button>
          </div>
          <div className="my-8">
            <img src={Circle} alt="" className="w-[70%] h-[70%] block mx-auto sm:w-[100%] sm:h-[100%]"/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ScheduleTeam;
