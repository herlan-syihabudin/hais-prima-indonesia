// src/data/companyInfo.ts

export const companyInfo = {
  name: "PT Hais Prima Indonesia",
  shortName: "Hais Prima",
  description: "Distributor besi baja, stainless steel, dan material industri terpercaya di Indonesia",
  founded: 2015,
  tagline: "Supplier Besi & Baja Solusi Material Industri",
  
  vision: "Menjadi mitra terpercaya dalam pembangunan Indonesia melalui penyediaan material berkualitas dan layanan unggul",
  
  mission: [
    "Menyediakan material bersertifikat SNI & standar internasional dengan harga kompetitif",
    "Memberikan layanan teknis dan pendampingan proyek dari tender hingga operasional",
    "Membangun kemitraan jangka panjang yang saling menguntungkan",
    "Mendukung proyek EPC, konstruksi, dan infrastruktur nasional",
  ],
  
  // FIXED: Konsisten dengan nomor di halaman lain
  contact: {
    phone: "0811-8880-1198",
    phoneInternational: "+6281188801198",
    whatsapp: "6281188801198",
    email: "info@haisindonesia.com",
    emailAlt: "sales@haisindonesia.com",
    address: {
      street: "Ruko CBP Galuh Mas Blok D No. 6D, Lt 2",
      village: "Kelurahan Sukaharja",
      district: "Kecamatan Teluk Jambe Timur",
      city: "Karawang",
      province: "Jawa Barat",
      postalCode: "41361",
      full: "Ruko CBP Galuh Mas Blok D No. 6D, Lt 2, Kelurahan Sukaharja, Kecamatan Teluk Jambe Timur, Kabupaten Karawang, Jawa Barat 41361"
    },
    mapsUrl: "https://maps.google.com/?q=Ruko+CBP+Galuh+Mas+Blok+D+No.+6D+Karawang",
  },
  
  socialMedia: {
    facebook: "https://facebook.com/haisprima",
    instagram: "https://instagram.com/haisprima",
    linkedin: "https://linkedin.com/company/haisprima",
  },
  
  // Tambahan data untuk SEO & Trust
  certifications: [
    "ISO 9001:2015",
    "SNI Certified",
    "EPC Ready",
  ],
  
  businessHours: {
    mondayFriday: "08:00 - 17:00",
    saturday: "08:00 - 12:00",
    sunday: "Tutup",
  },
  
  stats: {
    projects: "500+",
    clients: "200+",
    coverage: "34 Provinsi",
    satisfaction: "98%",
  },
};

// Helper function untuk mendapatkan nomor WhatsApp
export const getWhatsAppLink = (message?: string) => {
  const baseUrl = `https://wa.me/${companyInfo.contact.whatsapp}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
};

// Helper function untuk mendapatkan nomor telpon yang diformat
export const getFormattedPhone = () => {
  return companyInfo.contact.phone;
};

// Helper function untuk mendapatkan alamat lengkap
export const getFullAddress = () => {
  return companyInfo.contact.address.full;
};
