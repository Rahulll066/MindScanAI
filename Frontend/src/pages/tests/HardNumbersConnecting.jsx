import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAssessment } from "../../context/AssessmentContext";

const shuffled = [1, 2, 3, 4, 5].sort(() => Math.random() - 0.5);

const HardNumbersConnecting = () => {
  const [sequence, setSequence] = useState([]);
  const { updateScore } = useAssessment();
  const navigate = useNavigate();

  const handleClick = (num) => {
    setSequence((prev) => {
      const newSeq = [...prev, num];
      if (newSeq.length === shuffled.length) {
        const correctSeq = JSON.stringify(newSeq) === JSON.stringify([1,2,3,4,5]);
        const score = correctSeq ? 100 : 0;
        updateScore("numbers", score);
        navigate("/assessment/results");
      }
      return newSeq;
    });
  };

  return (
    <div className="max-w-lg mx-auto py-20 text-center">
      <h2 className="text-2xl font-bold mb-6">Numbers Connecting Test</h2>
      <div className="flex gap-4 justify-center mb-6">
        {shuffled.map((num, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(num)}
            className="w-12 h-12 bg-blue-100 hover:bg-blue-300 rounded-full text-xl"
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HardNumbersConnecting;

