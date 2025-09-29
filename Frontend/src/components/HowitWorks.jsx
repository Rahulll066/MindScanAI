import React, { useEffect, useRef, useState } from "react";
import { ClipboardList, Cpu, FileText, UserCheck } from "lucide-react";

const HowItWorks = () => {
  const lineRef = useRef(null);
  const containerRef = useRef(null);
  const [fillPercent, setFillPercent] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFillPercent(100);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const steps = [
    {
      title: "Assessment",
      description: "Complete a series of simple tests to evaluate cognitive health.",
      icon: ClipboardList,
    },
    {
      title: "AI Analysis",
      description: "Our AI processes your results to detect early signs of dementia.",
      icon: Cpu,
    },
    {
      title: "Results",
      description: "Get a clear report with insights and recommendations.",
      icon: FileText,
    },
    {
      title: "Action Plan",
      description: "Receive personalized guidance and next steps to maintain brain health.",
      icon: UserCheck,
    },
  ];

  return (
    <section className="py-20" ref={containerRef}>
      <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>

      <div className="max-w-6xl mx-auto px-4 relative flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
        {/* Desktop Horizontal Line */}
        <div className="hidden md:block absolute top-32 left-6 right-6 h-1 bg-primary-100 z-0"></div>
        <div
          ref={lineRef}
          className="hidden md:block absolute top-32 left-6 h-1 bg-primary-600 z-10 transition-all"
          style={{ width: `${fillPercent}%`, transition: "width 2.5s ease-in-out" }}
        ></div>

        {/* Mobile Vertical Line */}
        <div className="md:hidden absolute top-0 left-10 w-1 h-full bg-primary-100 z-0"></div>
        <div
          className="md:hidden absolute top-0 left-10 w-1 bg-primary-600 z-10 transition-all"
          style={{ height: `${fillPercent}%`, transition: "height 2.5s ease-in-out" }}
        ></div>

        {/* Steps */}
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center relative z-20 mb-12 md:mb-0 md:flex-1"
          >
            {/* Step circle */}
            <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold mb-8">
              {idx + 1}
            </div>

            {/* Icon */}
            <step.icon className="w-10 h-10 text-primary-600 mb-6" />

            {/* Text */}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-700 text-sm max-w-xs">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;


