// src/components/home/BusinessLines.tsx
"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FaIndustry, 
  FaWarehouse, 
  FaHome, 
  FaArrowRight, 
  FaChartLine, 
  FaCheckCircle,
  FaHardHat,
  FaCertificate,
  FaTruck
} from "react-icons/fa";

const businessLines = [
  {
    id: "steel",
    title: "STEEL & STAINLESS DIVISION",
    subTitle: "Material Engineering Supply",
    description: "Distributor bersertifikat untuk carbon steel & stainless steel dengan standar ASTM, JIS, dan SNI. Mendukung proyek EPC, oil & gas, dan konstruksi berat.",
    icon: FaIndustry,
    stats: [
      { label: "Stock Tonnage", value: "5.000+", unit: "tons" },
      { label: "Material Grades", value: "15+", unit: "types" },
      { label: "Certification", value: "ISO/SNI", unit: "" }
    ],
    capabilities: ["Carbon Steel", "Stainless Steel 304/316", "Pressure Vessel Plate"],
    accentColor: "primary",
    link: "/divisions/steel",
  },
  {
    id: "racking",
    title: "WAREHOUSE SOLUTION DIVISION",
    subTitle: "Industrial Storage System",
    description: "Perencanaan, fabrikasi, dan instalasi sistem penyimpanan industrial dengan standar Eropa. Solusi turnkey untuk gudang dan distribution center.",
    icon: FaWarehouse,
    stats: [
      { label: "Project Track Record", value: "200+", unit: "projects" },
      { label: "Load Capacity", value: "5", unit: "tons/level" },
      { label: "Coverage Area", value: "50.000+", unit: "m²" }
    ],
    capabilities: ["Pallet Racking", "Mezzanine Floor", "ASRS Integration"],
    accentColor: "accent",
    link: "/divisions/racking",
  },
  {
    id: "roofing",
    title: "UPVC ROOFING DIVISION",
    subTitle: "Advanced Cladding System",
    description: "Pemasangan atap UPVC premium dengan teknologi anti-UV dan sistem waterproofing. Garansi 10 tahun untuk material & pekerjaan.",
    icon: FaHome,
    stats: [
      { label: "Installation", value: "100.000+", unit: "m²" },
      { label: "Warranty Period", value: "10", unit: "years" },
      { label: "Project Sites", value: "50+", unit: "locations" }
    ],
    capabilities: ["Atap UPVC", "Lisplang", "Talang Air"],
    accentColor: "primary",
    link: "/divisions/roofing",
  },
];

// Helper untuk warna accent
const getAccentClasses = (accent: string) => {
  if (accent === "accent") {
    return {
      badge: "bg-accent-500/10 border-accent-500/20 text-accent-400",
      iconBg: "from-accent-700 to-accent-500",
      border: "border-accent-500/30",
    };
  }
  return {
    badge: "bg-primary-500/10 border-primary-500/20 text-primary-400",
    iconBg: "from-primary-700 to-primary-500",
    border: "border-primary-500/30",
  };
};

export default function BusinessLines() {
  return (
    <section className="section-padding bg-secondary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-500/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 border border-primary-500/20">
              <FaHardHat className="text-primary-400 text-xs" />
              <span className="text-xs font-mono text-primary-400 tracking-wider">EPC READY • TENDER SUPPORT</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Business & Engineering
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400"> Divisions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Solusi engineering terintegrasi dengan dukungan technical documentation untuk kebutuhan tender dan proyek skala nasional
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          {businessLines.map((business, index) => {
            const accent = getAccentClasses(business.accentColor);
            
            return (
              <motion.div
                key={business.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative bg-secondary-800 rounded-2xl overflow-hidden border ${accent.border} hover:border-opacity-100 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
              >
                {/* Card Header */}
                <div className="relative p-6 pb-0">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl" />
                  
                  {/* Division Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${accent.iconBg} flex items-center justify-center shadow-lg`}>
                      <business.icon className="text-white text-2xl" />
                    </div>
                    <div className={`flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full px-2.5 py-1 border ${accent.badge}`}>
                      <FaCertificate className="text-primary-400 text-xs" />
                      <span className="text-[10px] font-mono text-gray-300">CERTIFIED</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                    {business.title}
                  </h3>
                  <p className={`text-xs font-mono ${accent.badge.split(' ')[2]} mb-4`}>
                    {business.subTitle}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {business.description}
                  </p>
                </div>

                {/* Stats Section */}
                <div className="mx-6 p-4 bg-black/30 rounded-xl border border-white/5 mb-6">
                  <div className="grid grid-cols-3 gap-3">
                    {business.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-base md:text-lg font-bold text-white">
                          {stat.value}<span className="text-xs text-gray-400">{stat.unit}</span>
                        </div>
                        <div className="text-[11px] text-gray-400 uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capabilities */}
                <div className="px-6 mb-6">
                  <p className="text-[10px] font-mono text-gray-500 mb-2 tracking-wider">CORE CAPABILITIES</p>
                  <div className="flex flex-wrap gap-2">
                    {business.capabilities.map((cap, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-300 border border-white/10">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="px-6 pb-6 pt-3 border-t border-white/10 mt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaTruck className="text-gray-500 text-xs" />
                      <span className="text-[10px] text-gray-500">Nationwide Delivery</span>
                    </div>
                    <Link
                      href={business.link}
                      className={`inline-flex items-center gap-2 text-sm font-semibold text-white hover:${accent.badge.split(' ')[2]} transition-all group-hover:gap-3`}
                    >
                      <span>Technical Brief</span>
                      <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Corporate Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 border border-white/10">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400 text-xs" />
              <span className="text-xs text-gray-300">ISO 9001:2015 Certified</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <FaHardHat className="text-primary-400 text-xs" />
              <span className="text-xs text-gray-300">Project Documentation Ready</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <FaChartLine className="text-accent-400 text-xs" />
              <span className="text-xs text-gray-300">EPC Tender Support</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
