import React from "react";
import { Phone } from "lucide-react";

export const CtaSection: React.FC = () => {
  return (
    <section className="w-full ">
      <div className="bg-linear-to-r from-blue-900 to-indigo-900  p-30 md:p-16 text-center
       text-white shadow-xl relative overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Upgrade Your Communication?
        </h2>
        <p className="text-blue-200 max-w-xl mx-auto mb-8 text-sm md:text-base">
          Join hundreds of growing businesses across the nation. Get setup in less than 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-semibold transition">
            Get Started Now
          </button>
          <a
            href="tel:09612000000"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-white/20 hover:bg-white/10 px-8 py-3.5 rounded-xl font-semibold transition text-white"
          >
            <Phone className="w-4 h-4 mr-2" />
            09612 000 000
          </a>
        </div>
      </div>
    </section>
  );
};