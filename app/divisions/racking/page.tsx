// src/app/divisions/racking/page.tsx
"use client";

import Container from "@/components/ui/Container";
import ProductCard from "@/components/shared/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function RackingDivisionPage() {
  const rackingProducts = products.filter(p => p.category === "Warehouse Racking");

  return (
    <>
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <Container>
          <Link href="/" className="inline-flex items-center gap-2 text-purple-200 hover:text-white mb-4">
            <FaArrowLeft size={14} /> Kembali ke Beranda
          </Link>
          <h1 className="text-4xl font-bold">Warehouse Racking System</h1>
          <p className="text-purple-100 mt-2">Solusi rak gudang profesional untuk bisnis Anda</p>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rackingProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
