"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { motion } from "framer-motion";
import { 
  FaTruck, 
  FaMedal, 
  FaHandshake, 
  FaClock, 
  FaWarehouse, 
  FaChartLine 
} from "react-icons/fa";

const benefits = [
  {
    icon: FaTruck,
    title: "Pengiriman Cepat",
    description: "Armada sendiri untuk pengiriman tepat waktu ke seluruh Indonesia",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: FaMedal,
    title: "Kualitas Terjamin",
    description: "Produk bersertifikat SNI dan standar internasional",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: FaHandshake,
    title: "Harga Kompetitif",
    description: "Harga terbaik dengan kualitas premium",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: FaClock,
    title: "Layanan 24/7",
    description: "Tim support siap membantu kapan saja",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: FaWarehouse,
    title: "Stok Melimpah",
    description: "Gudang dengan kapasitas ribuan ton",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: FaChartLine,
    title: "Sudah Terpercaya",
    description: "Melayani 500+ proyek besar nasional",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <SectionTitle
          title="Mengapa Memilih Kami?"
          subtitle="Keunggulan yang menjadi alasan mitra mempercayakan proyeknya kepada kami"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${benefit.bg} p-6 rounded-xl shadow-sm hover:shadow-md transition-all group`}
            >
              <div className="flex items-start gap-4">
                <div className={`${benefit.color} text-3xl group-hover:scale-110 transition-transform`}>
                  <benefit.icon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
