import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import "./ToggleSwitch.css";

const AuthToggle = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => setIsLogin((prev) => !prev);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{
        background: "#000b1e",
      }}
    >
      <div
        className="w-full max-w-5xl min-h-[500px] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-500 ease-in-out"
        style={{
          backgroundColor: "#000b1e",
          border: "2px solid #ff6f91",
          boxShadow: "0 0 20px rgba(255,111,145,0.4)",
        }}
      >
        {/* Render Login or SignUp */}
        {isLogin ? (
          <Login handleToggle={handleToggle} isLogin={isLogin} />
        ) : (
          <SignUp handleToggle={handleToggle} isLogin={isLogin} />
        )}
      </div>
    </div>
  );
};

export default AuthToggle;
