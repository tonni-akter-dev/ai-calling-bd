/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import {
  Mic,
  Upload,
  Search,
  Filter,
  Play,
  Trash2,
  X,
  FileAudio,
  Music,
} from "lucide-react";

interface VoiceFile {
  id: number;
  sn: string;
  name: string;
  campaignName: string;
  format: string;
  size: string;
  dateAdded: string;
}

export default function ManageVoiceFilesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [voiceFiles, setVoiceFiles] = useState<VoiceFile[]>([
    {
      id: 1,
      sn: "1",
      name: "IVR Voice",
      campaignName: "v182_2ad063938",
      format: "MP3",
      size: "1.2 MB",
      dateAdded: "01 Sep 2026",
    },
    {
      id: 2,
      sn: "2",
      name: "Please wait call Transfer",
      campaignName: "v14_88feb1992",
      format: "WAV",
      size: "2.4 MB",
      dateAdded: "28 Aug 2026",
    },
  ]);

  const filteredFiles = voiceFiles.filter(
    (file) =>
      file.name.toLowerCase().includes(search.toLowerCase()) ||
      file.campaignName.toLowerCase().includes(search.toLowerCase())
  );

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileName || !selectedFile) return;

    const newFile: VoiceFile = {
      id: Date.now(),
      sn: String(voiceFiles.length + 1),
      name: fileName,
      campaignName: `v${Math.floor(Math.random() * 100)}_${Math.random()
        .toString(36)
        .substring(2, 11)}`,
      format: selectedFile.name.split(".").pop()?.toUpperCase() || "MP3",
      size: `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB`,
      dateAdded: "01 Sep 2026",
    };

    setVoiceFiles([newFile, ...voiceFiles]);
    setIsModalOpen(false);
    setFileName("");
    setSelectedFile(null);
  };

  const handleDelete = (id: number) => {
    setVoiceFiles(voiceFiles.filter((f) => f.id !== id));
  };

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto bg-slate-50 min-h-screen p-4 md:p-6 text-slate-800">
      {/* ================= Header ================= */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
            <Mic className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-900 sm:text-2xl tracking-tight">
              Manage Voice Files
            </h1>
            <p className="mt-0.5 text-xs text-slate-500 font-medium">
              Upload, preview, and organize your voice broadcast clips.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
         

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-blue-700 transition"
          >
            <Upload className="h-4 w-4" />
            Upload File
          </button>
        </div>
      </div>

      {/* ================= Table & Filter Card ================= */}
      <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
        {/* Search & Action Bar */}
        <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-bold text-slate-900 tracking-wide text-base">
              Audio Files List
            </h2>
            <p className="mt-0.5 text-xs text-slate-500 font-medium">
              Total {filteredFiles.length} files available in repository
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name..."
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-9 pr-4 text-xs font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white sm:w-[260px]"
              />
            </div>

            <button className="flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700 hover:bg-slate-50 transition">
              <Filter className="h-4 w-4 text-slate-500" />
              Filter
            </button>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80 text-slate-400 font-bold uppercase tracking-wider">
                <th className="px-6 py-3.5 w-16 text-center">S.N.</th>
                <th className="px-6 py-3.5">NAME</th>
                <th className="px-6 py-3.5">CAMPAIGN NAME</th>
                <th className="px-6 py-3.5">FORMAT & SIZE</th>
                <th className="px-6 py-3.5 text-right">ACTION</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredFiles.length > 0 ? (
                filteredFiles.map((file, idx) => (
                  <tr
                    key={file.id}
                    className="hover:bg-slate-50/70 transition duration-150"
                  >
                    <td className="px-6 py-4 font-mono font-bold text-slate-500 text-center">
                      {idx + 1}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                          <FileAudio className="h-4 w-4" />
                        </div>
                        <span className="font-bold text-slate-900">
                          {file.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 font-mono text-xs font-semibold text-slate-600">
                      {file.campaignName}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                          {file.format}
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium">
                          {file.size}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-right">
                      <div className="inline-flex items-center justify-end gap-2">
                        <button className="flex items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600 hover:bg-blue-100 transition">
                          <Play className="h-3.5 w-3.5 fill-current" />
                          Preview
                        </button>
                        <button
                          onClick={() => handleDelete(file.id)}
                          className="flex items-center gap-1.5 rounded-lg border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-bold text-rose-600 hover:bg-rose-100 transition"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5}>
                    <div className="flex min-h-[250px] flex-col items-center justify-center p-8 text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                        <FileAudio className="h-6 w-6" />
                      </div>
                      <h3 className="mt-3 font-bold text-slate-700 text-sm">
                        No voice files found
                      </h3>
                      <p className="mt-1 max-w-sm text-xs text-slate-500">
                        Upload audio files to configure bulk calling campaigns.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="space-y-3 p-4 md:hidden">
          {filteredFiles.map((file, idx) => (
            <div
              key={file.id}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                    <FileAudio className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">
                      {file.name}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-500">
                      {file.campaignName}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-slate-400">
                  #{idx + 1}
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                  {file.format} • {file.size}
                </span>

                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 rounded-lg border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-600">
                    <Play className="h-3.5 w-3.5 fill-current" />
                    Preview
                  </button>
                  <button
                    onClick={() => handleDelete(file.id)}
                    className="flex items-center gap-1 rounded-lg border border-rose-200 bg-rose-50 px-2.5 py-1 text-xs font-bold text-rose-600"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= Upload Voice File Modal ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="w-full max-w-[500px] rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <div>
                <h2 className="text-base font-extrabold text-slate-900 tracking-tight">
                  Upload Voice File
                </h2>
                <p className="mt-0.5 text-xs text-slate-500 font-medium">
                  Add a new audio clip to your repository.
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* File Name Input */}
              <div>
                <label className="mb-1.5 block text-xs font-bold text-slate-700">
                  File Name <span className="text-rose-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  placeholder="Enter file name"
                  className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 text-xs text-slate-900 font-medium outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white"
                />
              </div>

              {/* Select Voice File */}
              <div>
                <label className="mb-1.5 block text-xs font-bold text-slate-700">
                  Select Voice File <span className="text-rose-500">*</span>
                </label>

                <div className="relative">
                  <input
                    required
                    type="file"
                    accept=".mp3,.wav,.ogg"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="modal-voice-input"
                  />
                  <label
                    htmlFor="modal-voice-input"
                    className="flex h-11 w-full cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 transition hover:bg-slate-100/60"
                  >
                    <span className="rounded-lg bg-white px-3 py-1 text-xs font-bold text-slate-700 border border-slate-200 shadow-2xs">
                      Choose File
                    </span>
                    <span className="text-xs font-medium text-slate-500 truncate max-w-[220px]">
                      {selectedFile ? selectedFile.name : "no file selected"}
                    </span>
                  </label>
                </div>

                <p className="mt-2 text-[11px] font-medium text-slate-400">
                  Supported formats:{" "}
                  <span className="font-bold text-slate-600">
                    mp3, wav, ogg
                  </span>
                </p>
              </div>

              {/* Upload Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-xs font-bold text-white shadow-xs hover:bg-blue-700 transition"
                >
                  <Upload className="h-4 w-4" />
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}