"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle, FaIndustry, FaShieldAlt, FaBoxes, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  const [stats] = useState([
    { label: "Berdiri Sejak", value: "2015", icon: FaIndustry },
    { label: "Proyek Tersuplai", value: "500+", icon: FaBoxes },
    { label: "Kepuasan Klien", value: "98%", icon: FaCheckCircle },
  ]);

  const coreProducts = [
    "Material Besi & Baja",
    "Stainless Steel SUS 304",
    "Warehouse Racking System",
  ];

  const trustPoints = [
    "Material SNI & Internasional (ASTM, JIS)",
    "Pendampingan Pengadaan Proyek",
    "Melayani Industri, Konstruksi & Infrastruktur",
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background - OPTIMIZED */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-besi-1.jpg"
          alt="PT Hais Prima Indonesia - Supplier Besi Baja & Material Industri Terpercaya"
          fill
          className="object-cover brightness-90"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
      </div>

      <Container maxWidth="7xl">
        <div className="relative z-10 text-white py-8 md:py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge - FIXED warna */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-3 md:mb-4">
              <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-[10px] md:text-xs tracking-wider text-gray-200">SUPPLIER BESI & BAJA TERPERCAYA</span>
            </div>

            {/* Main Headline - FIXED warna */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl">
              Supplier Besi & Baja
              <span className="block text-primary-400">
                Solusi Material Industri
              </span>
            </h1>

            {/* Sub Headline */}
            <p className="text-sm sm:text-base md:text-lg mt-3 md:mt-4 text-gray-200 max-w-2xl leading-relaxed">
              Distributor dan supplier besi baja, stainless steel, serta sistem racking gudang untuk kebutuhan proyek konstruksi, manufaktur, dan infrastruktur di seluruh Indonesia.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mt-4 md:mt-5">
              <Button href="/contact" size="md" icon={<FaArrowRight />} iconPosition="right">
                Konsultasi Gratis
              </Button>
              <Button href="/products" variant="outline-white" size="md">
                Lihat Katalog Produk
              </Button>
            </div>

            {/* Core Products - pill badges - FIXED warna */}
            <div className="flex flex-wrap gap-2 mt-4 md:mt-5">
              {coreProducts.map((item, i) => (
                <span key={i} className="text-xs text-primary-300 bg-primary-500/10 backdrop-blur-sm px-3 py-1 rounded-full border border-primary-500/30">
                  {item}
                </span>
              ))}
            </div>

            {/* Trust Points & Stats */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-5 md:mt-6">
              {/* Trust Points - FIXED warna icon */}
              <div className="space-y-1.5">
                {trustPoints.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-gray-300">
                    <FaShieldAlt className="text-primary-400 text-xs flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats - FIXED warna icon */}
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center bg-white/10 backdrop-blur-sm p-2 md:p-3 rounded-lg">
                    <stat.icon className="text-primary-400 text-base md:text-lg mx-auto mb-0.5" />
                    <div className="text-base md:text-lg lg:text-xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-[8px] md:text-[10px] text-gray-300 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </Container>
    </section>
  );
}
