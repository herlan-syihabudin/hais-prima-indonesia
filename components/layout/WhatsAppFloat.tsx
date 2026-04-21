"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890";
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
            className="absolute bottom-16 right-0 mb-2 w-64 bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="bg-green-500 p-3 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaWhatsapp size={20} />
                <span className="font-semibold text-sm">WhatsApp Chat</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80">
                <FaTimes size={14} />
              </button>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">Ada yang bisa kami bantu?</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-white text-center py-2 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Mulai Chat →
              </a>
              <p className="text-xs text-gray-400 text-center mt-3">
                Response time &lt; 5 menit
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showTooltip && !isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap"
        >
          💬 Chat dengan kami
          <div className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-800 rotate-45"></div>
        </motion.div>
      )}

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
          1
        </span>
      </motion.button>
    </div>
  );
}
