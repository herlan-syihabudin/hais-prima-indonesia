"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPlay, FaChartLine, FaTruck } from "react-icons/fa";

export default function Hero() {
  const [stats] = useState([
    { label: "Tahun Berdiri", value: "2015", suffix: "", icon: FaChartLine },
    { label: "Proyek Selesai", value: "500+", suffix: "", icon: FaTruck },
    { label: "Klien Puas", value: "98%", suffix: "", icon: FaPlay },
  ]);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background dengan overlay gradien */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-besi.jpg"
          alt="Supplier besi dan baja terpercaya"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <Container>
        <div className="relative z-10 max-w-4xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-400/30">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide">
                LEADING STEEL SUPPLIER IN INDONESIA
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
              Supplier Besi & Baja
            </h1>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              #1 Terpercaya di Indonesia
            </h2>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Mitra strategis untuk proyek infrastruktur, gedung bertingkat, 
              dan konstruksi berat dengan standar kualitas SNI & internasional.
            </p>

            <div className="flex gap-4 flex-wrap mb-12">
              <Button href="/products" size="lg" className="shadow-lg hover:shadow-xl">
                Konsultasi Sekarang
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Hubungi Sales
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-2xl">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center md:text-left"
                >
                  <stat.icon className="text-2xl md:text-3xl text-blue-400 mx-auto md:mx-0 mb-2" />
                  <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-ping"></div>
        </div>
      </div>
    </section>
  );
}
