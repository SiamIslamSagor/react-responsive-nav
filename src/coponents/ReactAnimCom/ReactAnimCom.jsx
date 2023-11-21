// import { Bounce } from "react-reveal";

import {
  Bounce,
  Fade,
  Flip,
  Hinge,
  JackInTheBox,
  Roll,
  Rotate,
  Slide,
  Zoom,
} from "react-awesome-reveal";

const ReactAnimCom = () => {
  //   const data = ["React Reveal"];
  //   const data = ["R", "e", "a", "c", "t", " ", "Re", "v", "e", "a", "l"];
  //   const mainData = [
  //     {
  //       uniqueId: "jkhsdf8s7fu44j3dsfk",
  //       char: "R",
  //     },
  //     {
  //       uniqueId: "jkloioidfoif8s7fu44j3dsfk",
  //       char: "e",
  //     },
  //     {
  //       uniqueId: "dfgkdfgkdfgdfgdfg",
  //       char: "a",
  //     },
  //     {
  //       uniqueId: "dfgdfgdfgdfgdfg",
  //       char: "c",
  //     },
  //     {
  //       uniqueId: "dfgdfgdfgdfgdfgdfg",
  //       char: "t",
  //     },
  //     {
  //       uniqueId: "dfgdfgdfgdfgdfgdf",
  //       char: "R",
  //     },
  //     {
  //       uniqueId: "dfgdfgdfgdfgdfgdfg",
  //       char: "e",
  //     },
  //     {
  //       uniqueId: "dfgdfgdfgdfgdfgdfg",
  //       char: "v",
  //     },
  //     {
  //       uniqueId: "dfgdfgdfgdfgdfgdfg",
  //       char: "e",
  //     },
  //     {
  //       uniqueId: "dfgdfgdfgdfgdfgdfg",
  //       char: "a",
  //     },
  //     {
  //       uniqueId: "dfgdfgd98897fgdfgdfgdfg",
  //       char: "l",
  //     },
  //   ];

  //   console.log(mainData);
  //   const handleEnter = () => {};
  //   const handleLeave = () => {};
  return (
    <div>
      <div className="w-[600px] h-[600px] flex items-center justify-center mx-auto ">
        {/* <Bounce direction="ri">
          <h1 className="text-5xl font-medium">React Reveal</h1>
        </Bounce> */}
        <Flip className="bg-red-400 p-2" cascade damping={0.1} direction="left">
          <p className="text-2xl font-bold mx-2">R</p>
          <p className="text-2xl font-bold mx-2">e</p>
          <p className="text-2xl font-bold mx-2">a</p>
          <p className="text-2xl font-bold mx-2">c</p>
          <p className="text-2xl font-bold mx-2">t</p>
          <p className="text-2xl font-bold mx-2"> </p>
          <p className="text-2xl font-bold mx-2">R</p>
          <p className="text-2xl font-bold mx-2">e</p>
          <p className="text-2xl font-bold mx-2">v</p>
          <p className="text-2xl font-bold mx-2">e</p>
          <p className="text-2xl font-bold mx-2">a</p>
          <p className="text-2xl font-bold mx-2">l</p>
        </Flip>
      </div>
      <button className="btn btn-success my-5" type="button">
        Message
      </button>
    </div>
  );
};

export default ReactAnimCom;
