import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "NeuroCareAI's technology has revolutionized how we approach early dementia detection. The accuracy and early detection capabilities are unprecedented.",
    initials: "DSC",
    name: "Dr. Sarah Chen",
    role: "Neurologist, Stanford Medical Center",
    rating: 5,
  },
  {
    quote:
      "Thanks to NeuroCareAI, we caught early signs that my doctor missed. Now I'm getting the care I need and my family has peace of mind.",
    initials: "MW",
    name: "Margaret Williams",
    role: "Patient, Age 72",
    rating: 5,
  },
  {
    quote:
      "The clinical validation and accuracy of NeuroCareAI's AI model is remarkable. It's become an essential tool in our diagnostic process.",
    initials: "DMR",
    name: "Dr. Michael Rodriguez",
    role: "Chief of Neurology, Mayo Clinic",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-blue-50 text-center">
      <h2 className="text-4xl font-bold mb-12">What People Say</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 px-4">
        {testimonials.map((tItem, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">
              {tItem.initials}
            </div>
            <p className="text-gray-700 mb-4 text-sm">{tItem.quote}</p>
            <div className="flex gap-1 mb-2">
              {Array(tItem.rating)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                  />
                ))}
            </div>
            <h4 className="font-semibold">{tItem.name}</h4>
            <p className="text-gray-500 text-sm">{tItem.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a
          href="/assessment"
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
          Start Your Assessment
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
