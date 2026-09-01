/* eslint-disable @typescript-eslint/no-unused-vars */
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
  PhoneCall,
  Loader2,
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
    <div className="space-y-6 max-w-[1600px] mx-auto bg-slate-50 min-h-screen p-4 md:p-6 text-slate-800">
      
      {/* ================= 1. SUBSCRIPTION WARNING / BANNER ================= */}
      {!hasSubscription ? (
        <div className="bg-amber-50 border border-amber-200/90 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-start space-x-3.5">
            <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700 border border-amber-200 mt-0.5 md:mt-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-amber-950 tracking-tight">
                Active Monthly Subscription Required
              </h3>
              <p className="text-xs text-amber-800/80 font-medium mt-0.5">
                To launch bulk auto-dialer campaigns, you must subscribe to a monthly calling package.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <button
              onClick={() => setHasSubscription(true)}
              className="text-xs font-semibold bg-white hover:bg-slate-100 text-slate-700 px-3.5 py-2.5 rounded-xl border border-slate-200 shadow-2xs transition"
            >
              (Demo: Unlock Sub)
            </button>
            <Link
              href="/dashboard/billing"
              className="flex-1 md:flex-none text-center text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-xl transition shadow-xs"
            >
              Buy Subscription
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-slate-200/90 rounded-2xl p-4 px-6 flex items-center justify-between shadow-xs">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-xs md:text-sm font-extrabold text-slate-900 tracking-tight">
              Active Plan: Pro Enterprise Bulk Caller
            </span>
          </div>
          <span className="text-xs text-emerald-700 font-mono font-bold bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full">
            ● Subscription Active
          </span>
        </div>
      )}

      {/* ================= 2. MAIN CONSOLE GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: Campaign Creation Form (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs">
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
            <div>
              <h2 className="text-base font-extrabold text-slate-900 tracking-tight">Create Bulk Voice Campaign</h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Configure target numbers and broadcast audio</p>
            </div>
            <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-lg">
              {parsedNumberCount} Numbers Ready
            </span>
          </div>

          <form onSubmit={handleStartCampaign} className="space-y-5">
            {/* Campaign Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Campaign Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                disabled={!hasSubscription}
                placeholder="e.g., Eid Promo Broadcast 2026"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-xs md:text-sm text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white disabled:cursor-not-allowed disabled:opacity-50 transition"
              />
            </div>

            {/* Target Phone Numbers Input Area */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Target Phone Numbers <span className="text-rose-500">*</span>
                </label>
                <span className="text-[11px] font-medium text-slate-400">One number per line</span>
              </div>
              <textarea
                rows={6}
                required
                disabled={!hasSubscription}
                placeholder={`+8801700000000\n+8801800000000\n+8801900000000`}
                value={numbersInput}
                onChange={(e) => setNumbersInput(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-xs md:text-sm font-mono text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white disabled:cursor-not-allowed disabled:opacity-50 transition resize-none"
              />
            </div>

            {/* File Upload: Voicemail Audio */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Upload Voice Message (.mp3, .wav) <span className="text-rose-500">*</span>
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
                      ? "opacity-50 cursor-not-allowed border-slate-200 bg-slate-50/50"
                      : audioFile
                      ? "border-emerald-500/50 bg-emerald-50/50 text-emerald-700"
                      : "border-slate-300 hover:border-blue-400 bg-slate-50/50 hover:bg-blue-50/40"
                  }`}
                >
                  {audioFile ? (
                    <div className="flex items-center space-x-3 text-emerald-700">
                      <FileAudio className="w-6 h-6 text-emerald-600" />
                      <span className="text-xs font-bold truncate max-w-xs">{audioFile.name}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="p-3 rounded-xl bg-white border border-slate-200 text-slate-500 shadow-2xs">
                        <Upload className="w-5 h-5" />
                      </div>
                      <p className="text-xs text-slate-700 font-bold">
                        Click to upload voice clip
                      </p>
                      <p className="text-[10px] text-slate-400 font-medium">MP3 or WAV files up to 10MB</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Action Launch Button */}
            <button
              type="submit"
              disabled={!hasSubscription || isLaunching}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-3.5 rounded-xl font-bold text-xs transition duration-200 flex items-center justify-center space-x-2 shadow-xs mt-4"
            >
              {isLaunching ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Launching Campaign...</span>
                </>
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
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 tracking-tight">Live Call Logs</h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Real-time status of outgoing calls</p>
            </div>
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/80 text-center">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Success</span>
              <p className="text-base font-black text-emerald-600 mt-0.5">12</p>
            </div>
            <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/80 text-center">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Active</span>
              <p className="text-base font-black text-blue-600 mt-0.5">3</p>
            </div>
            <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/80 text-center">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Failed</span>
              <p className="text-base font-black text-rose-600 mt-0.5">1</p>
            </div>
          </div>

          {/* Logs List Container */}
          <div className="flex-1 space-y-2.5 overflow-y-auto max-h-105 pr-1">
            {logs.map((log) => (
              <div
                key={log.id}
                className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-between hover:bg-slate-50/70 transition"
              >
                <div className="space-y-1">
                  <p className="text-xs font-mono font-bold text-slate-900">{log.phone}</p>
                  <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-semibold">
                    <span>{log.time}</span>
                    <span>•</span>
                    <span className="font-mono text-slate-500">{log.duration}</span>
                  </div>
                </div>

                <div>
                  {log.status === "Completed" && (
                    <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Answered</span>
                    </span>
                  )}
                  {log.status === "In Progress" && (
                    <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-purple-700 bg-purple-50 border border-purple-200/80 px-2.5 py-1 rounded-full">
                      <Zap className="w-3 h-3 text-purple-600 animate-bounce" />
                      <span>Ringing</span>
                    </span>
                  )}
                  {log.status === "Failed" && (
                    <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200/80 px-2.5 py-1 rounded-full">
                      <AlertCircle className="w-3 h-3 text-rose-600" />
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