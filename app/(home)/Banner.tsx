import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  BarChart3,
  Wallet,
  Users,
  Play,
} from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative bg-[#8f9edb] pt-28">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/70 via-white to-slate-50" />

        {/* Decorative Background */}
        <div className="absolute -left-[150px] top-20 h-[400px] w-[400px] rounded-full bg-blue-100/60 blur-3xl" />

        <div className="absolute -right-[120px] top-40 h-[350px] w-[350px] rounded-full bg-cyan-100/50 blur-3xl" />
      </div>

      {/* Hero Content */}
      <div className="container relative mx-auto px-4 pb-36 pt-12 lg:px-8 lg:pb-44 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              <PhoneCall className="h-4 w-4" />
              Smart Business Communication Platform
            </div>

            {/* Heading */}
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Reach Your Customers
              <span className="block text-blue-600">
                Faster & Smarter.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Manage bulk voice campaigns, Voice SMS and customer
              communication from one powerful and easy-to-use platform.
            </p>

            {/* Feature List */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Bulk Voice Campaigns",
                "Real-time Call Reports",
                "Secure Wallet System",
                "Campaign Scheduling",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2.5 text-sm font-medium text-slate-700"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/register"
                className="group flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Start Your Campaign

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#services"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <Play className="h-4 w-4 fill-blue-600 text-blue-600" />
                Explore Platform
              </Link>
            </div>
          </div>

          {/* Right Dashboard Preview */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* Main Dashboard */}
            <div className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-300/40 sm:p-6">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm text-slate-500">
                    Welcome back
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    Campaign Overview
                  </h3>
                </div>

                <div className="rounded-xl bg-blue-50 p-3">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                </div>
              </div>

              {/* Balance Card */}
              <div className="mt-5 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-5 text-white sm:p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-blue-100">
                      Available Balance
                    </p>

                    <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                      ৳ 24,850
                    </h2>

                    <p className="mt-2 text-xs text-blue-100">
                      Ready for your next campaign
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/15 p-3">
                    <Wallet className="h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* Dashboard Statistics */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <DashboardCard
                  icon={
                    <PhoneCall className="h-5 w-5 text-blue-600" />
                  }
                  title="Calls Today"
                  value="2,480"
                  change="+12.5%"
                />

                <DashboardCard
                  icon={
                    <Users className="h-5 w-5 text-violet-600" />
                  }
                  title="Total Contacts"
                  value="18.5K"
                  change="+840 new"
                />
              </div>

              {/* Active Campaign */}
              <div className="mt-4 rounded-2xl border border-slate-200 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Monthly Promotion Campaign
                    </h4>

                    <p className="mt-1 text-sm text-slate-500">
                      8,450 contacts
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                    Running
                  </span>
                </div>

                {/* Progress */}
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[68%] rounded-full bg-blue-600 transition-all duration-500" />
                </div>

                <div className="mt-3 flex justify-between text-xs text-slate-500">
                  <span>5,746 Completed</span>
                  <span>68%</span>
                </div>
              </div>
            </div>

            {/* Floating Success Card */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl lg:block">
              <p className="text-xs font-medium text-slate-500">
                Call Success Rate
              </p>

              <div className="mt-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                </div>

                <span className="text-2xl font-bold text-slate-900">
                  94.8%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Statistics Section */}
      <div className="absolute bottom-[-88px] left-0 z-20 w-full">
        <div className="mx-auto max-w-[1280px] px-4">
          <div className="grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:grid-cols-2 lg:grid-cols-4">
            <Stat
              value="14+"
              label="Years Experience"
            />

            <Stat
              value="40p"
              label="Per Minute Rate"
            />

            <Stat
              value="24/7"
              label="Customer Support"
            />

            <Stat
              value="1s"
              label="Pulse Billing"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardCard({
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
    <div className="rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50">
          {icon}
        </div>

        <span className="text-xs font-medium text-slate-500">
          {title}
        </span>
      </div>

      <h4 className="mt-4 text-2xl font-bold text-slate-900">
        {value}
      </h4>

      <p className="mt-1 text-xs font-medium text-emerald-600">
        {change}
      </p>
    </div>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="relative flex min-h-[140px] flex-col items-center justify-center px-6 py-8 text-center transition duration-300 hover:bg-slate-50">
      <h3 className="text-4xl font-extrabold tracking-tight text-[#31569D] sm:text-5xl">
        {value}
      </h3>

      <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
        {label}
      </p>
    </div>
  );
}