/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import {
  Check,
  Zap,
  CreditCard,
  ShieldCheck,
  Building2,
  Clock,
  ArrowUpRight,
  Wallet,
} from "lucide-react";

export default function BillingAndPlansPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [selectedPlan, setSelectedPlan] = useState("Enterprise");
  const [rechargeAmount, setRechargeAmount] = useState("1000");

  const plans = [
    {
      name: "Starter",
      desc: "For small teams starting with basic IP calling.",
      monthlyPrice: 1500,
      yearlyPrice: 15000,
      channels: "5 Concurrent Calls",
      extensions: "Up to 10 Extensions",
      rate: "40 Paisa / min",
      features: [
        "1 Free IPTSP Number",
        "Basic Call Routing & IVR",
        "Free IP-to-IP Calling",
        "Standard Audio Quality",
        "Email Support",
      ],
      popular: false,
    },
    {
      name: "Enterprise",
      desc: "Ideal for growing corporate offices & support teams.",
      monthlyPrice: 3500,
      yearlyPrice: 35000,
      channels: "20 Concurrent Calls",
      extensions: "Up to 30 Extensions",
      rate: "35 Paisa / min",
      features: [
        "2 Free IPTSP Numbers",
        "Advanced Multi-Level IVR",
        "Bulk Voice Campaign Access",
        "Call Recording (90 Days)",
        "Priority 24/7 Support",
        "Web Softphone Integration",
      ],
      popular: true,
    },
    {
      name: "Custom Corporate",
      desc: "For large enterprises requiring high channel capacity.",
      monthlyPrice: 8500,
      yearlyPrice: 85000,
      channels: "Unlimited Calls",
      extensions: "100+ Extensions",
      rate: "30 Paisa / min",
      features: [
        "Dedicated Trunking & API",
        "Custom Voice Greeting Studio",
        "Unlimited Call Recording",
        "SLA & Dedicated Account Mgr",
        "Custom CRM Integration",
      ],
      popular: false,
    },
  ];

  const paymentHistory = [
    { id: "INV-2026-004", date: "Aug 15, 2026", amount: "৳ 3,500", status: "Paid", method: "bKash" },
    { id: "INV-2026-003", date: "Jul 15, 2026", amount: "৳ 3,500", status: "Paid", method: "Nagad" },
    { id: "INV-2026-002", date: "Jun 15, 2026", amount: "৳ 1,000", status: "Recharge", method: "Visa Card" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* 1. Header & Active Subscription Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* Current Plan Overview Card */}
        <div className="lg:col-span-2 bg-[#1e293b] p-6 rounded-2xl border border-slate-700/80 shadow-lg shadow-slate-950/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full">
                Active Subscription
              </span>
              <span className="text-xs text-slate-400 font-mono">Renews Sep 15, 2026</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">Enterprise Bulk Caller Plan</h2>
            <p className="text-xs text-slate-400 mt-1 max-w-lg">
              30 Extensions active, Multi-level IVR, and Bulk Voice Campaign access included.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-6">
              <div>
                <p className="text-[11px] text-slate-400 uppercase font-semibold">Monthly Charge</p>
                <p className="text-lg font-bold text-white mt-0.5">৳ 3,500 / mo</p>
              </div>
              <div className="w-px h-8 bg-slate-700/80" />
              <div>
                <p className="text-[11px] text-slate-400 uppercase font-semibold">Billing Rate</p>
                <p className="text-lg font-bold text-emerald-400 mt-0.5">35 Paisa / min</p>
              </div>
            </div>

            <button className="text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-2.5 rounded-xl transition">
              Manage Subscription
            </button>
          </div>
        </div>

        {/* Quick Recharge Talk-Time Card */}
        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700/80 shadow-lg shadow-slate-950/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Talk-Time Balance</h3>
              <Wallet className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-black text-white">৳ 1,250.00</div>
            <p className="text-[11px] text-slate-400 mt-1">No expiration date on talk-time balance.</p>
          </div>

          {/* Quick Add Balance */}
          <div className="space-y-3 mt-4">
            <div className="flex items-center space-x-2">
              {["500", "1000", "2000"].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setRechargeAmount(amt)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-mono font-bold border transition ${
                    rechargeAmount === amt
                      ? "bg-blue-600 text-white border-blue-500"
                      : "bg-[#0f172a] text-slate-300 border-slate-700 hover:border-slate-600"
                  }`}
                >
                  ৳{amt}
                </button>
              ))}
            </div>

            <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-3 rounded-xl transition flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/20">
              <CreditCard className="w-4 h-4" />
              <span>Instant Recharge (bKash / Card)</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Monthly / Yearly Billing Toggle Section */}
      <div className="text-center space-y-4 pt-4">
        <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
          Choose standard monthly packages
        </h2>
        
        {/* Billing Switcher */}
        <div className="inline-flex items-center bg-[#1e293b] p-1.5 rounded-2xl border border-slate-700/80">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition ${
              billingCycle === "monthly"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
              billingCycle === "yearly"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span>Yearly Billing</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* 3. Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => {
          const price = billingCycle === "monthly" ? plan.monthlyPrice : Math.floor(plan.yearlyPrice / 12);
          const isCurrent = selectedPlan === plan.name;

          return (
            <div
              key={plan.name}
              className={`relative bg-[#1e293b] rounded-2xl p-6 md:p-8 border flex flex-col justify-between transition-all duration-200 ${
                plan.popular
                  ? "border-blue-500/80 shadow-xl shadow-blue-600/10 ring-1 ring-blue-500/50"
                  : "border-slate-700/80 shadow-lg shadow-slate-950/20"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3.5 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                <p className="text-xs text-slate-400 mt-1 min-h-[32px]">{plan.desc}</p>

                {/* Price Display */}
                <div className="my-6">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl md:text-4xl font-black text-white">৳ {price.toLocaleString()}</span>
                    <span className="text-xs text-slate-400 font-semibold">/ month</span>
                  </div>
                  <p className="text-[11px] text-emerald-400 font-mono mt-1">Call Rate: {plan.rate}</p>
                </div>

                {/* Specs List */}
                <div className="space-y-3 pt-4 border-t border-slate-700/80">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-200">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{plan.channels}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-200">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{plan.extensions}</span>
                  </div>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedPlan(plan.name)}
                className={`w-full py-3.5 rounded-xl text-xs font-bold transition mt-8 ${
                  isCurrent
                    ? "bg-slate-800 text-slate-400 border border-slate-700 cursor-default"
                    : plan.popular
                    ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25"
                    : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                }`}
              >
                {isCurrent ? "Current Plan" : "Upgrade Plan"}
              </button>
            </div>
          );
        })}
      </div>

      {/* 4. Billing History Table */}
      <div className="bg-[#1e293b] rounded-2xl border border-slate-700/80 p-6 shadow-lg shadow-slate-950/20">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/80">
          <div>
            <h3 className="text-base font-bold text-white">Billing & Payment History</h3>
            <p className="text-xs text-slate-400">Download invoices and review recent payments</p>
          </div>
          <button className="text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center space-x-1">
            <span>Download All</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-700/80 text-slate-400 font-semibold uppercase tracking-wider">
                <th className="pb-3 px-4">Invoice ID</th>
                <th className="pb-3 px-4">Date</th>
                <th className="pb-3 px-4">Method</th>
                <th className="pb-3 px-4">Amount</th>
                <th className="pb-3 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {paymentHistory.map((item) => (
                <tr key={item.id} className="hover:bg-slate-900/40 transition">
                  <td className="py-4 px-4 font-mono font-bold text-white">{item.id}</td>
                  <td className="py-4 px-4">{item.date}</td>
                  <td className="py-4 px-4">{item.method}</td>
                  <td className="py-4 px-4 font-bold text-white">{item.amount}</td>
                  <td className="py-4 px-4 text-right">
                    <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                      <ShieldCheck className="w-3 h-3" />
                      <span>{item.status}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}