/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PhoneCall,
  History,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function CreditPage() {
  const [activeTab, setActiveTab] = useState<"account" | "ip">("account");
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>("50");
  const [historyFilter, setHistoryFilter] = useState<string>("All");

  const quickAmounts = [50, 100, 200, 500, 1000, 5000, 10000];

  const handleQuickSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
  };

  const handleCustomInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    setSelectedAmount(Number(val) || 0);
  };

  const filterTags = [
    "All",
    "IP Recharge",
    "Credit Top-up",
    "Subscription Payment",
    "SIP Extension Creation",
    "SMS Usage",
  ];

  const topupHistory = [
    {
      id: 1,
      type: "Credit Top-up",
      details: "bKash Online Payment",
      activity: "Account Credit Added",
      amount: "+ ৳ 500.00",
      date: "2026-03-28 14:32",
      status: "Success",
      positive: true,
    },
    {
      id: 2,
      type: "SMS Usage",
      details: "Bulk Broadcast - 1,200 SMS",
      activity: "Usage Deduction",
      amount: "- ৳ 120.00",
      date: "2026-03-27 11:15",
      status: "Completed",
      positive: false,
    },
  ];

  const filteredHistory =
    historyFilter === "All"
      ? topupHistory
      : topupHistory.filter((item) => item.type === historyFilter);

  return (
    <div className="space-y-6 max-w-7xl mx-auto bg-slate-50 min-h-screen p-4 md:p-6 text-slate-800">
      {/* Top Banner Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 p-6 md:p-8 shadow-md border border-blue-500/20 text-white">
        <div className="absolute right-0 top-0 -mt-8 -mr-8 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Main Balance Display */}
          <div>
            <div className="flex items-center space-x-2 text-blue-100 text-xs md:text-sm font-semibold uppercase tracking-wider">
              <Wallet className="w-4 h-4" />
              <span>Current Credit</span>
            </div>
            <div className="mt-2 flex items-baseline space-x-2">
              <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                0.00
              </span>
              <span className="text-lg font-bold text-blue-100">TK</span>
            </div>
          </div>

          {/* Monthly Stats */}
          <div className="flex flex-wrap sm:flex-nowrap gap-3">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 min-w-[140px]">
              <div className="flex items-center space-x-1.5 text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Added • This Month</span>
              </div>
              <p className="text-lg font-bold text-white mt-1">+ 0.00 TK</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 min-w-[140px]">
              <div className="flex items-center space-x-1.5 text-[11px] font-semibold text-rose-300 uppercase tracking-wider">
                <TrendingDown className="w-3.5 h-3.5" />
                <span>Used • This Month</span>
              </div>
              <p className="text-lg font-bold text-white mt-1">- 0.00 TK</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Form & History */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Top Up Options */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-5 md:p-6 shadow-sm flex flex-col">
          {/* Section Title */}
          <div className="flex items-center space-x-2.5 mb-5 pb-4 border-b border-slate-200">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
              <Wallet className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 tracking-wide">
              Top Up Credit
            </h3>
          </div>

          {/* Toggle Tabs */}
          <div className="grid grid-cols-2 gap-1.5 p-1.5 bg-slate-100 border border-slate-200 rounded-xl mb-6">
            <button
              onClick={() => setActiveTab("account")}
              className={`flex items-center justify-center space-x-2 py-2 px-3 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                activeTab === "account"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <CheckCircle2
                className={`w-4 h-4 ${
                  activeTab === "account" ? "opacity-100" : "opacity-0"
                }`}
              />
              <span>Credit to Account</span>
            </button>
            <button
              onClick={() => setActiveTab("ip")}
              className={`flex items-center justify-center space-x-2 py-2 px-3 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                activeTab === "ip"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              <span>Balance to IP Number</span>
            </button>
          </div>

          {/* Amount Quick Select Buttons */}
          <div className="space-y-4 flex-1">
            <label className="text-xs font-semibold text-slate-700">
              Choose an amount
            </label>
            <div className="grid grid-cols-4 gap-2.5">
              {quickAmounts.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => handleQuickSelect(amt)}
                  className={`py-2 px-3 rounded-xl text-xs md:text-sm font-bold border transition-all ${
                    selectedAmount === amt
                      ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                      : "bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-slate-50 hover:text-blue-600"
                  }`}
                >
                  {amt}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="space-y-1.5 pt-2">
              <label className="text-xs font-semibold text-slate-700">
                Custom amount (20 - 1,000,000 TK)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="20"
                  max="1000000"
                  value={customAmount}
                  onChange={handleCustomInputChange}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                  placeholder="Enter amount"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                  TK
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Minimum 20 TK • Maximum 1,000,000 TK
              </p>
            </div>
          </div>

          {/* Pay Button */}
          <div className="mt-6 pt-4 border-t border-slate-200 space-y-3">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl shadow-md shadow-blue-600/10 transition active:scale-[0.99] flex items-center justify-center space-x-2 text-sm">
              <Wallet className="w-4 h-4" />
              <span>Pay with bKash</span>
            </button>
            <div className="flex items-center justify-center space-x-1.5 text-[11px] text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Secured by bKash payment gateway</span>
            </div>
          </div>
        </div>

        {/* Right Column: Top-up History */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-5 md:p-6 shadow-sm flex flex-col">
          {/* Header */}
          <div className="flex items-center space-x-2.5 mb-5 pb-4 border-b border-slate-200">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
              <History className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 tracking-wide">
              Credit Top-up History
            </h3>
          </div>

          {/* Category Filter Badges */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-thin">
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setHistoryFilter(tag)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-semibold border transition ${
                  historyFilter === tag
                    ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* History Data Table Container */}
          <div className="flex-1 rounded-xl border border-slate-200 overflow-hidden bg-white flex flex-col">
            {/* Table Header */}
            <div className="bg-blue-600 px-4 py-3 grid grid-cols-12 text-xs font-bold text-white tracking-wide uppercase">
              <div className="col-span-5">Details</div>
              <div className="col-span-4">Activity</div>
              <div className="col-span-3 text-right">Amount</div>
            </div>

            {/* History Items or Empty State */}
            {filteredHistory.length > 0 ? (
              <div className="divide-y divide-slate-100 overflow-y-auto">
                {filteredHistory.map((item) => (
                  <div
                    key={item.id}
                    className="px-4 py-3 grid grid-cols-12 text-xs items-center hover:bg-slate-50 transition"
                  >
                    <div className="col-span-5">
                      <p className="font-bold text-slate-900 truncate">
                        {item.type}
                      </p>
                      <p className="text-[10px] text-slate-500 truncate">
                        {item.details}
                      </p>
                    </div>
                    <div className="col-span-4 text-slate-600">
                      <p className="truncate">{item.activity}</p>
                      <p className="text-[10px] text-slate-400">{item.date}</p>
                    </div>
                    <div
                      className={`col-span-3 text-right font-mono font-bold ${
                        item.positive ? "text-emerald-600" : "text-rose-600"
                      }`}
                    >
                      {item.amount}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex-1 py-16 flex flex-col items-center justify-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 mb-3">
                  <History className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-slate-800">
                  No credit top-ups found.
                </p>
                <p className="text-xs text-slate-500 mt-1 max-w-xs">
                  Your transactions for the selected category will appear here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}