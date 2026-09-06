import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const subscriptions = [
  {
    id: "USR-1001",
    name: "Rahim Ahmed",
    email: "rahim@example.com",
    plan: "Business",
    amount: "৳2,499",
    date: "05 Sep 2026",
  },
  {
    id: "USR-1002",
    name: "Karim Hasan",
    email: "karim@example.com",
    plan: "Basic",
    amount: "৳999",
    date: "05 Sep 2026",
  },
  {
    id: "USR-1003",
    name: "ABC Limited",
    email: "admin@abc.com",
    plan: "Enterprise",
    amount: "৳9,999",
    date: "04 Sep 2026",
  },
];

export default function RecentSubscriptions() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div>
          <h3 className="font-semibold text-slate-900">
            Recent Subscriptions
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            Latest users who purchased a plan
          </p>
        </div>

        <Link
          href="/admin/subscriptions"
          className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
        >
          View All
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/70">
              <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                User
              </th>

              <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Plan
              </th>

              <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Amount
              </th>

              <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Date
              </th>

              <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {subscriptions.map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
              >
                <td className="px-5 py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {item.name}
                    </p>

                    <p className="mt-0.5 text-xs text-slate-400">
                      {item.email}
                    </p>
                  </div>
                </td>

                <td className="px-5 py-4">
                  <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                    {item.plan}
                  </span>
                </td>

                <td className="px-5 py-4 text-sm font-semibold text-slate-800">
                  {item.amount}
                </td>

                <td className="px-5 py-4 text-xs text-slate-500">
                  {item.date}
                </td>

                <td className="px-5 py-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Active
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}