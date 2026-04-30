// app/about/layout.tsx
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tentang PT Hais Prima Indonesia - Supplier Besi Baja Terpercaya",
  description: "Pelajari perjalanan dan komitmen PT Hais Prima Indonesia sebagai distributor besi baja, stainless steel, dan material industri terpercaya di Indonesia sejak 2015.",
  openGraph: {
    title: "Tentang PT Hais Prima Indonesia - Supplier Besi Baja",
    description: "Pelajari perjalanan dan komitmen PT Hais Prima Indonesia dalam menyediakan material industri berkualitas.",
    url: "https://haisindonesia.com/about",
    siteName: "PT Hais Prima Indonesia",
    images: ["https://haisindonesia.com/og-image.jpg"],
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://haisindonesia.com/about",
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
