// src/components/home/ProductHighlights.tsx
"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import ProductCard from "@/components/shared/ProductCard";
import Button from "@/components/ui/Button";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

// Update categories sesuai dengan data products.ts
const categories = [
  "Semua",
  "Material Steel",
  "Material SUS",
  "Warehouse Racking",
  "Atap UPVC",
];

export default function ProductHighlights() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  
  const filteredProducts = activeCategory === "Semua"
    ? products.slice(0, 6)
    : products.filter(p => p.category === activeCategory).slice(0, 6);

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionTitle
          title="Portofolio Produk"
          subtitle="Solusi lengkap untuk kebutuhan konstruksi Anda"
        />
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))
            ) : (
              <div className="col-span-3 text-center py-12 text-gray-500">
                Tidak ada produk dalam kategori ini
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <Button href="/products" variant="outline" size="lg">
            Lihat Semua Produk →
          </Button>
        </div>
      </Container>
    </section>
  );
}
