import { Shield, Brain, FileCheck, Users, RefreshCcw, CheckCircle } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export default function WhyChoose() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("features.advancedAI.title"),
      description: t("features.advancedAI.desc"),
      icon: Brain,
    },
    {
      title: t("features.earlyDetection.title"),
      description: t("features.earlyDetection.desc"),
      icon: FileCheck,
    },
    {
      title: t("features.hipaa.title"),
      description: t("features.hipaa.desc"),
      icon: Shield,
    },
    {
      title: t("features.familyDashboard.title"),
      description: t("features.familyDashboard.desc"),
      icon: Users,
    },
    {
      title: t("features.monitoring.title"),
      description: t("features.monitoring.desc"),
      icon: RefreshCcw,
    },
    {
      title: t("features.validated.title"),
      description: t("features.validated.desc"),
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="why-choose">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-12">
          <Trans i18nKey="whyChooseTitle">
            Why Choose <span className="text-blue-600">MindScanAI</span>
          </Trans>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <feature.icon className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


