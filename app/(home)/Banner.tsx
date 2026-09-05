"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  PhoneCall,
  Users,
  Wallet,
} from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-white pt-19.5">
      {/* Very subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-125 w-175 -translate-x-1/2 rounded-full bg-blue-50/40 blur-3xl" />
      </div>

      <div className="relative mx-auto container   pt-20  lg:pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          
          {/* ================= LEFT ================= */}
          <div className="max-w-xl">
            {/* Small badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-3.5 py-2 text-xs font-semibold text-blue-600">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                <PhoneCall className="h-3 w-3" />
              </span>

              Business Communication Platform
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-[62px]">
              Connect with your
              <span className="block text-blue-600">
                customers smarter.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-500 sm:text-lg">
              Manage voice campaigns, Voice SMS, contacts and customer
              communication from one simple and powerful platform.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/register"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(37,99,235,0.18)] transition hover:bg-blue-700"
              >
                Get Started

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Explore Platform
              </Link>
            </div>

            {/* Small features */}
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-100 pt-6">
              <Feature text="Bulk Voice Campaigns" />
              <Feature text="Real-time Reports" />
              <Feature text="Secure Wallet" />
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative">
            {/* Main product preview */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              
              {/* Browser / Dashboard header */}
              <div className="flex h-14 items-center justify-between border-b border-slate-100 px-5">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                </div>

                <div className="hidden text-xs font-medium text-slate-400 sm:block">
                  Dashboard
                </div>

                <div className="h-7 w-7 rounded-lg bg-blue-50" />
              </div>

              <div className="p-5 sm:p-7">
                {/* Dashboard title */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      Overview
                    </p>

                    <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-900">
                      Campaign Dashboard
                    </h2>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                  </div>
                </div>

                {/* Main balance */}
                <div className="mt-6 rounded-xl bg-blue-600 p-5 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium text-blue-100">
                        Available Balance
                      </p>

                      <p className="mt-2 text-3xl font-bold tracking-tight">
                        ৳24,850
                      </p>

                      <p className="mt-1 text-xs text-blue-100">
                        Available for campaigns
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Wallet className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <DashboardStat
                    icon={<PhoneCall className="h-4 w-4" />}
                    title="Calls Today"
                    value="2,480"
                    change="+12.5%"
                  />

                  <DashboardStat
                    icon={<Users className="h-4 w-4" />}
                    title="Total Contacts"
                    value="18.5K"
                    change="+840"
                  />
                </div>

                {/* Campaign */}
                <div className="mt-4 rounded-xl border border-slate-200 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Monthly Campaign
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        8,450 contacts
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600">
                      Running
                    </span>
                  </div>

                  <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[68%] rounded-full bg-blue-600" />
                  </div>

                  <div className="mt-2 flex justify-between text-[11px] text-slate-400">
                    <span>5,746 completed</span>
                    <span>68%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Small floating metric */}
            <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-[0_12px_35px_rgba(15,23,42,0.10)] sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
                <Check className="h-4 w-4 text-emerald-500" />
              </div>

              <div>
                <p className="text-[10px] font-medium text-slate-400">
                  Call Success
                </p>

                <p className="text-lg font-bold text-slate-900">
                  94.8%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= TRUST ROW ================= */}
        <div className="mt-20 border-t border-slate-100 pt-8">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
              Everything you need to communicate better
            </p>

            <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500">
              <span>Voice Campaigns</span>
              <span>Voice SMS</span>
              <span>IP Numbers</span>
              <span>Call Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= FEATURE ================= */

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50">
        <Check className="h-3 w-3 text-emerald-500" />
      </span>

      {text}
    </div>
  );
}

/* ================= DASHBOARD STAT ================= */

function DashboardStat({
  icon,
  title,
  value,
  change,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          {icon}
        </div>

        <span className="text-[11px] font-medium text-slate-400">
          {title}
        </span>
      </div>

      <p className="mt-3 text-xl font-bold tracking-tight text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-[10px] font-semibold text-emerald-600">
        {change}
      </p>
    </div>
  );
}