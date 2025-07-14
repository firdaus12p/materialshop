import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArticleImage } from "../../../components/ArticleImage";
import Link from "next/link";

export default function PipaPVCArtikel() {
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
            <span>Panduan Instalasi Pipa PVC yang Benar</span>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                Tutorial
              </span>
              <span>10 Juli 2025</span>
              <span>•</span>
              <span>8 menit baca</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Panduan Instalasi Pipa PVC yang Benar
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Step by step cara memasang pipa PVC untuk instalasi air bersih dan
              kotor di rumah Anda dengan benar dan aman.
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <ArticleImage
              src="/images/article-pipa-pvc.jpg"
              alt="Instalasi pipa PVC untuk sistem air rumah"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Instalasi pipa PVC yang benar adalah kunci sistem perpipaan yang
              awet dan bebas masalah. Dengan mengikuti panduan yang tepat, Anda
              dapat menghemat biaya perawatan dan menghindari kebocoran yang
              merugikan. Mari pelajari langkah-langkah instalasinya dari
              persiapan hingga finishing.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Persiapan dan Perencanaan
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Menentukan Sistem Perpipaan
            </h3>
            <p className="text-gray-700 mb-4">
              Sebelum memulai instalasi, tentukan jenis sistem yang akan
              dipasang:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                <strong>Air Bersih (Clean Water):</strong> Menggunakan pipa PVC
                warna putih atau abu-abu
              </li>
              <li>
                <strong>Air Kotor (Waste Water):</strong> Menggunakan pipa PVC
                warna orange atau cokelat
              </li>
              <li>
                <strong>Ventilasi:</strong> Pipa untuk sirkulasi udara dalam
                sistem drainase
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Alat dan Bahan yang Dibutuhkan
            </h3>

            <div className="bg-blue-50 p-6 rounded-lg mt-4">
              <h4 className="font-bold text-gray-800 mb-3">Alat:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-gray-700">
                  <li>• Gergaji besi atau pipe cutter</li>
                  <li>• Amplas atau kikir</li>
                  <li>• Meteran dan pensil</li>
                  <li>• Level/waterpass</li>
                  <li>• Bor dan mata bor</li>
                </ul>
                <ul className="space-y-1 text-gray-700">
                  <li>• Tang dan obeng</li>
                  <li>• Kuas untuk lem PVC</li>
                  <li>• Sarung tangan</li>
                  <li>• Kacamata safety</li>
                  <li>• Lap bersih</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-4">
              <h4 className="font-bold text-gray-800 mb-3">Bahan:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-gray-700">
                  <li>• Pipa PVC sesuai diameter</li>
                  <li>• Fitting (elbow, tee, coupling)</li>
                  <li>• Lem PVC berkualitas</li>
                  <li>• PVC cleaner/primer</li>
                  <li>• Klem pipa</li>
                </ul>
                <ul className="space-y-1 text-gray-700">
                  <li>• Paku dan sekrup</li>
                  <li>• Isolasi pipa (jika perlu)</li>
                  <li>• Stop kran dan valve</li>
                  <li>• Seal tape (teflon)</li>
                  <li>• Dempul untuk finishing</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Langkah Instalasi Pipa Air Bersih
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Step 1: Perencanaan Route Pipa
            </h3>
            <ol className="list-decimal ml-6 space-y-2 text-gray-700">
              <li>
                Buat denah instalasi yang detail dengan ukuran yang akurat
              </li>
              <li>Tentukan titik sumber air (meteran atau tandon)</li>
              <li>Marking semua titik outlet (keran, shower, toilet)</li>
              <li>Rencanakan route dengan minimal belokan untuk efisiensi</li>
              <li>Pastikan ada slope 1-2% untuk drainase jika diperlukan</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Step 2: Pemotongan Pipa
            </h3>
            <ol className="list-decimal ml-6 space-y-2 text-gray-700">
              <li>Ukur panjang pipa yang dibutuhkan dengan akurat</li>
              <li>Marking dengan pensil pada pipa</li>
              <li>
                Potong dengan gergaji besi atau pipe cutter secara tegak lurus
              </li>
              <li>
                Haluskan ujung pipa dengan amplas untuk menghilangkan burr
              </li>
              <li>Bersihkan potongan dengan lap kering</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Step 3: Penyambungan dengan Fitting
            </h3>
            <ol className="list-decimal ml-6 space-y-2 text-gray-700">
              <li>Test fitting terlebih dahulu tanpa lem (dry fitting)</li>
              <li>Bersihkan permukaan pipa dan fitting dengan PVC cleaner</li>
              <li>Aplikasikan lem PVC secara merata pada kedua permukaan</li>
              <li>Insert pipa ke fitting dengan gerakan memutar 1/4 putaran</li>
              <li>Tahan selama 15-30 detik hingga lem set</li>
              <li>Biarkan mengering selama 2-4 jam sebelum test tekanan</li>
            </ol>

            <div className="bg-red-50 p-6 rounded-lg mt-6">
              <h4 className="font-bold text-red-800 mb-3">
                ⚠️ Peringatan Penting:
              </h4>
              <ul className="space-y-2 text-red-700">
                <li>• Pastikan ventilasi yang baik saat menggunakan lem PVC</li>
                <li>• Jangan merokok atau ada api terbuka saat bekerja</li>
                <li>• Gunakan sarung tangan untuk melindungi kulit</li>
                <li>• Simpan lem PVC di tempat sejuk dan tertutup rapat</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Instalasi Sistem Air Kotor
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Prinsip Instalasi Drainase
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                <strong>Slope/Kemiringan:</strong> Minimal 1% (1cm per meter)
                menuju ke arah pembuangan
              </li>
              <li>
                <strong>Diameter Pipa:</strong> Minimum 4 inci untuk saluran
                utama, 3 inci untuk cabang
              </li>
              <li>
                <strong>Ventilasi:</strong> Setiap grup sanitair harus ada pipa
                vent
              </li>
              <li>
                <strong>Cleanout:</strong> Pasang akses pembersihan setiap 10-15
                meter
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Step-by-Step Instalasi
            </h3>
            <ol className="list-decimal ml-6 space-y-3 text-gray-700">
              <li>
                <strong>Instalasi Pipa Utama:</strong>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Mulai dari titik pembuangan (septic tank/riol)</li>
                  <li>Pasang dengan slope yang konsisten</li>
                  <li>Gunakan sambungan yang kuat dan kedap</li>
                </ul>
              </li>
              <li>
                <strong>Pemasangan Cabang:</strong>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Sambungkan dari setiap sanitair ke pipa utama</li>
                  <li>Gunakan fitting tee atau wye sesuai kebutuhan</li>
                  <li>Pastikan tidak ada counter-slope</li>
                </ul>
              </li>
              <li>
                <strong>Sistem Ventilasi:</strong>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Pasang pipa vent dari setiap trap menuju atap</li>
                  <li>Minimal 2 inci diameter untuk vent</li>
                  <li>Akhiri dengan cowl atau roof jack</li>
                </ul>
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Testing dan Quality Control
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Test Tekanan untuk Air Bersih
            </h3>
            <ol className="list-decimal ml-6 space-y-2 text-gray-700">
              <li>Tutup semua outlet dengan cap atau plug</li>
              <li>Isi sistem dengan air hingga penuh</li>
              <li>Berikan tekanan 1.5 kali tekanan kerja normal</li>
              <li>Diamkan selama 2 jam, periksa ada kebocoran atau tidak</li>
              <li>Jika tekanan turun, cari dan perbaiki kebocoran</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Test Flow untuk Air Kotor
            </h3>
            <ol className="list-decimal ml-6 space-y-2 text-gray-700">
              <li>Alirkan air dengan volume besar secara tiba-tiba</li>
              <li>Periksa apakah air mengalir lancar tanpa backup</li>
              <li>Test semua fixture secara bersamaan</li>
              <li>Pastikan tidak ada bau gas dari saluran</li>
              <li>Cek fungsi setiap trap dan vent</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Tips Pemasangan yang Efektif
            </h2>

            <div className="bg-yellow-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Do's (Yang Harus Dilakukan):
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  ✓ Selalu gunakan primer sebelum lem PVC untuk hasil optimal
                </li>
                <li>
                  ✓ Berikan support/klem setiap 1-1.5 meter pada pipa horizontal
                </li>
                <li>✓ Gunakan expansion joint untuk pipa panjang</li>
                <li>
                  ✓ Isolasi pipa air panas dengan rockwool atau sejenisnya
                </li>
                <li>✓ Buat dokumentasi foto sebelum pipa tertutup finishing</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg mt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Don'ts (Yang Harus Dihindari):
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  ✗ Jangan gunakan lem berlebihan yang bisa masuk ke dalam pipa
                </li>
                <li>✗ Jangan memaksa pipa masuk jika ukuran tidak pas</li>
                <li>✗ Jangan meninggalkan sambungan yang belum kering</li>
                <li>✗ Jangan lupakan slope pada sistem drainase</li>
                <li>
                  ✗ Jangan menggunakan fitting yang sudah retak atau rusak
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Troubleshooting Masalah Umum
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-800">
                  Kebocoran pada Sambungan
                </h4>
                <p className="text-gray-700 text-sm">
                  <strong>Penyebab:</strong> Lem tidak merata, fitting kotor,
                  atau pipa tidak masuk sempurna.
                  <br />
                  <strong>Solusi:</strong> Potong sambungan, bersihkan, dan
                  sambung ulang dengan benar.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-800">
                  Aliran Air Tidak Lancar
                </h4>
                <p className="text-gray-700 text-sm">
                  <strong>Penyebab:</strong> Diameter pipa terlalu kecil atau
                  ada penyumbatan.
                  <br />
                  <strong>Solusi:</strong> Periksa diameter sesuai standar dan
                  bersihkan sumbatan.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-800">
                  Bau Tidak Sedap dari Drainase
                </h4>
                <p className="text-gray-700 text-sm">
                  <strong>Penyebab:</strong> Sistem vent tidak berfungsi atau
                  trap kering.
                  <br />
                  <strong>Solusi:</strong> Periksa vent dan isi ulang trap
                  dengan air.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Maintenance dan Perawatan
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Perawatan Rutin
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Periksa tekanan air secara berkala</li>
              <li>Bersihkan saringan dan aerator keran</li>
              <li>Flush sistem drainase dengan air panas sebulan sekali</li>
              <li>Periksa klem dan support pipa setiap 6 bulan</li>
              <li>Ganti seal dan gasket yang sudah keras</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Kesimpulan
            </h2>
            <p className="text-gray-700 mb-6">
              Instalasi pipa PVC yang benar memerlukan perencanaan matang,
              eksekusi yang hati-hati, dan testing yang menyeluruh. Dengan
              mengikuti panduan ini, Anda akan mendapatkan sistem perpipaan yang
              awet, efisien, dan bebas masalah. Jangan ragu untuk berkonsultasi
              dengan ahli jika menghadapi instalasi yang kompleks.
            </p>

            {/* CTA */}
            <div className="bg-blue-600 text-white p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-3">
                Butuh Pipa PVC Berkualitas?
              </h3>
              <p className="mb-4">
                Kami menyediakan pipa PVC dan fitting lengkap dari brand
                terpercaya dengan harga kompetitif. Konsultasi gratis untuk
                kebutuhan instalasi Anda.
              </p>
              <a
                href="https://wa.me/6288242423267?text=Halo%2C%20saya%20butuh%20pipa%20PVC%20dan%20fitting%20untuk%20instalasi%20rumah.%20Mohon%20info%20produk%20dan%20harga."
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
                Pesan Sekarang
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
  title: "Panduan Instalasi Pipa PVC yang Benar - Bahan Bangunan Store",
  description:
    "Tutorial lengkap cara memasang pipa PVC untuk air bersih dan kotor. Step by step dari persiapan hingga testing dengan tips professional.",
  keywords:
    "instalasi pipa PVC, tutorial pipa, air bersih, drainase, plumbing, fitting PVC",
};
