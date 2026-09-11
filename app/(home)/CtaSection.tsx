import React from "react";
import { ArrowRight, PhoneCall, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const CtaSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-br from-primary via-[#0B1329] to-[#0F1E55] py-16 sm:py-20">
      {/* Decorative Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-orange-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-[1.15]">
          Make Your Business <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-500">
            Communication Smarter
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Bring your calls, numbers, campaigns, contacts, recordings, and
          communication management together in one platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Primary Button */}
          <Link
            href="/register"
            className="group w-full sm:w-auto bg-white text-primary hover:bg-slate-100 px-7 py-3.5 rounded-xl font-bold transition-all duration-300 text-sm inline-flex items-center justify-center shadow-xl shadow-white/5"
          >
            Start Free Demo
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Secondary Button */}
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-300 text-sm inline-flex items-center justify-center"
>
            <PhoneCall className="w-4 h-4 mr-2 text-orange-400" />
            Talk to Sales
          </Link>
        </div>
      </div>
    </section>
  );
};
