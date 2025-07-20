import { Metadata } from "next";
import { ArticleImage } from "../../../components/ArticleImage";

export const metadata: Metadata = {
  title: "Semen vs Mortar: Perbedaan, Fungsi, dan Kapan Menggunakannya",
  description:
    "Pelajari perbedaan semen dan mortar, fungsi masing-masing, dan kapan waktu yang tepat menggunakan semen atau mortar dalam konstruksi.",
  keywords: [
    "semen vs mortar",
    "perbedaan semen mortar",
    "fungsi semen",
    "fungsi mortar",
    "kapan pakai semen",
    "kapan pakai mortar",
    "jenis semen",
    "jenis mortar",
    "material konstruksi",
  ],
  openGraph: {
    title: "Semen vs Mortar: Panduan Lengkap Memilih Material Tepat",
    description:
      "Pahami perbedaan semen dan mortar untuk memilih material konstruksi yang tepat sesuai kebutuhan proyek Anda.",
  },
};

export default function SemenVsMortarPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <span>📅</span>
              <time dateTime="2024-01-20">20 Januari 2024</time>
              <span>•</span>
              <span>⏱️ 6 menit baca</span>
              <span>•</span>
              <span>🏷️ Material</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Semen vs Mortar: Perbedaan, Fungsi, dan Kapan Menggunakannya
            </h1>
            <p className="text-lg text-gray-600">
              Memahami perbedaan semen dan mortar penting untuk memilih material
              konstruksi yang tepat dan mendapatkan hasil optimal.
            </p>
          </div>

          {/* Content */}
          <div className="p-6 prose prose-lg max-w-none">
            <ArticleImage
              src="/images/artikel/semen-vs-mortar-hero.jpg"
              alt="Semen vs Mortar Comparison"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />

            <h2>Apa itu Semen?</h2>
            <p>
              Semen adalah bahan pengikat hidraulis yang terbuat dari campuran
              batu kapur, tanah liat, dan material lain yang dipanaskan pada
              suhu tinggi. Semen berfungsi sebagai &quot;lem&quot; yang mengikat
              agregat dalam campuran beton.
            </p>

            <h3>Karakteristik Semen:</h3>
            <ul>
              <li>Bubuk halus berwarna abu-abu</li>
              <li>Mengeras ketika dicampur air (hidrasi)</li>
              <li>Kuat tekan tinggi setelah mengering</li>
              <li>Tahan terhadap air dan cuaca</li>
              <li>Waktu setting yang dapat dikontrol</li>
            </ul>

            <h2>Apa itu Mortar?</h2>
            <p>
              Mortar adalah campuran yang sudah jadi terdiri dari semen, pasir,
              dan additive khusus dalam proporsi yang tepat. Mortar dirancang
              untuk aplikasi spesifik dan mudah digunakan.
            </p>

            <h3>Karakteristik Mortar:</h3>
            <ul>
              <li>Campuran siap pakai</li>
              <li>Konsistensi dan kualitas terjamin</li>
              <li>Waktu kerja yang optimal</li>
              <li>Berbagai varian sesuai kebutuhan</li>
              <li>Mudah dicampur dan diaplikasikan</li>
            </ul>

            <ArticleImage
              src="/images/artikel/perbandingan-semen-mortar.jpg"
              alt="Perbandingan Semen dan Mortar"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>Perbedaan Utama Semen vs Mortar</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 my-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">
                      Aspek
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Semen
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Mortar
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">
                      Komposisi
                    </td>
                    <td className="border border-gray-300 p-3">
                      Bahan pengikat murni
                    </td>
                    <td className="border border-gray-300 p-3">
                      Semen + pasir + additive
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">
                      Kemudahan
                    </td>
                    <td className="border border-gray-300 p-3">
                      Perlu campuran manual
                    </td>
                    <td className="border border-gray-300 p-3">
                      Siap pakai, tinggal campur air
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">
                      Konsistensi
                    </td>
                    <td className="border border-gray-300 p-3">
                      Tergantung pencampuran
                    </td>
                    <td className="border border-gray-300 p-3">
                      Konsisten setiap kali
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">
                      Harga
                    </td>
                    <td className="border border-gray-300 p-3">
                      Lebih murah per kg
                    </td>
                    <td className="border border-gray-300 p-3">
                      Lebih mahal, tapi praktis
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">
                      Aplikasi
                    </td>
                    <td className="border border-gray-300 p-3">
                      Beton, plester, pondasi
                    </td>
                    <td className="border border-gray-300 p-3">
                      Pasang bata, keramik, perbaikan
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Jenis-Jenis Semen</h2>

            <h3>1. Semen Portland (OPC)</h3>
            <ul>
              <li>Semen paling umum digunakan</li>
              <li>Cocok untuk konstruksi umum</li>
              <li>Kuat tekan tinggi</li>
              <li>Waktu setting normal</li>
            </ul>

            <h3>2. Semen Portland Pozzolan (PPC)</h3>
            <ul>
              <li>Mengandung pozzolan untuk durabilitas</li>
              <li>Tahan terhadap sulfat dan air laut</li>
              <li>Panas hidrasi rendah</li>
              <li>Cocok untuk konstruksi massal</li>
            </ul>

            <h3>3. Semen Portland Composite (PCC)</h3>
            <ul>
              <li>Campuran semen dengan material tambahan</li>
              <li>Ekonomis dan ramah lingkungan</li>
              <li>Kualitas setara OPC</li>
              <li>Workability yang baik</li>
            </ul>

            <ArticleImage
              src="/images/artikel/jenis-jenis-semen.jpg"
              alt="Jenis-jenis Semen"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>Jenis-Jenis Mortar</h2>

            <h3>1. Mortar Pasang Bata</h3>
            <ul>
              <li>Khusus untuk pemasangan bata/batako</li>
              <li>Daya rekat kuat</li>
              <li>Workability lama</li>
              <li>Anti retak dan shrinkage rendah</li>
            </ul>

            <h3>2. Mortar Keramik</h3>
            <ul>
              <li>Untuk pemasangan keramik dan granite</li>
              <li>Daya rekat superior</li>
              <li>Tahan air dan cuaca</li>
              <li>Tidak menodai keramik</li>
            </ul>

            <h3>3. Mortar Plester</h3>
            <ul>
              <li>Untuk finishing dinding</li>
              <li>Permukaan halus dan rata</li>
              <li>Mudah diaplikasikan</li>
              <li>Anti retak mikro</li>
            </ul>

            <h3>4. Mortar Repair</h3>
            <ul>
              <li>Untuk perbaikan beton dan struktur</li>
              <li>Kuat tekan tinggi</li>
              <li>Cepat mengeras</li>
              <li>Tahan cuaca ekstrem</li>
            </ul>

            <h2>Kapan Menggunakan Semen?</h2>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <h3 className="text-blue-800 font-semibold mb-2">
                🏗️ Gunakan Semen Untuk:
              </h3>
              <ul className="text-blue-700">
                <li>Pembuatan beton untuk pondasi, kolom, balok</li>
                <li>Plester dinding dengan campuran manual</li>
                <li>Proyek besar dengan volume tinggi</li>
                <li>Ketika Anda memiliki kendali penuh atas campuran</li>
                <li>Budget terbatas untuk material mentah</li>
              </ul>
            </div>

            <h2>Kapan Menggunakan Mortar?</h2>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
              <h3 className="text-green-800 font-semibold mb-2">
                🔧 Gunakan Mortar Untuk:
              </h3>
              <ul className="text-green-700">
                <li>Pemasangan bata, batako, atau paving</li>
                <li>Pemasangan keramik dan granite</li>
                <li>Perbaikan retakan atau lubang kecil</li>
                <li>Proyek DIY atau renovasi rumah</li>
                <li>Ketika membutuhkan hasil konsisten dan praktis</li>
              </ul>
            </div>

            <h2>Tips Memilih yang Tepat</h2>

            <h3>Pertimbangan Utama:</h3>
            <ol>
              <li>
                <strong>Jenis Pekerjaan:</strong> Struktural (semen) vs
                Non-struktural (mortar)
              </li>
              <li>
                <strong>Volume Pekerjaan:</strong> Besar (semen) vs Kecil-sedang
                (mortar)
              </li>
              <li>
                <strong>Keahlian:</strong> Berpengalaman (semen) vs Pemula
                (mortar)
              </li>
              <li>
                <strong>Budget:</strong> Terbatas (semen) vs Praktis (mortar)
              </li>
              <li>
                <strong>Waktu:</strong> Fleksibel (semen) vs Terbatas (mortar)
              </li>
            </ol>

            <ArticleImage
              src="/images/artikel/aplikasi-semen-mortar.jpg"
              alt="Aplikasi Semen dan Mortar"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h2>Kesalahan Umum yang Harus Dihindari</h2>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
              <h3 className="text-red-800 font-semibold mb-2">
                ❌ Hindari Kesalahan Ini:
              </h3>
              <ul className="text-red-700">
                <li>Menggunakan semen murni tanpa agregat untuk plester</li>
                <li>Mencampur mortar dengan proporsi yang salah</li>
                <li>Menyimpan semen/mortar di tempat lembab</li>
                <li>Menggunakan material yang sudah menggumpal</li>
                <li>Tidak mempertimbangkan kondisi cuaca saat aplikasi</li>
              </ul>
            </div>

            <h2>Penyimpanan yang Benar</h2>

            <h3>Semen:</h3>
            <ul>
              <li>Simpan di tempat kering dan tertutup</li>
              <li>Jauhkan dari lantai langsung</li>
              <li>Gunakan dalam 3 bulan untuk kualitas optimal</li>
              <li>Lindungi dari kelembaban</li>
            </ul>

            <h3>Mortar:</h3>
            <ul>
              <li>Simpan dalam kemasan tertutup rapat</li>
              <li>Hindari paparan sinar matahari langsung</li>
              <li>Perhatikan tanggal kedaluwarsa</li>
              <li>Jaga dari kontaminasi air</li>
            </ul>

            <div className="bg-gray-100 border-l-4 border-gray-400 p-4 my-6">
              <h3 className="text-gray-800 font-semibold mb-2">
                💡 Kesimpulan
              </h3>
              <p className="text-gray-700">
                Pilihan antara semen dan mortar tergantung pada jenis pekerjaan,
                volume, keahlian, dan budget. Semen lebih ekonomis untuk proyek
                besar dan struktural, sementara mortar lebih praktis untuk
                pekerjaan finishing dan renovasi. Memahami karakteristik
                masing-masing akan membantu Anda mendapatkan hasil optimal.
              </p>
            </div>

            <h2>Konsultasi Material Terbaik</h2>
            <p>
              Masih bingung memilih semen atau mortar yang tepat? Tim ahli Bahan
              Bangunan Store siap membantu menentukan material terbaik sesuai
              kebutuhan proyek Anda.
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
                untuk rekomendasi semen dan mortar berkualitas.
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
