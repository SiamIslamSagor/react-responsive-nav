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
        <Fade className=" px-1" cascade damping={0.1} direction="up">
          <p className="text-5xl font-bold tracking-tight">R</p>
          <p className="text-5xl font-bold tracking-tight">e</p>
          <p className="text-5xl font-bold tracking-tight">a</p>
          <p className="text-5xl font-bold tracking-tight">c</p>
          <p className="text-5xl font-bold tracking-tight">t</p>
          <p className="text-5xl font-bold tracking-tight"> </p>
          <p className="text-5xl font-bold tracking-tight">R</p>
          <p className="text-5xl font-bold tracking-tight">e</p>
          <p className="text-5xl font-bold tracking-tight">v</p>
          <p className="text-5xl font-bold tracking-tight">e</p>
          <p className="text-5xl font-bold tracking-tight">a</p>
          <p className="text-5xl font-bold tracking-tight">l</p>
        </Fade>
      </div>
      <button className="btn btn-success my-5" type="button">
        Message
      </button>
    </div>
  );
};

export default ReactAnimCom;
