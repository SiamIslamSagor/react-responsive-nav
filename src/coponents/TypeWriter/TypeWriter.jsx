import PropTypes from "prop-types";
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = ({
  staticText,
  staticTextColorTailwind,
  textArray,
  textArrayColor,
  cursor,
}) => {
  return (
    <div className="App bg-blue-300">
      <h1
        className={`bg-green-400 text-left text-5xl font-medium ${staticTextColorTailwind}`}
      >
        {staticText}
        <span style={{ color: textArrayColor, fontWeight: "bold" }}>
          <Typewriter
            words={[...textArray]}
            loop={0}
            cursor
            cursorStyle={`${cursor}`}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

TypeWriter.propTypes = {
  staticText: PropTypes.string,
  staticTextColorTailwind: PropTypes.string,
  textArray: PropTypes.array,
  textArrayColor: PropTypes.string,
  cursor: PropTypes.string,
};

export default TypeWriter;
