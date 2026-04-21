export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  specifications: string[]; // Pastikan ini ada
  rating?: number; // Opsional
  stock?: string; // Opsional
}
