import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArticleImage } from "../../../components/ArticleImage";
import Link from "next/link";

export default function WaterproofingArtikel() {
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
            <span>Waterproofing: Solusi Atasi Kebocoran di Rumah</span>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-semibold">
                Solusi
              </span>
              <span>4 Juli 2025</span>
              <span>•</span>
              <span>9 menit baca</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Waterproofing: Solusi Atasi Kebocoran di Rumah
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Panduan lengkap sistem waterproofing untuk mencegah dan mengatasi
              masalah kebocoran di berbagai area rumah dengan solusi yang tepat
              dan tahan lama.
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <ArticleImage
              src="/images/article-waterproofing.jpg"
              alt="Aplikasi waterproofing untuk mencegah kebocoran"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Kebocoran adalah masalah yang sangat mengganggu dan dapat merusak
              struktur bangunan jika tidak ditangani dengan tepat. Waterproofing
              atau kedap air merupakan solusi efektif untuk mencegah dan
              mengatasi masalah infiltrasi air. Mari pelajari berbagai metode
              dan material waterproofing yang sesuai untuk setiap kondisi.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Mengidentifikasi Sumber Kebocoran
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Tanda-Tanda Kebocoran
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                <strong>Visual:</strong> Noda basah, perubahan warna dinding,
                cat mengelupas
              </li>
              <li>
                <strong>Fisik:</strong> Tetesan air, genangan, kelembaban
                berlebih
              </li>
              <li>
                <strong>Bau:</strong> Aroma apek atau jamur yang menyengat
              </li>
              <li>
                <strong>Struktural:</strong> Retak pada dinding, plafon, atau
                lantai
              </li>
              <li>
                <strong>Biologis:</strong> Pertumbuhan jamur, lumut, atau alga
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Area Rawan Kebocoran
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-bold text-red-800 mb-3">Area Eksternal:</h4>
                <ul className="space-y-1 text-red-700 text-sm">
                  <li>• Atap dan talang air</li>
                  <li>• Dinding eksterior</li>
                  <li>• Fondasi dan basement</li>
                  <li>• Balkon dan teras</li>
                  <li>• Window dan door frame</li>
                  <li>• Sambungan antar material</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3">Area Internal:</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• Kamar mandi dan shower</li>
                  <li>• Dapur area sink</li>
                  <li>• Lantai basement</li>
                  <li>• Area laundry</li>
                  <li>• Sambungan pipa dan fitting</li>
                  <li>• Expansion joint</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Jenis-Jenis Material Waterproofing
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              1. Waterproofing Cair (Liquid Applied)
            </h3>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-800">
                  Acrylic Waterproofing
                </h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Kegunaan:</strong> Area yang tidak terekspos langsung
                  ke cuaca ekstrem
                </p>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Karakteristik:</strong> Elastis, mudah aplikasi, ramah
                  lingkungan
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Harga:</strong> Rp 50-80K/liter |{" "}
                  <strong>Coverage:</strong> 1-2 m²/liter
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-800">
                  Polyurethane (PU) Waterproofing
                </h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Kegunaan:</strong> Area dengan traffic tinggi,
                  eksterior
                </p>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Karakteristik:</strong> Sangat elastis, tahan UV,
                  chemical resistant
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Harga:</strong> Rp 120-200K/liter |{" "}
                  <strong>Coverage:</strong> 1.5-2.5 m²/liter
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-800">
                  Cementitious Waterproofing
                </h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Kegunaan:</strong> Struktur beton, basement, water
                  tank
                </p>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Karakteristik:</strong> Rigid, breathable, tahan
                  tekanan air tinggi
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Harga:</strong> Rp 35-60K/kg |{" "}
                  <strong>Coverage:</strong> 2-3 m²/kg
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2. Waterproofing Membrane
            </h3>

            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <h4 className="font-bold text-gray-800 mb-3">
                Self-Adhesive Membrane
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Material:</strong> Modified bitumen dengan adhesive
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Ketebalan:</strong> 1.2-4.0 mm
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Harga:</strong> Rp 45-85K/m²
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 text-sm mb-1">
                    <strong>Kelebihan:</strong>
                  </p>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li>• Instalasi cepat tanpa torch</li>
                    <li>• Seal sempurna pada overlap</li>
                    <li>• Tidak memerlukan primer khusus</li>
                    <li>• Cold application</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mt-4">
              <h4 className="font-bold text-yellow-800 mb-3">
                Torch-On Membrane
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-yellow-700 text-sm mb-2">
                    <strong>Material:</strong> APP/SBS modified bitumen
                  </p>
                  <p className="text-yellow-700 text-sm mb-2">
                    <strong>Ketebalan:</strong> 3-5 mm
                  </p>
                  <p className="text-yellow-700 text-sm">
                    <strong>Harga:</strong> Rp 55-120K/m²
                  </p>
                </div>
                <div>
                  <p className="text-yellow-700 text-sm mb-1">
                    <strong>Kelebihan:</strong>
                  </p>
                  <ul className="text-yellow-700 text-xs space-y-1">
                    <li>• Sangat kuat dan tahan lama</li>
                    <li>• Tahan suhu ekstrem</li>
                    <li>• Perfect seal antar sambungan</li>
                    <li>• Cocok untuk heavy duty</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Sistem Waterproofing per Area
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Waterproofing Atap
            </h3>

            <div className="bg-blue-50 p-6 rounded-lg mt-4">
              <h4 className="font-bold text-blue-800 mb-3">Atap Datar/Cor:</h4>
              <ol className="list-decimal ml-4 space-y-2 text-blue-700">
                <li>
                  <strong>Persiapan:</strong> Bersihkan permukaan, perbaiki
                  retak, buat slope 1-2%
                </li>
                <li>
                  <strong>Primer:</strong> Aplikasikan primer sesuai jenis
                  membrane
                </li>
                <li>
                  <strong>Membrane:</strong> Pasang torch-on atau self-adhesive
                  dengan overlap 10cm
                </li>
                <li>
                  <strong>Protection:</strong> Pasang screed beton atau paving
                  untuk proteksi UV
                </li>
                <li>
                  <strong>Drainase:</strong> Pastikan sistem drainase berfungsi
                  optimal
                </li>
              </ol>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-4">
              <h4 className="font-bold text-green-800 mb-3">Atap Genteng:</h4>
              <ol className="list-decimal ml-4 space-y-2 text-green-700">
                <li>
                  <strong>Underlayment:</strong> Pasang waterproof membrane di
                  bawah genteng
                </li>
                <li>
                  <strong>Flashing:</strong> Aplikasi flashing pada valley,
                  ridge, dan penetrasi
                </li>
                <li>
                  <strong>Sealant:</strong> Gunakan sealant pada sambungan dan
                  overlap
                </li>
                <li>
                  <strong>Ventilasi:</strong> Pastikan ventilasi atap tidak
                  tertutup
                </li>
              </ol>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Waterproofing Kamar Mandi
            </h3>

            <ol className="list-decimal ml-6 space-y-3 text-gray-700">
              <li>
                <strong>Persiapan Substrat:</strong>
                <ul className="list-disc ml-4 mt-2 space-y-1 text-sm">
                  <li>Pastikan permukaan bersih, kering, dan rata</li>
                  <li>Perbaiki retak dengan repair mortar</li>
                  <li>Buat kemiringan menuju floor drain (1-2%)</li>
                </ul>
              </li>
              <li>
                <strong>Aplikasi Waterproofing:</strong>
                <ul className="list-disc ml-4 mt-2 space-y-1 text-sm">
                  <li>Aplikasikan primer untuk meningkatkan adhesi</li>
                  <li>
                    Aplikasi 2-3 coat waterproofing cair dengan interval 4-6 jam
                  </li>
                  <li>
                    Perhatikan area sudut dan sambungan dengan reinforcement
                  </li>
                </ul>
              </li>
              <li>
                <strong>Testing:</strong>
                <ul className="list-disc ml-4 mt-2 space-y-1 text-sm">
                  <li>Lakukan flood test selama 24 jam</li>
                  <li>Periksa tidak ada kebocoran di area bawah</li>
                  <li>Dokumentasikan hasil test</li>
                </ul>
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Waterproofing Basement
            </h3>

            <div className="bg-purple-50 p-6 rounded-lg mt-4">
              <h4 className="font-bold text-purple-800 mb-3">
                Metode Eksternal (Tanking):
              </h4>
              <ul className="space-y-2 text-purple-700">
                <li>
                  • Aplikasikan cementitious waterproofing pada dinding
                  eksternal
                </li>
                <li>• Pasang drainage system untuk mengelola groundwater</li>
                <li>• Gunakan geotextile untuk proteksi membrane</li>
                <li>• Backfill dengan material yang tepat</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg mt-4">
              <h4 className="font-bold text-orange-800 mb-3">
                Metode Internal (Negative Side):
              </h4>
              <ul className="space-y-2 text-orange-700">
                <li>
                  • Gunakan crystalline waterproofing untuk penetrasi dalam
                </li>
                <li>• Aplikasikan cementitious coating yang breathable</li>
                <li>• Pastikan tidak ada trapped moisture</li>
                <li>• Monitor kelembaban secara berkala</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Langkah Aplikasi Waterproofing
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Pre-Application
            </h3>
            <ol className="list-decimal ml-6 space-y-2 text-gray-700">
              <li>Survey dan identifikasi sumber masalah</li>
              <li>Tentukan sistem waterproofing yang tepat</li>
              <li>Persiapkan tools dan material yang dibutuhkan</li>
              <li>Cek kondisi cuaca (hindari hujan dan suhu ekstrem)</li>
              <li>Buat work schedule yang realistis</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Application Process
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3">
                  Surface Preparation:
                </h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• Clean substrate dari debu dan minyak</li>
                  <li>• Repair cracks dan honeycomb</li>
                  <li>• Ensure proper slope untuk drainage</li>
                  <li>• Moisture content check (&lt;6%)</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-3">
                  Application Technique:
                </h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Follow manufacturer specification</li>
                  <li>• Maintain wet edge during application</li>
                  <li>• Proper overlap pada membrane</li>
                  <li>• Quality control di setiap stage</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Quality Control dan Testing
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Metode Testing
            </h3>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-800">
                  Flood Test (Water Ponding)
                </h4>
                <p className="text-gray-700 text-sm">
                  Genangan air setinggi 5-10cm selama 24-48 jam untuk area
                  horizontal seperti atap dan lantai.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-800">Spray Test</h4>
                <p className="text-gray-700 text-sm">
                  Penyemprotan air bertekanan pada dinding vertikal selama
                  periode tertentu.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-800">
                  Electronic Leak Detection
                </h4>
                <p className="text-gray-700 text-sm">
                  Menggunakan alat elektronik untuk mendeteksi pinhole atau
                  cacat pada membrane.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Maintenance dan Troubleshooting
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Maintenance Schedule
            </h3>

            <div className="bg-yellow-50 p-6 rounded-lg mt-4">
              <h4 className="font-bold text-yellow-800 mb-3">
                Rutinitas Perawatan:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-yellow-700 text-sm mb-2">
                    <strong>Bulanan:</strong>
                  </p>
                  <ul className="text-yellow-700 text-xs space-y-1">
                    <li>• Bersihkan drainase dari kotoran</li>
                    <li>• Periksa area rawan kebocoran</li>
                    <li>• Monitor pertumbuhan vegetasi</li>
                  </ul>
                </div>
                <div>
                  <p className="text-yellow-700 text-sm mb-2">
                    <strong>Tahunan:</strong>
                  </p>
                  <ul className="text-yellow-700 text-xs space-y-1">
                    <li>• Inspeksi menyeluruh sistem</li>
                    <li>• Re-seal sambungan jika perlu</li>
                    <li>• Dokumentasi kondisi</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Common Problems & Solutions
            </h3>

            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-800">
                  Membrane Blistering
                </h4>
                <p className="text-gray-700 text-sm">
                  <strong>Penyebab:</strong> Trapped moisture, aplikasi pada
                  substrat basah
                  <br />
                  <strong>Solusi:</strong> Cut blister, dry substrate, patch
                  dengan material yang sama
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-800">Sealant Failure</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Penyebab:</strong> UV degradation, movement stress,
                  improper application
                  <br />
                  <strong>Solusi:</strong> Remove old sealant, clean joint,
                  apply new sealant
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-gray-800">Pinhole Leaks</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Penyebab:</strong> Poor application technique,
                  substrate contamination
                  <br />
                  <strong>Solusi:</strong> Locate exact point, clean area, apply
                  patch coating
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Cost Analysis
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 mt-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      Sistem
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                      Material Cost/m²
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                      Labor Cost/m²
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                      Durabilitas
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Acrylic Coating
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rp 25-40K
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rp 15-25K
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      5-8 tahun
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      PU Coating
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rp 60-100K
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rp 20-35K
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      10-15 tahun
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Self-Adhesive
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rp 45-85K
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rp 25-40K
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      15-20 tahun
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      Torch-On
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rp 55-120K
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rp 35-50K
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      20-25 tahun
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Kesimpulan
            </h2>
            <p className="text-gray-700 mb-6">
              Waterproofing yang efektif memerlukan pemilihan sistem yang tepat,
              aplikasi yang benar, dan maintenance yang rutin. Investasi pada
              waterproofing berkualitas akan menghemat biaya perbaikan jangka
              panjang dan menjaga kenyamanan hunian. Konsultasikan dengan ahli
              waterproofing untuk mendapatkan solusi yang optimal sesuai kondisi
              spesifik bangunan Anda.
            </p>

            {/* CTA */}
            <div className="bg-blue-600 text-white p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-3">
                Masalah Kebocoran di Rumah?
              </h3>
              <p className="mb-4">
                Tim ahli kami siap memberikan solusi waterproofing yang tepat
                untuk mengatasi masalah kebocoran. Konsultasi gratis dan garansi
                kualitas pekerjaan.
              </p>
              <a
                href="https://wa.me/6288242423267?text=Halo%2C%20saya%20mengalami%20masalah%20kebocoran%20di%20rumah.%20Mohon%20konsultasi%20solusi%20waterproofing%20yang%20tepat."
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
    "Waterproofing: Solusi Atasi Kebocoran di Rumah - Bahan Bangunan Store",
  description:
    "Panduan lengkap sistem waterproofing untuk mengatasi kebocoran. Jenis material, metode aplikasi, dan maintenance untuk hasil yang tahan lama.",
  keywords:
    "waterproofing, anti bocor, membrane waterproof, kebocoran atap, basement waterproofing",
};
