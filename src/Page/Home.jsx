import { Outlet } from "react-router-dom";
import NavBar from "../coponents/NavBar";
import MySlider from "../coponents/Slider/Slider";
import Button from "../coponents/Button/Button";
import Button2 from "../coponents/Button/Button2";
import Login from "../coponents/Login/Login";
import Register from "../coponents/Register/Register";
import Anim from "../coponents/Anim/Anim";
import RegisterAnim from "../coponents/Anim/RegisterAnim";
import User from "../coponents/User/User";

const Home = () => {
  return (
    <div className="mb-[300px]">
      <NavBar></NavBar>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <div className="text-center mb-10">
        <Button></Button>
      </div>
      <div className="text-center flex justify-center mb-10 flex-col gap-10">
        {/* <Button2></Button2> */}
        {/* <Anim></Anim> */}
        {/* <Register></Register> */}
        {/* <Login></Login> */}
        {/* <RegisterAnim></RegisterAnim> */}
        <User></User>
      </div>
      <MySlider></MySlider>
    </div>
  );
};

export default Home;
