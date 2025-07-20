import { Metadata } from "next";
import { ArticleImage } from "../../../components/ArticleImage";

export const metadata: Metadata = {
  title: "15 Tips Hemat Renovasi Rumah Tanpa Mengorbankan Kualitas",
  description:
    "Panduan lengkap renovasi rumah hemat budget. Tips praktis menghemat biaya renovasi hingga 50% tanpa mengurangi kualitas hasil.",
  keywords: [
    "tips hemat renovasi",
    "renovasi murah",
    "hemat biaya renovasi",
    "renovasi budget terbatas",
    "tips renovasi rumah",
    "cara renovasi hemat",
    "renovasi ekonomis",
    "budget renovasi",
  ],
  openGraph: {
    title: "15 Tips Hemat Renovasi Rumah - Hemat Budget Hingga 50%",
    description:
      "Pelajari cara renovasi rumah dengan budget hemat tanpa mengorbankan kualitas. Tips praktis dari para ahli konstruksi.",
  },
};

export default function TipsHematRenovasiPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <span>📅</span>
              <time dateTime="2024-01-25">25 Januari 2024</time>
              <span>•</span>
              <span>⏱️ 10 menit baca</span>
              <span>•</span>
              <span>🏷️ Tips</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              15 Tips Hemat Renovasi Rumah Tanpa Mengorbankan Kualitas
            </h1>
            <p className="text-lg text-gray-600">
              Renovasi rumah impian tidak harus menguras kantong. Dengan
              strategi yang tepat, Anda bisa menghemat hingga 50% budget tanpa
              mengurangi kualitas.
            </p>
          </div>

          {/* Content */}
          <div className="p-6 prose prose-lg max-w-none">
            <ArticleImage
              src="/images/artikel/tips-hemat-renovasi-hero.jpg"
              alt="Tips Hemat Renovasi Rumah"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />

            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
              <h3 className="text-green-800 font-semibold mb-2">
                💰 Quick Tips
              </h3>
              <p className="text-green-700">
                Dengan tips berikut, Anda bisa menghemat 30-50% budget renovasi
                sambil tetap mendapatkan hasil yang memuaskan dan berkualitas
                tinggi.
              </p>
            </div>

            <h2>1. Perencanaan Matang Adalah Kunci</h2>

            <h3>Buat Rencana Detail</h3>
            <ul>
              <li>Tentukan prioritas renovasi (struktural vs estetik)</li>
              <li>Buat timeline yang realistis</li>
              <li>Hitung RAB (Rencana Anggaran Biaya) detail</li>
              <li>Siapkan dana contingency 10-15%</li>
            </ul>

            <h3>Survei Harga Material</h3>
            <ul>
              <li>Bandingkan harga dari 3-5 supplier</li>
              <li>Catat fluktuasi harga musiman</li>
              <li>Manfaatkan promo dan diskon</li>
              <li>Pertimbangkan kualitas vs harga</li>
            </ul>

            <ArticleImage
              src="/images/artikel/perencanaan-renovasi.jpg"
              alt="Perencanaan Renovasi"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>2. Strategi Pembelian Material</h2>

            <h3>Beli dalam Jumlah Besar</h3>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <p className="text-blue-700">
                <strong>💡 Tip:</strong> Pembelian grosir bisa menghemat 15-25%
                dibanding ecer. Koordinasikan dengan tetangga untuk pembelian
                bersama jika memungkinkan.
              </p>
            </div>

            <h3>Timing Pembelian yang Tepat</h3>
            <ul>
              <li>
                <strong>Akhir tahun:</strong> Banyak supplier memberikan diskon
              </li>
              <li>
                <strong>Musim hujan:</strong> Demand rendah, harga cenderung
                turun
              </li>
              <li>
                <strong>Tengah bulan:</strong> Hindari awal/akhir bulan saat
                demand tinggi
              </li>
              <li>
                <strong>Weekday:</strong> Lebih leluasa nego dibanding weekend
              </li>
            </ul>

            <h3>Material Alternatif Berkualitas</h3>
            <ul>
              <li>Keramik lokal berkualitas vs impor mahal</li>
              <li>Kayu olahan vs kayu solid untuk furniture</li>
              <li>Cat water-based vs oil-based</li>
              <li>Granit tile vs granit slab</li>
            </ul>

            <h2>3. Optimalisasi Tenaga Kerja</h2>

            <h3>Kombinasi Profesional dan DIY</h3>
            <ul>
              <li>
                <strong>Profesional:</strong> Pekerjaan struktural, listrik,
                plumbing
              </li>
              <li>
                <strong>DIY:</strong> Pengecatan, pemasangan aksesoris,
                finishing
              </li>
              <li>
                <strong>Semi-DIY:</strong> Bantu tukang untuk mengurangi ongkos
              </li>
            </ul>

            <h3>Negosiasi Borongan vs Harian</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 my-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">
                      Sistem
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Keuntungan
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Cocok Untuk
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">
                      Borongan
                    </td>
                    <td className="border border-gray-300 p-3">
                      Budget pasti, cepat selesai
                    </td>
                    <td className="border border-gray-300 p-3">
                      Pekerjaan standar, volume besar
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">
                      Harian
                    </td>
                    <td className="border border-gray-300 p-3">
                      Fleksibel, kontrol kualitas
                    </td>
                    <td className="border border-gray-300 p-3">
                      Pekerjaan detail, custom
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ArticleImage
              src="/images/artikel/renovasi-diy.jpg"
              alt="Renovasi DIY"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>4. Prioritaskan Renovasi Bertahap</h2>

            <h3>Fase 1: Struktural & Safety</h3>
            <ul>
              <li>Perbaikan atap dan dinding</li>
              <li>Sistem listrik dan plumbing</li>
              <li>Waterproofing</li>
              <li>Perbaikan pondasi (jika perlu)</li>
            </ul>

            <h3>Fase 2: Functional</h3>
            <ul>
              <li>Lantai dan dinding</li>
              <li>Pintu dan jendela</li>
              <li>Kitchen set basic</li>
              <li>Kamar mandi</li>
            </ul>

            <h3>Fase 3: Aesthetic</h3>
            <ul>
              <li>Pengecatan dan finishing</li>
              <li>Furniture dan dekorasi</li>
              <li>Landscape</li>
              <li>Upgrade aesthetic</li>
            </ul>

            <h2>5. Manfaatkan Material Bekas Berkualitas</h2>

            <h3>Material yang Aman Dibeli Bekas</h3>
            <ul>
              <li>Batu bata dan batako (kondisi baik)</li>
              <li>Genteng (tidak retak)</li>
              <li>Kayu balok (tidak rayap)</li>
              <li>Pintu dan jendela kayu solid</li>
              <li>Keramik (sisa proyek)</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <h3 className="text-yellow-800 font-semibold mb-2">
                ⚠️ Hindari Beli Bekas:
              </h3>
              <ul className="text-yellow-700">
                <li>Kabel listrik dan instalasi listrik</li>
                <li>Pipa air dan fitting plumbing</li>
                <li>Cat dan bahan kimia</li>
                <li>Material waterproofing</li>
              </ul>
            </div>

            <h2>6. Teknik Renovasi Hemat</h2>

            <h3>Repaint vs Replace</h3>
            <ul>
              <li>Cat ulang furniture lama dengan teknik yang tepat</li>
              <li>Refinishing lantai kayu daripada ganti baru</li>
              <li>Regrouting keramik daripada ganti total</li>
              <li>Repair dan cat ulang pagar besi</li>
            </ul>

            <h3>Mix & Match Material</h3>
            <ul>
              <li>Keramik mahal untuk area focal point</li>
              <li>Keramik standar untuk area tersembunyi</li>
              <li>Granit hanya untuk kitchen top</li>
              <li>Parket hanya untuk kamar utama</li>
            </ul>

            <ArticleImage
              src="/images/artikel/renovasi-mix-match.jpg"
              alt="Mix Match Material Renovasi"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>7. Tips Khusus Per Area</h2>

            <h3>Dapur Hemat Budget</h3>
            <ul>
              <li>Kitchen set multiplek dengan finishing HPL</li>
              <li>Granit tile untuk countertop</li>
              <li>Keramik dinding 20x25 standar</li>
              <li>Retrofit appliance lama</li>
            </ul>

            <h3>Kamar Mandi Ekonomis</h3>
            <ul>
              <li>Keramik dinding setengah tinggi</li>
              <li>Shower curtain vs pintu kaca</li>
              <li>Closet jongkok + duduk kombinasi</li>
              <li>Water heater listrik vs gas</li>
            </ul>

            <h3>Ruang Tamu Menarik</h3>
            <ul>
              <li>Cat accent wall dengan warna kontras</li>
              <li>Furniture multifungsi</li>
              <li>Lighting ambient yang tepat</li>
              <li>Dekorasi DIY</li>
            </ul>

            <h2>8. Teknologi dan Tools Hemat</h2>

            <h3>Aplikasi Penghitung Material</h3>
            <ul>
              <li>Kalkulator keramik online</li>
              <li>Estimator cat dinding</li>
              <li>RAB builder app</li>
              <li>3D room planner</li>
            </ul>

            <h3>Sewa vs Beli Tools</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 my-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">
                      Tool
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Sewa
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Beli
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      Drilling machine
                    </td>
                    <td className="border border-gray-300 p-3">
                      ✅ Jarang pakai
                    </td>
                    <td className="border border-gray-300 p-3">❌ Mahal</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">
                      Basic hand tools
                    </td>
                    <td className="border border-gray-300 p-3">
                      ❌ Sering butuh
                    </td>
                    <td className="border border-gray-300 p-3">
                      ✅ Investment
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Tile cutter</td>
                    <td className="border border-gray-300 p-3">
                      ✅ Sekali pakai
                    </td>
                    <td className="border border-gray-300 p-3">
                      ❌ Tidak ekonomis
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>9. Timing Renovasi yang Tepat</h2>

            <h3>Musim Terbaik</h3>
            <ul>
              <li>
                <strong>Musim kemarau:</strong> Pekerjaan eksterior dan
                pengecatan
              </li>
              <li>
                <strong>Awal tahun:</strong> Harga material cenderung stabil
              </li>
              <li>
                <strong>Mid-year:</strong> Banyak promo material
              </li>
              <li>
                <strong>Weekday:</strong> Tenaga kerja lebih fokus
              </li>
            </ul>

            <h2>10. Kesalahan Mahal yang Harus Dihindari</h2>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
              <h3 className="text-red-800 font-semibold mb-2">
                ❌ Jangan Lakukan Ini:
              </h3>
              <ul className="text-red-700">
                <li>Membeli material tanpa perhitungan akurat</li>
                <li>Mengabaikan kualitas untuk harga murah</li>
                <li>Tidak membandingkan harga supplier</li>
                <li>Renovasi tanpa IMB (jika diperlukan)</li>
                <li>Mengabaikan aspek keselamatan kerja</li>
                <li>Tidak menyiapkan dana contingency</li>
              </ul>
            </div>

            <ArticleImage
              src="/images/artikel/kesalahan-renovasi.jpg"
              alt="Kesalahan Renovasi"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>11. Strategi Financing Renovasi</h2>

            <h3>Opsi Pembayaran</h3>
            <ul>
              <li>Cash bertahap sesuai progress</li>
              <li>Kredit renovasi bank</li>
              <li>Cicilan 0% untuk material tertentu</li>
              <li>Sistem barter dengan skill/jasa</li>
            </ul>

            <h3>Manajemen Cash Flow</h3>
            <ul>
              <li>Buat jadwal pembayaran material</li>
              <li>Pisahkan rekening khusus renovasi</li>
              <li>Track pengeluaran harian</li>
              <li>Review budget mingguan</li>
            </ul>

            <h2>12. Network dan Komunitas</h2>

            <h3>Manfaatkan Koneksi</h3>
            <ul>
              <li>Grup WhatsApp komplek untuk beli bareng</li>
              <li>Komunitas DIY online</li>
              <li>Forum renovasi dan testimoni</li>
              <li>Referral tukang dari tetangga</li>
            </ul>

            <h2>13. Quality Control Hemat</h2>

            <h3>Inspeksi Berkala</h3>
            <ul>
              <li>Check progress harian</li>
              <li>Foto dokumentasi setiap tahap</li>
              <li>Test kualitas hasil pekerjaan</li>
              <li>Catat issue untuk perbaikan</li>
            </ul>

            <h2>14. After Care dan Maintenance</h2>

            <h3>Perawatan Preventif</h3>
            <ul>
              <li>Buat jadwal maintenance rutin</li>
              <li>Simpan sisa material untuk repair</li>
              <li>Dokumentasi warranty material</li>
              <li>Belajar basic maintenance</li>
            </ul>

            <h2>15. Calculator Hemat Renovasi</h2>

            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <h3 className="font-semibold mb-2">💰 Estimasi Penghematan:</h3>
              <ul>
                <li>
                  Perencanaan matang: <strong>20-30% hemat</strong>
                </li>
                <li>
                  Pembelian grosir: <strong>15-25% hemat</strong>
                </li>
                <li>
                  DIY pekerjaan non-teknis: <strong>30-40% hemat</strong>
                </li>
                <li>
                  Material alternatif: <strong>20-35% hemat</strong>
                </li>
                <li>
                  Timing yang tepat: <strong>10-20% hemat</strong>
                </li>
              </ul>
              <p className="mt-2 text-green-600 font-semibold">
                Total potensi penghematan:{" "}
                <strong>40-60% dari budget awal!</strong>
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
              <h3 className="text-green-800 font-semibold mb-2">
                ✅ Key Takeaway
              </h3>
              <p className="text-green-700">
                Renovasi hemat bukan berarti renovasi murahan. Dengan
                perencanaan matang, strategi pembelian yang tepat, dan eksekusi
                yang cermat, Anda bisa mendapatkan hasil renovasi berkualitas
                tinggi dengan budget yang jauh lebih efisien.
              </p>
            </div>

            <h2>Konsultasi Renovasi Hemat</h2>
            <p>
              Butuh advice material hemat berkualitas untuk renovasi Anda? Tim
              Bahan Bangunan Store siap membantu menyusun strategi renovasi yang
              efisien dan efektif.
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
                untuk tips renovasi hemat dan rekomendasi material terbaik.
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
