// src/components/home/TestimonialSection.tsx
"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { testimonials } from "@/data/testimonials";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar, FaStarHalf, FaChevronLeft, FaChevronRight, FaBuilding } from "react-icons/fa";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [autoplay, currentIndex]);

  const current = testimonials[currentIndex];

  // Render stars
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalf key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
      </div>

      <Container>
        <SectionTitle
          title="Apa Kata Klien Kami"
          subtitle="Mitra yang telah mempercayakan proyeknya kepada PT Hais Prima Indonesia"
          variant="minimal"
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Quote Icon */}
            <FaQuoteLeft className="text-4xl text-blue-400/30 mb-6" />

            {/* Content */}
            <p className="text-xl md:text-2xl leading-relaxed text-gray-200 mb-8">
              "{current.content}"
            </p>

            {/* Client Info */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">
                  {current.name.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-lg">{current.name}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>{current.position}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <FaBuilding size={12} />
                    <span>{current.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  {renderStars(current.rating)}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all h-1.5 rounded-full ${
                    idx === currentIndex
                      ? "w-8 bg-blue-500"
                      : "w-4 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
