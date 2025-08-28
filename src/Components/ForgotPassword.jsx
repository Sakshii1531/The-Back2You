import React from "react";

const ForgotPassword = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#000b1e]">
      <div
        className="backdrop-blur-xl bg-[#10172a]/80 shadow-2xl rounded-2xl p-10 w-full max-w-md border-2 border-[#2e3a68] outline outline-2 outline-[#ff6f91]/30"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-indigo-400 mb-6 drop-shadow-md">
          Forgot Password
        </h2>

        <form className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label className="block text-[#ffd1df] font-medium mb-1">
              Email Id :
            </label>
            <input
              type="email"
              placeholder="Enter Your Email..."
              className="w-full px-4 py-2 border-none rounded-lg bg-[#1f2943] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6f91]"
            />
          </div>

          {/* OTP */}
          <div>
            <label className="block text-[#ffd1df] font-medium mb-1">OTP :</label>
            <input
              type="text"
              placeholder="Enter Your OTP..."
              className="w-full px-4 py-2 border-none rounded-lg bg-[#1f2943] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6f91]"
            />
          </div>

          {/* Reset Password */}
          <div>
            <label className="block text-[#ffd1df] font-medium mb-1">
              Reset Password :
            </label>
            <input
              type="password"
              placeholder="Enter Password..."
              className="w-full px-4 py-2 border-none rounded-lg bg-[#1f2943] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6f91]"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-[#ffd1df] font-medium mb-1">
              Confirm Password :
            </label>
            <input
              type="password"
              placeholder="Confirm Password..."
              className="w-full px-4 py-2 border-none rounded-lg bg-[#1f2943] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6f91]"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-4 w-full bg-gradient-to-r from-[#6366f1] to-[#a21caf] text-white py-2 rounded-lg font-semibold hover:scale-105 hover:brightness-110 transition-all duration-300 shadow-lg"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
