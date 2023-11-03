import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { AwesomeButtonProgress } from "react-awesome-button";
import "./btn.css";

// import { BeakerIcon, TrashIcon } from "@primer/octicons-react"; // custom icons

const Button = () => {
  return (
    <div className="space-y-5 mt-4">
      <div className="space-x-2">
        <AwesomeButton type="primary">Primary</AwesomeButton>
        <AwesomeButton type="secondary">Secondary</AwesomeButton>
        <AwesomeButton type="danger">Danger</AwesomeButton>
      </div>

      <div className="space-x-2">
        <AwesomeButtonProgress
          loadingLabel="Progress text..."
          resultLabel="Success text!"
          type="primary"
          onPress={async (element, next) => {
            // await for something then call
            next();
          }}
        >
          Primary Progress
        </AwesomeButtonProgress>
        <AwesomeButtonProgress
          loadingLabel="Progress text..."
          resultLabel="Success text!"
          type="secondary"
          onPress={async (element, next) => {
            // await for something then call
            next();
          }}
        >
          Primary Progress
        </AwesomeButtonProgress>
        <AwesomeButtonProgress
          loadingLabel="Progress text..."
          resultLabel="Success text!"
          type="anchor"
          onPress={async (element, next) => {
            // await for something then call
            next();
          }}
        >
          Primary Progress
        </AwesomeButtonProgress>
      </div>

      <div className="space-x-2"></div>
    </div>
  );
};

export default Button;
