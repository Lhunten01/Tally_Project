import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const InputField = ({ type, value, onChange, name, placeholder, id }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div class="relative w-full">
      <input
        type={type!== "password"?type: showPassword?"text": "password"}
        id={id}
        maxLength={type === "tel" ? 10 : null}
        required
        value={value}
        name={name}
        onChange={onChange}
        className="py-2 px-4 rounded-xl w-full h-14 outline outline-1 outline-gray-300 focus:outline-none focus:border-primary-500 focus:border-2 transition-colors duration-300 peer"
      />
      <label
        htmlFor={id}
        className="absolute top-4 left-2 py-0 lg:text-[16px] text-[14px] select-none px-1.5 text-gray-400 cursor-text peer-focus:text-xs peer-focus:-top-2.5 peer-focus:bg-white transition-all duration-300 peer-focus:text-primary-600 peer-valid:bg-white peer-valid:-top-2.5 peer-valid:text-xs whitespace-nowrap z-10"
      >
        {placeholder} <span className="ml-1 text-red-600">*</span>
      </label>

      {type === "password" && (
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-4 z-[10] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
      )}
    </div>
  );
};

export default InputField;
