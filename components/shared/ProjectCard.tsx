"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/project";

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
      className="bg-white rounded-lg shadow-md overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white font-semibold">Lihat Detail</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
        <p className="text-gray-600 text-sm">{project.location}</p>
        <p className="text-gray-500 text-xs mt-2">{project.year}</p>
      </div>
    </motion.div>
  );
}
