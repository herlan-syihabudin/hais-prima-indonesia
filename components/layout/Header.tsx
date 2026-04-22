"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaPhone, FaWhatsapp, FaSearch } from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/products", label: "Produk" },
  { href: "/projects", label: "Proyek" },
  { href: "/contact", label: "Kontak" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  // Nomor WhatsApp yang benar
  const whatsappNumber = "6281326097800";
  const whatsappMessage = "Halo, saya tertarik dengan produk besi dan baja dari PT Hais Prima Indonesia";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2" 
            : "bg-gradient-to-b from-black/30 to-transparent py-5"
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image 
                  src="/images/logo.png" 
                  alt="Logo" 
                  width={isScrolled ? 45 : 50} 
                  height={isScrolled ? 45 : 50}
                  className="transition-all duration-300"
                />
                <div className="absolute -inset-1 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-lg md:text-xl transition-all duration-300 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}>
                  Hais Prima Indonesia
                </span>
                <span className={`text-xs hidden md:block transition-all duration-300 ${
                  isScrolled ? "text-gray-500" : "text-blue-200"
                }`}>
                  Supplier Besi & Baja Terpercaya
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? isScrolled 
                        ? "text-primary" 
                        : "text-white"
                      : isScrolled
                      ? "text-gray-700 hover:text-primary"
                      : "text-gray-200 hover:text-white"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        isScrolled ? "bg-primary" : "bg-blue-400"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isScrolled 
                    ? "text-gray-700 hover:bg-gray-100" 
                    : "text-white hover:bg-white/10"
                }`}
              >
                <FaSearch size={18} />
              </button>

              {/* WhatsApp Button - UPDATED with correct number */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  isScrolled
                    ? "bg-green-500 text-white hover:bg-green-600 shadow-md"
                    : "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20"
                }`}
              >
                <FaWhatsapp size={16} />
                <span>Hubungi Kami</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? "text-gray-700 hover:bg-gray-100" 
                    : "text-white hover:bg-white/10"
                }`}
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100"
            >
              <div className="container-custom py-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cari produk, layanan, atau informasi..."
                    className="w-full px-5 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    autoFocus
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
                    <FaSearch size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation Menu - UPDATED with correct number */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white shadow-lg border-t border-gray-100 overflow-hidden"
            >
              <div className="container-custom py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 font-medium transition-colors hover:text-primary ${
                      pathname === link.href ? "text-primary" : "text-gray-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                  >
                    <FaWhatsapp size={18} />
                    Hubungi via WhatsApp
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer to prevent content jump */}
      <div className="h-16 md:h-20" />
    </>
  );
}
