"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890";
  const message = "Halo, saya tertarik dengan produk besi dan baja dari PT Hais Prima Indonesia";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50 animate-bounce"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}
