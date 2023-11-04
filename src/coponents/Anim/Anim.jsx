import data from "../../assets/anim.json";
import Lottie from "lottie-react";

const Anim = () => {
  return <Lottie animationData={data} loop={true}></Lottie>;
};

export default Anim;
