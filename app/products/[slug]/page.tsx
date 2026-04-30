// src/app/products/[slug]/page.tsx
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { FaWhatsapp, FaCheckCircle, FaRuler, FaWeightHanging, FaCube, FaChartLine } from "react-icons/fa";
import Link from "next/link";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

// Data tabel besi (tetap sama)
const steelTables: Record<string, any> = {
  "WF Beam SS400": {
    title: "Dimensi & Berat WF Beam",
    columns: ["Type", "Dimensi (mm)", "Tebal Web (mm)", "Tebal Flange (mm)", "Berat (kg/m)", "Panjang (m)"],
    rows: [
      { type: "WF 150x75", dim: "150 x 75", web: 5, flange: 7, weight: 14, length: 12 },
      { type: "WF 200x100", dim: "200 x 100", web: 5.5, flange: 8, weight: 21.3, length: 12 },
      { type: "WF 250x125", dim: "250 x 125", web: 6, flange: 9, weight: 29.6, length: 12 },
      { type: "WF 300x150", dim: "300 x 150", web: 6.5, flange: 9, weight: 36.7, length: 12 },
      { type: "WF 350x175", dim: "350 x 175", web: 7, flange: 11, weight: 49.6, length: 12 },
      { type: "WF 400x200", dim: "400 x 200", web: 8, flange: 13, weight: 66, length: 12 },
      { type: "WF 500x200", dim: "500 x 200", web: 10, flange: 16, weight: 89.6, length: 12 },
      { type: "WF 600x200", dim: "600 x 200", web: 11, flange: 17, weight: 106, length: 12 },
    ],
  },
  "H-Beam SS400": {
    title: "Dimensi & Berat H-Beam",
    columns: ["Type", "Dimensi (mm)", "Tebal Web (mm)", "Tebal Flange (mm)", "Berat (kg/m)", "Panjang (m)"],
    rows: [
      { type: "H 100x100", dim: "100 x 100", web: 6, flange: 8, weight: 20.4, length: 12 },
      { type: "H 125x125", dim: "125 x 125", web: 6.5, flange: 9, weight: 29.8, length: 12 },
      { type: "H 150x150", dim: "150 x 150", web: 7, flange: 10, weight: 40.2, length: 12 },
      { type: "H 200x200", dim: "200 x 200", web: 8, flange: 12, weight: 60.3, length: 12 },
      { type: "H 250x250", dim: "250 x 250", web: 9, flange: 14, weight: 82.2, length: 12 },
      { type: "H 300x300", dim: "300 x 300", web: 10, flange: 15, weight: 106, length: 12 },
      { type: "H 350x350", dim: "350 x 350", web: 12, flange: 19, weight: 137, length: 12 },
      { type: "H 400x400", dim: "400 x 400", web: 13, flange: 21, weight: 172, length: 12 },
    ],
  },
  "Pipa Seamless SCH 40": {
    title: "Dimensi & Berat Pipa Seamless SCH 40",
    columns: ["Diameter (inch)", "OD (mm)", "ID (mm)", "Tebal (mm)", "Berat (kg/m)"],
    rows: [
      { inch: "1/2", od: 21.3, id: 15.8, thick: 2.77, weight: 1.27 },
      { inch: "3/4", od: 26.7, id: 21, thick: 2.87, weight: 1.69 },
      { inch: "1", od: 33.4, id: 26.6, thick: 3.38, weight: 2.5 },
      { inch: "1.5", od: 48.3, id: 40.9, thick: 3.68, weight: 4.05 },
      { inch: "2", od: 60.3, id: 52.5, thick: 3.91, weight: 5.44 },
      { inch: "2.5", od: 73, id: 62.7, thick: 5.16, weight: 8.63 },
      { inch: "3", od: 88.9, id: 77.9, thick: 5.49, weight: 11.29 },
      { inch: "4", od: 114.3, id: 102.3, thick: 6.02, weight: 16.07 },
      { inch: "6", od: 168.3, id: 154.1, thick: 7.11, weight: 28.26 },
    ],
  },
  "Plat Besi / Plate SS400": {
    title: "Tabel Berat Plat Besi",
    columns: ["Tebal (mm)", "Ukuran (ft)", "Berat (kg/lembar)", "Berat (kg/m²)"],
    rows: [
      { thick: 1.2, size: "4x8", weightSheet: 28, weightM2: 9.42 },
      { thick: 1.6, size: "4x8", weightSheet: 37, weightM2: 12.56 },
      { thick: 2, size: "4x8", weightSheet: 47, weightM2: 15.7 },
      { thick: 2.5, size: "4x8", weightSheet: 58, weightM2: 19.62 },
      { thick: 3, size: "4x8", weightSheet: 70, weightM2: 23.55 },
      { thick: 4, size: "4x8", weightSheet: 94, weightM2: 31.4 },
      { thick: 5, size: "4x8", weightSheet: 117, weightM2: 39.25 },
      { thick: 6, size: "4x8", weightSheet: 141, weightM2: 47.1 },
      { thick: 8, size: "4x8", weightSheet: 188, weightM2: 62.8 },
      { thick: 10, size: "4x8", weightSheet: 235, weightM2: 78.5 },
    ],
  },
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const product = products.find(p => slugify(p.name) === slug);
  const [activeTab, setActiveTab] = useState<"specs" | "table">("specs");
  
  const whatsappNumber = "6281326097800";
  
  if (!product) {
    notFound();
  }
  
  const tableData = steelTables[product.name as keyof typeof steelTables];
  const whatsappMessage = `Halo, saya tertarik dengan produk ${product.name} dari PT Hais Prima Indonesia. Mohon info harga dan stok terbaru.`;

  return (
    <>
      {/* Breadcrumb - FIXED */}
      <div className="bg-gray-100 py-3">
        <Container>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary-500 transition-colors">Beranda</Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-primary-500 transition-colors">Produk</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800 font-medium">{product.name}</span>
          </div>
        </Container>
      </div>

      {/* Product Detail */}
      <section className="section-padding">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center sticky top-24">
              <div className="relative h-80 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                {/* Category Badge - FIXED */}
                <span className="inline-block bg-primary-50 text-primary-600 text-xs font-semibold px-2 py-1 rounded mb-2">
                  {product.category} / {product.subCategory}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{product.name}</h1>
              </div>

              {/* Price Section - FIXED */}
              <div className="bg-primary-50 p-4 rounded-xl mb-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Harga</p>
                    <p className="text-2xl font-bold text-primary-600">{product.price}</p>
                    <p className="text-xs text-gray-400">*Harga dapat berubah sesuai volume pemesanan</p>
                  </div>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                  >
                    <FaWhatsapp size={18} />
                    Minta Penawaran
                  </a>
                </div>
              </div>

              {/* Tabs - FIXED */}
              <div className="flex gap-4 border-b mb-6">
                <button
                  onClick={() => setActiveTab("specs")}
                  className={`pb-2 px-1 font-medium transition-all ${
                    activeTab === "specs"
                      ? "text-primary-500 border-b-2 border-primary-500"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Spesifikasi
                </button>
                {tableData && (
                  <button
                    onClick={() => setActiveTab("table")}
                    className={`pb-2 px-1 font-medium transition-all ${
                      activeTab === "table"
                        ? "text-primary-500 border-b-2 border-primary-500"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Tabel Ukuran & Berat
                  </button>
                )}
              </div>

              {/* Tab Content: Spesifikasi */}
              {activeTab === "specs" && (
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Spesifikasi Teknis:</h4>
                    <ul className="space-y-2">
                      {product.specifications.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Tab Content: Tabel */}
              {activeTab === "table" && tableData && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">{tableData.title}</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          {tableData.columns.map((col: string, idx: number) => (
                            <th key={idx} className="border p-2 text-left font-semibold text-gray-700">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.rows.map((row: any, idx: number) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            {Object.values(row).map((val: any, i: number) => (
                              <td key={i} className="border p-2 text-gray-600">
                                {val}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    *Tabel untuk referensi. Untuk ukuran lain dapat dipesan sesuai kebutuhan.
                  </p>
                </div>
              )}

              {/* Additional Info */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-2"><FaRuler /><span>Custom size tersedia</span></div>
                  <div className="flex items-center gap-2"><FaWeightHanging /><span>Certified material</span></div>
                  <div className="flex items-center gap-2"><FaCube /><span>Nationwide delivery</span></div>
                  <div className="flex items-center gap-2"><FaChartLine /><span>EPC project support</span></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
