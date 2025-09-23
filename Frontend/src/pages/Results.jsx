import React, { useEffect, useState } from "react";
import { useAssessment } from "../context/AssessmentContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Results = () => {
  const { scores, resetScores } = useAssessment();
  const [overallScore, setOverallScore] = useState(0);
  const [riskLevel, setRiskLevel] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const values = Object.values(scores).filter(s => s !== null);
    const avg =
      values.length > 0
        ? Math.round(values.reduce((a, b) => a + b, 0) / values.length)
        : 0;
    setOverallScore(avg);

    if (avg >= 80) setRiskLevel("Low");
    else if (avg >= 50) setRiskLevel("Medium");
    else setRiskLevel("High");
  }, [scores]);

  const handleRestart = () => {
    resetScores();
    navigate("/assessment");
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto py-20 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Assessment Result
      </motion.h2>

      <motion.p
        className="text-xl mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span className="font-semibold">Overall Score:</span> {overallScore} / 100
      </motion.p>

      {/* Risk Level with animations */}
      <motion.p
        className={`text-2xl font-bold mb-6 ${
          riskLevel === "Low"
            ? "text-green-600"
            : riskLevel === "Medium"
            ? "text-yellow-600"
            : "text-red-600"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={
          riskLevel === "High"
            ? { opacity: [0.8, 1, 0.8], y: 0, scale: [1, 1.1, 1] }
            : { opacity: 1, y: 0 }
        }
        transition={
          riskLevel === "High"
            ? { duration: 1, repeat: Infinity }
            : { duration: 0.6 }
        }
      >
        {riskLevel} Risk of Dementia
      </motion.p>

      {/* Risk-based Messages */}
      {riskLevel === "Low" && (
        <motion.p
          className="text-green-700 font-medium mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ✅ You are at low risk. Please follow the personalized recommendations below.
        </motion.p>
      )}

      {riskLevel === "Medium" && (
        <motion.p
          className="text-yellow-700 font-medium mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ⚠️ You are at medium risk. It’s better to meet a doctor and also follow the personalized recommendations below.
        </motion.p>
      )}

      {riskLevel === "High" && (
        <motion.div
          className="text-red-700 font-medium mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          🚨 You are at high risk. Please consult a doctor immediately.
          <br />
          <span className="block mt-2 font-semibold">
            Emergency Contact: Dr. John Smith (Neurologist) – +91 98765 43210
          </span>
        </motion.div>
      )}

      {/* Personalized Recommendations - only for Low/Medium */}
      {(riskLevel === "Low" || riskLevel === "Medium") && (
        <motion.div
          className="mt-12 bg-gray-50 p-6 rounded-xl shadow-lg text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4 border-b pb-2">
            Personalized Recommendations
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              <strong>Daily Habits:</strong> Maintain consistent sleep schedule,
              practice brain exercises, follow balanced nutrition.
            </li>
            <li>
              <strong>Cognitive Training:</strong> Play short puzzles, memory
              games, or problem-solving activities regularly.
            </li>
            <li>
              <strong>Lifestyle Reminders:</strong> Stay hydrated, engage in
              physical activity, practice mindfulness and stress management.
            </li>
            <li>
              <strong>Social Engagement:</strong> Interact with friends or
              family, join community activities to keep your brain active.
            </li>
            <li>
              <strong>Regular Health Checkups:</strong> Monitor blood pressure,
              cholesterol, and overall health to support cognitive function.
            </li>
          </ul>
        </motion.div>
      )}

      <motion.button
        onClick={handleRestart}
        className="mt-8 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Restart Assessment
      </motion.button>
    </motion.div>
  );
};

export default Results;
