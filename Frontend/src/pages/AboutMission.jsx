import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const AboutMission = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative text-center py-24 bg-gradient-to-r from-primary-100 to-primary-50">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          About <span className="text-primary-600">NeurocareAI</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-700">
          Harnessing the power of AI to make early dementia detection
          proactive, accessible, and impactful.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We aim to revolutionize dementia detection by combining neuroscience,
            AI, and accessibility. NeurocareAI empowers individuals and caregivers
            with tools to recognize early signs, take proactive measures, and
            improve quality of life globally.
          </p>
        </div>
      </section>

      {/* Why This Project */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/assets/logo/neurocare.jpg"
            alt="Why This Project"
            className="rounded-xl shadow-lg object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Why This Project?</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Dementia affects millions worldwide, yet diagnosis often comes too
              late. Families struggle, healthcare systems are overwhelmed, and
              patients miss opportunities for early care.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our goal is simple: make detection faster, smarter, and available
              to everyone, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              We merge neuroscience research, advanced AI algorithms, and
              human-centered design to create accessible tools that analyze
              cognitive health in real time.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From interactive tests to personalized insights, every feature is
              designed with empathy, accuracy, and usability in mind.
            </p>
          </div>
          <img
            src="/assets/dementia/dementia3.jpg"
            alt="Our Approach"
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Benefits in Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl text-primary-600 font-bold mb-4">01</div>
              <h3 className="text-xl font-semibold mb-2">Accessible</h3>
              <p className="text-gray-600">
                Simple and user-friendly, designed for individuals and caregivers.
              </p>
            </div>
            <div>
              <div className="text-4xl text-primary-600 font-bold mb-4">02</div>
              <h3 className="text-xl font-semibold mb-2">Accurate</h3>
              <p className="text-gray-600">
                AI-driven analysis ensures reliable cognitive health insights.
              </p>
            </div>
            <div>
              <div className="text-4xl text-primary-600 font-bold mb-4">03</div>
              <h3 className="text-xl font-semibold mb-2">Affordable</h3>
              <p className="text-gray-600">
                Bringing advanced detection within reach of everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-gradient-to-r from-primary-50 to-primary-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          A world where dementia detection is proactive, not reactive. Where
          technology empowers healthcare, and where every individual can access
          timely insights to live a fuller life.
        </p>
      </section>

      {/* Call to Action */}
      <div className="text-center py-20">
        <Link to="/assessment">
          <Button>Start Your Assessment</Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutMission;


