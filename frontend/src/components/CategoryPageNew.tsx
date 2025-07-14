"use client";

import { useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description: string;
  features: string[];
  image: string;
  whatsapp_text: string;
}

interface CategoryPageProps {
  categoryName: string;
  categoryIcon: string;
  categoryDescription: string;
  products: Product[];
}

export function CategoryPageComponent({
  categoryName,
  categoryIcon,
  categoryDescription,
  products,
}: CategoryPageProps) {
  const handleWhatsApp = (product: Product) => {
    const phoneNumber = "6281234567890";
    const message = encodeURIComponent(product.whatsapp_text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🏗️</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Bahan Bangunan Store
              </h1>
            </div>
          </Link>
        </div>
      </header>

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
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Foto Produk</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {product.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Keunggulan:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleWhatsApp(product)}
                  className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  Pesan via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
