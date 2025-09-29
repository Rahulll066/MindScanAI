import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
    streaks: 0,
    progress: 0,
    caretakers: [],
    history: [],
    notes: [],
    reminders: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("You are not logged in.");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("http://localhost:5000/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Ensure fallback defaults
        setProfile({
          firstName: res.data.firstName || "",
          lastName: res.data.lastName || "",
          email: res.data.email || "",
          avatar: res.data.avatar || "",
          streaks: res.data.streaks || 0,
          progress: res.data.progress || 0,
          caretakers: res.data.caretakers || [],
          history: res.data.history || [],
          notes: res.data.notes || [],
          reminders: res.data.reminders || [],
        });
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch profile.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Profile + Notes + Reminders */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center">
          {/* Avatar */}
          <div className="w-28 h-28 rounded-full bg-gray-200 overflow-hidden mb-4">
            {profile.avatar ? (
              <img
                src={`http://localhost:5000/${profile.avatar}`}
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-4xl font-bold text-gray-500">
                {profile.firstName?.[0] || "?"}
              </span>
            )}
          </div>

          {/* Basic Info */}
          <h1 className="text-xl font-bold">
            {profile.firstName} {profile.lastName}
          </h1>
          <p className="text-gray-500 mb-4">{profile.email}</p>

          <button
            onClick={() => navigate("/profile/editprofile")}
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-6 rounded-lg transition mb-6"
          >
            Edit Profile
          </button>

          {/* Notes */}
          <div className="w-full text-left mb-4">
            <h2 className="text-lg font-semibold mb-2">📝 Notes</h2>
            {profile.notes?.length ? (
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {profile.notes.slice(0, 5).map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No notes added yet.</p>
            )}
          </div>

          {/* Reminders */}
          <div className="w-full text-left">
            <h2 className="text-lg font-semibold mb-2">⏰ Reminders</h2>
            {profile.reminders?.length ? (
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {profile.reminders.slice(0, 5).map((rem, i) => (
                  <li key={i}>{rem}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No reminders set.</p>
            )}
          </div>
        </div>

        {/* Right: Dashboard Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Streaks */}
          <div
            onClick={() => navigate("/profile/streaks")}
            className="bg-white shadow-md rounded-xl p-6 cursor-pointer hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold mb-2">🔥 Streaks</h2>
            <p className="text-gray-600">
              Current Streak:{" "}
              <span className="font-bold">{profile.streaks}</span> days
            </p>
            {profile.streaks > 0 ? (
              <p className="text-green-600 mt-2">Great job! Keep it up 🎉</p>
            ) : (
              <p className="text-gray-500 mt-2">Start building your streak!</p>
            )}
          </div>

          {/* Progress */}
          <div
            onClick={() => navigate("/profile/progress")}
            className="bg-white shadow-md rounded-xl p-6 cursor-pointer hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold mb-2">📊 Your Progress</h2>
            <p className="text-gray-600 mb-2">
              You have completed{" "}
              <span className="font-bold">{profile.progress}%</span> of your
              plan.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary-500 h-2 rounded-full"
                style={{ width: `${profile.progress}%` }}
              ></div>
            </div>
            {profile.progress >= 70 ? (
              <p className="text-green-600 mt-2">Improving steadily 🚀</p>
            ) : (
              <p className="text-yellow-600 mt-2">Keep working on it 💪</p>
            )}
          </div>

          {/* Caretakers */}
          <div
            onClick={() => navigate("/profile/caretakers")}
            className="bg-white shadow-md rounded-xl p-6 cursor-pointer hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold mb-2">👥 Caretakers</h2>
            {profile.caretakers?.length ? (
              <ul className="list-disc pl-5 text-gray-600">
                {profile.caretakers.slice(0, 3).map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No caretakers added yet.</p>
            )}
          </div>

          {/* History */}
          <div
            onClick={() => navigate("/profile/history")}
            className="bg-white shadow-md rounded-xl p-6 cursor-pointer hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold mb-2">📜 History</h2>
            {profile.history?.length ? (
              <ul className="list-disc pl-5 text-gray-600">
                {profile.history.slice(0, 3).map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No results yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

