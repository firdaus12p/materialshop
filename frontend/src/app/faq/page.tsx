"use client";

import { useState } from "react";
import { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const faqData = [
  {
    id: 1,
    question: "Bagaimana cara memesan produk?",
    answer:
      "Anda dapat memesan produk melalui WhatsApp dengan mengklik tombol 'Order WhatsApp' pada produk yang diinginkan. Tim kami akan membantu proses pemesanan hingga pengiriman.",
  },
  {
    id: 2,
    question: "Apakah ada minimum order?",
    answer:
      "Minimum order tergantung jenis produk. Untuk produk satuan seperti paku/baut biasanya 1 box, sedangkan untuk material seperti atap spandek/pipa minimal 10 batang. Silakan konsultasi via WhatsApp untuk info detail.",
  },
  {
    id: 3,
    question: "Berapa lama waktu pengiriman?",
    answer:
      "Waktu pengiriman bervariasi tergantung lokasi: Jakarta & sekitarnya (1-2 hari), Jawa (2-4 hari), Sumatra & Kalimantan (3-5 hari), Indonesia Timur (5-7 hari).",
  },
  {
    id: 4,
    question: "Apakah ada garansi untuk produk?",
    answer:
      "Ya, semua produk kami bergaransi sesuai standar pabrik. Jika ada produk cacat atau tidak sesuai spesifikasi, kami akan menggantinya tanpa biaya tambahan.",
  },
  {
    id: 5,
    question: "Bagaimana sistem pembayaran?",
    answer:
      "Kami menerima pembayaran melalui transfer bank (BCA, Mandiri, BNI, BRI), e-wallet (OVO, DANA, GoPay), dan untuk pembelian dalam jumlah besar tersedia sistem cicilan.",
  },
  {
    id: 6,
    question: "Apakah harga sudah termasuk ongkir?",
    answer:
      "Harga yang tertera belum termasuk ongkos kirim. Ongkir akan dihitung berdasarkan lokasi tujuan dan berat barang. Tim kami akan menginformasikan total harga termasuk ongkir sebelum konfirmasi order.",
  },
  {
    id: 7,
    question: "Bisakah melihat barang sebelum membeli?",
    answer:
      "Untuk wilayah Jabodetabek, Anda bisa datang langsung ke showroom kami untuk melihat sample produk. Untuk luar kota, kami dapat mengirimkan foto detail atau sample kecil dengan biaya yang dapat dikonsultasikan.",
  },
  {
    id: 8,
    question: "Apakah melayani proyek besar?",
    answer:
      "Ya, kami melayani supply material untuk proyek konstruksi besar seperti perumahan, gedung, dan infrastruktur. Tersedia harga khusus contractor dan sistem pembayaran yang fleksibel.",
  },
  {
    id: 9,
    question: "Bagaimana jika barang rusak dalam pengiriman?",
    answer:
      "Jika barang rusak akibat pengiriman, segera hubungi kami dengan foto bukti kerusakan. Kami akan koordinasi dengan ekspedisi dan mengirimkan penggantian tanpa biaya tambahan.",
  },
  {
    id: 10,
    question: "Apakah tersedia konsultasi teknis?",
    answer:
      "Ya, tim teknis kami siap membantu konsultasi penggunaan material yang tepat untuk proyek Anda. Konsultasi gratis melalui WhatsApp atau bisa request kunjungan untuk proyek besar.",
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
          <div className="container-custom">
            <div className="text-center px-4">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-lg sm:text-xl max-w-2xl mx-auto">
                Temukan jawaban untuk pertanyaan yang sering diajukan tentang
                produk dan layanan kami
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12">
          <div className="container-custom px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqData.map((faq) => (
                  <div key={faq.id} className="card">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800 pr-4">
                          {faq.question}
                        </h3>
                        <span className="text-blue-600 text-xl flex-shrink-0">
                          {openItems.includes(faq.id) ? "−" : "+"}
                        </span>
                      </div>
                    </button>
                    {openItems.includes(faq.id) && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-12 text-center card p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Tidak menemukan jawaban yang Anda cari?
                </h3>
                <p className="text-gray-600 mb-6">
                  Tim customer service kami siap membantu Anda 24/7
                </p>
                <a
                  href="https://wa.me/6288242423267?text=Halo, saya ingin bertanya tentang produk bahan bangunan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex"
                >
                  📱 Hubungi Customer Service
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
