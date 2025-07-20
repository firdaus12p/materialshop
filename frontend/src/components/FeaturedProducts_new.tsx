"use client";

import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  thumbnail: string;
  whatsapp_text: string;
  categoryHref: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Atap Spandek CBM 0.30mm X 1m X 4m - AZ 70",
    category: "Atap",
    description:
      "Atap spandek CBM dengan dimensi standar 4 meter, ketebalan 0.30mm dan coating AZ 70. Pilihan ideal untuk atap rumah tinggal dan bangunan komersial.",
    features: [
      "Ketebalan 0.30mm standar",
      "Dimensi 1m x 4m",
      "Coating AZ 70 berkualitas",
      "Efisien untuk pemasangan",
      "Daya tahan tinggi",
      "Harga kompetitif",
    ],
    image: "/images/Detail/Atap/Atap Spandek CBM 0.30mm X 1m X 4m - AZ 70.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Atap.webp",
    categoryHref: "/kategori/atap",
    whatsapp_text:
      "Halo, saya ingin menanyakan Atap Spandek CBM 0.30mm X 1m X 4m - AZ 70. Bisa tolong kirim info harga per lembar?",
  },
  {
    id: 2,
    name: "Gypsum Jayaboard 1200 X 2400 X 9mm",
    category: "Plafon",
    description:
      "Gypsum board Jayaboard ukuran standar 1200x2400x9mm untuk aplikasi plafon dan partisi. Kualitas premium dengan finishing halus dan presisi dimensi.",
    features: [
      "Ukuran standar 1200x2400x9mm",
      "Merek Jayaboard terpercaya",
      "Kualitas premium",
      "Finishing halus",
      "Presisi dimensi",
      "Mudah dipotong dan dipasang",
    ],
    image: "/images/Detail/Plafon/Gypsum Jayaboard 1200 X 2400 X 9mm.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Plafon.webp",
    categoryHref: "/kategori/plafon",
    whatsapp_text:
      "Selamat pagi, saya membutuhkan Gypsum Jayaboard 1200 X 2400 X 9mm. Bisa minta info harga per lembar?",
  },
  {
    id: 3,
    name: "Dynabolt M10 X 80mm",
    category: "Paku dan Baut",
    description:
      "Dynabolt M10 x 80mm untuk aplikasi struktural berat. Baut jangkar berkualitas tinggi dengan daya cengkeram maksimal untuk beton dan masonry.",
    features: [
      "Ukuran M10 x 80mm",
      "Untuk aplikasi struktural",
      "Daya cengkeram maksimal",
      "Material high grade steel",
      "Galvanis coating",
      "Cocok untuk beton dan masonry",
    ],
    image: "/images/Detail/Paku & Baut/Dynabolt M10 X 80mm.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Paku dan Baut.webp",
    categoryHref: "/kategori/paku-dan-baut",
    whatsapp_text:
      "Halo, saya tertarik dengan Dynabolt M10 X 80mm. Mohon info harga per box dan ketersediaan stok.",
  },
  {
    id: 4,
    name: "Baja Ringan Reng CBM (K-STEEL) 0.40mm Besar (Standar)",
    category: "Baja Ringan",
    description:
      "Baja ringan reng CBM K-STEEL dengan ketebalan 0.40mm ukuran besar standar. Material berkualitas tinggi untuk struktur rangka atap yang kuat dan tahan lama.",
    features: [
      "Ketebalan 0.40mm standar",
      "Material K-STEEL CBM",
      "Ukuran besar (standar)",
      "Galvanis anti karat",
      "Kekuatan struktural optimal",
      "Sesuai standar SNI",
    ],
    image:
      "/images/Detail/Baja Ringan/Baja Ringan Reng CBM (K-STEEL) 0.40mm Besar (Standar).webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Baja Ringan.webp",
    categoryHref: "/kategori/baja-ringan",
    whatsapp_text:
      "Halo, saya tertarik dengan Baja Ringan Reng CBM (K-STEEL) 0.40mm Besar (Standar). Mohon info harga per batang dan ketersediaan stok.",
  },
  {
    id: 5,
    name: "Pipa PVC Indalon",
    category: "Pipa",
    description:
      "Pipa PVC merek Indalon untuk instalasi air bersih dan drainase. Kualitas premium dengan standar SNI untuk keandalan sistem perpipaan jangka panjang.",
    features: [
      "Material PVC virgin berkualitas",
      "Merek Indalon terpercaya",
      "Standar SNI bersertifikat",
      "Tahan tekanan optimal",
      "Mudah instalasi",
      "Anti bocor",
    ],
    image: "/images/Detail/Pipa/Detail-Pipa-PVC-Indalon.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Pipa.webp",
    categoryHref: "/kategori/pipa",
    whatsapp_text:
      "Selamat pagi, saya membutuhkan Pipa PVC Indalon untuk rumah. Bisa minta info harga dan cara pemasangan?",
  },
  {
    id: 6,
    name: "Tangki Air Fiberglass 1M3 (1000L)",
    category: "Tangki Air",
    description:
      "Tangki air fiberglass kapasitas 1000 liter (1M3) untuk kebutuhan menengah. Material berkualitas tinggi dengan daya tahan maksimal dan sistem yang higienis.",
    features: [
      "Kapasitas 1M3 (1000L)",
      "Material fiberglass berkualitas",
      "Daya tahan maksimal",
      "Sistem higienis",
      "Anti pecah dan bocor",
      "UV resistant",
    ],
    image: "/images/Detail/Tangki Air/Tangki Air Fiberglass 1M3 (1000L).webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Tangki Air.webp",
    categoryHref: "/kategori/tangki-air",
    whatsapp_text:
      "Saya butuh Tangki Air 1M3 untuk rumah. Bisa minta penawaran harga dan spesifikasi lengkap?",
  },
  {
    id: 7,
    name: "Bak Mandi Oval Biru",
    category: "Sanitary",
    description:
      "Bak mandi oval warna biru dengan desain ergonomis yang nyaman digunakan. Material berkualitas tinggi dengan finishing yang halus dan tahan lama.",
    features: [
      "Desain oval ergonomis",
      "Warna biru yang menarik",
      "Material berkualitas tinggi",
      "Finishing halus",
      "Nyaman digunakan",
      "Kapasitas optimal",
    ],
    image: "/images/Detail/Sanitary/Bak Mandi Oval Biru.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Sanitary.webp",
    categoryHref: "/kategori/sanitary",
    whatsapp_text:
      "Halo, saya tertarik dengan Bak Mandi Oval Biru. Mohon info harga dan ukuran yang tersedia.",
  },
  {
    id: 8,
    name: "Tangki Ipal 600 Liter",
    category: "Tangki IPAL",
    description:
      "Tangki IPAL kapasitas 600 liter untuk pengolahan limbah domestik rumah tangga kecil. Dilengkapi sistem biofilter yang efektif untuk mengolah air limbah menjadi air bersih.",
    features: [
      "Kapasitas 600 liter",
      "Sistem biofilter terintegrasi",
      "Material fiberglass berkualitas",
      "Compact dan space-saving",
      "Mudah instalasi",
      "Maintenance minimal",
    ],
    image: "/images/Detail/Tangki Ipal/Tangki Ipal 600 Liter.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Tangki Ipal.webp",
    categoryHref: "/kategori/tangki-ipal",
    whatsapp_text:
      "Selamat pagi, saya membutuhkan Tangki Ipal 600 Liter untuk rumah. Bisa minta info harga dan cara pemasangan?",
  },
];

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openWhatsApp = (product: Product) => {
    const phoneNumber = "6288242423267";
    const message = encodeURIComponent(product.whatsapp_text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Produk Unggulan
          </h2>
          <p className="text-gray-600">
            Produk pilihan terbaik dengan kualitas terjamin untuk kebutuhan
            konstruksi Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => {
            // Produk terjual di atas 1000
            const sold = Math.floor(Math.random() * 2000) + 1000;
            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-48 bg-gray-100">
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/placeholder.jpg";
                    }}
                  />
                  <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    {product.category}
                  </div>
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                    Unggulan
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3 flex-1">
                    {product.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                    <span>Terjual {sold}+</span>
                    <span className="flex items-center">
                      <span className="text-yellow-400 mr-1">⭐</span>
                      5.0/5
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => openProductModal(product)}
                      className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      Detail
                    </button>
                    <button
                      onClick={() => openWhatsApp(product)}
                      className="flex-1 bg-green-600 text-white px-3 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"
                    >
                      Tanya Harga
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Product Image */}
              <div className="h-48 bg-gray-100">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = selectedProduct.thumbnail;
                  }}
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="text-blue-600 text-sm font-semibold mb-2">
                  {selectedProduct.category}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {selectedProduct.name}
                </h2>
                <p className="text-gray-600 mb-6">
                  {selectedProduct.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Fitur & Keunggulan:
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-0.5">✓</span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={selectedProduct.categoryHref}
                    className="flex-1 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg text-center font-medium hover:bg-gray-200 transition-colors"
                  >
                    Lihat Kategori
                  </a>
                  <button
                    onClick={() => openWhatsApp(selectedProduct)}
                    className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    Konsultasi via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
