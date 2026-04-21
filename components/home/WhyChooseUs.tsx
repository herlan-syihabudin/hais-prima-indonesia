"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { motion } from "framer-motion";
import { FaTruck, FaMedal, FaHandshake, FaClock } from "react-icons/fa";

const benefits = [
  {
    icon: FaTruck,
    title: "Pengiriman Cepat",
    description: "Pengiriman tepat waktu ke seluruh Indonesia",
    color: "text-blue-600",
  },
  {
    icon: FaMedal,
    title: "Kualitas Terjamin",
    description: "Produk bersertifikat SNI dan standar internasional",
    color: "text-green-600",
  },
  {
    icon: FaHandshake,
    title: "Harga Kompetitif",
    description: "Harga terbaik dengan kualitas terbaik",
    color: "text-purple-600",
  },
  {
    icon: FaClock,
    title: "Layanan 24/7",
    description: "Tim siap membantu Anda kapan saja",
    color: "text-red-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <SectionTitle
          title="Mengapa Memilih Kami?"
          subtitle="Keunggulan yang membuat kami menjadi mitra terpercaya Anda"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <benefit.icon className={`${benefit.color} text-4xl mx-auto mb-4`} />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
