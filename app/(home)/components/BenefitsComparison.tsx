import { Layers, Phone, Users, BarChart3, Settings, Wallet, ShieldCheck, Zap } from "lucide-react";

export default function BenefitsComparison() {
  const benefits = [
    { icon: Layers, title: "One centralized platform" },
    { icon: Phone, title: "Professional business communication" },
    { icon: Users, title: "Easy management for non-technical teams" },
    { icon: Zap, title: "Flexible solutions for growing businesses" },
    { icon: BarChart3, title: "Real-time visibility into communication activity" },
    { icon: Settings, title: "Managed technical setup and support" },
    { icon: Wallet, title: "Clear pricing and billing visibility" },
    { icon: ShieldCheck, title: "Business-focused features" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Benefits */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-primary bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" /> Benefits
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-6 tracking-tight">
            Why Businesses Choose aicall.bd
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="group flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-white">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary shadow-sm transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}