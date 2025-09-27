import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import WhyChoose from "../components/WhyChoose";
import HowitWorks from "../components/HowitWorks";
import Testimonials from "../components/testimonials";
import FAQ from "../components/faq";

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen bg-blue-50 flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-70 z-0"
        >
          <source src="/assets/brain.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay content */}
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Early Dementia Detection with{" "}
            <span className="text-blue-600">AI</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            A simple platform for early detection of dementia using cognitive
            tests and AI-powered analysis.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/assessment">
              <Button>Start Assessment</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="relative z-10">
        <WhyChoose />
      </section>

      {/* How It Works Section */}
      <section className="relative z-10">
        <HowitWorks />
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 bg-gray-50 py-16">
        <Testimonials />
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 bg-white py-16">
        <FAQ />
      </section>
    </div>
  );
};

export default Home;
