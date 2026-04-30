// src/app/page.tsx
import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustedPartners from "@/components/home/TrustedPartners";
import BusinessLines from "@/components/home/BusinessLines";
import ProductHighlights from "@/components/home/ProductHighlights";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProjectPreview from "@/components/home/ProjectPreview";
import TestimonialSection from "@/components/home/TestimonialSection";
import CTASection from "@/components/home/CTASection";

// Metadata untuk SEO - pindah dari ProductHighlights ke sini
export const metadata: Metadata = {
  title: "PT Hais Prima Indonesia - Supplier Besi Baja & Material Industri Terpercaya",
  description: "Distributor besi baja, stainless steel, pipa seamless, warehouse racking, dan atap UPVC. SNI Certified, EPC Ready, Melayani proyek konstruksi & industri di seluruh Indonesia.",
  keywords: "supplier besi baja, stainless steel, pipa seamless, warehouse racking, atap upvc, konstruksi, industri, EPC, tender support",
  openGraph: {
    title: "PT Hais Prima Indonesia - Industrial Material Supply",
    description: "Solusi material industri untuk konstruksi, manufaktur, dan infrastruktur",
    url: "https://haisprima.com",
    siteName: "PT Hais Prima Indonesia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PT Hais Prima Indonesia - Supplier Besi Baja",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://haisprima.com",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedPartners />
      <TestimonialSection />
      <BusinessLines />
      <ProductHighlights />
      <WhyChooseUs />
      <ProjectPreview />
      <CTASection />
    </>
  );
}
