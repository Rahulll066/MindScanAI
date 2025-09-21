import React, { useState, useEffect } from "react";

const words = ["apple", "table", "river", "house", "moon"];

const EasyWordRemembering = () => {
  const [showWords, setShowWords] = useState(true);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowWords(false), 5000); // show 5s
    return () => clearTimeout(timer);
  }, []);

  const checkAnswer = () => {
    const remembered = input.split(" ").map((w) => w.toLowerCase());
    const correct = words.filter((w) => remembered.includes(w));
    setResult(`You remembered ${correct.length}/${words.length} words.`);
  };

  return (
    <div className="max-w-lg mx-auto py-20 text-center">
      <h2 className="text-2xl font-bold mb-6">Word Remembering Test</h2>
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
            onClick={checkAnswer}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit
          </button>
          {result && <p className="mt-4">{result}</p>}
        </div>
      )}
    </div>
  );
};

export default EasyWordRemembering;
