import { useState, useRef, useEffect } from "react";
import logo from "../../assets/Images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Team"];
  const navRef = useRef(null);

  // Animate on open/close for mobile
  useEffect(() => {
    if (isOpen && navRef.current) {
      gsap.fromTo(
        navRef.current,
        { x: "100%" },
        { x: 0, duration: 0.6, ease: "power4.out" }
      );
    }
  }, [isOpen]);

  return (
    <nav
      className="fixed top-10 left-1/2 z-50 transform -translate-x-1/2
      w-[95vw] max-w-5xl bg-black/90 shadow-2xl border border-indigo-400
      rounded-full px-6 sm:px-12 py-2 flex items-center justify-between 
      backdrop-blur-xl"
    >
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="w-9 h-9 rounded-full border-2 border-indigo-500"
      />

      {/* Desktop Links */}
      <div className="hidden sm:flex justify-center gap-10 flex-1">
        {navLinks.map((text) => (
          <a
            key={text}
            href="#"
            className="text-gray-300 hover:text-white transition"
          >
            {text}
          </a>
        ))}
      </div>

      {/* Email button (desktop) */}
      <div className="hidden sm:block px-5 py-2 bg-white text-black font-semibold rounded-full shadow border">
       sakshi@gmail.com
      </div>

      {/* Hamburger Icon (mobile only) */}
      <button
        className="block sm:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open menu"
      >
        <FaBars />
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex flex-col items-end sm:hidden">
          <div
            ref={navRef}
            className="w-2/3 h-full bg-[#181823] px-10 py-8 flex flex-col items-end gap-8 shadow-2xl border border-indigo-400"
            style={{
              borderTopLeftRadius: 28,
              borderBottomLeftRadius: 28,
            }}
          >
            <button
              className="mb-8 text-2xl text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
            {navLinks.map((text) => (
              <a
                key={text}
                href="#"
                className="text-lg text-gray-100 hover:text-indigo-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {text}
              </a>
            ))}
            <div className="mt-12 px-4 py-2 bg-white text-black rounded-full font-semibold">
            sakshi@gmail.com
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
