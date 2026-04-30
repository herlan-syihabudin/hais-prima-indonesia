// layout.tsx yang sudah diperbaiki

import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

// Inter untuk body text
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

// Playfair Display untuk headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT Hais Prima Indonesia - Supplier Besi & Baja Terpercaya",
  description: "Supplier besi dan baja terpercaya di Indonesia. Menyediakan besi beton, hollow, WF, H-Beam, wiremesh, dan plat besi berkualitas dengan harga kompetitif.",
  keywords: "supplier besi, baja, besi beton, hollow, wf beam, h beam, wiremesh, plat besi, konstruksi",
  openGraph: {
    title: "PT Hais Prima Indonesia",
    description: "Supplier Besi & Baja Terpercaya",
    images: ["/og-image.jpg"],
    url: "https://haisprima.com",
    siteName: "PT Hais Prima Indonesia",
    locale: "id_ID",
    type: "website",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://haisprima.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0EA5E9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // HAPUS .variable
    <html lang="id">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
