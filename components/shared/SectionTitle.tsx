"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "center" | "left";
  variant?: "default" | "minimal";
  gradient?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  badge = "PT HAIS PRIMA INDONESIA",
  align = "center",
  variant = "default",
  gradient = false,
}: SectionTitleProps) {
  const isCenter = align === "center";
  const isMinimal = variant === "minimal";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-10 ${isCenter ? "text-center" : "text-left"}`}
    >
      {/* BADGE - FIXED warna */}
      {badge && !isMinimal && (
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 border
          bg-primary-50 border-primary-100`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-60 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          <span className="text-primary-600 text-xs font-semibold tracking-widest">
            {badge}
          </span>
        </div>
      )}

      {/* TITLE with optional gradient - FIXED */}
      <h2
        className={`font-bold leading-tight
        ${isCenter ? "text-3xl md:text-4xl lg:text-5xl" : "text-2xl md:text-3xl lg:text-4xl"}
        ${gradient ? "bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent" : "text-gray-900"}`}
      >
        {title}
      </h2>

      {/* SUBTITLE */}
      {subtitle && (
        <p
          className={`mt-3 text-gray-500 leading-relaxed
          ${isCenter ? "max-w-2xl mx-auto" : "max-w-3xl"}`}
        >
          {subtitle}
        </p>
      )}

      {/* DECORATION (ONLY DEFAULT MODE) - FIXED warna */}
      {!isMinimal && (
        <div
          className={`flex items-center gap-2 mt-5 ${
            isCenter ? "justify-center" : "justify-start"
          }`}
        >
          <div className="w-10 h-0.5 bg-gradient-to-r from-transparent to-primary-400"></div>
          <div className="w-2 h-2 rotate-45 bg-primary-500"></div>
          <div className="w-14 h-0.5 bg-primary-500"></div>
          <div className="w-2 h-2 rotate-45 bg-primary-500"></div>
          <div className="w-10 h-0.5 bg-gradient-to-r from-primary-400 to-transparent"></div>
        </div>
      )}
    </motion.div>
  );
}
