import React, { useEffect, useState } from "react";
import { useAssessment } from "../context/AssessmentContext";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const { scores, resetScores } = useAssessment();
  const [overallScore, setOverallScore] = useState(0);
  const [riskLevel, setRiskLevel] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const values = Object.values(scores).filter(s => s !== null);
    const avg = values.length > 0 ? Math.round(values.reduce((a, b) => a + b, 0) / values.length) : 0;
    setOverallScore(avg);

    if (avg >= 80) setRiskLevel("Low Risk of Dementia");
    else if (avg >= 50) setRiskLevel("Medium Risk of Dementia");
    else setRiskLevel("High Risk of Dementia");
  }, [scores]);

  const handleRestart = () => {
    resetScores();
    navigate("/assessment");
  };

  return (
    <div className="max-w-2xl mx-auto py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Assessment Result</h2>
      
      <p className="text-xl mb-4">
        <span className="font-semibold">Overall Score:</span> {overallScore} / 100
      </p>

      <p className={`text-2xl font-bold mb-6 ${
        riskLevel.includes("Low") ? "text-green-600" :
        riskLevel.includes("Medium") ? "text-yellow-600" :
        "text-red-600"
      }`}>
        {riskLevel}
      </p>

      <button
        onClick={handleRestart}
        className="mt-8 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
      >
        Restart Assessment
      </button>

      {/* Personalized Recommendations Section */}
      <div className="mt-12 bg-gray-50 p-6 rounded-xl shadow-lg text-left">
        <h3 className="text-2xl font-semibold mb-4 border-b pb-2">Personalized Recommendations</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><strong>Daily Habits:</strong> Maintain consistent sleep schedule, practice brain exercises, follow balanced nutrition.</li>
          <li><strong>Cognitive Training:</strong> Play short puzzles, memory games, or problem-solving activities regularly.</li>
          <li><strong>Lifestyle Reminders:</strong> Stay hydrated, engage in physical activity, practice mindfulness and stress management.</li>
          <li><strong>Social Engagement:</strong> Interact with friends or family, join community activities to keep your brain active.</li>
          <li><strong>Regular Health Checkups:</strong> Monitor blood pressure, cholesterol, and overall health to support cognitive function.</li>
        </ul>
      </div>
    </div>
  );
};

export default Results;





