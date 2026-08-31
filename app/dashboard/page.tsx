import { PhoneCall, Users, Clock, CreditCard, ArrowUpRight, TrendingUp } from "lucide-react";

export default function DashboardOverviewPage() {
  const stats = [
    {
      title: "Total Calls",
      value: "2,845",
      change: "+12% this month",
      icon: PhoneCall,
      accent: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30",
    },
    {
      title: "Active Extensions",
      value: "24 / 30",
      change: "80% capacity",
      icon: Users,
      accent: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
    },
    {
      title: "Call Duration",
      value: "148 hrs",
      change: "+8% vs last week",
      icon: Clock,
      accent: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
    },
    {
      title: "Current Balance",
      value: "৳ 1,250",
      change: "Auto-recharge off",
      icon: CreditCard,
      accent: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
    },
  ];

  return (
    <div className="space-y-6">
      {/* High Visibility Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700/80 shadow-lg shadow-slate-950/20 flex items-center justify-between hover:border-slate-600 transition duration-200">
              <div>
                <p className="text-xs text-slate-400 font-semibold mb-1 uppercase tracking-wider">{stat.title}</p>
                <h3 className="text-2xl md:text-3xl font-black text-white">{stat.value}</h3>
                <span className="text-[11px] font-medium text-slate-400 mt-2 flex items-center space-x-1">
                  <TrendingUp className="w-3 h-3 text-emerald-400 inline" />
                  <span>{stat.change}</span>
                </span>
              </div>
              <div className={`p-3.5 rounded-2xl bg-linear-to-br border ${stat.accent} shadow-inner`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Table / Activity Container */}
      <div className="bg-[#1e293b] rounded-2xl border border-slate-700/80 p-6 shadow-lg shadow-slate-950/20">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/80">
          <div>
            <h3 className="text-base font-bold text-white">Recent Activity</h3>
            <p className="text-xs text-slate-400">Live call logs and extension events</p>
          </div>
          <button className="text-xs bg-slate-800 hover:bg-slate-700 border border-slate-700 text-blue-400 hover:text-blue-300 font-semibold px-3 py-2 rounded-xl transition inline-flex items-center space-x-1">
            <span>View All Logs</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Clear Content State */}
        <div className="text-center py-16 bg-[#0f172a]/60 rounded-xl border border-slate-800/80">
          <p className="text-slate-400 text-sm font-medium">No recent calls recorded in the last 24 hours.</p>
        </div>
      </div>
    </div>
  );
}