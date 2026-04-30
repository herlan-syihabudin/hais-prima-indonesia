// src/components/home/ProductHighlights.tsx
"use client";

import Container from "@/components/ui/Container";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/shared/ProductCard";
import { FaCheckCircle, FaCertificate, FaTruck, FaHardHat, FaBuilding, FaIndustry } from "react-icons/fa";

// Trust Indicators Data - FIXED warna
const trustIndicators = [
  { icon: FaCertificate, label: "ISO 9001:2015", sub: "Certified" },
  { icon: FaCheckCircle, label: "SNI Certified", sub: "Material Standard" },
  { icon: FaHardHat, label: "EPC Ready", sub: "Tender Support" },
  { icon: FaTruck, label: "Nationwide", sub: "Logistics Coverage" },
];

const projectStats = [
  { value: "500+", label: "Projects Completed", icon: FaBuilding },
  { value: "200+", label: "Industrial Clients", icon: FaIndustry },
  { value: "25+", label: "Material Grades", icon: FaCheckCircle },
];

// Categories
const categories = [
  { 
    id: "steel", 
    label: "Structural Steel", 
    description: "WF Beam, H-Beam, Plat Besi, Siku, UNP",
    href: "/products?category=Material+Steel",
    keywords: "besi wf, h beam, plat besi, konstruksi baja"
  },
  { 
    id: "stainless", 
    label: "Stainless Steel 304", 
    description: "Plat, Pipa, Siku, UNP, Fitting SUS",
    href: "/products?category=Material+SUS",
    keywords: "stainless steel, sus 304, pipa stainless"
  },
  { 
    id: "piping", 
    label: "Piping System", 
    description: "Seamless SCH 40/80, Fitting, Flange",
    href: "/products?category=Material+Steel&sub=Pipa+Seamless",
    keywords: "pipa seamless sch 40, sch 80, fitting, flange"
  },
  { 
    id: "racking", 
    label: "Warehouse Racking", 
    description: "Pallet Racking, Heavy Duty, Mezzanine",
    href: "/products?category=Warehouse+Racking",
    keywords: "rak gudang, pallet racking, heavy duty racking"
  },
  { 
    id: "roofing", 
    label: "UPVC Roofing", 
    description: "Atap UPVC, Lisplang, Talang Air",
    href: "/products?category=Atap+UPVC",
    keywords: "atap upvc, lisplang upvc, talang air"
  },
];

export default function ProductHighlights() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50" aria-label="Product Portfolio">
      <Container>
        {/* ===== 1. TRUST ANCHOR ===== */}
        <div className="mb-12">
          {/* Project Stats Bar - FIXED warna */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {projectStats.map((stat, idx) => (
              <div key={idx} className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <stat.icon className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Certification Row - FIXED warna */}
          <div className="flex flex-wrap justify-center gap-6 py-4 border-y border-gray-100">
            {trustIndicators.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <item.icon className="text-primary-500 text-sm" />
                <div>
                  <div className="text-xs font-semibold text-gray-800">{item.label}</div>
                  <div className="text-[10px] text-gray-400">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== 2. SECTION HEADER - FIXED warna ===== */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-primary-50 rounded-full mb-4">
            <span className="text-xs font-semibold text-primary-600 tracking-wider">
              INDUSTRIAL MATERIAL PORTFOLIO
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Material Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Certified industrial materials for construction, infrastructure, and manufacturing projects
          </p>
        </div>

        {/* ===== 3. CATEGORY LINKS - FIXED hover warna ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-12">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group bg-white border border-gray-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition">
                {category.label}
              </h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">{category.description}</p>
              <div className="text-[10px] text-gray-400 mt-2 hidden sm:block">
                {category.keywords}
              </div>
            </Link>
          ))}
        </div>

        {/* ===== 4. PRODUCT GRID ===== */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Featured Products</h3>
            <Link href="/products" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
              View All Products →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 6).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>

        {/* ===== 5. B2B CTA - FIXED gradient & warna ===== */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Need Technical Specification?</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Get complete mill test certificates, dimensional charts, and engineering support for your project
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Request Technical Data
            </Link>
            <Link
              href="/divisions/steel"
              className="border border-white text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Explore Divisions
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-primary-200">
            <span>✓ Mill Test Certificate</span>
            <span>✓ Material Traceability</span>
            <span>✓ Technical Datasheet</span>
            <span>✓ 3D Drawing Support</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
