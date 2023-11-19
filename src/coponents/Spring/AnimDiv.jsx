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
    <div className="flex flex-col max-md:gap-10 md:flex-row">
      <div className="px-2 space-y-5 max-md:w-full md:max-w-[35vw] lg:max-w-[45vw]">
        <div className="border-2 rounded-xl bg-red-400">
          <div
            //   data-aos="fade-right"
            data-aos-duration="800"
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            //   data-aos-duration="600"
            className="flex items-center gap-3"
          >
            <div className="p-3 bg-[#bc9b6a] text-white rounded-full">
              <BsCloudArrowDownFill></BsCloudArrowDownFill>
            </div>
            <div>
              <p className="text-[12px]">
                30% OFF ON LAUNDRY AND DRY CLEANING SERVICES
              </p>
            </div>
          </div>
        </div>

        {/* <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="flex items-center gap-3"
        >
          <div className="p-3 bg-[#bc9b6a] text-white rounded-full">
            <AiFillCar></AiFillCar>
          </div>
          <div>
            <p className="text-[12px]">
              TWO COMPLIMENTARY COVERED PARKING SPACES
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
