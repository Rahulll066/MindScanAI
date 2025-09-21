import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Assessment from "./pages/Assessment";
import VeryEasyClock from "./pages/tests/VeryEasyClock";
import EasyWordRemembering from "./pages/tests/EasyWordRemembering";
import MediumStoryRemembering from "./pages/tests/MediumStoryRemembering";
import HardNumbersConnecting from "./pages/tests/HardNumbersConnecting";
import Results from "./pages/Results";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/assessment/very-easy-clock" element={<VeryEasyClock />} />
        <Route path="/assessment/easy-word" element={<EasyWordRemembering />} />
        <Route path="/assessment/medium-story" element={<MediumStoryRemembering />} />
        <Route path="/assessment/hard-numbers" element={<HardNumbersConnecting />} />
        <Route path="/assessment/results" element={<Results />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
