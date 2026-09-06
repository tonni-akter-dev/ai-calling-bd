"use client";

import Link from "next/link";
import { Search, Eye } from "lucide-react";
import { useState } from "react";

const users = [
  {
    id: "1001",
    name: "Rahim Ahmed",
    email: "rahim@example.com",
    phone: "01712345678",
    plan: "Business",
    balance: "৳12,500",
    status: "Active",
  },
  {
    id: "1002",
    name: "Karim Hasan",
    email: "karim@example.com",
    phone: "01812345678",
    plan: "Basic",
    balance: "৳3,200",
    status: "Active",
  },
  {
    id: "1003",
    name: "ABC Limited",
    email: "admin@abc.com",
    phone: "01912345678",
    plan: "Enterprise",
    balance: "৳85,000",
    status: "Active",
  },
];

export default function UsersPage() {
  const [search, setSearch] = useState("");

  const filtered = users.filter((user) =>
    `${user.name} ${user.email} ${user.phone}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-[1500px] space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Users
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage all registered customers.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white">
        <div className="border-b border-slate-100 p-5">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, email or phone..."
              className="h-10 w-full rounded-lg border border-slate-200 pl-9 pr-3 text-sm outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="px-5 py-3 text-left text-[10px] font-bold uppercase text-slate-400">
                  User
                </th>

                <th className="px-5 py-3 text-left text-[10px] font-bold uppercase text-slate-400">
                  Phone
                </th>

                <th className="px-5 py-3 text-left text-[10px] font-bold uppercase text-slate-400">
                  Subscription
                </th>

                <th className="px-5 py-3 text-left text-[10px] font-bold uppercase text-slate-400">
                  Balance
                </th>

                <th className="px-5 py-3 text-left text-[10px] font-bold uppercase text-slate-400">
                  Status
                </th>

                <th className="px-5 py-3 text-left text-[10px] font-bold uppercase text-slate-400">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                >
                  <td className="px-5 py-4">
                    <p className="text-sm font-semibold text-slate-800">
                      {user.name}
                    </p>

                    <p className="text-xs text-slate-400">
                      {user.email}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    {user.phone}
                  </td>

                  <td className="px-5 py-4">
                    <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                      {user.plan}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold text-slate-700">
                    {user.balance}
                  </td>

                  <td className="px-5 py-4">
                    <span className="text-xs font-semibold text-emerald-600">
                      ● Active
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <Link
                      href={`/admin/subscriptions/${user.id}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      Details
                    </Link>
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