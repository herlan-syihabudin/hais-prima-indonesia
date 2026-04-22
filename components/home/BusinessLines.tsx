// src/components/home/BusinessLines.tsx
"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaIndustry, FaWarehouse, FaHome, FaArrowRight } from "react-icons/fa";

const businessLines = [
  {
    id: "steel",
    title: "Material Steel & SUS",
    description: "Distributor lengkap material steel dan stainless steel (SUS) untuk konstruksi dan industri.",
    icon: FaIndustry,
    color: "from-blue-600 to-blue-800",
    bgColor: "bg-blue-50",
    link: "/products?category=Material+Steel",
  },
  {
    id: "racking",
    title: "Warehouse Racking",
    description: "Provider sistem rak gudang profesional: Pallet Racking, Heavy Duty, Mezzanine, Drive-in.",
    icon: FaWarehouse,
    color: "from-purple-600 to-purple-800",
    bgColor: "bg-purple-50",
    link: "/products?category=Warehouse+Racking",
  },
  {
    id: "roofing",
    title: "Atap UPVC",
    description: "Provider atap UPVC modern, tahan cuaca, anti bocor, dan garansi 10 tahun.",
    icon: FaHome,
    color: "from-teal-600 to-teal-800",
    bgColor: "bg-teal-50",
    link: "/products?category=Atap+UPVC",
  },
];

export default function BusinessLines() {
  return (
    <section className="section-padding">
      <Container>
        <SectionTitle
          title="Lini Bisnis Kami"
          subtitle="PT Hais Prima Indonesia hadir dengan 3 lini bisnis untuk memenuhi kebutuhan material dan infrastruktur Anda"
        />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {businessLines.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${business.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group`}
            >
              <div className={`bg-gradient-to-r ${business.color} p-6 text-white`}>
                <business.icon className="text-5xl mb-4" />
                <h3 className="text-2xl font-bold">{business.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{business.description}</p>
                <Link
                  href={business.link}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                >
                  Selengkapnya
                  <FaArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
