/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, Phone, MessageSquare } from "lucide-react";

type CategoryKey = "General" | "Services" | "Pricing" | "Technical";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<CategoryKey>("General");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories: CategoryKey[] = ["General", "Services", "Pricing", "Technical"];

  const faqData: Record<CategoryKey, FAQItem[]> = {
    General: [
      {
        question: "What is IP Call?",
        answer:
          "IP Call (Internet Protocol Calling) is a technology that allows you to make voice calls using an internet connection instead of traditional phone lines, offering better call quality and lower costs.",
      },
      {
        question: "What is IPCallBD?",
        answer:
          "IPCallBD is a Bangladesh-based corporate business communication provider offering Cloud PBX systems, IP numbers via licensed IPTSP operators, bulk voice calls, and call management solutions.",
      },
      {
        question: "How to make an IP Call?",
        answer:
          "You can make IP calls using an IP phone device, a softphone app (like Zoiper or Linphone) on your smartphone/PC, or through an integrated web browser interface with your SIP credentials.",
      },
      {
        question: "Is IPCallBD legal and licensed?",
        answer:
          "Yes, IPCallBD facilitates IP telephony services strictly through BTRC-licensed IPTSP operators in Bangladesh, ensuring 100% legal compliance and enterprise reliability.",
      },
      {
        question: "Do I need special hardware?",
        answer:
          "No, special hardware is optional. You can use free softphone software on existing PCs or smartphones. However, dedicated IP desktop phones or ATA adapters can be used if preferred.",
      },
    ],
    Services: [
      {
        question: "What is Cloud PBX?",
        answer:
          "Cloud PBX is a virtual telephone exchange system hosted in the cloud. It manages extensions, call routing, IVR menus, and call recording without requiring physical PBX hardware at your office.",
      },
      {
        question: "Does IPCallBD provide Bulk Voice Calls?",
        answer:
          "Yes, we provide Bulk Voice Call services with developer APIs for sending automated voice alerts, notifications, and promotional call campaigns.",
      },
      {
        question: "Can I get custom IVR and Caller Tunes?",
        answer:
          "Yes! We offer professionally recorded voice greetings and custom IVR interactive menu setups tailored to your brand identity.",
      },
      {
        question: "Is call recording available?",
        answer:
          "Yes, cloud call recording is available as an optional feature for monitoring quality, training, and compliance with secure 90-day storage.",
      },
    ],
    Pricing: [
      {
        question: "What is the call rate?",
        answer:
          "Our flat call rate is 40 Paisa per minute (+15% VAT) to any operator network in Bangladesh with 1-second pulse billing.",
      },
      {
        question: "Are there any hidden charges?",
        answer:
          "No, we maintain 100% transparent pricing. You only pay for your monthly subscription package and the talk-time balance you use.",
      },
      {
        question: "Are internal calls free?",
        answer:
          "Yes, all inter-extension calls within your corporate network (IP-to-IP calls) are completely free of charge.",
      },
      {
        question: "Does my recharge balance expire?",
        answer:
          "No, your account talk-time recharge balance has no validity expiration date and rolls over every month.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major payment options in Bangladesh including bKash, Nagad, Rocket, Visa, Mastercard, AMEX, and direct bank transfers.",
      },
      {
        question: "Is call recording included?",
        answer:
          "Call recording can be added to any package tier or subscribed to separately as an add-on service starting from ৳99/month.",
      },
    ],
    Technical: [
      {
        question: "Which softphones are compatible with IPCallBD?",
        answer:
          "Our system works seamlessly with all standard SIP softphones, including Zoiper, MicroSIP, Grandstream Wave, Linphone, and GS Wave.",
      },
      {
        question: "How long does setup take?",
        answer:
          "Standard Cloud PBX setup and IP number activation are usually completed within 24 to 48 hours after verification.",
      },
      {
        question: "What internet bandwidth is required for IP calling?",
        answer:
          "Each concurrent voice call requires approximately 64 kbps to 100 kbps of stable internet bandwidth (upload/download).",
      },
      {
        question: "Can I use IPCallBD outside Bangladesh?",
        answer:
          "While you can manage configuration from anywhere, IP number originations and call routing operate under BTRC regulations for Bangladesh communications.",
      },
    ],
  };

  const handleTabChange = (tab: CategoryKey) => {
    setActiveTab(tab);
    setOpenIndex(null); // Reset accordion on tab change
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-slate-800">
      {/* 1. Hero Banner */}
      <section className="relative bg-[#0b1329] text-white pt-40 pb-32 text-center overflow-hidden">
        {/* Soft Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            <span className="text-amber-500">Frequently</span> Asked Questions
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Get answers to the most common questions about IP calling <br className="hidden sm:inline" />
            and our services.
          </p>
          <div className="mt-5 text-sm text-slate-400 font-medium">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-blue-400">FAQ</span>
          </div>
        </div>
      </section>

      {/* 2. Floating FAQ Card Container */}
      <section className="relative -mt-16 z-20 max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50">
          
          {/* Tab System Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleTabChange(category)}
                className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                  activeTab === category
                    ? "bg-[#0b1329] text-white shadow-md shadow-slate-900/20"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/60"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Accordion Questions List */}
          <div className="space-y-3 max-w-3xl mx-auto">
            {faqData[activeTab].map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-slate-100 rounded-2xl bg-slate-50/50 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-blue-600 text-sm md:text-base transition"
                  >
                    <span>{item.question}</span>
                    <span className="shrink-0 text-slate-400">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-blue-600" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  {/* Accordion Expanded Answer */}
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100/60 pt-3 bg-white/60">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA Block */}
      <section className="relative bg-[#0b1329] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">
            Still Have Questions?
          </h2>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto mb-8">
            Our support team is ready to help. Reach out via phone, WhatsApp, or email.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 px-7 py-3 rounded-xl text-xs md:text-sm font-semibold transition inline-flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Contact Support</span>
            </Link>
            <Link
              href="https://wa.me/8801891116631"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-white px-7 py-3 rounded-xl text-xs md:text-sm font-semibold transition inline-flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}