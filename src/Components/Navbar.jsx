import React from "react";
import logo from "../assets/logo.jpg";
import { FaUserShield } from "react-icons/fa"; 

const Navbar = () => {
  return (
    <nav className="bg-[#10171B] text-white px-8 py-4 flex justify-between items-center shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img
          src={logo}
          alt="logo"
          className="w-14 h-14 rounded-full border-2 cursor-pointer border-gray-300 shadow-lg hover:scale-105 transition-transform"
        />
        <h1 className="text-2xl font-extrabold tracking-wide text-white">
          Back2You
        </h1>
      </div>

      {/* Links Section */}
      <div className="flex space-x-12 text-lg font-medium items-center">
        <a
          href="#"
          className="hover:text-gray-400 transition-transform transform hover:scale-110"
        >
          Home
        </a>
        <a
          href="#"
          className="hover:text-gray-400 transition-transform transform hover:scale-110"
        >
          About
        </a>
        <a
          href="#"
          className="hover:text-gray-400 transition-transform transform hover:scale-110"
        >
          Contact
        </a>

        {/* Login/SignUp with Admin Icon (vertical) */}
        <a
          href="#"
          className="flex flex-col items-center hover:text-gray-400 transition-transform transform hover:scale-110"
        >
          <FaUserShield className="text-2xl mb-1" />
          <span>Login/SignUp</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
