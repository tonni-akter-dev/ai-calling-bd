/* eslint-disable react/no-unescaped-entities */
'use client'
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ArrowRight,
  HelpCircle,
  Tag,
  Wrench,
  Send,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-slate-800">
      {/* 1. Header Hero Banner */}
      <section className="relative bg-[#0b1329] text-white pt-40 pb-28 text-center overflow-hidden">
        {/* Soft Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            <span className="text-orange-500">Contact</span> Us
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto font-normal">
            We're here to help you build a better communication system. <br /> Reach out anytime.
          </p>
        </div>
      </section>

      {/* 2. Floating Quick Contact Info Cards */}
      <section className="relative -mt-16 z-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-200/50 text-center flex flex-col items-center justify-between space-y-4 hover:-translate-y-1 transition duration-200">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Phone</h3>
              <p className="text-xs text-slate-500 font-medium mt-1">09649111303</p>
            </div>
            <Link
              href="tel:09649111303"
              className="w-full py-2.5 rounded-xl border border-blue-200 text-blue-600 text-xs font-semibold hover:bg-blue-50 transition inline-flex items-center justify-center"
            >
              Call Now <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-200/50 text-center flex flex-col items-center justify-between space-y-4 hover:-translate-y-1 transition duration-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">WhatsApp</h3>
              <p className="text-xs text-slate-500 font-medium mt-1">+880 1891 116631</p>
            </div>
            <Link
              href="https://wa.me/8801891116631"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 rounded-xl border border-emerald-200 text-emerald-600 text-xs font-semibold hover:bg-emerald-50 transition inline-flex items-center justify-center"
            >
              Chat Now <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-200/50 text-center flex flex-col items-center justify-between space-y-4 hover:-translate-y-1 transition duration-200">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Email</h3>
              <p className="text-xs text-slate-500 font-medium mt-1">info@ipcall.bd</p>
            </div>
            <Link
              href="mailto:info@ipcall.bd"
              className="w-full py-2.5 rounded-xl border border-orange-200 text-orange-600 text-xs font-semibold hover:bg-orange-50 transition inline-flex items-center justify-center"
            >
              Send Email <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          {/* Office Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-200/50 text-center flex flex-col items-center justify-between space-y-4 hover:-translate-y-1 transition duration-200">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Office</h3>
              <p className="text-xs text-slate-500 font-medium mt-1">Mirpur-12, Dhaka</p>
            </div>
            <Link
              href="#office-address"
              className="w-full py-2.5 rounded-xl border border-teal-200 text-teal-600 text-xs font-semibold hover:bg-teal-50 transition inline-flex items-center justify-center"
            >
              View Address
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Main Form & Side Cards Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-md">
            <h2 className="text-2xl font-extrabold text-blue-700 mb-2 tracking-tight">
              Send Us a Message
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed mb-8">
              Fill out the form below and our team will get back to you within 24 hours. We're happy to help with any questions about our services.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+880 1XXX XXXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Inquiry</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl text-xs transition shadow-lg shadow-blue-500/25 inline-flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Right Column: Address Card & Quick Help */}
          <div className="lg:col-span-5 space-y-6" id="office-address">
            {/* Our Office Dark Card */}
            <div className="bg-[#0b1329] text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Our Office</span>
              </div>
              <h3 className="text-lg font-bold">IPCallBD Head Office</h3>
              <p className="text-slate-400 text-xs leading-relaxed space-y-1">
                <span>House No. 409/1 (1st Floor)</span> <br />
                <span>South Monipur, Kazipara</span> <br />
                <span>Mirpur-12, Dhaka-1216</span> <br />
                <span>Bangladesh</span>
              </p>
              <div className="pt-2">
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-[11px] text-slate-400">
                  <span className="text-blue-400 font-semibold">IPCallBD</span> is a sub-brand of <span className="text-white font-medium">Flemsoft</span>.
                </div>
              </div>
            </div>

            {/* Quick Help Card Container */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-700 px-1">
                <HelpCircle className="w-4 h-4 text-orange-500" />
                <span>Quick Help</span>
              </div>

              {/* FAQ Box */}
              <Link
                href="#faq"
                className="group flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 shadow-xs hover:shadow-md transition"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition">FAQ</h4>
                    <p className="text-[11px] text-slate-400">Find instant answers</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition" />
              </Link>

              {/* Pricing Box */}
              <Link
                href="/pricing"
                className="group flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 shadow-xs hover:shadow-md transition"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Tag className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition">Pricing</h4>
                    <p className="text-[11px] text-slate-400">View our packages</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition" />
              </Link>

              {/* Services Box */}
              <Link
                href="/services"
                className="group flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 shadow-xs hover:shadow-md transition"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition">Services</h4>
                    <p className="text-[11px] text-slate-400">Explore our solutions</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}