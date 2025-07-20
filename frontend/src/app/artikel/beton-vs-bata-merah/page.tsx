import { Metadata } from "next";
import { ArticleImage } from "../../../components/ArticleImage";

export const metadata: Metadata = {
  title: "Beton vs Bata Merah: Perbandingan Lengkap untuk Konstruksi Rumah",
  description:
    "Perbandingan komprehensif beton dan bata merah. Kelebihan, kekurangan, biaya, dan rekomendasi penggunaan untuk konstruksi rumah yang optimal.",
  keywords: [
    "beton vs bata merah",
    "perbandingan beton bata",
    "kelebihan beton",
    "kelebihan bata merah",
    "material konstruksi",
    "memilih material rumah",
    "biaya beton vs bata",
    "konstruksi rumah",
  ],
  openGraph: {
    title: "Beton vs Bata Merah: Panduan Memilih Material Konstruksi Terbaik",
    description:
      "Analisis mendalam perbandingan beton dan bata merah untuk membantu Anda memilih material konstruksi yang tepat sesuai kebutuhan dan budget.",
  },
};

export default function BetonVsBataMerahPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <span>📅</span>
              <time dateTime="2024-02-05">5 Februari 2024</time>
              <span>•</span>
              <span>⏱️ 12 menit baca</span>
              <span>•</span>
              <span>🏷️ Perbandingan</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Beton vs Bata Merah: Perbandingan Lengkap untuk Konstruksi Rumah
            </h1>
            <p className="text-lg text-gray-600">
              Memilih material konstruksi yang tepat adalah kunci kesuksesan
              pembangunan rumah. Mari kita analisis secara mendalam perbandingan
              beton dan bata merah dari berbagai aspek.
            </p>
          </div>

          {/* Content */}
          <div className="p-6 prose prose-lg max-w-none">
            <ArticleImage
              src="/images/artikel/beton-vs-bata-merah-hero.jpg"
              alt="Beton vs Bata Merah Comparison"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <h3 className="text-blue-800 font-semibold mb-2">
                🎯 Quick Overview
              </h3>
              <p className="text-blue-700">
                <strong>Beton:</strong> Kuat, cepat, modern, tahan gempa
                <br />
                <strong>Bata Merah:</strong> Ekonomis, isolasi baik, ramah
                lingkungan, mudah dikerjakan
              </p>
            </div>

            <h2>Pengenalan Material</h2>

            <h3>Apa itu Beton?</h3>
            <p>
              Beton adalah material komposit yang terbuat dari campuran semen,
              agregat (pasir dan kerikil), air, dan kadang additive khusus.
              Beton modern dapat diperkuat dengan tulangan besi (beton
              bertulang) untuk meningkatkan kekuatan tarik.
            </p>

            <h3>Apa itu Bata Merah?</h3>
            <p>
              Bata merah adalah material konstruksi tradisional yang terbuat
              dari tanah liat yang dibentuk dan dibakar pada suhu tinggi. Proses
              pembuatan yang alami membuatnya memiliki karakteristik unik untuk
              konstruksi.
            </p>

            <ArticleImage
              src="/images/artikel/material-beton-bata.jpg"
              alt="Material Beton dan Bata Merah"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>Perbandingan Komprehensif</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 my-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">
                      Aspek
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Beton
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Bata Merah
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">
                      Kekuatan Tekan
                    </td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      25-40 MPa (Sangat Kuat)
                    </td>
                    <td className="border border-gray-300 p-3 text-orange-600">
                      3-10 MPa (Sedang)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">
                      Kecepatan Kerja
                    </td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      Sangat Cepat
                    </td>
                    <td className="border border-gray-300 p-3 text-orange-600">
                      Sedang
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">
                      Biaya Material
                    </td>
                    <td className="border border-gray-300 p-3 text-red-600">
                      Lebih Mahal
                    </td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      Lebih Murah
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">
                      Isolasi Termal
                    </td>
                    <td className="border border-gray-300 p-3 text-orange-600">
                      Buruk
                    </td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      Sangat Baik
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">
                      Tahan Gempa
                    </td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      Sangat Baik
                    </td>
                    <td className="border border-gray-300 p-3 text-red-600">
                      Kurang Baik
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">
                      Ramah Lingkungan
                    </td>
                    <td className="border border-gray-300 p-3 text-red-600">
                      Carbon Footprint Tinggi
                    </td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      Natural & Recyclable
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Analisis Mendalam: Beton</h2>

            <h3>Kelebihan Beton</h3>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-4">
              <h4 className="text-green-800 font-semibold">
                ✅ Keunggulan Beton:
              </h4>
              <ul className="text-green-700">
                <li>
                  <strong>Kekuatan Superior:</strong> Mampu menahan beban yang
                  sangat besar
                </li>
                <li>
                  <strong>Fleksibilitas Desain:</strong> Dapat dibentuk sesuai
                  keinginan
                </li>
                <li>
                  <strong>Durabilitas Tinggi:</strong> Tahan 50-100 tahun dengan
                  maintenance minimal
                </li>
                <li>
                  <strong>Tahan Api:</strong> Fire resistance yang excellent
                </li>
                <li>
                  <strong>Kecepatan Konstruksi:</strong> Proses pembangunan
                  lebih cepat
                </li>
                <li>
                  <strong>Presisi Dimensi:</strong> Ukuran dan bentuk sangat
                  akurat
                </li>
                <li>
                  <strong>Maintenance Rendah:</strong> Tidak perlu perawatan
                  intensif
                </li>
              </ul>
            </div>

            <h3>Kekurangan Beton</h3>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
              <h4 className="text-red-800 font-semibold">
                ❌ Kelemahan Beton:
              </h4>
              <ul className="text-red-700">
                <li>
                  <strong>Biaya Tinggi:</strong> Investment awal yang besar
                </li>
                <li>
                  <strong>Isolasi Termal Buruk:</strong> Menyerap dan melepas
                  panas dengan cepat
                </li>
                <li>
                  <strong>Retak Susut:</strong> Dapat mengalami shrinkage
                  cracking
                </li>
                <li>
                  <strong>Sulit Modifikasi:</strong> Perubahan struktur sangat
                  sulit
                </li>
                <li>
                  <strong>Carbon Footprint:</strong> Proses produksi semen
                  menghasilkan CO2 tinggi
                </li>
                <li>
                  <strong>Membutuhkan Keahlian:</strong> Perlu tenaga ahli untuk
                  mixing dan curing
                </li>
              </ul>
            </div>

            <h3>Jenis-Jenis Beton</h3>

            <h4>1. Beton Konvensional</h4>
            <ul>
              <li>Campuran standar semen, pasir, kerikil, air</li>
              <li>Kuat tekan 20-25 MPa</li>
              <li>Cocok untuk rumah tinggal 1-2 lantai</li>
              <li>Harga paling ekonomis dalam kategori beton</li>
            </ul>

            <h4>2. Beton Ready Mix</h4>
            <ul>
              <li>Diproduksi di batching plant dengan quality control ketat</li>
              <li>Kuat tekan 25-40 MPa</li>
              <li>Konsistensi kualitas terjamin</li>
              <li>Efisiensi waktu dan tenaga kerja</li>
            </ul>

            <h4>3. Beton Pracetak (Precast)</h4>
            <ul>
              <li>Diproduksi di pabrik dengan kondisi terkontrol</li>
              <li>Kualitas tinggi dan presisi dimensional</li>
              <li>Instalasi sangat cepat</li>
              <li>Cocok untuk konstruksi massal</li>
            </ul>

            <ArticleImage
              src="/images/artikel/jenis-beton.jpg"
              alt="Jenis-jenis Beton"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>Analisis Mendalam: Bata Merah</h2>

            <h3>Kelebihan Bata Merah</h3>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-4">
              <h4 className="text-green-800 font-semibold">
                ✅ Keunggulan Bata Merah:
              </h4>
              <ul className="text-green-700">
                <li>
                  <strong>Ekonomis:</strong> Harga material dan tenaga kerja
                  lebih murah
                </li>
                <li>
                  <strong>Isolasi Termal Excellent:</strong> Ruangan tetap sejuk
                  di siang hari
                </li>
                <li>
                  <strong>Mudah Dikerjakan:</strong> Tidak memerlukan keahlian
                  khusus
                </li>
                <li>
                  <strong>Ramah Lingkungan:</strong> Material alami dan dapat
                  didaur ulang
                </li>
                <li>
                  <strong>Fleksibel Modifikasi:</strong> Mudah diubah, dipotong,
                  atau diperluas
                </li>
                <li>
                  <strong>Kedap Suara:</strong> Isolasi akustik yang baik
                </li>
                <li>
                  <strong>Penyerapan Kelembaban:</strong> Mengatur humidity
                  ruangan
                </li>
              </ul>
            </div>

            <h3>Kekurangan Bata Merah</h3>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
              <h4 className="text-red-800 font-semibold">
                ❌ Kelemahan Bata Merah:
              </h4>
              <ul className="text-red-700">
                <li>
                  <strong>Kekuatan Terbatas:</strong> Tidak cocok untuk bangunan
                  tinggi
                </li>
                <li>
                  <strong>Rentan Gempa:</strong> Struktur brittle yang dapat
                  runtuh
                </li>
                <li>
                  <strong>Proses Lambat:</strong> Pemasangan membutuhkan waktu
                  lama
                </li>
                <li>
                  <strong>Toleransi Dimensi:</strong> Ukuran tidak sempurna
                </li>
                <li>
                  <strong>Maintenance Tinggi:</strong> Perlu perawatan berkala
                </li>
                <li>
                  <strong>Penyerapan Air:</strong> Dapat lembab jika tidak
                  diproteksi
                </li>
              </ul>
            </div>

            <h3>Jenis-Jenis Bata Merah</h3>

            <h4>1. Bata Merah Press</h4>
            <ul>
              <li>Dibuat dengan tekanan tinggi</li>
              <li>Permukaan halus dan dimensi lebih presisi</li>
              <li>Kualitas lebih konsisten</li>
              <li>Harga lebih mahal dari bata biasa</li>
            </ul>

            <h4>2. Bata Merah Bakar Tradisional</h4>
            <ul>
              <li>Proses pembakaran dengan tungku tradisional</li>
              <li>Tekstur dan warna natural</li>
              <li>Harga paling ekonomis</li>
              <li>Kualitas bervariasi tergantung proses</li>
            </ul>

            <h4>3. Bata Expose/Facing Brick</h4>
            <ul>
              <li>Khusus untuk tampilan eksterior</li>
              <li>Warna dan tekstur menarik</li>
              <li>Tidak perlu plester tambahan</li>
              <li>Harga premium namun hasil aesthetic</li>
            </ul>

            <ArticleImage
              src="/images/artikel/jenis-bata-merah.jpg"
              alt="Jenis-jenis Bata Merah"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>Perbandingan Biaya</h2>

            <h3>Analisis Biaya Beton</h3>
            <div className="bg-gray-100 p-4 rounded-lg my-4">
              <h4 className="font-semibold mb-2">
                💰 Breakdown Biaya Beton per m²:
              </h4>
              <ul>
                <li>Material ready mix: Rp 450-650K</li>
                <li>Tulangan besi: Rp 200-300K</li>
                <li>Tenaga kerja: Rp 150-250K</li>
                <li>Bekisting: Rp 100-150K</li>
                <li>
                  <strong>Total: Rp 900-1.350K per m²</strong>
                </li>
              </ul>
            </div>

            <h3>Analisis Biaya Bata Merah</h3>
            <div className="bg-gray-100 p-4 rounded-lg my-4">
              <h4 className="font-semibold mb-2">
                💰 Breakdown Biaya Bata Merah per m²:
              </h4>
              <ul>
                <li>Bata merah: Rp 120-180K</li>
                <li>Semen dan pasir: Rp 80-120K</li>
                <li>Tenaga kerja: Rp 100-150K</li>
                <li>Plester: Rp 80-120K</li>
                <li>
                  <strong>Total: Rp 380-570K per m²</strong>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <h3 className="text-blue-800 font-semibold mb-2">
                📊 Kesimpulan Biaya
              </h3>
              <p className="text-blue-700">
                Bata merah <strong>50-60% lebih murah</strong> dari beton dalam
                biaya awal, namun beton memiliki nilai investment jangka panjang
                yang lebih baik karena durabilitas dan maintenance yang rendah.
              </p>
            </div>

            <h2>Aspek Teknis dan Struktural</h2>

            <h3>Ketahanan Gempa</h3>

            <h4>Beton Bertulang:</h4>
            <ul>
              <li>Struktur monolit yang integral</li>
              <li>Daktilitas tinggi dengan tulangan yang tepat</li>
              <li>Mampu menyerap energi gempa</li>
              <li>Sesuai standar SNI untuk zona gempa tinggi</li>
            </ul>

            <h4>Bata Merah:</h4>
            <ul>
              <li>Struktur tersusun (masonry) dengan sambungan mortar</li>
              <li>Brittle failure mode</li>
              <li>Memerlukan ring beam dan kolom praktis</li>
              <li>Terbatas untuk bangunan rendah</li>
            </ul>

            <h3>Isolasi Termal</h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 my-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">
                      Material
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Konduktivitas Termal
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Performa
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">Beton Normal</td>
                    <td className="border border-gray-300 p-3">1.4-2.0 W/mK</td>
                    <td className="border border-gray-300 p-3 text-red-600">
                      Buruk
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Bata Merah</td>
                    <td className="border border-gray-300 p-3">0.6-1.0 W/mK</td>
                    <td className="border border-gray-300 p-3 text-green-600">
                      Baik
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ArticleImage
              src="/images/artikel/performa-termal.jpg"
              alt="Performa Isolasi Termal"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>Aplikasi dan Rekomendasi Penggunaan</h2>

            <h3>Kapan Memilih Beton?</h3>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-4">
              <h4 className="text-green-800 font-semibold">
                🏗️ Pilih Beton Jika:
              </h4>
              <ul className="text-green-700">
                <li>Bangunan bertingkat (&gt;2 lantai)</li>
                <li>Area rawan gempa</li>
                <li>Konstruksi komersial/industrial</li>
                <li>Budget memadai untuk investment jangka panjang</li>
                <li>Waktu konstruksi terbatas</li>
                <li>Memerlukan kekuatan struktural tinggi</li>
                <li>Desain arsitektur modern/kompleks</li>
              </ul>
            </div>

            <h3>Kapan Memilih Bata Merah?</h3>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 my-4">
              <h4 className="text-orange-800 font-semibold">
                🧱 Pilih Bata Merah Jika:
              </h4>
              <ul className="text-orange-700">
                <li>Rumah tinggal 1-2 lantai</li>
                <li>Budget terbatas</li>
                <li>Area dengan iklim panas</li>
                <li>Konstruksi di area non-seismik</li>
                <li>Mengutamakan kenyamanan termal</li>
                <li>Proses konstruksi tidak terburu-buru</li>
                <li>Pekerja lokal lebih familiar dengan bata</li>
              </ul>
            </div>

            <h2>Kombinasi Optimal: Hybrid Construction</h2>

            <h3>Konsep Konstruksi Hibrida</h3>
            <p>Menggabungkan kelebihan kedua material dengan menggunakan:</p>

            <ul>
              <li>
                <strong>Struktur utama beton:</strong> Pondasi, kolom, balok,
                ring beam
              </li>
              <li>
                <strong>Dinding pengisi bata merah:</strong> Non-structural
                walls
              </li>
              <li>
                <strong>Lantai beton:</strong> Untuk kekuatan dan presisi
              </li>
              <li>
                <strong>Partisi bata:</strong> Untuk isolasi dan kenyamanan
              </li>
            </ul>

            <h3>Keuntungan Sistem Hibrida:</h3>
            <ul>
              <li>Optimalisasi biaya dan performa</li>
              <li>Kekuatan struktural yang memadai</li>
              <li>Kenyamanan termal yang baik</li>
              <li>Fleksibilitas desain dan modifikasi</li>
            </ul>

            <ArticleImage
              src="/images/artikel/konstruksi-hibrida.jpg"
              alt="Konstruksi Hibrida Beton dan Bata"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>Sustainability dan Dampak Lingkungan</h2>

            <h3>Jejak Karbon</h3>

            <h4>Beton:</h4>
            <ul>
              <li>Produksi semen menghasilkan 8% emisi CO2 global</li>
              <li>1 ton semen = 0.9 ton CO2</li>
              <li>Upaya pengembangan green concrete dengan fly ash, slag</li>
              <li>Teknologi carbon capture dalam industri semen</li>
            </ul>

            <h4>Bata Merah:</h4>
            <ul>
              <li>Material dasar alami (tanah liat)</li>
              <li>Proses pembakaran menggunakan biomass</li>
              <li>Fully recyclable dan biodegradable</li>
              <li>Local sourcing mengurangi transport carbon</li>
            </ul>

            <h2>Inovasi dan Teknologi Terkini</h2>

            <h3>Inovasi Beton</h3>
            <ul>
              <li>
                <strong>Self-healing concrete:</strong> Beton yang dapat
                memperbaiki retakan sendiri
              </li>
              <li>
                <strong>Ultra-high performance concrete:</strong> Kekuatan
                &gt;150 MPa
              </li>
              <li>
                <strong>3D printed concrete:</strong> Teknologi printing untuk
                bentuk kompleks
              </li>
              <li>
                <strong>Smart concrete:</strong> Sensor embedded untuk
                monitoring
              </li>
            </ul>

            <h3>Inovasi Bata</h3>
            <ul>
              <li>
                <strong>Interlocking bricks:</strong> Sistem sambungan tanpa
                mortar
              </li>
              <li>
                <strong>Hollow bricks:</strong> Bobot ringan dengan isolasi
                superior
              </li>
              <li>
                <strong>Fly ash bricks:</strong> Memanfaatkan waste abu batubara
              </li>
              <li>
                <strong>Compressed earth blocks:</strong> Stabilized dengan
                semen
              </li>
            </ul>

            <h2>Panduan Pengambilan Keputusan</h2>

            <h3>Decision Matrix</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 my-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">
                      Faktor
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Bobot
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Beton
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Bata Merah
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">Budget (30%)</td>
                    <td className="border border-gray-300 p-3">3</td>
                    <td className="border border-gray-300 p-3">6</td>
                    <td className="border border-gray-300 p-3">9</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      Kekuatan (25%)
                    </td>
                    <td className="border border-gray-300 p-3">2.5</td>
                    <td className="border border-gray-300 p-3">9</td>
                    <td className="border border-gray-300 p-3">6</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      Kenyamanan (20%)
                    </td>
                    <td className="border border-gray-300 p-3">2</td>
                    <td className="border border-gray-300 p-3">5</td>
                    <td className="border border-gray-300 p-3">9</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      Durabilitas (15%)
                    </td>
                    <td className="border border-gray-300 p-3">1.5</td>
                    <td className="border border-gray-300 p-3">9</td>
                    <td className="border border-gray-300 p-3">7</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      Lingkungan (10%)
                    </td>
                    <td className="border border-gray-300 p-3">1</td>
                    <td className="border border-gray-300 p-3">4</td>
                    <td className="border border-gray-300 p-3">8</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <h4 className="font-semibold mb-2">📊 Hasil Scoring:</h4>
              <ul>
                <li>
                  <strong>Beton:</strong> Score total = 64.5
                </li>
                <li>
                  <strong>Bata Merah:</strong> Score total = 77
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                *Scoring berdasarkan bobot prioritas umum. Sesuaikan dengan
                kebutuhan spesifik project Anda.
              </p>
            </div>

            <h2>Tips Implementasi</h2>

            <h3>Untuk Proyek Beton:</h3>
            <ul>
              <li>Pastikan quality control mix design yang ketat</li>
              <li>Gunakan vibrator untuk menghindari honeycombing</li>
              <li>Lakukan curing yang proper minimal 28 hari</li>
              <li>Pertimbangkan additive untuk workability dan durability</li>
            </ul>

            <h3>Untuk Proyek Bata Merah:</h3>
            <ul>
              <li>Pilih bata dengan water absorption &lt;15%</li>
              <li>Gunakan mortar dengan proporsi 1:4-1:6</li>
              <li>Pasang waterproofing pada dinding basement</li>
              <li>Buat ring beam dan kolom praktis untuk zona gempa</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <h3 className="text-blue-800 font-semibold mb-2">
                💡 Rekomendasi Akhir
              </h3>
              <p className="text-blue-700">
                Untuk rumah tinggal di Indonesia, kombinasi struktur beton
                dengan dinding pengisi bata merah memberikan balance optimal
                antara kekuatan, kenyamanan, dan biaya. Pertimbangkan kondisi
                iklim, seismik, dan budget untuk keputusan final.
              </p>
            </div>

            <h2>Konsultasi Material Konstruksi</h2>
            <p>
              Masih bingung memilih antara beton dan bata merah untuk proyek
              Anda? Tim ahli Bahan Bangunan Store siap memberikan konsultasi
              berdasarkan kondisi spesifik lokasi dan kebutuhan proyek.
            </p>

            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <p className="text-center text-gray-600">
                <strong>📞 Konsultasi Gratis:</strong> Hubungi kami di{" "}
                <a
                  href="https://wa.me/6288242423267"
                  className="text-blue-600 hover:underline"
                >
                  088242423267
                </a>{" "}
                untuk rekomendasi material konstruksi terbaik sesuai kebutuhan
                Anda.
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
