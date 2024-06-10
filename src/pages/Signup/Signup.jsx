import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const Signup = () => {
  const [step, setStep] = useState(1);
  return (
    <div className=" min-h-screen w-screen p-3 flex justify-center items-center bg-[#00053A0D]">
      {step === 1 ? <Step1 setStep={setStep} step={step} /> : step === 2 ? <Step2 setStep={setStep} step={step} /> : <Step3 setStep={setStep} step={step} />}
    </div>
  );
};

export default Signup;
