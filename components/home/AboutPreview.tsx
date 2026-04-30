"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column - FIXED responsive */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[300px] md:h-[400px] rounded-xl shadow-industrial overflow-hidden"
          >
            <Image
              src="/images/about-warehouse.jpg"
              alt="Warehouse PT Hais Prima Indonesia"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-3 py-1 mb-4">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
              <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                PROFESSIONAL SUPPLIER
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Tentang <span className="text-primary-500">PT Hais Prima Indonesia</span>
            </h2>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              Perusahaan yang bergerak di bidang distribusi besi, baja, dan material industri 
              terpercaya di Indonesia. Berdiri sejak 2015, kami telah melayani ribuan pelanggan 
              dari berbagai sektor industri, konstruksi, dan manufaktur.
            </p>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Kami berkomitmen untuk menyediakan material bersertifikat SNI & standar internasional 
              dengan harga kompetitif, pengiriman tepat waktu, dan dukungan teknis untuk setiap proyek.
            </p>
            
            <Button href="/about" variant="primary" icon={<FaArrowRight />} iconPosition="right">
              Selengkapnya
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
