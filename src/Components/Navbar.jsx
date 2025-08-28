import React from "react";
import logo from "../assets/logo.jpg";
import { FaUserShield } from "react-icons/fa"; 

const Navbar = () => {
  return (
    <nav className="bg-[#000b1e] text-white px-8 py-4 flex justify-between items-center shadow-md">
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
      <div className="flex space-x-10 text-lg font-medium items-center">
        <a
          href="#"
          className="transition-transform transform hover:scale-110"
          style={{ color: "#ffffff", transition: "all 0.3s" }}
          onMouseEnter={(e) => (e.target.style.color = "#ff6f91")}
          onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
        >
          Home
        </a>
        <a
          href="#"
          className="transition-transform transform hover:scale-110"
          style={{ color: "#ffffff", transition: "all 0.3s" }}
          onMouseEnter={(e) => (e.target.style.color = "#ff6f91")}
          onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
        >
          About
        </a>
        <a
          href="#"
          className="transition-transform transform hover:scale-110"
          style={{ color: "#ffffff", transition: "all 0.3s" }}
          onMouseEnter={(e) => (e.target.style.color = "#ff6f91")}
          onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
        >
          Contact
        </a>

        {/* Login/SignUp Button with Icon */}
        <a
          href="#"
          className="flex items-center gap-2 px-5 py-2 rounded-full 
                     font-semibold shadow-md hover:scale-105 transition-all"
          style={{
            backgroundColor: "#ff6f91",
            color: "black",
          }}
        >
          <FaUserShield className="text-xl" />
          <span>Login / SignUp</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
