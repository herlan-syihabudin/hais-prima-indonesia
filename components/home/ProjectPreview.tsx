// src/components/home/ProjectPreview.tsx
"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHardHat, FaBuilding, FaChartLine, FaTruck, FaCheckCircle, FaArrowRight } from "react-icons/fa";

// Project Metrics Strip - Industrial Proof
const projectMetrics = [
  { 
    icon: FaChartLine, 
    value: "500+", 
    label: "Industrial Projects",
    sub: "EPC & Supply Chain"
  },
  { 
    icon: FaBuilding, 
    value: "200+", 
    label: "Active Clients",
    sub: "BUMN & Private Sector"
  },
  { 
    icon: FaTruck, 
    value: "34", 
    label: "Provinces Coverage",
    sub: "Nationwide Delivery"
  },
  { 
    icon: FaHardHat, 
    value: "100%", 
    label: "Project Completion",
    sub: "On-Time Delivery"
  },
];

// Project Data dengan Industrial Details
const featuredProjects = [
  {
    id: 1,
    title: "Pabrik Cold Rolling Mill - Cilegon",
    client: "PT Krakatau Steel",
    clientType: "BUMN - Steel Manufacturer",
    projectType: "EPC Material Supply",
    scope: "Structural Steel & Piping System",
    materials: ["WF Beam 500+ tons", "Pipa Seamless SCH 40", "Plat SS400 200+ tons"],
    scale: "5.000+ tons steel",
    location: "Cilegon, Banten",
    year: "2023",
    image: "/images/projects/project-1.jpg",
    badge: "EPC Project",
  },
  {
    id: 2,
    title: "Distribution Center - Cikarang",
    client: "PT Sinarmas Logistics",
    clientType: "Private - Logistics",
    projectType: "Turnkey Installation",
    scope: "Warehouse Racking System",
    materials: ["Pallet Racking", "Heavy Duty Racking", "Mezzanine Floor"],
    scale: "10.000+ m² warehouse",
    location: "Cikarang, Jawa Barat",
    year: "2023",
    image: "/images/projects/project-2.jpg",
    badge: "Industrial Supply",
  },
  {
    id: 3,
    title: "Jembatan Layang - Surabaya",
    client: "PT Waskita Karya",
    clientType: "BUMN - Construction",
    projectType: "Structural Supply",
    scope: "Steel Structure for Flyover",
    materials: ["WF Beam", "H-Beam", "Besi Beton SNI"],
    scale: "2.500+ tons structure",
    location: "Surabaya, Jawa Timur",
    year: "2023",
    image: "/images/projects/project-3.jpg",
    badge: "Infrastructure",
  },
];

export default function ProjectPreview() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <Container>
        {/* Section Header - Industrial Tone */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-4 py-1.5 mb-4 border border-blue-500/20">
            <FaHardHat className="text-blue-600 text-xs" />
            <span className="text-xs font-mono text-blue-600 tracking-wider">ENGINEERING DELIVERY TRACK RECORD</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Execution
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> Portfolio</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proven track record in industrial material supply, structural steel, and warehouse system installation
          </p>
        </div>

        {/* Project Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {projectMetrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-4 rounded-xl bg-white shadow-sm border border-gray-100"
            >
              <metric.icon className="text-blue-600 text-2xl mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{metric.value}</div>
              <div className="text-sm font-semibold text-gray-700">{metric.label}</div>
              <div className="text-xs text-gray-400">{metric.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Project Cards Grid - Industrial Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    {project.badge}
                  </span>
                </div>
                {/* Client Type Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-1 rounded">
                    {project.clientType}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium">{project.client}</p>
                </div>

                {/* Project Scope */}
                <div className="mb-3">
                  <p className="text-xs text-gray-500 mb-1">Project Scope</p>
                  <p className="text-sm text-gray-700 font-medium">{project.scope}</p>
                </div>

                {/* Materials Used */}
                <div className="mb-3">
                  <p className="text-xs text-gray-500 mb-1">Materials Supplied</p>
                  <div className="flex flex-wrap gap-1">
                    {project.materials.slice(0, 2).map((material, idx) => (
                      <span key={idx} className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">
                        {material}
                      </span>
                    ))}
                    {project.materials.length > 2 && (
                      <span className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">
                        +{project.materials.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <FaChartLine className="text-blue-500" size={12} />
                    <span>{project.scale}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaBuilding className="text-blue-500" size={12} />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA - Industrial Style */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
          >
            View Full Project Portfolio
            <FaArrowRight size={14} />
          </Link>
          <p className="text-xs text-gray-400 mt-3">
            Including detailed case studies & technical documentation
          </p>
        </div>
      </Container>
    </section>
  );
}
