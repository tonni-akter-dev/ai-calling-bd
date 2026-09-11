/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  Rocket,
  Eye,
} from "lucide-react";
import { motion } from "framer-motion";
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

const WhoWeAre = () => {
  return (
    <div>
           {/* ============ WHO WE ARE ============ */}
            <section className="py-32 bg-white relative overflow-hidden">
              <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-100 w-175 rounded-full bg-blue-100/30 blur-3xl" />
      
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Left Text */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                  className="md:col-span-6 space-y-6"
                >
                  <motion.span
                    variants={fadeInUp}
                    className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-primary bg-primary/5 px-4 py-2 rounded-full border border-primary/10"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Who We Are
                  </motion.span>
      
                  <motion.h2
                    variants={fadeInUp}
                    className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]"
                  >
                    Redefining Business{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-800">
                      Communication.
                    </span>
                  </motion.h2>
      
                  <motion.p
                    variants={fadeInUp}
                    className="text-slate-500 text-base leading-relaxed"
                  >
                    For over a decade, AI CALL BD has been at the forefront of digital
                    voice innovation. We empower modern businesses with reliable,
                    scalable, and cost-effective IP TSP telephony solutions. Built on
                    a low-latency infrastructure with unmatched customer support, we
                    turn everyday call transactions into powerful growth opportunities.
                  </motion.p>
      
                  <motion.div variants={fadeInUp} className="pt-4 grid grid-cols-2 gap-6">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <span className="text-4xl font-extrabold text-slate-900 block">
                        14+
                      </span>
                      <span className="text-sm text-slate-500 font-medium mt-1 block">
                        Years of Experience
                      </span>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <span className="text-4xl font-extrabold text-slate-900 block">
                        24/7
                      </span>
                      <span className="text-sm text-slate-500 font-medium mt-1 block">
                        Dedicated Support
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
      
                {/* Right Cards */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                  className="md:col-span-6 space-y-6"
                >
                  {/* Mission Card */}
                  <motion.div
                    variants={fadeInUp}
                    className="group relative bg-linear-to-br from-primary to-[#0F1E55] rounded-3xl p-8 overflow-hidden shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
                  >
                    <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl group-hover:bg-orange-500/30 transition-all duration-500" />
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                        <Rocket className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Our Mission
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        To provide high-quality, high-uptime voice communication tools
                        that help companies of all sizes increase profitability and
                        streamline daily workflow.
                      </p>
                    </div>
                  </motion.div>
      
                  {/* Vision Card */}
                  <motion.div
                    variants={fadeInUp}
                    className="group bg-white rounded-3xl p-8 border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                      <Eye className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Our Vision
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      To become Bangladesh's most visionary and trusted provider of
                      enterprise-grade cloud telecommunication technologies.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </section>
    </div>
  )
}

export default WhoWeAre
