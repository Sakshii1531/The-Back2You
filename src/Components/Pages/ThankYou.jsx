import React from "react";
import { motion } from "framer-motion";
import { Heart, Smile } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B0E14] via-[#0F1621] to-[#0B0E14] text-white px-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#0F1621]/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-10 max-w-xl text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <div className="p-6 rounded-full bg-indigo-600/20 border border-indigo-400">
            <Smile size={48} className="text-indigo-400" />
          </div>
        </motion.div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-indigo-400 mb-4">
          Thank You for Visiting Us!
        </h1>

        {/* Message */}
        <p className="text-gray-300 mb-6">
          We truly appreciate your time and support.  
          Hope to see you again soon. Stay connected and keep exploring with us! 
        </p>

        {/* Button */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg transition-colors"
        >
          <Heart className="w-5 h-5" />
          Back to Home
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ThankYou;
