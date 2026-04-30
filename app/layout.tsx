import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

// Inter untuk body text
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

// Playfair Display untuk headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://haisindonesia.com"),
  title: {
    default: "PT Hais Prima Indonesia - Supplier Besi Baja & Material Industri Terpercaya",
    template: "%s | PT Hais Prima Indonesia",
  },
  description: "Distributor besi baja, stainless steel, pipa seamless, warehouse racking, dan atap UPVC. SNI Certified, EPC Ready, Melayani proyek konstruksi & industri di seluruh Indonesia.",
  keywords: [
    "supplier besi baja",
    "besi beton",
    "hollow",
    "wf beam",
    "h beam",
    "wiremesh",
    "plat besi",
    "stainless steel",
    "pipa seamless",
    "warehouse racking",
    "atap upvc",
    "konstruksi",
    "EPC",
    "tender support",
  ],
  authors: [{ name: "PT Hais Prima Indonesia" }],
  creator: "PT Hais Prima Indonesia",
  publisher: "PT Hais Prima Indonesia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "PT Hais Prima Indonesia - Supplier Besi Baja & Material Industri",
    description: "Distributor besi baja, stainless steel, pipa seamless, warehouse racking, dan atap UPVC. SNI Certified, EPC Ready.",
    url: "https://haisindonesia.com",
    siteName: "PT Hais Prima Indonesia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PT Hais Prima Indonesia - Supplier Besi Baja Terpercaya",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Hais Prima Indonesia - Supplier Besi Baja",
    description: "Distributor besi baja, stainless steel, pipa seamless, warehouse racking, dan atap UPVC.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://haisindonesia.com",
  },
  category: "industrial-supply",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0EA5E9",
};

// Schema.org JSON-LD untuk Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "PT Hais Prima Indonesia",
  "alternateName": "Hais Prima",
  "description": "Distributor besi baja, stainless steel, pipa seamless, warehouse racking, dan atap UPVC. SNI Certified, EPC Ready.",
  "url": "https://haisindonesia.com",
  "logo": "https://haisindonesia.com/images/logo.jpeg",
  "foundingDate": "2015",
  "foundingLocation": "Karawang, Jawa Barat",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ruko CBP Galuh Mas Blok D No. 6D, Lt 2",
    "addressLocality": "Karawang",
    "addressRegion": "Jawa Barat",
    "postalCode": "41361",
    "addressCountry": "ID",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+6281188801198",
    "contactType": "customer service",
    "availableLanguage": ["Indonesian", "English"],
  },
  "sameAs": [
    "https://facebook.com/haisprima",
    "https://instagram.com/haisprima",
    "https://linkedin.com/company/haisprima",
  ],
  "award": [
    "ISO 9001:2015 Certified",
    "SNI Certified Supplier",
    "EPC Ready",
  ],
};

// Schema.org JSON-LD untuk LocalBusiness
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "PT Hais Prima Indonesia",
  "description": "Supplier dan distributor besi baja, stainless steel, warehouse racking, dan atap UPVC di Karawang dan seluruh Indonesia.",
  "image": "https://haisindonesia.com/images/logo.jpeg",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ruko CBP Galuh Mas Blok D No. 6D, Lt 2",
    "addressLocality": "Karawang",
    "addressRegion": "Jawa Barat",
    "postalCode": "41361",
    "addressCountry": "ID",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.322,   // Update dengan koordinat real
    "longitude": 107.234,  // Update dengan koordinat real
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "08:00",
      "closes": "12:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Google Analytics (opsional, tambahkan nanti) */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script> */}
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
