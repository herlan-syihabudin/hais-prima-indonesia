"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Nama Lengkap *</label>
        <input
          {...register("name", { required: "Nama wajib diisi" })}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email *</label>
        <input
          type="email"
          {...register("email", { 
            required: "Email wajib diisi",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email tidak valid"
            }
          })}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Telepon</label>
        <input
          {...register("phone")}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Pesan *</label>
        <textarea
          {...register("message", { required: "Pesan wajib diisi" })}
          rows={5}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      {submitStatus === "success" && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          Gagal mengirim pesan. Silakan coba lagi.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-3 rounded font-semibold hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
      </button>
    </form>
  );
}
