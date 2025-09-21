import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAssessment } from "../../context/AssessmentContext";

const VeryEasyClock = () => {
  const [targetTime] = useState({
    h: Math.floor(Math.random() * 12) + 1,
    m: Math.floor(Math.random() * 60),
  });
  const [input, setInput] = useState({ h: "", m: "" });
  const { updateScore } = useAssessment();
  const navigate = useNavigate();

  const handleSubmit = () => {
    let score = 0;
    if (parseInt(input.h) === targetTime.h) score += 50;
    if (parseInt(input.m) === targetTime.m) score += 50;

    updateScore("clock", score);
    navigate("/assessment/easy-word");
  };

  return (
    <div className="max-w-lg mx-auto py-20 text-center">
      <h2 className="text-2xl font-bold mb-6">Clock Test</h2>
      <p className="mb-4">Set this time: {targetTime.h}:{targetTime.m}</p>
      <div className="flex justify-center gap-4 mb-6">
        <input
          type="number"
          placeholder="Hour"
          value={input.h}
          onChange={(e) => setInput({ ...input, h: e.target.value })}
          className="border p-2 rounded w-20 text-center"
        />
        <input
          type="number"
          placeholder="Minute"
          value={input.m}
          onChange={(e) => setInput({ ...input, m: e.target.value })}
          className="border p-2 rounded w-20 text-center"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit & Continue
      </button>
    </div>
  );
};

export default VeryEasyClock;
