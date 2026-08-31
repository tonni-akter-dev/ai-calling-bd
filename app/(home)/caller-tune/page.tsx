/* eslint-disable react/no-unescaped-entities */
import {
  Mic,
  Play,
  MessageSquare,
  FileText,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function CallerTunePage() {
  const sampleRecordings = [
    {
      title: "Corporate Welcome",
      desc: "Professional welcome greeting for businesses",
      duration: "0:30",
    },
    {
      title: "Customer Service IVR",
      desc: "IVR menu with department routing options",
      duration: "0:45",
    },
    {
      title: "Promotional Offer",
      desc: "Special offer and discount announcement",
      duration: "0:20",
    },
    {
      title: "After Hours Message",
      desc: "Office closed / after business hours greeting",
      duration: "0:25",
    },
  ];

  const steps = [
    {
      step: "1",
      icon: MessageSquare,
      title: "Contact Us",
      desc: "Reach out via phone, WhatsApp, or the contact form.",
      bgColor: "bg-blue-50 text-blue-600",
    },
    {
      step: "2",
      icon: FileText,
      title: "Share Script",
      desc: "Tell us what you want the voice greeting to say.",
      bgColor: "bg-amber-50 text-amber-600",
    },
    {
      step: "3",
      icon: Mic,
      title: "Recording",
      desc: "Our voice artist records your custom caller tune.",
      bgColor: "bg-rose-50 text-rose-600",
    },
    {
      step: "4",
      icon: CheckCircle2,
      title: "Delivery",
      desc: "We set up the caller tune on your IP number.",
      bgColor: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-slate-800">
      {/* 1. Hero Banner */}
      <section className="relative bg-[#0b1329] text-white pt-40 pb-30 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            <span className="text-orange-500">Caller</span> Tune
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto font-normal">
            Make a professional impression with custom voice greetings by <br />
            <span className="font-semibold text-white">our expert voice artists.</span>
          </p>
          <div className="mt-4 text-xs text-slate-400 font-medium">
            Home <span className="mx-2">/</span> <span className="text-blue-400">Caller Tune</span>
          </div>
        </div>
      </section>

      {/* 2. Main Content: Info & Sample Audio Side-by-Side */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Block: Description & Price Highlight */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-xs">
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4 tracking-tight">
              Professional Caller Tunes for Your Business
            </h2>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
              Create a professional first impression with custom caller tunes recorded by our expert voice artists. Whether you need a welcome greeting, IVR menu, promotional announcement, or after-hours message, we've got you covered.
            </p>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-8">
              Our voice artists deliver high-quality recordings that represent your brand professionally. Simply tell us what you need, and we'll create the perfect voice greeting for your IP number.
            </p>

            {/* Price Badge Banner */}
            <div className="bg-[#0b1329] text-white rounded-2xl p-6 mb-8 flex items-center space-x-4 border border-slate-800 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-slate-800 text-blue-400 flex items-center justify-center shrink-0">
                <Mic className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  PER VOICE RECORDING
                </span>
                <div className="text-3xl font-extrabold text-white">
                  ৳150
                </div>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  by Professional Voice Artist
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/caller-tune"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-xs font-semibold transition inline-flex items-center justify-center space-x-2"
              >
                <span>Order Caller Tune</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="https://wa.me/8801891116631"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto border border-slate-200 hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-xl text-xs font-semibold transition inline-flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp Us</span>
              </Link>
            </div>
          </div>

          {/* Right Block: Sample Recordings Box */}
          <div className="lg:col-span-5 bg-slate-50/70 rounded-3xl p-6 border border-slate-200/70">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                <Mic className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Sample Recordings</h3>
            </div>

            <div className="space-y-3">
              {sampleRecordings.map((sample, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 border border-slate-100 shadow-2xs hover:border-blue-200 transition flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <button className="w-8 h-8 rounded-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition shrink-0">
                      <Play className="w-3.5 h-3.5 ml-0.5" />
                    </button>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{sample.title}</h4>
                      <p className="text-[11px] text-slate-400">{sample.desc}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
                    {sample.duration}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-slate-400 text-center mt-6 italic">
              * Audio samples coming soon. Contact us to hear live samples.
            </p>
          </div>
        </div>
      </section>

      {/* 3. How to Order Section */}
      <section className="py-16 bg-white border-t border-b border-slate-100" id="order">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-blue-700 tracking-tight">
              How to Order
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-slate-50/60 rounded-3xl p-6 border border-slate-200/60 text-center flex flex-col items-center relative"
                >
                  <div className={`w-12 h-12 rounded-2xl ${item.bgColor} flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center mb-2">
                    {item.step}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="relative bg-[#0b1329] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-3 tracking-tight">
            Ready for a Professional Caller Tune?
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto mb-8">
            Contact our customer care team to place your order today.
          </p>

          <Link
            href="/contact"
            className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-3.5 rounded-xl text-xs font-semibold transition inline-flex items-center space-x-2 shadow-lg"
          >
            <span>Contact Customer Care</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}