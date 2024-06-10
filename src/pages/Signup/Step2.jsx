import React, { useEffect, useState } from "react";
import "./sign.css";
import OtpInput from "react-otp-input";

const Step2 = () => {
  const email = "alokverma73762@gmail.com";
  const phone = "+919876543210";
  const showEmail =
    email.split("@")[0].slice(0, 3) + "********" + "@" + email.split("@")[1];
  const showPhone =
    phone.slice(0, 3) +
    "*********" +
    phone.slice(phone.length - 2, phone.length);

  const [selected, setSelected] = useState(false);
  const [verificationMode, setVerificationMode] = useState("email"); // ["email", "phone"]
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(300); // 300 seconds = 5 minutes

  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `0${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleBack = () => {
    console.log("Back");
  };
  const verificationModeSelection = (e) => {
    setVerificationMode(e.target.value);
  };
  const handleSubmit = () => {
    if (selected) {
      console.log("Verify");
    } else {
      setTimeLeft(300);
      setSelected(true);
    }
  };
  const resend = ()=>{
    setTimeLeft(300);
  }
  return (
    <div className="p-10 max-w-[580px] rounded-2xl bg-white flex flex-col gap-6">
      <h1 className="text-[20px] font-semibold text-center">Verification</h1>
      <div className="flex h-[27px] gap-[15px]">
        <div className="w-1/4 h-[3px] rounded-[10px] bg-gray-200"></div>
        <div className="w-1/4 h-[3px] rounded-[10px] bg-primary-500 text-primary-600">
          Step 2 of 4
        </div>
        <div className="w-1/4 h-[3px] rounded-[10px] bg-gray-200"></div>
        <div className="w-1/4 h-[3px] rounded-[10px] bg-gray-200"></div>
      </div>

      {!selected ? (
        <div>
          <div className="">
            <p className="text-[20px] leading-6 font-normal">
              How would you like to receive code?
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-3 items-start">
              <input
                type="radio"
                id="email"
                name="verification"
                value="email"
                onChange={verificationModeSelection}
              />
              <label htmlFor="email">
                <div className="">
                  <p className="text-[18px]">Send code via email</p>
                  <p className="text-[14px] text-gray-600">{showEmail}</p>
                </div>
              </label>
            </div>
            <div className="flex gap-3 items-start">
              <input
                type="radio"
                id="phone"
                name="verification"
                value="phone"
                onChange={verificationModeSelection}
              />
              <label htmlFor="phone">
                <div className="">
                  <p className="text-[18px]">Send code via Text message</p>
                  <p className="text-[14px] text-gray-600">{showPhone}</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="">
            <p className="text-[20px] leading-6 font-normal">
              Enter your Verification Code
            </p>
          </div>
          <div className="flex gap-[28px]">
            <OtpInput
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
          </div>
          <div className="">
            <p className="text-electric-violet-600 font-semibold text-[18px]">
              {formatTime(timeLeft)}
            </p>
            <p className="">
              We send verification code to your{" "}
              {verificationMode === "email" ? "email " : "phone "}{" "}
              <span className="text-primary-600">
                {verificationMode === "email" ? showEmail : showPhone}
              </span>
              .<br />
              You can check your inbox.
            </p>
            <p className="mt-2 text-primary-600 underline cursor-pointer" onClick={resend}>
              I didn’t received the code? Send again
            </p>
          </div>
        </div>
      )}

      <button
        type="submit"
        className="p-2 bg-primary-600 text-white rounded-md w-full"
        onClick={handleSubmit}
      >
        {selected ? "Verify" : "Continue"}
      </button>
      <p
        className="text-center text-[16px] text-gray-500 font-medium"
        onClick={handleBack}
      >
        Back
      </p>
    </div>
  );
};

export default Step2;
