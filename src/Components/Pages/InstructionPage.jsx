import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const steps = [
  { id: 1, text: "Sign in or create an account to save your progress." },
  { id: 2, text: "Report a LOST item: add photos, location, and a short description." },
  { id: 3, text: "Tag your belongings: generate a dynamic QR code for each item and stick it on." },
  { id: 4, text: "FOUND something? Scan the QR or search by keywords to notify the owner." },
  { id: 5, text: "Chat safely inside Back2You to coordinate the return — no personal numbers shared." },
  { id: 6, text: "Track status in your dashboard: Pending → Matched → Returned." },
  { id: 7, text: "Follow meet-up tips and mark the item as returned to earn goodwill points." },
];

const InstructionPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#0B0E14] via-[#0F1621] to-[#0B0E14] p-10 flex flex-col items-center">
      
      {/* Header */}
      <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4 text-center">
        WORKFLOW OF <span className="text-indigo-400">BACK2YOU</span>
      </h1>
      <p className="text-gray-300 text-lg mb-12 text-center">
        Follow these simple steps to get the most out of Back2You.
      </p>

      {/* Zigzag Steps */}
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-indigo-500/40 via-indigo-400/20 to-transparent transform -translate-x-1/2 hidden md:block"></div>
        
        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={`md:w-1/2 relative ${
                index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"
              }`}
              initial={{ opacity: 0, scale: 0.8, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-gray-800 rounded-md shadow-lg p-3 border border-indigo-600 hover:shadow-indigo-400/40 transition duration-300">
                <div className="flex items-start gap-3">
                  {/* Number Circle without bg */}
                  <div className="w-7 h-7 flex items-center justify-center border-2 border-indigo-400 text-white font-medium rounded-full text-sm">
                    {step.id}
                  </div>
                  <p className="text-gray-200 text-sm">{step.text}</p>
                </div>
              </div>
              {/* Connector Dot */}
              <div
                className={`absolute top-5 w-2.5 h-2.5 bg-indigo-400 border-4 border-[#0F1621] rounded-full hidden md:block ${
                  index % 2 === 0 ? "-left-2" : "-right-2"
                }`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 px-6 py-2 bg-indigo-600 text-white font-medium rounded-full shadow-md
         hover:bg-indigo-500 hover:shadow-indigo-400/40 transition duration-300 text-sm"
         onClick={() => navigate("/register-item")}
      >
        Continue ➔
      </motion.button>
    </div>
  );
};

export default InstructionPage;
