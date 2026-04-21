"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.category}</p>
        <p className="text-gray-500 text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold">{product.price}</span>
          <button className="bg-primary text-white px-3 py-1 rounded hover:bg-blue-700 transition">
            Detail
          </button>
        </div>
      </div>
    </motion.div>
  );
}
