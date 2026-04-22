"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { FaMapMarkerAlt, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Year Badge */}
        <div className="absolute top-4 right-4 z-10">
  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-lg text-xs font-semibold">
    {project.year}
  </div>
</div>

        {/* View Button on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white/90 backdrop-blur text-blue-600 px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition flex items-center gap-2 shadow-md">
            Lihat Detail
            <FaArrowRight size={12} />
          </button>
        </div>
      </div>

      <div className="p-5">
        {/* Project Type Tag */}
<div className="inline-flex items-center px-2 py-1 text-[10px] bg-blue-50 text-blue-600 rounded-md mb-2">
  Industrial Project
</div>
        <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
          {project.title}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1.5">
            <FaMapMarkerAlt size={12} />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaCalendarAlt size={12} />
            <span>{project.year}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">
          {project.description || "Penggunaan material berkualitas SNI untuk konstruksi"}
        </p>

        {/* Client Type Indicator */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-400">
            {project.clientType || "Kontraktor Swasta"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
