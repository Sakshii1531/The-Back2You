import React from "react";
import sakshiImg from "../assets/sakshi.jpg";
import ishaImg from "../assets/isha.jpg";

const teamMembers = [
  {
    name: "Sakshi Dwivedi",
    img: sakshiImg,
    bio: "Passionate about creating digital solutions that solve real-life problems with the power of QR technology.",
  },
  {
    name: "Isha Kumari",
    img: ishaImg,
    bio: "Dedicated to building user-friendly experiences that make Back2You simple, secure, and fun to use.",
  },
];

const MeetOurTeam = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0B0E14] via-[#0F1621] to-[#0B0E14] text-white flex items-center justify-center p-8">
      <div className="max-w-5xl w-full bg-[#0F1621]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="mt-3 text-gray-300 text-lg">
            The passionate people behind{" "}
            <span className="text-indigo-400 font-semibold">Back2You</span>
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 rounded-2xl text-center shadow-lg border border-transparent 
              hover:border-indigo-400 hover:shadow-[0_0_25px_#6366F1] hover:scale-105 transition-all duration-500"
            >
              {/* Profile Image (clear, no crop) */}
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-indigo-400 shadow-lg 
              hover:shadow-[0_0_25px_#6366F1] transition-all duration-500 bg-black">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-indigo-400">
            © {new Date().getFullYear()} Back2You. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
