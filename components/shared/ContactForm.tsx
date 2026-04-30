"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaWhatsapp, FaEnvelope, FaPhone, FaUser, FaBuilding } from "react-icons/fa";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  productInterest: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      console.log("Form data:", data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Nomor telepon konsisten dengan contact page
  const phoneNumber = "0811-8880-1198";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-2">Dapatkan Penawaran</h2>
      <p className="text-gray-600 mb-6">Isi form untuk konsultasi gratis</p>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 text-sm font-medium">
            <FaUser className="inline mr-2" /> Nama Lengkap *
          </label>
          <input
            {...register("name", { required: "Nama wajib diisi" })}
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2 text-sm font-medium">
            <FaBuilding className="inline mr-2" /> Perusahaan
          </label>
          <input
            {...register("company")}
            placeholder="PT. Contoh"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 text-sm font-medium">
            <FaEnvelope className="inline mr-2" /> Email *
          </label>
          <input
            type="email"
            {...register("email", { 
              required: "Email wajib diisi",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email tidak valid"
              }
            })}
            placeholder="john@company.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2 text-sm font-medium">
            <FaPhone className="inline mr-2" /> Telepon *
          </label>
          <input
            {...register("phone", { required: "Telepon wajib diisi" })}
            placeholder={phoneNumber}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2 text-sm font-medium">Produk yang diminati</label>
        <select
          {...register("productInterest")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
        >
          <option value="">Pilih produk</option>
          <option value="besi-beton">Besi Beton</option>
          <option value="hollow">Besi Hollow</option>
          <option value="wf-beam">WF/H-Beam</option>
          <option value="wiremesh">Wiremesh</option>
          <option value="plat-besi">Plat Besi</option>
          <option value="pipa-seamless">Pipa Seamless</option>
          <option value="stainless">Stainless Steel</option>
          <option value="racking">Warehouse Racking</option>
          <option value="upvc">Atap UPVC</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2 text-sm font-medium">Pesan *</label>
        <textarea
          {...register("message", { required: "Pesan wajib diisi" })}
          rows={4}
          placeholder="Ceritakan kebutuhan proyek Anda..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      {submitStatus === "success" && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
          ✓ Pesan berhasil dikirim! Tim sales akan menghubungi Anda dalam 1x24 jam.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          ✗ Gagal mengirim pesan. Silakan hubungi via WhatsApp di {phoneNumber}.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition shadow-lg disabled:opacity-50"
      >
        {isSubmitting ? "Mengirim..." : "Kirim Permintaan"}
      </button>

      {/* WhatsApp Alternative CTA */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500 mb-2">Atau hubungi langsung via WhatsApp</p>
        <a
          href={`https://wa.me/${phoneNumber.replace(/-/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium"
        >
          <FaWhatsapp size={16} />
          Chat via WhatsApp
        </a>
      </div>

      <p className="text-center text-xs text-gray-500 mt-4">
        Tim kami akan merespon dalam waktu 1x24 jam
      </p>
    </form>
  );
}
