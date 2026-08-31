/* eslint-disable react/no-unescaped-entities */
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function IPNumberPage() {
  const operators = [
    {
      name: "Ranks ITT",
      tag: "BTRC LICENSED IPTSP OPERATOR",
      logoColor: "from-blue-500 to-emerald-400",
    },
    {
      name: "Icon Infotech",
      tag: "BTRC LICENSED IPTSP OPERATOR",
      logoColor: "from-emerald-500 to-green-600",
    },
    {
      name: "Royal Green Online",
      tag: "BTRC LICENSED IPTSP OPERATOR",
      logoColor: "from-amber-400 to-green-500",
    },
    {
      name: "Sarkar Communication",
      tag: "BTRC LICENSED IPTSP OPERATOR",
      logoColor: "from-blue-600 to-indigo-700",
    },
  ];

  const steps = [
    {
      step: "1",
      title: "Choose Your Operator",
      desc: "Select from our partner IPTSP operators based on your preference and number availability.",
      badgeColor: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      step: "2",
      title: "We Set Everything Up",
      desc: "IPCallBD handles all PBX setup, SIP configuration, and technical setup for you.",
      badgeColor: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      step: "3",
      title: "Start Making Calls",
      desc: "Your IP number is ready! Start making and receiving calls from anywhere in Bangladesh.",
      badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-slate-800">
      {/* 1. Header Hero Banner */}
      <section className="relative bg-[#0b1329] text-white pt-40 pb-32 text-center overflow-hidden">
        {/* Soft Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className="text-orange-500">IP</span> Number
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Get your corporate IP phone number through BTRC-licensed <br />
            operators with full PBX support.
          </p>
          <div className="mt-5 text-sm text-slate-400 font-medium">
            Home <span className="mx-2">/</span> <span className="text-blue-400">IP Number</span>
          </div>
        </div>
      </section>

      {/* 2. Floating "What is an IP Number?" Card */}
      <section className="relative -mt-16 z-20 max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 tracking-tight mb-5">
            What is an IP Number?
          </h2>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto mb-4">
            IP Phone services are provided via BTRC-licensed IPTSP operators. Customers may choose their preferred operator and number availability.
          </p>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
            <span className="text-blue-600 font-bold">IPCallBD acts as a service facilitator</span>, providing PBX setup, SIP configuration, and technical support to ensure seamless use of the IP Phone service.
          </p>

          {/* Bullet Grid */}
          <div className="bg-slate-50/70 border border-slate-100 rounded-2xl p-6 md:p-8 mb-8 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-center space-x-2.5 text-sm text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Choose your preferred IPTSP operator</span>
            </div>
            <div className="flex items-center space-x-2.5 text-sm text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Select from available numbers</span>
            </div>
            <div className="flex items-center space-x-2.5 text-sm text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Full PBX setup included</span>
            </div>
            <div className="flex items-center space-x-2.5 text-sm text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>SIP configuration & support</span>
            </div>
            <div className="flex items-center space-x-2.5 text-sm text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Dedicated technical assistance</span>
            </div>
            <div className="flex items-center space-x-2.5 text-sm text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Use from anywhere in Bangladesh</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#order-step"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition inline-flex items-center justify-center space-x-2 shadow-md shadow-blue-500/20"
            >
              <span>Get an IP Number</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto border border-slate-300 hover:bg-slate-50 text-slate-700 px-7 py-3.5 rounded-xl text-sm font-semibold transition inline-flex items-center justify-center"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* 3. BTRC Licensed Operators Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 tracking-tight">
              BTRC Licensed Operators
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-3">
              We work with Bangladesh's top licensed IPTSP operators to provide you with reliable IP phone services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {operators.map((op, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition text-center flex flex-col items-center justify-center space-y-4"
              >
                {/* Visual Icon Badge */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${op.logoColor} p-0.5 shadow-xs flex items-center justify-center`}>
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-slate-700" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">{op.name}</h3>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                    {op.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How to Get Your IP Number */}
      <section className="py-20 bg-white border-t border-b border-slate-100" id="order-step">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 tracking-tight">
              How to Get Your IP Number
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((item) => (
              <div
                key={item.step}
                className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/60 text-center flex flex-col items-center relative"
              >
                <div className={`w-14 h-14 rounded-full border ${item.badgeColor} text-lg font-extrabold flex items-center justify-center mb-6`}>
                  {item.step}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Section */}
      <section className="relative bg-[#0b1329] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Get Your Corporate IP Number Today
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-10">
            Contact us to choose your preferred operator and number.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 px-8 py-3.5 rounded-xl text-sm font-semibold transition inline-flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Get IP Number</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="tel:09649111303"
              className="w-full sm:w-auto border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl text-sm font-semibold transition inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-4.5 h-4.5 text-blue-400" />
              <span>09649111303</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}