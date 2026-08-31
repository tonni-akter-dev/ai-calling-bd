import React from "react";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8FAFC] text-slate-600 py-16 text-sm border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-slate-200 pb-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white text-base shadow-md shadow-blue-500/20">
              C
            </div>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">
              CALLFLOW
            </span>
          </div>
          <p className="text-xs leading-relaxed text-slate-500">
            Cloud-based IPTSP & enterprise communication provider helping businesses scale calls, cloud PBX, and toll-free reach seamlessly.
          </p>
          <div className="flex items-center space-x-3 text-xs text-slate-500 pt-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>99.99% Uptime Guaranteed</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-slate-900 font-bold text-sm mb-4">Quick Links</h4>
          <ul className="space-y-3 text-xs">
            <li><Link href="#" className="hover:text-blue-600 transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-blue-600 transition-colors">Services</Link></li>
            <li><Link href="#" className="hover:text-blue-600 transition-colors">Pricing Plans</Link></li>
            <li><Link href="#" className="hover:text-blue-600 transition-colors">Call Rate List</Link></li>
            <li><Link href="#" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-slate-900 font-bold text-sm mb-4">Solutions</h4>
          <ul className="space-y-3 text-xs">
            <li><Link href="#" className="hover:text-blue-600 transition-colors">Bulk Voice Call</Link></li>
            <li><Link href="#" className="hover:text-blue-600 transition-colors">Cloud PBX System</Link></li>
            <li><Link href="#" className="hover:text-blue-600 transition-colors">Cloud Recording</Link></li>
            <li><Link href="#" className="hover:text-blue-600 transition-colors">Toll-Free 1800 Number</Link></li>
            <li><Link href="#" className="hover:text-blue-600 transition-colors">Voice API Integration</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-xs">
          <h4 className="text-slate-900 font-bold text-sm mb-4">Contact Support</h4>
          <p className="flex items-center text-slate-700">
            <Phone className="w-4 h-4 mr-2.5 text-blue-600 shrink-0" />
            <span className="font-semibold text-slate-900">09612 000 000</span>
          </p>
          <p className="flex items-center text-slate-700">
            <Mail className="w-4 h-4 mr-2.5 text-blue-600 shrink-0" />
            <span>support@callflow.com</span>
          </p>
          <p className="flex items-start text-slate-700">
            <MapPin className="w-4 h-4 mr-2.5 text-blue-600 shrink-0 mt-0.5" />
            <span>Dhaka, Bangladesh</span>
          </p>
          <p className="flex items-center text-slate-700">
            <Globe className="w-4 h-4 mr-2.5 text-blue-600 shrink-0" />
            <span>www.callflow.com</span>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-4 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} CallFlow IPTSP. All rights reserved.</p>

        {/* Payment Badges */}
        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-xs">
          <span className="text-[10px] text-slate-500 font-medium mr-1">Secured Payments:</span>
          <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono font-medium">bKash</span>
          <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono font-medium">Nagad</span>
          <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono font-medium">VISA</span>
          <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono font-medium">MasterCard</span>
        </div>

        <div className="flex gap-4">
          <Link href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-slate-800 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};