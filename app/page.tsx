"use client";

import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ProductHighlights from "@/components/home/ProductHighlights";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProjectPreview from "@/components/home/ProjectPreview";
import CTASection from "@/components/home/CTASection";
import TrustedPartners from "@/components/home/TrustedPartners";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedPartners />
      <AboutPreview />
      <ProductHighlights />
      <WhyChooseUs />
      <ProjectPreview />
      <CTASection />
    </>
  );
}
