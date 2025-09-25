import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300">
      {/* Glassmorphism Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-pink-500/10 blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 z-10">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
            Back2You
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed text-sm">
            Smart, secure and reliable QR-based lost & found solution.
            Built to help you reconnect with your belongings effortlessly.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-indigo-500 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3 text-center text-sm">
            <li>
              <a href="/" className="hover:text-indigo-400 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-indigo-400 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="/team" className="hover:text-indigo-400 transition duration-300">
                Our Team
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-indigo-400 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-indigo-500 pb-2">
            Connect With Us
          </h3>
          <div className="flex space-x-5">
            <a
              href="#"
              className="p-3 rounded-full bg-white/5 hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-400 transition shadow-md hover:shadow-[0_0_15px_#6366F1]"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white/5 hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-400 transition shadow-md hover:shadow-[0_0_15px_#6366F1]"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white/5 hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-400 transition shadow-md hover:shadow-[0_0_15px_#6366F1]"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white/5 hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-400 transition shadow-md hover:shadow-[0_0_15px_#6366F1]"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 py-6 text-center text-sm text-gray-500 z-10">
        © {new Date().getFullYear()} Back2You. Built with 💜 by{" "}
        <span className="text-indigo-400 font-semibold">Sakshi & Isha</span>
      </div>

      {/* Scroll To Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-6 bottom-6 bg-indigo-500 hover:bg-indigo-600 p-3 rounded-full shadow-lg hover:shadow-[0_0_20px_#6366F1] transition"
      >
        <ArrowUp size={20} className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;
