import { Outlet } from "react-router-dom";
import NavBar from "../coponents/NavBar";
import MySlider from "../coponents/Slider/Slider";
import Button from "../coponents/Button/Button";
import Button2 from "../coponents/Button/Button2";
import Login from "../coponents/Login/Login";

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
      <div className="text-center mb-10">
        {/* <Button2></Button2> */}
        <Login></Login>
      </div>
      {/* <MySlider></MySlider> */}
    </div>
  );
};

export default Home;
