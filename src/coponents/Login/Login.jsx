import { AwesomeButtonProgress } from "react-awesome-button";

const Login = () => {
  return (
    <div className="container mx-auto">
      <div className="border-4 rounded-xl">
        <form className=" p-4">
          <div>
            <label className="label">
              <span className="label-text">
                Email<span className="text-red-600 text-xl">*</span>
              </span>
            </label>
            <input
              type="email"
              className="border-b-2 focus:outline-none text-xl text-gray-500 border-green-500 underline w-full"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">
                Password<span className="text-red-600 text-xl">*</span>
              </span>
            </label>
            <input
              type="password"
              className="border-b-2 focus:outline-none text-xl text-gray-500 border-green-500 underline w-full"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <AwesomeButtonProgress
              loadingLabel="Progress text..."
              resultLabel="Success text!"
              type="primary"
              onPress={async (element, next) => {
                // await for something then call
                next();
              }}
            >
              Log In
            </AwesomeButtonProgress>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
