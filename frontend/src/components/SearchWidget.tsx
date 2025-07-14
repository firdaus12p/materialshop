"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  category: string;
  href: string;
}

const searchableProducts: Product[] = [
  {
    id: 1,
    name: "Papan Kayu Jati",
    category: "Papan",
    href: "/kategori/papan",
  },
  {
    id: 2,
    name: "Papan Kayu Meranti",
    category: "Papan",
    href: "/kategori/papan",
  },
  {
    id: 3,
    name: "Plafon Gypsum",
    category: "Plafon",
    href: "/kategori/plafon",
  },
  { id: 4, name: "Plafon PVC", category: "Plafon", href: "/kategori/plafon" },
  {
    id: 5,
    name: "Paku Beton",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 6,
    name: "Baut Hexagonal",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 7,
    name: "Baja Ringan C75",
    category: "Baja Ringan",
    href: "/kategori/baja-ringan",
  },
  { id: 8, name: "Genteng Metal", category: "Atap", href: "/kategori/atap" },
  { id: 9, name: "Genteng Keramik", category: "Atap", href: "/kategori/atap" },
  { id: 10, name: "Pipa PVC", category: "Pipa", href: "/kategori/pipa" },
  { id: 11, name: "Pipa Galvanis", category: "Pipa", href: "/kategori/pipa" },
  {
    id: 12,
    name: "Closet Duduk",
    category: "Sanitary",
    href: "/kategori/sanitary",
  },
  {
    id: 13,
    name: "Wastafel",
    category: "Sanitary",
    href: "/kategori/sanitary",
  },
];

export default function SearchWidget() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredProducts =
    query.length > 0
      ? searchableProducts
          .filter(
            (product) =>
              product.name.toLowerCase().includes(query.toLowerCase()) ||
              product.category.toLowerCase().includes(query.toLowerCase())
          )
          .slice(0, 5)
      : [];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setShowResults(value.length > 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission and navigation
    // Just show results, don't navigate anywhere
    if (query.trim()) {
      setShowResults(true);
    }
  };

  const handleWhatsAppSearch = () => {
    if (query.trim()) {
      const message = `Halo, saya sedang mencari "${query}". Bisa bantu saya dengan info produk dan harga terbaiknya?`;
      window.open(
        `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }
  };

  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-700 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            🔍 Cari Bahan Bangunan
          </h2>
          <p className="text-orange-100">
            Temukan material konstruksi yang Anda butuhkan dengan mudah
          </p>
        </div>

        <div className="max-w-2xl mx-auto relative" ref={searchRef}>
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              onFocus={() => setShowResults(query.length > 0)}
              placeholder="Cari produk... (misal: papan kayu, paku, baja ringan)"
              className="w-full px-4 py-4 pl-12 pr-24 border border-orange-300 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-lg"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-6 w-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button
              type="button"
              onClick={handleWhatsAppSearch}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <span className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Tanya
              </span>
            </button>
          </form>

          {/* Search Results Dropdown */}
          {showResults && filteredProducts.length > 0 && (
            <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 animate-fadeIn">
              <div className="p-2">
                <div className="text-sm font-medium text-gray-500 px-3 py-2 border-b border-gray-100">
                  🔍 Hasil Pencarian untuk "{query}" ({filteredProducts.length}{" "}
                  produk)
                </div>
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={product.href}
                    onClick={() => setShowResults(false)}
                    className="flex items-center justify-between px-3 py-3 hover:bg-gray-50 rounded transition-colors group"
                  >
                    <div>
                      <div className="font-medium text-gray-800 group-hover:text-orange-600">
                        {product.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        Kategori: {product.category}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                        Lihat Produk
                      </span>
                      <svg
                        className="w-4 h-4 text-gray-400 group-hover:text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="border-t border-gray-100 p-3 bg-gray-50">
                <button
                  onClick={handleWhatsAppSearch}
                  className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  💬 Tanya Admin untuk "{query}"
                </button>
              </div>
            </div>
          )}

          {/* No Results */}
          {showResults && query.length > 0 && filteredProducts.length === 0 && (
            <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-6 animate-fadeIn">
              <div className="text-center">
                <div className="text-4xl mb-3">🔍</div>
                <div className="text-gray-800 font-medium mb-2">
                  Produk "{query}" tidak ditemukan
                </div>
                <div className="text-gray-600 text-sm mb-4">
                  Tapi jangan khawatir! Admin kami siap membantu Anda menemukan
                  produk yang tepat
                </div>
                <button
                  onClick={handleWhatsAppSearch}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-sm flex items-center gap-2 mx-auto"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  💬 Tanya Admin Sekarang
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Quick Search Categories */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-orange-100 text-sm">Pencarian Populer:</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "papan kayu",
              "baja ringan",
              "genteng metal",
              "pipa PVC",
              "plafon gypsum",
              "paku baut",
              "closet duduk",
              "material bangunan",
            ].map((keyword) => (
              <button
                key={keyword}
                onClick={() => {
                  setQuery(keyword);
                  setShowResults(true);
                }}
                className="bg-orange-500 bg-opacity-20 text-white px-3 py-1 rounded-full text-sm hover:bg-opacity-30 transition-colors"
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
