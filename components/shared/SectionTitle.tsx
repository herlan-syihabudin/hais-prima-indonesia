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
      <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
      {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
    </motion.div>
  );
}
