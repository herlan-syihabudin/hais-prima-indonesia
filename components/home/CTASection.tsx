"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20">
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
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik
          </p>
          <Button href="/contact" size="lg" variant="white">
            Hubungi Kami Sekarang
          </
