// src/app/page.tsx
import { Metadata } from "next";
import LazySection from "@/components/ui/LazySection";
import Hero from "@/components/home/Hero";
import TrustedPartners from "@/components/home/TrustedPartners";
import BusinessLines from "@/components/home/BusinessLines";
import ProductHighlights from "@/components/home/ProductHighlights";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProjectPreview from "@/components/home/ProjectPreview";
import TestimonialSection from "@/components/home/TestimonialSection";
import CTASection from "@/components/home/CTASection";

// Metadata untuk SEO - FIXED
export const metadata: Metadata = {
  title: "PT Hais Prima Indonesia - Supplier Besi Baja & Material Industri Terpercaya",
  description: "Distributor besi baja, stainless steel, pipa seamless, warehouse racking, dan atap UPVC. SNI Certified, EPC Ready, Melayani proyek konstruksi & industri di seluruh Indonesia.",
  keywords: "supplier besi baja, stainless steel, pipa seamless, warehouse racking, atap upvc, konstruksi, industri, EPC, tender support",
  openGraph: {
    title: "PT Hais Prima Indonesia - Industrial Material Supply",
    description: "Solusi material industri untuk konstruksi, manufaktur, dan infrastruktur",
    url: "https://haisindonesia.com", // ← FIXED: ganti dari haisprima.com
    siteName: "PT Hais Prima Indonesia",
    images: [
      {
        url: "https://haisindonesia.com/og-image.jpg", // ← FIXED: absolute URL
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
    google: "Vd8uLdWWa5ezH_VmKSl68JlAYBCpDw7d26Jxjfrc28Q", // ← GANTI dengan kode real dari Search Console
  },
  alternates: {
    canonical: "https://haisindonesia.com", // ← FIXED: ganti dari haisprima.com
  },
};

export default function Home() {
  return (
    <>
      {/* Hero - Priority, No Lazy (above the fold) */}
      <Hero />
      
      {/* TrustedPartners - Still visible, bisa dikasih lazy atau tidak, terserah */}
      <TrustedPartners />

      {/* Lazy Load sections - di bawah fold */}
      <LazySection threshold={0.1}>
        <TestimonialSection />
      </LazySection>

      <LazySection threshold={0.1}>
        <BusinessLines />
      </LazySection>

      <LazySection threshold={0.1}>
        <ProductHighlights />
      </LazySection>

      <LazySection threshold={0.1}>
        <WhyChooseUs />
      </LazySection>

      <LazySection threshold={0.1}>
        <ProjectPreview />
      </LazySection>

      <LazySection threshold={0.1}>
        <CTASection />
      </LazySection>
    </>
  );
}
