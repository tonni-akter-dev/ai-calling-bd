/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is IP TSP?",
    answer:
      "IP TSP stands for Internet Protocol Telephony Service Provider. It enables phone calls using an internet connection instead of traditional analog lines.",
  },
  {
    question: "How long does it take to activate an IP TSP?",
    answer:
      "Activation typically happens within minutes after submitting the required documentation.",
  },
  {
    question: "Can I transfer my existing number to your IP TSP?",
    answer:
      "Yes, number porting is supported subject to regulatory verification.",
  },
  {
    question: "What is BTCL and BTRC?",
    answer:
      "BTCL is the state-owned telecommunications vendor, while BTRC is the regulatory commission overseeing telecom services in Bangladesh.",
  },
  {
    question: "Can I use voice call services from outside the country?",
    answer:
      "Yes, with authorized security configurations, you can manage and initiate calls globally via the portal.",
  },
];

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Title & Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Support & Help
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-slate-500 mt-4 text-base leading-relaxed">
              Have questions about how our IP TSP platform works, setup times, or regulatory compliance? Find quick answers right here.
            </p>

            {/* Support Box */}
            <div className="mt-8 p-6 bg-slate-50 border border-slate-100 rounded-3xl flex items-start space-x-4">
              <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Still have questions?</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Can't find the answer you're looking for? Reach out to our 24/7 customer service team.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 mt-3"
                >
                  Contact Support →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Questions */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                    isOpen
                      ? "border-blue-200 bg-blue-50/30 shadow-sm"
                      : "border-slate-100 bg-slate-50/50 hover:bg-slate-50"
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    <span className="text-base font-bold pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-blue-100/50 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};