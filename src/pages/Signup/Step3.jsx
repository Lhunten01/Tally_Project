import React, { useState } from "react";
import InputField from "../../Component/InputField";

const Step3 = ({step,setStep}) => {

    const [accountantData, setAccountantData] = useState({
        accountantName: "",
        address: "",
        salesTax: ""
    })

    const {accountantName, address, salesTax} = accountantData;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(accountantData);
    }

    const handleBack = () => {
        console.log("Back");
        setStep(step-2);
    }
    const handleOnChange = (e) => {
        setAccountantData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };
  return (
    <div className="p-10 w-[580px] rounded-2xl bg-white flex flex-col gap-6">
      <h1 className="text-[20px] font-semibold text-center">CPA Info</h1>
      <div className="flex h-[27px] gap-[15px]">
        <div className="w-1/4 h-[3px] rounded-[10px] bg-gray-200"></div>
        <div className="w-1/4 h-[3px] rounded-[10px] bg-gray-200"></div>
        <div className="w-1/4 h-[3px] rounded-[10px] bg-primary-500 text-primary-600">
          Step 3 of 4
        </div>
        <div className="w-1/4 h-[3px] rounded-[10px] bg-gray-200"></div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-3"
      >
        
        <InputField
            type={"text"}
            name="accountantName"
            value={accountantName}
            onChange={handleOnChange}
            id={"accountantName"}
            placeholder={"Accountant's Name / Firm Name"}
        />
        <div className="w-full">
            <p className="text-electric-violet-600 font-poppins text-[12px] mb-2">If you don't find exact address, choose city or pincode and proceed.</p>
        <InputField
            type={"text"}
            name='address'
            value={address}
            onChange={handleOnChange}
            id={"address"}
            placeholder={"Search Address"}
        />
        </div>
        <InputField
            type={"text"}
            name="salesTax"
            value={salesTax}
            onChange={handleOnChange}
            id={"salesTax"}
            placeholder={"Sales Tax #(GST #/HST #etc.)"}
        />

        <button
          type="submit"
          className="p-2 h-14 bg-primary-600 text-white rounded-md w-full"
        >
          All Done
        </button>
      </form>
      <p
        className="text-center text-[16px] cursor-pointer text-gray-500 font-medium"
        onClick={handleBack}
      >
        Back
      </p>
    </div>
  );
};

export default Step3;
