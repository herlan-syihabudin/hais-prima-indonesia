"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  
  // Nomor WhatsApp sudah diupdate ke 081326097800
  const whatsappNumber = "6281326097800";
  const defaultMessage = "Halo, saya tertarik dengan produk besi dan baja dari PT Hais Prima Indonesia";

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 mb-2 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <FaWhatsapp className="text-green-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold">CS Hais Prima</h3>
                    <p className="text-xs text-green-100">Online • Typically replies instantly</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-white/80 hover:text-white transition"
                >
                  <FaTimes size={16} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-4">
              <div className="mb-4">
                <div className="bg-gray-100 rounded-lg p-3 mb-3">
                  <p className="text-sm text-gray-700">
                    👋 Halo! Ada yang bisa kami bantu? Silakan pilih kebutuhan Anda:
                  </p>
                </div>
                
                <div className="space-y-2">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo, saya ingin info produk besi dan baja")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-green-50 rounded-lg transition group"
                  >
                    <FaWhatsapp className="text-green-500 text-lg" />
                    <div>
                      <p className="font-medium text-gray-800 group-hover:text-green-600">Info Produk</p>
                      <p className="text-xs text-gray-500">Dapatkan spesifikasi dan harga</p>
                    </div>
                  </a>
                  
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo, saya ingin minta penawaran harga untuk proyek")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-green-50 rounded-lg transition group"
                  >
                    <FaWhatsapp className="text-green-500 text-lg" />
                    <div>
                      <p className="font-medium text-gray-800 group-hover:text-green-600">Minta Penawaran</p>
                      <p className="text-xs text-gray-500">Dapatkan harga terbaik</p>
                    </div>
                  </a>
                  
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo, saya butuh konsultasi teknis untuk proyek")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-green-50 rounded-lg transition group"
                  >
                    <FaWhatsapp className="text-green-500 text-lg" />
                    <div>
                      <p className="font-medium text-gray-800 group-hover:text-green-600">Konsultasi Teknis</p>
                      <p className="text-xs text-gray-500">Bantuan untuk proyek Anda</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Quick Response Info */}
              <div className="border-t border-gray-100 pt-3 mt-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-gray-500">CS Online</span>
                  </div>
                  <span className="text-gray-400">Jam operasional: 08:00 - 17:00</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip */}
      {showTooltip && !isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg"
        >
          <div className="flex items-center gap-2">
            <FaWhatsapp size={14} className="text-green-400" />
            <span>Chat dengan kami</span>
          </div>
          <div className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-800 rotate-45"></div>
        </motion.div>
      )}

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <FaWhatsapp className="text-2xl" />
        
        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
          1
        </span>

        {/* Ripple Effect */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></span>
      </motion.button>
    </div>
  );
}
