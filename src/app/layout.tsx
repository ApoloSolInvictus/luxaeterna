import type { Metadata } from "next";
import type * as React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Lux Aeterna | Conscious Relationship Intelligence OS",
  description:
    "A futuristic emotional operating system for conscious communication, AI mediation, meditation, self-love, and relational growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
