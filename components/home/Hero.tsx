"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-besi.jpg"
          alt="Supplier besi dan baja"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <Container>
        <div className="relative z-10 max-w-3xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm md:text-base font-medium uppercase tracking-[0.2em] text-blue-200">
              PT Hais Prima Indonesia
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Supplier Besi & Baja
            </h1>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-200">
              Terpercaya di Indonesia
            </h2>

            <p className="text-lg md:text-xl text-slate-100 mb-8 max-w-2xl leading-relaxed">
              Menyediakan material konstruksi berkualitas dengan harga kompetitif
              untuk kebutuhan proyek, gudang, pabrik, dan pembangunan infrastruktur.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button href="/products" size="lg">
                Lihat Produk
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Hubungi Kami
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
