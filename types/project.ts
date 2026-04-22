// src/types/project.ts
export interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  image: string;
  description: string;
  client?: string;           // Nama client (optional)
  clientType?: string;       // BUMN / Private / Industrial
  projectType?: string;      // EPC Project / Industrial Supply / Infrastructure
  scale?: string;            // Skala proyek
  materials?: string[];      // Material yang digunakan
  steelTonage?: string;      // Tonase baja
}
