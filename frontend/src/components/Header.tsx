"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  category: string;
  href: string;
}

const searchableProducts: Product[] = [
  // Papan Kayu
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
    name: "Papan Kayu Mahoni",
    category: "Papan",
    href: "/kategori/papan",
  },
  {
    id: 4,
    name: "Papan Kayu Kamper",
    category: "Papan",
    href: "/kategori/papan",
  },

  // Plafon
  {
    id: 5,
    name: "Plafon Gypsum",
    category: "Plafon",
    href: "/kategori/plafon",
  },
  { id: 6, name: "Plafon PVC", category: "Plafon", href: "/kategori/plafon" },
  {
    id: 7,
    name: "Plafon Kalsiboard",
    category: "Plafon",
    href: "/kategori/plafon",
  },

  // Paku dan Baut
  {
    id: 8,
    name: "Paku Beton",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 9,
    name: "Baut Hexagonal",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 10,
    name: "Paku Roofing",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 11,
    name: "Baut Roofing",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },

  // Baja Ringan
  {
    id: 12,
    name: "Baja Ringan C75",
    category: "Baja Ringan",
    href: "/kategori/baja-ringan",
  },
  {
    id: 13,
    name: "Baja Ringan Hollow",
    category: "Baja Ringan",
    href: "/kategori/baja-ringan",
  },
  {
    id: 14,
    name: "Reng Baja Ringan",
    category: "Baja Ringan",
    href: "/kategori/baja-ringan",
  },

  // Atap
  { id: 15, name: "Genteng Metal", category: "Atap", href: "/kategori/atap" },
  { id: 16, name: "Genteng Keramik", category: "Atap", href: "/kategori/atap" },
  { id: 17, name: "Genteng Beton", category: "Atap", href: "/kategori/atap" },
  { id: 18, name: "Asbes Gelombang", category: "Atap", href: "/kategori/atap" },
  { id: 19, name: "Spandek", category: "Atap", href: "/kategori/atap" },

  // Pipa
  { id: 20, name: "Pipa PVC", category: "Pipa", href: "/kategori/pipa" },
  { id: 21, name: "Pipa Galvanis", category: "Pipa", href: "/kategori/pipa" },
  { id: 22, name: "Pipa PPR", category: "Pipa", href: "/kategori/pipa" },
  { id: 23, name: "Pipa Air Limbah", category: "Pipa", href: "/kategori/pipa" },

  // Sanitary
  {
    id: 24,
    name: "Closet Duduk",
    category: "Sanitary",
    href: "/kategori/sanitary",
  },
  {
    id: 25,
    name: "Wastafel",
    category: "Sanitary",
    href: "/kategori/sanitary",
  },
  {
    id: 26,
    name: "Keran Air",
    category: "Sanitary",
    href: "/kategori/sanitary",
  },
  { id: 27, name: "Shower", category: "Sanitary", href: "/kategori/sanitary" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const categories = [
    { name: "Papan", slug: "papan" },
    { name: "Plafon", slug: "plafon" },
    { name: "Paku dan Baut", slug: "paku-dan-baut" },
    { name: "Baja Ringan", slug: "baja-ringan" },
    { name: "Atap", slug: "atap" },
    { name: "Pipa", slug: "pipa" },
    { name: "Sanitary", slug: "sanitary" },
  ];

  const filteredProducts =
    searchQuery.length > 0
      ? searchableProducts
          .filter(
            (product) =>
              product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              product.category.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .slice(0, 5)
      : [];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: Event) {
      const target = event.target as Node;
      if (searchRef.current && !searchRef.current.contains(target)) {
        // Only close if we're not clicking on a search result item
        if (!(target as Element).closest("[data-search-item]")) {
          setShowResults(false);
        }
      }
    }

    // Also close on scroll for mobile
    function handleScroll() {
      setShowResults(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowResults(value.length > 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission and navigation
    // Just show results, don't navigate anywhere
    if (searchQuery.trim()) {
      setShowResults(true);
      // For mobile, also blur the input to hide keyboard
      if (window.innerWidth < 768) {
        (e.target as HTMLFormElement).querySelector("input")?.blur();
      }
    }
  };

  const handleWhatsAppSearch = () => {
    if (searchQuery.trim()) {
      const message = `Halo, saya sedang mencari "${searchQuery}". Bisa bantu saya dengan info produk dan harga terbaiknya?`;
      window.open(
        `https://wa.me/6288242423267?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }
  };

  const handleProductClick = (product: Product) => {
    console.log(
      "Product clicked:",
      product.name,
      "Navigating to:",
      product.href
    );

    // Close dropdown and clear search immediately
    setShowResults(false);
    setSearchQuery("");

    // Try router.push first, fallback to window.location
    try {
      router.push(product.href);
    } catch (error) {
      console.error("Router navigation failed, using window.location:", error);
      window.location.href = product.href;
    }
  };

  return (
    <header className="bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container-custom">
          <div className="flex flex-row justify-between items-center text-sm gap-2">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-1 text-xs sm:text-sm">
                <span>📞</span>
                <span>088242423267</span>
              </div>
              <div className="flex items-center gap-1 text-xs sm:text-sm">
                <span>✉️</span>
                <span className="hidden lg:inline">
                  info@bahanbangunanstore.com
                </span>
                <span className="lg:hidden">Email</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs sm:text-sm">
              <span>📍</span>
              <span className="hidden lg:inline">
                Melayani Seluruh Indonesia
              </span>
              <span className="lg:hidden">Indonesia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-gradient">
              <span className="hidden sm:inline">Bahan Bangunan Store</span>
              <span className="sm:hidden">BB Store</span>
            </h1>
          </Link>

          {/* Search Bar - Desktop/Tablet */}
          <div
            ref={searchRef}
            className="hidden md:flex flex-1 max-w-xl mx-6 lg:mx-8 relative"
          >
            <form onSubmit={handleSubmit} className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Cari produk bahan bangunan..."
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                className="w-full px-4 py-2.5 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <svg
                  className="w-4 h-4"
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
              </button>
            </form>

            {/* Search Results Dropdown */}
            {showResults && (
              <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                {filteredProducts.length > 0 ? (
                  <>
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                        data-search-item
                      >
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleProductClick(product);
                          }}
                          className="flex items-center justify-between p-3 cursor-pointer"
                        >
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">
                              {product.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {product.category}
                            </p>
                            <p className="text-xs text-blue-600 mt-1">
                              Klik untuk lihat kategori
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                window.open(
                                  `https://wa.me/6288242423267?text=${encodeURIComponent(
                                    `Halo, saya tertarik dengan ${product.name}. Bisa minta info harga dan stoknya?`
                                  )}`,
                                  "_blank"
                                );
                              }}
                              className="px-3 py-1 bg-green-600 text-white text-xs rounded-md hover:bg-green-700 transition-colors"
                            >
                              Chat
                            </button>
                            <svg
                              className="w-4 h-4 text-gray-400"
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
                        </div>
                      </div>
                    ))}
                    <div className="p-3 bg-gray-50 border-t">
                      <button
                        onClick={handleWhatsAppSearch}
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        Tanya "{searchQuery}" via WhatsApp
                      </button>
                    </div>
                  </>
                ) : searchQuery.length > 0 ? (
                  <div className="p-6 text-center">
                    <p className="text-gray-600 mb-3">Produk tidak ditemukan</p>
                    <button
                      onClick={handleWhatsAppSearch}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      Tanya Admin
                    </button>
                  </div>
                ) : null}
              </div>
            )}
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/6288242423267?text=Halo, saya ingin menanyakan produk bahan bangunan"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex btn-whatsapp text-sm lg:text-base"
          >
            📱 WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? "❌" : "☰"}
          </button>
        </div>

        {/* Mobile Search */}
        <div ref={searchRef} className="md:hidden mt-4 relative">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Cari produk..."
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              className="w-full px-4 py-2.5 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              <svg
                className="w-4 h-4"
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
            </button>
          </form>

          {/* Mobile Search Results Dropdown */}
          {showResults && (
            <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
              {filteredProducts.length > 0 ? (
                <>
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                      data-search-item
                    >
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleProductClick(product);
                        }}
                        className="flex items-center justify-between p-3 cursor-pointer"
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {product.name}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {product.category}
                          </p>
                          <p className="text-xs text-blue-600 mt-1">
                            Klik untuk lihat kategori
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              window.open(
                                `https://wa.me/6288242423267?text=${encodeURIComponent(
                                  `Halo, saya tertarik dengan ${product.name}. Bisa minta info harga dan stoknya?`
                                )}`,
                                "_blank"
                              );
                            }}
                            className="px-2 py-1 bg-green-600 text-white text-xs rounded-md hover:bg-green-700 transition-colors"
                          >
                            Chat
                          </button>
                          <svg
                            className="w-3 h-3 text-gray-400"
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
                      </div>
                    </div>
                  ))}
                  <div className="p-3 bg-gray-50 border-t">
                    <button
                      onClick={handleWhatsAppSearch}
                      className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Tanya "{searchQuery}" via WhatsApp
                    </button>
                  </div>
                </>
              ) : searchQuery.length > 0 ? (
                <div className="p-6 text-center">
                  <p className="text-gray-600 mb-3 text-sm">
                    Produk tidak ditemukan
                  </p>
                  <button
                    onClick={handleWhatsAppSearch}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
                  >
                    Tanya Admin
                  </button>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t border-gray-200">
        <div className="container-custom">
          <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col md:flex-row py-2">
              <li>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Beranda
                </Link>
              </li>
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/kategori/${category.slug}`}
                    className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/artikel"
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                >
                  Artikel
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                >
                  Tentang
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
