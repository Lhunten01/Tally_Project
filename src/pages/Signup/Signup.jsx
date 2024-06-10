import React from "react";

const Signup = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#00053A0D]">
      <div className="p-10 rounded-2xl bg-white flex flex-col gap-6">
        <h1 className="text-[20px] font-semibold text-center">Signup</h1>
        <div className="flex gap-[15px]">
            <div className="w-1/4 h-[3px] rounded-[10px] bg-primary-500 text-primary-600">Step 1 of 4</div>
            <div className="w-1/4 h-[3px] rounded-[10px] bg-gray-200"></div>
            <div className="w-1/4 h-[3px] rounded-[10px] bg-gray-200"></div>
            <div className="w-1/4 h-[3px] rounded-[10px] bg-gray-200"></div>

        </div>
        <form className="flex flex-col justify-center items-center gap-3">
          <div className="flex flex-col gap-3 mt-4">
            <div>
                <input
                type="text"
                placeholder="User name"
                name="username"
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                className="py-2 px-4 rounded-xl border border-gray-300 w-[500px] h-14"
                />
                <p>This username is taken. Try another</p>
            </div>

            <input
              type="email"
              placeholder="Email"
              name="email"
              className="py-2 px-4 rounded-xl border border-gray-300 w-[500px] h-14"
            />
            <div className="flex gap-3">
              <select className="w-[70px] h-14 rounded-xl border border-gray-300 pl-2">
                <option value="+91">+91</option>
                <option value="+92">+92</option>
                <option value="+93">+93</option>
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                maxLength={10}
                name="phone"
                className="py-2 px-4 rounded-xl border border-gray-300 w-[418px] h-14 appearance-none block bg-white text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
              />
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="py-2 px-4 rounded-xl border border-gray-300 w-[500px] h-14"
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
          <button className="p-2 bg-primary-600 text-white rounded-md w-full">
            Signup
          </button>
          <p className="text-[16px] text-gray-500 font-semibold">
            Already have an account?{" "}
            <a href="/login" className="text-primary-600">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
