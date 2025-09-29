import React from "react";
import { useNavigate } from "react-router-dom";

const Caretakers = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-6">Caretakers</h1>
      <p className="text-gray-500 mb-6 text-center">
        Manage your caretakers and their access to your profile.
      </p>

      <div className="grid grid-cols-1 gap-4 w-full max-w-lg">
        <div className="bg-primary-100 rounded-lg p-4 shadow">
          <h2 className="font-semibold text-lg">John Doe</h2>
          <p className="text-gray-600 text-sm">Relation: Son</p>
        </div>
        <div className="bg-primary-100 rounded-lg p-4 shadow">
          <h2 className="font-semibold text-lg">Jane Smith</h2>
          <p className="text-gray-600 text-sm">Relation: Caregiver</p>
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

export default Caretakers;
