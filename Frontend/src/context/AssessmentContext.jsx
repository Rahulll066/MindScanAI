// src/context/AssessmentContext.jsx
import React, { createContext, useState, useContext } from "react";

const AssessmentContext = createContext();

export const AssessmentProvider = ({ children }) => {
  // Load from localStorage if exists
  const savedData = JSON.parse(localStorage.getItem("assessmentData")) || {};

  const [scores, setScores] = useState({
    clock: savedData.clock || null,
    word: savedData.word || null,
    story: savedData.story || null,
    numbers: savedData.numbers || null,
    memory: savedData.memory || null,
    speech: savedData.speech || null,
  });

  const updateScore = (testName, value) => {
    setScores((prev) => {
      const updated = { ...prev, [testName]: value };
      localStorage.setItem("assessmentData", JSON.stringify(updated));
      return updated;
    });
  };

  const resetScores = () => {
    const cleared = {
      clock: null,
      word: null,
      story: null,
      numbers: null,
      memory: null,
      speech: null,
    };
    setScores(cleared);
    localStorage.setItem("assessmentData", JSON.stringify(cleared));
  };

  return (
    <AssessmentContext.Provider value={{ scores, updateScore, resetScores }}>
      {children}
    </AssessmentContext.Provider>
  );
};

export const useAssessment = () => useContext(AssessmentContext);




