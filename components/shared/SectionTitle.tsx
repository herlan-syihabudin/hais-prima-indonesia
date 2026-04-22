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
      {/* BADGE */}
      {badge && !isMinimal && (
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 border
          bg-blue-50 border-blue-100`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-blue-600 text-xs font-semibold tracking-widest">
            {badge}
          </span>
        </div>
      )}

      {/* TITLE with optional gradient */}
      <h2
        className={`font-bold leading-tight
        ${isCenter ? "text-3xl md:text-4xl lg:text-5xl" : "text-2xl md:text-3xl lg:text-4xl"}
        ${gradient ? "bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent" : "text-gray-900"}`}
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

      {/* DECORATION (ONLY DEFAULT MODE) */}
      {!isMinimal && (
        <div
          className={`flex items-center gap-2 mt-5 ${
            isCenter ? "justify-center" : "justify-start"
          }`}
        >
          <div className="w-10 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
          <div className="w-2 h-2 rotate-45 bg-blue-500"></div>
          <div className="w-14 h-0.5 bg-blue-500"></div>
          <div className="w-2 h-2 rotate-45 bg-blue-500"></div>
          <div className="w-10 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
        </div>
      )}
    </motion.div>
  );
}
