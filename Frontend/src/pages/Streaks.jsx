import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Streaks = () => {
  const navigate = useNavigate();
  const [activityDates, setActivityDates] = useState([]);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [todayCompleted, setTodayCompleted] = useState(false);

  useEffect(() => {
    const fetchActivity = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await axios.get("http://localhost:5000/api/user/activity", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const dates = res.data.dates.map(d => new Date(d).toDateString());
        setActivityDates(dates);

        // Current streak
        let streak = 0;
        let tempDate = new Date();
        while (dates.includes(tempDate.toDateString())) {
          streak++;
          tempDate.setDate(tempDate.getDate() - 1);
        }
        setCurrentStreak(streak);

        // Today completed
        setTodayCompleted(dates.includes(new Date().toDateString()));

        // Longest streak
        let longest = 0;
        let count = 1;
        for (let i = 1; i < dates.length; i++) {
          const prev = new Date(dates[i - 1]);
          const curr = new Date(dates[i]);
          const diff = (curr - prev) / (1000 * 3600 * 24);
          if (diff === 1) count++;
          else count = 1;
          if (count > longest) longest = count;
        }
        setLongestStreak(longest);
      } catch (err) {
        console.error(err);
      }
    };
    fetchActivity();
  }, []);

  // Last 7 days for mini timeline
  const last7Days = [...Array(7)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d;
  });

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Top Streak Card */}
      <div className="bg-primary-600 text-white rounded-xl p-8 shadow-lg mb-10">
        <h1 className="text-3xl font-bold text-center mb-4">🔥 Your Streak Dashboard</h1>
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <h2 className="font-semibold text-lg">Current Streak</h2>
            <p className="text-2xl font-bold mt-2">{currentStreak} Days</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Longest Streak</h2>
            <p className="text-2xl font-bold mt-2">{longestStreak} Days</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Today's Assessment</h2>
            <p className="text-2xl mt-2">{todayCompleted ? '✅ Done' : '⚠️ Pending'}</p>
          </div>
        </div>
      </div>

      {/* Mini Timeline / Last 7 Days */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-center">Last 7 Days</h2>
        <div className="flex justify-between">
          {last7Days.map(day => {
            const isDone = activityDates.includes(day.toDateString());
            const isToday = day.toDateString() === new Date().toDateString();
            return (
              <div
                key={day}
                className={`flex flex-col items-center justify-center w-10 h-10 rounded-full ${
                  isDone ? 'bg-yellow-400' : 'bg-gray-200'
                } ${isToday ? 'ring-2 ring-white ring-offset-2' : ''}`}
              >
                <span className="text-sm font-medium text-gray-800">{day.getDate()}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Motivation */}
      <div className="text-center mb-10">
        <p className="text-lg text-gray-700 mb-4">
          {todayCompleted
            ? `🔥 Keep going! Your streak is ${currentStreak} day(s) long!`
            : "⚡ Take today's assessment to keep your streak alive!"}
        </p>
        <div className="text-2xl">{'🔥'.repeat(currentStreak)}</div>
      </div>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => navigate("/assessment")}
          className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Take Today's Assessment
        </button>
        <button
          onClick={() => navigate("/profile")}
          className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Back to Profile
        </button>
      </div>
    </div>
  );
};

export default Streaks;


