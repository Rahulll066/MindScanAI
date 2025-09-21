import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAssessment } from "../../context/AssessmentContext";

const story =
  "John went to the market to buy apples and oranges. He met his friend Mary there, and they had coffee together.";

const question = "Who did John meet at the market?";

const MediumStoryRemembering = () => {
  const [showStory, setShowStory] = useState(true);
  const [answer, setAnswer] = useState("");
  const { updateScore } = useAssessment();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowStory(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    const score = answer.toLowerCase().includes("mary") ? 100 : 0;
    updateScore("story", score);
    navigate("/assessment/hard-numbers");
  };

  return (
    <div className="max-w-lg mx-auto py-20 text-center">
      <h2 className="text-2xl font-bold mb-6">Story Memory Test</h2>
      {showStory ? (
        <p className="text-lg">{story}</p>
      ) : (
        <div>
          <p className="mb-4">{question}</p>
          <input
            type="text"
            placeholder="Your Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
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

export default MediumStoryRemembering;

