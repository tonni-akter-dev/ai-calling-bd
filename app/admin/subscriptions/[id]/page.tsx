import Link from "next/link";
import {
  ArrowLeft,
  Wallet,
  CreditCard,
  CheckCircle2,
} from "lucide-react";
import UsageStats from "../../components/UsageStats";
import PaymentHistory from "../../components/PaymentHistory";
import CallHistory from "../../components/CallHistory";
import CreditHistory from "../../components/CreditHistory";

export default async function SubscriptionDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="mx-auto max-w-375 space-y-6">
      {/* Back */}
      <Link
        href="/admin/subscriptions"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to subscriptions
      </Link>

      {/* User Header */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-lg font-bold text-blue-600">
              R
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl font-bold text-slate-900">
                  Rahim Ahmed
                </h1>

                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600">
                  <CheckCircle2 className="h-3 w-3" />
                  Active
                </span>
              </div>

              <p className="mt-1 text-sm text-slate-500">
                rahim@example.com · 01712345678
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Customer ID: #{id}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50">
              Suspend User
            </button>

            <button className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700">
              Manage Subscription
            </button>
          </div>
        </div>
      </div>

      {/* Subscription */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500">
                Current Subscription
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-900">
                Business Plan
              </h2>
            </div>

            <div className="rounded-lg bg-blue-50 p-3">
              <CreditCard className="h-5 w-5 text-blue-600" />
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-4">
            <Info
              label="Monthly Price"
              value="৳2,499"
            />

            <Info
              label="Started"
              value="01 Sep 2026"
            />

            <Info
              label="Renewal"
              value="01 Oct 2026"
            />

            <Info
              label="Days Left"
              value="26 Days"
            />
          </div>
        </div>

        {/* Wallet */}
        <div className="rounded-xl bg-blue-600 p-5 text-white shadow-lg shadow-blue-600/10">
          <Wallet className="h-6 w-6 text-blue-100" />

          <p className="mt-5 text-sm text-blue-100">
            Current Wallet Balance
          </p>

          <h2 className="mt-1 text-3xl font-bold">
            ৳12,500
          </h2>

          <div className="mt-6 flex items-center justify-between text-xs text-blue-100">
            <span>Total Added</span>
            <span>৳25,000</span>
          </div>

          <div className="mt-2 flex items-center justify-between text-xs text-blue-100">
            <span>Total Used</span>
            <span>৳12,500</span>
          </div>
        </div>
      </div>

      {/* Usage */}
      <UsageStats />

      {/* Payment / Credit */}
      <div className="grid gap-6 xl:grid-cols-2">
        <PaymentHistory />
        <CreditHistory />
      </div>

      {/* Calls */}
      <CallHistory />
    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-[11px] font-medium text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-slate-800">
        {value}
      </p>
    </div>
  );
}