import React, { createContext, useState, useContext } from "react";

const AssessmentContext = createContext();

export const AssessmentProvider = ({ children }) => {
  const [scores, setScores] = useState({
    clock: null,
    word: null,
    story: null,
    numbers: null,
  });

  const updateScore = (testName, value) => {
    setScores((prev) => ({ ...prev, [testName]: value }));
  };

  const resetScores = () => {
    setScores({
      clock: null,
      word: null,
      story: null,
      numbers: null,
    });
  };

  return (
    <AssessmentContext.Provider value={{ scores, updateScore, resetScores }}>
      {children}
    </AssessmentContext.Provider>
  );
};

export const useAssessment = () => useContext(AssessmentContext);
