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


export interface VoiceFile {
  id: number;
  sn: number;
  name: string;
  campaignName: string;
  format: string;
  size: string;
  url: string;
}

export interface VoiceFileResponse {
  success: boolean;
  total: number;
  data: VoiceFile[];
}

export interface UploadVoiceFileResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    name: string;
    format: string;
    size: string;
    url: string;
  };
}

export interface DeleteVoiceFileResponse {
  success: boolean;
  message: string;
}

export interface VoiceFileSearchParams {
  search?: string;
  filter?: string;
}
export interface Subscription {
  id: number;
  company_id: number;
  plan_id: number;
  status: string;
  calls_used_this_period: number;
  current_period_start: string;
  current_period_end: string;
  created_at: string;
  updated_at: string;
  plan_name: string;
  price_bdt: number;
  monthly_call_limit: number;
  max_concurrent_calls: number;
  company_name: string;
  company_email: string;
  users: Array<{
    id: number;
    name: string;
    email: string;
    role: string;
  }>;
}