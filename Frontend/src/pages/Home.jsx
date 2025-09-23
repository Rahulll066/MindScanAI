import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import WhyChoose from "../components/WhyChoose";
import HowitWorks from "../components/HowitWorks";
import Testimonials from "../components/testimonials";
import FAQ from "../components/faq";
import { useTranslation, Trans } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-100 to-blue-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <Trans i18nKey="heroTitle">
            Early Dementia Detection with <span className="text-blue-600">AI</span>
          </Trans>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          {t("heroSubtitle")}
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/assessment">
            <Button>{t("startAssessment")}</Button>
          </Link>
          <Link to="/about">
            <Button variant="outline">{t("learnMore")}</Button>
          </Link>
        </div>
      </section>

      {/* Sections */}
      <WhyChoose />
      <HowitWorks />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;

