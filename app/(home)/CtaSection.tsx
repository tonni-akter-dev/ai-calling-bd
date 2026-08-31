import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const CtaSection: React.FC = () => {
  return (
        <section className="relative bg-linear-to-b from-white via-slate-50 to-[#F8FAFC] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative rounded-3xl bg-[#0b1329] border border-slate-800 text-center text-white shadow-2xl overflow-hidden py-16 px-6 md:px-12">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
                Ready to Get Started?
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
                Elevate your cloud phone system with CallFlow. Dedicated setup in less than 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 px-8 py-3.5 rounded-xl font-semibold transition text-sm inline-flex items-center justify-center"
                >
                  Contact Us Today
                </Link>
                <Link
                  href="#pricing"
                  className="w-full sm:w-auto border border-slate-700 bg-slate-900/60 hover:bg-slate-800 px-8 py-3.5 rounded-xl font-semibold transition text-white text-sm inline-flex items-center justify-center"
                >
                  View Pricing <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};