/* eslint-disable react/no-unescaped-entities */
'use client'
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogDetailsPage() {
  const relatedArticles = [
    {
      id: 1,
      title: "What is IP Call? A Complete Guide to Internet Protocol Calling",
      category: "Guide",
      date: "JUN 15, 2025",
      slug: "what-is-ip-call-complete-guide",
    },
    {
      id: 2,
      title:
        "Call Center Solutions in Bangladesh — Everything You Need to Know",
      category: "Industry",
      date: "JUN 5, 2025",
      slug: "call-center-solutions-bangladesh",
    },
    {
      id: 3,
      title: "IP Call BD Contact Number & Support — How to Reach Us",
      category: "Support",
      date: "MAY 30, 2025",
      slug: "ip-call-bd-contact-number-support",
    },
  ];

  const prerequisites = [
    "A reliable internet connection — Minimum 1 Mbps recommended",
    "An IP phone, softphone app, or computer — Your calling device",
    "An IP calling service provider — Like IPCallBD",
    "A corporate IP number — Provided by your service provider",
  ];

  const steps = [
    {
      number: "1",
      title: "Choose Your Package",
      description:
        "IPCallBD offers three Cloud PBX packages: Basic (500/mo), Pro (750/mo), and Enterprise (1,000/mo).",
    },
    {
      number: "2",
      title: "Get Your IP Number",
      description:
        "You'll receive a free corporate IP number from a BTRC-licensed IPTSP operator. You can choose from operators like Ranks ITT, Icon Infotech, Royal Green Online, or Sarkar Communication.",
    },
    {
      number: "3",
      title: "Configure Your Devices",
      description:
        "IPCallBD handles all PBX setup and SIP configuration for you — no technical knowledge required! Your extensions will be set up and ready to use.",
    },
    {
      number: "4",
      title: "Start Calling",
      description:
        "Once configured, you can immediately start making and receiving calls. The call rate is just 40 Paisa + 15% VAT per minute with per-second billing.",
    },
  ];

  const tips = [
    "Use a wired internet connection when possible for stability",
    "Ensure adequate bandwidth — Allocate at least 100 Kbps per concurrent call",
    "Use quality headsets for clear audio",
    "Keep your software updated for the latest improvements",
  ];

  const comparisonData = [
    { feature: "Call Rate", traditional: "Higher", ipcall: "40 Paisa + VAT" },
    { feature: "Billing", traditional: "Per minute", ipcall: "Per second" },
    { feature: "Internal Calls", traditional: "Charged", ipcall: "FREE" },
    { feature: "Setup", traditional: "Hardware needed", ipcall: "Cloud-based" },
    { feature: "Scalability", traditional: "Limited", ipcall: "Unlimited" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* ============ HEADER ============ */}
      {/* <section className="bg-slate-900 text-white pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Tutorial</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            How to Make IP Calls in Bangladesh: Step-by-Step Guide
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              June 10, 2025
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4" />8 min read
            </span>
            <span className="inline-flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Tutorial
            </span>
          </div>
        </div>
      </section> */}
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 ">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight max-w-2xl mx-auto  mb-6 leading-[1.1]"
          >
            <span className="text-transparent bg-clip-text text-center bg-linear-to-r from-orange-400 to-amber-500">
             How to Make IP Calls in Bangladesh: Step-by-Step Guide
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
               <div className="flex items-center gap-2 text-sm text-slate-400 mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-orange-400 font-medium">sdfsdf</span>
          </div>

          </motion.div>
        </div>
      </section>

      {/* ============ ARTICLE ============ */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* Intro */}
        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          Making IP calls in Bangladesh is straightforward with the right
          service provider. This guide walks you through everything you need to
          know.
        </p>

        {/* Prerequisites */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Prerequisites
          </h2>
          <p className="text-slate-600 mb-4">
            Before you start making IP calls, you'll need:
          </p>
          <ul className="space-y-2 list-disc pl-6 text-slate-600">
            {prerequisites.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Step-by-Step Setup with IPCallBD
          </h2>
          <p className="text-slate-600 mb-6">
            Follow these four simple steps to get started:
          </p>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number}>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Step {step.number}: {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Tips for Best Call Quality
          </h2>
          <ul className="space-y-2 list-disc pl-6 text-slate-600">
            {tips.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Cost Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Cost Comparison
          </h2>
          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-slate-900">
                    Feature
                  </th>
                  <th className="text-left p-3 font-semibold text-slate-900">
                    Traditional Phone
                  </th>
                  <th className="text-left p-3 font-semibold text-slate-900">
                    IP Call (IPCallBD)
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="border-t border-slate-200">
                    <td className="p-3 font-medium text-slate-900">
                      {row.feature}
                    </td>
                    <td className="p-3 text-slate-600">{row.traditional}</td>
                    <td className="p-3 text-slate-900 font-medium">
                      {row.ipcall}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-slate-600 mb-4">
            Ready to get started? Visit our
            <Link
              href="/pricing"
              className="text-blue-600 hover:underline font-medium"
            >
              pricing page
            </Link>
            or
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-medium"
            >
              contact us
            </Link>
            for a free consultation.
          </p>
        </div>
      </article>

      {/* ============ RELATED ARTICLES ============ */}
      <section className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Related Articles
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-md transition p-5 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3 text-xs">
                  <span className="font-semibold text-blue-600">
                    {article.category}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">{article.date}</span>
                </div>
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition leading-snug mb-4 line-clamp-2 flex-1">
                  {article.title}
                </h3>
                <span className="inline-flex items-center text-sm font-medium text-blue-600">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
