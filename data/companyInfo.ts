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

  // ========== TAMBAHAN DATA UNTUK SEO ==========
  seo: {
    title: "PT Hais Prima Indonesia - Supplier Besi Baja & Material Industri Terpercaya",
    description: "Distributor besi baja, stainless steel, pipa seamless, warehouse racking, dan atap UPVC. SNI Certified, EPC Ready, Melayani proyek konstruksi & industri di seluruh Indonesia.",
    keywords: "supplier besi baja, stainless steel, pipa seamless, warehouse racking, atap upvc, konstruksi, industri, EPC, tender support, material bangunan",
    author: "PT Hais Prima Indonesia",
    ogImage: "/og-image.jpg",
    ogImageAlt: "PT Hais Prima Indonesia - Supplier Besi Baja",
    twitterCard: "summary_large_image",
  },

  // ========== TAMBAHAN DATA UNTUK ORGANIZATION SCHEMA ==========
  organization: {
    legalName: "PT Hais Prima Indonesia",
    taxId: "XXXXX", // Tambahkan NPWP jika ada
    foundingDate: "2015-01-01",
    founders: ["Hais Prima Team"],
    employeeCount: "10-50",
    industries: ["Steel Distribution", "Industrial Supply", "Construction Material"],
    areaServed: "Indonesia",
    awards: [
      "ISO 9001:2015 Certified",
      "SNI Certified Supplier",
    ],
  },

  // ========== TAMBAHAN DATA UNTUK BRANCH / CABANG ==========
  branches: [
    {
      name: "Kantor Pusat",
      address: "Ruko CBP Galuh Mas Blok D No. 6D, Lt 2, Kelurahan Sukaharja, Kecamatan Teluk Jambe Timur, Kabupaten Karawang, Jawa Barat 41361",
      phone: "0811-8880-1198",
      email: "info@haisindonesia.com",
      isHeadquarter: true,
    },
  ],

  // ========== TAMBAHAN DATA UNTUK SHIPPING / DELIVERY ==========
  shipping: {
    coverage: "Seluruh Indonesia",
    minOrder: "Tergantung produk",
    deliveryTime: "1-14 hari tergantung lokasi",
    shippingPartners: ["Kerry Logistik", "JNE", "DHL", "Lokal Forwarder"],
  },

  // ========== TAMBAHAN DATA UNTUK PAYMENT ==========
  paymentMethods: [
    "Transfer Bank (BCA, Mandiri, BNI, BRI)",
    "Cash Before Delivery (CBD)",
  ],

  // ========== TAMBAHAN DATA UNTUK CATATAN KARYA ==========
  portfolioHighlights: [
    "Pabrik Cold Rolling Mill - Cilegon",
    "Distribution Center - Cikarang",
    "Jembatan Layang - Surabaya",
    "Warehouse Expansion - Jakarta",
  ],
};

// ========== HELPER FUNCTIONS ==========

// Helper untuk mendapatkan nomor WhatsApp
export const getWhatsAppLink = (message?: string) => {
  const baseUrl = `https://wa.me/${companyInfo.contact.whatsapp}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
};

// Helper untuk mendapatkan nomor telpon yang diformat
export const getFormattedPhone = () => {
  return companyInfo.contact.phone;
};

// Helper untuk mendapatkan alamat lengkap
export const getFullAddress = () => {
  return companyInfo.contact.address.full;
};

// Helper untuk mendapatkan schema.org Organization
export const getOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": companyInfo.name,
    "alternateName": companyInfo.shortName,
    "description": companyInfo.description,
    "url": process.env.NEXT_PUBLIC_BASE_URL || "https://haisprima.com",
    "logo": `${process.env.NEXT_PUBLIC_BASE_URL || "https://haisprima.com"}/images/logo.jpeg`,
    "foundingDate": companyInfo.organization.foundingDate,
    "founders": companyInfo.organization.founders.map(founder => ({
      "@type": "Person",
      "name": founder,
    })),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyInfo.contact.address.street,
      "addressLocality": companyInfo.contact.address.city,
      "addressRegion": companyInfo.contact.address.province,
      "postalCode": companyInfo.contact.address.postalCode,
      "addressCountry": "ID",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": companyInfo.contact.phoneInternational,
      "contactType": "customer service",
      "availableLanguage": ["Indonesian", "English"],
    },
    "sameAs": [
      companyInfo.socialMedia.facebook,
      companyInfo.socialMedia.instagram,
      companyInfo.socialMedia.linkedin,
    ],
    "award": companyInfo.organization.awards,
  };
};

// Helper untuk mendapatkan schema.org LocalBusiness
export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": companyInfo.name,
    "description": companyInfo.description,
    "image": `${process.env.NEXT_PUBLIC_BASE_URL || "https://haisprima.com"}/images/logo.jpeg`,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyInfo.contact.address.street,
      "addressLocality": companyInfo.contact.address.city,
      "addressRegion": companyInfo.contact.address.province,
      "postalCode": companyInfo.contact.address.postalCode,
      "addressCountry": "ID",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.322,  // Update dengan koordinat real
      "longitude": 107.234, // Update dengan koordinat real
    },
  };
};

// Helper untuk meta tags
export const getMetaTags = () => {
  return {
    title: companyInfo.seo.title,
    description: companyInfo.seo.description,
    keywords: companyInfo.seo.keywords,
    openGraph: {
      title: companyInfo.seo.title,
      description: companyInfo.seo.description,
      url: process.env.NEXT_PUBLIC_BASE_URL,
      siteName: companyInfo.name,
      images: [
        {
          url: companyInfo.seo.ogImage,
          width: 1200,
          height: 630,
          alt: companyInfo.seo.ogImageAlt,
        },
      ],
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: companyInfo.seo.twitterCard,
      title: companyInfo.seo.title,
      description: companyInfo.seo.description,
      image: companyInfo.seo.ogImage,
    },
  };
};

// Default export
export default companyInfo;
