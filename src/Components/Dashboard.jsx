import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Home, Box, QrCode, Bell, Settings } from "lucide-react";

const Dashboard = () => {
  const data = [
    { name: "Lost", value: 12 },
    { name: "Found", value: 8 },
    { name: "Returned", value: 5 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0B0E14] via-[#0F1621] to-[#0B0E14] p-6">
      {/* Dashboard Card */}
      <div className="w-full max-w-7xl bg-[#0F1621]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex transition-all duration-500 hover:border-indigo-400 hover:shadow-[0_0_25px_#6366F1] hover:scale-[1.01]">
        {/* Sidebar */}
        <aside className="w-64 bg-[#0B0E14]/60 backdrop-blur-lg border-r border-white/10 p-6 hidden md:block">
          <h1 className="text-2xl font-extrabold mb-10 tracking-wide bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
            Back2You
          </h1>
          <nav className="space-y-4">
            <a href="#" className="flex items-center gap-3 hover:text-indigo-400">
              <Home size={18} /> Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-indigo-400">
              <Box size={18} /> My Items
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-indigo-400">
              <QrCode size={18} /> QR Codes
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-indigo-400">
              <Bell size={18} /> Notifications
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-indigo-400">
              <Settings size={18} /> Settings
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Dashboard</h2>
            <button className="bg-indigo-600 px-5 py-2 rounded-xl shadow-lg hover:shadow-purple-500/50 transition-transform hover:scale-105">
              + Add Item
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg transition-all duration-500 hover:border-indigo-400 hover:shadow-[0_0_20px_#6366F1] hover:scale-[1.03]">
              <h3 className="text-lg">Total Users</h3>
              <p className="text-4xl font-extrabold text-indigo-400">150</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg transition-all duration-500 hover:border-indigo-400 hover:shadow-[0_0_20px_#6366F1] hover:scale-[1.03]">
              <h3 className="text-lg">Total Items</h3>
              <p className="text-4xl font-extrabold text-purple-400">75</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg transition-all duration-500 hover:border-indigo-400 hover:shadow-[0_0_20px_#6366F1] hover:scale-[1.03]">
              <h3 className="text-lg">Resolved Cases</h3>
              <p className="text-4xl font-extrabold text-pink-400">40</p>
            </div>
          </div>

          {/* Chart Section */}
          <div className="p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg transition-all duration-500 hover:border-indigo-400 hover:shadow-[0_0_25px_#6366F1] hover:scale-[1.02]">
            <h3 className="text-xl font-semibold mb-4">Lost vs Found Items</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "10px",
                  }}
                  labelStyle={{ color: "#fff" }}
                />
                <Bar
                  dataKey="value"
                  fill="url(#colorGradient)"
                  radius={[10, 10, 0, 0]}
                  animationDuration={1200}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#A855F7" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
