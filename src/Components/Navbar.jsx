import React from "react";
import logo from "../assets/logo.jpg";
import { FaUserShield } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 
      bg-gradient-to-r from-[#0B0E14]/80 via-[#0F1621]/80 to-[#0B0E14]/80 
      backdrop-blur-lg text-white py-4 flex items-center 
      shadow-xl border-b border-indigo-600
      pl-16 pr-16"  // 👈 Left aur right gap badha diya
    >
      {/* Full container for alignment */}
      <div className="flex justify-between items-center w-full">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="logo"
            className="w-14 h-14 rounded-full border-2 border-indigo-500 
            cursor-pointer shadow-lg hover:scale-110 hover:rotate-3 transition-transform duration-300"
          />
          <h1 className="text-2xl font-extrabold tracking-wider 
            bg-gradient-to-r from-indigo-400 to-indigo-600 
            bg-clip-text text-transparent drop-shadow-lg"
          >
            Back2You
          </h1>
        </div>

        {/* Links Section - perfectly centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-12 text-lg font-medium">
          {["Home", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative group text-gray-200 hover:text-indigo-400 transition-colors duration-300"
            >
              {item}
              {/* Underline animation */}
              <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Login/SignUp Button */}
        <a
          href="#"
          className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold 
          bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 
          shadow-lg text-white border border-indigo-400 
          relative overflow-hidden transition-transform transform hover:scale-105 mr-4" 
          style={{
            boxShadow: "0 0 18px rgba(99,102,241,0.7)",
          }}
        >
          <FaUserShield className="text-xl" />
          <span>Login / SignUp</span>

          {/* Shine animation */}
          <span
            className="absolute inset-0 w-full h-full bg-gradient-to-r 
            from-transparent via-white/20 to-transparent 
            translate-x-[-200%] hover:translate-x-[200%] 
            transition-transform duration-700"
          ></span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
