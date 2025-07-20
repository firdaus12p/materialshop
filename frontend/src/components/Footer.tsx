import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container-custom py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gradient">
              Bahan Bangunan Store
            </h3>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Toko bahan bangunan online terpercaya dengan berbagai material
              berkualitas untuk kebutuhan konstruksi Anda.
            </p>
            <div className="space-y-2 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>088242423267</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <span className="text-xs sm:text-base">
                  info@bahanbangunanstore.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Melayani Seluruh Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🕒</span>
                <span>24/7 Customer Service</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kategori Produk</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/kategori/atap"
                  className="text-gray-300 hover:text-white"
                >
                  Atap
                </Link>
              </li>
              <li>
                <Link
                  href="/kategori/plafon"
                  className="text-gray-300 hover:text-white"
                >
                  Plafon
                </Link>
              </li>
              <li>
                <Link
                  href="/kategori/paku-dan-baut"
                  className="text-gray-300 hover:text-white"
                >
                  Paku dan Baut
                </Link>
              </li>
              <li>
                <Link
                  href="/kategori/baja-ringan"
                  className="text-gray-300 hover:text-white"
                >
                  Baja Ringan
                </Link>
              </li>
              <li>
                <Link
                  href="/kategori/pipa"
                  className="text-gray-300 hover:text-white"
                >
                  Pipa
                </Link>
              </li>
              <li>
                <Link
                  href="/kategori/sanitary"
                  className="text-gray-300 hover:text-white"
                >
                  Sanitary
                </Link>
              </li>
              <li>
                <Link
                  href="/kategori/tangki-air"
                  className="text-gray-300 hover:text-white"
                >
                  Tangki Air
                </Link>
              </li>
              <li>
                <Link
                  href="/kategori/tangki-ipal"
                  className="text-gray-300 hover:text-white"
                >
                  Tangki IPAL
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tentang"
                  className="text-gray-300 hover:text-white"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-gray-300 hover:text-white">
                  Kontak
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/artikel"
                  className="text-gray-300 hover:text-white"
                >
                  Artikel
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-gray-300 hover:text-white"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & WhatsApp */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/6288242423267?text=Halo, saya ingin menanyakan produk bahan bangunan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-sm sm:text-base"
              >
                📱 Chat WhatsApp
              </a>
              <div className="text-gray-300 text-sm sm:text-base">
                <p className="mb-2">Jam Operasional:</p>
                <p>Senin - Minggu</p>
                <p>24 Jam (WhatsApp)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              &copy; {currentYear} Bahan Bangunan Store. All rights reserved.
            </p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
