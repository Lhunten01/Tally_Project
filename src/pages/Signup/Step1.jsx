import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaCircleExclamation } from "react-icons/fa6";
import InputField from "../../Component/InputField";
import { Input } from "postcss";
import FinalButton from "../../Component/FinalButton";

const Step1 = () => {
  const [usernameTaken, setUsernameTaken] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    country: "+91",
    phone: "",
    password: "",
  });

  const { username, email, country, phone, password } = userData;

  const handleOnChange = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin") {
      setUsernameTaken(true);
    } else {
      setUsernameTaken(false);
    }
    if (username === "" || email === "" || phone === "" || password === "") {
      toast.error("Please fill all the fields");
      return;
    }
    console.log(userData);
  };
  return (
    <div className="p-5 lg:p-10 w-[580px] rounded-2xl bg-white flex flex-col gap-6">
      <h1 className="text-[20px] font-semibold text-center">Signup</h1>
      <div className="flex gap-[15px]">
        <div className="w-1/4 h-[3px] rounded-[10px] bg-primary-500 text-primary-600 lg:text-[16px] text-[10px]">
          Step 1 of 4
        </div>
        <div className="w-1/4 h-[3px] rounded-[10px] bg-gray-200"></div>
        <div className="w-1/4 h-[3px] rounded-[10px] bg-gray-200"></div>
        <div className="w-1/4 h-[3px] rounded-[10px] bg-gray-200"></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-3"
      >
        <div className="flex flex-col gap-3 mt-4 w-full">
          <div>
            <InputField
              type="text"
              placeholder="User name"
              name="username"
              id={"username"}
              value={username}
              onChange={handleOnChange}
            />
            {usernameTaken && (
              <p className="flex items-center text-[#5233FF] text-[15px]">
                <FaCircleExclamation className="mr-1" /> This username is taken.
                Try another.
              </p>
            )}
          </div>

          <InputField
            type="email"
            placeholder="Email"
            name="email"
            id={"email"}
            value={email}
            onChange={handleOnChange}
          />
          <div className="flex gap-3">
            <select
              value={country}
              className="w-[70px] h-14 rounded-xl border border-gray-300 pl-2"
            >
              <option value="+91">+91</option>
              <option value="+92">+92</option>
              <option value="+93">+93</option>
            </select>
            <InputField
              type="tel"
              placeholder="Phone Number"
              name="phone"
              id={'phone'}
              value={phone}
              onChange={handleOnChange}
            />
          </div>
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            id={"password"}
            value={password}
            onChange={handleOnChange}
          />
        </div>
        <p className="text-[14px] font-medium leading-[18px]">
          By signing up, you agree to the{" "}
          <a href="#" className="text-primary-600">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary-600">
            Privacy policy
          </a>
        </p>
        <FinalButton onClick = {handleSubmit} text={"Sign up"}/>
        <p className="text-[16px] text-gray-500 font-semibold">
          Already have an account?{" "}
          <a href="/login" className="text-primary-600">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Step1;
