"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-besi.jpg"
          alt="Hero Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <Container>
        <div className="relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Supplier Besi & Baja
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
              Terpercaya di Indonesia
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Menyediakan material konstruksi berkualitas dengan harga kompetitif
              untuk pembangunan infrastruktur Indonesia.
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
