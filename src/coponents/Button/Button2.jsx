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
    <div className="mb-[300vh] container mx-auto text-center">
      <div className=" h-96 w-80 rounded-lg bg-base-200">
        <ReactiveButton
          buttonState={state}
          idleText="Submit"
          loadingText="Loading"
          successText="Done"
          onClick={onClickHandler}
        />
      </div>
    </div>
  );
};

export default Button2;
