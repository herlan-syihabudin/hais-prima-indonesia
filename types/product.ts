export interface Product {
  id: number;
  name: string;
  category: string;        // Main category: Material Steel, Material SUS, Warehouse Racking, Atap UPVC
  subCategory: string;     // Sub category: Plate, WF, Pipa, dll
  description: string;
  price: string;
  image: string;
  specifications: string[];
  rating?: number;         // Opsional: rating produk (1-5)
  stock?: string;          // Opsional: status stok (Ready Stock / Pre Order / Habis)
  minOrder?: string;       // Opsional: minimal order
  unit?: string;           // Opsional: satuan (kg, batang, lembar, m², set, pcs)
}
