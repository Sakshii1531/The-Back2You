import React from "react";
import { motion } from "framer-motion";
import boyVideo from "../assets/login-boy.mp4";

const SignUp = ({ handleToggle, isLogin }) => {
  return (
    <div className="w-full max-w-7xl min-h-[350px] flex flex-col md:flex-row bg-gradient-to-r from-[#0B0E14] via-[#0F1621] to-[#0B0E14] 
    rounded-2xl shadow-2xl overflow-hidden mx-auto">
      
      {/* Left side: Video with dark background */}
      <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-r from-[#0B0E14] via-[#0F1621] to-[#0B0E14] p-6">
        <div
          className="rounded-2xl overflow-hidden shadow-xl flex items-center justify-center w-full h-[280px]"
         
        >
          <video
            src={boyVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      
      {/* Right side: SignUp form with animation */}
      <motion.div
        className="md:w-1/2 p-12 flex flex-col justify-center bg-[#000b1e]"
        initial={{ opacity: 0, x: 80, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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
        <h1 className="text-4xl font-extrabold mb-8 text-left tracking-wide drop-shadow-md text-indigo-400">
          SIGN UP
        </h1>

        {/* Name */}
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block mb-2 font-semibold text-indigo-300"
          >
            Name :
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter Name..."
            className="w-full px-5 py-2.5 rounded-lg bg-gray-900 text-white placeholder-gray-400 shadow-md transition text-sm"
            style={{
              border: "1.5px solid #6366f1",
              boxShadow: "0 0 6px rgba(99,102,241,0.3)",
            }}
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 font-semibold text-indigo-300"
          >
            Email ID :
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter Email..."
            className="w-full px-5 py-2.5 rounded-lg bg-gray-900 text-white placeholder-gray-400 shadow-md transition text-sm"
            style={{
              border: "1.5px solid #6366f1",
              boxShadow: "0 0 6px rgba(99,102,241,0.3)",
            }}
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 font-semibold text-indigo-300"
          >
            Password :
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password..."
            className="w-full px-5 py-2.5 rounded-lg bg-gray-900 text-white placeholder-gray-400 shadow-md transition text-sm"
            style={{
              border: "1.5px solid #6366f1",
              boxShadow: "0 0 6px rgba(99,102,241,0.3)",
            }}
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 font-semibold text-indigo-300"
          >
            Confirm Password :
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password..."
            className="w-full px-5 py-2.5 rounded-lg bg-gray-900 text-white placeholder-gray-400 shadow-md transition text-sm"
            style={{
              border: "1.5px solid #6366f1",
              boxShadow: "0 0 6px rgba(99,102,241,0.3)",
            }}
          />
        </div>

        {/* Sign Up button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-2.5 text-white font-bold rounded-full shadow-lg transition text-base tracking-wide mt-2"
          style={{
            backgroundImage:
              "linear-gradient(to right, #6366f1, #4f46e5, #4338ca)",
          }}
        >
          Sign Up
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SignUp;
