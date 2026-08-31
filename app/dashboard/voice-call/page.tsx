"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Upload,
  Play,
  CheckCircle2,
  AlertCircle,
  FileAudio,
  Zap,
  ShieldCheck,
} from "lucide-react";

export default function VoiceCallCampaignPage() {
  const [hasSubscription, setHasSubscription] = useState(false); // Toggle to simulate sub state
  const [campaignName, setCampaignName] = useState("");
  const [numbersInput, setNumbersInput] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isLaunching, setIsLaunching] = useState(false);

  // Mock live call logs
  const [logs, setLogs] = useState([
    { id: 1, phone: "+8801711002233", status: "Completed", duration: "00:42", time: "10:14 AM" },
    { id: 2, phone: "+8801819998877", status: "In Progress", duration: "00:15", time: "10:15 AM" },
    { id: 3, phone: "+8801912345678", status: "Failed", duration: "00:00", time: "10:15 AM" },
  ]);

  const parsedNumberCount = numbersInput
    .split("\n")
    .map((num) => num.trim())
    .filter((num) => num.length > 0).length;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAudioFile(e.target.files[0]);
    }
  };

  const handleStartCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasSubscription) return;

    setIsLaunching(true);
    setTimeout(() => {
      setIsLaunching(false);
      alert("Campaign launched successfully!");
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* ---------------- 1. SUBSCRIPTION WARNING / BANNER ---------------- */}
      {!hasSubscription ? (
        <div className="bg-linear-to-r from-amber-500/15 via-orange-500/15 to-rose-500/15 border border-amber-500/40 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg shadow-slate-950/20">
          <div className="flex items-start space-x-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 mt-0.5 md:mt-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-wide">
                Active Monthly Subscription Required
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                To launch bulk auto-dialer campaigns, you must subscribe to a monthly calling package.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <button
              onClick={() => setHasSubscription(true)}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-2 rounded-xl border border-slate-700 transition"
            >
              (Demo: Unlock Sub)
            </button>
            <Link
              href="/dashboard/billing"
              className="flex-1 md:flex-none text-center text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2.5 rounded-xl transition shadow-md shadow-amber-500/20"
            >
              Buy Subscription
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-[#1e293b] border border-slate-700/80 rounded-2xl p-4 px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="text-xs md:text-sm font-bold text-white">
              Active Plan: Pro Enterprise Bulk Caller
            </span>
          </div>
          <span className="text-xs text-emerald-400 font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
            ● Subscription Active
          </span>
        </div>
      )}

      {/* ---------------- 2. MAIN CONSOLE GRID ---------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: Campaign Creation Form (7 cols) */}
        <div className="lg:col-span-7 bg-[#1e293b] p-6 rounded-2xl border border-slate-700/80 shadow-lg shadow-slate-950/20">
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-700/80">
            <div>
              <h2 className="text-base font-bold text-white">Create Bulk Voice Campaign</h2>
              <p className="text-xs text-slate-400">Configure target numbers and broadcast audio</p>
            </div>
            <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-lg">
              {parsedNumberCount} Numbers Ready
            </span>
          </div>

          <form onSubmit={handleStartCampaign} className="space-y-5">
            {/* Campaign Name */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Campaign Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                required
                disabled={!hasSubscription}
                placeholder="e.g., Eid Promo Broadcast 2026"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 rounded-xl text-xs md:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 transition"
              />
            </div>

            {/* Target Phone Numbers Input Area */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Target Phone Numbers <span className="text-rose-400">*</span>
                </label>
                <span className="text-[11px] text-slate-400">One number per line</span>
              </div>
              <textarea
                rows={6}
                required
                disabled={!hasSubscription}
                placeholder={`+8801700000000\n+8801800000000\n+8801900000000`}
                value={numbersInput}
                onChange={(e) => setNumbersInput(e.target.value)}
                className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 rounded-xl text-xs md:text-sm font-mono text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 transition"
              />
            </div>

            {/* File Upload: Voicemail Audio */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Upload Voice Message (.mp3, .wav) <span className="text-rose-400">*</span>
              </label>
              
              <div className="relative">
                <input
                  type="file"
                  accept="audio/*"
                  disabled={!hasSubscription}
                  onChange={handleFileUpload}
                  className="hidden"
                  id="voicemail-file"
                />
                <label
                  htmlFor="voicemail-file"
                  className={`w-full flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-xl cursor-pointer transition ${
                    !hasSubscription
                      ? "opacity-50 cursor-not-allowed border-slate-800 bg-[#0f172a]"
                      : audioFile
                      ? "border-emerald-500/50 bg-emerald-950/20"
                      : "border-slate-700 hover:border-blue-500 bg-[#0f172a]"
                  }`}
                >
                  {audioFile ? (
                    <div className="flex items-center space-x-3 text-emerald-400">
                      <FileAudio className="w-6 h-6" />
                      <span className="text-xs font-bold truncate max-w-xs">{audioFile.name}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="p-3 rounded-xl bg-slate-800 text-slate-400">
                        <Upload className="w-5 h-5" />
                      </div>
                      <p className="text-xs text-slate-300 font-semibold">
                        Click to upload voice clip
                      </p>
                      <p className="text-[10px] text-slate-500">MP3 or WAV files up to 10MB</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Action Launch Button */}
            <button
              type="submit"
              disabled={!hasSubscription || isLaunching}
              className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white py-4 rounded-xl font-bold transition duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/25 mt-4"
            >
              {isLaunching ? (
                <span>Launching Campaign...</span>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>START BULK CALLING NOW</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN: Real-Time Live Call Logs (5 cols) */}
        <div className="lg:col-span-5 bg-[#1e293b] p-6 rounded-2xl border border-slate-700/80 shadow-lg shadow-slate-950/20 flex flex-col">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/80">
            <div>
              <h3 className="text-base font-bold text-white">Live Call Logs</h3>
              <p className="text-xs text-slate-400">Real-time status of outgoing calls</p>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="p-3 bg-[#0f172a] rounded-xl border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Success</span>
              <p className="text-sm font-extrabold text-emerald-400 mt-0.5">12</p>
            </div>
            <div className="p-3 bg-[#0f172a] rounded-xl border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Active</span>
              <p className="text-sm font-extrabold text-blue-400 mt-0.5">3</p>
            </div>
            <div className="p-3 bg-[#0f172a] rounded-xl border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Failed</span>
              <p className="text-sm font-extrabold text-rose-400 mt-0.5">1</p>
            </div>
          </div>

          {/* Logs List Container */}
          <div className="flex-1 space-y-2.5 overflow-y-auto max-h-[420px] pr-1">
            {logs.map((log) => (
              <div
                key={log.id}
                className="p-3.5 rounded-xl bg-[#0f172a] border border-slate-700/80 flex items-center justify-between"
              >
                <div className="space-y-1">
                  <p className="text-xs font-mono font-bold text-white">{log.phone}</p>
                  <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-medium">
                    <span>{log.time}</span>
                    <span>•</span>
                    <span className="font-mono text-slate-300">{log.duration}</span>
                  </div>
                </div>

                <div>
                  {log.status === "Completed" && (
                    <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Answered</span>
                    </span>
                  )}
                  {log.status === "In Progress" && (
                    <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/30 px-2.5 py-1 rounded-full">
                      <Zap className="w-3 h-3 animate-bounce" />
                      <span>Ringing</span>
                    </span>
                  )}
                  {log.status === "Failed" && (
                    <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-rose-400 bg-rose-500/10 border border-rose-500/30 px-2.5 py-1 rounded-full">
                      <AlertCircle className="w-3 h-3" />
                      <span>Failed</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}