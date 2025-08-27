import React from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";


function App() {
  return (
    <div className="min-h-screen bg-[#10171B] text-white flex flex-col">
      <Navbar />
      <HomePage />
      
    </div>
  );
}

export default App;
