"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

interface Product {
  id: number;
  name: string;
  description: string;
  features: string[];
  image: string;
  thumbnail?: string; // Optional thumbnail untuk grid view
  whatsapp_text: string;
}

interface CategoryPageProps {
  categoryName: string;
  categoryIcon: string;
  categoryDescription: string;
  products: Product[];
}

export function CategoryPage({
  categoryName,
  categoryIcon,
  categoryDescription,
  products,
}: CategoryPageProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleWhatsApp = (product: Product) => {
    const phoneNumber = "6288242423267";
    const message = encodeURIComponent(product.whatsapp_text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  };

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Validate products data
  if (!products || !Array.isArray(products) || products.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {categoryName}
            </h1>
            <p className="text-gray-600">
              Produk sedang tidak tersedia untuk kategori ini.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">›</span>
          <Link href="/#categories" className="hover:text-blue-600">
            Kategori
          </Link>
          <span className="mx-2">›</span>
          <span>{categoryName}</span>
        </nav>
      </div>

      {/* Category Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-4">{categoryIcon}</div>
            <h1 className="text-4xl font-bold mb-4">{categoryName}</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {categoryDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products
            .filter((product) => product && product.id && product.name)
            .map((product) => {
              // Produk terjual di atas 1000
              const sold = Math.floor(Math.random() * 2000) + 1000;
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="h-32 flex items-center justify-center bg-gray-100 border-b relative overflow-hidden">
                      {product.thumbnail ? (
                        <img
                          src={product.thumbnail}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback ke icon jika gambar tidak ada
                            const imgElement = e.target as HTMLImageElement;
                            const parentElement = imgElement.parentElement;
                            imgElement.style.display = "none";
                            if (parentElement) {
                              const fallbackDiv = parentElement.querySelector(
                                ".fallback-icon"
                              ) as HTMLElement;
                              if (fallbackDiv) {
                                fallbackDiv.style.display = "flex";
                              }
                            }
                          }}
                        />
                      ) : null}
                      <div
                        className={`fallback-icon absolute inset-0 flex items-center justify-center ${
                          product.thumbnail ? "hidden" : "flex"
                        }`}
                      >
                        <span className="text-4xl">{categoryIcon}</span>
                      </div>
                    </div>
                    <div className="p-4 pb-2">
                      <div className="text-blue-600 text-xs font-semibold mb-1">
                        {categoryName}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {product.name || "Nama Produk"}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {product.description || "Deskripsi tidak tersedia"}
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-yellow-500 text-sm">
                          🍀 Produk Unggulan
                        </span>
                        <span className="text-gray-400 text-xs">
                          Kualitas Terjamin
                        </span>
                      </div>
                      <div className="text-gray-500 text-xs mb-2">
                        Produk Terjual:{" "}
                        <span className="font-bold text-green-600">{sold}</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-4 flex flex-col gap-2">
                    <button
                      onClick={() => handleWhatsApp(product)}
                      className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      Tanya Harga via WhatsApp
                    </button>
                    <button
                      onClick={() => openProductModal(product)}
                      className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-semibold flex items-center justify-center gap-2 border border-gray-300"
                    >
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Lihat Detail Produk
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="relative">
              <div className="w-full h-48 bg-gray-100 rounded-t-lg relative overflow-hidden">
                {selectedProduct.image ? (
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const imgElement = e.target as HTMLImageElement;
                      const parentElement = imgElement.parentElement;
                      imgElement.style.display = "none";
                      if (parentElement) {
                        const fallbackDiv = parentElement.querySelector(
                          ".fallback-icon"
                        ) as HTMLElement;
                        if (fallbackDiv) {
                          fallbackDiv.style.display = "flex";
                        }
                      }
                    }}
                  />
                ) : null}
                <div
                  className={`fallback-icon absolute inset-0 flex items-center justify-center ${
                    selectedProduct.image ? "hidden" : "flex"
                  }`}
                >
                  <span className="text-8xl">{categoryIcon}</span>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedProduct.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {selectedProduct.description}
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Keunggulan Produk:
                </h4>
                <ul className="space-y-2">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => handleWhatsApp(selectedProduct)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Tanya Harga via WhatsApp
                </button>
                <button
                  onClick={closeModal}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default CategoryPage;
