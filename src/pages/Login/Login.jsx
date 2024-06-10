import React, { useState } from "react";
import InputField from "../../Component/InputField";
import FinalButton from "../../Component/FinalButton";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    Password: "",
  });

  const { username, Password } = loginData;
  const [checked, setChecked] = useState(false);

  const handleOnChange = (e) => {
    setLoginData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  const handleCheckboxChange = () => {
    setChecked((prev) => !prev);
    console.log(checked);
    };

  return (
    <div className=" min-h-screen w-screen p-3 flex justify-center items-center bg-[#00053A0D]">
      <div className="p-5 lg:p-10 w-[580px] rounded-2xl bg-white flex flex-col gap-6">
        <h1 className="text-[20px] font-semibold text-center">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-3"
        >

            {/* Input area section */}
          <div className="flex flex-col gap-3 mt-4 w-full">

            {/* Username */}
            <InputField
              type="text"
              placeholder="Username"
              name="username"
              id={"username"}
              value={username}
              onChange={handleOnChange}
            />

            {/* Password */}
            <InputField
              type="password"
              placeholder="Password"
              name="Password"
              id={"Password"}
              value={Password}
              onChange={handleOnChange}
            />

            {/* Remember me and Forgot password */}
            <div className="flex justify-between text-[14px]">
              <div className="flex gap-2">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="hidden"
                  checked={checked}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="remember-me"
                  className="flex items-center cursor-pointer"
                >
                  <div
                    className={`w-5 h-5 flex items-center justify-center border-2 rounded-md transition-colors duration-200 ease-in-out ${
                      checked
                        ? "border-primary-600 bg-primary-600"
                        : "border-primary-300"
                    }`}
                  >
                    {checked && (
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </div>
                  <span className="ml-2 text-gray-700">Remember me</span>
                </label>
              </div>
              <div>
                <a
                  className="text-primary-600 underline"
                  href="/forget-password"
                >
                  Forgot Password?
                </a>
              </div>
            </div>


            {/* Login button */}
            <FinalButton onClick={handleSubmit} text="Login" />

          </div>
        </form>

        {/* Signup link */}
        <p className="text-[16px] text-gray-500 font-semibold text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-primary-600">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
