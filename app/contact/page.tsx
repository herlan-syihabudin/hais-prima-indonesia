// src/app/contact/page.tsx
"use client";

import { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/shared/ContactForm";
import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaWhatsapp, 
  FaInstagram, 
  FaLinkedin, 
  FaFacebook,
  FaBuilding,
  FaHeadset
} from "react-icons/fa";

// ========== METADATA UNTUK SEO ==========
export const metadata: Metadata = {
  title: "Hubungi Kami - Konsultasi Besi Baja | PT Hais Prima Indonesia",
  description: "Butuh penawaran harga atau konsultasi produk besi baja, stainless steel, warehouse racking, dan atap UPVC? Hubungi tim CS kami di Karawang. Respon cepat dalam 1x24 jam.",
  keywords: "kontak, customer service, konsultasi besi baja, penawaran harga, alamat kantor karawang",
  openGraph: {
    title: "Hubungi PT Hais Prima Indonesia - Konsultasi Material Industri",
    description: "Tim support kami siap membantu konsultasi teknis, permintaan penawaran, dan dukungan proyek Anda. Chat via WhatsApp atau kirim email.",
    url: "https://haisindonesia.com/contact",
    siteName: "PT Hais Prima Indonesia",
    images: [
      {
        url: "https://haisindonesia.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PT Hais Prima Indonesia - Kontak & Customer Support",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://haisindonesia.com/contact",
  },
};

export default function ContactPage() {
  const whatsappNumber = "6281188801198";
  const phoneNumber = "6281188801198";
  const emailAddress = "info@haisindonesia.com";

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Kantor Pusat",
      content: "Ruko CBP Galuh Mas Blok D No. 6D, Lt 2",
      detail: "Kelurahan Sukaharja, Kecamatan Teluk Jambe Timur, Kabupaten Karawang - Jawa Barat 41361",
      color: "text-red-500",
      link: "https://maps.google.com/?q=Ruko+CBP+Galuh+Mas+Blok+D+No.+6D+Karawang",
      linkText: "Lihat di Google Maps →",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp Business",
      content: "0811-8880-1198",
      detail: "Fast response within 5 minutes",
      color: "text-green-500",
      link: `https://wa.me/${whatsappNumber}`,
      linkText: "Chat Sekarang →",
    },
    {
      icon: FaPhone,
      title: "Telepon / Hotline",
      content: "0811-8880-1198",
      detail: "Senin - Sabtu, 08:00 - 17:00",
      color: "text-blue-500",
      link: `tel:${phoneNumber}`,
      linkText: "Hubungi Sekarang →",
    },
    {
      icon: FaEnvelope,
      title: "Email Resmi",
      content: emailAddress,
      detail: "Balasan dalam 1x24 jam",
      color: "text-yellow-500",
      link: `mailto:${emailAddress}`,
      linkText: "Kirim Email →",
    },
  ];

  const officeHours = [
    { day: "Senin - Jumat", hours: "08:00 - 17:00", type: "Kantor & CS" },
    { day: "Sabtu", hours: "08:00 - 12:00", type: "Kantor" },
    { day: "Minggu & Hari Libur", hours: "Libur", type: "-" },
  ];

  const quickContacts = [
    { label: "Sales & Marketing", number: "0813-2609-7800", icon: FaHeadset },
    { label: "Technical Support", number: "0813-2609-7800", icon: FaBuilding },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
              <FaHeadset className="text-white/80 text-xs" />
              <span className="text-xs tracking-wider text-white/90">CUSTOMER SUPPORT</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-lg text-primary-100 max-w-2xl">
              Tim kami siap membantu konsultasi teknis, permintaan penawaran, dan dukungan proyek Anda
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs text-white/90">CS Online</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
                <span className="text-xs text-white/90">Response &lt; 5 menit</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-3 py-1 mb-4">
                <FaBuilding className="text-primary-500 text-xs" />
                <span className="text-xs font-semibold text-primary-600">INFORMASI KONTAK</span>
              </div>
              <h2 className="text-2xl font-bold mb-6">Siap Membantu Anda</h2>
              
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all">
                    <div className={`${info.color} mt-1`}>
                      <info.icon className="text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{info.title}</h3>
                      <p className="text-gray-800 font-medium">{info.content}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{info.detail}</p>
                      {info.link && (
                        <a
                          href={info.link}
                          target={info.title.includes("Google") ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-primary-500 text-sm font-medium hover:text-primary-600"
                        >
                          {info.linkText}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="mt-8 p-5 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <FaClock className="text-purple-500" />
                  <h3 className="font-semibold text-gray-800">Jam Operasional</h3>
                </div>
                <div className="space-y-2">
                  {officeHours.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm border-b border-gray-200 pb-2">
                      <span className="text-gray-600">{item.day}</span>
                      <div className="text-right">
                        <span className="font-medium text-gray-800">{item.hours}</span>
                        <span className="text-xs text-gray-400 ml-2">{item.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contacts */}
              <div className="mt-6">
                <h3 className="font-semibold text-gray-800 mb-3">Kontak Langsung</h3>
                <div className="space-y-2">
                  {quickContacts.map((contact, idx) => (
                    <a
                      key={idx}
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-green-50 rounded-xl hover:bg-green-100 transition"
                    >
                      <div className="flex items-center gap-3">
                        <contact.icon className="text-green-600" />
                        <div>
                          <div className="text-sm font-semibold text-gray-800">{contact.label}</div>
                          <div className="text-xs text-gray-500">{contact.number}</div>
                        </div>
                      </div>
                      <FaWhatsapp className="text-green-500" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3">Ikuti Kami</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-500 hover:text-white transition">
                    <FaFacebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-pink-600 hover:text-white transition">
                    <FaInstagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition">
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-6 p-3 bg-primary-50 rounded-lg border border-primary-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <FaHeadset className="text-primary-500 text-sm" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-800">Fast Response Guarantee</p>
                    <p className="text-xs text-primary-600">Tim CS online, balasan dalam &lt; 5 menit</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-xl font-bold mb-4">Lokasi Kantor</h3>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31762.1722241426!2d107.2146055!3d-6.3332488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e697b6b8b6b6b6b%3A0x6b6b6b6b6b6b6b6b!2sKarawang!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi PT Hais Prima Indonesia"
              ></iframe>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Ruko CBP Galuh Mas Blok D No. 6D, Lt 2, Karawang - Jawa Barat
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
