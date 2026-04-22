// src/app/page.tsx
"use client";

import Hero from "@/components/home/Hero";
import BusinessLines from "@/components/home/BusinessLines";
import ProductHighlights from "@/components/home/ProductHighlights";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProjectPreview from "@/components/home/ProjectPreview";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessLines />        {/* Langsung tampilkan 3 lini bisnis */}
      <ProductHighlights />    {/* Preview produk unggulan */}
      <WhyChooseUs />          {/* Kenapa pilih kami */}
      <ProjectPreview />       {/* Portfolio proyek */}
      <CTASection />          {/* Hubungi kami */}
    </>
  );
}
