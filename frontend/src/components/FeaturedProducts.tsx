"use client";

import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  whatsapp_text: string;
  icon: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Papan Kayu Mahoni",
    category: "Papan",
    description: "Papan kayu mahoni berkualitas tinggi dengan serat kayu yang indah dan tahan lama. Cocok untuk furniture, panel dinding, dan berbagai proyek woodworking.",
    features: [
      "Kayu mahoni asli berkualitas tinggi",
      "Tahan rayap dan kelembaban",
      "Serat kayu yang indah dan alami",
      "Mudah dibentuk dan dipoles",
      "Ukuran tersedia berbagai dimensi",
      "Finishing halus siap pakai"
    ],
    image: "/images/papan-mahoni.jpg",
    whatsapp_text: "Halo, saya tertarik dengan Papan Kayu Mahoni. Bisakah Anda memberikan informasi harga dan ketersediaan stok? Terima kasih.",
    icon: "🪵",
  },
  {
    id: 2,
    name: "Plafon Gypsum 9mm",
    category: "Plafon",
    description: "Plafon gypsum berkualitas tinggi dengan ketebalan 9mm. Permukaan halus dan rata, mudah dipasang dan difinishing untuk hasil interior yang sempurna.",
    features: [
      "Ketebalan 9mm standar",
      "Permukaan halus dan rata",
      "Mudah dipotong dan dibentuk",
      "Tahan kelembaban sedang",
      "Finishing cat yang sempurna",
      "Harga ekonomis"
    ],
    image: "/images/plafon-gypsum.jpg",
    whatsapp_text: "Halo, saya tertarik dengan Plafon Gypsum 9mm. Mohon info harga per lembar dan ukuran yang tersedia. Terima kasih.",
    icon: "🏠",
  },
  {
    id: 3,
    name: "Baut Roofing 12x80",
    category: "Paku & Baut",
    description: "Baut roofing premium dengan kepala hex dan washer karet. Khusus untuk pemasangan atap metal dan seng gelombang yang tahan bocor.",
    features: [
      "Kepala hex anti slip",
      "Washer karet berkualitas tinggi",
      "Galvanis tahan karat",
      "Khusus untuk atap metal",
      "Seal sempurna anti bocor",
      "Mudah dalam pemasangan"
    ],
    image: "/images/baut-roofing.jpg",
    whatsapp_text: "Halo, saya membutuhkan Baut Roofing 12x80 untuk pemasangan atap. Mohon info harga per kotak dan minimal order.",
    icon: "🔩",
  },
  {
    id: 4,
    name: "Baja Ringan C75",
    category: "Baja Ringan",
    description: "Profil baja ringan C75 dengan ketebalan 0.75mm, ideal untuk rangka atap rumah tinggal dan bangunan kecil. Galvanis berkualitas tinggi.",
    features: [
      "Ketebalan 0.75mm premium",
      "Galvanis hot dip berkualitas",
      "Tahan karat dan korosi",
      "Mudah dipasang dan dipotong", 
      "Bobot ringan namun kuat",
      "Sesuai standar SNI"
    ],
    image: "/images/baja-ringan-c75.jpg",
    whatsapp_text: "Halo, saya tertarik dengan Baja Ringan C75. Mohon info harga per batang dan ketersediaan stok. Terima kasih.",
    icon: "🏗️",
  },
  {
    id: 5,
    name: "Genteng Metal Berpasir",
    category: "Atap",
    description: "Genteng metal berkualitas premium dengan lapisan pasir untuk ketahanan dan estetika yang superior. Tahan karat dan cuaca ekstrem.",
    features: [
      "Material metal berkualitas tinggi",
      "Lapisan pasir anti slip",
      "Tahan karat dan korosi",
      "Insulasi panas yang baik",
      "Pemasangan mudah dan cepat",
      "Garansi 10 tahun"
    ],
    image: "/images/genteng-metal.jpg",
    whatsapp_text: "Halo, saya tertarik dengan Genteng Metal Berpasir. Mohon info harga dan spesifikasi lengkap produk. Terima kasih.",
    icon: "🏠",
  },
  {
    id: 6,
    name: "Pipa PVC 4 inch",
    category: "Pipa",
    description: "Pipa PVC berkualitas tinggi diameter 4 inch untuk instalasi air bersih dan drainase. Material virgin PVC dengan ketahanan maksimal.",
    features: [
      "Material virgin PVC berkualitas",
      "Diameter 4 inch presisi",
      "Tahan tekanan tinggi",
      "Tidak mudah pecah atau retak",
      "Mudah dalam instalasi",
      "Tersedia panjang 4 meter"
    ],
    image: "/images/pipa-pvc-4inch.jpg",
    whatsapp_text: "Halo, saya membutuhkan Pipa PVC 4 inch untuk instalasi drainase. Mohon info harga per batang dan ketersediaan stok.",
    icon: "🚰",
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
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pilihan terbaik material bangunan berkualitas tinggi dengan harga kompetitif
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 text-2xl">
                  {product.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => openProductModal(product)}
                    className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors"
                  >
                    Detail
                  </button>
                  <button
                    onClick={() => openWhatsApp(product)}
                    className="flex-1 bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors"
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
                  }}
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70"
                >
                  ×
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedProduct.category}
                  </span>
                  <span className="text-xl">{selectedProduct.icon}</span>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {selectedProduct.name}
                </h2>

                <p className="text-gray-600 mb-6">{selectedProduct.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Keunggulan Produk:
                  </h3>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => openWhatsApp(selectedProduct)}
                    className="flex-1 bg-green-500 text-white px-6 py-3 rounded-md font-medium hover:bg-green-600 transition-colors"
                  >
                    Order via WhatsApp
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
