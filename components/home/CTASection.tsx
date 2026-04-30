"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {/* FIXED: ganti variant="white" jadi variant="outline-white" */}
            <Button href="/contact" size="lg" variant="outline-white">
              Hubungi Kami Sekarang
            </Button>
            <Button href="/products" size="lg" variant="outline-white">
              Lihat Produk
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
