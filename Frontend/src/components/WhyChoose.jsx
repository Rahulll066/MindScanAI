// src/components/WhyChoose.jsx
import { Shield, Brain, FileCheck, Users, RefreshCcw, CheckCircle } from "lucide-react";

const features = [
  {
    title: "Advanced AI Analysis",
    description: "State-of-the-art machine learning algorithms analyze cognitive patterns with unprecedented accuracy.",
    icon: Brain,
  },
  {
    title: "Early Detection",
    description: "Identify potential signs of dementia years before traditional methods, enabling proactive care.",
    icon: FileCheck,
  },
  {
    title: "HIPAA Compliant",
    description: "Complete data privacy and security compliance ensures your sensitive health information is protected.",
    icon: Shield,
  },
  {
    title: "Family Dashboard",
    description: "Share results with family members and caregivers through secure, easy-to-understand dashboards.",
    icon: Users,
  },
  {
    title: "Continuous Monitoring",
    description: "Regular assessments track cognitive changes over time for comprehensive health insights.",
    icon: RefreshCcw,
  },
  {
    title: "Clinically Validated",
    description: "Backed by peer-reviewed research and validated in clinical trials with leading medical institutions.",
    icon: CheckCircle,
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 bg-gray-50" id="why-choose">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-12">
          Why Choose <span className="text-blue-600">MindScanAI</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <feature.icon className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
