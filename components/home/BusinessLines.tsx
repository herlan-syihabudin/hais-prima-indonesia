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
    color: "from-blue-900 to-blue-700",
    bgColor: "bg-gradient-to-br from-slate-900 to-slate-800",
    borderColor: "border-blue-500/30",
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
    color: "from-purple-900 to-purple-700",
    bgColor: "bg-gradient-to-br from-slate-900 to-slate-800",
    borderColor: "border-purple-500/30",
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
    color: "from-teal-900 to-teal-700",
    bgColor: "bg-gradient-to-br from-slate-900 to-slate-800",
    borderColor: "border-teal-500/30",
    link: "/divisions/roofing",
  },
];

export default function BusinessLines() {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <Container>
        {/* Section Header - Corporate Style */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 border border-blue-500/20">
              <FaHardHat className="text-blue-400 text-xs" />
              <span className="text-xs font-mono text-blue-400 tracking-wider">EPC READY • TENDER SUPPORT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Business & Engineering
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Divisions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Solusi engineering terintegrasi dengan dukungan technical documentation untuk kebutuhan tender dan proyek skala nasional
            </p>
          </motion.div>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          {businessLines.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative ${business.bgColor} rounded-2xl overflow-hidden border ${business.borderColor} hover:border-opacity-100 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
            >
              {/* Card Header with Gradient Accent */}
              <div className="relative p-6 pb-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"></div>
                
                {/* Division Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${business.color} flex items-center justify-center shadow-lg`}>
                    <business.icon className="text-white text-2xl" />
                  </div>
                  <div className="flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full px-2.5 py-1">
                    <FaCertificate className="text-blue-400 text-xs" />
                    <span className="text-[10px] font-mono text-gray-400">CERTIFIED</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                  {business.title}
                </h3>
                <p className="text-xs text-blue-400 font-mono mb-4">
                  {business.subTitle}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {business.description}
                </p>
              </div>

              {/* Stats Section - Corporate Dashboard Style */}
              <div className="mx-6 p-4 bg-black/30 rounded-xl border border-white/5 mb-6">
                <div className="grid grid-cols-3 gap-3">
                  {business.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg md:text-xl font-bold text-white">
                        {stat.value}<span className="text-xs text-gray-400">{stat.unit}</span>
                      </div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capabilities Tags */}
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
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition-all group-hover:gap-3"
                  >
                    <span>Technical Brief</span>
                    <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-full px-6 py-2 border border-white/10">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400 text-xs" />
              <span className="text-xs text-gray-400">ISO 9001:2015 Certified</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <FaHardHat className="text-blue-400 text-xs" />
              <span className="text-xs text-gray-400">Project Documentation Ready</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <FaChartLine className="text-purple-400 text-xs" />
              <span className="text-xs text-gray-400">EPC Tender Support</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
