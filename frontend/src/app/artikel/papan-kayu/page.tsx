import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArticleImage } from "../../../components/ArticleImage";
import Link from "next/link";

export default function PapanKayuArtikel() {
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
            <span>Cara Memilih Papan Kayu Berkualitas untuk Furniture</span>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                Tips
              </span>
              <span>15 Juli 2025</span>
              <span>•</span>
              <span>5 menit baca</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cara Memilih Papan Kayu Berkualitas untuk Furniture
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Panduan lengkap memilih papan kayu yang tepat untuk proyek
              furniture Anda. Dari jenis kayu hingga tips perawatan.
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <ArticleImage
              src="/images/article-papan-kayu.jpg"
              alt="Berbagai jenis papan kayu untuk furniture"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Memilih papan kayu yang tepat adalah kunci utama dalam membuat
              furniture berkualitas dan tahan lama. Dengan beragam jenis kayu
              yang tersedia di pasaran, penting untuk memahami karakteristik
              masing-masing agar sesuai dengan kebutuhan proyek Anda.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Jenis-Jenis Kayu untuk Furniture
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Kayu Keras (Hardwood)
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                <strong>Jati:</strong> Tahan air, kuat, dan memiliki serat yang
                indah. Ideal untuk furniture outdoor dan indoor premium.
              </li>
              <li>
                <strong>Mahoni:</strong> Mudah dikerjakan, warna merah
                kecokelatan yang elegan, cocok untuk furniture klasik.
              </li>
              <li>
                <strong>Merbau:</strong> Sangat keras dan tahan cuaca, sempurna
                untuk furniture yang sering terpapar kelembaban.
              </li>
              <li>
                <strong>Sonokeling:</strong> Memiliki corak unik dan sangat
                keras, cocok untuk furniture mewah.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Kayu Lunak (Softwood)
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                <strong>Pinus:</strong> Ringan, mudah dikerjakan, cocok untuk
                furniture bergaya rustic atau Skandinavia.
              </li>
              <li>
                <strong>Cemara:</strong> Tahan rayap, aroma yang segar, ideal
                untuk lemari dan rak.
              </li>
              <li>
                <strong>Meranti:</strong> Ekonomis, mudah dicat, cocok untuk
                furniture dengan budget terbatas.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Cara Memilih Papan Kayu Berkualitas
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Periksa Kelembaban Kayu
            </h3>
            <p className="text-gray-700 mb-4">
              Kayu dengan kelembaban 8-12% adalah yang ideal untuk furniture
              indoor. Kayu yang terlalu basah akan menyusut dan retak setelah
              kering, sedangkan kayu yang terlalu kering mudah pecah.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Perhatikan Serat dan Tekstur
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Pilih kayu dengan serat yang lurus dan rapat</li>
              <li>Hindari kayu dengan mata kayu (knot) yang besar</li>
              <li>Pastikan permukaan halus dan tidak ada cacat</li>
              <li>Periksa ujung papan apakah ada retakan</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Ukuran dan Dimensi
            </h3>
            <p className="text-gray-700 mb-4">
              Pastikan ukuran papan sesuai dengan kebutuhan proyek.
              Pertimbangkan:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Ketebalan minimal 18mm untuk furniture structural</li>
              <li>Lebar yang konsisten tanpa perbedaan signifikan</li>
              <li>Panjang yang sesuai untuk meminimalkan sambungan</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Tips Penyimpanan dan Perawatan
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Penyimpanan yang Benar
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Simpan di tempat kering dengan ventilasi baik</li>
              <li>Susun dengan disekat (stiker) agar udara bisa mengalir</li>
              <li>Hindari kontak langsung dengan tanah</li>
              <li>Lindungi dari sinar matahari langsung</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Persiapan Sebelum Pengerjaan
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Aklimatisasi kayu selama 2-3 hari di ruang kerja</li>
              <li>Periksa ulang kelembaban dengan moisture meter</li>
              <li>Amplas permukaan untuk hasil finishing yang optimal</li>
              <li>Aplikasikan wood conditioner jika diperlukan</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Rekomendasi Berdasarkan Jenis Furniture
            </h2>

            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Furniture Indoor
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Meja & Kursi:</strong> Jati, Mahoni, atau Merbau
                </li>
                <li>
                  <strong>Lemari & Rak:</strong> Cemara, Meranti, atau Pinus
                </li>
                <li>
                  <strong>Tempat Tidur:</strong> Jati, Mahoni untuk frame utama
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Furniture Outdoor
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Gazebo & Pergola:</strong> Jati atau Merbau
                </li>
                <li>
                  <strong>Kursi Taman:</strong> Jati dengan treatment khusus
                </li>
                <li>
                  <strong>Decking:</strong> Merbau atau Bangkirai
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Kesimpulan
            </h2>
            <p className="text-gray-700 mb-6">
              Memilih papan kayu berkualitas membutuhkan perhatian detail pada
              jenis kayu, kelembaban, serat, dan cara penyimpanan. Investasi
              pada kayu berkualitas akan menghasilkan furniture yang tahan lama
              dan bernilai tinggi. Selalu konsultasikan dengan ahli kayu untuk
              proyek yang lebih kompleks.
            </p>

            {/* CTA */}
            <div className="bg-blue-600 text-white p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-3">
                Butuh Papan Kayu Berkualitas?
              </h3>
              <p className="mb-4">
                Kami menyediakan berbagai jenis papan kayu berkualitas tinggi
                untuk kebutuhan furniture Anda.
              </p>
              <a
                href="https://wa.me/6288242423267?text=Halo%2C%20saya%20tertarik%20dengan%20papan%20kayu%20untuk%20furniture.%20Mohon%20info%20jenis%20dan%20harga%20yang%20tersedia."
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
                Konsultasi via WhatsApp
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
    "Cara Memilih Papan Kayu Berkualitas untuk Furniture - Bahan Bangunan Store",
  description:
    "Panduan lengkap memilih papan kayu yang tepat untuk proyek furniture. Tips memilih jenis kayu, memeriksa kualitas, dan cara penyimpanan yang benar.",
  keywords:
    "papan kayu, furniture, jati, mahoni, merbau, tips memilih kayu, woodworking",
};
