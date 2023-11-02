import { Outlet } from "react-router-dom";
import NavBar from "../coponents/NavBar";
import MySlider from "../coponents/Slider/Slider";
import Button from "../coponents/Button/Button";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <div className="text-center mb-10">
        <Button></Button>
      </div>
      {/* <MySlider></MySlider> */}
    </div>
  );
};

export default Home;
