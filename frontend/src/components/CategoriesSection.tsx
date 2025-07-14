import Link from "next/link";

export default function CategoriesSection() {
  const categories = [
    {
      name: "Papan",
      slug: "papan",
      description:
        "Papan kayu, multiplek, MDF, dan berbagai jenis papan lainnya",
      icon: "🪵",
      color: "from-amber-500 to-orange-500",
    },
    {
      name: "Plafon",
      slug: "plafon",
      description: "Plafon gypsum, PVC, dan material plafon berkualitas",
      icon: "🏠",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Paku dan Baut",
      slug: "paku-dan-baut",
      description: "Paku, baut, sekrup, dan alat pengikat lainnya",
      icon: "🔩",
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "Baja Ringan",
      slug: "baja-ringan",
      description: "Rangka baja ringan untuk konstruksi modern",
      icon: "🏗️",
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Atap",
      slug: "atap",
      description: "Genteng, seng, dan material atap tahan lama",
      icon: "🏘️",
      color: "from-red-500 to-pink-500",
    },
    {
      name: "Pipa",
      slug: "pipa",
      description: "Pipa PVC, PPR, dan sistem perpipaan lengkap",
      icon: "🚰",
      color: "from-teal-500 to-green-500",
    },
    {
      name: "Sanitary",
      slug: "sanitary",
      description: "Toilet, wastafel, shower, dan perlengkapan kamar mandi",
      icon: "🚿",
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Lainnya",
      slug: "lainnya",
      description: "Cat, lem, dan material bangunan lainnya",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="categories" className="py-12 sm:py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Kategori Produk Kami
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Temukan berbagai material bangunan berkualitas sesuai kebutuhan
            proyek Anda
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/kategori/${category.slug}`}
              className="card p-4 sm:p-6 hover:scale-105 transition-transform duration-200 group"
            >
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-lg sm:text-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-200 mx-auto`}
              >
                {category.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-center">
                {category.name}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center">
                {category.description}
              </p>
              <div className="mt-3 sm:mt-4 text-blue-600 font-medium group-hover:text-blue-800 transition-colors text-center text-xs sm:text-sm">
                Lihat Produk →
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 px-4">
          <a
            href="https://wa.me/6288242423267?text=Halo, saya ingin melihat semua katalog produk bahan bangunan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex"
          >
            📱 Konsultasi Gratis via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
