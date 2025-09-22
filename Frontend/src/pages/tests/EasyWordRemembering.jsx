import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAssessment } from "../../context/AssessmentContext";

// Larger word pool with medium-difficult words
const wordPool = [
  "horizon", "compass", "orchard", "lantern", "mirror",
  "falcon", "vessel", "harbor", "meadow", "ember",
  "timber", "glacier", "anchor", "cipher", "pearl",
  "grove", "quartz", "valley", "oasis", "spiral",
  "harvest", "beacon", "summit", "echo", "fortress",
];

const EasyWordRemembering = () => {
  const [words, setWords] = useState([]);
  const [showWords, setShowWords] = useState(true);
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(10); // countdown from 10
  const { updateScore } = useAssessment();
  const navigate = useNavigate();

  // Pick 6 random words at start
  useEffect(() => {
    const shuffled = [...wordPool].sort(() => 0.5 - Math.random());
    setWords(shuffled.slice(0, 6));
  }, []);

  // Countdown timer
  useEffect(() => {
    if (!showWords) return;

    if (timeLeft === 0) {
      setShowWords(false);
      return;
    }

    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, showWords]);

  const handleSubmit = () => {
    const remembered = input
      .split(" ")
      .map((w) => w.trim().toLowerCase())
      .filter(Boolean);

    const correct = words.filter((w) => remembered.includes(w.toLowerCase()));
    const score = (correct.length / words.length) * 100;

    updateScore("word", Math.round(score));
    navigate("/assessment/medium-story");
  };

  return (
    <div className="max-w-lg mx-auto py-20 text-center">
      <h2 className="text-2xl font-bold mb-6">Word Memory Test</h2>

      {showWords ? (
        <div>
          <p className="text-xl font-medium mb-4">{words.join(", ")}</p>
          <p className="text-lg text-red-600">
            Time left: <strong>{timeLeft}s</strong>
          </p>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter words you remember (separated by spaces)"
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

