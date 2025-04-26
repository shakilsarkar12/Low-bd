import React, { useState } from "react";
import Divider from "../../Components/Divider/Divider";

const AuthForm = ({
  handleGoogleAuth,
  handleLogIn,
  handleSignUp,
  password,
  setPassword,
  email,
  setEmail,
  name,
  setName,
  error,
}) => {
  const [signUpIn, setSignUpIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const goToLogIn = () => {
    setSignUpIn(true);
    setEmail("");
    setPassword("");
    setName("");
  };

  const goToSignUp = () => {
    setSignUpIn(false);
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <div>
      {signUpIn ? (
        <div className="min-h-[calc(90vh-64px)] flex items-center justify-center">
          <div className="border-2 rounded-lg border-gray-200 p-10 text-center w-3/12">
            <h1 className="text-2xl font-bold text-center mb-5">Log In</h1>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center justify-center flex-col w-full"
            >
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-blue-500 focus:outline-primary mb-4 w-full px-4 py-2 rounded-sm"
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-blue-500 focus:outline-primary mb-4 w-full px-4 py-2 rounded-sm"
              />
              <button
                type="button"
                className="text-sm text-blue-500 mb-4 self-end"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide Password" : "Show Password"}
              </button>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                onClick={handleLogIn}
                className="btn btn-primary mb-4 w-full"
              >
                Log In
              </button>
            </form>
            <Divider text="or"></Divider>
            <h3>
              Don't Have an account?
              <button
                onClick={goToSignUp}
                className="text-red-500 font-semibold ml-0.5"
              >
                Sign up
              </button>
            </h3>
            <Divider text="or"></Divider>
            <button
              onClick={handleGoogleAuth}
              className="bg-white text-black border border-gray-300 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition w-fit mx-auto"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
                className="w-5 h-5"
              />
              <span>Log In with Google</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-[calc(90vh-64px)] flex items-center justify-center">
          <div className="border-2 rounded-lg border-gray-200 p-10 text-center w-3/12">
            <h1 className="text-2xl font-bold text-center mb-5">Sign Up</h1>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center justify-center flex-col w-full"
            >
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-blue-500 focus:outline-primary mb-4 w-full px-4 py-2 rounded-sm"
              />
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-blue-500 focus:outline-primary mb-4 w-full px-4 py-2 rounded-sm"
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-blue-500 focus:outline-primary mb-4 w-full px-4 py-2 rounded-sm"
              />
              <button
                type="button"
                className="text-sm text-blue-500 mb-4 self-end"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide Password" : "Show Password"}
              </button>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                onClick={handleSignUp}
                className="btn btn-primary mb-4 w-full"
              >
                Sign Up
              </button>
            </form>
            <Divider text="or"></Divider>
            <h3>
              Already Have an account?
              <button
                onClick={goToLogIn}
                className="text-red-500 font-semibold ml-0.5"
              >
                Login
              </button>
            </h3>
            <Divider text="or"></Divider>
            <button
              onClick={handleGoogleAuth}
              className="bg-white text-black border border-gray-300 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition w-fit mx-auto"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
                className="w-5 h-5"
              />
              <span>Sign Up with Google</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
