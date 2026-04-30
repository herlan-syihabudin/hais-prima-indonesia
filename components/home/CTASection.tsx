"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative text-center z-10"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs tracking-wider text-white/90">READY TO START</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact" size="lg" variant="white">
              Hubungi Kami Sekarang
            </Button>
            <Button href="/products" size="lg" variant="outline-white">
              Lihat Produk
            </Button>
          </div>
          
          {/* Trust badge */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-white/70">
            <span className="flex items-center gap-1">✓ Fast Response</span>
            <span className="flex items-center gap-1">✓ Best Price</span>
            <span className="flex items-center gap-1">✓ SNI Certified</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
