"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle, FaIndustry, FaShieldAlt, FaBoxes } from "react-icons/fa";

export default function Hero() {
  const [stats] = useState([
    { label: "Berdiri Sejak", value: "2015", icon: FaIndustry },
    { label: "Proyek Tersuplai", value: "500+", icon: FaBoxes },
    { label: "Kepuasan Klien", value: "98%", icon: FaCheckCircle },
  ]);

  const capabilities = [
    "Material Besi & Baja (WF, H-Beam, Plate, Siku, UNP, Pipa Besi, Pipa Galv)",
    "Material Stainless Steel SUS 304 (Plate, Pipa, Siku, UNP)",
    "Pipa Seamless SCH 40 & SCH 80",
    "Fitting & Flange (Carbon Steel & Stainless Steel)",
    "Warehouse Racking System (Pallet Racking, Heavy Duty, Mezzanine)",
    "Atap UPVC & Aksesoris (Lisplang, Talang Air)",
  ];

  const trustPoints = [
    "Material sesuai standar SNI & internasional (ASTM, JIS)",
    "Pendampingan pengadaan berbasis proyek (project-based)",
    "Melayani sektor industri, konstruksi, dan infrastruktur",
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-besi-1.jpg"
          alt="Supplier Material Konstruksi & Industri"
          fill
          className="object-cover brightness-90"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
      </div>

      <Container>
        <div className="relative z-10 text-white py-12 md:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight max-w-5xl">
              Integrated Steel & 
              <span className="block text-cyan-400">
                Industrial Supply Solutions
              </span>
            </h1>

            {/* Sub Headline */}
            <p className="text-base sm:text-lg md:text-xl mt-4 md:mt-6 text-gray-200 max-w-3xl">
              Mitra pengadaan bergerak dibidang All steel Material, Stainless Steel, 
              Warehouse Racking Provider, dan Atap industri untuk kebutuhan proyek 
              skala kecil hingga besar.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 md:mt-8">
              <Button href="/contact" size="lg">
                Minta Penawaran
              </Button>
              <Button href="/divisions/steel" variant="outline" size="lg">
                Lihat Produk
              </Button>
            </div>

            {/* Trust Points - Grid lebih rapi di mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-8 md:mt-10">
              {trustPoints.map((item, i) => (
                <div key={i} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-gray-200 bg-white/5 backdrop-blur-sm p-2.5 md:p-3 rounded-lg">
                  <FaShieldAlt className="text-cyan-400 mt-0.5 flex-shrink-0 text-sm md:text-base" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Core Capabilities */}
            <div className="mt-8 md:mt-10 border-t border-white/20 pt-5 md:pt-6">
              <h3 className="text-xs md:text-sm tracking-widest text-gray-300 mb-3 md:mb-4">
                LAYANAN & PRODUK KAMI
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-gray-200 text-xs md:text-sm bg-white/5 backdrop-blur-sm p-2 md:p-2.5 rounded-lg">
                    <FaCheckCircle className="text-cyan-400 flex-shrink-0 mt-0.5 text-xs md:text-sm" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-6 mt-8 md:mt-10">
              {stats.map((stat, i) => (
                <div key={i} className="text-left bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-xl">
                  <stat.icon className="text-cyan-400 text-lg md:text-2xl mb-1 md:mb-2" />
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-300 uppercase tracking-wide mt-0.5 md:mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </Container>
    </section>
  );
}
