import React from "react";
import { Users, Lightbulb, QrCode, Heart } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0B0E14] via-[#0F1621] to-[#0B0E14] text-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full bg-[#0F1621]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            About Back2You
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            We make returning lost items simple, secure, and seamless with
            <span className="text-indigo-400 font-semibold"> QR technology.</span>
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="p-6 bg-white/10 rounded-2xl shadow-lg hover:border-indigo-400 hover:shadow-[0_0_20px_#6366F1] transition-all duration-500">
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-gray-300">
              To help people recover their lost belongings effortlessly by
              connecting finders and owners through unique, scannable QR codes.
            </p>
          </div>
          <div className="p-6 bg-white/10 rounded-2xl shadow-lg hover:border-indigo-400 hover:shadow-[0_0_20px_#6366F1] transition-all duration-500">
            <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
            <p className="text-gray-300">
              A world where no lost item remains unclaimed — where technology
              bridges the gap between loss and recovery.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Why Choose Back2You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white/10 rounded-2xl text-center hover:border-indigo-400 hover:shadow-[0_0_20px_#6366F1] transition-all duration-500">
              <Users className="mx-auto text-indigo-400 mb-4" size={40} />
              <h3 className="font-bold text-lg">Community Driven</h3>
              <p className="text-gray-400 text-sm mt-2">
                Connects finders and owners instantly.
              </p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl text-center hover:border-indigo-400 hover:shadow-[0_0_20px_#6366F1] transition-all duration-500">
              <QrCode className="mx-auto text-purple-400 mb-4" size={40} />
              <h3 className="font-bold text-lg">Smart QR Codes</h3>
              <p className="text-gray-400 text-sm mt-2">
                Unique QR for each item ensures quick scanning.
              </p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl text-center hover:border-indigo-400 hover:shadow-[0_0_20px_#6366F1] transition-all duration-500">
              <Lightbulb className="mx-auto text-yellow-400 mb-4" size={40} />
              <h3 className="font-bold text-lg">Innovative</h3>
              <p className="text-gray-400 text-sm mt-2">
                Simple, futuristic solution for lost items.
              </p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl text-center hover:border-indigo-400 hover:shadow-[0_0_20px_#6366F1] transition-all duration-500">
              <Heart className="mx-auto text-pink-400 mb-4" size={40} />
              <h3 className="font-bold text-lg">Reliable</h3>
              <p className="text-gray-400 text-sm mt-2">
                Safe, secure, and trustworthy service.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Back2You. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
