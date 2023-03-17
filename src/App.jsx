import { Fragment, useState, useEffect } from "react";
import CalendlyAvailability from "./components/CalendlyAvailability";
import DesignedTeam from "./components/DesignedTeam";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import ScheduleTeam from "./components/ScheduleTeam";
import Simplified from "./components/Simplified";

function App() {
  
  
  
  return (
    <Fragment>
      <div className="min-h-screen absolute top-0 bg-[#E5E5E5] w-full overflow-x-hidden">
        <Navbar />
        <Schedule />
        <Simplified />
        <DesignedTeam />
        <CalendlyAvailability />
        <ScheduleTeam />
      </div>
    </Fragment>
  );
}

export default App;
