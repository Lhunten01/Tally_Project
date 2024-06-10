import React, { useState } from "react";
import OTPInput from "react-otp-input";
import "./login.css";
import InputField from "../../Component/InputField";
import toast from "react-hot-toast";

const ResetPassword = () => {
    const email = "alokverma73762@gmail.com";
    const showEmail =
    email.split("@")[0].slice(0, 3) + "***" + "@" + email.split("@")[1];
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(otp.length < 6){
        toast.error("Invalid Otp.")
    }
    else if(password === ""){
        toast.error("Password required.")
    }
    console.log(otp, password);
  };
  return (
    <div className=" min-h-screen w-screen p-3 flex justify-center items-center bg-[#00053A0D]">
      <div className="p-5 lg:p-10 w-[580px] rounded-2xl bg-white flex flex-col gap-6">
        <h1 className="text-[20px] font-semibold text-center">
          Reset Password
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="">
            <p className="text-[20px] leading-6 font-normal font-bell">
              Enter your Verification Code
            </p>
          </div>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderInput={(props) => (
              <input
                {...props}
                style={{ width: "60px" }}
                className="otpInput"
              />
            )}
          />

          <p className="text-[13px] font-bell">
            Verification code has been sent to your registered email <span className="text-primary-600">{showEmail}</span>.
            <br />
            Please check your message.
            <br />
            If you’re unable to find the email, please check your spam folder as
            well
          </p>

          <InputField
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            name={"password"}
            value={password}
            id={"password"}
            placeholder={"New Password"}
          />

          <button
            type="submit"
            className="p-2 h-14 bg-primary-600 text-white rounded-md w-full"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        <p className="text-[16px] text-gray-500 font-semibold text-center">
          <a href="/login">Back to Login</a>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
