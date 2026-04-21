"use client";

import Container from "@/components/ui/Container";
import ContactForm from "@/components/shared/ContactForm";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Alamat",
      content: "Ruko CBP Galuh Mas Blok D No. 6D, Lt 2 Kelurahan Sukaharja,Kecamatan Teluk Jambe Timur,Kabupaten Karawang-Jawa Barat-41361",
      color: "text-blue-600",
    },
    {
      icon: FaPhone,
      title: "Telepon",
      content: "+62 21 1234 5678",
      color: "text-green-600",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "info@haisprima.com",
      color: "text-red-600",
    },
    {
      icon: FaClock,
      title: "Jam Operasional",
      content: "Senin - Jumat: 08:00 - 17:00, Sabtu: 08:00 - 12:00",
      color: "text-purple-600",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-lg text-blue-100 max-w-2xl">
              Siap membantu Anda dengan kebutuhan besi dan baja
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`${info.color} mt-1`}>
                      <info.icon className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{info.title}</h3>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 font-semibold">
                  💡 Butuh konsultasi? Tim kami siap membantu Anda memilih produk yang tepat!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
