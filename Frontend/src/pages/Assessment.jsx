// src/pages/Assessment.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Assessment = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleStart = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      // User not logged in → redirect to signup
      navigate("/signup");
    } else {
      // User logged in → proceed to assessment
      navigate("/assessment/very-easy-clock");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-20 text-center">
      <h2 className="text-4xl font-bold mb-6 text-blue-700">
        {t("assessment.title")}
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        {t("assessment.description")}
      </p>

      <button
        onClick={handleStart}
        className="bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
      >
        {t("assessment.button")}
      </button>
    </div>
  );
};

export default Assessment;



