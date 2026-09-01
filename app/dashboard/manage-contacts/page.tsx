"use client";

import React, { useState } from "react";
import {
  Users,
  UserPlus,
  Upload,
  Search,
  Trash2,
  Edit3,
  X,
  CheckCircle2,
  AlertCircle,
  Tag,
  Phone,
  Mail,
} from "lucide-react";

interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
  group: string;
  status: "Active" | "Unsubscribed" | "Bounced";
  dateAdded: string;
}

export default function ManageContactsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedGroupFilter, setSelectedGroupFilter] = useState("All");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactGroup, setContactGroup] = useState("VIP Customers");

  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1,
      name: "Rahim Ahmed",
      phone: "+8801711002233",
      email: "rahim.ahmed@example.com",
      group: "VIP Customers",
      status: "Active",
      dateAdded: "01 Sep 2026",
    },
    {
      id: 2,
      name: "Karim Chowdhury",
      phone: "+8801819998877",
      email: "karim.c@example.com",
      group: "Promo Subscribers",
      status: "Active",
      dateAdded: "30 Aug 2026",
    },
    {
      id: 3,
      name: "Tania Sultana",
      phone: "+8801912345678",
      email: "tania.s@example.com",
      group: "Inactive Users",
      status: "Unsubscribed",
      dateAdded: "25 Aug 2026",
    },
    {
      id: 4,
      name: "Naimur Rahman",
      phone: "+8801611223344",
      email: "naimur@example.com",
      group: "VIP Customers",
      status: "Bounced",
      dateAdded: "20 Aug 2026",
    },
  ]);

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.phone.includes(search) ||
      contact.email.toLowerCase().includes(search.toLowerCase());
    const matchesGroup =
      selectedGroupFilter === "All" || contact.group === selectedGroupFilter;
    return matchesSearch && matchesGroup;
  });

  const handleAddContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone) return;

    const newContact: Contact = {
      id: Date.now(),
      name: contactName,
      phone: contactPhone,
      email: contactEmail || "N/A",
      group: contactGroup,
      status: "Active",
      dateAdded: "01 Sep 2026",
    };

    setContacts([newContact, ...contacts]);
    setIsModalOpen(false);
    setContactName("");
    setContactPhone("");
    setContactEmail("");
  };

  const handleDelete = (id: number) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto bg-slate-50 min-h-screen p-4 md:p-6 text-slate-800">
      {/* ================= Header ================= */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-900 sm:text-2xl tracking-tight">
              Manage Contacts
            </h1>
            <p className="mt-0.5 text-xs text-slate-500 font-medium">
              Organize target customer phone lists for voice & SMS broadcasts.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition shadow-2xs">
            <Upload className="h-4 w-4 text-slate-500" />
            Import CSV
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-blue-700 transition"
          >
            <UserPlus className="h-4 w-4" />
            Add Contact
          </button>
        </div>
      </div>

      {/* ================= Key Metrics / Stats ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Total Contacts
          </span>
          <p className="text-xl font-black text-slate-900 mt-1">{contacts.length}</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
            Active Reachable
          </span>
          <p className="text-xl font-black text-emerald-600 mt-1">
            {contacts.filter((c) => c.status === "Active").length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
            Unsubscribed
          </span>
          <p className="text-xl font-black text-amber-600 mt-1">
            {contacts.filter((c) => c.status === "Unsubscribed").length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600">
            Bounced / Invalid
          </span>
          <p className="text-xl font-black text-rose-600 mt-1">
            {contacts.filter((c) => c.status === "Bounced").length}
          </p>
        </div>
      </div>

      {/* ================= Contacts Table & Filter Card ================= */}
      <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
        {/* Search & Action Bar */}
        <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-bold text-slate-900 tracking-wide text-base">
              Contact Directory
            </h2>
            <p className="mt-0.5 text-xs text-slate-500 font-medium">
              Showing {filteredContacts.length} contacts
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, phone, or email..."
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-9 pr-4 text-xs font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white sm:w-70"
              />
            </div>

            {/* Filter by Group Dropdown */}
            <select
              value={selectedGroupFilter}
              onChange={(e) => setSelectedGroupFilter(e.target.value)}
              className="h-10 rounded-xl border border-slate-200 bg-white px-3.5 text-xs font-bold text-slate-700 outline-none transition focus:border-blue-600"
            >
              <option value="All">All Groups</option>
              <option value="VIP Customers">VIP Customers</option>
              <option value="Promo Subscribers">Promo Subscribers</option>
              <option value="Inactive Users">Inactive Users</option>
            </select>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80 text-slate-400 font-bold uppercase tracking-wider">
                <th className="px-6 py-3.5 w-16 text-center">S.N.</th>
                <th className="px-6 py-3.5">CONTACT NAME</th>
                <th className="px-6 py-3.5">PHONE NUMBER</th>
                <th className="px-6 py-3.5">EMAIL</th>
                <th className="px-6 py-3.5">GROUP</th>
                <th className="px-6 py-3.5">STATUS</th>
                <th className="px-6 py-3.5 text-right">ACTION</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredContacts.length > 0 ? (
                filteredContacts.map((contact, idx) => (
                  <tr
                    key={contact.id}
                    className="hover:bg-slate-50/70 transition duration-150"
                  >
                    <td className="px-6 py-4 font-mono font-bold text-slate-500 text-center">
                      {idx + 1}
                    </td>

                    <td className="px-6 py-4 font-bold text-slate-900">
                      {contact.name}
                    </td>

                    <td className="px-6 py-4 font-mono font-bold text-slate-800">
                      <div className="flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-slate-400" />
                        <span>{contact.phone}</span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-slate-400" />
                        <span>{contact.email}</span>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-bold text-slate-700">
                        <Tag className="h-3 w-3 text-slate-400" />
                        {contact.group}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      {contact.status === "Active" && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200/80 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                          Active
                        </span>
                      )}
                      {contact.status === "Unsubscribed" && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-amber-200/80 bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-amber-700">
                          <AlertCircle className="h-3 w-3 text-amber-600" />
                          Unsubscribed
                        </span>
                      )}
                      {contact.status === "Bounced" && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-rose-200/80 bg-rose-50 px-2.5 py-1 text-[10px] font-bold text-rose-700">
                          <AlertCircle className="h-3 w-3 text-rose-600" />
                          Bounced
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-4 text-right">
                      <div className="inline-flex items-center justify-end gap-2">
                        <button className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition">
                          <Edit3 className="h-3.5 w-3.5 text-slate-500" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(contact.id)}
                          className="flex items-center gap-1 rounded-lg border border-rose-200 bg-rose-50 px-2.5 py-1.5 text-xs font-bold text-rose-600 hover:bg-rose-100 transition"
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
                  <td colSpan={7}>
                    <div className="flex min-h-62.5 flex-col items-center justify-center p-8 text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                        <Users className="h-6 w-6" />
                      </div>
                      <h3 className="mt-3 font-bold text-slate-700 text-sm">
                        No contacts found
                      </h3>
                      <p className="mt-1 max-w-sm text-xs text-slate-500">
                        Add individual contacts or upload a CSV file to populate your list.
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
          {filteredContacts.map((contact, idx) => (
            <div
              key={contact.id}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xs font-bold text-slate-900">
                    {contact.name}
                  </h3>
                  <p className="text-[11px] font-mono font-bold text-slate-600 mt-0.5">
                    {contact.phone}
                  </p>
                </div>
                <span className="font-mono text-xs font-bold text-slate-400">
                  #{idx + 1}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                  {contact.group}
                </span>

                {contact.status === "Active" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                    Active
                  </span>
                )}
                {contact.status === "Unsubscribed" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                    Unsubscribed
                  </span>
                )}
                {contact.status === "Bounced" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-bold text-rose-700">
                    Bounced
                  </span>
                )}
              </div>

              <div className="flex items-center justify-end gap-2 border-t border-slate-100 pt-3">
                <button className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-700">
                  <Edit3 className="h-3.5 w-3.5" />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="flex items-center gap-1 rounded-lg border border-rose-200 bg-rose-50 px-2.5 py-1 text-xs font-bold text-rose-600"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= Add Contact Modal ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="w-full max-w-125 rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <div>
                <h2 className="text-base font-extrabold text-slate-900 tracking-tight">
                  Add New Contact
                </h2>
                <p className="mt-0.5 text-xs text-slate-500 font-medium">
                  Add an individual record to your recipient list.
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
            <form onSubmit={handleAddContact} className="p-6 space-y-4">
              {/* Name */}
              <div>
                <label className="mb-1.5 block text-xs font-bold text-slate-700">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g., Rahim Ahmed"
                  className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 text-xs text-slate-900 font-medium outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-1.5 block text-xs font-bold text-slate-700">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="+8801700000000"
                  className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 text-xs font-mono text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-1.5 block text-xs font-bold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 text-xs text-slate-900 font-medium outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white"
                />
              </div>

              {/* Group */}
              <div>
                <label className="mb-1.5 block text-xs font-bold text-slate-700">
                  Target Group
                </label>
                <select
                  value={contactGroup}
                  onChange={(e) => setContactGroup(e.target.value)}
                  className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3 text-xs font-bold text-slate-700 outline-none transition focus:border-blue-600"
                >
                  <option value="VIP Customers">VIP Customers</option>
                  <option value="Promo Subscribers">Promo Subscribers</option>
                  <option value="Inactive Users">Inactive Users</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-xs font-bold text-white shadow-xs hover:bg-blue-700 transition"
                >
                  <UserPlus className="h-4 w-4" />
                  Save Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}