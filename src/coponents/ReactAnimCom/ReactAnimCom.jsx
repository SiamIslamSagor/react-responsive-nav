import { Bounce } from "react-reveal";

const ReactAnimCom = () => {
  const data = ["R", "e", "a", "c", "t", " ", "R", "e", "v", "e", "a", "l"];
  const handleEnter = () => {};
  const handleLeave = () => {};
  return (
    <div>
      <div className="w-[600px] h-[600px] flex items-center justify-center mx-auto ">
        <Bounce>
          <h1 className="text-5xl font-medium">
            {data?.map(chr => (
              <span key={chr}>{chr}</span>
            ))}
          </h1>
        </Bounce>
      </div>
      <button className="btn btn-success my-5" type="button">
        Message
      </button>
    </div>
  );
};

export default ReactAnimCom;
