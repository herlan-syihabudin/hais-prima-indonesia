"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/about-warehouse.jpg"
              alt="About Us"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              PT Hais Prima Indonesia adalah perusahaan yang bergerak di bidang
              distribusi besi dan baja. Berdiri sejak 2015, kami telah melayani
              ribuan pelanggan dari berbagai sektor.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Kami berkomitmen untuk menyediakan material berkualitas SNI dengan
              harga yang kompetitif dan pengiriman tepat waktu.
            </p>
            <Button href="/about">Selengkapnya</Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
