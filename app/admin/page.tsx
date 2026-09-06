import {
  Users,
  CreditCard,
  Wallet,
  PhoneCall,
  TrendingUp,
} from "lucide-react";
import StatCard from "./components/StatCard";
import RecentSubscriptions from "./components/RecentSubscriptions";



export default function SuperAdminDashboard() {
  return (
    <div className="mx-auto max-w-375 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Overview of subscriptions, users and platform activity.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Users"
          value="12,450"
          description="+8.4% from last month"
          icon={Users}
        />

        <StatCard
          title="Active Subscriptions"
          value="8,920"
          description="71.6% of total users"
          icon={CreditCard}
          iconClass="bg-emerald-50 text-emerald-600"
        />

        <StatCard
          title="Monthly Revenue"
          value="৳24.50L"
          description="+12.8% from last month"
          icon={TrendingUp}
          iconClass="bg-violet-50 text-violet-600"
        />

        <StatCard
          title="Total Calls"
          value="1.25M"
          description="This month"
          icon={PhoneCall}
          iconClass="bg-orange-50 text-orange-600"
        />
      </div>

      {/* Subscription Summary */}
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">
                Subscription Overview
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Current active plans
              </p>
            </div>

            <CreditCard className="h-5 w-5 text-blue-600" />
          </div>

          <div className="mt-6 space-y-5">
            <PlanRow
              name="Basic"
              users="2,850"
              percentage="32%"
            />

            <PlanRow
              name="Business"
              users="4,320"
              percentage="48%"
            />

            <PlanRow
              name="Enterprise"
              users="1,750"
              percentage="20%"
            />
          </div>
        </div>

        {/* Revenue */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">
                Revenue Overview
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Subscription revenue
              </p>
            </div>

            <Wallet className="h-5 w-5 text-emerald-600" />
          </div>

          <div className="mt-8 flex h-48 items-end gap-3">
            {[45, 60, 52, 72, 65, 80, 92, 75, 85, 68, 90, 96].map(
              (height, index) => (
                <div
                  key={index}
                  className="group flex flex-1 flex-col justify-end"
                >
                  <div
                    style={{ height: `${height}%` }}
                    className="rounded-t-md bg-blue-600 transition group-hover:bg-blue-700"
                  />

                  <span className="mt-2 text-center text-[9px] text-slate-400">
                    {index + 1}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Recent subscriptions */}
      <RecentSubscriptions />
    </div>
  );
}

function PlanRow({
  name,
  users,
  percentage,
}: {
  name: string;
  users: string;
  percentage: string;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-700">
          {name}
        </span>

        <span className="text-xs text-slate-500">
          {users} users
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          style={{ width: percentage }}
          className="h-full rounded-full bg-blue-600"
        />
      </div>
    </div>
  );
}