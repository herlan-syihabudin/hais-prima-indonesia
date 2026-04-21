"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Waskita Karya", logo: "/images/partners/waskita.png" },
  { name: "Pembangunan Jaya", logo: "/images/partners/pembangunan-jaya.png" },
  { name: "Adhi Karya", logo: "/images/partners/adhi.png" },
  { name: "PP Construction", logo: "/images/partners/pp.png" },
  { name: "Total Bangun Persada", logo: "/images/partners/total.png" },
  { name: "Jaya Konstruksi", logo: "/images/partners/jaya.png" },
];

export default function TrustedPartners() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <Container>
        <SectionTitle
          title="Dipercaya oleh"
          subtitle="Mitra terpercaya dalam proyek-proyek besar nasional"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="relative h-16 w-32">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
