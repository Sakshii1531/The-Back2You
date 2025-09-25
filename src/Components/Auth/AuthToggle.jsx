import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import "../Auth/ToggleSwitch.css";

const AuthToggle = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => setIsLogin((prev) => !prev);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-r from-[#0B0E14] via-[#0F1621] to-[#0B0E14]">
      <AnimatePresence mode="wait">
        <motion.div
          key={isLogin ? "login" : "signup"}
          className="w-full max-w-5xl min-h-[500px] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          whileHover={{ scale: 1.03 }} 
          whileTap={{ scale: 0.98 }}   
        >
          {/* Render Login or SignUp */}
          {!isLogin ? (
            <SignUp handleToggle={handleToggle} isLogin={isLogin} />
          ) : (
            <Login handleToggle={handleToggle} isLogin={isLogin} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AuthToggle;
