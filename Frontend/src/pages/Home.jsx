import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import WhyChoose from "../components/WhyChoose";
import HowitWorks from "../components/HowitWorks";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-100 to-blue-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Early Dementia Detection with{" "}
          <span className="text-blue-600">AI</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          A simple platform for early detection of dementia using cognitive
          tests and AI-powered analysis.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/">
            <Button>Start Assessment</Button>
          </Link>
          <Link to="/about">
            <Button variant="outline">Learn More</Button>
          </Link>
          
        </div>
      </section>

      {/* WhyChoose MindScan Section */}
      <WhyChoose />

      {/* HowitWorks MindScan Section */}
      <HowitWorks />


    </div>
  );
};

export default Home;
