// src/app/projects/page.tsx
"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBuilding, 
  FaIndustry, 
  FaHardHat, 
  FaChartLine, 
  FaSearch, 
  FaFilter,
  FaTimes,
  FaWhatsapp
} from "react-icons/fa";
import Link from "next/link";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("Semua");
  const [filterYear, setFilterYear] = useState("Semua");

  // Extract unique project types and years (using optional chaining)
  const projectTypes = ["Semua", "EPC Project", "Industrial Supply", "Infrastructure"];
  const projectYears = ["Semua", ...new Set(projects.map(p => p.year))].sort().reverse();

  // Filter projects
  const filteredProjects = projects.filter(project => {
    // Search filter - menggunakan optional chaining untuk property optional
    const matchesSearch = searchTerm === "" || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (project.client && project.client.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Type filter - menggunakan optional chaining
    const matchesType = filterType === "Semua" || project.projectType === filterType;
    
    // Year filter
    const matchesYear = filterYear === "Semua" || project.year === filterYear;
    
    return matchesSearch && matchesType && matchesYear;
  });

  // Stats
  const stats = [
    { label: "Total Proyek", value: projects.length, icon: FaBuilding },
    { label: "EPC Projects", value: projects.filter(p => p.projectType === "EPC Project").length, icon: FaHardHat },
    { label: "Industrial Clients", value: projects.filter(p => p.clientType === "BUMN" || p.clientType === "Industrial").length, icon: FaIndustry },
    { label: "Nationwide", value: "34 Provinces", icon: FaChartLine },
  ];

  const hasActiveFilters = searchTerm !== "" || filterType !== "Semua" || filterYear !== "Semua";
  const whatsappNumber = "6281326097800";
  const consultationMessage = "Halo, saya tertarik dengan proyek-proyek yang telah dikerjakan PT Hais Prima Indonesia. Saya ingin konsultasi untuk proyek serupa.";

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
              <FaHardHat className="text-blue-200 text-xs" />
              <span className="text-xs tracking-wider">PROJECT PORTFOLIO</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Proyek Kami</h1>
            <p className="text-lg text-blue-100 max-w-2xl">
              Telah mempercayakan kebutuhan material konstruksi kepada kami untuk berbagai proyek skala nasional
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <stat.icon className="text-blue-600 text-2xl mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <Container>
          {/* Search & Filter Bar */}
          <div className="mb-8">
            {/* Search Input */}
            <div className="relative mb-4">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari proyek berdasarkan nama, lokasi, atau client..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FaTimes size={14} />
                </button>
              )}
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-500 flex items-center gap-1 mr-2">
                  <FaFilter size={12} /> Tipe:
                </span>
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`px-3 py-1.5 text-sm rounded-full transition ${
                      filterType === type
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-500 flex items-center">Tahun:</span>
                {projectYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => setFilterYear(year)}
                    className={`px-3 py-1.5 text-sm rounded-full transition ${
                      filterYear === year
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Filters & Results Count */}
            {(hasActiveFilters || filteredProjects.length !== projects.length) && (
              <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {filterType !== "Semua" && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                      Tipe: {filterType}
                      <button onClick={() => setFilterType("Semua")} className="ml-1">×</button>
                    </span>
                  )}
                  {filterYear !== "Semua" && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                      Tahun: {filterYear}
                      <button onClick={() => setFilterYear("Semua")} className="ml-1">×</button>
                    </span>
                  )}
                  {searchTerm && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                      Pencarian: {searchTerm}
                      <button onClick={() => setSearchTerm("")} className="ml-1">×</button>
                    </span>
                  )}
                  {hasActiveFilters && (
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setFilterType("Semua");
                        setFilterYear("Semua");
                      }}
                      className="text-xs text-red-500 hover:text-red-600"
                    >
                      Reset semua
                    </button>
                  )}
                </div>
                <div className="text-sm text-gray-500">
                  Menampilkan {filteredProjects.length} dari {projects.length} proyek
                </div>
              </div>
            )}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key="projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16 bg-gray-50 rounded-xl"
              >
                <FaBuilding className="text-5xl text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-2">Tidak ada proyek yang ditemukan</p>
                <p className="text-sm text-gray-400">Coba ubah filter atau kata kunci pencarian</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setFilterType("Semua");
                    setFilterYear("Semua");
                  }}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Reset filter
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Punya Proyek Serupa?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Konsultasikan kebutuhan material proyek Anda dengan tim engineering kami
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Konsultasi Sekarang
              </Link>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(consultationMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition flex items-center gap-2"
              >
                <FaWhatsapp size={18} />
                Chat via WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-xs text-gray-400">
              *Beberapa proyek memerlukan izin publikasi dari klien
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
