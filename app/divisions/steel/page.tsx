// src/app/divisions/steel/page.tsx
"use client";

import Container from "@/components/ui/Container";
import ProductCard from "@/components/shared/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function SteelDivisionPage() {
  const steelProducts = products.filter(p => p.category === "Material Steel");
  const susProducts = products.filter(p => p.category === "Material SUS");

  return (
    <>
      {/* Header - FIXED */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <Container>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-primary-200 hover:text-white transition-colors mb-4"
          >
            <FaArrowLeft size={14} /> Kembali ke Beranda
          </Link>
          <h1 className="text-4xl font-bold">Material Steel & SUS</h1>
          <p className="text-primary-100 mt-2">Distributor bersertifikat carbon steel & stainless steel</p>
        </Container>
      </section>

      {/* Carbon Steel */}
      <section className="section-padding">
        <Container>
          <h2 className="text-2xl font-bold mb-6">Carbon Steel Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steelProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </Container>
      </section>

      {/* Stainless Steel */}
      {susProducts.length > 0 && (
        <section className="section-padding bg-gray-50">
          <Container>
            <h2 className="text-2xl font-bold mb-6">Stainless Steel Products (SUS 304)</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {susProducts.map((product, idx) => (
                <ProductCard key={product.id} product={product} index={idx} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
