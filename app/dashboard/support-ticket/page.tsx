/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  Ticket,
  Clock3,
  CheckCircle2,
  AlertCircle,
  X,
  ChevronDown,
  MessageSquare,
  Send,
  Paperclip,
  Eye,
} from "lucide-react";

type Category = "Complaint" | "Request" | "Billing" | "";

interface TicketData {
  id: string;
  category: string;
  type: string;
  subject: string;
  priority: string;
  status: string;
  date: string;
}

const requestTypes = {
  Complaint: [
    "Extension Disconnect",
    "Call Drop",
    "Billing",
    "Bulk Voice Call",
    "Voice Quality Issue",
  ],
  Request: [
    "Extension Remove Request",
    "Call Channel",
    "Call Logs Report",
    "Telephone Configuration",
    "Mobile/PC Configuration",
    "API Integration",
  ],
  Billing: [
    "Add Credit",
    "Payment Issue",
    "Invoice Request",
    "Balance Issue",
  ],
};

export default function SupportTicketPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [category, setCategory] = useState<Category>("");
  const [requestType, setRequestType] = useState("");
  const [priority, setPriority] = useState("");
  const [search, setSearch] = useState("");

  const [tickets] = useState<TicketData[]>([
    {
      id: "#TK-1024",
      category: "Request",
      type: "API Integration",
      subject: "Need assistance with API integration",
      priority: "Medium",
      status: "Open",
      date: "01 Sep 2026",
    },
    {
      id: "#TK-1023",
      category: "Complaint",
      type: "Call Drop",
      subject: "Calls are disconnecting automatically",
      priority: "High",
      status: "In Progress",
      date: "30 Aug 2026",
    },
    {
      id: "#TK-1022",
      category: "Billing",
      type: "Payment Issue",
      subject: "Balance not updated after payment",
      priority: "Low",
      status: "Resolved",
      date: "28 Aug 2026",
    },
  ]);

  const filteredTickets = tickets.filter((ticket) => {
    const searchText = search.toLowerCase();

    return (
      ticket.id.toLowerCase().includes(searchText) ||
      ticket.subject.toLowerCase().includes(searchText) ||
      ticket.category.toLowerCase().includes(searchText) ||
      ticket.status.toLowerCase().includes(searchText)
    );
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      category,
      requestType,
      priority,
    });

    setIsModalOpen(false);
    setCategory("");
    setRequestType("");
    setPriority("");
  };

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto bg-slate-50 min-h-screen p-4 md:p-6 text-slate-800">
      {/* ================= Page Header ================= */}

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
            <Ticket className="h-6 w-6" />
          </div>

          <div>
            <h1 className="text-xl font-extrabold text-slate-900 sm:text-2xl tracking-tight">
              Support Tickets
            </h1>

            <p className="mt-0.5 text-xs text-slate-500 font-medium">
              Manage and track your support requests.
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-blue-700 transition"
        >
          <Plus className="h-4 w-4" />
          Open a Ticket
        </button>
      </div>

      {/* ================= Statistics ================= */}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Tickets"
          value="24"
          icon={<Ticket className="h-5 w-5" />}
          iconClass="border-blue-200 bg-blue-50 text-blue-600"
        />

        <StatsCard
          title="Open Tickets"
          value="08"
          icon={<AlertCircle className="h-5 w-5" />}
          iconClass="border-amber-200 bg-amber-50 text-amber-600"
        />

        <StatsCard
          title="In Progress"
          value="06"
          icon={<Clock3 className="h-5 w-5" />}
          iconClass="border-purple-200 bg-purple-50 text-purple-600"
        />

        <StatsCard
          title="Resolved"
          value="10"
          icon={<CheckCircle2 className="h-5 w-5" />}
          iconClass="border-emerald-200 bg-emerald-50 text-emerald-600"
        />
      </div>

      {/* ================= Ticket List ================= */}

      <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
        {/* List Header */}

        <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-bold text-slate-900 tracking-wide text-base">
              Your Support Requests
            </h2>

            <p className="mt-0.5 text-xs text-slate-500 font-medium">
              View and manage all your submitted support tickets.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Search */}

            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tickets..."
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-9 pr-4 text-xs font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white sm:w-[240px]"
              />
            </div>

            <button className="flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700 hover:bg-slate-50 transition">
              <Filter className="h-4 w-4 text-slate-500" />
              Filter
            </button>
          </div>
        </div>

        {/* ================= Desktop Table ================= */}

        <div className="hidden overflow-x-auto md:block">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80 text-slate-400 font-bold uppercase tracking-wider">
                <th className="px-6 py-3.5">TICKET ID</th>
                <th className="px-6 py-3.5">CATEGORY</th>
                <th className="px-6 py-3.5">SUBJECT</th>
                <th className="px-6 py-3.5">PRIORITY</th>
                <th className="px-6 py-3.5">DATE</th>
                <th className="px-6 py-3.5">STATUS</th>
                <th className="px-6 py-3.5 text-right">ACTION</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredTickets.length > 0 ? (
                filteredTickets.map((ticket) => (
                  <tr
                    key={ticket.id}
                    className="hover:bg-slate-50/70 transition duration-150"
                  >
                    <td className="px-6 py-4 font-mono font-bold text-blue-600">
                      {ticket.id}
                    </td>

                    <td className="px-6 py-4 text-xs font-semibold text-slate-600">
                      {ticket.category}
                    </td>

                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-slate-900">
                          {ticket.subject}
                        </p>

                        <p className="mt-0.5 text-[11px] font-medium text-slate-400">
                          {ticket.type}
                        </p>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <PriorityBadge priority={ticket.priority} />
                    </td>

                    <td className="px-6 py-4 font-mono text-slate-500 text-xs">
                      {ticket.date}
                    </td>

                    <td className="px-6 py-4">
                      <StatusBadge status={ticket.status} />
                    </td>

                    <td className="px-6 py-4 text-right">
                      <button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 hover:text-blue-600 transition">
                        <Eye className="h-3.5 w-3.5 text-slate-400" />
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7}>
                    <EmptyState />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ================= Mobile Tickets ================= */}

        <div className="space-y-4 p-4 md:hidden">
          {filteredTickets.length > 0 ? (
            filteredTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs space-y-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono font-bold text-blue-600 text-xs">
                      {ticket.id}
                    </p>

                    <h3 className="mt-1 text-xs font-bold text-slate-900">
                      {ticket.subject}
                    </h3>

                    <p className="mt-0.5 text-[11px] text-slate-500 font-medium">
                      {ticket.type}
                    </p>
                  </div>

                  <StatusBadge status={ticket.status} />
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-b border-slate-100 py-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Category
                    </p>

                    <p className="mt-0.5 text-xs font-semibold text-slate-700">
                      {ticket.category}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Priority
                    </p>

                    <div className="mt-0.5">
                      <PriorityBadge priority={ticket.priority} />
                    </div>
                  </div>
                </div>

                <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition">
                  <Eye className="h-4 w-4 text-slate-500" />
                  View Ticket
                </button>
              </div>
            ))
          ) : (
            <EmptyState />
          )}
        </div>
      </div>

      {/* ================= Open Ticket Modal ================= */}

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end bg-slate-900/40 backdrop-blur-xs sm:items-center sm:justify-center sm:p-4">
          <div className="w-full max-w-[650px] rounded-t-3xl border border-slate-200 bg-white shadow-2xl sm:rounded-3xl overflow-hidden">
            {/* Modal Header */}

            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <div>
                <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">
                  Open a Ticket
                </h2>

                <p className="mt-0.5 text-xs text-slate-500 font-medium">
                  Tell us how we can help you.
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="max-h-[75vh] overflow-y-auto p-6"
            >
              <div className="grid gap-5">
                {/* Category */}

                <FormField label="Select Category" required>
                  <SelectField
                    value={category}
                    onChange={(value) => {
                      setCategory(value as Category);
                      setRequestType("");
                    }}
                    options={[
                      {
                        label: "Select Category",
                        value: "",
                      },
                      {
                        label: "Complaint",
                        value: "Complaint",
                      },
                      {
                        label: "Request",
                        value: "Request",
                      },
                      {
                        label: "Billing",
                        value: "Billing",
                      },
                    ]}
                  />
                </FormField>

                {/* Type */}

                <FormField label="Type of Request" required>
                  <SelectField
                    value={requestType}
                    onChange={setRequestType}
                    disabled={!category}
                    options={[
                      {
                        label: "Select One",
                        value: "",
                      },
                      ...(category
                        ? requestTypes[category].map((item) => ({
                            label: item,
                            value: item,
                          }))
                        : []),
                    ]}
                  />
                </FormField>

                {/* Subject */}

                <FormField label="Subject" required>
                  <input
                    required
                    placeholder="Enter ticket subject"
                    className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 text-xs text-slate-900 font-medium outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white"
                  />
                </FormField>

                {/* Priority */}

                <FormField label="Priority">
                  <SelectField
                    value={priority}
                    onChange={setPriority}
                    options={[
                      {
                        label: "Select Priority",
                        value: "",
                      },
                      {
                        label: "Low",
                        value: "Low",
                      },
                      {
                        label: "Medium",
                        value: "Medium",
                      },
                      {
                        label: "High",
                        value: "High",
                      },
                    ]}
                  />
                </FormField>

                {/* Description */}

                <FormField label="Describe Your Issue" required>
                  <textarea
                    required
                    rows={4}
                    placeholder="Please provide details about your issue..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/80 p-3.5 text-xs text-slate-900 font-medium outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white"
                  />
                </FormField>

                {/* Attachment */}

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-slate-700">
                    Attachment
                    <span className="ml-1 text-slate-400 font-normal">
                      (Optional)
                    </span>
                  </label>

                  <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 bg-slate-50/50 px-4 py-4 text-xs font-semibold text-slate-500 transition hover:border-blue-400 hover:bg-blue-50/40 hover:text-blue-600">
                    <Paperclip className="h-4 w-4" />
                    Upload screenshot or document
                    <input type="file" className="hidden" />
                  </label>
                </div>

                {/* Actions */}

                <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-blue-700 transition"
                  >
                    <Send className="h-3.5 w-3.5" />
                    Submit Ticket
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= Reusable Components ================= */

function StatsCard({
  title,
  value,
  icon,
  iconClass,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconClass: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs flex items-center justify-between">
      <div>
        <p className="text-xs font-semibold text-slate-500">{title}</p>
        <h3 className="mt-1 text-2xl font-black text-slate-900">{value}</h3>
      </div>

      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl border ${iconClass}`}
      >
        {icon}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Open: "border-blue-200 bg-blue-50 text-blue-600",
    "In Progress": "border-purple-200 bg-purple-50 text-purple-600",
    Resolved: "border-emerald-200 bg-emerald-50 text-emerald-600",
    Closed: "border-slate-200 bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-bold ${
        styles[status] || styles.Open
      }`}
    >
      {status}
    </span>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const styles: Record<string, string> = {
    Low: "border-emerald-200 bg-emerald-50 text-emerald-600",
    Medium: "border-amber-200 bg-amber-50 text-amber-600",
    High: "border-rose-200 bg-rose-50 text-rose-600",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-bold ${
        styles[priority] || "border-slate-200 bg-slate-100 text-slate-600"
      }`}
    >
      {priority}
    </span>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-[250px] flex-col items-center justify-center p-8 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
        <MessageSquare className="h-6 w-6" />
      </div>

      <h3 className="mt-3 font-bold text-slate-700 text-sm">No tickets found</h3>

      <p className="mt-1 max-w-sm text-xs text-slate-500">
        Your submitted support requests will appear here.
      </p>
    </div>
  );
}

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-bold text-slate-700">
        {label}
        {required && <span className="ml-1 text-rose-500">*</span>}
      </label>
      {children}
    </div>
  );
}

function SelectField({
  value,
  onChange,
  options,
  disabled,
}: {
  value: string;
  onChange: (value: string) => void;
  options: {
    label: string;
    value: string;
  }[];
  disabled?: boolean;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 pr-9 text-xs font-semibold text-slate-800 outline-none transition focus:border-blue-600 focus:bg-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-white text-slate-900"
          >
            {option.label}
          </option>
        ))}
      </select>

      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
    </div>
  );
}