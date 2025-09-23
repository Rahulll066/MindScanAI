import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";
import { Brain, HeartPulse, Shield, Users, Activity, Share2, Globe } from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-100 to-blue-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t("about.heroTitle")} <span className="text-blue-600">{t("about.heroTitleHighlight")}</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
          {t("about.heroSubtitle")}
        </p>
      </section>

      {/* The Mind Behind MindScanAI */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
          {t("about.mindTitle")}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Brain className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{t("about.mindFeatures.aiTitle")}</h3>
            <p className="text-gray-600">{t("about.mindFeatures.aiDesc")}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <HeartPulse className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{t("about.mindFeatures.healthTitle")}</h3>
            <p className="text-gray-600">{t("about.mindFeatures.healthDesc")}</p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">{t("about.whatYouGetTitle")}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Brain className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{t("about.whatYouGet.aiResultsTitle")}</h3>
            <p className="text-gray-600">{t("about.whatYouGet.aiResultsDesc")}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{t("about.whatYouGet.privacyTitle")}</h3>
            <p className="text-gray-600">{t("about.whatYouGet.privacyDesc")}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Share2 className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{t("about.whatYouGet.sharingTitle")}</h3>
            <p className="text-gray-600">{t("about.whatYouGet.sharingDesc")}</p>
          </div>
        </div>
      </section>

      {/* Why This Project */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">{t("about.whyProjectTitle")}</h2>
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto text-gray-600">
          {t("about.whyProjectDesc")}
        </p>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">{t("about.approachTitle")}</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              {t("about.approachDesc")}
            </p>
          </div>
          <Brain className="w-40 h-40 mx-auto text-blue-600" />
        </div>
      </section>

      {/* Key Benefits */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">{t("about.keyBenefitsTitle")}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{t("about.keyBenefits.accessibleTitle")}</h3>
            <p className="text-gray-600">{t("about.keyBenefits.accessibleDesc")}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Activity className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{t("about.keyBenefits.accurateTitle")}</h3>
            <p className="text-gray-600">{t("about.keyBenefits.accurateDesc")}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Globe className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{t("about.keyBenefits.affordableTitle")}</h3>
            <p className="text-gray-600">{t("about.keyBenefits.affordableDesc")}</p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{t("about.visionTitle")}</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600">{t("about.visionDesc")}</p>
      </section>

      {/* Call to Action */}
      <div className="text-center py-16">
        <Link to="/assessment">
          <Button>{t("about.cta")}</Button>
        </Link>
      </div>
    </div>
  );
};

export default About;

