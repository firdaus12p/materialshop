"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArticleImage } from "../../components/ArticleImage";
import Link from "next/link";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

const articles: Article[] = [
  {
    id: 2,
    title: "Keunggulan Baja Ringan vs Kayu untuk Rangka Atap",
    excerpt:
      "Perbandingan detail antara baja ringan dan kayu untuk konstruksi rangka atap. Mana yang lebih ekonomis?",
    date: "12 Juli 2025",
    category: "Perbandingan",
    readTime: "7 menit",
    image: "/images/article-baja-ringan.jpg",
    slug: "baja-ringan-vs-kayu",
  },
  {
    id: 3,
    title: "Panduan Instalasi Pipa PVC yang Benar",
    excerpt:
      "Step by step cara memasang pipa PVC untuk instalasi air bersih dan kotor di rumah Anda.",
    date: "10 Juli 2025",
    category: "Tutorial",
    readTime: "8 menit",
    image: "/images/article-pipa-pvc.jpg",
    slug: "instalasi-pipa-pvc",
  },
  {
    id: 4,
    title: "Mengenal Jenis-Jenis Genteng dan Karakteristiknya",
    excerpt:
      "Berbagai jenis genteng yang tersedia di pasaran beserta kelebihan dan kekurangannya masing-masing.",
    date: "8 Juli 2025",
    category: "Edukasi",
    readTime: "6 menit",
    image: "/images/article-genteng.jpg",
    slug: "jenis-genteng",
  },
  {
    id: 5,
    title: "Tips Memilih Cat yang Tepat untuk Rumah",
    excerpt:
      "Panduan memilih cat berkualitas untuk interior dan eksterior rumah Anda. Dari jenis hingga finishing.",
    date: "5 Juli 2025",
    category: "Tips",
    readTime: "5 menit",
    image: "/images/article-cat.jpg",
    slug: "tips-memilih-cat",
  },
  {
    id: 6,
    title: "Waterproofing: Solusi Atasi Kebocoran di Rumah",
    excerpt:
      "Mengenal berbagai metode waterproofing untuk melindungi rumah dari rembesan air dan kebocoran.",
    date: "3 Juli 2025",
    category: "Solusi",
    readTime: "7 menit",
    image: "/images/article-waterproofing.jpg",
    slug: "waterproofing-solusi-kebocoran",
  },
  {
    id: 7,
    title: "Tutorial Memasang Keramik Lantai dengan Benar",
    excerpt:
      "Langkah-langkah detail cara memasang keramik lantai agar rapi dan tahan lama. Cocok untuk pemula.",
    date: "1 Juli 2025",
    category: "Tutorial",
    readTime: "10 menit",
    image: "/images/placeholder.jpg",
    slug: "tutorial-pasang-keramik",
  },
  {
    id: 8,
    title: "Semen vs Mortar: Apa Bedanya?",
    excerpt:
      "Perbedaan mendasar antara semen dan mortar dalam konstruksi. Kapan menggunakan yang mana?",
    date: "28 Juni 2025",
    category: "Edukasi",
    readTime: "4 menit",
    image: "/images/placeholder.jpg",
    slug: "semen-vs-mortar",
  },
  {
    id: 9,
    title: "Tips Hemat Biaya Renovasi Rumah",
    excerpt:
      "Strategi cerdas untuk menghemat biaya renovasi tanpa mengorbankan kualitas hasil akhir.",
    date: "25 Juni 2025",
    category: "Tips",
    readTime: "6 menit",
    image: "/images/placeholder.jpg",
    slug: "tips-hemat-renovasi",
  },
  {
    id: 10,
    title: "Atap Bocor? Ini Solusi Cepat dan Efektif",
    excerpt:
      "Cara mengatasi atap bocor dengan cepat dan tepat. Dari identifikasi masalah hingga perbaikan permanen.",
    date: "22 Juni 2025",
    category: "Solusi",
    readTime: "8 menit",
    image: "/images/placeholder.jpg",
    slug: "solusi-atap-bocor",
  },
  {
    id: 11,
    title: "Beton vs Bata Merah: Perbandingan Material Dinding",
    excerpt:
      "Analisis mendalam perbandingan beton dan bata merah untuk konstruksi dinding rumah.",
    date: "20 Juni 2025",
    category: "Perbandingan",
    readTime: "9 menit",
    image: "/images/placeholder.jpg",
    slug: "beton-vs-bata-merah",
  },
  {
    id: 12,
    title: "Tutorial Membuat Cor Beton yang Kuat",
    excerpt:
      "Panduan step-by-step membuat campuran cor beton yang kuat dan berkualitas untuk fondasi rumah.",
    date: "18 Juni 2025",
    category: "Tutorial",
    readTime: "12 menit",
    image: "/images/placeholder.jpg",
    slug: "tutorial-cor-beton",
  },
];

const categories = [
  "Semua",
  "Tips",
  "Tutorial",
  "Edukasi",
  "Perbandingan",
  "Solusi",
];

export default function ArtikelPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  // Filter articles based on selected category
  const filteredArticles =
    selectedCategory === "Semua"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
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
                Artikel & Tips Konstruksi
              </h1>
              <p className="text-lg sm:text-xl max-w-2xl mx-auto">
                Panduan lengkap, tips, dan informasi terkini seputar material
                bangunan dan konstruksi
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-custom px-4">
            {/* Categories Filter */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category === selectedCategory
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Active filter indicator */}
              <div className="text-center mt-4">
                <p className="text-gray-600 text-sm">
                  {selectedCategory === "Semua"
                    ? `Menampilkan ${filteredArticles.length} artikel`
                    : `Menampilkan ${filteredArticles.length} artikel kategori "${selectedCategory}"`}
                </p>
              </div>
            </div>{" "}
            {/* Articles Grid */}
            <div className="max-w-6xl mx-auto">
              {filteredArticles.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                  {filteredArticles.map((article, index) => (
                    <Link key={article.id} href={`/artikel/${article.slug}`}>
                      <article
                        className="card hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animation: "slideInUp 0.6s ease-out forwards",
                        }}
                      >
                        <div className="relative h-48 bg-gray-200 rounded-t-lg overflow-hidden">
                          <ArticleImage
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              {article.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-center text-xs text-gray-500 mb-3">
                            <span>📅 {article.date}</span>
                            <span className="mx-2">•</span>
                            <span>⏱️ {article.readTime}</span>
                          </div>

                          <h2 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2">
                            {article.title}
                          </h2>

                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {article.excerpt}
                          </p>

                          <span className="text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors">
                            Baca Selengkapnya →
                          </span>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="max-w-md mx-auto">
                    <div className="text-6xl mb-4">📝</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Tidak ada artikel ditemukan
                    </h3>
                    <p className="text-gray-600">
                      Belum ada artikel untuk kategori &quot;{selectedCategory}
                      &quot;. Coba pilih kategori lain atau kembali ke
                      &quot;Semua&quot;.
                    </p>
                  </div>
                </div>
              )}
            </div>
            {/* Newsletter Subscription */}
            <div className="max-w-2xl mx-auto mt-16">
              <div className="card p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Dapatkan Tips Terbaru
                </h3>
                <p className="text-gray-600 mb-6">
                  Subscribe untuk mendapatkan artikel dan tips konstruksi
                  terbaru langsung via WhatsApp
                </p>
                <a
                  href="https://wa.me/6288242423267?text=Halo, saya ingin subscribe untuk mendapatkan tips dan artikel terbaru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex"
                >
                  📱 Subscribe via WhatsApp
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
