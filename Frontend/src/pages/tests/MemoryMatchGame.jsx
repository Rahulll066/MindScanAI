// src/pages/assessment/MemoryMatchGame.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAssessment } from "../../context/AssessmentContext";

const colors = ["red","blue","green","yellow","purple","orange","pink","cyan"];
const shuffledCards = [...colors, ...colors]
  .sort(() => Math.random() - 0.5)
  .map((color, idx) => ({ id: idx, color, flipped: false, matched: false }));

const MemoryMatchGame = () => {
  const [cards, setCards] = useState(shuffledCards);
  const [flipped, setFlipped] = useState([]);
  const [matches, setMatches] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const { updateScore } = useAssessment();
  const navigate = useNavigate();

  const handleFlip = (card) => {
    if (flipped.length === 2 || card.flipped || card.matched) return;
    setCards(prev => prev.map(c => c.id === card.id ? { ...c, flipped: true } : c));
    setFlipped(prev => [...prev, card]);
  };

  useEffect(() => {
    if (flipped.length === 2) {
      setAttempts(prev => prev + 1);
      const [first, second] = flipped;
      if (first.color === second.color) {
        setCards(prev => prev.map(c => c.color === first.color ? { ...c, matched: true } : c));
        setMatches(prev => prev + 1);
      } else {
        setTimeout(() => {
          setCards(prev => prev.map(c => (c.id === first.id || c.id === second.id) ? { ...c, flipped: false } : c));
        }, 1000);
      }
      setFlipped([]);
    }
  }, [flipped]);

  useEffect(() => {
    if (matches === colors.length) {
      const efficiency = (colors.length / attempts) * 100;
      const score = Math.max(20, Math.round(efficiency));
      updateScore("memory", score);
      setTimeout(() => navigate("/assessment/results"), 500);
    }
  }, [matches, attempts]);

  return (
    <div className="max-w-xl mx-auto py-20 text-center">
      <h2 className="text-2xl font-bold mb-6">Memory Match Game</h2>
      <p className="mb-4 text-gray-600">Find all matching pairs of colors!</p>
      <div className="grid grid-cols-4 gap-3">
        {cards.map(card => (
          <button
            key={card.id}
            onClick={() => handleFlip(card)}
            className="w-20 h-20 rounded-lg flex items-center justify-center text-white font-bold text-lg"
            style={{ backgroundColor: card.flipped || card.matched ? card.color : "gray" }}
          >
            {card.flipped || card.matched ? "" : "?"}
          </button>
        ))}
      </div>
      <div className="mt-6 text-gray-700">
        <p>Matches: {matches}</p>
        <p>Attempts: {attempts}</p>
      </div>
    </div>
  );
};

export default MemoryMatchGame;




