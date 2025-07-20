import { Metadata } from "next";
import { ArticleImage } from "../../../components/ArticleImage";

export const metadata: Metadata = {
  title: "Tutorial Cor Beton: Panduan Lengkap Pengecoran Beton yang Benar",
  description:
    "Panduan step-by-step cara cor beton yang benar. Dari persiapan mix design, bekisting, hingga curing untuk hasil cor beton berkualitas tinggi.",
  keywords: [
    "tutorial cor beton",
    "cara cor beton",
    "pengecoran beton",
    "mix design beton",
    "bekisting beton",
    "curing beton",
    "quality control beton",
    "teknik cor beton",
  ],
  openGraph: {
    title: "Tutorial Lengkap Cor Beton - Dari Persiapan hingga Finishing",
    description:
      "Pelajari teknik cor beton professional. Panduan lengkap untuk mendapatkan hasil cor beton yang kuat dan berkualitas tinggi.",
  },
};

export default function TutorialCorBetonPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <span>📅</span>
              <time dateTime="2024-02-10">10 Februari 2024</time>
              <span>•</span>
              <span>⏱️ 15 menit baca</span>
              <span>•</span>
              <span>🏷️ Tutorial</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Tutorial Cor Beton: Panduan Lengkap Pengecoran Beton yang Benar
            </h1>
            <p className="text-lg text-gray-600">
              Pengecoran beton yang benar adalah kunci struktur yang kuat dan
              tahan lama. Pelajari teknik professional dari persiapan hingga
              finishing untuk hasil optimal.
            </p>
          </div>

          {/* Content */}
          <div className="p-6 prose prose-lg max-w-none">
            <ArticleImage
              src="/images/artikel/tutorial-cor-beton-hero.jpg"
              alt="Tutorial Cor Beton"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />

            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 my-6">
              <h3 className="text-orange-800 font-semibold mb-2">⚠️ Penting</h3>
              <p className="text-orange-700">
                Cor beton adalah pekerjaan yang memerlukan presisi tinggi.
                Kesalahan dalam proses dapat mengakibatkan kerusakan struktural
                yang berbahaya dan biaya perbaikan yang mahal.
              </p>
            </div>

            <h2>Tahap Persiapan</h2>

            <h3>1. Perencanaan dan Design</h3>

            <h4>Analisis Kebutuhan:</h4>
            <ul>
              <li>Tentukan kuat tekan beton yang dibutuhkan (fc&apos;)</li>
              <li>Hitung volume beton yang diperlukan</li>
              <li>Pertimbangkan kondisi cuaca dan lingkungan</li>
              <li>Siapkan gambar kerja dan spesifikasi teknis</li>
            </ul>

            <h4>Mix Design Beton:</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 my-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">
                      Kuat Tekan (MPa)
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Semen (kg)
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Pasir (kg)
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Kerikil (kg)
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Air (liter)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      K-200 (16 MPa)
                    </td>
                    <td className="border border-gray-300 p-3">300</td>
                    <td className="border border-gray-300 p-3">760</td>
                    <td className="border border-gray-300 p-3">1050</td>
                    <td className="border border-gray-300 p-3">180</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      K-250 (20 MPa)
                    </td>
                    <td className="border border-gray-300 p-3">350</td>
                    <td className="border border-gray-300 p-3">740</td>
                    <td className="border border-gray-300 p-3">1050</td>
                    <td className="border border-gray-300 p-3">175</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      K-300 (25 MPa)
                    </td>
                    <td className="border border-gray-300 p-3">400</td>
                    <td className="border border-gray-300 p-3">720</td>
                    <td className="border border-gray-300 p-3">1050</td>
                    <td className="border border-gray-300 p-3">170</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>2. Persiapan Material dan Alat</h3>

            <h4>Material yang Dibutuhkan:</h4>
            <ul>
              <li>
                <strong>Semen Portland:</strong> Sesuai spesifikasi (OPC/PPC)
              </li>
              <li>
                <strong>Agregat halus:</strong> Pasir dengan modulus halus
                2.3-3.1
              </li>
              <li>
                <strong>Agregat kasar:</strong> Kerikil gradasi baik ukuran
                5-40mm
              </li>
              <li>
                <strong>Air bersih:</strong> Bebas dari kontaminan organik/kimia
              </li>
              <li>
                <strong>Admixture:</strong> Jika diperlukan (plasticizer,
                retarder, dll)
              </li>
            </ul>

            <h4>Alat yang Diperlukan:</h4>
            <ul>
              <li>Concrete mixer/molen atau ready mix truck</li>
              <li>Vibrator beton (needle vibrator)</li>
              <li>Alat angkut (bucket, concrete pump, wheelbarrow)</li>
              <li>Float dan trowel untuk finishing</li>
              <li>Test equipment (slump cone, cylinder mold)</li>
              <li>Curing compound atau plastic sheeting</li>
            </ul>

            <ArticleImage
              src="/images/artikel/persiapan-cor-beton.jpg"
              alt="Persiapan Cor Beton"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>Tahap Persiapan Bekisting dan Tulangan</h2>

            <h3>1. Pemasangan Bekisting</h3>

            <h4>Kriteria Bekisting yang Baik:</h4>
            <ul>
              <li>Kuat menahan tekanan beton segar</li>
              <li>Kedap air untuk mencegah segregasi</li>
              <li>Dimensi dan bentuk sesuai gambar</li>
              <li>Mudah dibongkar tanpa merusak beton</li>
            </ul>

            <h4>Jenis Bekisting:</h4>
            <ul>
              <li>
                <strong>Kayu:</strong> Multiplek/papan untuk bentuk sederhana
              </li>
              <li>
                <strong>Baja:</strong> Steel form untuk bentuk kompleks dan
                repetitive
              </li>
              <li>
                <strong>Plastic:</strong> Modular system untuk efisiensi
              </li>
              <li>
                <strong>Fiberglass:</strong> Untuk bentuk khusus/architectural
              </li>
            </ul>

            <h3>2. Pemasangan Tulangan</h3>

            <h4>Prinsip Pemasangan Tulangan:</h4>
            <ol>
              <li>
                <strong>Selimut beton (concrete cover):</strong>
                <ul>
                  <li>Pondasi: 75mm</li>
                  <li>Balok/kolom: 40mm</li>
                  <li>Pelat: 20mm</li>
                </ul>
              </li>
              <li>
                <strong>Jarak antar tulangan:</strong> Minimum 25mm atau 1x
                diameter tulangan
              </li>
              <li>
                <strong>Panjang penyaluran:</strong> Sesuai perhitungan
                struktural
              </li>
              <li>
                <strong>Sambungan lewatan:</strong> Minimum 40x diameter
                tulangan
              </li>
            </ol>

            <h3>3. Quality Control Pra-Cor</h3>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <h4 className="text-blue-800 font-semibold">
                ✓ Checklist Pre-Casting:
              </h4>
              <ul className="text-blue-700">
                <li>Bekisting sudah rapi, kuat, dan bersih</li>
                <li>Tulangan terpasang sesuai gambar</li>
                <li>Selimut beton terjaga dengan spacer</li>
                <li>Jalur MEP (listrik/plumbing) sudah terpasang</li>
                <li>Permukaan bekisting sudah diberi release agent</li>
                <li>Akses untuk pengecoran sudah siap</li>
              </ul>
            </div>

            <ArticleImage
              src="/images/artikel/bekisting-tulangan.jpg"
              alt="Bekisting dan Tulangan"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>Tahap Mixing dan Pengecoran</h2>

            <h3>1. Mixing Beton</h3>

            <h4>Urutan Pencampuran yang Benar:</h4>
            <ol>
              <li>Masukkan agregat kasar + sebagian air (10%)</li>
              <li>Aduk 1-2 menit untuk membasahi</li>
              <li>Tambahkan semen + agregat halus</li>
              <li>Aduk sambil menambah air secara bertahap</li>
              <li>Tambahkan admixture jika perlu</li>
              <li>Aduk total 3-5 menit hingga homogen</li>
            </ol>

            <h4>Kontrol Kualitas Mixing:</h4>
            <ul>
              <li>
                <strong>Slump test:</strong> 7.5-15cm untuk cor normal
              </li>
              <li>
                <strong>Visual check:</strong> Tidak ada segregasi atau bleeding
              </li>
              <li>
                <strong>Konsistensi:</strong> Workable tapi tidak over-wet
              </li>
              <li>
                <strong>Waktu mixing:</strong> Tidak lebih dari 90 menit dari
                mixing
              </li>
            </ul>

            <h3>2. Transportasi Beton</h3>

            <h4>Metode Transportasi:</h4>
            <ul>
              <li>
                <strong>Concrete pump:</strong> Untuk jarak jauh dan tinggi
              </li>
              <li>
                <strong>Crane + bucket:</strong> Untuk area sulit akses
              </li>
              <li>
                <strong>Wheelbarrow:</strong> Untuk volume kecil
              </li>
              <li>
                <strong>Belt conveyor:</strong> Untuk transport horizontal
              </li>
            </ul>

            <h3>3. Proses Pengecoran</h3>

            <h4>Teknik Pengecoran yang Benar:</h4>
            <ol>
              <li>
                <strong>Dropping height:</strong> Maksimal 1.5m untuk
                menghindari segregasi
              </li>
              <li>
                <strong>Layer thickness:</strong> 30-50cm per layer untuk
                kompaksi optimal
              </li>
              <li>
                <strong>Kontinuitas:</strong> Hindari cold joint dengan
                pengecoran cepat
              </li>
              <li>
                <strong>Sequence:</strong> Mulai dari ujung dan bergerak
                sistematis
              </li>
            </ol>

            <ArticleImage
              src="/images/artikel/proses-pengecoran.jpg"
              alt="Proses Pengecoran Beton"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>Tahap Compaction (Pemadatan)</h2>

            <h3>1. Vibration Techniques</h3>

            <h4>Prinsip Pemadatan:</h4>
            <ul>
              <li>
                <strong>Tujuan:</strong> Mengeluarkan udara dan mencapai density
                maksimal
              </li>
              <li>
                <strong>Timing:</strong> Segera setelah penempatan beton
              </li>
              <li>
                <strong>Duration:</strong> 15-30 detik per titik
              </li>
              <li>
                <strong>Pattern:</strong> Grid sistematis dengan overlap 10cm
              </li>
            </ul>

            <h4>Jenis Vibrator:</h4>
            <ol>
              <li>
                <strong>Internal vibrator (needle):</strong>
                <ul>
                  <li>Untuk compaction dalam masa beton</li>
                  <li>Diameter 25-75mm tergantung ketebalan</li>
                  <li>Masuk tegak lurus dan keluar perlahan</li>
                </ul>
              </li>
              <li>
                <strong>External vibrator:</strong>
                <ul>
                  <li>Dipasang pada bekisting</li>
                  <li>Untuk elemen tipis atau tulangan rapat</li>
                  <li>Frekuensi 3000-6000 vpm</li>
                </ul>
              </li>
              <li>
                <strong>Surface vibrator:</strong>
                <ul>
                  <li>Untuk finishing permukaan pelat</li>
                  <li>Kombinasi dengan screed board</li>
                </ul>
              </li>
            </ol>

            <h3>2. Tanda-Tanda Compaction yang Cukup</h3>
            <ul>
              <li>Tidak ada gelembung udara yang keluar</li>
              <li>Permukaan menjadi glossy dan rata</li>
              <li>Mortar mulai naik ke permukaan</li>
              <li>Tidak ada void atau rongga</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <h3 className="text-yellow-800 font-semibold mb-2">
                ⚠️ Over-Vibration Warning
              </h3>
              <p className="text-yellow-700">
                Vibrating terlalu lama dapat menyebabkan segregasi dimana
                agregat kasar tenggelam dan mortar naik ke atas, menghasilkan
                beton yang tidak homogen dan lemah.
              </p>
            </div>

            <h2>Tahap Finishing</h2>

            <h3>1. Surface Finishing</h3>

            <h4>Tingkatan Finishing:</h4>
            <ol>
              <li>
                <strong>Screeding:</strong> Meratakan permukaan dengan screed
                board
              </li>
              <li>
                <strong>Bull floating:</strong> Menghilangkan undulasi dan
                mengangkat aggregate
              </li>
              <li>
                <strong>Waiting period:</strong> Tunggu bleeding water menguap
              </li>
              <li>
                <strong>Hand floating:</strong> Smoothing dengan hand float
              </li>
              <li>
                <strong>Troweling:</strong> Final finish dengan steel trowel
                (jika perlu)
              </li>
            </ol>

            <h3>2. Jenis-Jenis Finishing</h3>

            <h4>Berdasarkan Fungsi:</h4>
            <ul>
              <li>
                <strong>Float finish:</strong> Tekstur sedikit kasar, anti-slip
              </li>
              <li>
                <strong>Trowel finish:</strong> Halus dan mengkilap
              </li>
              <li>
                <strong>Broomed finish:</strong> Tekstur dengan sikat untuk grip
              </li>
              <li>
                <strong>Exposed aggregate:</strong> Tampilkan agregat kasar
              </li>
            </ul>

            <ArticleImage
              src="/images/artikel/finishing-beton.jpg"
              alt="Finishing Beton"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>Tahap Curing</h2>

            <h3>1. Pentingnya Curing</h3>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-4">
              <h4 className="text-green-800 font-semibold">
                🎯 Fungsi Curing:
              </h4>
              <ul className="text-green-700">
                <li>Mempertahankan kelembaban untuk hidrasi semen</li>
                <li>Mencegah retak susut (shrinkage crack)</li>
                <li>Mencapai kekuatan design (28 hari)</li>
                <li>Meningkatkan durabilitas dan impermeability</li>
              </ul>
            </div>

            <h3>2. Metode Curing</h3>

            <h4>Water Curing:</h4>
            <ul>
              <li>
                <strong>Ponding:</strong> Genangan air untuk pelat
              </li>
              <li>
                <strong>Spraying:</strong> Penyemprotan berkala
              </li>
              <li>
                <strong>Wet covering:</strong> Karung basah atau geotextile
              </li>
              <li>
                <strong>Steam curing:</strong> Untuk accelerated strength
              </li>
            </ul>

            <h4>Membrane Curing:</h4>
            <ul>
              <li>
                <strong>Plastic sheeting:</strong> Menutupi dengan plastik
              </li>
              <li>
                <strong>Curing compound:</strong> Aplikasi liquid membrane
              </li>
              <li>
                <strong>Aluminum foil:</strong> Reflective membrane
              </li>
            </ul>

            <h3>3. Durasi dan Kondisi Curing</h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 my-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">
                      Umur Beton
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      % Kekuatan
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Kondisi Curing
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">3 hari</td>
                    <td className="border border-gray-300 p-3">40-50%</td>
                    <td className="border border-gray-300 p-3">
                      Curing intensif
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">7 hari</td>
                    <td className="border border-gray-300 p-3">65-75%</td>
                    <td className="border border-gray-300 p-3">
                      Curing berkelanjutan
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">28 hari</td>
                    <td className="border border-gray-300 p-3">100%</td>
                    <td className="border border-gray-300 p-3">
                      Minimum curing period
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Quality Control dan Testing</h2>

            <h3>1. Fresh Concrete Tests</h3>

            <h4>Slump Test:</h4>
            <ol>
              <li>Gunakan slump cone standard (tinggi 30cm)</li>
              <li>Isi beton dalam 3 layer, masing-masing 25 rod</li>
              <li>Ratakan permukaan dan angkat cone</li>
              <li>Ukur penurunan dari tinggi cone</li>
            </ol>

            <h4>Target Slump:</h4>
            <ul>
              <li>
                <strong>Pondasi:</strong> 2.5-7.5 cm
              </li>
              <li>
                <strong>Kolom/balok:</strong> 7.5-15 cm
              </li>
              <li>
                <strong>Pelat:</strong> 5-12.5 cm
              </li>
              <li>
                <strong>Pumping:</strong> 10-18 cm
              </li>
            </ul>

            <h3>2. Hardened Concrete Tests</h3>

            <h4>Compressive Strength Test:</h4>
            <ul>
              <li>Buat cylinder sample Ø15cm x 30cm</li>
              <li>Curing dalam kondisi standard (20±2°C)</li>
              <li>Test pada umur 7, 14, 28 hari</li>
              <li>Minimum 3 sample per batch</li>
            </ul>

            <ArticleImage
              src="/images/artikel/quality-control-beton.jpg"
              alt="Quality Control Beton"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>Troubleshooting Masalah Umum</h2>

            <h3>1. Segregasi</h3>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
              <h4 className="text-red-800 font-semibold">❌ Penyebab:</h4>
              <ul className="text-red-700">
                <li>Dropping height terlalu tinggi (&gt;1.5m)</li>
                <li>Concrete mix terlalu wet</li>
                <li>Over-vibration</li>
                <li>Gradasi agregat buruk</li>
              </ul>
              <h4 className="text-red-800 font-semibold mt-3">✅ Solusi:</h4>
              <ul className="text-red-700">
                <li>Kontrol dropping height</li>
                <li>Adjust mix design</li>
                <li>Proper vibration technique</li>
                <li>Quality control agregat</li>
              </ul>
            </div>

            <h3>2. Honeycombing</h3>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
              <h4 className="text-red-800 font-semibold">❌ Penyebab:</h4>
              <ul className="text-red-700">
                <li>Inadequate vibration</li>
                <li>Concrete mix terlalu kering</li>
                <li>Bekisting bocor</li>
                <li>Tulangan terlalu rapat</li>
              </ul>
              <h4 className="text-red-800 font-semibold mt-3">✅ Solusi:</h4>
              <ul className="text-red-700">
                <li>Systematic vibration</li>
                <li>Improve workability</li>
                <li>Seal bekisting</li>
                <li>Adjust reinforcement spacing</li>
              </ul>
            </div>

            <h3>3. Plastic Shrinkage Cracking</h3>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
              <h4 className="text-red-800 font-semibold">❌ Penyebab:</h4>
              <ul className="text-red-700">
                <li>Rapid moisture loss</li>
                <li>Hot weather concreting</li>
                <li>Strong wind</li>
                <li>Delayed curing</li>
              </ul>
              <h4 className="text-red-800 font-semibold mt-3">✅ Solusi:</h4>
              <ul className="text-red-700">
                <li>Fog spray setelah finishing</li>
                <li>Immediate curing</li>
                <li>Windbreak installation</li>
                <li>Add fiber reinforcement</li>
              </ul>
            </div>

            <h2>Cor Beton dalam Kondisi Khusus</h2>

            <h3>1. Hot Weather Concreting</h3>

            <h4>Precautions (&gt;32°C):</h4>
            <ul>
              <li>Gunakan chilled water atau ice</li>
              <li>Shade material dan equipment</li>
              <li>Aplikasi retarder untuk memperlambat setting</li>
              <li>Continuous curing sejak finishing</li>
              <li>Hindari cor siang hari (cor malam/dini hari)</li>
            </ul>

            <h3>2. Cold Weather Concreting</h3>

            <h4>Precautions (&lt;5°C):</h4>
            <ul>
              <li>Gunakan warm water untuk mixing</li>
              <li>Aplikasi accelerator untuk mempercepat setting</li>
              <li>Insulated curing untuk mencegah freezing</li>
              <li>Heated enclosure jika perlu</li>
              <li>Jangan cor jika ada resiko freezing dalam 48 jam</li>
            </ul>

            <h3>3. Massive Concrete</h3>

            <h4>Untuk Elemen Tebal (&gt;1m):</h4>
            <ul>
              <li>Low heat cement (PPC) untuk mengurangi heat of hydration</li>
              <li>Cooling pipe system untuk kontrol temperatur</li>
              <li>Layer construction dengan interval yang tepat</li>
              <li>Thermal analysis untuk mencegah thermal crack</li>
            </ul>

            <ArticleImage
              src="/images/artikel/kondisi-khusus-cor.jpg"
              alt="Cor Beton Kondisi Khusus"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>Safety dan Environmental</h2>

            <h3>1. Safety Measures</h3>

            <h4>Personal Protective Equipment:</h4>
            <ul>
              <li>Safety helmet dan safety shoes</li>
              <li>Safety goggles untuk concrete splashing</li>
              <li>Rubber gloves untuk handling fresh concrete</li>
              <li>High-vis vest di area heavy equipment</li>
            </ul>

            <h4>Site Safety:</h4>
            <ul>
              <li>Barricade area pengecoran</li>
              <li>Proper scaffold dan working platform</li>
              <li>Emergency equipment (eyewash, first aid)</li>
              <li>Competent person untuk supervisi</li>
            </ul>

            <h3>2. Environmental Considerations</h3>

            <h4>Waste Management:</h4>
            <ul>
              <li>Truck washout area yang terkontrol</li>
              <li>Recycle concrete waste untuk aggregate</li>
              <li>Proper disposal chemical admixture</li>
              <li>Dust control measures</li>
            </ul>

            <h2>Teknologi Modern dalam Cor Beton</h2>

            <h3>1. Self-Compacting Concrete (SCC)</h3>
            <ul>
              <li>High flowability tanpa segregasi</li>
              <li>Tidak memerlukan vibration</li>
              <li>Ideal untuk dense reinforcement</li>
              <li>Excellent surface finish</li>
            </ul>

            <h3>2. High-Performance Concrete</h3>
            <ul>
              <li>Kuat tekan &gt;50 MPa</li>
              <li>Low permeability</li>
              <li>Enhanced durability</li>
              <li>Special admixture requirements</li>
            </ul>

            <h3>3. Smart Concrete Technology</h3>
            <ul>
              <li>Embedded sensors untuk monitoring</li>
              <li>Real-time strength development</li>
              <li>Temperature dan moisture tracking</li>
              <li>IoT integration untuk quality control</li>
            </ul>

            <h2>Estimasi Biaya dan Timeline</h2>

            <h3>Breakdown Biaya Cor Beton (per m³):</h3>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <ul>
                <li>
                  <strong>Ready mix K-250:</strong> Rp 750K-850K
                </li>
                <li>
                  <strong>Bekisting:</strong> Rp 150K-250K
                </li>
                <li>
                  <strong>Tulangan:</strong> Rp 100K-200K
                </li>
                <li>
                  <strong>Tenaga kerja:</strong> Rp 200K-300K
                </li>
                <li>
                  <strong>Equipment:</strong> Rp 50K-100K
                </li>
                <li>
                  <strong>Total:</strong> Rp 1.25M-1.7M per m³
                </li>
              </ul>
            </div>

            <h3>Timeline Typical:</h3>
            <ul>
              <li>
                <strong>Hari 1-2:</strong> Bekisting dan tulangan
              </li>
              <li>
                <strong>Hari 3:</strong> Pengecoran dan finishing
              </li>
              <li>
                <strong>Hari 4-10:</strong> Initial curing
              </li>
              <li>
                <strong>Hari 11-28:</strong> Continued curing
              </li>
              <li>
                <strong>Hari 29+:</strong> Form removal dan finishing work
              </li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
              <h3 className="text-green-800 font-semibold mb-2">
                ✅ Key Success Factors
              </h3>
              <p className="text-green-700">
                Kesuksesan cor beton ditentukan oleh: perencanaan matang,
                quality control ketat, execution yang presisi, dan curing yang
                proper. Jangan terburu-buru dan selalu ikuti best practices
                untuk hasil yang optimal dan tahan lama.
              </p>
            </div>

            <h2>Konsultasi Professional</h2>
            <p>
              Proyek cor beton yang kompleks memerlukan expertise professional.
              Tim ahli Bahan Bangunan Store siap membantu dengan konsultasi
              teknis, supply material berkualitas, dan rekomendasi contractor
              terpercaya.
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
                untuk konsultasi cor beton dan supply material berkualitas
                tinggi.
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
