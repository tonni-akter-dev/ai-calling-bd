import "./globals.css";
import React from "react";
import { ReduxProvider } from "./redux/Providers";

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
      <body className="antialiased">
        <ReduxProvider>{children} </ReduxProvider>
     </body>
    </html>
  );
}