import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT Hais Prima Indonesia - Supplier Besi & Baja Terpercaya",
  description: "Supplier besi dan baja terpercaya di Indonesia. Menyediakan besi beton, hollow, WF, H-Beam, wiremesh, dan plat besi berkualitas dengan harga kompetitif.",
  keywords: "supplier besi, baja, besi beton, hollow, wf beam, h beam, wiremesh, plat besi, konstruksi",
  openGraph: {
    title: "PT Hais Prima Indonesia",
    description: "Supplier Besi & Baja Terpercaya",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
