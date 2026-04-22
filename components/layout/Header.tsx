"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaWhatsapp, FaSearch, FaChevronDown, FaIndustry, FaShieldAlt, FaWarehouse, FaHome } from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Beranda" },
  { 
    label: "Produk", 
    hasDropdown: true,
    icon: FaIndustry,
    dropdown: [
      {
        title: "Material Steel",
        icon: FaIndustry,
        href: "/products?category=Material+Steel",
        submenu: [
          { label: "Plate / Plat Besi", href: "/products?category=Material+Steel&sub=Plate" },
          { label: "WF Beam / H-Beam", href: "/products?category=Material+Steel&sub=WF" },
          { label: "Siku / UNP", href: "/products?category=Material+Steel&sub=Siku" },
          { label: "Pipa Besi & Galvanis", href: "/products?category=Material+Steel&sub=Pipa" },
          { label: "Pipa Seamless SCH 40/80", href: "/products?category=Material+Steel&sub=Seamless" },
          { label: "Fitting & Flange", href: "/products?category=Material+Steel&sub=Fitting" },
        ]
      },
      {
        title: "Material SUS (Stainless)",
        icon: FaShieldAlt,
        href: "/products?category=Material+SUS",
        submenu: [
          { label: "Plat SUS 304", href: "/products?category=Material+SUS&sub=Plate" },
          { label: "Pipa SUS 304", href: "/products?category=Material+SUS&sub=Pipa" },
          { label: "Siku / UNP SUS", href: "/products?category=Material+SUS&sub=Siku" },
          { label: "Fitting & Flange SUS", href: "/products?category=Material+SUS&sub=Fitting" },
        ]
      },
      {
        title: "Warehouse Racking",
        icon: FaWarehouse,
        href: "/products?category=Warehouse+Racking",
        submenu: [
          { label: "Pallet Racking System", href: "/products?category=Warehouse+Racking&sub=Pallet" },
          { label: "Heavy Duty Racking", href: "/products?category=Warehouse+Racking&sub=Heavy" },
          { label: "Mezzanine Floor", href: "/products?category=Warehouse+Racking&sub=Mezzanine" },
          { label: "Drive-in Racking", href: "/products?category=Warehouse+Racking&sub=Drive-in" },
        ]
      },
      {
        title: "Atap UPVC",
        icon: FaHome,
        href: "/products?category=Atap+UPVC",
        submenu: [
          { label: "Atap UPVC", href: "/products?category=Atap+UPVC&sub=Roofing" },
          { label: "Lisplang UPVC", href: "/products?category=Atap+UPVC&sub=Lisplang" },
          { label: "Talang Air UPVC", href: "/products?category=Atap+UPVC&sub=Talang" },
          { label: "Aksesoris UPVC", href: "/products?category=Atap+UPVC&sub=Aksesoris" },
        ]
      },
    ]
  },
  { href: "/projects", label: "Proyek" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/contact", label: "Kontak" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const whatsappNumber = "6281326097800";
  const whatsappMessage = "Halo, saya tertarik dengan produk besi dan baja dari PT Hais Prima Indonesia";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
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

            {/* Desktop Navigation with Dropdown */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  {link.hasDropdown ? (
                    <>
                      <button
                        className={`relative font-medium transition-all duration-300 flex items-center gap-1 ${
                          isScrolled ? "text-gray-700 hover:text-primary" : "text-gray-200 hover:text-white"
                        }`}
                      >
                        {link.label}
                        <FaChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />
                      </button>
                      
                      {/* Mega Dropdown Menu */}
                      <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="grid grid-cols-2 gap-4 p-6">
                          {link.dropdown.map((item) => (
                            <div key={item.title} className="group/sub relative">
                              <Link
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-blue-50 rounded-xl transition"
                              >
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                  {item.icon && <item.icon size={20} />}
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-800">{item.title}</div>
                                  <div className="text-xs text-gray-500">Lihat semua produk →</div>
                                </div>
                              </Link>
                              <div className="mt-2 pl-4 space-y-1">
                                {item.submenu.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    className="block px-4 py-1.5 text-sm text-gray-600 hover:text-primary hover:bg-blue-50 rounded-lg transition"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-gray-100 p-4 bg-gray-50 rounded-b-2xl">
                          <Link 
                            href="/products" 
                            className="flex items-center justify-between text-primary font-semibold hover:gap-2 transition-all"
                          >
                            <span>Lihat Semua Produk</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    link.href && (
                      <Link
                        href={link.href}
                        className={`relative font-medium transition-all duration-300 ${
                          pathname === link.href
                            ? isScrolled ? "text-primary" : "text-white"
                            : isScrolled ? "text-gray-700 hover:text-primary" : "text-gray-200 hover:text-white"
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
                    )
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
                }`}
              >
                <FaSearch size={18} />
              </button>

              {/* WhatsApp Button */}
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
                  isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
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
                    placeholder="Cari produk: Plate, WF, Pipa Seamless, Racking, Atap UPVC..."
                    className="w-full px-5 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    autoFocus
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
                    <FaSearch size={18} />
                  </button>
                </div>
                <div className="flex gap-4 mt-3 text-xs text-gray-400">
                  <span>Populer:</span>
                  <Link href="/products?category=Material+Steel&sub=WF" className="hover:text-primary">WF Beam</Link>
                  <Link href="/products?category=Material+Steel&sub=Seamless" className="hover:text-primary">Pipa Seamless</Link>
                  <Link href="/products?category=Warehouse+Racking" className="hover:text-primary">Pallet Racking</Link>
                  <Link href="/products?category=Atap+UPVC" className="hover:text-primary">Atap UPVC</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white shadow-lg border-t border-gray-100 overflow-hidden max-h-[80vh] overflow-y-auto"
            >
              <div className="container-custom py-4">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.hasDropdown ? (
                      <MobileDropdown item={link} pathname={pathname} setIsOpen={setIsOpen} />
                    ) : (
                      link.href && (
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`block py-3 font-medium transition-colors hover:text-primary ${
                            pathname === link.href ? "text-primary" : "text-gray-700"
                          }`}
                        >
                          {link.label}
                        </Link>
                      )
                    )}
                  </div>
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

      {/* Spacer */}
      <div className="h-16 md:h-20" />
    </>
  );
}

// Component for Mobile Dropdown
function MobileDropdown({ item, pathname, setIsOpen }: { item: any; pathname: string; setIsOpen: (open: boolean) => void }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full py-3 font-medium text-gray-700 hover:text-primary transition"
      >
        <span>{item.label}</span>
        <FaChevronDown className={`transform transition-transform ${isExpanded ? "rotate-180" : ""}`} size={12} />
      </button>
      {isExpanded && (
        <div className="pl-4 pb-3 space-y-3">
          {item.dropdown.map((subItem: any) => (
            <div key={subItem.title} className="space-y-1">
              <Link
                href={subItem.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm font-semibold text-gray-800 hover:text-primary"
              >
                {subItem.title}
              </Link>
              <div className="pl-3 space-y-1">
                {subItem.submenu.map((sub: any) => (
                  <Link
                    key={sub.label}
                    href={sub.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-1.5 text-sm text-gray-600 hover:text-primary"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
