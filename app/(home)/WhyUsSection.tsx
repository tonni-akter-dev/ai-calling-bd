import React from "react";
import { Server, Award, PhoneIncoming, LayoutDashboard, ArrowRight } from "lucide-react";

export const WhyUsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8FAFC] relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            The Premier Choice
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 tracking-tight">
            Why Leaders Switch to AI CALL BD
          </h2>
          <p className="text-slate-500 mt-3 text-base">
            We deliver enterprise-grade reliability, backed by low-latency infrastructure and intuitive management tools.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 - Main Highlight */}
          <div className="group relative bg-white hover:bg-white rounded-3xl p-8 md:p-10 border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
              <Server className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Own Server & Data Center</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Unlike resellers, we operate our own low-latency data centers. This ensures maximum uptime, uncompromised security, and lightning-fast performance for your business calls.
            </p>
            <div className="flex items-center text-xs font-semibold text-blue-600 group-hover:text-blue-700">
              Explore Infrastructure <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white hover:bg-white rounded-3xl p-8 md:p-10 border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">14+ Years Experience</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Trusted by enterprise clients across multiple industries nationwide with proven reliability and deep sector technical expertise.
            </p>
            <div className="flex items-center text-xs font-semibold text-indigo-600 group-hover:text-indigo-700">
              Read Case Studies <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white hover:bg-white rounded-3xl p-8 md:p-10 border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center mb-6 shadow-md shadow-sky-500/20 group-hover:scale-110 transition-transform">
              <PhoneIncoming className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Toll-Free Calls</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Dedicated 1800 numbers designed for effortless inbound customer communication, automatic call routing, and better engagement.
            </p>
            <div className="flex items-center text-xs font-semibold text-sky-600 group-hover:text-sky-700">
              View Toll-Free Plans <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative bg-white hover:bg-white rounded-3xl p-8 md:p-10 border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6 shadow-md shadow-slate-900/20 group-hover:scale-110 transition-transform">
              <LayoutDashboard className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">All-In-One Dashboard</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Manage messaging, real-time analytics, live monitoring, team extensions, and billing right from a single unified control portal.
            </p>
            <div className="flex items-center text-xs font-semibold text-slate-900 group-hover:text-blue-600">
              See Portal Preview <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};