// app/contact/layout.tsx
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Hubungi Kami - Konsultasi Besi Baja | PT Hais Prima Indonesia",
  description: "Butuh penawaran harga atau konsultasi produk besi baja, stainless steel, warehouse racking, dan atap UPVC? Hubungi tim CS kami di Karawang. Respon cepat dalam 1x24 jam.",
  keywords: "kontak, customer service, konsultasi besi baja, penawaran harga, alamat kantor karawang",
  openGraph: {
    title: "Hubungi PT Hais Prima Indonesia - Konsultasi Material Industri",
    description: "Tim support kami siap membantu konsultasi teknis, permintaan penawaran, dan dukungan proyek Anda. Chat via WhatsApp atau kirim email.",
    url: "https://haisindonesia.com/contact",
    siteName: "PT Hais Prima Indonesia",
    images: [
      {
        url: "https://haisindonesia.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PT Hais Prima Indonesia - Kontak & Customer Support",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://haisindonesia.com/contact",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
