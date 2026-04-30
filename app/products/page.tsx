// src/app/products/page.tsx
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/shared/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";
import { FaArrowLeft, FaFilter } from "react-icons/fa";

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const subParam = searchParams.get("sub");
  
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [activeSubCategory, setActiveSubCategory] = useState<string>("");

  // Set filter from URL params
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
    if (subParam) {
      setActiveSubCategory(subParam);
    }
  }, [categoryParam, subParam]);

  // Categories based on data
  const categories = ["Semua", "Material Steel", "Material SUS", "Warehouse Racking", "Atap UPVC"];
  
  // Subcategories mapping
  const subCategories: Record<string, string[]> = {
    "Material Steel": ["Plate", "WF Beam", "H-Beam", "Siku", "UNP", "Pipa", "Pipa Seamless", "Fitting"],
    "Material SUS": ["Plate", "Pipa", "Siku", "UNP", "Fitting"],
    "Warehouse Racking": ["Pallet Racking", "Heavy Duty", "Mezzanine", "Drive-in"],
    "Atap UPVC": ["Roofing", "Lisplang", "Talang", "Aksesoris"],
  };

  // Filter products
  const filteredProducts = products.filter(product => {
    if (activeCategory !== "Semua" && product.category !== activeCategory) {
      return false;
    }
    if (activeSubCategory && product.subCategory !== activeSubCategory) {
      return false;
    }
    return true;
  });

  return (
    <>
      {/* Header - FIXED */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <Container>
          <Link href="/" className="inline-flex items-center gap-2 text-primary-200 hover:text-white transition-colors mb-4">
            <FaArrowLeft size={14} /> Kembali ke Beranda
          </Link>
          <h1 className="text-4xl font-bold">Katalog Produk</h1>
          <p className="text-primary-100 mt-2">
            {filteredProducts.length} produk ditemukan
          </p>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filter - FIXED */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sticky top-24">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100">
                  <FaFilter className="text-primary-500 text-sm" />
                  <h3 className="font-semibold text-gray-800">Filter Produk</h3>
                </div>

                {/* Category Filter - FIXED */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Kategori</h4>
                  <div className="space-y-1">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setActiveCategory(cat);
                          setActiveSubCategory("");
                        }}
                        className={`w-full text-left px-3 py-1.5 text-sm rounded-lg transition ${
                          activeCategory === cat
                            ? "bg-primary-50 text-primary-600 font-medium"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SubCategory Filter - FIXED */}
                {activeCategory !== "Semua" && subCategories[activeCategory] && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 mt-4 pt-3 border-t border-gray-100">
                      Sub Kategori
                    </h4>
                    <div className="space-y-1">
                      <button
                        onClick={() => setActiveSubCategory("")}
                        className={`w-full text-left px-3 py-1.5 text-sm rounded-lg transition ${
                          activeSubCategory === ""
                            ? "bg-primary-50 text-primary-600 font-medium"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        Semua
                      </button>
                      {subCategories[activeCategory].map((sub) => (
                        <button
                          key={sub}
                          onClick={() => setActiveSubCategory(sub)}
                          className={`w-full text-left px-3 py-1.5 text-sm rounded-lg transition ${
                            activeSubCategory === sub
                              ? "bg-primary-50 text-primary-600 font-medium"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reset Filter - FIXED */}
                {(activeCategory !== "Semua" || activeSubCategory) && (
                  <button
                    onClick={() => {
                      setActiveCategory("Semua");
                      setActiveSubCategory("");
                    }}
                    className="w-full mt-4 pt-3 border-t border-gray-100 text-sm text-primary-500 hover:text-primary-600 font-medium"
                  >
                    Reset Filter
                  </button>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <>
                  {/* Active Filters Display - FIXED */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {activeCategory !== "Semua" && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary-50 text-primary-600 text-xs rounded-full">
                        Kategori: {activeCategory}
                        <button
                          onClick={() => setActiveCategory("Semua")}
                          className="ml-1 hover:text-primary-700"
                        >
                          ×
                        </button>
                      </span>
                    )}
                    {activeSubCategory && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary-50 text-primary-600 text-xs rounded-full">
                        Sub: {activeSubCategory}
                        <button
                          onClick={() => setActiveSubCategory("")}
                          className="ml-1 hover:text-primary-700"
                        >
                          ×
                        </button>
                      </span>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product, index) => (
                      <ProductCard key={product.id} product={product} index={index} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-xl">
                  <p className="text-gray-500">Tidak ada produk dalam kategori ini</p>
                  <button
                    onClick={() => {
                      setActiveCategory("Semua");
                      setActiveSubCategory("");
                    }}
                    className="mt-3 text-primary-500 hover:text-primary-600 font-medium"
                  >
                    Lihat semua produk
                  </button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

// Main component with Suspense - FIXED spinner color
export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading products...</p>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
