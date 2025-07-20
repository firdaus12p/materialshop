import { Metadata } from "next";
import CategoryPage from "../../../components/CategoryPage";

export const metadata: Metadata = {
  title: "Toilet Portable & Bak Mandi Berkualitas - Bahan Bangunan Store",
  description:
    "Jual toilet portable FRP, bak mandi celup, bak mandi oval berbagai warna: biru, pink, putih. Perlengkapan sanitasi berkualitas tinggi dengan harga terbaik.",
  keywords: [
    "toilet portable frp",
    "bak mandi celup",
    "bak mandi oval",
    "bak mandi biru",
    "bak mandi pink",
    "bak mandi putih",
    "sanitasi portable",
    "perlengkapan kamar mandi",
    "toilet sementara",
    "bak mandi plastik",
    "sanitary ware",
  ],
  openGraph: {
    title: "Toilet Portable & Bak Mandi Terlengkap - Bahan Bangunan Store",
    description:
      "Jual toilet portable FRP dan bak mandi oval berbagai warna. Perlengkapan sanitasi berkualitas tinggi untuk semua kebutuhan.",
  },
};

const sanitaryProducts = [
  {
    id: 1,
    name: "Toilet Portable FRP Model Standar",
    description:
      "Toilet portable dari bahan FRP (Fiber Reinforced Plastic) model standar untuk kebutuhan sanitasi sementara. Cocok untuk proyek, event, atau area konstruksi.",
    features: [
      "Material FRP berkualitas tinggi",
      "Model standar praktis",
      "Tahan cuaca dan korosi",
      "Mudah dipindahkan",
      "Sistem ventilasi baik",
      "Pintu kunci keamanan",
      "Lantai anti slip",
      "Maintenance mudah",
    ],
    image: "/images/Detail/Sanitary/Toilet Portable FRP Model Standar.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Sanitary.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Toilet Portable FRP Model Standar. Mohon info harga sewa dan beli.",
  },
  {
    id: 2,
    name: "Bak Mandi Celup 45 x 45 x 60 Biru",
    description:
      "Bak mandi celup ukuran 45x45x60 cm warna biru untuk kebutuhan mandi tradisional. Material plastik berkualitas tinggi yang tahan lama dan mudah dibersihkan.",
    features: [
      "Dimensi 45x45x60 cm",
      "Warna biru menarik",
      "Material plastik premium",
      "Tahan lama dan kuat",
      "Mudah dibersihkan",
      "Anti slip di bagian bawah",
      "Cocok untuk segala usia",
      "Harga terjangkau",
    ],
    image: "/images/Detail/Sanitary/Bak Mandi Celup 45 x 45 x 60 Biru.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Sanitary.webp",
    whatsapp_text:
      "Selamat pagi, saya membutuhkan Bak Mandi Celup 45 x 45 x 60 Biru. Bisa minta info harga?",
  },
  {
    id: 3,
    name: "Bak Mandi Oval Biru",
    description:
      "Bak mandi oval warna biru dengan desain ergonomis yang nyaman digunakan. Material berkualitas tinggi dengan finishing yang halus dan tahan lama.",
    features: [
      "Desain oval ergonomis",
      "Warna biru yang menarik",
      "Material berkualitas tinggi",
      "Finishing halus",
      "Nyaman digunakan",
      "Kapasitas optimal",
      "Mudah perawatan",
      "Design modern",
    ],
    image: "/images/Detail/Sanitary/Bak Mandi Oval Biru.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Sanitary.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Bak Mandi Oval Biru. Mohon info harga dan ukuran yang tersedia.",
  },
  {
    id: 4,
    name: "Bak Mandi Oval Pink Tempat Sabun",
    description:
      "Bak mandi oval warna pink dilengkapi dengan tempat sabun yang praktis. Desain feminim dengan fitur tambahan untuk kemudahan penggunaan sehari-hari.",
    features: [
      "Desain oval modern",
      "Warna pink feminim",
      "Dilengkapi tempat sabun",
      "Fitur praktis",
      "Material tahan lama",
      "Mudah dibersihkan",
      "Cocok untuk anak",
      "Value added features",
    ],
    image: "/images/Detail/Sanitary/Bak Mandi Oval Pink Tempat Sabun.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Sanitary.webp",
    whatsapp_text:
      "Selamat siang, saya tertarik dengan Bak Mandi Oval Pink Tempat Sabun. Bisa kirim detail produk?",
  },
  {
    id: 5,
    name: "Bak Mandi Oval Pink",
    description:
      "Bak mandi oval warna pink dengan desain yang menarik dan nyaman. Cocok untuk kamar mandi anak atau dewasa yang menyukai warna pink yang ceria.",
    features: [
      "Desain oval klasik",
      "Warna pink ceria",
      "Material berkualitas",
      "Ukuran standar",
      "Mudah digunakan",
      "Tahan lama",
      "Cocok segala usia",
      "Harga kompetitif",
    ],
    image: "/images/Detail/Sanitary/Bak Mandi Oval Pink.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Sanitary.webp",
    whatsapp_text:
      "Halo, saya mencari Bak Mandi Oval Pink untuk kamar mandi. Mohon info harga dan cara pemesanan.",
  },
  {
    id: 6,
    name: "Bak Mandi Oval Putih",
    description:
      "Bak mandi oval warna putih dengan desain klasik yang timeless. Warna putih yang bersih dan elegan cocok untuk semua jenis dekorasi kamar mandi.",
    features: [
      "Desain oval timeless",
      "Warna putih bersih",
      "Klasik dan elegan",
      "Cocok semua dekorasi",
      "Material premium",
      "Mudah maintenance",
      "Tahan noda",
      "Pilihan warna netral",
    ],
    image: "/images/Detail/Sanitary/Bak Mandi Oval Putih.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Sanitary.webp",
    whatsapp_text:
      "Selamat pagi, saya tertarik dengan Bak Mandi Oval Putih. Bisa minta info harga dan spesifikasi?",
  },
];

export default function SanitaryPage() {
  return (
    <CategoryPage
      categoryName="Sanitary"
      categoryIcon="🚿"
      categoryDescription="Koleksi lengkap toilet portable FRP dan bak mandi oval berkualitas tinggi. Tersedia berbagai pilihan warna: biru, pink, putih dengan desain modern dan fungsional untuk semua kebutuhan sanitasi."
      products={sanitaryProducts}
    />
  );
}
