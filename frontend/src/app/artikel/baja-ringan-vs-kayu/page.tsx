import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArticleImage } from "../../../components/ArticleImage";
import Link from "next/link";

export default function BajaRinganArtikel() {
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
            <span>Keunggulan Baja Ringan vs Kayu untuk Rangka Atap</span>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-semibold">
                Perbandingan
              </span>
              <span>12 Juli 2025</span>
              <span>•</span>
              <span>7 menit baca</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Keunggulan Baja Ringan vs Kayu untuk Rangka Atap
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Perbandingan detail antara baja ringan dan kayu untuk konstruksi
              rangka atap. Mana yang lebih ekonomis dan praktis untuk rumah
              Anda?
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <ArticleImage
              src="/images/article-baja-ringan.jpg"
              alt="Perbandingan rangka atap baja ringan dan kayu"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Pemilihan material rangka atap merupakan keputusan penting dalam
              konstruksi rumah. Dua pilihan utama yang paling populer adalah
              baja ringan dan kayu. Masing-masing memiliki keunggulan dan
              kelemahan yang perlu dipahami untuk membuat keputusan terbaik.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Baja Ringan: Material Modern
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Keunggulan Baja Ringan
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                <strong>Tahan Rayap dan Jamur:</strong> Tidak mudah diserang
                hama atau mengalami pembusukan
              </li>
              <li>
                <strong>Ringan:</strong> Berat hanya 1/4 dari kayu dengan
                kekuatan yang sama
              </li>
              <li>
                <strong>Presisi Tinggi:</strong> Diproduksi dengan mesin
                sehingga ukuran sangat akurat
              </li>
              <li>
                <strong>Tahan Gempa:</strong> Fleksibilitas yang baik untuk
                menahan guncangan
              </li>
              <li>
                <strong>Ramah Lingkungan:</strong> Dapat didaur ulang 100%
              </li>
              <li>
                <strong>Tahan Api:</strong> Tidak mudah terbakar dibanding kayu
              </li>
              <li>
                <strong>Instalasi Cepat:</strong> Sistem knock-down mempercepat
                pemasangan
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Kekurangan Baja Ringan
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                <strong>Biaya Awal Tinggi:</strong> Harga material lebih mahal
                dari kayu
              </li>
              <li>
                <strong>Perlu Tenaga Ahli:</strong> Membutuhkan tukang yang
                berpengalaman
              </li>
              <li>
                <strong>Konduksi Panas:</strong> Dapat menyalurkan panas lebih
                mudah
              </li>
              <li>
                <strong>Korosi:</strong> Rentan karat jika coating rusak
              </li>
              <li>
                <strong>Suara:</strong> Dapat menimbulkan suara saat hujan deras
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Kayu: Material Tradisional
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Keunggulan Kayu
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                <strong>Biaya Terjangkau:</strong> Harga material relatif murah
                dan mudah didapat
              </li>
              <li>
                <strong>Mudah Dikerjakan:</strong> Tukang kayu lebih mudah
                ditemukan
              </li>
              <li>
                <strong>Fleksibilitas Desain:</strong> Mudah dipotong dan
                dibentuk sesuai kebutuhan
              </li>
              <li>
                <strong>Isolasi Alami:</strong> Penyerap panas dan suara yang
                baik
              </li>
              <li>
                <strong>Mudah Diperbaiki:</strong> Kerusakan dapat diperbaiki
                dengan mudah
              </li>
              <li>
                <strong>Estetika Alami:</strong> Memberikan kesan hangat dan
                natural
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Kekurangan Kayu
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                <strong>Rentan Rayap:</strong> Mudah diserang rayap dan serangga
                lain
              </li>
              <li>
                <strong>Pembusukan:</strong> Dapat membusuk jika terkena air
                terus menerus
              </li>
              <li>
                <strong>Penyusutan:</strong> Ukuran dapat berubah karena
                kelembaban
              </li>
              <li>
                <strong>Mudah Terbakar:</strong> Risiko kebakaran lebih tinggi
              </li>
              <li>
                <strong>Perawatan Rutin:</strong> Memerlukan treatment berkala
              </li>
              <li>
                <strong>Kualitas Tidak Konsisten:</strong> Tergantung kualitas
                kayu yang dipilih
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Perbandingan Detail
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 mt-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      Aspek
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                      Baja Ringan
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                      Kayu
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Biaya Material
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rp 40-60K/m²
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rp 25-40K/m²
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Biaya Pemasangan
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rp 30-45K/m²
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rp 25-35K/m²
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Durabilitas
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      25-30 tahun
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      15-20 tahun
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Waktu Pemasangan
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      3-5 hari
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      5-7 hari
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Perawatan
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Minimal
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rutin
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Berat Struktur
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      10-15 kg/m²
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      40-50 kg/m²
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Analisis Biaya Jangka Panjang
            </h2>

            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Contoh Perhitungan untuk Rumah 100m²
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-3">Baja Ringan</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>Material: Rp 5.000.000</li>
                    <li>Pemasangan: Rp 3.750.000</li>
                    <li>
                      Total Awal: <strong>Rp 8.750.000</strong>
                    </li>
                    <li>Perawatan 20 tahun: Rp 500.000</li>
                    <li>
                      <strong>Total 20 tahun: Rp 9.250.000</strong>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-3">Kayu</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>Material: Rp 3.250.000</li>
                    <li>Pemasangan: Rp 3.000.000</li>
                    <li>
                      Total Awal: <strong>Rp 6.250.000</strong>
                    </li>
                    <li>Perawatan + Perbaikan: Rp 4.000.000</li>
                    <li>
                      <strong>Total 20 tahun: Rp 10.250.000</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Rekomendasi Pemilihan
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Pilih Baja Ringan Jika:
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Budget awal mencukupi untuk investasi jangka panjang</li>
              <li>Menginginkan perawatan minimal</li>
              <li>Lokasi rawan rayap atau kelembaban tinggi</li>
              <li>Membutuhkan konstruksi tahan gempa</li>
              <li>Mengejar waktu pembangunan yang cepat</li>
              <li>Peduli aspek lingkungan (recyclable)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Pilih Kayu Jika:
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Budget terbatas untuk biaya awal</li>
              <li>Mudah menemukan tukang kayu di daerah</li>
              <li>Menginginkan fleksibilitas modifikasi di kemudian hari</li>
              <li>Menyukai estetika alami kayu</li>
              <li>Tidak keberatan dengan perawatan rutin</li>
              <li>Lokasi dengan iklim kering dan tidak rawan rayap</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Tips Memaksimalkan Pilihan
            </h2>

            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Untuk Baja Ringan:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pilih baja ringan dengan coating galvanis berkualitas</li>
                <li>• Gunakan sekrup khusus baja ringan yang anti karat</li>
                <li>
                  • Pastikan instalasi dilakukan oleh tenaga ahli bersertifikat
                </li>
                <li>• Tambahkan insulasi untuk mengurangi konduksi panas</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Untuk Kayu:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pilih kayu yang sudah di-treatment anti rayap</li>
                <li>• Pastikan kelembaban kayu sesuai standar (12-15%)</li>
                <li>• Aplikasikan wood preservative secara berkala</li>
                <li>• Gunakan sambungan yang kuat dan presisi</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Kesimpulan
            </h2>
            <p className="text-gray-700 mb-6">
              Baik baja ringan maupun kayu memiliki tempat masing-masing dalam
              konstruksi rangka atap. Baja ringan unggul dalam hal durabilitas
              dan perawatan minimal, sementara kayu menawarkan biaya awal yang
              lebih rendah dan fleksibilitas. Pilihan terbaik tergantung pada
              budget, prioritas jangka panjang, dan kondisi spesifik lokasi
              bangunan.
            </p>

            {/* CTA */}
            <div className="bg-blue-600 text-white p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-3">
                Butuh Konsultasi Rangka Atap?
              </h3>
              <p className="mb-4">
                Tim ahli kami siap membantu Anda memilih material rangka atap
                yang tepat sesuai kebutuhan dan budget.
              </p>
              <a
                href="https://wa.me/6288242423267?text=Halo%2C%20saya%20perlu%20konsultasi%20untuk%20pemilihan%20material%20rangka%20atap.%20Mohon%20bantuan%20analisis%20baja%20ringan%20vs%20kayu."
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
                Konsultasi Gratis
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
    "Keunggulan Baja Ringan vs Kayu untuk Rangka Atap - Bahan Bangunan Store",
  description:
    "Perbandingan lengkap baja ringan vs kayu untuk rangka atap. Analisis biaya, durabilitas, dan rekomendasi pemilihan sesuai kebutuhan.",
  keywords:
    "baja ringan, rangka atap, kayu rangka, konstruksi atap, perbandingan material",
};
