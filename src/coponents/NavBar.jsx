import { NavLink } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import "./NavBar.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const NavBar = () => {
  const [mobileNavCall, setMobileNavCall] = useState(false);
  const [navClass, setNavClass] = useState("");

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 300) {
      setNavClass(" fixed top-0 left-0 w-full bg-[#512B81] text-white");
    } else {
      setNavClass("bg-[#4477CE]");
    }
  });

  const links = (
    <>
      <div className="max-md:w-full md:text-lg font-semibold">
        <NavLink to="/">HOME</NavLink>
      </div>

      <div className="max-md:w-full md:text-lg font-semibold">
        <NavLink to="/about">ABOUT</NavLink>
      </div>

      <div className="max-md:w-full md:text-lg font-semibold">
        <NavLink to="/services">SERVICES</NavLink>
      </div>

      <div className="max-md:w-full md:text-lg font-semibold">
        <NavLink to="/portfolio">PORTFOLIO</NavLink>
      </div>

      <div className="max-md:w-full md:text-lg font-semibold">
        <NavLink to="/contact">CONTACT</NavLink>
      </div>

      <div className="max-md:w-full md:text-lg font-semibold">
        <NavLink to="/dashboard">DASHBOARD</NavLink>
      </div>
    </>
  );

  return (
    <div className=" sticky top-0 duration-700">
      <div className={`  duration-700 ${navClass}`}>
        <div className="py-4 container mx-auto flex justify-between items-center">
          <div className="">
            <img className="h-14" src={reactLogo} alt="logo" />
          </div>
          <div className="">
            <div className="hidden md:flex gap-10">{links}</div>
            <div className="">
              <button
                onClick={() => setMobileNavCall(!mobileNavCall)}
                tabIndex={0}
                className="btn btn-ghost md:hidden"
              >
                {mobileNavCall ? (
                  <AiOutlineClose className="text-3xl"></AiOutlineClose>
                ) : (
                  <AiOutlineMenu className="text-3xl"></AiOutlineMenu>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed md:hidden duration-700 min-h-screen overflow-x-hidden bg-[#35155D] w-[425px] top-0 -z-10 ${
          mobileNavCall ? "right-0" : "-right-[425px]"
        }`}
      >
        <div className="mt-[140px] pl-16 flex flex-col items-center gap-4 text-white">
          {links}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
