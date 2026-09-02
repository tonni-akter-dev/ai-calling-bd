import { Contact } from "../redux/features/apis/contactApi";

export type ContactStatus = "Active" | "Unsubscribed" | "Bounced";

export  type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  group: string;
  status: ContactStatus;
};


export interface ContactMetrics {
  totalContacts: number;
  activeReachable: number;
  unsubscribed: number;
  bounced: number;
}

export interface ContactListResponse {
  contacts: Contact[];
  metrics: ContactMetrics;
}