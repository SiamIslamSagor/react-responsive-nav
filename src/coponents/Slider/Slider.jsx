import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const MySlider = () => {
  const data = [
    {
      id: 1,
      img: "https://caferati.me/images/series/bojack-0.png",
    },
    {
      id: 2,
      img: "https://caferati.me/images/series/bojack-3.jpg",
    },
    {
      id: 3,
      img: "https://caferati.me/images/series/bojack-4.jpg",
    },
    {
      id: 4,
      img: "https://caferati.me/images/series/bojack-0.png",
    },
    {
      id: 5,
      img: "https://caferati.me/images/series/bojack-3.jpg",
    },
    {
      id: 6,
      img: "https://caferati.me/images/series/bojack-4.jpg",
    },
  ];
  return (
    <div className="max-h-[70vh] mx-auto max-w-[90vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map(d => (
          <SwiperSlide key={d.id}>
            <img className="max-h-[50vh]" src={d.img} alt="slide img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySlider;
