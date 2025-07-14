"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format pesan untuk WhatsApp
    const whatsappMessage = `Halo, saya ingin menghubungi Anda:

*Nama:* ${formData.name}
*Email:* ${formData.email}
*Telepon:* ${formData.phone}
*Subjek:* ${formData.subject}

*Pesan:*
${formData.message}

Terima kasih.`;

    const phoneNumber = "6288242423267";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const contactMethods = [
    {
      icon: "📱",
      title: "WhatsApp",
      detail: "088242423267",
      description: "Chat langsung dengan customer service kami",
      action: "https://wa.me/6288242423267",
    },
    {
      icon: "📞",
      title: "Telepon",
      detail: "088242423267",
      description: "Hubungi kami langsung untuk konsultasi",
      action: "tel:+6288242423267",
    },
    {
      icon: "✉️",
      title: "Email",
      detail: "info@bahanbangunanstore.com",
      description: "Kirim email untuk pertanyaan detail",
      action: "mailto:info@bahanbangunanstore.com",
    },
    {
      icon: "📍",
      title: "Lokasi",
      detail: "Indonesia",
      description: "Melayani pengiriman ke seluruh Indonesia",
      action: "#",
    },
  ];

  const operatingHours = [
    { day: "Senin - Jumat", hours: "08:00 - 17:00 WIB" },
    { day: "Sabtu", hours: "08:00 - 15:00 WIB" },
    { day: "Minggu", hours: "08:00 - 12:00 WIB" },
    { day: "WhatsApp", hours: "24 Jam" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
          <div className="container-custom">
            <div className="text-center px-4">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Hubungi Kami
              </h1>
              <p className="text-lg sm:text-xl max-w-2xl mx-auto">
                Tim customer service kami siap membantu kebutuhan material
                bangunan Anda 24/7
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-custom px-4">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="card p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Kirim Pesan
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="contoh@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Subjek *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Pilih subjek</option>
                      <option value="Konsultasi Produk">
                        Konsultasi Produk
                      </option>
                      <option value="Penawaran Harga">Penawaran Harga</option>
                      <option value="Kerjasama">Kerjasama</option>
                      <option value="Keluhan">Keluhan</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Pesan *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tuliskan pesan Anda di sini..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-whatsapp justify-center"
                  >
                    📱 Kirim via WhatsApp
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    * Pesan akan dikirim melalui WhatsApp untuk respons yang
                    lebih cepat
                  </p>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {/* Contact Methods */}
                <div className="card p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Informasi Kontak
                  </h2>
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <div className="text-2xl">{method.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800">
                            {method.title}
                          </h3>
                          <p className="text-blue-600 font-medium">
                            {method.detail}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {method.description}
                          </p>
                          {method.action !== "#" && (
                            <a
                              href={method.action}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                            >
                              Hubungi →
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Jam Operasional
                  </h3>
                  <div className="space-y-2">
                    {operatingHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2"
                      >
                        <span className="text-gray-700">{schedule.day}</span>
                        <span className="font-medium text-gray-800">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Aksi Cepat
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/6288242423267?text=Halo, saya ingin konsultasi produk bahan bangunan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-green-500 text-white text-center py-3 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      💬 Chat WhatsApp
                    </a>
                    <a
                      href="https://wa.me/6288242423267?text=Halo, saya ingin minta penawaran harga untuk material bangunan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-blue-500 text-white text-center py-3 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      💰 Minta Penawaran
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
