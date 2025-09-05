import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
    alert("If this email exists, you’ll receive a reset link shortly.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0B0E14] via-[#0F1621] to-[#0B0E14] px-6">
      <div className="w-full max-w-md bg-[#0F1621]/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-10">
        
        {/* Header */}
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent mb-4">
          Forgot Password?
        </h2>
        <p className="text-center text-gray-400 mb-8 text-sm">
          Don’t worry! Enter your email and we’ll send you a reset link.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500 text-gray-200 outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 shadow-lg hover:shadow-[0_0_20px_#6366F1] text-white font-semibold transition transform hover:scale-105"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to Login */}
        <p className="mt-6 text-center text-gray-400 text-sm">
          Remember your password?{" "}
          <a href="/login" className="text-indigo-400 hover:underline">
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
