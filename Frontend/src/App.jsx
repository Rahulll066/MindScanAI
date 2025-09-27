import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AboutMission from "./pages/AboutMission";
import AboutDementia from "./pages/AboutDementia";
import Assessment from "./pages/Assessment";
import VeryEasyClock from "./pages/tests/VeryEasyClock";
import EasyWordRemembering from "./pages/tests/EasyWordRemembering";
import MediumStoryRemembering from "./pages/tests/MediumStoryRemembering";
import HardNumbersConnecting from "./pages/tests/HardNumbersConnecting";
import MemoryMatchGame from "./pages/tests/MemoryMatchGame";
import Results from "./pages/Results";
import Profile from "./pages/Profile";


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
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/assessment/very-easy-clock" element={<VeryEasyClock />} />
        <Route path="/assessment/easy-word" element={<EasyWordRemembering />} />
        <Route path="/assessment/medium-story" element={<MediumStoryRemembering />} />
        <Route path="/assessment/hard-numbers" element={<HardNumbersConnecting />} />
        <Route path="/assessment/memory-match" element={<MemoryMatchGame />} />
        <Route path="/assessment/results" element={<Results />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
