/* eslint-disable @typescript-eslint/no-explicit-any */
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
} from "lucide-react";

import {
  useGetVoiceFilesQuery,
  useUploadVoiceFileMutation,
  useDeleteVoiceFileMutation,
} from "@/app/redux/features/apis/voiceFileApi";
import { toast } from "sonner";

export default function ManageVoiceFilesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("");

  const [fileName, setFileName] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // ============================================
  // GET VOICE FILES
  // ============================================

  const {
    data: voiceFilesResponse,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useGetVoiceFilesQuery({
    search,
    filter,
  });

  const voiceFiles = voiceFilesResponse?.data ?? [];

  // ============================================
  // UPLOAD MUTATION
  // ============================================

  const [uploadVoiceFile, { isLoading: isUploading }] =
    useUploadVoiceFileMutation();

  // ============================================
  // DELETE MUTATION
  // ============================================

  const [deleteVoiceFile, { isLoading: isDeleting }] =
    useDeleteVoiceFileMutation();

  // ============================================
  // FILE SELECT
  // ============================================

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Check file extension
    const extension = file.name.split(".").pop()?.toLowerCase();

    if (!["mp3", "wav"].includes(extension || "")) {
      toast("Only MP3 and WAV files are allowed.");
      e.target.value = "";
      return;
    }

    // 15 MB validation
    const maxSize = 15 * 1024 * 1024;

    if (file.size > maxSize) {
      toast("File size cannot exceed 15 MB.");
      e.target.value = "";
      return;
    }

    setSelectedFile(file);
  };

  // ============================================
  // UPLOAD VOICE FILE
  // ============================================

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fileName.trim()) {
      toast("Please enter a file name.");
      return;
    }

    if (!selectedFile) {
      toast("Please select an audio file.");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("fileName", fileName.trim());

      formData.append("file", selectedFile);

      await uploadVoiceFile(formData).unwrap();

      toast("Voice file uploaded successfully!");

      // Reset form
      setFileName("");
      setSelectedFile(null);

      setIsModalOpen(false);
    } catch (error: any) {
      console.error("Voice file upload error:", error);

      const message =
        error?.data?.error ||
        error?.data?.message ||
        error?.error ||
        "Failed to upload voice file.";

      toast(message);
    }
  };

  // ============================================
  // DELETE VOICE FILE
  // ============================================

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this voice file?",
    );

    if (!confirmed) return;

    try {
      await deleteVoiceFile(id).unwrap();

      toast("Voice file deleted successfully!");
    } catch (error: any) {
      console.error("Delete voice file error:", error);

      const message =
        error?.data?.error ||
        error?.data?.message ||
        error?.error ||
        "Failed to delete voice file.";

      toast(message);
    }
  };

  // ============================================
  // PREVIEW AUDIO
  // ============================================

  const handlePreview = (url: string) => {
    if (!url) {
      toast("Audio URL is not available.");
      return;
    }

    const audio = new Audio(url);

    audio.play().catch((error) => {
      console.error("Audio preview error:", error);

      toast("Unable to play this audio file.");
    });
  };

  // ============================================
  // CLOSE MODAL
  // ============================================

  const handleCloseModal = () => {
    if (isUploading) return;

    setIsModalOpen(false);
    setFileName("");
    setSelectedFile(null);
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto bg-slate-50 min-h-screen p-4 md:p-6 text-slate-800">
      {/* ============================================
          HEADER
      ============================================ */}

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

      {/* ============================================
          TABLE CARD
      ============================================ */}

      <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
        {/* ============================================
            SEARCH & FILTER
        ============================================ */}

        <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-bold text-slate-900 tracking-wide text-base">
              Audio Files List
            </h2>

            <p className="mt-0.5 text-xs text-slate-500 font-medium">
              Total {voiceFilesResponse?.total ?? 0} files available in
              repository
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Search */}

            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name..."
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-9 pr-4 text-xs font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white sm:w-65"
              />
            </div>

            {/* Filter */}

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 pointer-events-none" />

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="h-10 appearance-none rounded-xl border border-slate-200 bg-white pl-9 pr-8 text-xs font-bold text-slate-700 outline-none hover:bg-slate-50 focus:border-blue-600"
              >
                <option value="">All Formats</option>

                <option value="mp3">MP3</option>

                <option value="wav">WAV</option>
              </select>
            </div>
          </div>
        </div>

        {/* ============================================
            DESKTOP TABLE
        ============================================ */}

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
              {/* Loading */}

              {isLoading || isFetching ? (
                <tr>
                  <td colSpan={5}>
                    <div className="flex min-h-62.5 items-center justify-center">
                      <div className="flex items-center gap-3 text-sm font-semibold text-slate-500">
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-blue-600" />
                        Loading voice files...
                      </div>
                    </div>
                  </td>
                </tr>
              ) : isError ? (
                /* Error */

                <tr>
                  <td colSpan={5}>
                    <div className="flex min-h-62.5 flex-col items-center justify-center p-8 text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                        <FileAudio className="h-6 w-6" />
                      </div>

                      <h3 className="mt-3 font-bold text-slate-700 text-sm">
                        Failed to load voice files
                      </h3>

                      <p className="mt-1 max-w-sm text-xs text-slate-500">
                        Something went wrong while loading your audio files.
                      </p>

                      <button
                        onClick={() => refetch()}
                        className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
                      >
                        Try Again
                      </button>
                    </div>
                  </td>
                </tr>
              ) : voiceFiles.length > 0 ? (
                /* Files */

                voiceFiles.map(({file, idx}:{file: any; idx: number}) => (
                  <tr
                    key={file.id}
                    className="hover:bg-slate-50/70 transition duration-150"
                  >
                    {/* S.N. */}

                    <td className="px-6 py-4 font-mono font-bold text-slate-500 text-center">
                      {idx + 1}
                    </td>

                    {/* NAME */}

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

                    {/* CAMPAIGN */}

                    <td className="px-6 py-4 font-mono text-xs font-semibold text-slate-600">
                      {file.campaignName || "N/A"}
                    </td>

                    {/* FORMAT */}

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

                    {/* ACTION */}

                    <td className="px-6 py-4 text-right">
                      <div className="inline-flex items-center justify-end gap-2">
                        {/* Preview */}

                        <button
                          onClick={() => handlePreview(file.url)}
                          disabled={!file.url}
                          className="flex items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600 hover:bg-blue-100 transition disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <Play className="h-3.5 w-3.5 fill-current" />
                          Preview
                        </button>

                        {/* Delete */}

                        <button
                          onClick={() => handleDelete(file.id)}
                          disabled={isDeleting}
                          className="flex items-center gap-1.5 rounded-lg border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-bold text-rose-600 hover:bg-rose-100 transition disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                /* Empty */

                <tr>
                  <td colSpan={5}>
                    <div className="flex min-h-62.5 flex-col items-center justify-center p-8 text-center">
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

        {/* ============================================
            MOBILE VIEW
        ============================================ */}

        <div className="space-y-3 p-4 md:hidden">
          {isLoading || isFetching ? (
            <div className="flex min-h-50 items-center justify-center">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-500">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-blue-600" />
                Loading...
              </div>
            </div>
          ) : isError ? (
            <div className="flex min-h-50 flex-col items-center justify-center text-center">
              <FileAudio className="h-8 w-8 text-rose-400" />

              <p className="mt-2 text-sm font-bold text-slate-700">
                Failed to load files
              </p>

              <button
                onClick={() => refetch()}
                className="mt-3 rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white"
              >
                Try Again
              </button>
            </div>
          ) : voiceFiles.length > 0 ? (
            voiceFiles.map(({file, idx}:{file: any; idx: number}) => (
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
                        {file.campaignName || "N/A"}
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
                    {/* Preview */}

                    <button
                      onClick={() => handlePreview(file.url)}
                      disabled={!file.url}
                      className="flex items-center gap-1 rounded-lg border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-600 disabled:opacity-50"
                    >
                      <Play className="h-3.5 w-3.5 fill-current" />
                      Preview
                    </button>

                    {/* Delete */}

                    <button
                      onClick={() => handleDelete(file.id)}
                      disabled={isDeleting}
                      className="flex items-center gap-1 rounded-lg border border-rose-200 bg-rose-50 px-2.5 py-1 text-xs font-bold text-rose-600 disabled:opacity-50"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex min-h-50 flex-col items-center justify-center text-center">
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
          )}
        </div>
      </div>

      {/* ============================================
          UPLOAD MODAL
      ============================================ */}

      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="w-full max-w-125 rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
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
                type="button"
                onClick={handleCloseModal}
                disabled={isUploading}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition disabled:cursor-not-allowed"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Form */}

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* File Name */}

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
                  disabled={isUploading}
                  className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 text-xs text-slate-900 font-medium outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white disabled:cursor-not-allowed disabled:opacity-60"
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
                    accept=".mp3,.wav"
                    onChange={handleFileUpload}
                    disabled={isUploading}
                    className="hidden"
                    id="modal-voice-input"
                  />

                  <label
                    htmlFor="modal-voice-input"
                    className={`flex h-11 w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 transition ${
                      isUploading
                        ? "cursor-not-allowed opacity-60"
                        : "cursor-pointer hover:bg-slate-100/60"
                    }`}
                  >
                    <span className="rounded-lg bg-white px-3 py-1 text-xs font-bold text-slate-700 border border-slate-200 shadow-2xs">
                      Choose File
                    </span>

                    <span className="text-xs font-medium text-slate-500 truncate max-w-55">
                      {selectedFile ? selectedFile.name : "no file selected"}
                    </span>
                  </label>
                </div>

                <p className="mt-2 text-[11px] font-medium text-slate-400">
                  Supported formats:{" "}
                  <span className="font-bold text-slate-600">MP3, WAV</span> •
                  Maximum 15 MB
                </p>
              </div>

              {/* Upload Button */}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isUploading}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-xs font-bold text-white shadow-xs hover:bg-blue-700 transition disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isUploading ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4" />
                      Upload
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
