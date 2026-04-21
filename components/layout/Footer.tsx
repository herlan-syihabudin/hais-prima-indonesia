import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
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
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">Tentang Kami</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition">Produk</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition">Proyek</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Kontak</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <FaPhone className="text-xs" /> +62 21 1234 5678
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="text-xs" /> +62 812 3456 7890
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-xs" /> info@haisprima.com
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold mb-4">Alamat</h4>
            <div className="text-sm text-gray-400 leading-relaxed">
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-xs mt-0.5 flex-shrink-0" />
                <span>
                  Ruko CBP Galuh Mas Blok D No. 6D, Lt 2<br />
                  Kelurahan Sukaharja, Kecamatan Teluk Jambe Timur<br />
                  Kabupaten Karawang - Jawa Barat 41361
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                <FaLinkedin />
              </a>
            </div>
            <p className="text-gray-500 text-sm text-center">
              &copy; {currentYear} PT Hais Prima Indonesia. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
