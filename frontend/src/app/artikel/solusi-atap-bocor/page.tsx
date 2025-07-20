import { Metadata } from "next";
import { ArticleImage } from "../../../components/ArticleImage";

export const metadata: Metadata = {
  title: "Solusi Atap Bocor: Cara Mengatasi dan Mencegah Kebocoran Atap",
  description:
    "Panduan lengkap mengatasi atap bocor. Penyebab, cara perbaikan, material waterproofing, dan tips pencegahan kebocoran atap rumah.",
  keywords: [
    "solusi atap bocor",
    "cara mengatasi atap bocor",
    "perbaikan atap bocor",
    "waterproofing atap",
    "mencegah kebocoran atap",
    "material anti bocor",
    "genteng bocor",
    "sealant atap",
  ],
  openGraph: {
    title: "Solusi Komprehensif Atap Bocor - Perbaikan & Pencegahan",
    description:
      "Atasi masalah atap bocor dengan solusi yang tepat. Panduan lengkap dari identifikasi hingga perbaikan permanen.",
  },
};

export default function SolusiAtapBocorPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <span>📅</span>
              <time dateTime="2024-01-30">30 Januari 2024</time>
              <span>•</span>
              <span>⏱️ 9 menit baca</span>
              <span>•</span>
              <span>🏷️ Solusi</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Solusi Atap Bocor: Cara Mengatasi dan Mencegah Kebocoran Atap
            </h1>
            <p className="text-lg text-gray-600">
              Atap bocor adalah masalah serius yang perlu ditangani segera.
              Pelajari cara mengidentifikasi, memperbaiki, dan mencegah
              kebocoran atap secara efektif.
            </p>
          </div>

          {/* Content */}
          <div className="p-6 prose prose-lg max-w-none">
            <ArticleImage
              src="/images/artikel/solusi-atap-bocor-hero.jpg"
              alt="Solusi Atap Bocor"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />

            <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
              <h3 className="text-red-800 font-semibold mb-2">
                🚨 Bahaya Atap Bocor
              </h3>
              <p className="text-red-700">
                Atap bocor yang dibiarkan dapat menyebabkan kerusakan
                struktural, pertumbuhan jamur, korsleting listrik, dan kerusakan
                interior yang membutuhkan biaya perbaikan jauh lebih mahal.
              </p>
            </div>

            <h2>Identifikasi Penyebab Atap Bocor</h2>

            <h3>1. Kerusakan Material Atap</h3>
            <ul>
              <li>
                <strong>Genteng retak/pecah:</strong> Akibat benturan atau cuaca
                ekstrem
              </li>
              <li>
                <strong>Seng berlubang:</strong> Korosi atau usia material
              </li>
              <li>
                <strong>Asbes rapuh:</strong> Degradasi material karena usia
              </li>
              <li>
                <strong>Spandek terkelupas:</strong> Coating rusak atau
                instalasi buruk
              </li>
            </ul>

            <h3>2. Masalah Struktur Pendukung</h3>
            <ul>
              <li>Rangka atap yang merosot</li>
              <li>Reng/usuk yang lapuk</li>
              <li>Baut pengencang yang longgar</li>
              <li>Pergeseran konstruksi atap</li>
            </ul>

            <h3>3. Sistem Drainase Bermasalah</h3>
            <ul>
              <li>Talang tersumbat daun/kotoran</li>
              <li>Slope atap tidak memadai</li>
              <li>Overflow point tidak berfungsi</li>
              <li>Koneksi talang bocor</li>
            </ul>

            <ArticleImage
              src="/images/artikel/penyebab-atap-bocor.jpg"
              alt="Penyebab Atap Bocor"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>Langkah-Langkah Identifikasi Kebocoran</h2>

            <h3>Inspeksi dari Dalam Rumah</h3>
            <ol>
              <li>
                <strong>Cek plafon:</strong> Cari noda air, bercak kuning, atau
                cat mengelupas
              </li>
              <li>
                <strong>Periksa sudut-sudut:</strong> Area pertemuan dinding dan
                plafon
              </li>
              <li>
                <strong>Amati saat hujan:</strong> Dengar suara tetesan atau
                aliran air
              </li>
              <li>
                <strong>Gunakan senter:</strong> Periksa area loteng jika ada
                akses
              </li>
            </ol>

            <h3>Inspeksi dari Luar Rumah</h3>
            <ol>
              <li>
                <strong>Visual check:</strong> Periksa kondisi genteng, seng,
                atau material atap
              </li>
              <li>
                <strong>Cek talang:</strong> Pastikan tidak tersumbat atau bocor
              </li>
              <li>
                <strong>Periksa flashing:</strong> Area sambungan antara atap
                dan dinding
              </li>
              <li>
                <strong>Amati pola aliran air:</strong> Saat atau setelah hujan
              </li>
            </ol>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <h3 className="text-yellow-800 font-semibold mb-2">
                ⚠️ Safety First
              </h3>
              <p className="text-yellow-700">
                Jangan naik ke atap saat hujan atau kondisi licin. Gunakan
                safety equipment yang memadai dan pertimbangkan menggunakan jasa
                profesional untuk inspeksi yang aman.
              </p>
            </div>

            <h2>Solusi Perbaikan Berdasarkan Jenis Atap</h2>

            <h3>Atap Genteng Bocor</h3>

            <h4>Perbaikan Minor:</h4>
            <ul>
              <li>Ganti genteng yang retak atau pecah</li>
              <li>Atur ulang genteng yang bergeser</li>
              <li>Tambahkan mortar pada celah yang lebar</li>
              <li>Aplikasi sealant pada area rentan</li>
            </ul>

            <h4>Perbaikan Major:</h4>
            <ul>
              <li>Overhoul total genteng yang sudah tua</li>
              <li>Perbaiki rangka atap yang rusak</li>
              <li>Pasang underlayment waterproof</li>
              <li>Upgrade sistem drainase</li>
            </ul>

            <ArticleImage
              src="/images/artikel/perbaikan-genteng.jpg"
              alt="Perbaikan Genteng Bocor"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h3>Atap Seng/Metal Bocor</h3>

            <h4>Solusi Sementara:</h4>
            <ul>
              <li>Patch dengan material sejenis + sealant</li>
              <li>Aplikasi coating anti karat</li>
              <li>Tambal lubang kecil dengan lem khusus</li>
            </ul>

            <h4>Solusi Permanen:</h4>
            <ul>
              <li>Ganti lembaran yang rusak parah</li>
              <li>Upgrade ke material anti-karat</li>
              <li>Aplikasi coating protective secara menyeluruh</li>
            </ul>

            <h3>Atap Beton/Dak Bocor</h3>

            <h4>Treatment Waterproofing:</h4>
            <ul>
              <li>Bersihkan permukaan dari kotoran dan lumut</li>
              <li>Perbaiki retak dengan crack filler</li>
              <li>Aplikasi primer waterproof</li>
              <li>Coating membrane waterproof 2-3 layer</li>
              <li>Top coating UV protection</li>
            </ul>

            <h2>Material dan Tools yang Dibutuhkan</h2>

            <h3>Tools Dasar:</h3>
            <ul>
              <li>Tangga yang aman dan stabil</li>
              <li>Safety harness dan helm</li>
              <li>Kuas dan roller</li>
              <li>Spatula dan scraper</li>
              <li>Meteran dan penggaris</li>
              <li>Ember dan kain lap</li>
            </ul>

            <h3>Material Repair:</h3>

            <h4>Untuk Genteng:</h4>
            <ul>
              <li>Genteng pengganti (sama dengan yang ada)</li>
              <li>Mortar atau semen instant</li>
              <li>Sealant polyurethane</li>
              <li>Cat genteng (jika diperlukan)</li>
            </ul>

            <h4>Untuk Metal:</h4>
            <ul>
              <li>Lembaran metal patch</li>
              <li>Sealant silicone</li>
              <li>Primer anti-karat</li>
              <li>Cat metal protektif</li>
            </ul>

            <h4>Untuk Dak Beton:</h4>
            <ul>
              <li>Crack filler elastomeric</li>
              <li>Primer waterproof</li>
              <li>Membrane waterproof</li>
              <li>Top coating acrylic</li>
            </ul>

            <ArticleImage
              src="/images/artikel/material-waterproofing.jpg"
              alt="Material Waterproofing"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>Step-by-Step Perbaikan</h2>

            <h3>Perbaikan Genteng Bocor</h3>
            <ol>
              <li>
                <strong>Akses area bocor:</strong> Naik dengan hati-hati
                menggunakan tangga yang stabil
              </li>
              <li>
                <strong>Identifikasi kerusakan:</strong> Cari genteng retak,
                bergeser, atau hilang
              </li>
              <li>
                <strong>Bersihkan area:</strong> Singkirkan kotoran, lumut, dan
                debris
              </li>
              <li>
                <strong>Ganti genteng rusak:</strong> Angkat hati-hati dan
                pasang yang baru
              </li>
              <li>
                <strong>Seal celah:</strong> Aplikasi sealant pada area yang
                rentan
              </li>
              <li>
                <strong>Test dengan air:</strong> Siram dengan selang untuk
                memastikan tidak bocor
              </li>
            </ol>

            <h3>Waterproofing Dak Beton</h3>
            <ol>
              <li>
                <strong>Persiapan permukaan:</strong> Bersihkan dan pastikan
                kering
              </li>
              <li>
                <strong>Perbaiki retak:</strong> Isi dengan crack filler,
                biarkan kering
              </li>
              <li>
                <strong>Aplikasi primer:</strong> Ratakan dengan roller, tunggu
                kering
              </li>
              <li>
                <strong>Layer pertama membrane:</strong> Aplikasi tipis dan
                merata
              </li>
              <li>
                <strong>Layer kedua membrane:</strong> Searah tegak lurus layer
                pertama
              </li>
              <li>
                <strong>Top coating:</strong> Aplikasi finishing coat untuk UV
                protection
              </li>
            </ol>

            <h2>Sistem Drainase Atap yang Efektif</h2>

            <h3>Komponen Sistem Drainase:</h3>
            <ul>
              <li>
                <strong>Talang utama:</strong> Mengumpulkan air dari atap
              </li>
              <li>
                <strong>Talang vertikal:</strong> Menyalurkan air ke bawah
              </li>
              <li>
                <strong>Saringan debris:</strong> Mencegah penyumbatan
              </li>
              <li>
                <strong>Overflow system:</strong> Backup saat volume berlebih
              </li>
            </ul>

            <h3>Maintenance Sistem Drainase:</h3>
            <ul>
              <li>Bersihkan talang minimal 2 kali per tahun</li>
              <li>Periksa slope dan alignment talang</li>
              <li>Ganti gasket dan sambungan yang rusak</li>
              <li>Test kapasitas drainase sebelum musim hujan</li>
            </ul>

            <h2>Pencegahan Kebocoran Atap</h2>

            <h3>Inspeksi Rutin</h3>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <h4 className="text-blue-800 font-semibold">
                📅 Jadwal Inspeksi:
              </h4>
              <ul className="text-blue-700">
                <li>
                  <strong>Bulanan:</strong> Visual check dari dalam rumah
                </li>
                <li>
                  <strong>3 Bulan:</strong> Cek kondisi talang dan drainase
                </li>
                <li>
                  <strong>6 Bulan:</strong> Inspeksi menyeluruh dari luar
                </li>
                <li>
                  <strong>Tahunan:</strong> Professional assessment
                </li>
              </ul>
            </div>

            <h3>Maintenance Preventif</h3>
            <ul>
              <li>Bersihkan talang dari daun dan kotoran</li>
              <li>Potong dahan pohon yang menggantung</li>
              <li>Aplikasi coating protektif secara berkala</li>
              <li>Perbaiki kerusakan minor segera</li>
            </ul>

            <ArticleImage
              src="/images/artikel/maintenance-atap.jpg"
              alt="Maintenance Atap"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>Kapan Harus Memanggil Professional</h2>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 my-6">
              <h3 className="text-orange-800 font-semibold mb-2">
                🔧 Panggil Ahli Jika:
              </h3>
              <ul className="text-orange-700">
                <li>Kebocoran luas dan parah</li>
                <li>Kerusakan struktural rangka atap</li>
                <li>Atap tinggi atau akses sulit</li>
                <li>Perbaikan sebelumnya gagal</li>
                <li>Tidak yakin dengan diagnosis masalah</li>
                <li>Butuh warranty pekerjaan</li>
              </ul>
            </div>

            <h2>Estimasi Biaya Perbaikan</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 my-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">
                      Jenis Perbaikan
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Range Biaya
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Durasi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      Ganti genteng (per m²)
                    </td>
                    <td className="border border-gray-300 p-3">Rp 150-300K</td>
                    <td className="border border-gray-300 p-3">1-2 hari</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      Patch seng bocor
                    </td>
                    <td className="border border-gray-300 p-3">Rp 50-150K</td>
                    <td className="border border-gray-300 p-3">½ hari</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      Waterproofing dak (per m²)
                    </td>
                    <td className="border border-gray-300 p-3">Rp 200-500K</td>
                    <td className="border border-gray-300 p-3">2-3 hari</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      Bersih + maintenance talang
                    </td>
                    <td className="border border-gray-300 p-3">Rp 200-400K</td>
                    <td className="border border-gray-300 p-3">½ hari</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Tips Pemilihan Material Anti Bocor</h2>

            <h3>Kriteria Material Berkualitas:</h3>
            <ul>
              <li>
                <strong>Daya tahan:</strong> Minimal 5-10 tahun warranty
              </li>
              <li>
                <strong>Elastisitas:</strong> Dapat mengikuti pergerakan
                struktur
              </li>
              <li>
                <strong>UV resistance:</strong> Tidak mudah rusak sinar matahari
              </li>
              <li>
                <strong>Aplikasi mudah:</strong> User-friendly untuk DIY
              </li>
              <li>
                <strong>Eco-friendly:</strong> Tidak berbahaya bagi lingkungan
              </li>
            </ul>

            <h2>Teknologi Terbaru Anti Bocor</h2>

            <h3>Inovasi Material:</h3>
            <ul>
              <li>
                <strong>Self-healing membrane:</strong> Dapat menutup retak
                kecil otomatis
              </li>
              <li>
                <strong>Cool roof coating:</strong> Reflektif panas sekaligus
                waterproof
              </li>
              <li>
                <strong>Nano technology:</strong> Perlindungan molekular level
              </li>
              <li>
                <strong>Smart leak detection:</strong> Sensor bocor dengan alert
                system
              </li>
            </ul>

            <h2>Emergency Response Atap Bocor</h2>

            <h3>Langkah Darurat Saat Hujan:</h3>
            <ol>
              <li>Amankan barang-barang berharga</li>
              <li>Siapkan wadah penampung air</li>
              <li>Matikan listrik di area yang basah</li>
              <li>Tutup sementara dengan terpal dari dalam</li>
              <li>Dokumentasi kerusakan untuk asuransi</li>
              <li>Hubungi kontraktor untuk perbaikan</li>
            </ol>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
              <h3 className="text-green-800 font-semibold mb-2">
                ✅ Kesimpulan
              </h3>
              <p className="text-green-700">
                Atap bocor membutuhkan penanganan cepat dan tepat. Identifikasi
                penyebab dengan akurat, pilih solusi yang sesuai, dan lakukan
                maintenance preventif untuk mencegah masalah serupa di masa
                depan. Jangan ragu memanggil profesional untuk perbaikan yang
                kompleks.
              </p>
            </div>

            <h2>Konsultasi Solusi Atap Bocor</h2>
            <p>
              Mengalami masalah atap bocor yang sulit diatasi? Tim ahli Bahan
              Bangunan Store siap membantu dengan diagnosis akurat dan solusi
              material yang tepat untuk atap Anda.
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
                untuk solusi atap bocor dan material waterproofing terbaik.
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
