import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import virtualVideo from "../../assets/Videos/homepage-video.mp4";
import {useNavigate} from "react-router-dom";

/* Typing Animation for Back2You */
const AnimatedTitle = () => {
  const text = "Back2You";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const typingSpeed = 120;

  useEffect(() => {
    let timeout;

    if (!isDeleting && index <= text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, index));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (!isDeleting && index > text.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && index >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, index));
        setIndex(index - 1);
      }, typingSpeed / 2);
    } else if (isDeleting && index < 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex(0);
      }, 600);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return (
    <span className="text-indigo-400 font-black">
      {displayText}
      <span
        className={`border-r-2 ml-0.5 animate-pulse ${
          displayText.length === text.length && !isDeleting ? "invisible" : ""
        }`}
        style={{ borderColor: "#818cf8" }}
      />
    </span>
  );
};

/* HomePage */
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen bg-gradient-to-r from-[#0B0E14] via-[#0F1621] to-[#0B0E14] 
      flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-28 md:pt-40 gap-12"
    >
      {/* Left Section: Text */}
      <div className="md:w-1/2 space-y-6 text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
          Welcome to <AnimatedTitle />
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-md md:max-w-lg leading-relaxed">
          A Lost &amp; Found platform powered by QR tagging —{" "}
          <span className="text-indigo-400 font-semibold">
            connect with your belongings
          </span>{" "}
          instantly and securely.
        </p>

        <button
          className="mt-6 px-8 py-4 text-white font-semibold rounded-full shadow-lg 
          bg-indigo-500 hover:bg-indigo-600 hover:scale-105 transition-all duration-300"
          onClick={()=> navigate("/login-signup")}
        >
          Get Started
        </button>
      </div>

      {/* Right Section: Video */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          className="rounded-2xl bg-black/50 shadow-[0_0_25px_rgba(99,102,241,0.5)] 
          border border-transparent hover:border-indigo-400 transition-all duration-500 p-2"
        >
          <video
            src={virtualVideo}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl w-[95%] md:w-[480px] lg:w-[540px] h-[260px] md:h-[320px] lg:h-[360px] object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
