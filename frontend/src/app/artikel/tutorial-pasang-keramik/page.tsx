import { Metadata } from "next";
import { ArticleImage } from "../../../components/ArticleImage";

export const metadata: Metadata = {
  title: "Tutorial Pasang Keramik Lantai dan Dinding - Panduan Lengkap",
  description:
    "Panduan lengkap cara memasang keramik lantai dan dinding dengan benar. Tips, teknik, dan alat yang dibutuhkan untuk hasil maksimal.",
  keywords: [
    "tutorial pasang keramik",
    "cara memasang keramik",
    "pasang keramik lantai",
    "pasang keramik dinding",
    "teknik pemasangan keramik",
    "tips pasang keramik",
    "tutorial keramik",
    "panduan keramik",
  ],
  openGraph: {
    title: "Tutorial Lengkap Pasang Keramik Lantai dan Dinding",
    description:
      "Pelajari cara memasang keramik dengan benar. Panduan step-by-step dari persiapan hingga finishing untuk hasil professional.",
  },
};

export default function TutorialPasangKeramikPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <span>📅</span>
              <time dateTime="2024-01-15">15 Januari 2024</time>
              <span>•</span>
              <span>⏱️ 8 menit baca</span>
              <span>•</span>
              <span>🏷️ Tutorial</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Tutorial Lengkap Pasang Keramik Lantai dan Dinding
            </h1>
            <p className="text-lg text-gray-600">
              Panduan step-by-step memasang keramik dengan hasil professional.
              Dari persiapan alat hingga finishing touches.
            </p>
          </div>

          {/* Content */}
          <div className="p-6 prose prose-lg max-w-none">
            <ArticleImage
              src="/images/artikel/tutorial-pasang-keramik-hero.jpg"
              alt="Tutorial Pasang Keramik"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />

            <h2>Alat dan Bahan yang Dibutuhkan</h2>

            <h3>Alat:</h3>
            <ul>
              <li>Mesin potong keramik / tile cutter</li>
              <li>Kape/spatula bergigi</li>
              <li>Kape polos</li>
              <li>Penggaris dan meteran</li>
              <li>Benang/tali untuk panduan</li>
              <li>Waterpass/level</li>
              <li>Palu karet</li>
              <li>Spons dan kain lap</li>
              <li>Ember pencampur</li>
              <li>Cross spacer (jarak keramik)</li>
            </ul>

            <h3>Bahan:</h3>
            <ul>
              <li>Keramik sesuai kebutuhan (+ 10% cadangan)</li>
              <li>Semen perekat keramik / tile adhesive</li>
              <li>Grout/nat keramik</li>
              <li>Air bersih</li>
              <li>Additive jika diperlukan</li>
            </ul>

            <h2>Langkah-Langkah Pemasangan</h2>

            <h3>1. Persiapan Permukaan</h3>
            <p>
              Pastikan permukaan lantai atau dinding bersih, rata, dan kering.
              Perbaiki retakan atau lubang yang ada. Untuk dinding, pastikan
              sudah diplester dengan rata dan halus.
            </p>

            <h3>2. Perencanaan Layout</h3>
            <p>
              Ukur area yang akan dipasang keramik. Buat layout dengan
              menentukan titik tengah ruangan sebagai acuan. Hindari potongan
              keramik yang terlalu kecil di area yang mencolok.
            </p>

            <ArticleImage
              src="/images/artikel/layout-keramik.jpg"
              alt="Layout Pemasangan Keramik"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h3>3. Pemasangan Keramik Lantai</h3>
            <ol>
              <li>
                <strong>Campurkan perekat:</strong> Siapkan semen perekat sesuai
                takaran pada kemasan. Aduk hingga tekstur pasta yang homogen.
              </li>
              <li>
                <strong>Aplikasi perekat:</strong> Oleskan perekat dengan kape
                bergigi pada area seluas 1m² dengan ketebalan merata.
              </li>
              <li>
                <strong>Pasang keramik:</strong> Tempel keramik dari tengah ke
                tepi. Tekan dan putar sedikit agar perekat menyebar rata.
              </li>
              <li>
                <strong>Cek level:</strong> Gunakan waterpass untuk memastikan
                permukaan rata. Ketuk perlahan dengan palu karet jika perlu.
              </li>
              <li>
                <strong>Pasang spacer:</strong> Letakkan cross spacer di setiap
                sudut untuk jarak yang konsisten.
              </li>
            </ol>

            <h3>4. Pemasangan Keramik Dinding</h3>
            <ol>
              <li>
                <strong>Tentukan garis acuan:</strong> Buat garis horizontal
                sebagai panduan baris pertama keramik.
              </li>
              <li>
                <strong>Mulai dari bawah:</strong> Pasang keramik dari baris
                bawah ke atas untuk menghindari keramik jatuh.
              </li>
              <li>
                <strong>Aplikasi perekat:</strong> Oleskan perekat pada dinding
                dan belakang keramik (double coating) untuk daya rekat maksimal.
              </li>
              <li>
                <strong>Tekan dan ratakan:</strong> Tempel keramik sambil
                ditekan dan digeser sedikit untuk distribusi perekat yang
                merata.
              </li>
            </ol>

            <ArticleImage
              src="/images/artikel/pasang-keramik-dinding.jpg"
              alt="Pemasangan Keramik Dinding"
              className="w-full h-48 object-cover rounded-lg my-6"
            />

            <h3>5. Pemotongan Keramik</h3>
            <p>Untuk keramik yang perlu dipotong:</p>
            <ul>
              <li>Ukur dengan teliti area yang perlu dipotong</li>
              <li>Tandai pada keramik dengan pensil</li>
              <li>Gunakan tile cutter atau mesin potong dengan hati-hati</li>
              <li>Haluskan tepi potongan jika perlu</li>
            </ul>

            <h3>6. Pengisian Nat (Grouting)</h3>
            <p>Setelah perekat mengering (24 jam), lakukan pengisian nat:</p>
            <ol>
              <li>Bersihkan sisa perekat dan lepas spacer</li>
              <li>Campurkan grout sesuai petunjuk</li>
              <li>Isi celah dengan kape diagonal</li>
              <li>Bersihkan kelebihan grout dengan spons lembab</li>
              <li>Haluskan nat dengan jari atau alat khusus</li>
            </ol>

            <h2>Tips dan Trik Professional</h2>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <h3 className="text-blue-800 font-semibold mb-2">
                💡 Tips Penting:
              </h3>
              <ul className="text-blue-700">
                <li>Selalu gunakan keramik grade A untuk hasil terbaik</li>
                <li>Periksa kerataan setiap 3-4 keramik yang dipasang</li>
                <li>
                  Jangan memasang keramik saat cuaca terlalu panas atau dingin
                </li>
                <li>
                  Gunakan spacer yang sesuai: 2mm untuk keramik kecil, 3-5mm
                  untuk besar
                </li>
                <li>Bersihkan kelebihan perekat segera sebelum mengering</li>
              </ul>
            </div>

            <h2>Perawatan Setelah Pemasangan</h2>
            <ul>
              <li>Hindari beban berat selama 24-48 jam</li>
              <li>Jangan basahi area yang baru dipasang selama 24 jam</li>
              <li>Bersihkan dengan kain lembab setelah 48 jam</li>
              <li>Aplikasi sealant pada nat jika diperlukan</li>
            </ul>

            <h2>Kesalahan yang Harus Dihindari</h2>
            <ul>
              <li>Tidak memeriksa kerataan permukaan</li>
              <li>Menggunakan perekat yang sudah kental/mengering</li>
              <li>Tidak menggunakan spacer</li>
              <li>Terburu-buru dalam proses pengeringan</li>
              <li>Tidak membersihkan sisa perekat</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
              <h3 className="text-green-800 font-semibold mb-2">
                ✅ Kesimpulan
              </h3>
              <p className="text-green-700">
                Pemasangan keramik yang baik membutuhkan persiapan matang, alat
                yang tepat, dan kesabaran. Dengan mengikuti tutorial ini
                step-by-step, Anda bisa mendapatkan hasil pemasangan keramik
                yang professional dan tahan lama.
              </p>
            </div>

            <h2>Butuh Bantuan Professional?</h2>
            <p>
              Untuk hasil terbaik atau proyek besar, konsultasikan dengan ahli.
              Tim Bahan Bangunan Store siap membantu dengan saran material dan
              teknik pemasangan yang tepat.
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
                untuk konsultasi material keramik terbaik.
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
