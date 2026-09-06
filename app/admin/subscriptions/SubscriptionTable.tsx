"use client";

import Link from "next/link";
import {
  Eye,
  MoreHorizontal,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const data = [
  {
    id: "1001",
    name: "Rahim Ahmed",
    email: "rahim@example.com",
    phone: "01712345678",
    plan: "Business",
    price: "৳2,499",
    balance: "৳12,500",
    calls: "2,480",
    expires: "01 Oct 2026",
    status: "Active",
  },
  {
    id: "1002",
    name: "Karim Hasan",
    email: "karim@example.com",
    phone: "01812345678",
    plan: "Basic",
    price: "৳999",
    balance: "৳3,200",
    calls: "840",
    expires: "15 Sep 2026",
    status: "Active",
  },
  {
    id: "1003",
    name: "ABC Limited",
    email: "admin@abc.com",
    phone: "01912345678",
    plan: "Enterprise",
    price: "৳9,999",
    balance: "৳85,000",
    calls: "24,850",
    expires: "28 Sep 2026",
    status: "Active",
  },
  {
    id: "1004",
    name: "Nadia Enterprise",
    email: "nadia@example.com",
    phone: "01612345678",
    plan: "Business",
    price: "৳2,499",
    balance: "৳850",
    calls: "1,240",
    expires: "07 Sep 2026",
    status: "Expiring",
  },
];

export default function SubscriptionTable({
  search,
}: {
  search: string;
}) {
  const filtered = data.filter((item) => {
    const value = search.toLowerCase();

    return (
      item.name.toLowerCase().includes(value) ||
      item.email.toLowerCase().includes(value) ||
      item.phone.includes(value)
    );
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1100px] text-left">
        <thead>
          <tr className="border-b border-slate-100 bg-slate-50/70">
            <th className="px-5 py-3">
              <input type="checkbox" />
            </th>

            {[
              "Customer",
              "Plan",
              "Price",
              "Balance",
              "Calls",
              "Expires",
              "Status",
              "Action",
            ].map((heading) => (
              <th
                key={heading}
                className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-400"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {filtered.map((item) => (
            <tr
              key={item.id}
              className="border-b border-slate-100 last:border-0 hover:bg-slate-50/70"
            >
              <td className="px-5 py-4">
                <input type="checkbox" />
              </td>

              <td className="px-4 py-4">
                <Link
                  href={`/admin/subscriptions/${item.id}`}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800 hover:text-blue-600">
                      {item.name}
                    </p>

                    <p className="text-[11px] text-slate-400">
                      {item.email}
                    </p>
                  </div>
                </Link>
              </td>

              <td className="px-4 py-4">
                <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                  {item.plan}
                </span>
              </td>

              <td className="px-4 py-4 text-sm font-semibold text-slate-700">
                {item.price}
                <span className="text-[10px] font-normal text-slate-400">
                  /month
                </span>
              </td>

              <td className="px-4 py-4 text-sm font-semibold text-slate-700">
                {item.balance}
              </td>

              <td className="px-4 py-4 text-sm text-slate-600">
                {item.calls}
              </td>

              <td className="px-4 py-4 text-xs text-slate-500">
                {item.expires}
              </td>

              <td className="px-4 py-4">
                {item.status === "Active" ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Active
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600">
                    <AlertCircle className="h-3.5 w-3.5" />
                    Expiring
                  </span>
                )}
              </td>

              <td className="px-4 py-4">
                <div className="flex items-center gap-1">
                  <Link
                    href={`/admin/subscriptions/${item.id}`}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Eye className="h-4 w-4" />
                  </Link>

                  <button className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-sm font-medium text-slate-600">
            No subscriptions found
          </p>
        </div>
      )}
    </div>
  );
}