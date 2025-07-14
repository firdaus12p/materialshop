import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArticleImage } from "../../../components/ArticleImage";
import Link from "next/link";

export default function GentengArtikel() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/artikel" className="hover:text-blue-600">
              Artikel
            </Link>
            <span className="mx-2">›</span>
            <span>Mengenal Jenis-Jenis Genteng dan Karakteristiknya</span>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-semibold">
                Edukasi
              </span>
              <span>8 Juli 2025</span>
              <span>•</span>
              <span>6 menit baca</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Mengenal Jenis-Jenis Genteng dan Karakteristiknya
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Berbagai jenis genteng yang tersedia di pasaran beserta kelebihan
              dan kekurangannya masing-masing untuk membantu pilihan terbaik
              rumah Anda.
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <ArticleImage
              src="/images/article-genteng.jpg"
              alt="Berbagai jenis genteng untuk atap rumah"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Genteng merupakan elemen penting dalam konstruksi atap yang tidak
              hanya berfungsi sebagai pelindung dari cuaca, tetapi juga
              memberikan nilai estetika pada rumah. Dengan beragam pilihan yang
              tersedia, pemahaman tentang karakteristik masing-masing jenis
              genteng akan membantu Anda membuat keputusan yang tepat.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Genteng Tanah Liat (Keramik)
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Karakteristik Umum
            </h3>
            <p className="text-gray-700 mb-4">
              Genteng tanah liat adalah jenis genteng tradisional yang telah
              digunakan selama berabad-abad. Dibuat dari tanah liat yang dibakar
              pada suhu tinggi hingga mengeras.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-3">Kelebihan:</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Tahan lama (30-50 tahun)</li>
                  <li>• Isolasi panas yang baik</li>
                  <li>• Ramah lingkungan</li>
                  <li>• Mudah didapat</li>
                  <li>• Harga ekonomis</li>
                  <li>• Tersedia banyak model</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-bold text-red-800 mb-3">Kekurangan:</h4>
                <ul className="space-y-1 text-red-700 text-sm">
                  <li>• Berat (45-60 kg/m²)</li>
                  <li>• Mudah pecah</li>
                  <li>• Perlu rangka kuat</li>
                  <li>• Sulit dipotong</li>
                  <li>• Pemasangan lama</li>
                  <li>• Dapat berjamur</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Varian Genteng Tanah Liat
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                <strong>Genteng Press:</strong> Dibentuk dengan tekanan tinggi,
                permukaan halus dan presisi
              </li>
              <li>
                <strong>Genteng Garuda:</strong> Model tradisional dengan bentuk
                melengkung khas
              </li>
              <li>
                <strong>Genteng Kodok:</strong> Bentuk datar dengan gelombang
                kecil, modern
              </li>
              <li>
                <strong>Genteng Plentong:</strong> Model silinder, cocok untuk
                arsitektur Jawa
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Genteng Metal
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Jenis-Jenis Genteng Metal
            </h3>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-800">
                  Genteng Metal Galvalum
                </h4>
                <p className="text-gray-700 text-sm">
                  Terbuat dari campuran aluminium-seng dengan lapisan anti
                  karat. Ringan dan tahan cuaca ekstrem.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-800">
                  Genteng Metal Galvanis
                </h4>
                <p className="text-gray-700 text-sm">
                  Dilapisi seng untuk mencegah korosi. Lebih ekonomis tapi
                  kurang tahan lama dibanding galvalum.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-800">
                  Genteng Metal Colorsteel
                </h4>
                <p className="text-gray-700 text-sm">
                  Galvalum dengan lapisan warna premium. Tersedia berbagai warna
                  dengan daya tahan tinggi.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-3">Kelebihan:</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Sangat ringan (7-10 kg/m²)</li>
                  <li>• Pemasangan cepat</li>
                  <li>• Tahan karat dan korosi</li>
                  <li>• Banyak pilihan warna</li>
                  <li>• Tidak mudah pecah</li>
                  <li>• Cocok untuk berbagai iklim</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-bold text-red-800 mb-3">Kekurangan:</h4>
                <ul className="space-y-1 text-red-700 text-sm">
                  <li>• Harga relatif mahal</li>
                  <li>• Berisik saat hujan</li>
                  <li>• Konduktor panas</li>
                  <li>• Perlu insulasi tambahan</li>
                  <li>• Dapat mengembang-menyusut</li>
                  <li>• Memerlukan sekrup khusus</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Genteng Beton
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Karakteristik dan Varian
            </h3>
            <p className="text-gray-700 mb-4">
              Genteng beton dibuat dari campuran semen, pasir, dan agregat halus
              dengan pewarna alami. Tersedia dalam berbagai model dan warna.
            </p>

            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                <strong>Genteng Beton Flat:</strong> Permukaan datar, modern dan
                minimalis
              </li>
              <li>
                <strong>Genteng Beton Bergelombang:</strong> Dengan tekstur
                gelombang untuk estetika
              </li>
              <li>
                <strong>Genteng Beton Royal:</strong> Model premium dengan
                finishing glossy
              </li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="font-bold text-blue-800 mb-3">
                Spesifikasi Teknis:
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-blue-700 text-sm">
                <ul className="space-y-1">
                  <li>• Berat: 45-55 kg/m²</li>
                  <li>• Ketebalan: 13-15 mm</li>
                  <li>• Daya serap air: &lt;10%</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Kuat tekan: &gt;300 kg/cm²</li>
                  <li>• Umur pakai: 25-30 tahun</li>
                  <li>• Tahan angin: hingga 180 km/jam</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Genteng Aspal (Shingle)
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Jenis Genteng Aspal
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                <strong>Organic Shingles:</strong> Berbasis serat organik,
                ekonomis tapi kurang tahan cuaca
              </li>
              <li>
                <strong>Fiberglass Shingles:</strong> Berbasis fiberglass, lebih
                tahan api dan cuaca
              </li>
              <li>
                <strong>Architectural Shingles:</strong> Model premium dengan
                dimensi dan tekstur bervariasi
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-3">Kelebihan:</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Ringan (12-15 kg/m²)</li>
                  <li>• Waterproof sempurna</li>
                  <li>• Fleksibel mengikuti bentuk</li>
                  <li>• Mudah dipasang</li>
                  <li>• Tahan angin kencang</li>
                  <li>• Banyak pilihan warna</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-bold text-red-800 mb-3">Kekurangan:</h4>
                <ul className="space-y-1 text-red-700 text-sm">
                  <li>• Harga cukup mahal</li>
                  <li>• Tidak tahan panas tinggi</li>
                  <li>• Dapat pudar warnanya</li>
                  <li>• Perlu underlayment</li>
                  <li>• Sulit diperbaiki sebagian</li>
                  <li>• Umur pakai terbatas (15-20 tahun)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Perbandingan Harga dan ROI
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 mt-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      Jenis Genteng
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                      Harga/m²
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                      Umur Pakai
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                      ROI
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Tanah Liat
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rp 15-35K
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      30-50 tahun
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Excellent
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Metal Galvalum
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rp 45-85K
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      25-35 tahun
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Good
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Beton
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rp 25-45K
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      25-30 tahun
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Good
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Aspal Shingle
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rp 55-95K
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      15-20 tahun
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Fair
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Panduan Memilih Genteng
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Berdasarkan Iklim
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                <strong>Iklim Tropis Basah:</strong> Genteng tanah liat atau
                beton (tahan kelembaban)
              </li>
              <li>
                <strong>Daerah Angin Kencang:</strong> Genteng metal atau aspal
                (ringan, tidak mudah terlepas)
              </li>
              <li>
                <strong>Daerah Panas:</strong> Genteng tanah liat (isolasi panas
                terbaik)
              </li>
              <li>
                <strong>Daerah Hujan Lebat:</strong> Genteng metal atau aspal
                (waterproof optimal)
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Berdasarkan Arsitektur
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3">
                  Rumah Tradisional:
                </h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• Genteng tanah liat model Garuda</li>
                  <li>• Genteng beton klasik</li>
                  <li>• Warna natural (merah, cokelat)</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-3">Rumah Modern:</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Genteng metal warna bold</li>
                  <li>• Genteng beton flat</li>
                  <li>• Aspal shingle tekstur</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Tips Perawatan
            </h2>

            <div className="bg-yellow-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Perawatan Rutin untuk Semua Jenis:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>🔧 Bersihkan dari daun dan kotoran setiap 3 bulan</li>
                <li>
                  🔍 Periksa genteng yang retak atau lepas setelah hujan badai
                </li>
                <li>🧹 Bersihkan talang air secara berkala</li>
                <li>🌿 Hindari pertumbuhan lumut dengan fungisida alami</li>
                <li>
                  🔨 Ganti genteng yang rusak segera untuk mencegah kebocoran
                </li>
                <li>👷 Lakukan inspeksi profesional setiap 2 tahun</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Kesimpulan
            </h2>
            <p className="text-gray-700 mb-6">
              Pemilihan genteng yang tepat sangat tergantung pada faktor iklim,
              budget, gaya arsitektur, dan preferensi perawatan. Genteng tanah
              liat masih menjadi pilihan terbaik untuk nilai jangka panjang,
              sementara genteng metal ideal untuk kemudahan instalasi.
              Konsultasikan dengan ahli untuk mendapatkan rekomendasi yang
              sesuai dengan kondisi spesifik rumah Anda.
            </p>

            {/* CTA */}
            <div className="bg-blue-600 text-white p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-3">
                Cari Genteng Berkualitas?
              </h3>
              <p className="mb-4">
                Kami menyediakan berbagai jenis genteng dari brand terpercaya
                dengan garansi kualitas. Konsultasi gratis untuk memilih genteng
                yang tepat untuk rumah Anda.
              </p>
              <a
                href="https://wa.me/6288242423267?text=Halo%2C%20saya%20tertarik%20dengan%20genteng%20untuk%20rumah.%20Mohon%20info%20jenis%20dan%20rekomendasi%20yang%20sesuai."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Konsultasi Sekarang
              </a>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export const metadata = {
  title:
    "Mengenal Jenis-Jenis Genteng dan Karakteristiknya - Bahan Bangunan Store",
  description:
    "Panduan lengkap berbagai jenis genteng: tanah liat, metal, beton, aspal. Perbandingan harga, kelebihan, kekurangan, dan tips memilih yang tepat.",
  keywords:
    "jenis genteng, genteng tanah liat, genteng metal, genteng beton, aspal shingle, atap rumah",
};
