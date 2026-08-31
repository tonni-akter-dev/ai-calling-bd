/* eslint-disable react/no-unescaped-entities */
import {
  Rocket,
  Eye,
  Server,
  Zap,
  Headphones,
  CheckCircle2,
  Clock,
  Infinity,
  PhoneCall,
  Volume2,
  Settings,
  BarChart3,
  Users,
  Sliders,
  Radio,
  Music,
} from "lucide-react";
import { CtaSection } from "../CtaSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-slate-800">
      {/* 1. Page Header (Hero Banner) */}
      <section className="relative bg-[#0b1329] text-white py-24 text-center overflow-hidden">
        {/* Soft Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-4 py-1.5 rounded-full border border-blue-800/60 inline-block mb-4">
            About CallFlow
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            About CallFlow
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-normal">
            14+ years of simplifying business communication for enterprise
            companies across Bangladesh.
          </p>
          <div className="mt-4 text-xs text-slate-500 font-medium">
            Home <span className="mx-2">/</span>{" "}
            <span className="text-blue-400">About Us</span>
          </div>
        </div>
      </section>

      {/* 2. Redefining Business Communication (Mission & Vision) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="md:col-span-6 space-y-6">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-blue-100">
              WHO WE ARE
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Redefining Business <br /> Communication.
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              For over a decade, CallFlow has been at the forefront of digital
              voice innovation. We empower modern businesses with reliable,
              scalable, and cost-effective IP TSP telephony solutions. Built on
              a low-latency infrastructure with unmatched customer support, we
              turn everyday call transactions into powerful growth
              opportunities.
            </p>

            {/* Stats Row */}
            <div className="pt-4 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <span className="text-3xl font-extrabold text-slate-900 block">
                  14+
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Years of Experience
                </span>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <span className="text-3xl font-extrabold text-slate-900 block">
                  24/7
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Dedicated Support
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (Mission & Vision Cards) */}
          <div className="md:col-span-6 space-y-6">
            {/* Our Mission */}
            <div className="p-8 bg-slate-50/80 hover:bg-white rounded-3xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-md shadow-blue-500/20">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Our Mission
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                To provide high-quality, high-uptime voice communication tools
                that help companies of all sizes increase profitability and
                streamline daily workflow.
              </p>
            </div>

            {/* Our Vision */}
            <div className="p-8 bg-slate-50/80 hover:bg-white rounded-3xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-4 shadow-md shadow-indigo-500/20">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Our Vision
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                To become Bangladesh's most visionary and trusted provider of
                enterprise-grade cloud telecommunication technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What You Get With CallFlow */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              What You Get with CallFlow
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-3">
              Affordable rates, powerful features, and zero hassle — everything
              a modern business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 font-bold text-sm">
                ৳
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                Call Rate: 40 Paisa + 15% VAT
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                One of the most competitive call rates in Bangladesh with
                transparent billing.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Infinity className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                No Recharge Expiry
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Your balance never expires. Use your account balance whenever
                you need without stress.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                Per Second Pulse
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Pay only for the exact seconds you talk. 1 second call equals 1
                second billed.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                Free IP-to-IP Calls
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Calls between IP numbers in our network are completely free of
                charge.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                Free Incoming Calls
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Receive unlimited incoming calls without any extra charges.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Volume2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                Promotional IVR & Voice
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Send promotional SMS and voice messages directly to your
                customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose CallFlow */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose CallFlow?
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-3">
              Here's why hundreds of companies trust us for their daily
              communications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Dark Accent Highlight Card */}
            <div className="p-8 bg-[#0b1329] text-white rounded-3xl shadow-xl flex flex-col justify-between border border-slate-800">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center mb-6 font-bold">
                14+
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  14 Years of Experience
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  CallFlow has been in the industry for over 14 years. We
                  understand how enterprise voice systems work best.
                </p>
              </div>
            </div>

            {/* Primary Accent Highlight Card */}
            <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl flex flex-col justify-between shadow-blue-500/20">
              <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 flex items-center justify-center mb-6">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Own Server & Data Center
                </h3>
                <p className="text-blue-100 text-xs md:text-sm leading-relaxed">
                  We run our own data centers and infrastructure for maximum
                  reliability, speed, and data security.
                </p>
              </div>
            </div>

            {/* Light Card 1 */}
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                No Technical Knowledge Required
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                No need to be a tech genius. We handle the heavy setup and
                maintenance for you.
              </p>
            </div>

            {/* Light Card 2 */}
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Fully Managed Service
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Configuration and maintenance is our responsibility. Your focus
                stays on your business.
              </p>
            </div>
          </div>

          {/* 5. All-In-One Management Panel Box */}
          <div className="mt-16 bg-slate-50/80 border border-slate-100 rounded-3xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center space-x-2 text-blue-600 font-bold text-sm mb-4">
              <Settings className="w-4 h-4" />
              <span>All-in-One Management Panel</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-8">
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-2xs">
                <Users className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <span className="text-xs font-semibold text-slate-800 block">
                  Self Re-charge
                </span>
                <span className="text-[10px] text-slate-400">
                  Via Bkash/Nagad/Cards
                </span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-2xs">
                <BarChart3 className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <span className="text-xs font-semibold text-slate-800 block">
                  Balance Check
                </span>
                <span className="text-[10px] text-slate-400">
                  Real-time accounting
                </span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-2xs">
                <Sliders className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <span className="text-xs font-semibold text-slate-800 block">
                  Call History
                </span>
                <span className="text-[10px] text-slate-400">
                  Detailed logs & reports
                </span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-2xs">
                <PhoneCall className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <span className="text-xs font-semibold text-slate-800 block">
                  Voice Forwarding
                </span>
                <span className="text-[10px] text-slate-400">
                  Instant routing setup
                </span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-2xs">
                <Radio className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <span className="text-xs font-semibold text-slate-800 block">
                  Signal Monitoring
                </span>
                <span className="text-[10px] text-slate-400">
                  Live trunk performance
                </span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-2xs">
                <Music className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <span className="text-xs font-semibold text-slate-800 block">
                  Welcome Tune
                </span>
                <span className="text-[10px] text-slate-400">
                  Custom audio setup
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Ready to Get Started CTA Section */}
      <CtaSection />
    </div>
  );
}
