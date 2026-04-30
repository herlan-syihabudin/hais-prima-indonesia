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

  // Ringkas jadi 3 kategori utama
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
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-besi-1.jpg"
          alt="Supplier Besi Baja & Material Industri Terpercaya"
          fill
          className="object-cover brightness-90"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <Container maxWidth="7xl">
        <div className="relative z-10 text-white py-16 md:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge - tambahin biar lebih mewah */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-4 md:mb-6">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-xs tracking-wider text-gray-200">SUPPLIER BESI & BAJA TERPERCAYA</span>
            </div>

            {/* Main Headline - SEO killer */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight max-w-5xl">
              Supplier Besi & Baja
              <span className="block text-cyan-400 mt-2">
                Solusi Material Industri
              </span>
            </h1>

            {/* Sub Headline - keyword rich */}
            <p className="text-base sm:text-lg md:text-xl mt-4 md:mt-6 text-gray-200 max-w-2xl leading-relaxed">
              Distributor dan supplier besi baja, stainless steel, serta sistem racking gudang untuk kebutuhan proyek konstruksi, manufaktur, dan infrastruktur di seluruh Indonesia.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 md:mt-8">
              <Button href="/contact" size="lg" icon={<FaArrowRight />} iconPosition="right">
                Konsultasi Gratis
              </Button>
              <Button href="/products" variant="outline" size="lg">
                Lihat Katalog Produk
              </Button>
            </div>

            {/* Core Products - pill badges (lebih ringkas) */}
            <div className="flex flex-wrap gap-2 mt-6 md:mt-8">
              {coreProducts.map((item, i) => (
                <span key={i} className="text-xs md:text-sm text-cyan-300 bg-cyan-500/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-cyan-500/30">
                  {item}
                </span>
              ))}
            </div>

            {/* Trust Points & Stats - 2 column layout */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-10">
              {/* Trust Points - hidden di mobile biar gak rame, muncul di md */}
              <div className="hidden md:block space-y-2">
                {trustPoints.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <FaShieldAlt className="text-cyan-400 text-sm flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats - 3 kolom */}
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-xl">
                    <stat.icon className="text-cyan-400 text-xl md:text-2xl mx-auto mb-1 md:mb-2" />
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wide mt-0.5 md:mt-1">
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
