import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Home, Box, QrCode, Bell, Settings } from "lucide-react";

const Dashboard = () => {
  const data = [
    { name: "Lost", value: 12 },
    { name: "Found", value: 8 },
    { name: "Returned", value: 5 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0E14] p-6">
      <div className="w-full max-w-7xl bg-[#0F1621] border border-white/10 rounded-2xl flex overflow-hidden">
        
        {/* Sidebar */}
        <aside className="w-60 bg-[#0B0E14] border-r border-white/10 p-6 hidden md:flex flex-col justify-between">
          <div>
            <Link to="/" className="text-xl font-bold mb-8 tracking-wide text-indigo-400 cursor-pointer">
              Back2You
            </Link>
            <nav className="space-y-3 text-sm text-gray-300">
              {[
                { icon: Home, label: "Dashboard" },
                { icon: Box, label: "My Items" },
                { icon: QrCode, label: "QR Codes" },
                { icon: Bell, label: "Notifications" },
                { icon: Settings, label: "Settings" },
              ].map(({ icon: Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                    label === "Dashboard"
                      ? "bg-indigo-600/10 text-indigo-400 font-medium"
                      : "hover:bg-white/5"
                  }`}
                >
                  <Icon size={18} />
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <p className="text-xs text-gray-500">© 2025 Back2You</p>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-semibold text-gray-100">Dashboard</h2>
            <button className="bg-indigo-600 px-5 py-2 rounded-lg text-white text-sm font-medium hover:bg-indigo-700 transition">
              + Add Item
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Total Users", value: "150" },
              { label: "Total Items", value: "75" },
              { label: "Resolved Cases", value: "40" },
            ].map(({ label, value }, i) => (
              <div
                key={i}
                className="p-5 bg-[#1A2332] border border-white/10 rounded-xl"
              >
                <h3 className="text-sm text-gray-400">{label}</h3>
                <p className="text-3xl font-bold text-indigo-400 mt-2">
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Chart Section */}
          <div className="p-6 bg-[#1A2332] border border-white/10 rounded-xl">
            <h3 className="text-lg font-medium text-gray-200 mb-6">
              Lost vs Found Items
            </h3>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
                <XAxis dataKey="name" stroke="#aaa" tick={{ fill: "#aaa" }} />
                <YAxis stroke="#aaa" tick={{ fill: "#aaa" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #374151",
                    borderRadius: "6px",
                  }}
                  labelStyle={{ color: "#fff" }}
                  itemStyle={{ color: "#A78BFA" }}
                />
                <Bar
                  dataKey="value"
                  fill="url(#colorGradient)"
                  radius={[6, 6, 0, 0]}
                  animationDuration={800}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#4F46E5" />
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
