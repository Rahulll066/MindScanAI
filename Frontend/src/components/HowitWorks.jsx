import React from "react";
import { ClipboardList, Cpu, FileText, UserCheck } from "lucide-react"; // icons for each step

const steps = [
  {
    title: "Take Assessment",
    description:
      "Complete our 15-minute cognitive assessment from the comfort of your home.",
    icon: ClipboardList,
    iconColor: "text-blue-600",
  },
  {
    title: "AI Analysis",
    description:
      "Our advanced AI analyzes your responses using patterns from millions of data points.",
    icon: Cpu,
    iconColor: "text-blue-600",
  },
  {
    title: "Get Results",
    description:
      "Receive a detailed report with risk assessment and personalized recommendations.",
    icon: FileText,
    iconColor: "text-blue-600",
  },
  {
    title: "Take Action",
    description:
      "Work with healthcare providers using our insights for early intervention strategies.",
    icon: UserCheck,
    iconColor: "text-blue-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">
        How It Works
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-4">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-lg p-6 flex flex-col items-center ${step.color} hover:shadow-xl transition`}
          >
            <step.icon className={`w-12 h-12 mb-4 ${step.iconColor}`} />
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-700 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
