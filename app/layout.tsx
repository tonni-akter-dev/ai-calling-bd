// app/layout.tsx
import "./globals.css";
import React from "react";

export const metadata = {
  title: "  AI Call BD - Business Communication Solutions",
  description: "Cloud PBX, IP Numbers, and VoIP Solutions in Bangladesh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}