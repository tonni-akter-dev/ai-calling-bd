"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Minus,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type CategoryKey = "General" | "Services" | "Pricing" | "Technical";

interface FAQItem {
  question: string;
  answer: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<CategoryKey>("General");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories: CategoryKey[] = [
    "General",
    "Services",
    "Pricing",
    "Technical",
  ];

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
    setOpenIndex(null);
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-slate-50 to-white font-sans antialiased text-slate-800">
      <section className="relative bg-linear-to-br from-primary via-[#0B1329] to-[#0F1E55] pt-40 pb-32 text-white text-center overflow-hidden">
        {/* Decorative glows */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute -bottom-40 right-0 w-100 h-100 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-500">
              Questions
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Get answers to the most common questions about IP calling and our
            services.
          </motion.p>

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-orange-400 font-medium">FAQ</span>
          </motion.div>
        </div>
      </section>

      {/* ============ FLOATING FAQ CARD ============ */}
      <section className="relative -mt-16 z-20 max-w-4xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="group bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50"
        >
          {/* Tabs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleTabChange(category)}
                className={`relative px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  activeTab === category
                    ? "bg-linear-to-r from-primary to-[#0F1E55] text-white shadow-lg shadow-primary/20"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/60"
                }`}
              >
                {category}
                {/* Active indicator with orange dot */}
                {activeTab === category && (
                  <motion.span
                    layoutId="activeTabDot"
                    className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-orange-500 border-2 border-white"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Accordion List */}
          {/* Accordion List with Stagger */}
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.05,
                  },
                },
              }}
              className="space-y-3 max-w-3xl mx-auto"
            >
              {faqData[activeTab].map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1] as const,
                        },
                      },
                    }}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "border-primary/20 bg-white shadow-lg shadow-primary/5"
                        : "border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-md"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-primary text-sm md:text-base transition-colors group/btn"
                    >
                      <span className="flex items-start gap-3 flex-1">
                        <span
                          className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${
                            isOpen
                              ? "bg-primary text-white"
                              : "bg-slate-200 text-slate-600 group-hover/btn:bg-primary group-hover/btn:text-white"
                          }`}
                        >
                          Q
                        </span>
                        <span className="flex-1">{item.question}</span>
                      </span>

                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-primary text-white"
                            : "bg-slate-100 text-slate-500 group-hover/btn:bg-primary group-hover/btn:text-white"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5" />
                        ) : (
                          <Plus className="w-3.5 h-3.5" />
                        )}
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-3 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100/60 bg-linear-to-br from-slate-50/50 to-white">
                            <span className="text-primary font-extrabold mr-1">
                              A:
                            </span>
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
        </motion.div>
      </section>

      {/* ============ BOTTOM CTA ============ */}
      <section className="relative bg-linear-to-br from-primary via-[#0B1329] to-[#0F1E55] text-white py-24 overflow-hidden">
        {/* Decorative glows */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-125 rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 right-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center"
          >
            {/* Heading */}
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-[1.15]"
            >
              Still Have{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-500">
                Questions?
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-slate-300 text-base max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Our support team is ready to help. Reach out via phone, WhatsApp,
              or email.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full bg-white text-primary hover:bg-slate-100 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg"
                >
                  Contact Support
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="https://wa.me/8801891116631"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full border-2 border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  WhatsApp Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
