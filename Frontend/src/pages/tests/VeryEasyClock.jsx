import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAssessment } from "../../context/AssessmentContext";

const VeryEasyClock = () => {
  const [targetTime] = useState({
    h: Math.floor(Math.random() * 12) || 12,
    m: Math.floor(Math.random() * 60),
  });

  const [selected, setSelected] = useState({ h: 12, m: 0 });
  const [dragging, setDragging] = useState(null); // "hour" | "minute" | null
  const svgRef = useRef(null);

  const { updateScore } = useAssessment();
  const navigate = useNavigate();

  // Convert values to angles
  const getAngles = (h, m) => {
    const minuteAngle = (m / 60) * 360;
    const hourAngle = (h % 12) * 30 + (m / 60) * 30;
    return { hourAngle, minuteAngle };
  };
  const { hourAngle, minuteAngle } = getAngles(selected.h, selected.m);

  // Mouse move handler
  const handleMove = (e) => {
    if (!dragging || !svgRef.current) return;

    const rect = svgRef.current.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const x = e.clientX - rect.left - cx;
    const y = e.clientY - rect.top - cy;

    let angle = (Math.atan2(y, x) * 180) / Math.PI + 90;
    if (angle < 0) angle += 360;

    if (dragging === "minute") {
      const m = Math.round(angle / 6) % 60; // 6° per minute
      setSelected((prev) => ({ ...prev, m }));
    } else if (dragging === "hour") {
      const h = Math.round(angle / 30) % 12 || 12; // 30° per hour
      setSelected((prev) => ({ ...prev, h }));
    }
  };

  // Mouse up → stop dragging
  const handleUp = () => setDragging(null);

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  });

  const handleSubmit = () => {
    let score = 0;
    if (selected.h === targetTime.h) score += 50;
    if (selected.m === targetTime.m) score += 50;

    updateScore("clock", score);
    navigate("/assessment/instruction-chain");
  };

  return (
    <div className="max-w-lg mx-auto py-20 text-center">
      <h2 className="text-2xl font-bold mb-6">Clock Test</h2>
      <p className="mb-4 text-lg">
        Set this time:{" "}
        <strong>
          {targetTime.h}:{targetTime.m.toString().padStart(2, "0")}
        </strong>
      </p>

      {/* Analog Clock */}
      <svg
        ref={svgRef}
        width="250"
        height="250"
        viewBox="0 0 200 200"
        className="mx-auto select-none"
      >
        {/* Clock face */}
        <circle
          cx="100"
          cy="100"
          r="95"
          stroke="black"
          strokeWidth="3"
          fill="white"
        />

        {/* Hour markers */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 100 + 80 * Math.sin(angle);
          const y1 = 100 - 80 * Math.cos(angle);
          const x2 = 100 + 90 * Math.sin(angle);
          const y2 = 100 - 90 * Math.cos(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="black"
              strokeWidth="2"
            />
          );
        })}

        {/* Hour hand */}
        <line
          x1="100"
          y1="100"
          x2={100 + 40 * Math.sin((hourAngle * Math.PI) / 180)}
          y2={100 - 40 * Math.cos((hourAngle * Math.PI) / 180)}
          stroke="black"
          strokeWidth="5"
          onMouseDown={() => setDragging("hour")}
          style={{ cursor: "grab" }}
        />

        {/* Minute hand */}
        <line
          x1="100"
          y1="100"
          x2={100 + 70 * Math.sin((minuteAngle * Math.PI) / 180)}
          y2={100 - 70 * Math.cos((minuteAngle * Math.PI) / 180)}
          stroke="red"
          strokeWidth="3"
          onMouseDown={() => setDragging("minute")}
          style={{ cursor: "grab" }}
        />

        {/* Center dot */}
        <circle cx="100" cy="100" r="5" fill="black" />
      </svg>

      <p className="mt-4 text-gray-700">
        Your time: {selected.h}:{selected.m.toString().padStart(2, "0")}
      </p>

      <button
        onClick={handleSubmit}
  className="mt-6 bg-primary-600 text-white py-2 px-6 rounded-lg hover:bg-primary-700"
      >
        Submit & Continue
      </button>
    </div>
  );
};

export default VeryEasyClock;

