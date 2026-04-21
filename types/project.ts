export interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  image: string;
  description: string;
  clientType?: string; // "Kontraktor Swasta", "Pemerintah", dll
  projectType?: string; // "Commercial", "Residential", "Industrial"
  materials?: string[]; // Material yang digunakan
}
