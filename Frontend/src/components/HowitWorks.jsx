import React, { useEffect, useRef, useState } from "react";
import { ClipboardList, Cpu, FileText, UserCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();
  const lineRef = useRef(null);
  const containerRef = useRef(null);
  const [fillWidth, setFillWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFillWidth(100);
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
      title: t("steps.assessment.title"),
      description: t("steps.assessment.desc"),
      icon: ClipboardList,
    },
    {
      title: t("steps.ai.title"),
      description: t("steps.ai.desc"),
      icon: Cpu,
    },
    {
      title: t("steps.results.title"),
      description: t("steps.results.desc"),
      icon: FileText,
    },
    {
      title: t("steps.action.title"),
      description: t("steps.action.desc"),
      icon: UserCheck,
    },
  ];

  return (
    <section className="py-20 bg-white" ref={containerRef}>
      <h2 className="text-4xl font-bold text-center mb-12">
        {t("howItWorks")}
      </h2>

      <div className="max-w-6xl mx-auto px-4 relative flex flex-col md:flex-row justify-center md:justify-between items-center">
        {/* Static horizontal line (desktop only) */}
        <div className="absolute top-16 left-6 right-6 h-1 bg-blue-100 hidden md:block z-0"></div>

        {/* Animated fill line (desktop only) */}
        <div
          ref={lineRef}
          className="absolute top-16 left-6 h-1 bg-blue-600 hidden md:block z-10 transition-all"
          style={{ width: `${fillWidth}%`, transition: "width 2.5s ease-in-out" }}
        ></div>

        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center relative z-20 mb-12 md:mb-0 md:flex-1"
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


