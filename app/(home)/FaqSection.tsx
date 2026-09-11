/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { ChevronDown, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import { faqs } from "../utils/data";

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-linear-to-b from-white via-slate-50 to-white relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-100 w-175 rounded-full bg-blue-100/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Header & Support */}
          <div className="lg:col-span-5 lg:sticky lg:top-8">
            
            {/* Badge */}
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-primary bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Support & Help
            </span>

            {/* Heading - BORO KORA */}
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-5 tracking-tight leading-[1.15]">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-800">
                Questions
              </span>
            </h2>

            <p className="text-slate-500 mt-4 text-base leading-relaxed">
              Have questions about how our IP TSP platform works, setup times, or regulatory compliance? Find quick answers right here.
            </p>

            {/* Support Box - Premium */}
            <div className="mt-10 p-6 bg-white border border-slate-100 rounded-3xl flex items-start space-x-4 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-primary to-[#0F1E55] text-white flex items-center justify-center shrink-0 shadow-md shadow-primary/20">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Still have questions?</h4>
                <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
                  Can't find the answer you're looking for? Reach out to our 24/7 customer service team.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center text-sm font-bold text-primary hover:text-blue-700 mt-4"
                >
                  Contact Support
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`group border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    isOpen
                      ? "border-primary/20 bg-white shadow-lg shadow-primary/5"
                      : "border-slate-100 bg-white/70 hover:bg-white hover:border-slate-200 hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center transition-colors"
                  >
                    <span className={`text-base lg:text-lg font-bold pr-4 transition-colors ${
                      isOpen ? "text-primary" : "text-slate-800 group-hover:text-primary"
                    }`}>
                      {faq.question}
                    </span>
                    
                    <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? "bg-primary text-white rotate-180" 
                        : "bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary"
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Answer - Smooth reveal */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 text-slate-600 text-sm lg:text-base leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};