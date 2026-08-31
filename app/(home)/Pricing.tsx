import React from "react";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  subtitle: string;
  popular?: boolean;
  features: string[];
}

const plans: Plan[] = [
  {
    name: "Basic",
    price: "৳500",
    subtitle: "Essential features for small teams.",
    features: [
      "Free Corporate IP Number",
      "05 Extensions",
      "02 Call Channels",
      "IVR / PBX System",
    ],
  },
  {
    name: "Pro",
    price: "৳750",
    subtitle: "Perfect for growing businesses.",
    popular: true,
    features: [
      "Free Corporate IP Number",
      "10 Extensions",
      "05 Call Channels",
      "IVR / PBX System",
      "Call Transfer & Forwarding",
    ],
  },
  {
    name: "Enterprise",
    price: "৳1,000",
    subtitle: "Advanced setup for large teams.",
    features: [
      "Free Corporate IP Number",
      "20 Extensions",
      "10 Call Channels",
      "IVR / PBX System",
    ],
  },
];

export const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
            Affordable Enterprise Plans
          </h2>
          <p className="text-slate-500 text-sm md:text-base mt-3">
            Choose the perfect Cloud PBX package for your team. All plans include a free corporate IP number.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 items-center max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? "bg-[#0b1329] text-white shadow-[0_0_40px_rgba(59,130,246,0.3)] border border-blue-500/40 md:-translate-y-2 py-10 z-10"
                  : "bg-white text-slate-900 border border-slate-100 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#3b82f6] text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                {/* Plan Header */}
                <h3
                  className={`text-base font-semibold ${
                    plan.popular ? "text-slate-200" : "text-slate-600"
                  }`}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mt-4 mb-2 flex items-baseline">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span
                    className={`text-xs ml-1 font-medium ${
                      plan.popular ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    /mo
                  </span>
                </div>

                {/* Subtitle */}
                <p
                  className={`text-xs pb-6 mb-6 border-b ${
                    plan.popular
                      ? "text-slate-400 border-slate-800"
                      : "text-slate-400 border-slate-100"
                  }`}
                >
                  {plan.subtitle}
                </p>

                {/* Feature List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-xs md:text-sm font-medium">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center mr-3 shrink-0 ${
                          plan.popular
                            ? "bg-blue-500 text-slate-950"
                            : "bg-blue-600 text-white"
                        }`}
                      >
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className={plan.popular ? "text-slate-200" : "text-slate-700"}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action Button */}
              <button
                className={`w-full py-3 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "bg-[#3b82f6] hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};