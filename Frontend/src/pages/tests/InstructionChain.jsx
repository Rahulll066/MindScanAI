// src/pages/assessment/ThreeStepCommand.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAssessment } from "../../context/AssessmentContext";

const InstructionChain = () => {
  const [gameState, setGameState] = useState("start"); // start, instructions, playing, results
  const [currentStep, setCurrentStep] = useState(0);
  const [timeLeft, setTimeLeft] = useState(8);
  const [userInput, setUserInput] = useState("");
  const [clickSequence, setClickSequence] = useState([]);
  const [score, setScore] = useState(0);
  const [currentSet, setCurrentSet] = useState(null);
  const { updateScore } = useAssessment();
  const navigate = useNavigate();

  const instructionSets = [
    {
      step1: { sequence: ["red", "blue", "green"], display: "🔴 Red → 🔵 Blue → 🟢 Green" },
      step2: { word: "BRAIN", display: "type 'BRAIN'" },
      step3: { question: "What was the second word to type?", answer: "FOCUS", options: ["BRAIN", "MIND", "FOCUS", "MEMORY"] }
    },
    {
      step1: { sequence: ["blue", "yellow", "red"], display: "🔵 Blue → 🟡 Yellow → 🔴 Red" },
      step2: { word: "MEMORY", display: "type 'MEMORY'" },
      step3: { question: "What was the second word to type?", answer: "THINK", options: ["MEMORY", "BRAIN", "THINK", "LEARN"] }
    },
    {
      step1: { sequence: ["green", "red", "yellow"], display: "🟢 Green → 🔴 Red → 🟡 Yellow" },
      step2: { word: "FOCUS", display: "type 'FOCUS'" },
      step3: { question: "What was the second word to type?", answer: "MIND", options: ["FOCUS", "ATTENTION", "MIND", "CONCENTRATE"] }
    }
  ];

  // Start game with random set
  const startGame = () => {
    const randomSet = instructionSets[Math.floor(Math.random() * instructionSets.length)];
    setCurrentSet(randomSet);
    setGameState("instructions");
    setTimeLeft(8);
    setCurrentStep(0);
    setUserInput("");
    setClickSequence([]);
    setScore(0);
  };

  // Instruction timer
  useEffect(() => {
    if (gameState === "instructions" && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (gameState === "instructions" && timeLeft === 0) {
      setGameState("playing");
    }
  }, [gameState, timeLeft]);

  // Auto-redirect after showing results
  useEffect(() => {
    if (gameState === "results") {
      const timer = setTimeout(() => {
        updateScore("comprehension", Math.round((score / 3) * 100));
        navigate("/assessment/hard-numbers");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [gameState, score, updateScore, navigate]);

  const handleColorClick = (color) => {
    if (currentStep === 0) {
      const newSequence = [...clickSequence, color];
      setClickSequence(newSequence);
      
      // Check if sequence is complete and correct
      if (newSequence.length === currentSet.step1.sequence.length) {
        const isCorrect = newSequence.every((color, index) => color === currentSet.step1.sequence[index]);
        if (isCorrect) {
          setScore(prev => prev + 1);
        }
        setCurrentStep(1);
        setClickSequence([]);
      }
    }
  };

  const handleTypeSubmit = (e) => {
    e.preventDefault();
    if (currentStep === 1) {
      const isCorrect = userInput.trim().toUpperCase() === currentSet.step2.word;
      if (isCorrect) {
        setScore(prev => prev + 1);
      }
      setCurrentStep(2);
      setUserInput("");
    }
  };

  const handleMemoryAnswer = (answer) => {
    if (currentStep === 2) {
      const isCorrect = answer === currentSet.step3.answer;
      if (isCorrect) {
        setScore(prev => prev + 1);
      }
      setGameState("results");
    }
  };

  const skipGame = () => {
    updateScore("comprehension", 0);
    navigate("/assessment/hard-numbers");
  };

  if (!currentSet && gameState === "start") {
    return (
      <div className="max-w-lg mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold mb-2">Instruction Chain Test</h2>
        <p className="text-gray-600 mb-8">Test your memory and ability to follow multi-step instructions</p>

        <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
  <h3 className="text-lg font-semibold text-primary-800 mb-3">How This Test Works:</h3>
  <ul className="text-primary-700 space-y-2 text-left">
    <li>• You'll see 3 instructions for <strong>8 seconds</strong></li>
    <li>• Memorize them carefully - they will disappear</li>
    <li>• Complete all steps in the exact order shown</li>
    <li>• Pay attention to all details - some information will be tested later</li>
    <li>• This tests working memory and attention to detail</li>
  </ul>
</div>

<button
  onClick={startGame}
  className="group relative bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-3 px-8 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
>
  Start Test
  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></span>
</button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto py-12 text-center">
      <h2 className="text-2xl font-bold mb-2">Instruction Chain</h2>
      
      {gameState === "instructions" && (
        <>
          <p className="text-gray-600 mb-6">Memorize these instructions (they will disappear in {timeLeft}s):</p>
          
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Complete in this order:</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-center p-3 bg-white rounded-lg border">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">1</div>
                <span className="font-medium">Click: {currentSet.step1.display}</span>
              </div>
              <div className="flex items-center p-3 bg-white rounded-lg border">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">2</div>
                <span className="font-medium">{currentSet.step2.display}</span>
              </div>
              <div className="flex items-center p-3 bg-white rounded-lg border">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">3</div>
                <span className="font-medium">Remember: '{currentSet.step3.answer}' will be asked later</span>
              </div>
            </div>
          </div>
        </>
      )}

      {gameState === "playing" && (
        <>
          <div className="flex justify-between items-center mb-6 px-4">
            <div className="text-sm font-medium">Step {currentStep + 1} of 3</div>
            <button
              onClick={skipGame}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Skip
            </button>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
            <div 
              className="bg-primary-600 h-3 rounded-full transition-all duration-1000"
              style={{ width: `${((currentStep) / 3) * 100}%` }}
            ></div>
          </div>

          {/* Step 1: Color Sequence */}
          {currentStep === 0 && (
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Click the colors in the correct sequence</h3>
              <p className="text-gray-600 mb-4">Your sequence: {clickSequence.map(c => 
                c === 'red' ? '🔴' : c === 'blue' ? '🔵' : c === 'green' ? '🟢' : '🟡'
              ).join(' → ')}</p>
              <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                {['red', 'blue', 'green', 'yellow'].map(color => (
                  <button
                    key={color}
                    onClick={() => handleColorClick(color)}
                    className="p-4 text-2xl border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
                  >
                    {color === 'red' ? '🔴' : color === 'blue' ? '🔵' : color === 'green' ? '🟢' : '🟡'}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Type Word */}
          {currentStep === 1 && (
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Type the word</h3>
              <form onSubmit={handleTypeSubmit} className="space-y-4">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Type here..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-center text-lg focus:border-primary-500 focus:outline-none uppercase"
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-6 rounded-lg font-semibold transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          )}

          {/* Step 3: Memory Recall */}
          {currentStep === 2 && (
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{currentSet.step3.question}</h3>
              <div className="space-y-3">
                {currentSet.step3.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleMemoryAnswer(option)}
                    className="w-full p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-primary-300 transition-all text-lg font-medium"
                  >
                    '{option}'
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {gameState === "results" && (
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Test Complete!</h3>
          <p className="text-xl mb-2">You got <strong>{score}/3</strong> correct</p>
          <p className="text-gray-600">Moving to final results...</p>
        </div>
      )}
    </div>
  );
};

export default InstructionChain;