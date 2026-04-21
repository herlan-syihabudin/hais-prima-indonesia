"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import ProductCard from "@/components/shared/ProductCard";
import { products } from "@/data/products";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductsPage() {
  const categories = ["Semua", "Besi Beton", "Hollow", "WF/H-Beam", "Wiremesh", "Plat Besi"];
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProducts = activeCategory === "Semua"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Produk Kami</h1>
            <p className="text-lg text-blue-100 max-w-2xl">
              Berbagai pilihan besi dan baja berkualitas untuk kebutuhan konstruksi Anda
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
