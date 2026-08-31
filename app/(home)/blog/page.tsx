/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "What is IP Call? A Complete Guide to Internet Protocol Calling",
      category: "Guide",
      categoryColor: "bg-blue-50 text-blue-600 border-blue-100",
      date: "JUN 15, 2025",
      excerpt:
        "Learn everything about IP calls — how they work, their benefits for businesses, and why companies in Bangladesh are switching to IP calling technology.",
      image: "https://placehold.co/600x350/e2e8f0/1e293b?text=IP+Call+Guide",
      slug: "what-is-ip-call-complete-guide",
    },
    {
      id: 2,
      title: "How to Make IP Calls in Bangladesh: Step-by-Step Guide",
      category: "Tutorial",
      categoryColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
      date: "JUN 10, 2025",
      excerpt:
        "A practical guide on setting up and making IP calls in Bangladesh. Learn about requirements, setup process, and tips for the best calling experience.",
      image: "https://placehold.co/600x350/e2e8f0/1e293b?text=Hardware+Setup",
      slug: "how-to-make-ip-calls-bangladesh",
    },
    {
      id: 3,
      title: "Call Center Solutions in Bangladesh — Everything You Need to Know",
      category: "Industry",
      categoryColor: "bg-amber-50 text-amber-600 border-amber-100",
      date: "JUN 5, 2025",
      excerpt:
        "Discover the best call center solutions available in Bangladesh. Learn about cloud-based systems, costs, features, and how to set up your own call center.",
      image: "https://placehold.co/600x350/e2e8f0/1e293b?text=Call+Center+Solutions",
      slug: "call-center-solutions-bangladesh",
    },
    {
      id: 4,
      title: "IP Call BD Contact Number & Support — How to Reach Us",
      category: "Support",
      categoryColor: "bg-rose-50 text-rose-600 border-rose-100",
      date: "MAY 30, 2025",
      excerpt:
        "Need to contact IPCallBD? Find all our contact details including phone number, WhatsApp, email, and office address. We are here to help 24/7.",
      image: "https://placehold.co/600x350/e2e8f0/1e293b?text=Customer+Support",
      slug: "ip-call-bd-contact-number-support",
    },
    {
      id: 5,
      title: "GP Call Center Number & Alternatives for Business Communication",
      category: "Comparison",
      categoryColor: "bg-indigo-50 text-indigo-600 border-indigo-100",
      date: "MAY 25, 2025",
      excerpt:
        "Looking for GP call center number? Discover alternatives like IPCallBD for professional business communication with advanced features and lower costs.",
      image: "https://placehold.co/600x350/e2e8f0/1e293b?text=Communication+Alternatives",
      slug: "gp-call-center-number-alternatives",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-slate-800">
      {/* 1. Header Hero Banner */}
      <section className="relative bg-[#0b1329] text-white pt-36 pb-28 text-center overflow-hidden">
        {/* Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto font-normal leading-relaxed">
            Expert articles on IP calling, Cloud PBX, and business communication <br className="hidden sm:inline" />
            in Bangladesh.
          </p>
          <div className="mt-5 text-xs text-slate-400 font-medium">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-blue-400">Blog</span>
          </div>
        </div>
      </section>

      {/* 2. Blog Post Grid */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-7 flex flex-col flex-grow justify-between">
                <div>
                  {/* Category & Date */}
                  <div className="flex items-center space-x-3 mb-4">
                    <span
                      className={`text-[11px] font-bold px-3 py-1 rounded-full border ${post.categoryColor}`}
                    >
                      {post.category}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition duration-200 leading-snug mb-3 line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="pt-2 border-t border-slate-50">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs md:text-sm font-semibold text-blue-600 hover:text-blue-800 transition space-x-1"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}