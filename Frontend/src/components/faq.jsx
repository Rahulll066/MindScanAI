import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();

  const faqItems = [
    { question: t("faq.q1.question"), answer: t("faq.q1.answer") },
    { question: t("faq.q2.question"), answer: t("faq.q2.answer") },
    { question: t("faq.q3.question"), answer: t("faq.q3.answer") },
    { question: t("faq.q4.question"), answer: t("faq.q4.answer") },
    { question: t("faq.q5.question"), answer: t("faq.q5.answer") },
    { question: t("faq.q6.question"), answer: t("faq.q6.answer") },
    { question: t("faq.q7.question"), answer: t("faq.q7.answer") },
    { question: t("faq.q8.question"), answer: t("faq.q8.answer") },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("faq.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("faq.subtitle")}
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="flex justify-between items-center py-6 w-full hover:no-underline">
                  <span className="font-semibold">{item.question}</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200 radix-state-open:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;




