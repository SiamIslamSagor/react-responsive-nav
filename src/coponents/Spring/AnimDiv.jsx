import { useSpring, animated } from "@react-spring/web";
import { AiFillCar } from "react-icons/ai";
import { BsCloudArrowDownFill } from "react-icons/bs";

export default function MyComponent() {
  const springs = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: 10, opacity: 0.5 },
    delay: 900,
  });
  console.log(springs);

  return (
    <div
      data-aos="zoom-in"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="3000"
      className=" p-10 bg-blue-950 max-w-[500px] mx-auto border-8 text-white text-xl"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In quo doloribus
      veniam eius corrupti totam, eaque animi magnam explicabo reiciendis maxime
      non odit. Veritatis animi, inventore quaerat dolorum a fuga?
    </div>
  );
}
