import regAnim from "../../assets/registerAnim.json";
import Lottie from "lottie-react";

const RegisterAnim = () => {
  return <Lottie animationData={regAnim} loop={true}></Lottie>;
};

export default RegisterAnim;
