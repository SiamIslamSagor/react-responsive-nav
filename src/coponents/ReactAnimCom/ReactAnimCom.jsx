// import { Bounce } from "react-reveal";

import {
  AttentionSeeker,
  // import {
  //   AttentionSeeker,
  //   Bounce,
  //   Fade,
  //   Flip,
  //   Hinge,
  //   JackInTheBox,
  //   Roll,
  //   Rotate,
  //   Slide,
  //   Zoom,
} from "react-awesome-reveal";
import "animate.css";

// "bounce";
// "flash";
// "headShake";
// "heartBeat";
// "jello";
// "pulse";
// "rubberBand";
// "shake";
// "shakeX";
// "shakeY";
// "swing";
// "tada";
// "wobble";

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

  const handleMouseEnter = hoverChr => {
    let elem = `.${hoverChr}`;
    let animChr = document.querySelector(elem);
    if (animChr.classList.length === 5) {
      console.log("not have");
      animChr.classList.add("animate__rubberBand");
    } else {
      console.log("have");
      animChr.classList.remove("animate__rubberBand");
    }
    console.log(animChr.classList.length);
  };

  return (
    <div>
      <div className="w-[600px] h-[600px] flex items-center justify-center mx-auto ">
        {/* <Bounce direction="ri">
          <h1 className="text-5xl font-medium">React Reveal</h1>
        </Bounce> */}
        <div
          // className="animate__rubberBand px-1"
          className="flex gap-4 px-2"
          // cascade
          // damping={0.1}
          // direction="left"
          // bounce
          // flash
          // headShake
          // heartBeat
          // jello
          // pulse
          // rubberBand
          // shake
          // shakeX
          // shakeY
          // swing
          // tada
          // wobble
        >
          <AttentionSeeker className="text-5xl font-bold tracking-tight anim-chr1 ">
            <p onMouseEnter={() => handleMouseEnter("anim-chr1")}>R</p>
          </AttentionSeeker>
          <AttentionSeeker className="text-5xl font-bold tracking-tight anim-chr2">
            <p onMouseEnter={() => handleMouseEnter("anim-chr2")}>e</p>
          </AttentionSeeker>
          <AttentionSeeker className="text-5xl font-bold tracking-tight anim-chr3">
            <p onMouseEnter={() => handleMouseEnter("anim-chr3")}>a</p>
          </AttentionSeeker>
          <AttentionSeeker className="text-5xl font-bold tracking-tight anim-chr4">
            <p onMouseEnter={() => handleMouseEnter("anim-chr4")}>c</p>
          </AttentionSeeker>
          <AttentionSeeker className="text-5xl font-bold tracking-tight anim-chr5">
            <p onMouseEnter={() => handleMouseEnter("anim-chr5")}>t</p>
          </AttentionSeeker>
          <AttentionSeeker className="text-5xl font-bold tracking-tight anim-chr6">
            <p onMouseEnter={() => handleMouseEnter("anim-chr6")}></p>
          </AttentionSeeker>
          <AttentionSeeker className="text-5xl font-bold tracking-tight anim-chr7">
            <p onMouseEnter={() => handleMouseEnter("anim-chr7")}>R</p>
          </AttentionSeeker>
          <AttentionSeeker className="text-5xl  font-bold tracking-tight anim-chr8">
            <p onMouseEnter={() => handleMouseEnter("anim-chr8")}>e</p>
          </AttentionSeeker>
          <AttentionSeeker className="text-5xl font-bold tracking-tight anim-chr9">
            <p onMouseEnter={() => handleMouseEnter("anim-chr9")}>v</p>
          </AttentionSeeker>
          <AttentionSeeker className="text-5xl font-bold tracking-tight anim-chr10">
            <p onMouseEnter={() => handleMouseEnter("anim-chr10")}>e</p>
          </AttentionSeeker>
          <AttentionSeeker className="text-5xl font-bold tracking-tight anim-chr11">
            <p onMouseEnter={() => handleMouseEnter("anim-chr11")}>a</p>
          </AttentionSeeker>
          <AttentionSeeker className="text-5xl font-bold tracking-tight anim-chr12">
            <p onMouseEnter={() => handleMouseEnter("anim-chr12")}>l</p>
          </AttentionSeeker>
        </div>
      </div>
      <button className="btn btn-success my-5" type="button">
        Message
      </button>
    </div>
  );
};

export default ReactAnimCom;
