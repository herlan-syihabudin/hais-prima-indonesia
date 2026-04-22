// src/app/divisions/roofing/page.tsx
"use client";

import Container from "@/components/ui/Container";
import ProductCard from "@/components/shared/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function RoofingDivisionPage() {
  const roofingProducts = products.filter(p => p.category === "Atap UPVC");

  return (
    <>
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
        <Container>
          <Link href="/" className="inline-flex items-center gap-2 text-teal-200 hover:text-white mb-4">
            <FaArrowLeft size={14} /> Kembali ke Beranda
          </Link>
          <h1 className="text-4xl font-bold">Atap UPVC</h1>
          <p className="text-teal-100 mt-2">Atap modern, tahan cuaca, garansi 10 tahun</p>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roofingProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
