import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { Brain, HeartPulse, Shield, Users, Activity, Share2, Globe } from "lucide-react";

const AboutMission = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-100 to-blue-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About <span className="text-blue-600">NeurocareAI</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
          Learn about our mission to use AI for early dementia detection and provide accessible healthcare solutions.
        </p>
      </section>

      {/* The Mind Behind NeurocareAI */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
          The Mind Behind NeurocareAI
        </h2>
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Brain className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">AI-Powered Insights</h3>
            <p className="text-gray-600">
              Leveraging cutting-edge AI models to analyze cognitive health with accuracy and efficiency.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <HeartPulse className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Healthcare Focused</h3>
            <p className="text-gray-600">
              Designed to support individuals and healthcare providers in identifying dementia early.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">What You Get</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Brain className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">AI-Based Results</h3>
            <p className="text-gray-600">
              Quick and intelligent analysis of your cognitive tests powered by AI.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Data Privacy</h3>
            <p className="text-gray-600">
              Your data is securely stored and protected with industry standards.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Share2 className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Easy Sharing</h3>
            <p className="text-gray-600">
              Share results with healthcare professionals easily and securely.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Project */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Why This Project</h2>
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto text-gray-600">
          Dementia affects millions worldwide. Our goal is to provide a simple, accessible, and effective way to detect it early and improve quality of life.
        </p>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Approach</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Combining neuroscience, data science, and user-friendly technology to make early dementia detection widely accessible.
            </p>
          </div>
          <Brain className="w-40 h-40 mx-auto text-blue-600" />
        </div>
      </section>

      {/* Key Benefits */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Key Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Accessible</h3>
            <p className="text-gray-600">
              Designed to be used by anyone, anywhere, without needing medical expertise.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Activity className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Accurate</h3>
            <p className="text-gray-600">
              AI-powered analysis ensures reliable and accurate cognitive assessment results.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Globe className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Affordable</h3>
            <p className="text-gray-600">
              Our solution is cost-effective, making early detection accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Vision</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600">
          To make dementia detection proactive, affordable, and accessible globally using the power of AI.
        </p>
      </section>

      {/* Call to Action */}
      <div className="text-center py-16">
        <Link to="/assessment">
          <Button>Start Your Assessment</Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutMission;
