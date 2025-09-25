import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterItem = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    description: "",
    location: "",
    date: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Item Registered:", formData);
    alert("Item registered successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0B0E14] via-[#0F1621] to-[#0B0E14] px-6">
      <div className="w-full max-w-2xl bg-[#0F1621]/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-10">
        
        {/* Header */}
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent mb-4">
          Register Lost/Found Item
        </h2>
        <p className="text-center text-gray-400 mb-8 text-sm">
          Fill in the details below to register your item.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Row 1: Item + Category */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Item Name</label>
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 
                  focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500 
                  text-gray-200 outline-none transition"
                placeholder="e.g. Wallet, Phone"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 
                  focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500 
                  text-gray-200 outline-none transition"
              >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Documents">Documents</option>
                <option value="Clothing">Clothing</option>
                <option value="Accessories">Accessories</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              required
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 
                focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500 
                text-gray-200 outline-none transition resize-none"
              placeholder="Enter details about the item..."
            ></textarea>
          </div>

          {/* Row 2: Location + Date */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 
                  focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500 
                  text-gray-200 outline-none transition"
                placeholder="Where was it lost/found?"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Date Lost/Found</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 
                  focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500 
                  text-gray-200 outline-none transition"
              />
            </div>
          </div>

          {/* Upload Image */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">Upload Image</label>
            <label className="flex items-center justify-center w-full px-4 py-3 rounded-xl 
              bg-black/40 border border-dashed border-white/20 text-gray-400 cursor-pointer 
              hover:border-indigo-400 hover:text-indigo-400 transition">
              <span>{formData.image ? formData.image.name : "Click to upload (optional)"}</span>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 
               shadow-lg hover:shadow-[0_0_20px_#6366F1] 
              text-white font-semibold transition transform hover:scale-105"
              onClick={() => navigate("/QR")}
          >
            Register Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterItem;
