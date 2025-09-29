import { Shield, Brain, FileCheck, Users, RefreshCcw, CheckCircle } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      title: "Advanced AI",
      description: "Cutting-edge AI technology for accurate cognitive assessment.",
      icon: Brain,
    },
    {
      title: "Early Detection",
      description: "Identify signs of dementia in its earliest stages for better outcomes.",
      icon: FileCheck,
    },
    {
      title: "HIPAA Compliant",
      description: "Your health data is protected with top security and privacy standards.",
      icon: Shield,
    },
    {
      title: "Family Dashboard",
      description: "Easily share results and progress with your loved ones or caregivers.",
      icon: Users,
    },
    {
      title: "Continuous Monitoring",
      description: "Track cognitive changes over time with regular assessments.",
      icon: RefreshCcw,
    },
    {
      title: "Clinically Validated",
      description: "Our methods are backed by research and trusted by healthcare experts.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="why-choose">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-12">
          Why Choose <span className="text-primary-600">NeurocareAI</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <feature.icon className="w-10 h-10 text-primary-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





