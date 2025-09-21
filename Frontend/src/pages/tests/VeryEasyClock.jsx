import React, { useState } from "react";

const VeryEasyClock = () => {
  const [targetTime] = useState(() => {
    const h = Math.floor(Math.random() * 12) + 1;
    const m = Math.floor(Math.random() * 60);
    return { h, m };
  });
  const [input, setInput] = useState({ h: "", m: "" });
  const [result, setResult] = useState(null);

  const checkAnswer = () => {
    if (parseInt(input.h) === targetTime.h && parseInt(input.m) === targetTime.m) {
      setResult("✅ Correct! Great job.");
    } else {
      setResult(`❌ Wrong! The correct time was ${targetTime.h}:${targetTime.m}`);
    }
  };

  return (
    <div className="max-w-lg mx-auto py-20 text-center">
      <h2 className="text-2xl font-bold mb-6">Set the Clock</h2>
      <p className="mb-4">Target Time: {targetTime.h}:{targetTime.m}</p>
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
        onClick={checkAnswer}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
      {result && <p className="mt-4">{result}</p>}
    </div>
  );
};

export default VeryEasyClock;
