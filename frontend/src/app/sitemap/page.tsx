import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function SitemapPage() {
  const sitemapSections = [
    {
      title: "Halaman Utama",
      links: [
        { name: "Beranda", url: "/" },
        { name: "Tentang Kami", url: "/tentang" },
        { name: "Kontak", url: "/kontak" },
        { name: "FAQ", url: "/faq" },
        { name: "Artikel", url: "/artikel" },
      ],
    },
    {
      title: "Kategori Produk",
      links: [
        { name: "Atap", url: "/kategori/atap" },
        { name: "Plafon", url: "/kategori/plafon" },
        { name: "Paku dan Baut", url: "/kategori/paku-dan-baut" },
        { name: "Baja Ringan", url: "/kategori/baja-ringan" },
        { name: "Pipa", url: "/kategori/pipa" },
        { name: "Sanitary", url: "/kategori/sanitary" },
        { name: "Lainnya", url: "/kategori/lainnya" },
      ],
    },
    {
      title: "Informasi Legal",
      links: [
        { name: "Kebijakan Privasi", url: "/privacy" },
        { name: "Syarat dan Ketentuan", url: "/terms" },
        { name: "Sitemap", url: "/sitemap" },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
          <div className="container-custom">
            <div className="text-center px-4">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Sitemap Website
              </h1>
              <p className="text-lg sm:text-xl max-w-2xl mx-auto">
                Navigasi lengkap untuk memudahkan Anda menemukan semua halaman
                di website kami
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-custom px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sitemapSections.map((section, index) => (
                  <div key={index} className="card p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      {section.title === "Halaman Utama" && "🏠"}
                      {section.title === "Kategori Produk" && "📦"}
                      {section.title === "Informasi Legal" && "📄"}
                      {section.title}
                    </h2>
                    <ul className="space-y-2">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.url}
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-12 card p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Statistik Website
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <div className="text-gray-600 text-sm">Total Halaman</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">8</div>
                    <div className="text-gray-600 text-sm">Kategori Produk</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      35+
                    </div>
                    <div className="text-gray-600 text-sm">Produk Tersedia</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">
                      24/7
                    </div>
                    <div className="text-gray-600 text-sm">
                      Customer Service
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="mt-8 card p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Tidak Menemukan yang Anda Cari?
                </h3>
                <p className="text-gray-600 mb-6">
                  Tim customer service kami siap membantu Anda menemukan produk
                  yang tepat
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://wa.me/6288242423267?text=Halo, saya membutuhkan bantuan navigasi website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    📱 Chat WhatsApp
                  </a>
                  <Link
                    href="/kontak"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                  >
                    📞 Halaman Kontak
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: "Sitemap - Bahan Bangunan Store",
  description:
    "Sitemap lengkap website Bahan Bangunan Store. Navigasi mudah untuk menemukan semua halaman dan kategori produk.",
};
