import React, { useState } from "react";

const numbers = [1, 2, 3, 4, 5].sort(() => Math.random() - 0.5);

const HardNumbersConnecting = () => {
  const [sequence, setSequence] = useState([]);
  const [result, setResult] = useState(null);

  const handleClick = (num) => {
    setSequence((prev) => {
      const newSeq = [...prev, num];
      if (newSeq.length === numbers.length) {
        if (JSON.stringify(newSeq) === JSON.stringify([1, 2, 3, 4, 5])) {
          setResult("✅ Correct Sequence!");
        } else {
          setResult("❌ Wrong Order! Try again.");
        }
      }
      return newSeq;
    });
  };

  return (
    <div className="max-w-lg mx-auto py-20 text-center">
      <h2 className="text-2xl font-bold mb-6">Numbers Connecting Test</h2>
      <div className="flex gap-4 justify-center mb-6">
        {numbers.map((num, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(num)}
            className="w-12 h-12 bg-blue-100 hover:bg-blue-300 rounded-full text-xl"
          >
            {num}
          </button>
        ))}
      </div>
      {result && <p className="mt-4">{result}</p>}
    </div>
  );
};

export default HardNumbersConnecting;
