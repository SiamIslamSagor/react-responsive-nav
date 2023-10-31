import { NavLink } from "react-router-dom";
import reactLogo from "../assets/react.svg";

const NavBar = () => {
  const links = (
    <>
      <div>
        <NavLink to="/">home</NavLink>
      </div>

      <div>
        <NavLink to="/about">about</NavLink>
      </div>

      <div>
        <NavLink to="/services">services</NavLink>
      </div>

      <div>
        <NavLink to="/portfolio">portfolio</NavLink>
      </div>

      <div>
        <NavLink to="/contact">contact</NavLink>
      </div>
    </>
  );

  return (
    <div>
      <div className="navbar my-5 container mx-auto">
        <div className="navbar-start">
          <a className="normal-case text-xl">
            <img src={reactLogo} alt="logo" />
          </a>
        </div>

        <div className="navbar-end">
          <div className="link-div hidden md:flex gap-10">{links}</div>
          <div className="dropdown  dropdown-end">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
