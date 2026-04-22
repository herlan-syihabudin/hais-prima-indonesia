"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle, FaIndustry, FaShieldAlt, FaBoxes } from "react-icons/fa";

export default function Hero() {
  const [stats] = useState([
    { label: "Established", value: "2015", icon: FaIndustry },
    { label: "Projects Delivered", value: "500+", icon: FaBoxes },
    { label: "Client Satisfaction", value: "98%", icon: FaCheckCircle },
  ]);

  const capabilities = [
    "Steel & Structural Materials Supply (WF, H-Beam, Plate, Pipe)",
    "Stainless Steel & Industrial Piping System",
    "Fitting, Flange & Industrial Components",
    "Warehouse Racking System Solutions",
  ];

  const trustPoints = [
    "SNI & International Standard Material Supply",
    "Project-Based Procurement Support",
    "Industrial, Commercial & Infrastructure Scope",
  ];

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-besi.jpg"
          alt="Industrial Steel Supply"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
      </div>

      <Container>
        <div className="relative z-10 max-w-5xl text-white">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Brand Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-6 border border-white/15">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-sm tracking-widest font-medium text-gray-200">
                PT HAIS PRIMA INDONESIA
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Integrated Industrial
              <span className="block text-blue-400">
                Steel & Material Solutions
              </span>
            </h1>

            {/* Sub Heading */}
            <h2 className="text-xl md:text-2xl mt-4 text-gray-300 max-w-3xl">
              Reliable supply partner for construction, industrial, and infrastructure projects across Indonesia
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-300 max-w-2xl leading-relaxed">
              We provide end-to-end material supply solutions including steel, stainless steel, piping system, 
              and industrial components with consistent quality, project reliability, and technical support.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Button href="/contact" size="lg">
                Request Quotation
              </Button>
              <Button href="/divisions" variant="outline" size="lg">
                Explore Capabilities
              </Button>
            </div>

            {/* Trust Highlights */}
            <div className="grid md:grid-cols-3 gap-4 mt-10">
              {trustPoints.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <FaShieldAlt className="text-blue-400 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Capabilities */}
            <div className="mt-10 border-t border-white/10 pt-6">
              <h3 className="text-sm tracking-widest text-gray-400 mb-4">
                CORE CAPABILITIES
              </h3>

              <div className="grid md:grid-cols-2 gap-3">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-200 text-sm">
                    <FaCheckCircle className="text-blue-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {stats.map((stat, i) => (
                <div key={i} className="text-left">
                  <stat.icon className="text-blue-400 text-xl mb-2" />
                  <div className="text-2xl md:text-3xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </Container>
    </section>
  );
}
