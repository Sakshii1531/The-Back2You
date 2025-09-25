import React from "react";
import { motion } from "framer-motion";
import boyVideo from "../../assets/Videos/login-boy.mp4";
import { useNavigate } from "react-router-dom";

const Login = ({ handleToggle, isLogin }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-7xl min-h-[450px] flex flex-col md:flex-row rounded-2xl overflow-hidden transition-all duration-300 mx-auto bg-gradient-to-r from-[#111827] via-[#0f172a] to-[#1e293b] shadow-[0_0_30px_rgba(79,70,229,0.3)]">
      
      {/* Left side: Video */}
      <div className="md:w-1/2 flex items-center justify-center p-6">
        <div className="rounded-2xl overflow-hidden flex items-center justify-center w-full h-[300px] transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.4)]">
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

      {/* Right side: Login form */}
      <motion.div
        className="md:w-1/2 p-12 flex flex-col justify-center bg-[#0a0f1f]"
        initial={{ opacity: 0, x: 80, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Toggle switch */}
        <div className="flex justify-center mb-6">
          <div className="toggle-switch cursor-pointer" onClick={handleToggle}>
            <div className={`toggle-circle ${isLogin ? "" : "toggled"}`}></div>
            <div className={`toggle-label ${isLogin ? "" : "active"}`}>
              {!isLogin ? "Login" : "Sign Up"}
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-extrabold mb-8 text-left tracking-wide text-indigo-400 drop-shadow-lg">
          {isLogin ? "LOGIN" : "SIGN UP"}
        </h1>

        {/* Username */}
        <div className="mb-6">
          <label htmlFor="username" className="block mb-2 font-semibold text-indigo-300">
            Username :
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter Username..."
            className="w-full px-5 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 transition text-sm border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 font-semibold text-indigo-300">
            Password :
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password..."
            className="w-full px-5 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 transition text-sm border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />
        </div>

        {/* Login button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(99,102,241,0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 text-white font-bold rounded-full transition text-base tracking-wide mt-2 bg-gradient-to-r from-indigo-600
           via-indigo-500 to-indigo-400"
           onClick={() => navigate("/instructions")}
        >
          {isLogin ? "Login" : "Create Account"}
        </motion.button>

         {isLogin && (
  <div className="mt-4 text-center">
    <a
      href="/forgot-password"
      className="text-md text-bold text-indigo-400 hover:underline hover:text-indigo-300 transition"
    >
      Forgot Password?
    </a>
  </div>
)}
      </motion.div>

    </div>

    
  );
};

export default Login;
