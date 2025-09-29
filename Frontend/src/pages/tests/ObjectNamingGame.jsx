// src/pages/assessment/ObjectNamingGame.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAssessment } from "../../context/AssessmentContext";

const ObjectNamingGame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const { updateScore } = useAssessment();
  const navigate = useNavigate();

  // Large pool of objects (20 items)
  const allObjects = [
    { emoji: "🕰️", correct: "watch", alternatives: ["clock", "timepiece"] },
    { emoji: "✏️", correct: "pencil", alternatives: ["pen", "writing"] },
    { emoji: "🔑", correct: "key", alternatives: ["lock key", "door key"] },
    { emoji: "📘", correct: "book", alternatives: ["notebook", "textbook"] },
    { emoji: "💡", correct: "light", alternatives: ["bulb", "lamp", "lightbulb"] },
    { emoji: "👓", correct: "glasses", alternatives: ["spectacles", "eyewear"] },
    { emoji: "📱", correct: "phone", alternatives: ["mobile", "cellphone"] },
    { emoji: "🎒", correct: "bag", alternatives: ["backpack", "purse"] },
    { emoji: "🪑", correct: "chair", alternatives: ["seat", "stool"] },
    { emoji: "🛏️", correct: "bed", alternatives: ["cot", "mattress"] },
    { emoji: "🍎", correct: "apple", alternatives: ["fruit", "red apple"] },
    { emoji: "🚗", correct: "car", alternatives: ["automobile", "vehicle"] },
    { emoji: "🐦", correct: "bird", alternatives: ["sparrow", "pigeon"] },
    { emoji: "🌹", correct: "flower", alternatives: ["rose", "blossom"] },
    { emoji: "⏰", correct: "alarm", alternatives: ["alarm clock", "timer"] },
    { emoji: "📷", correct: "camera", alternatives: ["photo camera", "digital camera"] },
    { emoji: "🎸", correct: "guitar", alternatives: ["instrument", "music guitar"] },
    { emoji: "☂️", correct: "umbrella", alternatives: ["rain umbrella", "parasol"] },
    { emoji: "👞", correct: "shoe", alternatives: ["footwear", "dress shoe"] },
    { emoji: "🧸", correct: "bear", alternatives: ["teddy bear", "toy bear"] }
  ];

  // Shuffle and select 5 random objects for this test
  const getTestObjects = () => {
    const shuffled = [...allObjects].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  };

  const [testObjects, setTestObjects] = useState(getTestObjects());

  // Generate multiple choice options for current object
  const getOptions = (currentObject) => {
    const wrongOptions = allObjects
      .filter(obj => obj.correct !== currentObject.correct)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2)
      .map(obj => obj.correct);
    
    const allOptions = [currentObject.correct, ...wrongOptions];
    return allOptions.sort(() => Math.random() - 0.5);
  };

  const [currentOptions, setCurrentOptions] = useState([]);

  useEffect(() => {
    if (testObjects[currentIndex]) {
      setCurrentOptions(getOptions(testObjects[currentIndex]));
    }
  }, [currentIndex, testObjects]);

  useEffect(() => {
    if (timeLeft > 0 && !showFeedback) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showFeedback) {
      handleAnswer(false, "");
    }
  }, [timeLeft, showFeedback]);

  const handleAnswer = (correct, answer) => {
    setIsCorrect(correct);
    setSelectedAnswer(answer);
    setShowFeedback(true);
    if (correct) setScore(score + 1);
    
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedAnswer("");
      if (currentIndex < testObjects.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setTimeLeft(15);
      } else {
        // Game complete
        const finalScore = Math.round((score / testObjects.length) * 100);
        updateScore("naming", finalScore);
        navigate("/assessment/serial-sevens");
      }
    }, 1500);
  };

  const handleOptionClick = (option) => {
    if (showFeedback) return; // Prevent clicking during feedback
    
    const currentObject = testObjects[currentIndex];
    const correct = option === currentObject.correct;
    handleAnswer(correct, option);
  };

  const currentObject = testObjects[currentIndex];

  return (
    <div className="max-w-lg mx-auto py-12 text-center">
      <h2 className="text-2xl font-bold mb-2">Object Naming Test</h2>
      <p className="text-gray-600 mb-6">What is this object? Click the correct name.</p>
      
      {/* Progress */}
      <div className="flex justify-between items-center mb-6 px-4">
        <div className="text-sm font-medium">
          Question {currentIndex + 1} of {testObjects.length}
        </div>
        <div className="text-sm text-gray-600">
          Score: {score}/{testObjects.length}
        </div>
      </div>

      {/* Timer */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
        <div 
          className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
          style={{ width: `${(timeLeft / 15) * 100}%` }}
        ></div>
      </div>
      <div className="text-sm text-gray-600 mb-6">Time left: {timeLeft}s</div>

      {/* Object Display */}
      <div className="text-8xl mb-8 bg-white p-8 rounded-2xl shadow-lg border">
        {currentObject?.emoji}
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div className={`mb-6 p-4 rounded-lg text-lg font-semibold ${
          isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {isCorrect ? '✓ Correct!' : `✗ Correct answer: ${currentObject.correct}`}
        </div>
      )}

      {/* Multiple Choice Options */}
      {!showFeedback && currentOptions.length > 0 && (
        <div className="space-y-3 mb-6">
          {currentOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className="w-full py-4 px-6 bg-white border-2 border-gray-300 rounded-lg text-lg font-medium hover:bg-gray-50 hover:border-blue-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {/* Skip Button */}
      {!showFeedback && (
        <button 
          onClick={() => handleAnswer(false, "")}
          className="text-gray-500 hover:text-gray-700 underline text-sm"
        >
          Skip this question
        </button>
      )}

      {/* Loading State */}
      {!currentObject && (
        <div className="text-gray-500">Loading questions...</div>
      )}
    </div>
  );
};

export default ObjectNamingGame;