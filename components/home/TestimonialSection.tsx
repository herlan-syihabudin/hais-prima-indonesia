// src/components/home/TestimonialSection.tsx
"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaStarHalf, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="text-yellow-400 text-xs" />
        ) : i - 0.5 <= rating ? (
          <FaStarHalf key={i} className="text-yellow-400 text-xs" />
        ) : (
          <FaStar key={i} className="text-gray-300 text-xs" />
        )
      );
    }
    return stars;
  };

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <Container>
        {/* Header Compact */}
        <div className="text-center mb-8">
          <p className="text-xs font-mono text-gray-400 tracking-wider">TESTIMONIALS</p>
          <h2 className="text-2xl font-bold text-gray-800 mt-1">Apa Kata Klien Kami</h2>
        </div>

        {/* Testimonial Card Compact */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            {/* Quote & Content */}
            <div className="flex gap-3">
              <FaQuoteLeft className="text-blue-500/20 text-2xl flex-shrink-0" />
              <p className="text-gray-600 text-sm leading-relaxed italic">
                "{current.content}"
              </p>
            </div>

            {/* Client Info & Rating */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">
                    {current.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">{current.name}</h4>
                  <p className="text-xs text-gray-400">
                    {current.position} • {current.company}
                  </p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {renderStars(current.rating)}
              </div>
            </div>
          </div>

          {/* Navigation Compact */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={prevTestimonial}
              className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <FaChevronLeft size={12} className="text-gray-600" />
            </button>
            <div className="flex gap-1">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all h-1 rounded-full ${
                    idx === currentIndex ? "w-4 bg-blue-500" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <FaChevronRight size={12} className="text-gray-600" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
