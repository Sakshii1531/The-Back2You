import React from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import AuthToggle from "./Components/AuthToggle";
import ForgotPassword from "./Components/ForgotPassword";
import InstructionsPage from "./Components/InstructionPage";
import Dashboard from "./Components/Dashboard";
import AboutUs from "./Components/AboutUs";
import MeetOurTeam from "./Components/MeetOurTeam";
import ChatSection from "./Components/ChatSection";
import QRGenerator from "./Components/QRGenerator";
import ThankYou from "./Components/ThankYou";
import Footer from "./Components/Footer";



function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0B0E14] via-[#0F1621] to-[#0B0E14] text-white flex flex-col">
      <Navbar />
      <HomePage />
      <AuthToggle/>
      <ForgotPassword/>
      <InstructionsPage/>
      <Dashboard/>
      <AboutUs/>
      <MeetOurTeam/>
      <ChatSection/>
      <QRGenerator/>
      <ThankYou/>
      <Footer/>
      
    </div>
  );
}

export default App;
