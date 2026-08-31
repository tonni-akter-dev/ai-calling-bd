import {
  Check,
  Volume2,
  Phone,
  HelpCircle,
} from "lucide-react";
import Compatible from "../components/Compatible";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-slate-800">
      {/* 1. Compatible VoIP Softphones Top Banner */}

      {/* 2. Page Header / Hero Banner */}
      <section className="relative bg-[#0b1329] text-white  pt-40  pb-30 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Pricing Plans
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-normal">
            Transparent, affordable pricing tailored for businesses of all
            sizes. No hidden charges.
          </p>
          <div className="mt-4 text-xs text-slate-500 font-medium">
            Home <span className="mx-2">/</span>{" "}
            <span className="text-blue-400">Pricing</span>
          </div>
        </div>
      </section>
      <Compatible />
      {/* 3. Cloud PBX Packages */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="w-full px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Cloud PBX Packages
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Select the best plan for your team size. Upgrade or downgrade
              anytime as your business grows.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Basic
                </span>
                <div className="flex items-baseline space-x-1 mb-6">
                  <span className="text-4xl font-extrabold text-slate-900">
                    ৳ 500
                  </span>
                  <span className="text-xs text-slate-500">/ mo</span>
                </div>
                <ul className="space-y-3.5 text-xs text-slate-600 mb-8">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />{" "}
                    Free Incoming Calls & Voice Mail
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />{" "}
                    Customer Support 24/7/365
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />{" "}
                    Interactive Voice Response (IVR)
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />{" "}
                    1-5 Extensions
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />{" "}
                    10 Call Channels
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />{" "}
                    Full PBX System
                  </li>
                </ul>
              </div>
              <button className="w-full bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-xl font-semibold text-xs transition">
                Get Started
              </button>
            </div>

            {/* Pro Plan (Highlighted Dark Card) */}
            <div className="bg-[#0b1329] text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl relative border border-slate-800 transform lg:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full border border-blue-400 shadow-md">
                MOST POPULAR
              </div>
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-2 mt-2">
                  Pro
                </span>
                <div className="flex items-baseline space-x-1 mb-6">
                  <span className="text-4xl font-extrabold text-white">
                    ৳ 750
                  </span>
                  <span className="text-xs text-slate-400">/ mo</span>
                </div>
                <ul className="space-y-3.5 text-xs text-slate-300 mb-8">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-400 mr-2 shrink-0" />{" "}
                    Free Extension Calls & Voice Mail
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-400 mr-2 shrink-0" />{" "}
                    Customer Support 24/7/365
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-400 mr-2 shrink-0" />{" "}
                    Interactive Voice Response (IVR)
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-400 mr-2 shrink-0" />{" "}
                    5-15 Extensions
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-400 mr-2 shrink-0" />{" "}
                    20 Call Channels
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-400 mr-2 shrink-0" />{" "}
                    Full PBX System
                  </li>
                </ul>
              </div>
              <div>
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 mb-4 text-center">
                  <label className="text-xs text-slate-300 font-medium inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded text-blue-600 focus:ring-blue-500 mr-2"
                      defaultChecked
                    />
                    Add Cloud Recording (+৳99/mo)
                  </label>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-semibold text-xs transition shadow-lg shadow-blue-600/30">
                  Get Started
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Enterprise
                </span>
                <div className="flex items-baseline space-x-1 mb-6">
                  <span className="text-4xl font-extrabold text-slate-900">
                    ৳ 1,000
                  </span>
                  <span className="text-xs text-slate-500">/ mo</span>
                </div>
                <ul className="space-y-3.5 text-xs text-slate-600 mb-8">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />{" "}
                    Free Incoming Calls & Voice Mail
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />{" "}
                    Customer Support 24/7/365
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />{" "}
                    Interactive Voice Response (IVR)
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />{" "}
                    15-50 Extensions
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />{" "}
                    50 Call Channels
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />{" "}
                    Full PBX System
                  </li>
                </ul>
              </div>
              <button className="w-full bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-xl font-semibold text-xs transition">
                Get Started
              </button>
            </div>
          </div>

          {/* Call Rate Notice Box */}
          <div className="mt-12  max-w-5xl mx-auto bg-blue-50/70 border border-blue-100 rounded-2xl p-10 text-center">
            <p className="text-lg font-semibold text-blue-900">
              📞 Common Call Rate:
              <span className="text-blue-600 font-bold">
                40 Paisa + 15% VAT
              </span>
              | Per Second Pulse | No Recharge Expiry
            </p>
            <p className="text-base text-slate-500 mt-1">
              Rates apply to standard outgoing calls to any local landline or
              mobile operator.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Bulk Voice Call with API Section */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Bulk Voice Call with API
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Broadcast pre-recorded audio messages automatically to thousands
              of recipients simultaneously with instant status reporting.
            </p>

            <div className="grid grid-cols-2 gap-3 text-base text-slate-700 pt-2">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-blue-600 mr-2 shrink-0" /> Fast
                Delivery Engine
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-blue-600 mr-2 shrink-0" />{" "}
                Automated Schedule Manager
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-blue-600 mr-2 shrink-0" />{" "}
                Flexible HTTP API Access
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-blue-600 mr-2 shrink-0" />{" "}
                Dynamic Call Scheduling
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-blue-600 mr-2 shrink-0" />{" "}
                Detailed Call Analytics
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-blue-600 mr-2 shrink-0" />{" "}
                Interactive Keypress (DTMF)
              </div>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-linear-to-br from-orange-500 to-amber-600 rounded-3xl p-8 text-white text-center shadow-xl shadow-orange-500/20">
              <Volume2 className="w-10 h-10 mx-auto mb-3 opacity-90" />
              <span className="text-xs font-medium uppercase tracking-wider block opacity-80">
                START YOUR CAMPAIGN
              </span>
              <div className="text-4xl font-extrabold my-2">৳ 250</div>
              <span className="text-xs opacity-90 block mb-6">
                per 1000 calls
              </span>
              <Link
                href="/appcontact"
                className="w-full bg-white text-orange-600 hover:bg-orange-50 py-3 rounded-xl font-semibold text-xs transition inline-block"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Feature Comparison Table */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Feature Comparison
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Compare features side-by-side to choose the best solution for your
              business needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0b1329] text-white text-xs uppercase tracking-wider">
                  <th className="p-4 rounded-tl-2xl">Features</th>
                  <th className="p-4 text-center">Basic</th>
                  <th className="p-4 text-center bg-blue-600">Pro</th>
                  <th className="p-4 text-center rounded-tr-2xl">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 text-xs text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Monthly Rate</td>
                  <td className="p-4 text-center">৳ 500</td>
                  <td className="p-4 text-center font-bold text-blue-600 bg-blue-50/40">
                    ৳ 750
                  </td>
                  <td className="p-4 text-center">৳ 1,000</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Extensions</td>
                  <td className="p-4 text-center">1-5</td>
                  <td className="p-4 text-center bg-blue-50/40">5-15</td>
                  <td className="p-4 text-center">15-50</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Call Channels</td>
                  <td className="p-4 text-center">10</td>
                  <td className="p-4 text-center bg-blue-50/40">20</td>
                  <td className="p-4 text-center">50</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Setup Assistance</td>
                  <td className="p-4 text-center">
                    <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center bg-blue-50/40">
                    <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Call Rate</td>
                  <td className="p-4 text-center">40p/sec</td>
                  <td className="p-4 text-center bg-blue-50/40">40p/sec</td>
                  <td className="p-4 text-center">40p/sec</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">24/7 Support</td>
                  <td className="p-4 text-center">
                    <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center bg-blue-50/40">
                    <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Multi-Level IVR</td>
                  <td className="p-4 text-center">
                    <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center bg-blue-50/40">
                    <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Call Forwarding</td>
                  <td className="p-4 text-center">
                    <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center bg-blue-50/40">
                    <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Recording Storage</td>
                  <td className="p-4 text-center">+৳99/mo</td>
                  <td className="p-4 text-center bg-blue-50/40">+৳99/mo</td>
                  <td className="p-4 text-center">+৳99/mo</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Activation Fee</td>
                  <td className="p-4 text-center font-semibold text-emerald-600">
                    FREE
                  </td>
                  <td className="p-4 text-center font-semibold text-emerald-600 bg-blue-50/40">
                    FREE
                  </td>
                  <td className="p-4 text-center font-semibold text-emerald-600">
                    FREE
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Custom Solution Card */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 md:p-10 text-center shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Need a Custom Solution?
            </h3>
            <p className="text-slate-500 text-xs md:text-sm max-w-xl mx-auto mb-6">
              For high call volumes, specialized SIP trunking, or custom
              software integration, our engineers can tailor a package
              specifically for your company.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#contact"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-xs font-semibold transition"
              >
                Request Custom Pricing
              </Link>
              <Link
                href="tel:09612000000"
                className="w-full sm:w-auto border border-slate-300 hover:bg-slate-100 text-slate-700 px-6 py-3 rounded-xl text-xs font-semibold transition inline-flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2 text-blue-600" /> 09612 000 000
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Accepted Payment Methods */}
      <section className="py-12 bg-slate-50/50 border-t border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
            Accepted Payment Methods
          </h4>
          <p className="text-slate-500 text-xs mb-6">
            Pay seamlessly using mobile financial services, local debit/credit
            cards, or online banking.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-500">
            <span className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-2xs">
              bKash
            </span>
            <span className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-2xs">
              Nagad
            </span>
            <span className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-2xs">
              Rocket
            </span>
            <span className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-2xs">
              Visa / MasterCard
            </span>
            <span className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-2xs">
              Internet Banking
            </span>
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA Banner */}
      <section className="relative bg-[#0b1329] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-3 tracking-tight">
            Ready to Upgrade Your Communication?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8">
            Join hundreds of growing businesses across Bangladesh using AI CALL BD
            for clear and reliable voice connections.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 px-8 py-3.5 rounded-xl text-xs font-semibold transition"
            >
              Get Started Now
            </Link>
            <Link
              href="tel:09612000000"
              className="w-full sm:w-auto border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl text-xs font-semibold transition inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2 text-blue-400" /> 09612 000 000
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
