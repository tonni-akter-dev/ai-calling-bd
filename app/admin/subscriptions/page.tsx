/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  ChevronDown,
} from "lucide-react";
import SubscriptionTable from "./SubscriptionTable";

export default function SubscriptionsPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="mx-auto max-w-[1500px] space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Subscriptions
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          View and manage every user's subscription and usage.
        </p>
      </div>

      {/* Summary */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Summary
          title="All Subscriptions"
          value="9,560"
        />

        <Summary
          title="Active"
          value="8,920"
        />

        <Summary
          title="Expiring Soon"
          value="184"
        />

        <Summary
          title="Expired"
          value="456"
        />
      </div>

      {/* Table */}
      <div className="rounded-xl border border-slate-200 bg-white">
        <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-semibold text-slate-900">
              Customer Subscriptions
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Select a customer to view complete account details.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search user..."
                className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm outline-none focus:border-blue-500 sm:w-[250px]"
              />
            </div>

            <button className="flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-medium text-slate-600 hover:bg-slate-50">
              <Filter className="h-4 w-4" />
              Filter
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <SubscriptionTable search={search} />
      </div>
    </div>
  );
}

function Summary({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-medium text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-2xl font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}