"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import ProductCard from "@/components/shared/ProductCard";
import Button from "@/components/ui/Button";
import { products } from "@/data/products";

export default function ProductHighlights() {
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="section-padding">
      <Container>
        <SectionTitle
          title="Produk Unggulan"
          subtitle="Pilihan produk terbaik kami untuk kebutuhan konstruksi Anda"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/products" variant="outline">
            Lihat Semua Produk
          </Button>
        </div>
      </Container>
    </section>
  );
}
