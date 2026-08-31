/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import {
  User,
  ShieldCheck,
  Key,
  Globe,
  Save,
  Radio,
  Copy,
  Check,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"profile" | "sip" | "api" | "security">("profile");

  // Form states
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@ipcallbd.com");
  const [phone, setPhone] = useState("+8801700000000");
  const [copiedApiKey, setCopiedApiKey] = useState(false);

  const apiKey = "ipbd_live_sk_993847102938475610293";

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopiedApiKey(true);
    setTimeout(() => setCopiedApiKey(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
          Account & System Settings
        </h1>
        <p className="text-xs md:text-sm text-slate-400 mt-1">
          Manage your account profile, IPTSP SIP trunk credentials, and API access keys.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-slate-700/80 space-x-2 overflow-x-auto">
        {[
          { id: "profile", label: "Profile Info", icon: User },
          { id: "sip", label: "SIP Trunking", icon: Radio },
          { id: "api", label: "API & Webhooks", icon: Globe },
          { id: "security", label: "Security & Password", icon: ShieldCheck },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-4 py-3 text-xs md:text-sm font-semibold border-b-2 transition whitespace-nowrap ${
                isActive
                  ? "border-blue-500 text-blue-400 bg-slate-800/40"
                  : "border-transparent text-slate-400 hover:text-white hover:border-slate-600"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ---------------- 1. PROFILE SETTINGS TAB ---------------- */}
      {activeTab === "profile" && (
        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700/80 shadow-lg shadow-slate-950/20 max-w-3xl space-y-6">
          <h2 className="text-base font-bold text-white pb-3 border-b border-slate-700/80">
            Personal Profile Details
          </h2>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#0f172a] border border-slate-700 rounded-xl text-xs md:text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#0f172a] border border-slate-700 rounded-xl text-xs md:text-sm text-white focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#0f172a] border border-slate-700 rounded-xl text-xs md:text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 shadow-md shadow-blue-600/20"
              >
                <Save className="w-4 h-4" />
                <span>Save Profile Changes</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ---------------- 2. SIP TRUNKING TAB ---------------- */}
      {activeTab === "sip" && (
        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700/80 shadow-lg shadow-slate-950/20 max-w-3xl space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
            <div>
              <h2 className="text-base font-bold text-white">SIP Extension Configuration</h2>
              <p className="text-xs text-slate-400">Credentials required for connecting hardware IP phones</p>
            </div>
            <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
              Connected
            </span>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  SIP Registrar / Host
                </label>
                <input
                  type="text"
                  readOnly
                  value="sip.ipcallbd.com:5060"
                  className="w-full px-4 py-2.5 bg-[#0f172a] border border-slate-700 rounded-xl text-xs font-mono text-slate-300 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Outbound Proxy
                </label>
                <input
                  type="text"
                  readOnly
                  value="proxy.ipcallbd.com:5060"
                  className="w-full px-4 py-2.5 bg-[#0f172a] border border-slate-700 rounded-xl text-xs font-mono text-slate-300 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Extension Number
                </label>
                <input
                  type="text"
                  readOnly
                  value="101"
                  className="w-full px-4 py-2.5 bg-[#0f172a] border border-slate-700 rounded-xl text-xs font-mono text-white font-bold focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  SIP Secret / Password
                </label>
                <input
                  type="password"
                  readOnly
                  value="••••••••••••••••"
                  className="w-full px-4 py-2.5 bg-[#0f172a] border border-slate-700 rounded-xl text-xs font-mono text-slate-300 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- 3. API & WEBHOOKS TAB ---------------- */}
      {activeTab === "api" && (
        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700/80 shadow-lg shadow-slate-950/20 max-w-3xl space-y-6">
          <h2 className="text-base font-bold text-white pb-3 border-b border-slate-700/80">
            Developer API Access
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Live API Secret Key
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  readOnly
                  value={apiKey}
                  className="flex-1 px-4 py-2.5 bg-[#0f172a] border border-slate-700 rounded-xl text-xs font-mono text-emerald-400 focus:outline-none"
                />
                <button
                  onClick={handleCopyKey}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 p-2.5 rounded-xl transition flex items-center space-x-1.5 text-xs font-bold"
                >
                  {copiedApiKey ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedApiKey ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Webhook Notification URL (Call Status Events)
              </label>
              <input
                type="url"
                placeholder="https://yourdomain.com/api/webhooks/voice"
                className="w-full px-4 py-2.5 bg-[#0f172a] border border-slate-700 rounded-xl text-xs md:text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* ---------------- 4. SECURITY TAB ---------------- */}
      {activeTab === "security" && (
        <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700/80 shadow-lg shadow-slate-950/20 max-w-3xl space-y-6">
          <h2 className="text-base font-bold text-white pb-3 border-b border-slate-700/80">
            Update Account Password
          </h2>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Current Password
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-2.5 bg-[#0f172a] border border-slate-700 rounded-xl text-xs md:text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-2.5 bg-[#0f172a] border border-slate-700 rounded-xl text-xs md:text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-2.5 bg-[#0f172a] border border-slate-700 rounded-xl text-xs md:text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 shadow-md shadow-emerald-600/20"
              >
                <Key className="w-4 h-4" />
                <span>Update Password</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}