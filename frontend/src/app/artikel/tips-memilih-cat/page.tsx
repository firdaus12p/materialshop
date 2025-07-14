import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArticleImage } from "../../../components/ArticleImage";
import Link from "next/link";

export default function CatRumahArtikel() {
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
            <span>Tips Memilih Cat yang Tepat untuk Rumah</span>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                Tips
              </span>
              <span>6 Juli 2025</span>
              <span>•</span>
              <span>6 menit baca</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Tips Memilih Cat yang Tepat untuk Rumah
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Panduan komprehensif memilih cat interior dan eksterior yang
              sesuai dengan kebutuhan, budget, dan kondisi rumah Anda.
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <ArticleImage
              src="/images/article-cat.jpg"
              alt="Berbagai jenis cat untuk interior dan eksterior rumah"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Memilih cat yang tepat bukan hanya soal warna, tetapi juga
              kualitas, daya tahan, dan kesesuaian dengan kondisi rumah. Cat
              yang berkualitas akan melindungi dinding dari cuaca dan memberikan
              tampilan yang indah untuk jangka waktu yang lama. Mari pelajari
              cara memilih cat yang tepat untuk setiap kebutuhan.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Jenis-Jenis Cat Berdasarkan Bahan Dasar
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              1. Cat Berbasis Air (Water-Based)
            </h3>

            <div className="bg-blue-50 p-6 rounded-lg mt-4">
              <h4 className="font-bold text-blue-800 mb-3">
                Cat Emulsi (Emulsion Paint)
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-blue-700 text-sm mb-2">
                    <strong>Kegunaan:</strong> Interior dan eksterior
                  </p>
                  <p className="text-blue-700 text-sm mb-2">
                    <strong>Karakteristik:</strong> Cepat kering, mudah
                    dibersihkan
                  </p>
                  <p className="text-blue-700 text-sm">
                    <strong>Harga:</strong> Rp 80-150K/galon
                  </p>
                </div>
                <div>
                  <p className="text-blue-700 text-sm mb-1">
                    <strong>Kelebihan:</strong>
                  </p>
                  <ul className="text-blue-700 text-xs space-y-1">
                    <li>• Ramah lingkungan (low VOC)</li>
                    <li>• Tidak berbau menyengat</li>
                    <li>• Mudah diaplikasikan</li>
                    <li>• Tahan jamur dan lumut</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-4">
              <h4 className="font-bold text-green-800 mb-3">
                Cat Akrilik (Acrylic Paint)
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-green-700 text-sm mb-2">
                    <strong>Kegunaan:</strong> Interior premium, eksterior
                  </p>
                  <p className="text-green-700 text-sm mb-2">
                    <strong>Karakteristik:</strong> Elastis, tahan cuaca
                  </p>
                  <p className="text-green-700 text-sm">
                    <strong>Harga:</strong> Rp 120-250K/galon
                  </p>
                </div>
                <div>
                  <p className="text-green-700 text-sm mb-1">
                    <strong>Kelebihan:</strong>
                  </p>
                  <ul className="text-green-700 text-xs space-y-1">
                    <li>• Daya rekat sangat baik</li>
                    <li>• Tahan retak dan mengelupas</li>
                    <li>• Warna awet dan tidak pudar</li>
                    <li>• Mudah dibersihkan</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2. Cat Berbasis Minyak (Oil-Based)
            </h3>

            <div className="bg-orange-50 p-6 rounded-lg mt-4">
              <h4 className="font-bold text-orange-800 mb-3">
                Cat Minyak/Alkyd
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-orange-700 text-sm mb-2">
                    <strong>Kegunaan:</strong> Kayu, besi, interior klasik
                  </p>
                  <p className="text-orange-700 text-sm mb-2">
                    <strong>Karakteristik:</strong> Glossy, tahan lama
                  </p>
                  <p className="text-orange-700 text-sm">
                    <strong>Harga:</strong> Rp 100-200K/galon
                  </p>
                </div>
                <div>
                  <p className="text-orange-700 text-sm mb-1">
                    <strong>Kelebihan:</strong>
                  </p>
                  <ul className="text-orange-700 text-xs space-y-1">
                    <li>• Hasil akhir sangat halus</li>
                    <li>• Tahan goresan</li>
                    <li>• Penetrasi dalam ke permukaan</li>
                    <li>• Ideal untuk furniture</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Memilih Cat Berdasarkan Lokasi
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Cat Interior
            </h3>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-800">
                  Ruang Tamu & Kamar Tidur
                </h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Rekomendasi:</strong> Cat emulsi atau akrilik dengan
                  finish matte/eggshell
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Alasan:</strong> Memberikan kesan hangat, mudah
                  dirawat, dan menyembunyikan ketidaksempurnaan dinding.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-800">
                  Kamar Mandi & Dapur
                </h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Rekomendasi:</strong> Cat akrilik anti jamur dengan
                  finish semi-gloss
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Alasan:</strong> Tahan kelembaban tinggi, mudah
                  dibersihkan, dan mencegah pertumbuhan jamur.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-800">
                  Ruang Kerja & Anak
                </h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Rekomendasi:</strong> Cat akrilik washable dengan
                  finish satin
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Alasan:</strong> Tahan noda, mudah dibersihkan, dan
                  aman untuk anak-anak.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Cat Eksterior
            </h3>

            <div className="bg-yellow-50 p-6 rounded-lg mt-4">
              <h4 className="font-bold text-yellow-800 mb-3">
                Persyaratan Cat Eksterior:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li>• Tahan sinar UV</li>
                  <li>• Weather resistant</li>
                  <li>• Anti chalking</li>
                  <li>• Elastis (tidak mudah retak)</li>
                </ul>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li>• Tahan lumut dan jamur</li>
                  <li>• Color retention baik</li>
                  <li>• Mud resistant</li>
                  <li>• Breathable (tembus uap air)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Memilih Warna yang Tepat
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Psikologi Warna
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Biru</p>
                    <p className="text-gray-600 text-sm">
                      Tenang, produktif, cocok untuk ruang kerja
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Hijau</p>
                    <p className="text-gray-600 text-sm">
                      Fresh, natural, ideal untuk ruang santai
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Kuning</p>
                    <p className="text-gray-600 text-sm">
                      Ceria, energik, cocok untuk dapur
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Merah</p>
                    <p className="text-gray-600 text-sm">
                      Hangat, stimulan, untuk aksen ruang makan
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Ungu</p>
                    <p className="text-gray-600 text-sm">
                      Mewah, kreatif, aksen ruang pribadi
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gray-500 rounded"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Abu-abu</p>
                    <p className="text-gray-600 text-sm">
                      Modern, netral, cocok semua ruang
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Tips Kombinasi Warna
            </h3>

            <div className="bg-blue-50 p-6 rounded-lg mt-4">
              <h4 className="font-bold text-blue-800 mb-3">Aturan 60-30-10:</h4>
              <ul className="space-y-2 text-blue-700">
                <li>
                  • <strong>60%</strong> - Warna dominan (dinding utama)
                </li>
                <li>
                  • <strong>30%</strong> - Warna sekunder (furniture, aksen
                  dinding)
                </li>
                <li>
                  • <strong>10%</strong> - Warna aksen (dekorasi, aksesori)
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Menghitung Kebutuhan Cat
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Formula Perhitungan
            </h3>

            <div className="bg-green-50 p-6 rounded-lg mt-4">
              <h4 className="font-bold text-green-800 mb-3">
                Langkah Perhitungan:
              </h4>
              <ol className="list-decimal ml-4 space-y-2 text-green-700">
                <li>Hitung luas dinding = (Panjang + Lebar) x 2 x Tinggi</li>
                <li>Kurangi luas pintu dan jendela</li>
                <li>Bagi dengan daya sebar cat (biasanya 12-14 m²/liter)</li>
                <li>Kalikan dengan jumlah lapisan (primer + 2 kali cat)</li>
                <li>Tambahkan 10% untuk cadangan</li>
              </ol>

              <div className="mt-4 p-4 bg-white rounded border-l-4 border-green-500">
                <p className="font-semibold text-green-800">Contoh:</p>
                <p className="text-green-700 text-sm">
                  Ruang 4x4m, tinggi 3m = (4+4) x 2 x 3 = 48 m²
                  <br />
                  Dikurangi pintu/jendela 8 m² = 40 m²
                  <br />
                  Kebutuhan: 40 ÷ 12 x 3 lapisan = 10 liter + 10% = 11 liter
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Brand dan Kualitas Cat
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 mt-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      Kategori
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                      Brand Lokal
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                      Brand Import
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                      Harga Range
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Ekonomis
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Avian, Propan
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      -
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rp 60-100K
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Menengah
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Dulux, Jotun
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Nippon Paint
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rp 120-200K
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Premium
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Kansai Paint
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Sherwin Williams
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rp 250-400K
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Tips Aplikasi yang Benar
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Persiapan Permukaan
            </h3>
            <ol className="list-decimal ml-6 space-y-2 text-gray-700">
              <li>Bersihkan dinding dari debu, minyak, dan kotoran</li>
              <li>Perbaiki retak atau lubang dengan compound</li>
              <li>Amplas permukaan untuk hasil yang halus</li>
              <li>Aplikasikan primer sesuai jenis permukaan</li>
              <li>Tunggu primer kering sempurna (4-6 jam)</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Teknik Pengecatan
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3">Dengan Kuas:</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• Gunakan kuas berkualitas baik</li>
                  <li>• Aplikasi dengan gerakan W</li>
                  <li>• Ratakan dengan stroke parallel</li>
                  <li>• Jangan terlalu tebal dalam sekali oles</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-3">
                  Dengan Roller:
                </h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Pilih nap roller sesuai tekstur</li>
                  <li>• Rolling dengan pola W atau M</li>
                  <li>• Overlay 50% setiap stroke</li>
                  <li>• Maintain wet edge untuk hasil uniform</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Troubleshooting Masalah Cat
            </h2>

            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-800">Cat Mengelupas</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Penyebab:</strong> Permukaan tidak bersih, tanpa
                  primer, kelembaban tinggi
                  <br />
                  <strong>Solusi:</strong> Kerok, bersihkan, primer ulang, cat
                  kembali
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-800">
                  Warna Tidak Rata
                </h4>
                <p className="text-gray-700 text-sm">
                  <strong>Penyebab:</strong> Pengenceran tidak tepat, aplikasi
                  tidak konsisten
                  <br />
                  <strong>Solusi:</strong> Amplas halus, aplikasi lapisan
                  tambahan dengan teknik yang benar
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-gray-800">
                  Cat Retak (Cracking)
                </h4>
                <p className="text-gray-700 text-sm">
                  <strong>Penyebab:</strong> Lapisan terlalu tebal, cuaca
                  ekstrem saat aplikasi
                  <br />
                  <strong>Solusi:</strong> Amplas area retak, aplikasi ulang
                  dengan lapisan tipis
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Kesimpulan
            </h2>
            <p className="text-gray-700 mb-6">
              Memilih cat yang tepat memerlukan pertimbangan fungsi ruang,
              kondisi lingkungan, budget, dan preferensi estetika. Investasi
              pada cat berkualitas dan aplikasi yang benar akan memberikan hasil
              yang memuaskan dan tahan lama. Jangan ragu untuk berkonsultasi
              dengan ahli cat untuk mendapatkan rekomendasi yang tepat.
            </p>

            {/* CTA */}
            <div className="bg-blue-600 text-white p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-3">Butuh Cat Berkualitas?</h3>
              <p className="mb-4">
                Kami menyediakan berbagai merk cat terpercaya dengan harga
                kompetitif. Konsultasi gratis untuk memilih cat yang sesuai
                dengan kebutuhan Anda.
              </p>
              <a
                href="https://wa.me/6288242423267?text=Halo%2C%20saya%20perlu%20konsultasi%20untuk%20memilih%20cat%20rumah.%20Mohon%20bantuan%20rekomendasi%20cat%20yang%20sesuai."
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
  title: "Tips Memilih Cat yang Tepat untuk Rumah - Bahan Bangunan Store",
  description:
    "Panduan lengkap memilih cat interior dan eksterior. Tips warna, jenis cat, perhitungan kebutuhan, dan aplikasi yang benar untuk hasil optimal.",
  keywords:
    "tips memilih cat, cat interior, cat eksterior, jenis cat, warna cat, cat rumah",
};
