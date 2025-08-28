import React from "react";
import boyVideo from "../assets/login-boy.mp4";

const SignUp = ({ handleToggle, isLogin }) => {
  return (
    <div
      className="w-full max-w-5xl min-h-[480px] flex flex-col md:flex-row bg-[#000b1e] rounded-2xl shadow-2xl overflow-hidden border"
    >
      {/* Right side: Sign Up form */}
      <div className="md:w-1/2 p-12 flex flex-col justify-center bg-[#000b1e]">
        {/* Toggle switch */}
        <div className="flex justify-center mb-6">
          <div className="toggle-switch cursor-pointer" onClick={handleToggle}>
            <div className={`toggle-circle ${isLogin ? "" : "toggled"}`}></div>
            <div className={`toggle-label ${isLogin ? "" : "active"}`}>
              {isLogin ? "Login" : "Sign Up"}
            </div>
          </div>
        </div>

        {/* Title */}
        <h1
          className="text-4xl font-extrabold mb-8 text-left tracking-wide drop-shadow-md"
          style={{ color: "#ff6f91" }}
        >
          SIGN UP
        </h1>

        {/* Name */}
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block mb-2 font-semibold"
            style={{ color: "#ff9eb5" }}
          >
            Name :
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter Username..."
            className="w-full px-5 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 shadow-md transition"
            style={{
              border: "2px solid transparent",
              boxShadow: "0 0 8px rgba(255,111,145,0.4)",
            }}
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 font-semibold"
            style={{ color: "#ff9eb5" }}
          >
            Email ID :
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter Email..."
            className="w-full px-5 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 shadow-md transition"
            style={{
              border: "2px solid transparent",
              boxShadow: "0 0 8px rgba(255,111,145,0.4)",
            }}
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 font-semibold"
            style={{ color: "#ff9eb5" }}
          >
            Password :
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password..."
            className="w-full px-5 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 shadow-md transition"
            style={{
              border: "2px solid transparent",
              boxShadow: "0 0 8px rgba(255,111,145,0.4)",
            }}
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 font-semibold"
            style={{ color: "#ff9eb5" }}
          >
            Confirm Password :
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password..."
            className="w-full px-5 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 shadow-md transition"
            style={{
              border: "2px solid transparent",
              boxShadow: "0 0 8px rgba(255,111,145,0.4)",
            }}
          />
        </div>

        {/* Sign Up button */}
        <button
          className="w-full py-3 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition text-lg tracking-wide mt-2"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ff9eb5, #ff6f91, #ff8fa3)",
          }}
        >
          Sign Up
        </button>
      </div>

      {/* Left side: Animated Video */}
      <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-6">
        <div
          className="overflow-hidden flex items-center justify-center w-full h-[320px]"
          style={{ ringColor: "#ff6f91" }}
        >
          <video
            src={boyVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
