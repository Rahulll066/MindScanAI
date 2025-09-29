// src/pages/Assessment.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Assessment = () => {
  const navigate = useNavigate();

  const tests = [
  {
    id: "very-easy-clock",
    name: "Clock Drawing Test", 
    description: "Set the clock to the correct time",
    path: "/assessment/very-easy-clock"
  },
  {
    id: "instruction-chain",
    name: "Instruction Chain Test", 
    description: "Follow and remember multi-step instructions",
    path: "/assessment/instruction-chain"
  },
  {
    id: "hard-numbers",
    name: "Numbers Connecting Test",
    description: "Connect numbers in sequence",
    path: "/assessment/hard-numbers"
  },
  {
    id: "object-naming",
    name: "Object Naming Test",
    description: "Identify objects from pictures",
    path: "/assessment/object-naming"
  },
  {
    id: "serial-sevens", 
    name: "Subtraction Test",
    description: "Subtract 7 from each number",
    path: "/assessment/serial-sevens"
  },
  {
    id: "memory-match", 
    name: "Memory Match Game",
    description: "Find matching pairs of colors",
    path: "/assessment/memory-match"
  }
];

  const handleStart = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      // User not logged in → redirect to signup
      navigate("/signup");
    } else {
      // User logged in → start with first test
      navigate("/assessment/very-easy-clock");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold mb-6 text-primary-700 text-center">
        Cognitive Assessment
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Complete a series of short games to evaluate different cognitive functions like memory, attention, and problem-solving.
      </p>

      {/* Test Overview */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Assessment Includes:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {tests.map((test, index) => (
            <div key={test.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{test.name}</h4>
                <p className="text-sm text-gray-600">{test.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-semibold mb-3 text-blue-800">Before You Start:</h3>
        <ul className="text-blue-700 space-y-2">
          <li>• Find a quiet place without distractions</li>
          <li>• Make sure you have 15-20 minutes available</li>
          <li>• Use a device with a stable internet connection</li>
          <li>• Complete all tests in one sitting for accurate results</li>
          <li>• This is a screening tool, not a medical diagnosis</li>
        </ul>
      </div>

      <div className="text-center">
        <button
          onClick={handleStart}
          className="bg-primary-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Start Assessment
        </button>
        <p className="text-sm text-gray-500 mt-4">
          Estimated time: 15-20 minutes
        </p>
      </div>
    </div>
  );
};

export default Assessment;