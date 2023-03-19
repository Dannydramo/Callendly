import React, { Fragment, useState, useEffect } from "react";
import CallendlyLogo from "../assets/Callendly.png";
import Dropdown from "../assets/Vector.png";
import Openmenu from "../assets/icon-menu.svg";
import Closemenu from "../assets/icon-close.svg";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [navShadow, setNavShadow] = useState("");
  

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setNavbarBackground("#F4F6FC");
      setNavShadow(
        "-3px -3px 0px rgba(24, 52, 86, 0.06), 0px 3px 3px rgba(24, 52, 86, 0.11)"
      );
    } else {
      setNavbarBackground("transparent");
      setNavShadow("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div
        className="fixed top-0 w-full z-[40]"
        style={{ backgroundColor: navbarBackground, boxShadow: navShadow }}
      >
        <div className="flex justify-between items-center w-[95%] md:w-[90%] mx-auto h-16 md:h-20">
          <div className="flex items-center">
            <img src={CallendlyLogo} alt="Logo" />
            <p className="text-lightBlue">Callendly</p>
          </div>
          <img
            src={open ? Closemenu : Openmenu}
            className="lg:hidden z-[42]"
            onClick={() => setOpen(!open)}
          />

          <div
            className={`flex flex-col lg:justify-between lg:w-[70%] items-start lg:items-center  lg:flex-row lg:space-x-8 bg-topBg lg:bg-transparent space-y-5 lg:space-y-0 lg:static fixed top-0 z-[32] lg:h-auto h-screen w-screen duration-500 ease-linear px-11 py-12 lg:py-0 lg:px-0 ${
              !open ? "right-[-100%]" : "right-0"
            }`}
          >
            <div className="">
              <ul className="flex flex-col lg:flex-row justify-between lg:items-center space-y-8 lg:space-y-0  lg:space-x-12 text-dimBlue absolute top-20 left-4 lg:relative lg:top-0">
                <li>
                  <a href="">Product</a>
                </li>
                <li>
                  <a href="" className="flex items-center">
                    Solutions{" "}
                    <img src={Dropdown} alt="" className="mt-2 ml-1" />
                  </a>
                </li>
                <li>
                  <a href="">Teams & Companies</a>
                </li>
                <li>
                  <a href="" className="flex items-center">
                    Resources{" "}
                    <img src={Dropdown} alt="" className="mt-2 ml-1" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col lg:flex-row justify-between lg:items-center space-y-8 lg:space-y-0  lg:space-x-8 absolute top-[18rem] left-4 lg:relative lg:top-0">
              <button className="text-start">Login</button>
              <button className="bg-lightBlue text-white px-4 py-2 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
