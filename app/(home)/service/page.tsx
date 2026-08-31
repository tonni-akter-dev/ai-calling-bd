import {
  Volume2,
  Server,
  HardDrive,
  CheckCircle2,
  Zap,
  Check,
} from "lucide-react";
import Link from "next/link";
import Compatible from "../components/Compatible";
import { CtaSection } from "../CtaSection";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-slate-800">
      {/* 2. Hero Banner */}
      <section className="relative bg-[#0b1329] text-white pt-40  pb-30 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Our Services
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-normal">
            Complete business communication solutions designed for efficiency
            and exponential growth.
          </p>
          <div className="mt-4 text-xs text-slate-500 font-medium">
            Home <span className="mx-2">/</span>{" "}
            <span className="text-blue-400">Services</span>
          </div>
        </div>
      </section>
      <Compatible />
      {/* 3. Service 1: Bulk Voice Call with API */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-12 gap-12 items-center">
          {/* Price Tag Graphic Container */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-3xl bg-slate-50 border border-slate-200/80 p-6 shadow-sm">
              <div className="bg-linear-to-br from-orange-500 to-amber-600 rounded-2xl p-6 text-white text-center shadow-lg shadow-orange-500/20 mb-6">
                <Volume2 className="w-10 h-10 mx-auto mb-2 opacity-90" />
                <span className="text-xs font-semibold uppercase tracking-wider opacity-80 block">
                  Bulk Voice Pricing
                </span>
                <div className="text-4xl font-extrabold my-1">৳ 250</div>
                <span className="text-xs opacity-90">1000 Voice SMS</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />{" "}
                  Web-based Campaign Builder
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />{" "}
                  High-speed Delivery Engine
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />{" "}
                  Detailed DTMF Keypress Logs
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />{" "}
                  RESTful HTTP API Access
                </li>
              </ul>
            </div>
          </div>

          {/* Service Details */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-orange-600 font-bold text-xs uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
              <Volume2 className="w-3.5 h-3.5" />
              <span>Bulk Voice Call with API</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Reach Thousands Simultaneously with Voice Broadcasts
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Automate customer notifications, promotional campaigns, reminders,
              and broadcast announcements. Integrate directly into your CRM or
              CRM workflow via our fast HTTP API for event-triggered automated
              calling.
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs font-medium text-slate-700">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>API integration for automated calls</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Instant broadcast to custom lists</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Real-time delivery status reports</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Custom audio clip upload (MP3/WAV)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Interactive DTMF input response</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Pay only for answered call minutes</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-2">
              <Link
                href="/pricing"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-xs font-semibold transition"
              >
                View Pricing
              </Link>
              <Link
                href="/contact"
                className="border border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-2.5 rounded-xl text-xs font-semibold transition"
              >
                Get API Docs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Service 2: Cloud PBX System */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-12 gap-12 items-center">
          {/* Service Details */}
          <div className="md:col-span-7 space-y-6 order-2 md:order-1">
            <div className="inline-flex items-center space-x-2 text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              <Server className="w-3.5 h-3.5" />
              <span>Cloud PBX System</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Enterprise Voice Network for Your Business
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our Cloud PBX eliminates complex hardware maintenance while giving
              you full control over incoming caller routing, extension
              management, multi-level IVR menus, and call queue configurations.
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs font-medium text-slate-700">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Smart Multi-Level IVR Menu</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Call Routing & Forwarding</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Unlimited Internal Extension Calls</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Call Queuing & ACD Engine</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Detailed Analytics & Reports</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Operational Hours Routing</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-2">
              <Link
                href="#pricing"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-xs font-semibold transition"
              >
                View PBX Pricing
              </Link>
              <Link
                href="#demo"
                className="border border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-2.5 rounded-xl text-xs font-semibold transition"
              >
                Request Demo
              </Link>
            </div>
          </div>

          {/* Pricing Card Graphic */}
          <div className="md:col-span-5 flex justify-center order-1 md:order-2">
            <div className="w-full max-w-sm rounded-3xl bg-blue-600 text-white p-8 shadow-xl shadow-blue-500/10 text-center relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs uppercase font-semibold text-blue-200">
                Starting at
              </span>
              <div className="text-4xl font-extrabold my-2">
                ৳ 500{" "}
                <span className="text-sm font-normal text-blue-200">/mo</span>
              </div>
              <p className="text-xs text-blue-100 mb-6">
                Complete virtual office setup with dedicated IP PBX extensions.
              </p>
              <Link
                href="#pricing"
                className="w-full bg-white text-blue-600 hover:bg-blue-50 py-3 rounded-xl font-semibold text-xs transition inline-block"
              >
                View All PBX Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Service 3: Cloud Recording Workflow */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-3">
              <HardDrive className="w-3.5 h-3.5" />
              <span>Cloud Recording</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              How Cloud Recording Works
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Securely record all incoming and outgoing business calls with
              automated archiving for up to 90 days.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Steps Column */}
            <div className="md:col-span-7 space-y-4">
              {/* Step 1 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Automatic Recording
                  </h4>
                  <p className="text-slate-500 text-xs mt-1">
                    Every inbound and outbound call is automatically recorded in
                    crystal-clear audio quality.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Secure Cloud Storage
                  </h4>
                  <p className="text-slate-500 text-xs mt-1">
                    Audio files are immediately encrypted and backed up to
                    secure high-availability cloud storage.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Easy Playback & Download
                  </h4>
                  <p className="text-slate-500 text-xs mt-1">
                    Access recordings directly from your management dashboard.
                    Stream audio or download MP3 logs anytime.
                  </p>
                </div>
              </div>
            </div>

            {/* Perfect For Box */}
            <div className="md:col-span-5 bg-slate-50 border border-slate-200/80 rounded-3xl p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-4">
                Perfect For:
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex  text-base items-center">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0" />{" "}
                  Quality Assurance Review
                </li>
                <li className="flex  text-base items-center">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0" />{" "}
                  Customer Support Monitoring
                </li>
                <li className="flex  text-base items-center">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0" />{" "}
                  Staff Training & Onboarding
                </li>
                <li className="flex  text-base items-center">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0" />{" "}
                  Dispute Resolution Records
                </li>
                <li className="flex  text-base items-center">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0" />{" "}
                  Legal & Regulatory Compliance
                </li>
                <li className="flex  text-base items-center">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0" />{" "}
                  Legal & Regulatory Compliance
                </li>
                <li className="flex  text-base items-center">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0" />{" "}
                  Legal & Regulatory Compliance
                </li>
              </ul>
            </div>
          </div>

          {/* Pricing Banner Box */}
          <div className="mt-12 rounded-2xl bg-[#0b1329] text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0">
                <HardDrive className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-extrabold">৳ 99</span>
                  <span className="text-xs text-slate-400">/ mo</span>
                  <span className="bg-blue-900/80 text-blue-300 text-[10px] px-2 py-0.5 rounded-full border border-blue-700">
                    Includes 90-Day Storage
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Scalable storage extensions available for large enterprise
                  teams.
                </p>
              </div>
            </div>
            <Link
              href="/pricing"
              className="w-full md:w-auto bg-white hover:bg-slate-100 text-slate-900 px-6 py-3 rounded-xl font-semibold text-xs transition text-center whitespace-nowrap"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Contact Banner CTA */}
      <CtaSection />
    </div>
  );
}
