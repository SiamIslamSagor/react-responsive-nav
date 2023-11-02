import { Outlet } from "react-router-dom";
import NavBar from "../coponents/NavBar";
import MySlider from "../coponents/Slider/Slider";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <MySlider></MySlider>
    </div>
  );
};

export default Home;
