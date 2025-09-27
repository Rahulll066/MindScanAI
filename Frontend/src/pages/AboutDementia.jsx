import React from "react";
import { Brain, HeartPulse, Shield, Users, Activity, Globe, BookOpen, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const AboutDementia = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-100 to-blue-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          What is <span className="text-blue-600">Dementia?</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
          Dementia is a set of symptoms caused by brain damage, affecting memory, thinking, behavior, and daily functioning. 
          Early detection and awareness are key to improving quality of life.
        </p>
      </section>

      {/* Quick Overview */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Overview</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Syndrome, Not a Disease</h3>
            <p className="text-gray-600">
              Dementia is a syndrome—a set of symptoms caused by brain damage. It mainly affects older adults but is not a normal part of aging.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Memory & Daily Functioning</h3>
            <p className="text-gray-600">
              Affects memory, thinking, behavior, and the ability to perform daily activities. Early recognition is crucial.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">No Cure, Manageable</h3>
            <p className="text-gray-600">
              There is no cure yet, but treatments and interventions can slow progression and improve quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Dementia */}
      <section className="bg-white py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Types of Dementia</h2>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg text-center">
            <Brain className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Alzheimer’s</h3>
            <p className="text-gray-600">Most common (60–70%), affecting memory and thinking.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg text-center">
            <HeartPulse className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Vascular</h3>
            <p className="text-gray-600">Caused by reduced blood flow to the brain, often after stroke.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Lewy Body</h3>
            <p className="text-gray-600">Abnormal protein deposits in brain cells affecting cognition and movement.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Frontotemporal</h3>
            <p className="text-gray-600">Affects personality, behavior, and speech.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg text-center">
            <Activity className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Mixed Dementia</h3>
            <p className="text-gray-600">Combination of two or more types.</p>
          </div>
        </div>
      </section>

      {/* Causes & Risk Factors */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Causes & Risk Factors</h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-700">
          <ul className="list-disc list-inside space-y-2">
            <li>Age (risk increases after 65)</li>
            <li>Genetics (family history, APOE-ε4 gene)</li>
            <li>Brain injury or stroke</li>
            <li>Lifestyle factors – smoking, alcohol, poor diet, lack of exercise</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Chronic diseases – diabetes, hypertension, obesity</li>
            <li>Low cognitive activity – less mental stimulation</li>
            <li>Other medical conditions impacting brain health</li>
          </ul>
        </div>
      </section>

      {/* Symptoms */}
      <section className="bg-white py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Symptoms</h2>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl shadow hover:shadow-lg text-center bg-gray-100">
            <h3 className="font-semibold text-lg mb-2">Early Stage</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Forgetfulness (names, recent events)</li>
              <li>Losing track of time</li>
              <li>Difficulty finding words</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl shadow hover:shadow-lg text-center bg-gray-100">
            <h3 className="font-semibold text-lg mb-2">Middle Stage</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Confusion, disorientation</li>
              <li>Repeating questions</li>
              <li>Trouble with daily tasks</li>
              <li>Personality/behavioral changes</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl shadow hover:shadow-lg text-center bg-gray-100">
            <h3 className="font-semibold text-lg mb-2">Late Stage</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Severe memory loss</li>
              <li>Difficulty recognizing family/friends</li>
              <li>Trouble walking, swallowing, or controlling bladder</li>
              <li>Complete dependency on caregivers</li>
            </ul>
          </div>
        </div>
        <p className="text-red-500 font-semibold text-center mt-6">
          ⚠ No cure yet, but treatments help manage symptoms and slow progression.
        </p>
      </section>

      {/* Non-Medical Interventions */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Non-Medical Interventions</h2>
        <div className="grid md:grid-cols-3 gap-8 text-gray-700">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
            <Brain className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Cognitive Stimulation</h3>
            <p>Puzzles, memory games, and brain exercises to keep mind active.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
            <Activity className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Healthy Lifestyle</h3>
            <p>Regular exercise, Mediterranean diet, and social engagement.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Occupational Therapy</h3>
            <p>Training to manage daily tasks and improve independence.</p>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="bg-blue-50 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-600">Global Impact</h2>
        <div className="max-w-4xl mx-auto text-gray-700 space-y-4 text-center">
          <p>Over 70 million people worldwide live with dementia (WHO, 2025).</p>
          <p>Nearly 10 million new cases are diagnosed each year.</p>
          <p>Dementia imposes significant economic burdens on healthcare and caregiving systems.</p>
        </div>
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
