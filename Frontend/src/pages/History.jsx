import React from "react";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-6">History</h1>
      <p className="text-gray-500 mb-6 text-center">
        View your previous test results and activity history.
      </p>

      <div className="grid grid-cols-1 gap-4 w-full max-w-lg">
        <div className="bg-primary-100 rounded-lg p-4 shadow flex justify-between">
          <span>Memory Test - 20 Sep 2025</span>
          <span className="font-semibold">85%</span>
        </div>
        <div className="bg-primary-100 rounded-lg p-4 shadow flex justify-between">
          <span>Game Test - 18 Sep 2025</span>
          <span className="font-semibold">90%</span>
        </div>
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

export default History;
