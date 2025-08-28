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
    <span style={{ color: "#60a5fa" }} className="font-black">
      {displayText}
      <span
        className={`border-r-2 ml-0.5 animate-pulse ${
          displayText.length === text.length && !isDeleting ? "invisible" : ""
        }`}
        style={{ borderColor: "#60a5fa" }}
      />
    </span>
  );
};

const HomePage = () => {
  return (
    <div
      className="bg-[#000b1e] flex flex-col md:flex-row items-center justify-between min-h-[80vh] px-6 md:px-20"
    >
      {/* Left Section: Boy and Text */}
      <div className="flex items-start gap-6 md:w-1/2">
        <img
          src={boyImage}
          alt="Animated boy"
          className="h-[220px] md:h-[280px] object-contain self-start"
          style={{ filter: "drop-shadow(0 8px 24px rgba(37,99,235,0.6))" }} // blue glow
        />
        <div className="space-y-5 text-left">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight 
            text-transparent bg-clip-text drop-shadow-md"
            style={{
              backgroundImage: "linear-gradient(to right, #3b82f6, #2563eb, #1e3a8a)",
            }}
          >
            Welcome to <AnimatedTitle />
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-md md:max-w-lg leading-relaxed">
            A lost &amp; found platform powered by QR tagging —{" "}
            <span style={{ color: "#60a5fa" }} className="font-semibold">
              connect with your belongings
            </span>{" "}
            instantly and securely.
          </p>
          <button
            className="mt-4 px-8 py-4 text-white font-semibold rounded-full shadow-lg 
            hover:scale-105 transition-all duration-300"
            style={{
              backgroundImage: "linear-gradient(to right, #2563eb, #1e3a8a)",
            }}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Right Section: Video */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div
          className="rounded-2xl border-4 bg-black/60 shadow-2xl 
          transition-transform hover:scale-105 duration-400 mx-auto"
          style={{ borderColor: "#2563eb" }}
        >
          <video
            src={virtualVideo}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl w-full max-w-lg h-[280px] object-cover"
            style={{ boxShadow: "0 10px 36px 0 rgba(37,99,235,0.6)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
