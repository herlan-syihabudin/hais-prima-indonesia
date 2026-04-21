import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PT Hais Prima Indonesia</h3>
            <p className="text-gray-400 text-sm">
              Supplier besi dan baja terpercaya untuk pembangunan Indonesia.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-white">Tentang Kami</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white">Produk</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white">Proyek</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Kontak</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <FaPhone className="text-xs" /> +62 21 1234 5678
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-xs" /> info@haisprima.com
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-xs" /> Jakarta Timur, Indonesia
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-white text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} PT Hais Prima Indonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
