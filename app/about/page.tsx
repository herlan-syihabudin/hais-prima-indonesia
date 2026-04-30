// src/app/about/page.tsx
"use client";

import { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FaHandshake, 
  FaStar, 
  FaLightbulb, 
  FaUsers,
  FaCertificate,
  FaHardHat,
  FaTruck,
  FaChartLine,
  FaBuilding,
  FaIndustry,
  FaCheckCircle
} from "react-icons/fa";

// ========== METADATA UNTUK SEO ==========
export const metadata: Metadata = {
  title: "Tentang PT Hais Prima Indonesia - Supplier Besi Baja Terpercaya",
  description: "Pelajari perjalanan dan komitmen PT Hais Prima Indonesia sebagai distributor besi baja, stainless steel, dan material industri terpercaya di Indonesia sejak 2015.",
  keywords: "tentang kami, supplier besi baja, distributor besi, perusahaan besi karawang, profil perusahaan",
  openGraph: {
    title: "Tentang PT Hais Prima Indonesia - Supplier Besi Baja",
    description: "Pelajari perjalanan dan komitmen PT Hais Prima Indonesia dalam menyediakan material industri berkualitas.",
    url: "https://haisindonesia.com/about",
    siteName: "PT Hais Prima Indonesia",
    images: [
      {
        url: "https://haisindonesia.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PT Hais Prima Indonesia - Tentang Kami",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://haisindonesia.com/about",
  },
};

export default function AboutPage() {
  const values = [
    {
      title: "Integritas",
      description: "Kami berkomitmen untuk selalu jujur dan transparan dalam setiap transaksi dan pengadaan material.",
      icon: FaHandshake,
      color: "text-primary-500",
    },
    {
      title: "Kualitas",
      description: "Hanya produk bersertifikat SNI & standar internasional yang kami supply untuk kepuasan pelanggan.",
      icon: FaStar,
      color: "text-accent-500",
    },
    {
      title: "Inovasi",
      description: "Terus berinovasi dalam solusi material dan sistem pengadaan untuk efisiensi proyek.",
      icon: FaLightbulb,
      color: "text-secondary-500",
    },
    {
      title: "Kemitraan",
      description: "Membangun hubungan jangka panjang dengan client, supplier, dan stakeholder industri.",
      icon: FaUsers,
      color: "text-primary-500",
    },
  ];

  const certifications = [
    { icon: FaCertificate, label: "ISO 9001:2015", desc: "Quality Management" },
    { icon: FaHardHat, label: "EPC Ready", desc: "Tender Support" },
    { icon: FaTruck, label: "Nationwide", desc: "Logistics Coverage" },
    { icon: FaCheckCircle, label: "SNI Certified", desc: "Material Standard" },
  ];

  const stats = [
    { value: "2015", label: "Tahun Berdiri", icon: FaChartLine },
    { value: "500+", label: "Proyek Selesai", icon: FaBuilding },
    { value: "200+", label: "Klien Aktif", icon: FaIndustry },
    { value: "98%", label: "Kepuasan Klien", icon: FaCheckCircle },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
              <FaHardHat className="text-white/80 text-xs" />
              <span className="text-xs tracking-wider text-white/90">EST. 2015</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
            <p className="text-lg text-primary-100 max-w-2xl">
              Pelajari lebih lanjut tentang perjalanan, komitmen, dan kapabilitas PT Hais Prima Indonesia
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <stat.icon className="text-primary-500 text-2xl mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Company Profile - dengan H2 */}
      <section className="section-padding">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about-warehouse.jpg"
                  alt="Gudang PT Hais Prima Indonesia - Warehouse dengan kapasitas 5.000+ ton besi baja"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm font-mono">Gudang Berstandar</p>
                    <p className="text-xs text-white/70">Kapasitas 5.000+ tons</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-3 py-1 mb-4">
                <FaBuilding className="text-primary-500 text-xs" />
                <span className="text-xs font-semibold text-primary-600">PROFILE</span>
              </div>
              {/* H2 untuk Company Profile */}
              <h2 className="text-3xl font-bold mb-4">PT Hais Prima Indonesia</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Didirikan pada tahun 2015, <strong className="text-primary-600">PT Hais Prima Indonesia</strong> telah menjadi salah satu
                distributor <strong className="text-primary-600">besi baja</strong>, <strong className="text-primary-600">stainless steel</strong>, dan material industri terkemuka di Indonesia. 
                Kami berkomitmen untuk menyediakan material konstruksi berkualitas tinggi dengan harga kompetitif.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Dengan pengalaman lebih dari 9 tahun, kami telah melayani 500+ proyek,
                mulai dari pembangunan infrastruktur, gedung bertingkat, pabrik, 
                hingga warehouse distribution center di seluruh Indonesia.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Visi kami adalah menjadi mitra terpercaya dalam pembangunan Indonesia melalui
                penyediaan material bersertifikat, layanan unggul, dan dukungan teknis 
                untuk kebutuhan proyek skala kecil hingga EPC.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Certification Row */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <Container>
          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <cert.icon className="text-primary-500 text-xl" />
                <div>
                  <div className="text-sm font-semibold text-gray-800">{cert.label}</div>
                  <div className="text-xs text-gray-500">{cert.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Values - dengan H2 */}
      <section className="section-padding">
        <Container>
          <SectionTitle
            title="Nilai Perusahaan"
            subtitle="Nilai-nilai yang menjadi fondasi kami dalam memberikan pelayanan terbaik"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center group hover:shadow-md transition-all"
              >
                <div className={`${value.color} text-4xl mb-4 flex justify-center group-hover:scale-110 transition-transform`}>
                  <value.icon />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Siap Memulai Proyek Anda?</h2>
            <p className="text-primary-100 mb-8">
              Konsultasikan kebutuhan material Anda dengan tim engineering kami
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Hubungi Kami
              </Link>
              <Link
                href="/products"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Lihat Produk Besi Baja
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
