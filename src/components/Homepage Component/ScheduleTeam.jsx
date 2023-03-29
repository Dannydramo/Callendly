import React, { Fragment } from "react";
import Circle from "../../assets/CircleImg.png";
import Arrow3 from "../../assets/Arrow 3.png";

const ScheduleTeam = () => {
  return (
    <Fragment>
      <section className="w-[95%] md:w-[90%] mx-auto sm:mt-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-[48%] lg:w-[35%] text-start">
            <h1 className="text-[2rem] leading-[1.4] md:text-[3rem] lg:leading-[1.2] xl:text-[4rem] font-bold text-dimBlue">
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
            <img
              src={Circle}
              alt=""
              width="569"
              height="296"
              className="block mx-auto w-[100%] h-[100%]"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ScheduleTeam;
