import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Nomor WhatsApp yang benar
  const whatsappNumber = "6281326097800";
  const phoneNumber = "6281326097800";
  const emailAddress = "info@haisprima.com";

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">PT Hais Prima Indonesia</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Supplier besi dan baja terpercaya untuk pembangunan Indonesia.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition text-lg">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition text-lg">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition text-lg">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">Tentang Kami</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition">Produk</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition">Proyek</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Kontak</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition">Kebijakan Privasi</Link></li>
            </ul>
          </div>

          {/* Contact Info - UPDATED with correct numbers */}
          <div>
            <h4 className="font-semibold mb-4">Kontak Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition group">
                <FaWhatsapp className="text-green-500" />
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                >
                  0813-2609-7800
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition group">
                <FaPhone className="text-blue-400" />
                <a 
                  href={`tel:${phoneNumber}`}
                  className="hover:text-blue-400 transition"
                >
                  0813-2609-7800
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition group">
                <FaEnvelope className="text-red-400" />
                <a 
                  href={`mailto:${emailAddress}`}
                  className="hover:text-red-400 transition"
                >
                  info@haisprima.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold mb-4">Alamat Kantor</h4>
            <div className="text-sm text-gray-400 leading-relaxed">
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-400 mt-0.5 flex-shrink-0" />
                <span>
                  Ruko CBP Galuh Mas Blok D No. 6D, Lt 2<br />
                  Kelurahan Sukaharja,<br />
                  Kecamatan Teluk Jambe Timur,<br />
                  Kabupaten Karawang - Jawa Barat 41361
                </span>
              </p>
            </div>
            {/* Google Maps Link */}
            <a 
              href="https://maps.google.com/?q=Ruko+CBP+Galuh+Mas+Blok+D+No.+6D+Karawang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-xs text-blue-400 hover:text-blue-300 transition"
            >
              <FaMapMarkerAlt size={10} />
              Lihat di Google Maps →
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs text-center">
              &copy; {currentYear} PT Hais Prima Indonesia. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs text-center">
              Supplier Besi & Baja Terpercaya di Karawang dan Sekitarnya
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
