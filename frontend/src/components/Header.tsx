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
  // Atap Spandek
  {
    id: 1,
    name: "Atap Spandek CBM 0.30mm X 1m X 3m – AZ 70",
    category: "Atap",
    href: "/kategori/atap",
  },
  {
    id: 2,
    name: "Atap Spandek CBM 0.30mm X 1m X 4m - AZ 70",
    category: "Atap",
    href: "/kategori/atap",
  },
  {
    id: 3,
    name: "Atap Spandek CBM 0.30mm X 1m X 5m - AZ 70",
    category: "Atap",
    href: "/kategori/atap",
  },
  {
    id: 4,
    name: "Atap Spandek CBM 0.30mm X 1m X 6m - AZ 70",
    category: "Atap",
    href: "/kategori/atap",
  },
  {
    id: 5,
    name: "Atap Spandek CBM 0.35mm X 1m X Per Meter - AZ 100",
    category: "Atap",
    href: "/kategori/atap",
  },
  {
    id: 6,
    name: "Atap Spandek CBM 0.40mm X 1m X Per Meter - AZ 100",
    category: "Atap",
    href: "/kategori/atap",
  },
  {
    id: 7,
    name: "Atap Spandek CBM 0.45mm X 1m X Per Meter - AZ 100",
    category: "Atap",
    href: "/kategori/atap",
  },
  {
    id: 8,
    name: "Atap Spandek CBM Pesonadeck 0.30mm X 5.5m",
    category: "Atap",
    href: "/kategori/atap",
  },
  {
    id: 9,
    name: "Atap Spandek Pasir Blue Green",
    category: "Atap",
    href: "/kategori/atap",
  },
  {
    id: 10,
    name: "Atap Spandek Pasir Hitam",
    category: "Atap",
    href: "/kategori/atap",
  },
  {
    id: 11,
    name: "Atap Spandek Pasir Merah",
    category: "Atap",
    href: "/kategori/atap",
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
  {
    id: 20,
    name: "Pipa HDPE Rajalon",
    category: "Pipa",
    href: "/kategori/pipa",
  },
  {
    id: 21,
    name: "Pipa PVC Indalon",
    category: "Pipa",
    href: "/kategori/pipa",
  },
  {
    id: 22,
    name: "Pipa PVC Rajalon",
    category: "Pipa",
    href: "/kategori/pipa",
  },
  {
    id: 23,
    name: "Pipa PVC Ratulon",
    category: "Pipa",
    href: "/kategori/pipa",
  },
  {
    id: 24,
    name: "Pipa PVC Two Horse",
    category: "Pipa",
    href: "/kategori/pipa",
  },

  // Sanitary
  {
    id: 25,
    name: "Closet Duduk",
    category: "Sanitary",
    href: "/kategori/sanitary",
  },
  {
    id: 26,
    name: "Wastafel",
    category: "Sanitary",
    href: "/kategori/sanitary",
  },
  {
    id: 27,
    name: "Keran Air",
    category: "Sanitary",
    href: "/kategori/sanitary",
  },
  { id: 28, name: "Shower", category: "Sanitary", href: "/kategori/sanitary" },

  // Plafon
  {
    id: 29,
    name: "Cornice Gipsum A Plus",
    category: "Plafon",
    href: "/kategori/plafon",
  },
  {
    id: 30,
    name: "Gypsum Jayaboard 1200 X 2400 X 9mm",
    category: "Plafon",
    href: "/kategori/plafon",
  },
  {
    id: 31,
    name: "Plafon GRC",
    category: "Plafon",
    href: "/kategori/plafon",
  },
  {
    id: 32,
    name: "Shunda Plafon PVC Ceiling 8mm X 30cm X 3m",
    category: "Plafon",
    href: "/kategori/plafon",
  },
  {
    id: 33,
    name: "Shunda Plafon PVC Ceiling 8mm X 30cm X 4m",
    category: "Plafon",
    href: "/kategori/plafon",
  },
  {
    id: 34,
    name: "Shunda Plafon PVC Ceiling 8mm X 30cm X 5m",
    category: "Plafon",
    href: "/kategori/plafon",
  },

  // Paku dan Baut
  {
    id: 35,
    name: "Dynabolt 10mm X 4.8cm",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 36,
    name: "Dynabolt 10mm X 6.0cm",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 37,
    name: "Dynabolt 10mm X 8.0cm",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 38,
    name: "Paku Besi 4cm",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 39,
    name: "Paku Besi 5cm",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 40,
    name: "Paku Besi 7cm",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 41,
    name: "Paku Besi 10cm",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 42,
    name: "Paku Besi 12cm",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 43,
    name: "Paku Beton 4cm",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 44,
    name: "Paku Beton 5cm",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 45,
    name: "Paku Beton 7cm",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 46,
    name: "Paku Beton 10cm",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 47,
    name: "Ruping Atap Spandek 2cm",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 48,
    name: "Ruping Atap Spandek 4.5cm",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 49,
    name: "Ruping Atap Spandek 6cm",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 50,
    name: "Ruping Atap Spandek 7cm",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 51,
    name: "Screw Calciboard 6 X 1 14 (3cm)",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 52,
    name: "Screw Calciboard 6 X 34 (2cm)",
    category: "Paku dan Baut",
    href: "/kategori/paku-dan-baut",
  },
  {
    id: 53,
    name: "Tangki Air Tandon Bak Air Fiberglass Kap 250 Liter",
    category: "Tangki Air",
    href: "/kategori/tangki-air",
  },
  {
    id: 54,
    name: "Tangki Air Tandon Bak Air Fiberglass Kap 500 Liter",
    category: "Tangki Air",
    href: "/kategori/tangki-air",
  },
  {
    id: 55,
    name: "Tangki Air Tandon Bak Air Fiberglass Kap 600 Liter",
    category: "Tangki Air",
    href: "/kategori/tangki-air",
  },
  {
    id: 56,
    name: "Tangki Air Tandon Bak Air Fiberglass Kap 800 Liter",
    category: "Tangki Air",
    href: "/kategori/tangki-air",
  },
  {
    id: 57,
    name: "Tangki Air Tandon Bak Air Fiberglass Kap 1 M3",
    category: "Tangki Air",
    href: "/kategori/tangki-air",
  },
  {
    id: 58,
    name: "Tangki Air Tandon Bak Air Fiberglass Kap 1,2 M3",
    category: "Tangki Air",
    href: "/kategori/tangki-air",
  },
  {
    id: 59,
    name: "Tangki Air Tandon Bak Air Fiberglass Kap 2 M3",
    category: "Tangki Air",
    href: "/kategori/tangki-air",
  },
  {
    id: 60,
    name: "Tangki Air Tandon Bak Air Fiberglass Kap 3 M3",
    category: "Tangki Air",
    href: "/kategori/tangki-air",
  },
  {
    id: 61,
    name: "Tangki Air Tandon Bak Air Fiberglass Kap 3 M3 Model Kapsul",
    category: "Tangki Air",
    href: "/kategori/tangki-air",
  },
  {
    id: 62,
    name: "Tangki Air Tandon Bak Air Fiberglass Kap 4 M3",
    category: "Tangki Air",
    href: "/kategori/tangki-air",
  },
  {
    id: 63,
    name: "Tangki Air Tandon Bak Air Fiberglass Kap 5 M3",
    category: "Tangki Air",
    href: "/kategori/tangki-air",
  },
  {
    id: 64,
    name: "Tangki Biofilter Anaerob Aerob FRP KAP 5 M3",
    category: "Tangki IPAL",
    href: "/kategori/tangki-ipal",
  },
  {
    id: 65,
    name: "Tangki Ipal 600 Liter",
    category: "Tangki IPAL",
    href: "/kategori/tangki-ipal",
  },
  {
    id: 66,
    name: "Tangki Ipal 800 Liter",
    category: "Tangki IPAL",
    href: "/kategori/tangki-ipal",
  },
  {
    id: 67,
    name: "Tangki Ipal Komunal UK 3 M3",
    category: "Tangki IPAL",
    href: "/kategori/tangki-ipal",
  },
  {
    id: 68,
    name: "Tangki Ipal Komunal UK 5 M3",
    category: "Tangki IPAL",
    href: "/kategori/tangki-ipal",
  },
  {
    id: 69,
    name: "Baja Ringan Reng CBM (K-STEEL) 0.40mm Besar (Standar)",
    category: "Baja Ringan",
    href: "/kategori/baja-ringan",
  },
  {
    id: 70,
    name: "Canal C 75x 0.65X6 MTR Antik Truss (ECO)",
    category: "Baja Ringan",
    href: "/kategori/baja-ringan",
  },
  {
    id: 71,
    name: "Canal C Cnp 123 Black Steel Purlin",
    category: "Baja Ringan",
    href: "/kategori/baja-ringan",
  },
  {
    id: 72,
    name: "CNP 100 Black Steel",
    category: "Baja Ringan",
    href: "/kategori/baja-ringan",
  },
  {
    id: 73,
    name: "Hollow",
    category: "Baja Ringan",
    href: "/kategori/baja-ringan",
  },
  {
    id: 74,
    name: "Kanal C-Canal 75 X 0.65 X 6 MTR Antik Truss (Super)",
    category: "Baja Ringan",
    href: "/kategori/baja-ringan",
  },
  {
    id: 75,
    name: "Kanal C-Canal 75x0.75x6 MTR Antik Truss (ECO)",
    category: "Baja Ringan",
    href: "/kategori/baja-ringan",
  },
  {
    id: 76,
    name: "Wall Angle",
    category: "Baja Ringan",
    href: "/kategori/baja-ringan",
  },
  {
    id: 77,
    name: "Toilet Portable FRP Model Standar",
    category: "Sanitary",
    href: "/kategori/sanitary",
  },
  {
    id: 78,
    name: "Bak Mandi Celup 45 x 45 x 60 Biru",
    category: "Sanitary",
    href: "/kategori/sanitary",
  },
  {
    id: 79,
    name: "Bak Mandi Oval Biru",
    category: "Sanitary",
    href: "/kategori/sanitary",
  },
  {
    id: 80,
    name: "Bak Mandi Oval Pink Tempat Sabun",
    category: "Sanitary",
    href: "/kategori/sanitary",
  },
  {
    id: 81,
    name: "Bak Mandi Oval Pink",
    category: "Sanitary",
    href: "/kategori/sanitary",
  },
  {
    id: 82,
    name: "Bak Mandi Oval Putih",
    category: "Sanitary",
    href: "/kategori/sanitary",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const categories = [
    { name: "Atap", slug: "atap" },
    { name: "Plafon", slug: "plafon" },
    { name: "Paku dan Baut", slug: "paku-dan-baut" },
    { name: "Baja Ringan", slug: "baja-ringan" },
    { name: "Pipa", slug: "pipa" },
    { name: "Sanitary", slug: "sanitary" },
    { name: "Tangki Air", slug: "tangki-air" },
    { name: "Tangki IPAL", slug: "tangki-ipal" },
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

    // Close on scroll but only if scroll is outside the dropdown area
    function handleScroll(event: Event) {
      const target = event.target as Node;
      // Only close if scroll is not happening within the search container
      if (searchRef.current && !searchRef.current.contains(target)) {
        // Additional check: only close on significant scroll (like page scroll)
        if (
          target === document ||
          target === document.documentElement ||
          target === document.body
        ) {
          setShowResults(false);
        }
      }
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
            <img
              src="/images/Logo/Logo BBStore.png"
              alt="Bahan Bangunan Store"
              className="h-8 sm:h-10 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const fallback = document.createElement("h1");
                fallback.className =
                  "text-xl sm:text-2xl font-bold text-gradient";
                fallback.innerHTML =
                  '<span class="hidden sm:inline">Bahan Bangunan Store</span><span class="sm:hidden">BB Store</span>';
                target.parentNode?.appendChild(fallback);
              }}
            />
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
                        Tanya &quot;{searchQuery}&quot; via WhatsApp
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
                      Tanya &quot;{searchQuery}&quot; via WhatsApp
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
