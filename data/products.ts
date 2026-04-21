import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Besi Beton SNI",
    category: "Besi Beton",
    description: "Besi beton berkualitas SNI untuk konstruksi bangunan",
    price: "Rp 15.000/kg",
    image: "/images/products/besi-beton.jpg",
    specifications: ["Diameter 6-32mm", "Panjang 12m", "Bersertifikat SNI"],
  },
  {
    id: 2,
    name: "Besi Hollow",
    category: "Hollow",
    description: "Besi hollow galvanis untuk konstruksi ringan",
    price: "Rp 18.000/batang",
    image: "/images/products/hollow.jpg",
    specifications: ["Ukuran 20x20 - 100x100mm", "Tebal 1.2-3.2mm", "Panjang 6m"],
  },
  {
    id: 3,
    name: "WF Beam",
    category: "WF/H-Beam",
    description: "Besi WF untuk konstruksi berat dan gedung bertingkat",
    price: "Rp 16.000/kg",
    image: "/images/products/wf-hbeam.jpg",
    specifications: ["Ukuran 150-900mm", "Standar JIS/SNI", "Panjang 12m"],
  },
  {
    id: 4,
    name: "Wiremesh M8",
    category: "Wiremesh",
    description: "Wiremesh untuk dak beton dan jalan",
    price: "Rp 150.000/lembar",
    image: "/images/products/wiremesh.jpg",
    specifications: ["Ukuran 2.1x5.4m", "Diameter 8mm", "Jarak 15cm"],
  },
  {
    id: 5,
    name: "Plat Besi",
    category: "Plat Besi",
    description: "Plat besi hitam untuk berbagai kebutuhan industri",
    price: "Rp 14.000/kg",
    image: "/images/products/plat-besi.jpg",
    specifications: ["Tebal 1-20mm", "Ukuran 4x8 feet", "Surface plate"],
  },
];
