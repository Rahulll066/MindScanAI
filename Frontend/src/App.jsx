import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AboutMission from "./pages/AboutMission";
import AboutDementia from "./pages/AboutDementia";
import ServicesDoctor from "./pages/ServicesDoctor";
import ServicesHospital from "./pages/ServicesHospital";
import Assessment from "./pages/Assessment";
import Results from "./pages/Results";
import Profile from "./pages/Profile";
import './variables.css';
import Chatbot from './components/Chatbot'; 
import HardNumbersConnecting from "./pages/tests/HardNumbersConnecting";
import MemoryMatchGame from "./pages/tests/MemoryMatchGame";
import VeryEasyClock from "./pages/tests/VeryEasyClock";
import ObjectNamingGame from "./pages/tests/ObjectNamingGame";
import SerialSevensGame from "./pages/tests/SerialSevensGame";
import InstructionChain from "./pages/tests/InstructionChain";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about/mission" element={<AboutMission />} />
        <Route path="/about/dementia" element={<AboutDementia />} />
        <Route path="/services/doctors" element={<ServicesDoctor />} />
        <Route path="/services/hospitals" element={<ServicesHospital />} />
        <Route path="/assessment" element={<Assessment />} />
        
        {/* 6 Game Test Routes  */}
        <Route path="/assessment/hard-numbers" element={<HardNumbersConnecting />} />
        <Route path="/assessment/memory-match" element={<MemoryMatchGame />} />
        <Route path="/assessment/very-easy-clock" element={<VeryEasyClock />} />
        <Route path="/assessment/object-naming" element={<ObjectNamingGame />} />
        <Route path="/assessment/serial-sevens" element={<SerialSevensGame />} />
        <Route path="/assessment/instruction-chain" element={<InstructionChain />} />
        
        <Route path="/assessment/results" element={<Results />} />
      </Routes>
      <Footer />
      <Chatbot /> 
    </BrowserRouter>
  );
}

export default App;