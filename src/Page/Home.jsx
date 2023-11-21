import { Outlet } from "react-router-dom";
import NavBar from "../coponents/NavBar";
import MySlider from "../coponents/Slider/Slider";
// import Button from "../coponents/Button/Button";
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
import { Button } from "flowbite-react";
import Footer from "../coponents/Footer/Footer";
import ReactAnimCom from "../coponents/ReactAnimCom/ReactAnimCom";
import BounceExample from "../coponents/ReactAnimCom/ReactAnimCom";
// import AnimTitle from "../coponents/AnimTitle/AnimTitle";
// import { Button } from "@mui/material";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="">
      <NavBar></NavBar>
      {/* <div className="border border-transparent">
        <ReactNav></ReactNav>
      </div> */}
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      {/* <div>
        <AnimTitle></AnimTitle>
      </div> */}
      <div className="text-center mb-10">
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button className="" color="blue">
            Blue
          </Button>
          <Button className="focus:ring-0" color="gray">
            Gray
          </Button>
          <Button className="focus:ring-0" color="dark">
            Dark
          </Button>
          <Button className="focus:ring-0" color="light">
            Light
          </Button>
          <Button className="focus:ring-0" color="success">
            Success
          </Button>
          <Button className="focus:ring-0" color="failure">
            Failure
          </Button>
          <Button className="focus:ring-0" color="warning">
            Warning
          </Button>
          <Button className="focus:ring-0" color="purple">
            Purple
          </Button>
        </div>
        {/* <Button
          className="hover:bg-green-300 text-black bg-red-400 px-10"
          variant="contained"
        >
          Contained
        </Button> */}
      </div>
      {/* <Button className="p-4 bg-green-400">muIII</Button> */}
      <button className="btn btn-primary">btn</button>
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
        <BounceExample></BounceExample>
      </div>
      {/* <div className="mt-[900px]">
        <Footer></Footer>
      </div> */}
      {/* <MySlider></MySlider> */}
    </div>
  );
};

export default Home;
