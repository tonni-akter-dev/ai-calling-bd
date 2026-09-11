import { CheckCircle2, Clock, CreditCard, InfinityIcon, LayoutDashboard, Megaphone, PhoneCall, Receipt, Settings, Ticket, Users, Volume2 } from "lucide-react";
import { FaqItem } from "./type";

export const GROUPS = [
  "VIP Customers",
  "Promo Subscribers",
  "Inactive Users",
];


export const menu = [
      {
        label: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
      },
      {
        label: "Subscriptions",
        href: "/admin/subscriptions",
        icon: CreditCard,
      },
      {
        label: "Users",
        href: "/admin/users",
        icon: Users,
      },
      {
        label: "Campaigns",
        href: "/admin/campaigns",
        icon: Megaphone,
      },
      {
        label: "Payments",
        href: "/admin/payments",
        icon: Receipt,
      },
      {
        label: "Support Tickets",
        href: "/admin/tickets",
        icon: Ticket,
      },
      {
        label: "Settings",
        href: "/admin/settings",
        icon: Settings,
      },
  
];


export const features = [
  {
    icon: "৳",
    isText: true,
    title: "Call Rate: 40 Paisa + 15% VAT",
    description:
      "One of the most competitive call rates in Bangladesh with transparent billing.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    hoverBg: "group-hover:bg-blue-600",
  },
  {
    icon: InfinityIcon,
    title: "No Recharge Expiry",
    description:
      "Your balance never expires. Use it whenever you need — no pressure, no waste.",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    hoverBg: "group-hover:bg-orange-500",
  },
  {
    icon: Clock,
    title: "Per Second Pulse",
    description:
      "Pay only for the exact seconds you talk. No rounding up, no extra charges.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    hoverBg: "group-hover:bg-emerald-600",
  },
  {
    icon: PhoneCall,
    title: "Free IP-to-IP Calls",
    description:
      "Calls between IP Numbers and Extensions are completely free of charge.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    hoverBg: "group-hover:bg-blue-600",
  },
  {
    icon: CheckCircle2,
    title: "Free Incoming Calls",
    description:
      "Receive unlimited incoming calls without any charges.",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    hoverBg: "group-hover:bg-pink-600",
  },
  {
    icon: Volume2,
    title: "Promotional SMS & Voice",
    description:
      "Send promotional SMS and voice messages directly from your IP number.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    hoverBg: "group-hover:bg-amber-500",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What is IP TSP?",
    answer:
      "IP TSP stands for Internet Protocol Telephony Service Provider. It enables phone calls using an internet connection instead of traditional analog lines.",
  },
  {
    question: "How long does it take to activate an IP TSP?",
    answer:
      "Activation typically happens within minutes after submitting the required documentation.",
  },
  {
    question: "Can I transfer my existing number to your IP TSP?",
    answer:
      "Yes, number porting is supported subject to regulatory verification.",
  },
  {
    question: "What is BTCL and BTRC?",
    answer:
      "BTCL is the state-owned telecommunications vendor, while BTRC is the regulatory commission overseeing telecom services in Bangladesh.",
  },
  {
    question: "Can I use voice call services from outside the country?",
    answer:
      "Yes, with authorized security configurations, you can manage and initiate calls globally via the portal.",
  },
];