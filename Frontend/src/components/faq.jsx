import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react"; // small down arrow icon

const faqItems = [
  {
    question: "Is NeuroCare’s AI assessment safe to use at home?",
    answer:
      "Yes! NeuroCare's AI assessments are completely safe and designed for home use. All data is encrypted and HIPAA compliant.",
  },
  {
    question: "How long does the cognitive assessment take?",
    answer:
      "The assessment typically takes about 15 minutes and includes memory, speech, and cognitive function tasks.",
  },
  {
    question: "Can NeuroCare detect dementia early?",
    answer:
      "NeuroCare’s AI analyzes cognitive patterns to detect early signs of dementia. However, it is not a substitute for professional medical diagnosis.",
  },
  {
    question: "Is my personal data safe with NeuroCare?",
    answer:
      "Absolutely. All personal and health data is securely stored, encrypted, and only shared with authorized healthcare personnel if you consent.",
  },
  {
    question: "Do I need a doctor to interpret the results?",
    answer:
      "You can view your results directly through NeuroCare, but consulting a healthcare professional is recommended for personalized advice.",
  },
  {
    question: "Is NeuroCare suitable for all age groups?",
    answer:
      "NeuroCare is designed primarily for adults, especially those aged 50 and above, but younger adults can also use it for cognitive monitoring.",
  },
  {
    question: "How accurate is NeuroCare's AI?",
    answer:
      "NeuroCare's AI is clinically validated and trained on millions of data points, providing highly reliable early detection insights, but it does not replace professional medical advice.",
  },
  {
    question: "Can family members access my results?",
    answer:
      "Yes, you can securely share your results with family members or caregivers via the Family Dashboard, if you choose to do so.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about NeuroCare's AI-powered dementia detection.
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
