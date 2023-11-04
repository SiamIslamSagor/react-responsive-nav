import logAnim from "../../assets/loginAnim.json";
import Lottie from "lottie-react";

const LoginAnim = () => {
  return <Lottie animationData={logAnim} loop={true}></Lottie>;
};

export default LoginAnim;
