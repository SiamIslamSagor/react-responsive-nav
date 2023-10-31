import { Outlet } from "react-router-dom";
import NavBar from "../coponents/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
