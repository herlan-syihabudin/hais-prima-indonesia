// src/components/home/WhyChooseUs.tsx
"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { 
  FaTruck, 
  FaMedal, 
  FaHandshake, 
  FaClock, 
  FaWarehouse, 
  FaChartLine,
  FaCertificate,
  FaHardHat,
  FaBuilding,
  FaCheckCircle,
  FaFileInvoice
} from "react-icons/fa";

// Trust Badges
const trustBadges = [
  { icon: FaCertificate, label: "ISO 9001:2015", sub: "Quality Management" },
  { icon: FaMedal, label: "SNI Certified", sub: "Material Standard" },
  { icon: FaHardHat, label: "EPC Ready", sub: "Tender Support" },
  { icon: FaBuilding, label: "BUMN & Private", sub: "Project Experience" },
];

// Engineering Metrics
const engineeringMetrics = [
  { 
    icon: FaWarehouse, 
    label: "Stock Capacity", 
    value: "5.000+", 
    unit: "tons",
    sub: "Multiple grades available"
  },
  { 
    icon: FaChartLine, 
    label: "Project Track Record", 
    value: "500+", 
    unit: "projects",
    sub: "Industrial & infrastructure"
  },
  { 
    icon: FaTruck, 
    label: "Nationwide Coverage", 
    value: "34", 
    unit: "provinces",
    sub: "Own fleet & logistics"
  },
  { 
    icon: FaClock, 
    label: "Response Time", 
    value: "< 24", 
    unit: "hours",
    sub: "Quote & technical support"
  },
];

// Structured Benefits
const benefits = [
  {
    icon: FaMedal,
    title: "Certified Material Quality",
    description: "Full traceability with Mill Test Certificate, SNI & ASTM compliance. Material rejection rate <0.5%.",
    metrics: ["SNI 2052:2017", "ASTM A36/A106", "JIS G3101"],
    priority: 1,
  },
  {
    icon: FaWarehouse,
    title: "Industrial Stock Capacity",
    description: "5.000+ tons ready stock with multiple dimensions & grades. Just-in-time delivery system.",
    metrics: ["5.000+ tons capacity", "24/7 warehouse access", "Real-time stock check"],
    priority: 2,
  },
  {
    icon: FaTruck,
    title: "Project-Based Logistics",
    description: "Nationwide delivery with dedicated fleet. Phased delivery scheduling for EPC projects.",
    metrics: ["34 provinces coverage", "Phased delivery", "Site-specific logistics"],
    priority: 3,
  },
  {
    icon: FaChartLine,
    title: "EPC & Tender Support",
    description: "Complete technical documentation for tender requirements. Material compliance certification.",
    metrics: ["Technical datasheet", "Mill certificate", "3D drawing support"],
    priority: 4,
  },
  {
    icon: FaFileInvoice,
    title: "Project-Based Pricing",
    description: "Volume-based pricing with contract flexibility. Negotiation support for procurement.",
    metrics: ["Volume discount", "Long-term contract", "EPC price scheme"],
    priority: 5,
  },
  {
    icon: FaHandshake,
    title: "Technical Support",
    description: "24/7 engineering consultation for material selection & application. After-sales service.",
    metrics: ["Engineering support", "Site visit available", "Warranty claim"],
    priority: 6,
  },
];

export default function WhyChooseUs() {
  const sortedBenefits = [...benefits].sort((a, b) => a.priority - b.priority);

  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Simple Background Pattern - Fixed */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
      </div>

      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 border border-blue-500/20">
            <FaHardHat className="text-blue-400 text-xs" />
            <span className="text-xs font-mono text-blue-400 tracking-wider">ENGINEERING EXCELLENCE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Industry Leaders
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Choose Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Engineering-driven approach with certified quality, industrial capacity, and EPC-ready documentation
          </p>
        </div>

        {/* Trust Badges Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {trustBadges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <badge.icon className="text-blue-400 text-sm" />
              <div>
                <div className="text-sm font-semibold text-white">{badge.label}</div>
                <div className="text-[10px] text-gray-400">{badge.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engineering Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {engineeringMetrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <metric.icon className="text-blue-400 text-2xl mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">
                {metric.value}<span className="text-sm text-gray-400">{metric.unit}</span>
              </div>
              <div className="text-xs font-semibold text-gray-300 mt-1">{metric.label}</div>
              <div className="text-[10px] text-gray-500 mt-0.5">{metric.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Priority Badge */}
              <div className="absolute top-3 right-3 text-[10px] font-mono text-gray-500">
                {String(benefit.priority).padStart(2, '0')}
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition">
                  <benefit.icon className="text-blue-400 text-2xl group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{benefit.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {benefit.metrics.map((metric, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Trust Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-6 rounded-xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400 text-sm" />
              <span className="text-xs text-gray-300">Full Material Traceability</span>
            </div>
            <div className="w-px h-4 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <FaFileInvoice className="text-blue-400 text-sm" />
              <span className="text-xs text-gray-300">Mill Test Certificate Included</span>
            </div>
            <div className="w-px h-4 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <FaHardHat className="text-orange-400 text-sm" />
              <span className="text-xs text-gray-300">EPC Documentation Ready</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
