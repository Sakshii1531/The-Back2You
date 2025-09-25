import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
import HomePage from "./Components/Pages/HomePage";
import AuthToggle from "./Components/Auth/AuthToggle";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import InstructionsPage from "./Components/Pages/InstructionPage";
import Dashboard from "./Components/Dashboard/Dashboard";
import AboutUs from "./Components/Pages/AboutUs";
import MeetOurTeam from "./Components/Pages/MeetOurTeam";
import ChatSection from "./Components/Dashboard/ChatSection";
import QRGenerator from "./Components/Imp-Process/QRGenerator";
import ThankYou from "./Components/Pages/ThankYou";
import Footer from "./Components/Pages/Footer";
import RegisterItem from "./Components/Pages/RegisterItem";

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const location = useLocation();
  return (
    <div >
      {location.pathname==="/" && <Navbar/>}

        <Routes>

          <Route path="/" element={<HomePage/>} />
          <Route path="/login-signup" element={<AuthToggle/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/instructions" element={<InstructionsPage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/meet-our-team" element={<MeetOurTeam/>} />
          <Route path="/chats" element={<ChatSection/>} />
          <Route path="/QR" element={<QRGenerator/>} />
          <Route path="/thank-you" element={<ThankYou/>} />
          <Route path="/register-item" element={<RegisterItem />} />

          

        </Routes>

      <Footer/>
    </div>
  );
}

export default AppWrapper;
