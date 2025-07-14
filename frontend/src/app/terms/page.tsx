import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-12">
          <div className="container-custom px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-800 mb-8">
                Syarat dan Ketentuan
              </h1>

              <div className="prose prose-lg text-gray-600 space-y-6">
                <p className="text-sm text-gray-500">
                  Terakhir diperbarui: 14 Juli 2025
                </p>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    1. Penerimaan Syarat
                  </h2>
                  <p>
                    Dengan mengakses dan menggunakan website Bahan Bangunan
                    Store, Anda setuju untuk terikat dengan syarat dan ketentuan
                    ini. Jika Anda tidak setuju, harap tidak menggunakan layanan
                    kami.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    2. Definisi Layanan
                  </h2>
                  <p>
                    Bahan Bangunan Store adalah platform e-commerce yang
                    menyediakan informasi dan penjualan material bangunan. Kami
                    berperan sebagai penghubung antara customer dan supplier
                    material bangunan.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    3. Proses Pemesanan
                  </h2>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Pemesanan dilakukan melalui WhatsApp atau kontak yang
                      tersedia
                    </li>
                    <li>Konfirmasi pesanan akan diberikan oleh tim kami</li>
                    <li>
                      Harga dan ketersediaan stok dapat berubah sewaktu-waktu
                    </li>
                    <li>
                      Pesanan baru diproses setelah pembayaran dikonfirmasi
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    4. Pembayaran
                  </h2>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Pembayaran dapat dilakukan melalui transfer bank atau
                      e-wallet
                    </li>
                    <li>
                      Untuk pembelian dalam jumlah besar tersedia sistem cicilan
                    </li>
                    <li>
                      Pembayaran harus dilakukan sesuai dengan instruksi yang
                      diberikan
                    </li>
                    <li>Bukti pembayaran harus dikirimkan untuk konfirmasi</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    5. Pengiriman
                  </h2>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Kami melayani pengiriman ke seluruh Indonesia</li>
                    <li>
                      Waktu pengiriman tergantung lokasi dan ketersediaan barang
                    </li>
                    <li>Biaya pengiriman ditanggung oleh pembeli</li>
                    <li>
                      Risiko kerusakan selama pengiriman ditanggung oleh
                      ekspedisi
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    6. Garansi dan Return
                  </h2>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Semua produk bergaransi sesuai standar pabrik</li>
                    <li>
                      Komplain harus dilaporkan maksimal 3x24 jam setelah barang
                      diterima
                    </li>
                    <li>
                      Return hanya diterima untuk barang yang cacat produksi
                    </li>
                    <li>
                      Biaya return untuk kesalahan customer ditanggung oleh
                      customer
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    7. Kualitas Produk
                  </h2>
                  <p>
                    Kami berkomitmen menyediakan produk berkualitas tinggi.
                    Namun, variasi alami pada material bangunan seperti kayu
                    dapat terjadi dan bukan merupakan cacat produk.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    8. Batasan Tanggung Jawab
                  </h2>
                  <p>Bahan Bangunan Store tidak bertanggung jawab atas:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Kerugian akibat penggunaan produk yang tidak sesuai
                      spesifikasi
                    </li>
                    <li>Kerusakan akibat kesalahan instalasi</li>
                    <li>Force majeure atau keadaan di luar kendali kami</li>
                    <li>Keterlambatan pengiriman akibat faktor eksternal</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    9. Kekayaan Intelektual
                  </h2>
                  <p>
                    Seluruh konten website ini termasuk teks, gambar, logo, dan
                    desain adalah milik Bahan Bangunan Store dan dilindungi hak
                    cipta. Penggunaan tanpa izin dilarang.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    10. Perubahan Syarat
                  </h2>
                  <p>
                    Kami berhak mengubah syarat dan ketentuan ini kapan saja.
                    Perubahan akan diinformasikan melalui website dan berlaku
                    setelah dipublikasikan.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    11. Hukum yang Berlaku
                  </h2>
                  <p>
                    Syarat dan ketentuan ini tunduk pada hukum Republik
                    Indonesia. Setiap sengketa akan diselesaikan melalui
                    musyawarah atau melalui pengadilan yang berwenang.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    12. Kontak
                  </h2>
                  <p>
                    Untuk pertanyaan tentang syarat dan ketentuan ini, silakan
                    hubungi:
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
  title: "Syarat dan Ketentuan - Bahan Bangunan Store",
  description:
    "Syarat dan ketentuan penggunaan layanan Bahan Bangunan Store termasuk kebijakan pemesanan, pembayaran, dan pengiriman.",
};
