import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-12">
          <div className="container-custom px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-800 mb-8">
                Kebijakan Privasi
              </h1>

              <div className="prose prose-lg text-gray-600 space-y-6">
                <p className="text-sm text-gray-500">
                  Terakhir diperbarui: 14 Juli 2025
                </p>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    1. Pendahuluan
                  </h2>
                  <p>
                    Bahan Bangunan Store menghargai privasi Anda dan berkomitmen
                    untuk melindungi data pribadi Anda. Kebijakan Privasi ini
                    menjelaskan bagaimana kami mengumpulkan, menggunakan, dan
                    melindungi informasi Anda.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    2. Informasi yang Kami Kumpulkan
                  </h2>
                  <p>Kami dapat mengumpulkan informasi berikut:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Nama dan informasi kontak (email, nomor telepon)</li>
                    <li>Alamat pengiriman untuk keperluan pengiriman produk</li>
                    <li>Informasi pemesanan dan preferensi produk</li>
                    <li>Data komunikasi melalui WhatsApp atau email</li>
                    <li>Informasi teknis seperti alamat IP dan data browser</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    3. Penggunaan Informasi
                  </h2>
                  <p>Kami menggunakan informasi Anda untuk:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Memproses dan mengirim pesanan Anda</li>
                    <li>Memberikan layanan customer service</li>
                    <li>
                      Mengirimkan informasi produk dan penawaran (dengan
                      persetujuan)
                    </li>
                    <li>Meningkatkan layanan dan pengalaman website</li>
                    <li>Mematuhi kewajiban hukum</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    4. Perlindungan Data
                  </h2>
                  <p>
                    Kami menerapkan langkah-langkah keamanan yang sesuai untuk
                    melindungi data pribadi Anda dari akses yang tidak sah,
                    penggunaan yang salah, atau pengungkapan. Data disimpan di
                    server yang aman dan hanya dapat diakses oleh personel yang
                    berwenang.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    5. Berbagi Informasi
                  </h2>
                  <p>
                    Kami tidak akan menjual, menyewakan, atau membagikan
                    informasi pribadi Anda kepada pihak ketiga tanpa persetujuan
                    Anda, kecuali dalam situasi berikut:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Untuk memenuhi pesanan (seperti berbagi alamat dengan
                      kurir)
                    </li>
                    <li>Untuk mematuhi hukum atau proses hukum</li>
                    <li>
                      Untuk melindungi hak, properti, atau keselamatan kami
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    6. Cookie dan Teknologi Serupa
                  </h2>
                  <p>
                    Website kami menggunakan cookie untuk meningkatkan
                    pengalaman browsing Anda. Anda dapat mengatur browser Anda
                    untuk menolak cookie, namun ini mungkin mempengaruhi
                    fungsionalitas website.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    7. Hak Anda
                  </h2>
                  <p>Anda memiliki hak untuk:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Mengakses data pribadi yang kami simpan tentang Anda
                    </li>
                    <li>Meminta koreksi data yang tidak akurat</li>
                    <li>Meminta penghapusan data pribadi Anda</li>
                    <li>Menolak atau membatasi pemrosesan data Anda</li>
                    <li>Menarik persetujuan kapan saja</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    8. Perubahan Kebijakan
                  </h2>
                  <p>
                    Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke
                    waktu. Perubahan akan diposting di halaman ini dengan
                    tanggal pembaruan terbaru.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    9. Hubungi Kami
                  </h2>
                  <p>
                    Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini
                    atau ingin menggunakan hak Anda, silakan hubungi kami:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>
                      <strong>WhatsApp:</strong> 088242423267
                    </p>
                    <p>
                      <strong>Email:</strong> info@bahanbangunanstore.com
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: "Kebijakan Privasi - Bahan Bangunan Store",
  description:
    "Kebijakan privasi Bahan Bangunan Store menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.",
};
