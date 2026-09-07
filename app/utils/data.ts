import { CreditCard, LayoutDashboard, Megaphone, Receipt, Settings, Ticket, Users } from "lucide-react";

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