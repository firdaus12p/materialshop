export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12 sm:py-16 lg:py-20">
      <div className="container-custom">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Jual Bahan Bangunan
            <br />
            <span className="text-yellow-300">Terlengkap & Terpercaya</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Dapatkan berbagai material bangunan berkualitas dengan harga
            terbaik. Papan, plafon, paku baut, baja ringan, atap, pipa, dan
            sanitary.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto sm:max-w-none">
            <a
              href="https://wa.me/6288242423267?text=Halo, saya ingin melihat katalog produk bahan bangunan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 justify-center"
            >
              📱 Lihat Katalog di WhatsApp
            </a>{" "}
            <a
              href="#categories"
              className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors duration-200 text-base sm:text-lg"
            >
              🏗️ Jelajahi Kategori
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">1000+</div>
              <div className="text-blue-200 text-sm sm:text-base">
                Produk Tersedia
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">500+</div>
              <div className="text-blue-200 text-sm sm:text-base">
                Customer Puas
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">24/7</div>
              <div className="text-blue-200 text-sm sm:text-base">
                Customer Service
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">100%</div>
              <div className="text-blue-200 text-sm sm:text-base">
                Garansi Kualitas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
