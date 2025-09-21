import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAssessment } from "../../context/AssessmentContext";

const words = ["apple", "table", "river", "house", "moon"];

const EasyWordRemembering = () => {
  const [showWords, setShowWords] = useState(true);
  const [input, setInput] = useState("");
  const { updateScore } = useAssessment();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowWords(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    const remembered = input.split(" ").map((w) => w.toLowerCase());
    const correct = words.filter((w) => remembered.includes(w));
    const score = (correct.length / words.length) * 100;

    updateScore("word", Math.round(score));
    navigate("/assessment/medium-story");
  };

  return (
    <div className="max-w-lg mx-auto py-20 text-center">
      <h2 className="text-2xl font-bold mb-6">Word Memory Test</h2>
      {showWords ? (
        <p className="text-xl">{words.join(", ")}</p>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter words you remember"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border p-2 rounded w-full mb-4"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit & Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default EasyWordRemembering;
