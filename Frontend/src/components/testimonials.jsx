import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "NeuroCareAI's technology has revolutionized how we approach early dementia detection. The accuracy and early detection capabilities are unprecedented.",
    name: "Dr. Sudheer",
    role: "Neurologist",
    rating: 5,
    image: "https://ik.imagekit.io/0tglkhk4r/NeuroCareAI/dementia4.jpg?updatedAt=1759128518929",
  },
  {
    quote:
      "Thanks to NeuroCareAI, we caught early signs that my doctor missed. Now I'm getting the care I need and my family has peace of mind.",
    name: "Ramya",
    role: "Patient",
    rating: 5,
    image: "https://ik.imagekit.io/0tglkhk4r/NeuroCareAI/dementia5.jpg?updatedAt=1759128518781",
  },
  {
    quote:
      "The clinical validation and accuracy of NeuroCareAI's AI model is remarkable. It's become an essential tool in our diagnostic process.",
    name: "Dr. Ramayya",
    role: "Chief of Neurology, Ramayya Clinic",
    rating: 5,
    image: "https://ik.imagekit.io/0tglkhk4r/NeuroCareAI/dementia4.jpg?updatedAt=1759128518929",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-primary-50 text-center">
      <h2 className="text-4xl font-bold mb-12">What People Say</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 px-4">
        {testimonials.map((tItem, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
          >
            {/* Profile Image */}
            <img
              src={tItem.image}
              alt={tItem.name}
              className="w-16 h-16 rounded-full object-cover shadow-md mb-4"
            />

            {/* Quote */}
            <p className="text-gray-700 mb-4 text-sm">{tItem.quote}</p>

            {/* Rating */}
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

            {/* Name & Role */}
            <h4 className="font-semibold">{tItem.name}</h4>
            <p className="text-gray-500 text-sm">{tItem.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a
          href="/assessment"
          className="inline-block bg-primary-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-primary-700 transition"
        >
          Start Your Assessment
        </a>
      </div>
    </section>
  );
};

export default Testimonials;

