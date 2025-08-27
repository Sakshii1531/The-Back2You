import React, { useState, useEffect } from "react";
import virtualVideo from "../assets/virtual-Qr-video.mp4";
import boyImage from "../assets/boy-image.png";

const AnimatedTitle = () => {
  const text = "Back2You";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const typingSpeed = 150;

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
    <span className="text-gray-100 font-black">
      {displayText}
      <span
        className={`border-r-2 border-yellow-400 ml-0.5 animate-pulse ${
          displayText.length === text.length && !isDeleting ? "invisible" : ""
        }`}
      />
    </span>
  );
};

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] px-6 md:px-20 bg-[#13191e]">
      {/* Left Section: Boy and Text */}
      <div className="flex items-start gap-6 md:w-1/2">
        <img
          src={boyImage}
          alt="Animated boy"
          className="h-[220px] md:h-[280px] object-contain self-start"
          style={{ filter: "drop-shadow(0 8px 24px rgba(233,196,106,0.2))" }}
        />
        <div className="space-y-5 text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-amber-400 via-yellow-300 to-yellow-500 text-transparent bg-clip-text drop-shadow-md">
            Welcome to <AnimatedTitle />
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-md md:max-w-lg leading-relaxed">
            A lost &amp; found platform powered by QR tagging —{" "}
            <span className="text-yellow-300 font-semibold">
              connect with your belongings
            </span>{" "}
            instantly and securely.
          </p>
          <button className="mt-4 px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:from-amber-400 hover:to-yellow-300 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Section: Video without black bars */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="rounded-2xl border-4 border-gray-900 bg-black/40 shadow-2xl transition-transform hover:scale-105 duration-400 mx-auto">
          <video
            src={virtualVideo}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl w-full max-w-lg h-[280px] object-cover"
            style={{ boxShadow: "0 10px 36px 0 rgba(16,22,28,0.24)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
