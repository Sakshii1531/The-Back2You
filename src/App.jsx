import React from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import AuthToggle from "./Components/AuthToggle";
import ForgotPassword from "./Components/ForgotPassword";



function App() {
  return (
    <div className="min-h-screen bg-#000b1e text-white flex flex-col">
      <Navbar />
      <HomePage />
      <AuthToggle/>
      <ForgotPassword/>
      
    </div>
  );
}

export default App;
