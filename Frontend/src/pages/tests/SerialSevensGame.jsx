// src/pages/assessment/SerialSevensGame.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAssessment } from "../../context/AssessmentContext";

const SerialSevensGame = () => {
  const [currentNumber, setCurrentNumber] = useState(100);
  const [userAnswer, setUserAnswer] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [questionCount, setQuestionCount] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { updateScore } = useAssessment();
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0 && !showFeedback) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showFeedback) {
      handleAnswer(false);
    }
  }, [timeLeft, showFeedback]);

  const handleAnswer = (correct) => {
    setIsCorrect(correct);
    setShowFeedback(true);
    if (correct) setCorrectAnswers(correctAnswers + 1);
    
    setTimeout(() => {
      setShowFeedback(false);
      if (questionCount < 4) {
        // Next question
        setCurrentNumber(currentNumber - 7);
        setUserAnswer("");
        setTimeLeft(15);
        setQuestionCount(questionCount + 1);
      } else {
        // Game complete
        const finalScore = Math.round((correctAnswers / 5) * 100);
        updateScore("attention", finalScore);
        navigate("/assessment/memory-match");
      }
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expectedAnswer = currentNumber - 7;
    const correct = parseInt(userAnswer) === expectedAnswer;
    handleAnswer(correct);
  };

  const expectedAnswer = currentNumber - 7;

  return (
    <div className="max-w-lg mx-auto py-12 text-center">
      <h2 className="text-2xl font-bold mb-2">Subtraction Test</h2>
      <p className="text-gray-600 mb-6">Subtract 7 from each number</p>
      
      {/* Progress */}
      <div className="flex justify-between items-center mb-6 px-4">
        <div className="text-sm text-gray-600">
          Question {questionCount + 1} of 5
        </div>
        <div className="text-sm font-medium">
          Correct: {correctAnswers}/5
        </div>
      </div>

      {/* Timer */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
        <div 
          className="bg-green-600 h-3 rounded-full transition-all duration-1000"
          style={{ width: `${(timeLeft / 15) * 100}%` }}
        ></div>
      </div>
      <div className="text-sm text-gray-600 mb-6">Time left: {timeLeft}s</div>

      {/* Question */}
      <div className="text-4xl font-bold mb-8 bg-gray-100 py-6 rounded-lg">
        {currentNumber} - 7 = ?
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div className={`mb-6 p-4 rounded-lg text-lg font-semibold ${
          isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {isCorrect ? '✓ Correct!' : `✗ Correct answer: ${expectedAnswer}`}
        </div>
      )}

      {/* Input Form */}
      {!showFeedback && (
        <form onSubmit={handleSubmit} className="mb-6">
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-32 px-4 py-3 border-2 border-gray-300 rounded-lg text-center text-2xl font-bold focus:border-green-500 focus:outline-none"
            autoFocus
          />
          <button 
            type="submit" 
            className="ml-4 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors"
            disabled={!userAnswer}
          >
            Submit
          </button>
        </form>
      )}

      {/* Instructions */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Instructions:</strong> Start from 100 and keep subtracting 7 from each answer.
        </p>
      </div>
    </div>
  );
};

export default SerialSevensGame;