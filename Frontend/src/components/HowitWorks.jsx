import React, { useEffect, useRef, useState } from "react";
import { ClipboardList, Cpu, FileText, UserCheck } from "lucide-react";

const steps = [
  {
    title: "Take Assessment",
    description:
      "Complete our 15-minute cognitive assessment from the comfort of your home.",
    icon: ClipboardList,
  },
  {
    title: "AI Analysis",
    description:
      "Our advanced AI analyzes your responses using patterns from millions of data points.",
    icon: Cpu,
  },
  {
    title: "Get Results",
    description:
      "Receive a detailed report with risk assessment and personalized recommendations.",
    icon: FileText,
  },
  {
    title: "Take Action",
    description:
      "Work with healthcare providers using our insights for early intervention strategies.",
    icon: UserCheck,
  },
];

const HowItWorks = () => {
  const lineRef = useRef(null);
  const containerRef = useRef(null);
  const [fillWidth, setFillWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFillWidth(100); // fill the line when visible
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section className="py-20 bg-white" ref={containerRef}>
      <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>

      <div className="max-w-6xl mx-auto px-4 relative flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Static horizontal line */}
        <div className="absolute top-16 left-6 right-6 h-1 bg-blue-100 hidden md:block z-0"></div>
        {/* Animated fill line */}
        <div
          ref={lineRef}
          className="absolute top-16 left-6 h-1 bg-blue-600 hidden md:block z-10 transition-all"
          style={{ width: `${fillWidth}%`, transition: "width 2.5s ease-in-out" }}
        ></div>

        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center relative z-20 mb-12 md:mb-0"
          >
            {/* Step circle */}
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-4">
              {idx + 1}
            </div>

            {/* Icon */}
            <step.icon className="w-10 h-10 text-blue-600 mb-2" />

            {/* Text */}
            <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
            <p className="text-gray-700 text-sm max-w-xs">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

