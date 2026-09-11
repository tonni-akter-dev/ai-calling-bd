/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  Server,
  Zap,
  Headphones,
  PhoneCall,
  Settings,
  BarChart3,
  Users,
  Sliders,
  Radio,
  Music,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CtaSection } from "../CtaSection";
import WhoWeAre from "./WhoWeAre";
import WhatyouGet from "./WhatyouGet";

// Animation variants
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
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export default function AboutPage() {
  const panelFeatures = [
    { icon: Users, title: "Self Re-charge", sub: "Via Bkash/Nagad/Cards" },
    { icon: BarChart3, title: "Balance Check", sub: "Real-time accounting" },
    { icon: Sliders, title: "Call History", sub: "Detailed logs & reports" },
    {
      icon: PhoneCall,
      title: "Voice Forwarding",
      sub: "Instant routing setup",
    },
    { icon: Radio, title: "Signal Monitoring", sub: "Live trunk performance" },
    { icon: Music, title: "Welcome Tune", sub: "Custom audio setup" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-slate-50 to-white font-sans antialiased text-slate-800">
      {/* ============ HERO SECTION ============ */}
      <section className="relative bg-linear-to-br from-primary via-[#0B1329] to-[#0F1E55] pt-40 pb-24 text-white text-center overflow-hidden">
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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-500">
              About IPCallBD
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            5+ years of simplifying business communication for <br /> enterprise
            companies across Bangladesh.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-orange-400 font-medium">About Us</span>
          </motion.div>
        </div>
      </section>

      <WhoWeAre />
      <WhatyouGet />

      {/* ============ WHY CHOOSE US ============ */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-primary bg-primary/5 px-4 py-2 rounded-full border border-primary/10"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Why Us
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold text-slate-900 mt-5 tracking-tight leading-[1.15]"
            >
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-800">
                AI CALL BD?
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-slate-500 mt-4 text-base leading-relaxed"
            >
              Here's why hundreds of companies trust us for their daily
              communications.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Dark Highlight Card - 14 Years */}
            <motion.div
              variants={fadeInUp}
              className="group relative cursor-pointer p-8 bg-linear-to-br from-primary to-[#0F1E55] text-white rounded-3xl shadow-xl shadow-primary/10 overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl group-hover:bg-orange-500/30 transition-all duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center mb-6 font-bold text-lg group-hover:scale-110 transition-transform duration-500">
                  5+
                </div>
                <h3 className="text-xl font-bold mb-3">
                  5 Years of Experience
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  AI CALL BD has been in the industry for over 14 years. We
                  understand how enterprise voice systems work best.
                </p>
              </div>
            </motion.div>

            {/* Server Card */}
            <motion.div
              variants={fadeInUp}
              className="group p-8 cursor-pointer bg-white rounded-3xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-500">
                  <Server className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Own Server & Data Center
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We run our own data centers and infrastructure for maximum
                  reliability, speed, and data security.
                </p>
              </div>
            </motion.div>

            {/* No Tech Knowledge Card */}
            <motion.div
              variants={fadeInUp}
              className="group p-8 cursor-pointer bg-white rounded-3xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                No Technical Knowledge Required
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                No need to be a tech genius. We handle the heavy setup and
                maintenance for you.
              </p>
            </motion.div>

            {/* Fully Managed Card */}
            <motion.div
              variants={fadeInUp}
              className="group p-8 cursor-pointer bg-white rounded-3xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Fully Managed Service
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Configuration and maintenance is our responsibility. Your focus
                stays on your business.
              </p>
            </motion.div>
          </motion.div>

          {/* ============ MANAGEMENT PANEL ============ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mt-16 relative bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm overflow-hidden"
          >
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-50 w-125 rounded-full bg-blue-100/40 blur-3xl" />

            <motion.div
              variants={fadeInUp}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary font-bold text-[11px] uppercase tracking-[0.15em] mb-3"
            >
              <Settings className="w-3.5 h-3.5" />
              All-in-One Management Panel
            </motion.div>

            <motion.h3
              variants={fadeInUp}
              className="relative text-2xl md:text-3xl font-bold text-slate-900 mb-8 tracking-tight"
            >
              Everything You Need in One Dashboard
            </motion.h3>

            <motion.div
              variants={staggerContainer}
              className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {panelFeatures.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="group cursor-pointer bg-white p-3 lg:p-5 rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-slate-900 block mb-1">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-slate-400 leading-tight block">
                    {item.sub}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
