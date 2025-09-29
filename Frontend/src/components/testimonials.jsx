import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "NeuroCareAI's technology has revolutionized how we approach early dementia detection. The accuracy and early detection capabilities are unprecedented.",
    name: "Dr. Sudheer",
    role: "Neurologist",
    rating: 5,
    image:
      "https://ik.imagekit.io/0tglkhk4r/NeuroCareAI/dementia4.jpg?updatedAt=1759128518929",
  },
  {
    quote:
      "Thanks to NeuroCareAI, we caught early signs that my doctor missed. Now I'm getting the care I need and my family has peace of mind.",
    name: "Ramya",
    role: "Patient",
    rating: 5,
    image:
      "https://ik.imagekit.io/0tglkhk4r/NeuroCareAI/dementia5.jpg?updatedAt=1759128518781",
  },
  {
    quote:
      "NeuroCareAI bridges the gap between doctors and families. The notifications and dashboards make caregiving less stressful and more informed.",
    name: "Suresh",
    role: "Family Member / Caregiver",
    rating: 5,
    image:
      "https://ik.imagekit.io/0tglkhk4r/NeuroCareAI/dementia6.jpg?updatedAt=1759128518955",
  },
  {
    quote:
      "I feel more in control of my health with NeuroCareAI. The regular assessments and clear reports make it easy to track my progress.",
    name: "Vikram",
    role: "Patient",
    rating: 5,
    image:
      "https://ik.imagekit.io/0tglkhk4r/NeuroCareAI/dementia6.jpg?updatedAt=1759128518955",
  },
  {
    quote:
      "The clinical validation and accuracy of NeuroCareAI's AI model is remarkable. It's become an essential tool in our diagnostic process.",
    name: "Dr. Ramayya",
    role: "Chief of Neurology, Ramayya Clinic",
    rating: 5,
    image:
      "https://ik.imagekit.io/0tglkhk4r/NeuroCareAI/dementia4.jpg?updatedAt=1759128518929",
  },
  {
    quote:
      "As a caregiver, NeuroCareAI has helped me monitor my loved one's cognitive health consistently. The insights are clear and actionable.",
    name: "Anita",
    role: "Caregiver",
    rating: 5,
    image:
      "https://ik.imagekit.io/0tglkhk4r/NeuroCareAI/dementia5.jpg?updatedAt=1759128518781",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-primary-50 text-center overflow-hidden">
      <h2 className="text-4xl font-bold mb-10 text-gray-900">
        What People Say
      </h2>

      {/* Carousel container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll">
          {/* Duplicate for infinite loop */}
          {[...testimonials, ...testimonials].map((tItem, idx) => (
            <div
              key={idx}
              className="flex-none min-w-[300px] max-w-sm mx-3 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={tItem.image}
                alt={tItem.name}
                className="w-16 h-16 rounded-full object-cover shadow-md mb-4"
              />
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
              <h4 className="font-semibold text-gray-900">{tItem.name}</h4>
              <p className="text-gray-500 text-sm">{tItem.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <a
          href="/assessment"
          className="inline-block bg-primary-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-primary-700 transition"
        >
          Start Your Assessment
        </a>
      </div>

      {/* Keyframes for continuous scroll */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;








