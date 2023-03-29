import React from "react";
import CalendlyAvailability from "../components/Homepage Component/CalendlyAvailability";
import DesignedTeam from "../components/Homepage Component/DesignedTeam";
import Schedule from "../components/Homepage Component/Schedule";
import ScheduleTeam from "../components/Homepage Component/ScheduleTeam";

const Home = () => {
  return (
    <div>
      <Schedule />
      <DesignedTeam />
      <CalendlyAvailability />
      <ScheduleTeam />
    </div>
  );
};

export default Home;
