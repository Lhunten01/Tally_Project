import React, { useState } from 'react'
import InputField from '../../Component/InputField';
import FinalButton from '../../Component/FinalButton';
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
    const navigate = useNavigate();
    const [username, setusername] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("submit");
        navigate('/reset-password')
    }
  return (
    <div className=" min-h-screen w-screen p-3 flex justify-center items-center bg-[#00053A0D]">
      <div className="p-5 lg:p-10 w-[580px] rounded-2xl bg-white flex flex-col gap-6">
        <h1 className="text-[20px] font-semibold text-center">Forget Password</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-6"
        >

        <InputField
            type={'text'}
            onChange={(e) => setusername(e.target.value)}
            name={'username'}
            value={username}
            id={'username'}
            placeholder={"Username"}
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
        <a href='/login'>Back to Login</a>
        </p>

      </div>
    </div>
  )
}

export default ForgetPassword