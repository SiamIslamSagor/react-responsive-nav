import { useState } from "react";
import ReactiveButton from "reactive-button";
import "./btn.css";

const Button2 = () => {
  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");

    // send an HTTP request
    setTimeout(() => {
      setState("error");
    }, 2000);
  };
  return (
    <ReactiveButton
      type="submit"
      buttonState={state}
      idleText="Submit"
      loadingText="Loading"
      successText="Done"
      errorText="Failed"
      onClick={onClickHandler}
    />
  );
};

export default Button2;
