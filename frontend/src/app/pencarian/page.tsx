"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface Product {
  id: number;
  name: string;
  description: string;
  features: string[];
  category: string;
  whatsapp_text: string;
}

// Data produk lengkap untuk pencarian (static data)
const allProducts: Product[] = [
  {
    id: 1,
    name: "Papan Kayu Jati",
    description:
      "Papan kayu jati berkualitas tinggi untuk furniture dan konstruksi.",
    features: ["Tahan lama", "Anti rayap", "Tekstur indah"],
    category: "Papan",
    whatsapp_text:
      "Halo, saya ingin menanyakan tentang Papan Kayu Jati. Bisa minta info harga dan ketersediaan?",
  },
  {
    id: 2,
    name: "Papan Kayu Meranti",
    description:
      "Papan kayu meranti untuk berbagai keperluan konstruksi dan furniture.",
    features: ["Harga terjangkau", "Mudah diolah", "Serat halus"],
    category: "Papan",
    whatsapp_text:
      "Halo, saya tertarik dengan Papan Kayu Meranti. Mohon info detail dan harganya.",
  },
  {
    id: 3,
    name: "Plafon Gypsum",
    description: "Plafon gypsum berkualitas untuk ruangan interior modern.",
    features: ["Permukaan halus", "Mudah dipasang", "Tahan api"],
    category: "Plafon",
    whatsapp_text:
      "Saya ingin tahu tentang Plafon Gypsum. Bisa minta info harga per meter?",
  },
  {
    id: 4,
    name: "Paku Beton",
    description: "Paku beton untuk konstruksi berat dan pemasangan pada beton.",
    features: ["Kekuatan tinggi", "Anti karat", "Tahan lama"],
    category: "Paku dan Baut",
    whatsapp_text:
      "Saya butuh Paku Beton untuk proyek konstruksi. Bisa minta penawaran harga?",
  },
  {
    id: 5,
    name: "Baja Ringan C75",
    description: "Baja ringan profil C75 untuk rangka atap rumah.",
    features: ["Ringan dan kuat", "Anti karat", "Mudah dipasang"],
    category: "Baja Ringan",
    whatsapp_text:
      "Saya ingin pasang rangka atap baja ringan C75. Bisa minta kalkulasi harga?",
  },
  {
    id: 6,
    name: "Genteng Metal",
    description: "Genteng metal berkualitas untuk atap rumah modern.",
    features: ["Tahan cuaca", "Ringan", "Desain menarik"],
    category: "Atap",
    whatsapp_text:
      "Saya tertarik dengan Genteng Metal. Bisa minta info harga dan cara pemasangan?",
  },
  {
    id: 7,
    name: "Pipa PVC",
    description: "Pipa PVC untuk instalasi air bersih dan limbah.",
    features: ["Tidak beracun", "Tahan korosi", "Mudah disambung"],
    category: "Pipa",
    whatsapp_text:
      "Butuh pipa PVC untuk renovasi rumah. Bisa minta daftar ukuran dan harga?",
  },
  {
    id: 8,
    name: "Closet Duduk",
    description: "Closet duduk keramik dengan desain modern.",
    features: ["Hemat air", "Mudah dibersihkan", "Desain ergonomis"],
    category: "Sanitary",
    whatsapp_text:
      "Saya ingin beli closet duduk untuk kamar mandi. Bisa minta info harga?",
  },
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize search from URL hash (static-friendly)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#q=", "");
      if (hash) {
        const query = decodeURIComponent(hash);
        setSearchQuery(query);
        performSearch(query);
      }
      setIsInitialized(true);
    }
  }, []);

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);

    // Client-side search (works with static export)
    setTimeout(() => {
      const results = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()) ||
          product.features.some((feature) =>
            feature.toLowerCase().includes(query.toLowerCase())
          )
      );

      setSearchResults(results);
      setIsLoading(false);
    }, 300);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch(searchQuery);
      // Update URL hash instead of search params (static-friendly)
      if (typeof window !== "undefined") {
        window.location.hash = `q=${encodeURIComponent(searchQuery)}`;
      }
    }
  };

  const getSearchSuggestions = () => {
    const suggestions = [
      "papan kayu",
      "plafon gypsum",
      "paku beton",
      "baja ringan",
      "genteng metal",
      "pipa PVC",
      "closet duduk",
      "material bangunan",
    ];

    return suggestions
      .filter(
        (s) =>
          s.toLowerCase().includes(searchQuery.toLowerCase()) &&
          s.toLowerCase() !== searchQuery.toLowerCase()
      )
      .slice(0, 4);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    performSearch(suggestion);
    if (typeof window !== "undefined") {
      window.location.hash = `q=${encodeURIComponent(suggestion)}`;
    }
  };

  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Memuat halaman pencarian...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Cari Bahan Bangunan
          </h1>
          <p className="text-gray-600">
            Temukan material konstruksi yang Anda butuhkan
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari bahan bangunan... (misal: papan kayu, paku, dll)"
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
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
              type="submit"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              disabled={isLoading}
            >
              <span className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors disabled:opacity-50">
                {isLoading ? "..." : "Cari"}
              </span>
            </button>
          </form>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Mencari produk...</p>
          </div>
        )}

        {/* Search Results */}
        {!isLoading && searchQuery && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Hasil Pencarian "{searchQuery}" ({searchResults.length} produk)
            </h2>

            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {product.name}
                        </h3>
                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>

                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-medium text-gray-800 mb-2">
                          Keunggulan:
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          {product.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <a
                          href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                            product.whatsapp_text
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                          Tanya via WhatsApp
                        </a>

                        <Link
                          href={`/kategori/${product.category
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block w-full text-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                        >
                          Lihat Kategori {product.category}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Tidak ada produk ditemukan
                </h3>
                <p className="text-gray-600 mb-6">
                  Coba kata kunci yang berbeda atau lihat saran di bawah
                </p>
              </div>
            )}

            {/* Search Suggestions */}
            {getSearchSuggestions().length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Saran Pencarian:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {getSearchSuggestions().map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm hover:bg-orange-200 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Default State - Category Browse */}
        {!searchQuery && !isLoading && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏗️</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Jelajahi Kategori Produk
            </h2>
            <p className="text-gray-600 mb-8">
              Pilih kategori untuk melihat produk atau gunakan pencarian di atas
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                {
                  name: "Papan",
                  icon: "🪵",
                  href: "/kategori/papan",
                  query: "papan",
                },
                {
                  name: "Plafon",
                  icon: "🏠",
                  href: "/kategori/plafon",
                  query: "plafon",
                },
                {
                  name: "Paku dan Baut",
                  icon: "🔩",
                  href: "/kategori/paku-dan-baut",
                  query: "paku",
                },
                {
                  name: "Baja Ringan",
                  icon: "🏗️",
                  href: "/kategori/baja-ringan",
                  query: "baja ringan",
                },
                {
                  name: "Atap",
                  icon: "🏘️",
                  href: "/kategori/atap",
                  query: "genteng",
                },
                {
                  name: "Pipa",
                  icon: "🚰",
                  href: "/kategori/pipa",
                  query: "pipa",
                },
                {
                  name: "Sanitary",
                  icon: "🚿",
                  href: "/kategori/sanitary",
                  query: "closet",
                },
                {
                  name: "Lainnya",
                  icon: "📦",
                  href: "/kategori/lainnya",
                  query: "material",
                },
              ].map((category) => (
                <div
                  key={category.name}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <Link href={category.href} className="block text-center mb-3">
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <div className="text-sm font-medium text-gray-700">
                      {category.name}
                    </div>
                  </Link>
                  <button
                    onClick={() => handleSuggestionClick(category.query)}
                    className="w-full text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded hover:bg-orange-100 transition-colors"
                  >
                    Cari {category.query}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
