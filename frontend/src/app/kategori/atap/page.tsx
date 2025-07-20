import { Metadata } from "next";
import CategoryPage from "../../../components/CategoryPage";

export const metadata: Metadata = {
  title: "Atap Spandek CBM - AZ 70 & AZ 100 - Bahan Bangunan Store",
  description:
    "Jual atap spandek CBM berkualitas tinggi berbagai ukuran: 0.30mm, 0.35mm, 0.40mm, 0.45mm. AZ 70 & AZ 100, Pesonadeck, dan berbagai warna pasir.",
  keywords: [
    "atap spandek CBM",
    "atap spandek AZ 70",
    "atap spandek AZ 100",
    "atap spandek pesonadeck",
    "atap spandek pasir",
    "spandek 0.30mm",
    "spandek 0.35mm",
    "spandek 0.40mm",
    "spandek 0.45mm",
    "atap galvanis",
    "atap metal",
  ],
  openGraph: {
    title: "Atap Spandek CBM Berkualitas Tinggi - Bahan Bangunan Store",
    description:
      "Jual atap spandek CBM AZ 70 & AZ 100 berbagai ukuran dan warna. Kualitas premium untuk atap rumah dan bangunan.",
  },
};

const atapProducts = [
  {
    id: 1,
    name: "Atap Spandek CBM 0.30mm X 1m X 3m – AZ 70",
    description:
      "Atap spandek CBM kualitas premium dengan ketebalan 0.30mm, lebar 1 meter, panjang 3 meter. Coating AZ 70 memberikan perlindungan maksimal terhadap korosi.",
    features: [
      "Ketebalan 0.30mm premium",
      "Dimensi 1m x 3m",
      "Coating AZ 70 anti korosi",
      "Material baja berkualitas tinggi",
      "Tahan cuaca ekstrem",
      "Mudah dalam pemasangan",
    ],
    image: "/images/Detail/Atap/Atap Spandek CBM 0.30mm X 1m X 4m - AZ 70.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Atap.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Atap Spandek CBM 0.30mm X 1m X 3m – AZ 70. Mohon info harga dan ketersediaan stok.",
  },
  {
    id: 2,
    name: "Atap Spandek CBM 0.30mm X 1m X 4m - AZ 70",
    description:
      "Atap spandek CBM dengan dimensi standar 4 meter, ketebalan 0.30mm dan coating AZ 70. Pilihan ideal untuk atap rumah tinggal dan bangunan komersial.",
    features: [
      "Ketebalan 0.30mm standar",
      "Dimensi 1m x 4m",
      "Coating AZ 70 berkualitas",
      "Efisien untuk pemasangan",
      "Daya tahan tinggi",
      "Harga kompetitif",
    ],
    image: "/images/Detail/Atap/Atap Spandek CBM 0.30mm X 1m X 4m - AZ 70.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Atap.webp",
    whatsapp_text:
      "Halo, saya ingin menanyakan Atap Spandek CBM 0.30mm X 1m X 4m - AZ 70. Bisa tolong kirim info harga per lembar?",
  },
  {
    id: 3,
    name: "Atap Spandek CBM 0.30mm X 1m X 5m - AZ 70",
    description:
      "Atap spandek CBM panjang 5 meter dengan ketebalan 0.30mm dan coating AZ 70. Mengurangi sambungan atap untuk hasil yang lebih rapi dan tahan bocor.",
    features: [
      "Ketebalan 0.30mm optimal",
      "Dimensi 1m x 5m",
      "Coating AZ 70 superior",
      "Mengurangi sambungan",
      "Instalasi lebih cepat",
      "Anti bocor maksimal",
    ],
    image: "/images/Detail/Atap/Atap Spandek CBM 0.30mm X 1m X 5m - AZ 70.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Atap.webp",
    whatsapp_text:
      "Selamat siang, saya membutuhkan Atap Spandek CBM 0.30mm X 1m X 5m - AZ 70. Mohon info harga dan minimum order.",
  },
  {
    id: 4,
    name: "Atap Spandek CBM 0.30mm X 1m X 6m - AZ 70",
    description:
      "Atap spandek CBM ukuran panjang 6 meter, ketebalan 0.30mm dengan coating AZ 70. Ideal untuk bangunan dengan bentang yang lebih lebar.",
    features: [
      "Ketebalan 0.30mm kuat",
      "Dimensi 1m x 6m",
      "Coating AZ 70 terbaik",
      "Untuk bentang lebar",
      "Sambungan minimal",
      "Efisiensi material",
    ],
    image: "/images/Detail/Atap/Atap Spandek CBM 0.30mm X 1m X 6m - AZ 70.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Atap.webp",
    whatsapp_text:
      "Halo, saya mencari Atap Spandek CBM 0.30mm X 1m X 6m - AZ 70 untuk proyek rumah. Mohon informasi harga terbaru.",
  },
  {
    id: 5,
    name: "Atap Spandek CBM 0.35mm X 1m X Per Meter - AZ 100",
    description:
      "Atap spandek CBM ketebalan premium 0.35mm dengan coating AZ 100. Dijual per meter untuk fleksibilitas ukuran sesuai kebutuhan proyek.",
    features: [
      "Ketebalan 0.35mm premium",
      "Dijual per meter",
      "Coating AZ 100 superior",
      "Fleksibilitas ukuran",
      "Kualitas extra heavy duty",
      "Tahan korosi maksimal",
    ],
    image:
      "/images/Detail/Atap/Atap Spandek CBM 0.35mm X 1m X Per Meter - AZ 100.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Atap.webp",
    whatsapp_text:
      "Selamat pagi, saya tertarik dengan Atap Spandek CBM 0.35mm X 1m X Per Meter - AZ 100. Bisa minta harga per meter?",
  },
  {
    id: 6,
    name: "Atap Spandek CBM 0.40mm X 1m X Per Meter - AZ 100",
    description:
      "Atap spandek CBM ketebalan heavy duty 0.40mm dengan coating AZ 100. Memberikan kekuatan struktural maksimal untuk bangunan industri.",
    features: [
      "Ketebalan 0.40mm heavy duty",
      "Dijual per meter",
      "Coating AZ 100 premium",
      "Kekuatan struktural tinggi",
      "Untuk bangunan industri",
      "Durabilitas maksimal",
    ],
    image:
      "/images/Detail/Atap/Atap Spandek CBM 0.40mm X 1m X Per Meter - AZ 100.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Atap.webp",
    whatsapp_text:
      "Halo, saya membutuhkan Atap Spandek CBM 0.40mm X 1m X Per Meter - AZ 100 untuk gudang. Mohon info harga per meter.",
  },
  {
    id: 7,
    name: "Atap Spandek CBM 0.45mm X 1m X Per Meter - AZ 100",
    description:
      "Atap spandek CBM ketebalan super heavy duty 0.45mm dengan coating AZ 100. Solusi terbaik untuk struktur yang membutuhkan kekuatan ekstra.",
    features: [
      "Ketebalan 0.45mm super heavy",
      "Dijual per meter",
      "Coating AZ 100 terbaik",
      "Kekuatan ekstra tinggi",
      "Untuk struktur berat",
      "Investasi jangka panjang",
    ],
    image:
      "/images/Detail/Atap/Atap Spandek CBM 0.45mm X 1m X Per Meter - AZ 100.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Atap.webp",
    whatsapp_text:
      "Selamat siang, saya ingin menanyakan Atap Spandek CBM 0.45mm X 1m X Per Meter - AZ 100. Bisa kirim spesifikasi lengkap?",
  },
  {
    id: 8,
    name: "Atap Spandek CBM Pesonadeck 0.30mm X 5.5m",
    description:
      "Atap spandek CBM Pesonadeck dengan profil khusus, ketebalan 0.30mm dan panjang 5.5 meter. Desain modern dengan kekuatan optimal.",
    features: [
      "Profil Pesonadeck modern",
      "Ketebalan 0.30mm",
      "Panjang 5.5 meter",
      "Desain aesthetic",
      "Kekuatan struktural baik",
      "Cocok untuk rumah modern",
    ],
    image: "/images/Detail/Atap/Atap Spandek CBM Pesonadeck 0.30mm X 5.5m.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Atap.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Atap Spandek CBM Pesonadeck 0.30mm X 5.5m. Mohon info harga dan ketersediaan stok.",
  },
  {
    id: 9,
    name: "Atap Spandek Pasir Blue Green",
    description:
      "Atap spandek dengan finishing pasir warna Blue Green yang elegan. Memberikan tampilan aesthetic dan perlindungan optimal untuk rumah modern.",
    features: [
      "Finishing pasir berkualitas",
      "Warna Blue Green elegan",
      "Tampilan aesthetic modern",
      "Tahan UV dan cuaca",
      "Anti pudar",
      "Cocok untuk rumah minimalis",
    ],
    image: "/images/Detail/Atap/Atap Spandek Pasir Blue Green.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Atap.webp",
    whatsapp_text:
      "Selamat pagi, saya mencari Atap Spandek Pasir Blue Green untuk rumah. Bisa tolong kirim info harga dan ukuran?",
  },
  {
    id: 10,
    name: "Atap Spandek Pasir Hitam",
    description:
      "Atap spandek dengan finishing pasir warna hitam yang elegan dan timeless. Pilihan classic yang cocok untuk berbagai desain arsitektur.",
    features: [
      "Finishing pasir premium",
      "Warna hitam classic",
      "Timeless design",
      "Tahan lama",
      "Anti luntur",
      "Cocok semua arsitektur",
    ],
    image: "/images/Detail/Atap/Atap Spandek Pasir Hitam.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Atap.webp",
    whatsapp_text:
      "Halo, saya ingin menanyakan Atap Spandek Pasir Hitam. Mohon info harga per lembar dan spesifikasi produk.",
  },
  {
    id: 11,
    name: "Atap Spandek Pasir Merah",
    description:
      "Atap spandek dengan finishing pasir warna merah yang hangat dan menarik. Memberikan kesan tradisional dengan kualitas modern.",
    features: [
      "Finishing pasir halus",
      "Warna merah hangat",
      "Kesan tradisional modern",
      "Kualitas coating tinggi",
      "Tahan weathering",
      "Pilihan warna menarik",
    ],
    image: "/images/Detail/Atap/Atap Spandek Pasir Merah_.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Atap.webp",
    whatsapp_text:
      "Selamat siang, saya tertarik dengan Atap Spandek Pasir Merah. Bisa minta info lengkap harga dan cara pemesanan?",
  },
];

export default function AtapPage() {
  return (
    <CategoryPage
      categoryName="Atap"
      categoryIcon="🏠"
      categoryDescription="Koleksi lengkap atap spandek CBM berkualitas tinggi dengan berbagai ketebalan dan ukuran. Coating AZ 70 & AZ 100 untuk perlindungan maksimal, serta pilihan warna pasir yang aesthetic."
      products={atapProducts}
    />
  );
}
