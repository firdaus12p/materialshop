import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TentangPage() {
  const stats = [
    { number: "1000+", label: "Produk Tersedia" },
    { number: "500+", label: "Customer Puas" },
    { number: "24/7", label: "Customer Service" },
    { number: "100%", label: "Garansi Kualitas" },
  ];

  const features = [
    {
      icon: "🏗️",
      title: "Kualitas Terjamin",
      description:
        "Semua produk telah melewati quality control ketat dan berstandar SNI",
    },
    {
      icon: "🚚",
      title: "Pengiriman Cepat",
      description:
        "Jaringan distribusi ke seluruh Indonesia dengan waktu pengiriman terprediksi",
    },
    {
      icon: "💰",
      title: "Harga Kompetitif",
      description:
        "Harga terbaik dengan kualitas premium, cocok untuk semua budget proyek",
    },
    {
      icon: "🛠️",
      title: "Konsultasi Gratis",
      description:
        "Tim teknis siap membantu konsultasi material yang tepat untuk proyek Anda",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
          <div className="container-custom">
            <div className="text-center px-4">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Tentang Bahan Bangunan Store
              </h1>
              <p className="text-lg sm:text-xl max-w-2xl mx-auto">
                Partner terpercaya untuk kebutuhan material bangunan berkualitas
                di seluruh Indonesia
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-12">
          <div className="container-custom px-4">
            <div className="max-w-4xl mx-auto">
              {/* Story */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
                  Cerita Kami
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    <strong>Bahan Bangunan Store</strong> adalah perusahaan yang
                    bergerak di bidang penyediaan material bangunan berkualitas
                    tinggi. Didirikan dengan visi menjadi distributor material
                    bangunan terdepan di Indonesia, kami berkomitmen memberikan
                    solusi terbaik untuk kebutuhan konstruksi Anda.
                  </p>
                  <p>
                    Dengan pengalaman bertahun-tahun di industri konstruksi,
                    kami memahami betul pentingnya kualitas material dalam
                    menentukan kesuksesan sebuah proyek. Oleh karena itu, kami
                    hanya menyediakan produk-produk terbaik dari brand ternama
                    dan terpercaya.
                  </p>
                  <p>
                    Kami melayani berbagai kalangan mulai dari individu yang
                    sedang renovasi rumah, kontraktor profesional, hingga
                    developer besar. Dengan sistem pelayanan yang fleksibel dan
                    customer service 24/7, kami memastikan setiap kebutuhan
                    customer terpenuhi dengan sempurna.
                  </p>
                </div>
              </div>

              {/* Vision & Mission */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    🎯 Visi Kami
                  </h3>
                  <p className="text-gray-600">
                    Menjadi distributor material bangunan terdepan di Indonesia
                    yang mengutamakan kualitas, pelayanan, dan kepuasan
                    pelanggan.
                  </p>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    🚀 Misi Kami
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Menyediakan material bangunan berkualitas tinggi</li>
                    <li>• Memberikan pelayanan terbaik kepada customer</li>
                    <li>• Membangun partnership jangka panjang</li>
                    <li>• Berkontribusi pada pembangunan Indonesia</li>
                  </ul>
                </div>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
                  Mengapa Memilih Kami?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="card p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="text-3xl mb-4">{feature.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg text-white p-8 mb-12">
                <h2 className="text-2xl font-bold text-center mb-8">
                  Pencapaian Kami
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold mb-2">
                        {stat.number}
                      </div>
                      <div className="text-blue-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="text-center card p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Siap Memulai Proyek Anda?
                </h3>
                <p className="text-gray-600 mb-6">
                  Konsultasikan kebutuhan material bangunan Anda dengan tim ahli
                  kami
                </p>
                <a
                  href="https://wa.me/6288242423267?text=Halo, saya ingin konsultasi untuk proyek bangunan saya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex"
                >
                  📱 Konsultasi Sekarang
                </a>
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
  title: "Tentang Kami - Bahan Bangunan Store",
  description:
    "Bahan Bangunan Store adalah distributor material bangunan terpercaya di Indonesia. Kualitas terjamin, harga kompetitif, pelayanan 24/7.",
};
