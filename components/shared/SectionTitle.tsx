"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      {/* Pre-title / Badge */}
      <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-1.5 mb-5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <span className="text-blue-600 text-sm font-semibold tracking-wide">
          Layanan Terbaik
        </span>
      </div>

      {/* Title with Gradient */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      {/* Double Line Decoration */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <div className="w-10 h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full rotate-45"></div>
        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600"></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full rotate-45"></div>
        <div className="w-10 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
      </div>
    </motion.div>
  );
}
