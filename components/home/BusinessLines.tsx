// src/components/home/BusinessLines.tsx
"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FaIndustry, 
  FaWarehouse, 
  FaHome, 
  FaArrowRight
} from "react-icons/fa";

const businessLines = [
  {
    id: "steel",
    title: "Steel & Stainless Division",
    subTitle: "Material Engineering Supply",
    description: "Distributor bersertifikat untuk carbon steel & stainless steel dengan standar ASTM, JIS, dan SNI.",
    icon: FaIndustry,
    stats: [
      { label: "Stock Tonnage", value: "5.000+ tons" },
      { label: "Material Grades", value: "15+ types" },
      { label: "Certification", value: "ISO/SNI" }
    ],
    capabilities: ["Carbon Steel", "Stainless Steel 304/316", "Pressure Vessel Plate"],
    link: "/divisions/steel",
    bgColor: "bg-slate-800",
    borderColor: "border-blue-500/30",
    hoverColor: "hover:border-blue-500",
  },
  {
    id: "racking",
    title: "Warehouse Solution Division",
    subTitle: "Industrial Storage System",
    description: "Perencanaan, fabrikasi, dan instalasi sistem penyimpanan industrial dengan standar Eropa.",
    icon: FaWarehouse,
    stats: [
      { label: "Projects", value: "200+ projects" },
      { label: "Load Capacity", value: "5 tons/level" },
      { label: "Coverage", value: "50.000+ m²" }
    ],
    capabilities: ["Pallet Racking", "Mezzanine Floor", "ASRS Integration"],
    link: "/divisions/racking",
    bgColor: "bg-slate-800",
    borderColor: "border-purple-500/30",
    hoverColor: "hover:border-purple-500",
  },
  {
    id: "roofing",
    title: "UPVC Roofing Division",
    subTitle: "Advanced Cladding System",
    description: "Pemasangan atap UPVC premium dengan teknologi anti-UV dan sistem waterproofing. Garansi 10 tahun.",
    icon: FaHome,
    stats: [
      { label: "Installation", value: "100.000+ m²" },
      { label: "Warranty", value: "10 years" },
      { label: "Projects", value: "50+ sites" }
    ],
    capabilities: ["Atap UPVC", "Lisplang", "Talang Air"],
    link: "/divisions/roofing",
    bgColor: "bg-slate-800",
    borderColor: "border-teal-500/30",
    hoverColor: "hover:border-teal-500",
  },
];

export default function BusinessLines() {
  return (
    <section className="section-padding bg-slate-900">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Business & Engineering Divisions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Solusi engineering terintegrasi untuk kebutuhan tender dan proyek skala nasional
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessLines.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${business.bgColor} rounded-xl border ${business.borderColor} ${business.hoverColor} hover:shadow-xl transition-all overflow-hidden`}
            >
              <div className="p-6">
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <business.icon className="text-blue-400 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{business.title}</h3>
                    <p className="text-xs text-blue-400">{business.subTitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {business.description}
                </p>

                {/* Stats - Simple row */}
                <div className="space-y-2 mb-4">
                  {business.stats.map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm border-b border-white/10 pb-1.5">
                      <span className="text-gray-400">{stat.label}</span>
                      <span className="text-white font-semibold">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* Capabilities Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {business.capabilities.map((cap, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-300">
                      {cap}
                    </span>
                  ))}
                </div>

                {/* CTA Link */}
                <Link
                  href={business.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Technical Brief <FaArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
