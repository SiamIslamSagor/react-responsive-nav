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
import TypeWriter from "../coponents/TypeWriter/TypeWriter";
import ReactNav from "../coponents/ReactNav/ReactNav";
import MyComponent from "../coponents/Spring/AnimDiv";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mb-[300px]">
      <NavBar></NavBar>
      {/* <div className="border border-transparent">
        <ReactNav></ReactNav>
      </div> */}
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <div className="text-center mb-10">
        <Button></Button>
      </div>
      <div className="text-center flex justify-center mb-10 flex-col gap-10">
        {/* <TypeWriter
          staticText={"Hello I am"}
          staticTextColorTailwind={"text-blue-500"}
          textArray={["DEVELOPER", "DESIGNER", "EDITOR"]}
          textArrayColor={"yellow"}
          cursor={"-"}
        ></TypeWriter> */}
        {/* <Button2></Button2> */}
        {/* <Anim></Anim> */}
        {/* <Register></Register> */}
        {/* <Login></Login> */}
        {/* <RegisterAnim></RegisterAnim> */}
        {/* <User></User> */}
        <MyComponent></MyComponent>
      </div>
      {/* <MySlider></MySlider> */}
    </div>
  );
};

export default Home;
