import React, { useEffect, useRef, useState } from "react";
import {
  Brain,
  HeartPulse,
  Shield,
  Users,
  Activity,
  BookOpen,
  Clock,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const AboutDementia = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Scroll progress for symptoms timeline
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      const scrolled = Math.min(
        Math.max(windowHeight - rect.top, 0),
        sectionHeight
      );

      setProgress((scrolled / sectionHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stages = [
    {
      stage: "Early Stage",
      items: [
        "Forgetfulness (names, events)",
        "Losing track of time",
        "Difficulty finding words",
      ],
    },
    {
      stage: "Middle Stage",
      items: [
        "Confusion, disorientation",
        "Repeating questions",
        "Trouble with daily tasks",
        "Personality changes",
      ],
    },
    {
      stage: "Late Stage",
      items: [
        "Severe memory loss",
        "Difficulty recognizing family",
        "Trouble walking/swallowing",
        "Complete dependency",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-primary-100 to-primary-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          What is <span className="text-primary-600">Dementia?</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
          Dementia is a set of symptoms caused by brain damage, affecting
          memory, thinking, behavior, and daily functioning. Early detection
          and awareness are key to improving quality of life.
        </p>
      </section>

      {/* Overview with Image */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://ik.imagekit.io/0tglkhk4r/NeuroCareAI/dementia1.png?updatedAt=1759128519321"
            alt="Brain illustration"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Quick Overview
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <BookOpen className="w-8 h-8 text-primary-600 mt-1" />
              <p>
                <span className="font-semibold">Syndrome, Not a Disease:</span>{" "}
                Dementia is a set of symptoms caused by brain damage, not just
                aging.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="w-8 h-8 text-primary-600 mt-1" />
              <p>
                <span className="font-semibold">Memory & Function:</span> It
                impacts memory, thinking, and daily life — early recognition
                matters.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <Zap className="w-8 h-8 text-primary-600 mt-1" />
              <p>
                <span className="font-semibold">No Cure, But Manageable:</span>{" "}
                Interventions can slow progression and improve quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Dementia */}
      <section className="bg-gray-50 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Types of Dementia
        </h2>
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "Alzheimer’s",
              text: "Most common (60–70%), affecting memory and thinking.",
            },
            {
              icon: HeartPulse,
              title: "Vascular",
              text: "Caused by reduced blood flow to the brain, often after stroke.",
            },
            {
              icon: Shield,
              title: "Lewy Body",
              text: "Protein deposits affecting cognition and movement.",
            },
            {
              icon: Users,
              title: "Frontotemporal",
              text: "Impacts personality, behavior, and speech.",
            },
            {
              icon: Activity,
              title: "Mixed Dementia",
              text: "Combination of two or more types.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center"
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-primary-600" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Causes & Risk Factors */}
      <section className="bg-gradient-to-r from-primary-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://ik.imagekit.io/0tglkhk4r/NeuroCareAI/dementia2.jpg?updatedAt=1759128519005"
              alt="Brain health"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Causes & Risk Factors
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-primary-600">Age & Genetics</h4>
                <p className="text-gray-600 text-sm">
                  Risk increases after 65, family history and APOE-ε4 gene play
                  a role.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-primary-600">Lifestyle</h4>
                <p className="text-gray-600 text-sm">
                  Smoking, alcohol, poor diet, and inactivity increase risk.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-primary-600">Chronic Illness</h4>
                <p className="text-gray-600 text-sm">
                  Diabetes, hypertension, and obesity contribute significantly.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-primary-600">Brain Injury</h4>
                <p className="text-gray-600 text-sm">
                  Past injuries or strokes can damage cognitive health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms - Timeline with scroll animation */}
      <section ref={sectionRef} className="bg-white py-20 relative">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Symptoms Progression
        </h2>
        <div className="max-w-4xl mx-auto relative pl-12">
          {/* Timeline Line */}
          <div className="absolute top-0 left-3 w-2 h-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-b from-primary-500 to-blue-500 rounded-full transition-all duration-200"
              style={{ height: `${progress}%` }}
            ></div>
          </div>

          {/* Stages */}
          {stages.map((sym, i) => (
            <div key={i} className="relative mb-12 pl-10">
              {/* Dot */}
              <span className="absolute top-6 left-0 w-6 h-6 bg-primary-500 rounded-full border-4 border-white"></span>
              {/* Card */}
              <div className="bg-gray-100 p-6 rounded-xl shadow-md ml-8">
                <h3 className="font-semibold text-lg mb-2 text-primary-600">
                  {sym.stage}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {sym.items.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className="text-red-500 font-semibold text-center mt-8">
          No cure yet, but treatments help manage symptoms and slow progression.
        </p>
      </section>

      {/* Call to Action */}
      <div className="text-center py-16">
        <Link to="/assessment">
          <Button>Start Your Cognitive Assessment</Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutDementia;

