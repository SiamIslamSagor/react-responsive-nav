// import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";
// import "./slider.css";

// import AwesomeSlider from "react-awesome-slider";
// import CoreStyles from "react-awesome-slider/src/core/styles.scss";
// import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const MySlider = () => {
  //   const data = [
  //     {
  //       id: "1",
  //       icon: "asset/mobile.png",
  //       title: "Web Design",
  //       desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  //       img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
  //     },
  //     {
  //       id: "2",
  //       icon: "asset/globe.png",
  //       title: "Mobile Application",
  //       desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //       img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
  //     },
  //     {
  //       id: "3",
  //       icon: "asset/writing.png",
  //       title: "Branding",
  //       desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //       img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
  //     },
  //   ];

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
  ];
  return (
    <div className="container mx-auto">
      {/* <AwesomeSlider
        style={{ width: "80vw" }}
        className="x h-[65vh]"
        animation="cubeAnimation"
      >
        {data.map(d => (
          <div key={d.id} data-src={d.img} />
        ))}
      </AwesomeSlider> */}
      <AutoplaySlider
        style={{ width: "80vw" }}
        className="x h-[65vh]"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={4000}
      >
        {data.map(d => (
          <div key={d.id} data-src={d.img} />
        ))}
      </AutoplaySlider>
    </div>
  );
};

export default MySlider;
