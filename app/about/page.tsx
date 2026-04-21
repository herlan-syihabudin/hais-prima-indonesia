"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    {
      title: "Integritas",
      description: "Kami berkomitmen untuk selalu jujur dan transparan dalam setiap transaksi.",
      icon: "🤝",
    },
    {
      title: "Kualitas",
      description: "Hanya produk terbaik yang kami supply untuk kepuasan pelanggan.",
      icon: "⭐",
    },
    {
      title: "Inovasi",
      description: "Terus berinovasi untuk memberikan solusi terbaik bagi pelanggan.",
      icon: "💡",
    },
    {
      title: "Kemitraan",
      description: "Membangun hubungan jangka panjang yang saling menguntungkan.",
      icon: "🤝",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
            <p className="text-lg text-blue-100 max-w-2xl">
              Pelajari lebih lanjut tentang perjalanan dan komitmen PT Hais Prima Indonesia
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="section-padding">
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
                alt="Warehouse PT Hais Prima Indonesia"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">PT Hais Prima Indonesia</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Didirikan pada tahun 2015, PT Hais Prima Indonesia telah menjadi salah satu
                supplier besi dan baja terkemuka di Indonesia. Kami berkomitmen untuk
                menyediakan material konstruksi berkualitas tinggi dengan harga yang kompetitif.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Dengan pengalaman lebih dari 9 tahun, kami telah melayani ribuan proyek,
                mulai dari pembangunan rumah tinggal hingga gedung bertingkat dan infrastruktur.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Visi kami adalah menjadi mitra terpercaya dalam pembangunan Indonesia melalui
                penyediaan material berkualitas dan layanan yang unggul.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 section-padding">
        <Container>
          <SectionTitle
            title="Nilai Perusahaan"
            subtitle="Nilai-nilai yang menjadi fondasi kami dalam memberikan pelayanan terbaik"
          />
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
