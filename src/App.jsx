import reactLogo from "./assets/react.svg";
import "./App.css";
import { Link, NavLink } from "react-router-dom";

function App() {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/ABOUT">ABOUT</NavLink>

      <NavLink to="/SERVICES">SERVICES</NavLink>

      <NavLink to="/PORTFOLIO">PORTFOLIO</NavLink>

      <NavLink to="/CONTACT">CONTACT</NavLink>
    </>
  );

  return (
    <div className="bg-blue-400">
      <div className="container mx-auto">
        <div>
          <a href="#" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div>
          {" "}
          <Link to="/CONTACT">CONTACT</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
