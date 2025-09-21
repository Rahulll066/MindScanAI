import React, { useEffect, useState } from "react";
import { useAssessment } from "../context/AssessmentContext";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const { scores, resetScores } = useAssessment();
  const [overallScore, setOverallScore] = useState(0);
  const [riskLevel, setRiskLevel] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const values = Object.values(scores).filter((s) => s !== null);
    const avg =
      values.length > 0
        ? Math.round(values.reduce((a, b) => a + b, 0) / values.length)
        : 0;

    setOverallScore(avg);

    if (avg >= 80) setRiskLevel("Low Risk of Dementia");
    else if (avg >= 50) setRiskLevel("Medium Risk of Dementia");
    else setRiskLevel("High Risk of Dementia");
  }, [scores]);

  const handleRestart = () => {
    resetScores();
    navigate("/assessment"); // go back to assessment start
  };

  return (
    <div className="max-w-2xl mx-auto py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Assessment Result</h2>

      <p className="text-xl mb-4">
        <span className="font-semibold">Overall Score:</span> {overallScore} / 100
      </p>
      <p
        className={`text-2xl font-bold mb-6 ${
          riskLevel.includes("Low")
            ? "text-green-600"
            : riskLevel.includes("Medium")
            ? "text-yellow-600"
            : "text-red-600"
        }`}
      >
        {riskLevel}
      </p>

      <button
        onClick={handleRestart}
        className="mt-8 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
      >
        Restart Assessment
      </button>
    </div>
  );
};

export default Results;


