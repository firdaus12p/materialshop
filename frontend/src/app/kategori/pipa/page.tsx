import { Metadata } from "next";
import CategoryPage from "../../../components/CategoryPage";

export const metadata: Metadata = {
  title: "Pipa PVC & HDPE Berkualitas Tinggi - Bahan Bangunan Store",
  description:
    "Jual pipa PVC dan HDPE berkualitas tinggi berbagai merek: Rajalon, Indalon, Ratulon, Two Horse. Sistem perpipaan terpercaya untuk instalasi air bersih dan drainase.",
  keywords: [
    "pipa pvc rajalon",
    "pipa pvc indalon",
    "pipa pvc ratulon",
    "pipa pvc two horse",
    "pipa hdpe rajalon",
    "pipa pvc berkualitas",
    "sistem perpipaan",
    "instalasi air bersih",
    "pipa drainase",
    "pipa air bersih",
    "supplier pipa pvc",
  ],
  openGraph: {
    title: "Pipa PVC & HDPE Terlengkap - Bahan Bangunan Store",
    description:
      "Jual pipa PVC dan HDPE berkualitas tinggi merek Rajalon, Indalon, Ratulon, Two Horse. Sistem perpipaan terpercaya untuk semua kebutuhan instalasi.",
  },
};

const pipaProducts = [
  {
    id: 1,
    name: "Pipa HDPE Rajalon",
    description:
      "Pipa HDPE (High Density Polyethylene) merek Rajalon berkualitas tinggi untuk instalasi air bertekanan tinggi. Material HDPE memberikan fleksibilitas dan ketahanan yang superior.",
    features: [
      "Material HDPE berkualitas tinggi",
      "Merek Rajalon terpercaya",
      "Tahan tekanan tinggi",
      "Fleksibilitas tinggi",
      "Tahan korosi dan kimia",
      "Umur pakai panjang",
      "Ramah lingkungan",
      "Berbagai diameter tersedia",
    ],
    image: "/images/Detail/Pipa/Detail-Pipa-HDPE-Rajalon.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Pipa.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Pipa HDPE Rajalon. Mohon info harga per meter dan ukuran yang tersedia.",
  },
  {
    id: 2,
    name: "Pipa PVC Indalon",
    description:
      "Pipa PVC merek Indalon untuk instalasi air bersih dan drainase. Kualitas premium dengan standar SNI untuk keandalan sistem perpipaan jangka panjang.",
    features: [
      "Material PVC virgin berkualitas",
      "Merek Indalon terpercaya",
      "Standar SNI bersertifikat",
      "Tahan tekanan optimal",
      "Mudah instalasi",
      "Anti bocor",
      "Harga kompetitif",
      "Support teknis lengkap",
    ],
    image: "/images/Detail/Pipa/Detail-Pipa-PVC-Indalon.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Pipa.webp",
    whatsapp_text:
      "Selamat pagi, saya membutuhkan Pipa PVC Indalon untuk rumah. Bisa minta info harga dan cara pemasangan?",
  },
  {
    id: 3,
    name: "Pipa PVC Rajalon",
    description:
      "Pipa PVC merek Rajalon dengan kualitas premium untuk berbagai aplikasi perpipaan. Teknologi modern dengan daya tahan maksimal untuk instalasi air bersih dan limbah.",
    features: [
      "Material PVC premium",
      "Merek Rajalon berkualitas",
      "Teknologi modern",
      "Multi aplikasi",
      "Tahan UV dan cuaca",
      "Koneksi yang kuat",
      "Maintenance minimal",
      "Garansi kualitas",
    ],
    image: "/images/Detail/Pipa/Detail-Pipa-PVC-Rajalon.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Pipa.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Pipa PVC Rajalon. Mohon info harga dan spesifikasi lengkap.",
  },
  {
    id: 4,
    name: "Pipa PVC Ratulon",
    description:
      "Pipa PVC merek Ratulon untuk sistem perpipaan yang handal dan efisien. Kualitas terjamin dengan harga terjangkau untuk semua kebutuhan instalasi rumah tangga dan komersial.",
    features: [
      "Material PVC berkualitas",
      "Merek Ratulon terpercaya",
      "Harga terjangkau",
      "Instalasi mudah",
      "Daya tahan tinggi",
      "Berbagai ukuran",
      "Cocok rumah dan komersial",
      "Service after sales",
    ],
    image: "/images/Detail/Pipa/Detail-Pipa-PVC-Ratulon.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Pipa.webp",
    whatsapp_text:
      "Selamat siang, saya membutuhkan Pipa PVC Ratulon untuk renovasi. Bisa kirim penawaran harga?",
  },
  {
    id: 5,
    name: "Pipa PVC Two Horse",
    description:
      "Pipa PVC merek Two Horse dengan standar kualitas internasional. Solusi perpipaan modern dengan teknologi terdepan untuk instalasi air bersih yang aman dan tahan lama.",
    features: [
      "Standar kualitas internasional",
      "Merek Two Horse",
      "Teknologi terdepan",
      "Air bersih yang aman",
      "Sertifikasi lengkap",
      "Presisi tinggi",
      "Instalasi profesional",
      "Value for money",
    ],
    image: "/images/Detail/Pipa/Detail-Pipa-PVC-Two-Horse.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Pipa.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Pipa PVC Two Horse. Mohon info harga dan keunggulan produk.",
  },
];

export default function PipaPage() {
  return (
    <CategoryPage
      categoryName="Pipa"
      categoryIcon="🚰"
      categoryDescription="Koleksi lengkap pipa PVC dan HDPE berkualitas tinggi dari merek terpercaya: Rajalon, Indalon, Ratulon, dan Two Horse. Sistem perpipaan modern untuk instalasi air bersih, drainase, dan berbagai kebutuhan konstruksi."
      products={pipaProducts}
    />
  );
}
