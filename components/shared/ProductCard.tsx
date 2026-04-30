// src/components/shared/ProductCard.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/types/product";
import { FaWhatsapp, FaRuler, FaWeightHanging } from "react-icons/fa";
import Link from "next/link";
import { companyInfo } from "@/data/companyInfo";

// Function to generate slug from product name
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  // FIXED: pake dari companyInfo biar konsisten
  const whatsappNumber = companyInfo.contact.whatsapp;
  const message = `Halo, saya tertarik dengan produk ${product.name} dari ${companyInfo.name}`;
  const slug = slugify(product.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Image - Clickable ke slug - OPTIMIZED */}
      <Link href={`/products/${slug}`}>
        <div className="relative h-52 overflow-hidden cursor-pointer">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={80}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-primary-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              {product.category}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-4">
        {/* Title - Clickable ke slug */}
        <Link href={`/products/${slug}`}>
          <h3 className="text-lg font-bold mb-1 line-clamp-1 hover:text-primary-500 transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>
        
        {/* Quick specs */}
        <div className="flex gap-3 mb-3 text-xs text-gray-500">
          {product.specifications?.slice(0, 2).map((spec, i) => (
            <span key={i} className="flex items-center gap-1">
              {i === 0 ? <FaRuler size={10} /> : <FaWeightHanging size={10} />}
              {spec}
            </span>
          ))}
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-500">Harga</span>
            <p className="text-xl font-bold text-primary-500">{product.price}</p>
          </div>
          
          {/* Tombol Beli WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition flex items-center gap-2 text-sm font-semibold"
          >
            <FaWhatsapp size={16} />
            Beli
          </a>
        </div>
      </div>
    </motion.div>
  );
}
