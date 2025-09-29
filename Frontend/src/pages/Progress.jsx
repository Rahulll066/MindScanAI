import React from "react";
import { useNavigate } from "react-router-dom";

const Progress = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-6">Your Progress</h1>
      <p className="text-gray-500 mb-6 text-center">
        View your progress over time for memory tests and activities.
      </p>

      <div className="bg-primary-100 rounded-lg p-6 shadow w-full max-w-lg text-center">
        <h2 className="font-semibold text-lg">Memory Test Score</h2>
        <p className="text-gray-600 text-xl mt-2">85%</p>
      </div>

      <button
        onClick={() => navigate("/profile")}
        className="mt-6 bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-6 rounded-lg transition"
      >
        Back to Profile
      </button>
    </div>
  );
};

export default Progress;
