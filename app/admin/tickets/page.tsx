"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  Eye,
  MoreHorizontal,
  ChevronDown,
  Ticket,
  Clock3,
  CheckCircle2,
  AlertCircle,
  XCircle,
  MessageSquare,
  User,
  CalendarDays,
  ArrowUp,
  ArrowDown,
  Minus,
  Plus,
} from "lucide-react";

import PageHeader from "../components/PageHeader";

type TicketStatus =
  | "Open"
  | "In Progress"
  | "Waiting for Customer"
  | "Resolved"
  | "Closed";

type TicketPriority = "Low" | "Medium" | "High" | "Urgent";

type TicketCategory =
  | "Billing"
  | "Technical"
  | "Account"
  | "Campaign"
  | "Voice Call"
  | "Other";

interface SupportTicket {
  id: string;
  subject: string;
  customer: string;
  email: string;
  category: TicketCategory;
  priority: TicketPriority;
  status: TicketStatus;
  assignedTo: string;
  messages: number;
  createdAt: string;
  updatedAt: string;
}

const tickets: SupportTicket[] = [
  {
    id: "TKT-1001",
    subject: "Voice call campaign is not starting",
    customer: "Rahim Ahmed",
    email: "rahim@example.com",
    category: "Campaign",
    priority: "Urgent",
    status: "Open",
    assignedTo: "Admin",
    messages: 5,
    createdAt: "Sep 06, 2026 • 10:42 AM",
    updatedAt: "Sep 06, 2026 • 10:48 AM",
  },
  {
    id: "TKT-1002",
    subject: "Credits were deducted incorrectly",
    customer: "Nusrat Jahan",
    email: "nusrat@example.com",
    category: "Billing",
    priority: "High",
    status: "In Progress",
    assignedTo: "Sadia Admin",
    messages: 8,
    createdAt: "Sep 06, 2026 • 09:35 AM",
    updatedAt: "Sep 06, 2026 • 10:15 AM",
  },
  {
    id: "TKT-1003",
    subject: "Unable to upload voice file",
    customer: "Karim Hasan",
    email: "karim@example.com",
    category: "Voice Call",
    priority: "High",
    status: "In Progress",
    assignedTo: "Support Team",
    messages: 4,
    createdAt: "Sep 05, 2026 • 04:20 PM",
    updatedAt: "Sep 06, 2026 • 09:20 AM",
  },
  {
    id: "TKT-1004",
    subject: "Need help updating company profile",
    customer: "Sadia Islam",
    email: "sadia@example.com",
    category: "Account",
    priority: "Medium",
    status: "Waiting for Customer",
    assignedTo: "Admin",
    messages: 3,
    createdAt: "Sep 05, 2026 • 02:10 PM",
    updatedAt: "Sep 05, 2026 • 05:30 PM",
  },
  {
    id: "TKT-1005",
    subject: "Payment successful but credits not added",
    customer: "Tanvir Hossain",
    email: "tanvir@example.com",
    category: "Billing",
    priority: "Urgent",
    status: "Open",
    assignedTo: "Admin",
    messages: 7,
    createdAt: "Sep 05, 2026 • 11:30 AM",
    updatedAt: "Sep 05, 2026 • 12:05 PM",
  },
  {
    id: "TKT-1006",
    subject: "Campaign report showing wrong numbers",
    customer: "Jannatul Ferdous",
    email: "jannatul@example.com",
    category: "Campaign",
    priority: "Medium",
    status: "Resolved",
    assignedTo: "Support Team",
    messages: 6,
    createdAt: "Sep 04, 2026 • 03:15 PM",
    updatedAt: "Sep 05, 2026 • 01:40 PM",
  },
  {
    id: "TKT-1007",
    subject: "Login OTP not received",
    customer: "Farhan Karim",
    email: "farhan@example.com",
    category: "Technical",
    priority: "Low",
    status: "Closed",
    assignedTo: "Sadia Admin",
    messages: 3,
    createdAt: "Sep 03, 2026 • 01:20 PM",
    updatedAt: "Sep 04, 2026 • 10:10 AM",
  },
];

export default function SupportTicketsPage() {
  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState<"All" | TicketStatus>("All");

  const [priorityFilter, setPriorityFilter] =
    useState<"All" | TicketPriority>("All");

  const [categoryFilter, setCategoryFilter] =
    useState<"All" | TicketCategory>("All");

  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      const query = search.toLowerCase();

      const matchesSearch =
        ticket.id.toLowerCase().includes(query) ||
        ticket.subject.toLowerCase().includes(query) ||
        ticket.customer.toLowerCase().includes(query) ||
        ticket.email.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All" ||
        ticket.status === statusFilter;

      const matchesPriority =
        priorityFilter === "All" ||
        ticket.priority === priorityFilter;

      const matchesCategory =
        categoryFilter === "All" ||
        ticket.category === categoryFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority &&
        matchesCategory
      );
    });
  }, [
    search,
    statusFilter,
    priorityFilter,
    categoryFilter,
  ]);

  const openTickets = tickets.filter(
    (ticket) => ticket.status === "Open"
  ).length;

  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "In Progress"
  ).length;

  const waitingTickets = tickets.filter(
    (ticket) => ticket.status === "Waiting for Customer"
  ).length;

  const resolvedTickets = tickets.filter(
    (ticket) =>
      ticket.status === "Resolved" ||
      ticket.status === "Closed"
  ).length;

  const urgentTickets = tickets.filter(
    (ticket) => ticket.priority === "Urgent"
  ).length;

  return (
    <div className="space-y-6 pb-10">
      {/* HEADER */}

      <PageHeader
        title="Support Tickets"
        description="Manage customer support requests, issues and conversations."
      />

      {/* SUMMARY CARDS */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <SummaryCard
          title="Total Tickets"
          value={tickets.length.toString()}
          subtitle="All support tickets"
          icon={<Ticket className="h-5 w-5" />}
          iconClass="bg-blue-50 text-blue-600"
        />

        <SummaryCard
          title="Open"
          value={openTickets.toString()}
          subtitle="Need attention"
          icon={<AlertCircle className="h-5 w-5" />}
          iconClass="bg-orange-50 text-orange-600"
        />

        <SummaryCard
          title="In Progress"
          value={inProgressTickets.toString()}
          subtitle="Being handled"
          icon={<Clock3 className="h-5 w-5" />}
          iconClass="bg-violet-50 text-violet-600"
        />

        <SummaryCard
          title="Waiting"
          value={waitingTickets.toString()}
          subtitle="Waiting for customer"
          icon={<MessageSquare className="h-5 w-5" />}
          iconClass="bg-amber-50 text-amber-600"
        />

        <SummaryCard
          title="Resolved"
          value={resolvedTickets.toString()}
          subtitle={`${urgentTickets} urgent tickets`}
          icon={<CheckCircle2 className="h-5 w-5" />}
          iconClass="bg-emerald-50 text-emerald-600"
        />
      </div>

      {/* QUICK STATS */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* RESPONSE */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Avg. Response Time
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                18 min
              </h3>
            </div>

            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
              <Clock3 className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-emerald-600">
            <ArrowDown className="h-3.5 w-3.5" />
            12% faster than last week
          </div>
        </div>

        {/* RESOLUTION */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Avg. Resolution Time
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                4h 32m
              </h3>
            </div>

            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
              <CheckCircle2 className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-emerald-600">
            <ArrowDown className="h-3.5 w-3.5" />
            8% improvement
          </div>
        </div>

        {/* URGENT */}

        <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-red-600">
                Urgent Tickets
              </p>

              <h3 className="mt-2 text-2xl font-bold text-red-900">
                {urgentTickets}
              </h3>
            </div>

            <div className="rounded-xl bg-white p-3 text-red-600 shadow-sm">
              <AlertCircle className="h-5 w-5" />
            </div>
          </div>

          <p className="mt-4 text-xs text-red-600">
            These tickets require immediate attention.
          </p>
        </div>
      </div>

      {/* TICKETS TABLE */}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        {/* TABLE HEADER */}

        <div className="border-b border-slate-200 p-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h2 className="font-semibold text-slate-900">
                All Support Tickets
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Review and manage customer support requests.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:flex-row">
              {/* SEARCH */}

              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search tickets..."
                  className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 md:w-64"
                />
              </div>

              {/* STATUS */}

              <FilterSelect
                icon={<Filter className="h-4 w-4" />}
                value={statusFilter}
                onChange={(value) =>
                  setStatusFilter(
                    value as "All" | TicketStatus
                  )
                }
                options={[
                  "All",
                  "Open",
                  "In Progress",
                  "Waiting for Customer",
                  "Resolved",
                  "Closed",
                ]}
              />

              {/* PRIORITY */}

              <FilterSelect
                value={priorityFilter}
                onChange={(value) =>
                  setPriorityFilter(
                    value as "All" | TicketPriority
                  )
                }
                options={[
                  "All",
                  "Low",
                  "Medium",
                  "High",
                  "Urgent",
                ]}
              />

              {/* CATEGORY */}

              <FilterSelect
                value={categoryFilter}
                onChange={(value) =>
                  setCategoryFilter(
                    value as "All" | TicketCategory
                  )
                }
                options={[
                  "All",
                  "Billing",
                  "Technical",
                  "Account",
                  "Campaign",
                  "Voice Call",
                  "Other",
                ]}
              />
            </div>
          </div>
        </div>

        {/* TABLE */}

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70">
                <TableHead>Ticket</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Updated</TableHead>
                <TableHead align="right">
                  Action
                </TableHead>
              </tr>
            </thead>

            <tbody>
              {filteredTickets.map((ticket) => (
                <TicketRow
                  key={ticket.id}
                  ticket={ticket}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* EMPTY */}

        {filteredTickets.length === 0 && (
          <div className="py-16 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
              <Ticket className="h-6 w-6" />
            </div>

            <h3 className="mt-4 text-sm font-semibold text-slate-900">
              No tickets found
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Try changing your search or filters.
            </p>
          </div>
        )}

        {/* PAGINATION */}

        {filteredTickets.length > 0 && (
          <div className="flex flex-col gap-3 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-medium text-slate-700">
                {filteredTickets.length}
              </span>{" "}
              of{" "}
              <span className="font-medium text-slate-700">
                {tickets.length}
              </span>{" "}
              tickets
            </p>

            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-500 hover:bg-slate-50">
                Previous
              </button>

              <button className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white">
                1
              </button>

              <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-500 hover:bg-slate-50">
                2
              </button>

              <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-500 hover:bg-slate-50">
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* SUPPORT NOTICE */}

      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-blue-100 p-2 text-blue-600">
            <MessageSquare className="h-5 w-5" />
          </div>

          <div>
            <h3 className="font-semibold text-blue-900">
              Support Management
            </h3>

            <p className="mt-1 text-sm leading-6 text-blue-700">
              Super Admin can monitor all customer tickets,
              assign tickets to admins, change priority,
              update ticket status and review complete
              conversations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   TICKET ROW
========================================================= */

function TicketRow({
  ticket,
}: {
  ticket: SupportTicket;
}) {
  return (
    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60">
      {/* TICKET */}

      <td className="px-5 py-4">
        <div className="max-w-[300px]">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-900">
              {ticket.id}
            </span>

            {ticket.priority === "Urgent" && (
              <span className="rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold uppercase text-red-600">
                Urgent
              </span>
            )}
          </div>

          <p className="mt-1 truncate text-sm font-medium text-slate-700">
            {ticket.subject}
          </p>

          <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
            <MessageSquare className="h-3 w-3" />

            {ticket.messages} messages
          </div>
        </div>
      </td>

      {/* CUSTOMER */}

      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
            {getInitials(ticket.customer)}
          </div>

          <div>
            <p className="text-sm font-medium text-slate-900">
              {ticket.customer}
            </p>

            <p className="mt-0.5 text-xs text-slate-400">
              {ticket.email}
            </p>
          </div>
        </div>
      </td>

      {/* CATEGORY */}

      <td className="px-5 py-4">
        <CategoryBadge category={ticket.category} />
      </td>

      {/* PRIORITY */}

      <td className="px-5 py-4">
        <PriorityBadge priority={ticket.priority} />
      </td>

      {/* STATUS */}

      <td className="px-5 py-4">
        <StatusBadge status={ticket.status} />
      </td>

      {/* ASSIGNED */}

      <td className="px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-500">
            <User className="h-3.5 w-3.5" />
          </div>

          <span className="text-sm text-slate-700">
            {ticket.assignedTo}
          </span>
        </div>
      </td>

      {/* UPDATED */}

      <td className="px-5 py-4">
        <div className="flex items-center gap-1.5 whitespace-nowrap text-xs text-slate-500">
          <CalendarDays className="h-3.5 w-3.5 text-slate-400" />

          {ticket.updatedAt}
        </div>
      </td>

      {/* ACTION */}

      <td className="px-5 py-4 text-right">
        <div className="flex items-center justify-end gap-2">
          <Link
            href={`/admin/tickets/${ticket.id}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            <Eye className="h-3.5 w-3.5" />
            View
          </Link>

          <button className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-100">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}

/* =========================================================
   SUMMARY CARD
========================================================= */

function SummaryCard({
  title,
  value,
  subtitle,
  icon,
  iconClass,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  iconClass: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            {value}
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            {subtitle}
          </p>
        </div>

        <div
          className={`rounded-xl p-2.5 ${iconClass}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   STATUS BADGE
========================================================= */

function StatusBadge({
  status,
}: {
  status: TicketStatus;
}) {
  const config: Record<
    TicketStatus,
    {
      className: string;
      icon: React.ReactNode;
    }
  > = {
    Open: {
      className: "bg-blue-50 text-blue-700",
      icon: <AlertCircle className="h-3.5 w-3.5" />,
    },

    "In Progress": {
      className:
        "bg-violet-50 text-violet-700",
      icon: <Clock3 className="h-3.5 w-3.5" />,
    },

    "Waiting for Customer": {
      className:
        "bg-amber-50 text-amber-700",
      icon: (
        <MessageSquare className="h-3.5 w-3.5" />
      ),
    },

    Resolved: {
      className:
        "bg-emerald-50 text-emerald-700",
      icon: (
        <CheckCircle2 className="h-3.5 w-3.5" />
      ),
    },

    Closed: {
      className:
        "bg-slate-100 text-slate-600",
      icon: <XCircle className="h-3.5 w-3.5" />,
    },
  };

  const item = config[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${item.className}`}
    >
      {item.icon}
      {status}
    </span>
  );
}

/* =========================================================
   PRIORITY BADGE
========================================================= */

function PriorityBadge({
  priority,
}: {
  priority: TicketPriority;
}) {
  const config: Record<
    TicketPriority,
    {
      className: string;
      icon: React.ReactNode;
    }
  > = {
    Low: {
      className: "bg-slate-100 text-slate-600",
      icon: <ArrowDown className="h-3.5 w-3.5" />,
    },

    Medium: {
      className: "bg-blue-50 text-blue-700",
      icon: <Minus className="h-3.5 w-3.5" />,
    },

    High: {
      className: "bg-orange-50 text-orange-700",
      icon: <ArrowUp className="h-3.5 w-3.5" />,
    },

    Urgent: {
      className: "bg-red-50 text-red-700",
      icon: <AlertCircle className="h-3.5 w-3.5" />,
    },
  };

  const item = config[priority];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${item.className}`}
    >
      {item.icon}
      {priority}
    </span>
  );
}

/* =========================================================
   CATEGORY BADGE
========================================================= */

function CategoryBadge({
  category,
}: {
  category: TicketCategory;
}) {
  const config: Record<
    TicketCategory,
    string
  > = {
    Billing:
      "bg-emerald-50 text-emerald-700",
    Technical:
      "bg-violet-50 text-violet-700",
    Account:
      "bg-blue-50 text-blue-700",
    Campaign:
      "bg-orange-50 text-orange-700",
    "Voice Call":
      "bg-pink-50 text-pink-700",
    Other:
      "bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${config[category]}`}
    >
      {category}
    </span>
  );
}

/* =========================================================
   FILTER SELECT
========================================================= */

function FilterSelect({
  value,
  onChange,
  options,
  icon,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  icon?: React.ReactNode;
}) {
  return (
    <div className="relative">
      {icon && (
        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </div>
      )}

      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className={`h-10 appearance-none rounded-xl border border-slate-200 bg-white pr-9 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${
          icon ? "pl-9" : "pl-3"
        }`}
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>

      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
    </div>
  );
}

/* =========================================================
   TABLE HEAD
========================================================= */

function TableHead({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <th
      className={`px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 ${
        align === "right"
          ? "text-right"
          : "text-left"
      }`}
    >
      {children}
    </th>
  );
}

/* =========================================================
   HELPERS
========================================================= */

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}