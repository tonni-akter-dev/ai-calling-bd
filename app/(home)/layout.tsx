// app/(home)/layout.tsx
import React from "react";
import Header from "../shared/Header"; // Adjust import path based on your folder setup
import { Footer } from "../shared/Footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}