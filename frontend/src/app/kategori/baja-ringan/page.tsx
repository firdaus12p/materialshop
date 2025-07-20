import { Metadata } from "next";
import CategoryPage from "../../../components/CategoryPage";

export const metadata: Metadata = {
  title: "Baja Ringan & Canal C Berkualitas Tinggi - Bahan Bangunan Store",
  description:
    "Jual baja ringan reng CBM K-STEEL, canal C 75, CNP 123 black steel, hollow galvanis berbagai ukuran. Konstruksi baja ringan terpercaya dengan harga terbaik.",
  keywords: [
    "baja ringan reng cbm",
    "baja ringan k-steel",
    "canal c 75",
    "cnp 123 black steel",
    "cnp 100 black steel",
    "hollow galvanis",
    "kanal c canal 75",
    "wall angle baja",
    "antik truss eco",
    "antik truss super",
    "baja ringan konstruksi",
    "rangka atap baja ringan",
  ],
  openGraph: {
    title: "Baja Ringan & Canal C Terlengkap - Bahan Bangunan Store",
    description:
      "Jual baja ringan reng CBM K-STEEL, canal C, CNP black steel, hollow, dan wall angle berkualitas tinggi untuk konstruksi modern.",
  },
};

const bajaRinganProducts = [
  {
    id: 1,
    name: "Baja Ringan Reng CBM (K-STEEL) 0.40mm Besar (Standar)",
    description:
      "Baja ringan reng CBM K-STEEL dengan ketebalan 0.40mm ukuran besar standar. Material berkualitas tinggi untuk struktur rangka atap yang kuat dan tahan lama.",
    features: [
      "Ketebalan 0.40mm standar",
      "Material K-STEEL CBM",
      "Ukuran besar (standar)",
      "Galvanis anti karat",
      "Kekuatan struktural optimal",
      "Sesuai standar SNI",
      "Mudah instalasi",
      "Tahan cuaca ekstrem",
    ],
    image: "/images/Detail/Baja Ringan/Baja Ringan Reng CBM (K-STEEL) 0.40mm Besar (Standar).webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Baja Ringan.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Baja Ringan Reng CBM (K-STEEL) 0.40mm Besar (Standar). Mohon info harga per batang dan ketersediaan stok.",
  },
  {
    id: 2,
    name: "Canal C 75x 0.65X6 MTR Antik Truss (ECO)",
    description:
      "Canal C 75x0.65x6 meter dari Antik Truss tipe ECO. Profil canal C berkualitas untuk rangka atap dan konstruksi bangunan dengan efisiensi biaya terbaik.",
    features: [
      "Dimensi 75x0.65x6 meter",
      "Tipe ECO ekonomis",
      "Brand Antik Truss",
      "Material baja berkualitas",
      "Finishing galvanis",
      "Aplikasi serbaguna",
      "Harga kompetitif",
      "Mudah dipasang",
    ],
    image: "/images/Detail/Baja Ringan/Canal C 75x 0.65X6 MTR Antik Truss (ECO).webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Baja Ringan.webp",
    whatsapp_text:
      "Selamat pagi, saya membutuhkan Canal C 75x 0.65X6 MTR Antik Truss (ECO). Bisa minta info harga dan cara pemesanan?",
  },
  {
    id: 3,
    name: "Canal C Cnp 123 Black Steel Purlin",
    description:
      "Canal C CNP 123 Black Steel khusus untuk purlin. Profil struktural berkualitas tinggi dengan finishing black steel untuk aplikasi konstruksi berat.",
    features: [
      "Profil CNP 123",
      "Black steel premium",
      "Khusus untuk purlin",
      "Kekuatan struktural tinggi",
      "Tahan beban berat",
      "Finishing black steel",
      "Presisi dimensi",
      "Untuk konstruksi besar",
    ],
    image: "/images/Detail/Baja Ringan/Canal C Cnp 123 Black Steel Purlin.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Baja Ringan.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Canal C Cnp 123 Black Steel Purlin. Mohon info harga dan spesifikasi teknis lengkap.",
  },
  {
    id: 4,
    name: "CNP 100 Black Steel",
    description:
      "CNP 100 Black Steel untuk aplikasi konstruksi struktural. Material berkualitas tinggi dengan profil CNP 100 yang memberikan kekuatan optimal untuk berbagai kebutuhan konstruksi.",
    features: [
      "Profil CNP 100",
      "Material black steel",
      "Kekuatan struktural tinggi",
      "Aplikasi konstruksi luas",
      "Dimensi presisi",
      "Finishing berkualitas",
      "Tahan beban berat",
      "Sesuai standar industri",
    ],
    image: "/images/Detail/Baja Ringan/CNP 100 Black Steel.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Baja Ringan.webp",
    whatsapp_text:
      "Selamat siang, saya membutuhkan CNP 100 Black Steel untuk proyek konstruksi. Bisa kirim penawaran harga?",
  },
  {
    id: 5,
    name: "Hollow",
    description:
      "Hollow galvanis berkualitas tinggi untuk berbagai aplikasi konstruksi. Tersedia berbagai ukuran dengan finishing galvanis yang sempurna untuk ketahanan maksimal.",
    features: [
      "Material galvanis premium",
      "Berbagai ukuran tersedia",
      "Finishing galvanis sempurna",
      "Kekuatan struktural optimal",
      "Anti karat dan korosi",
      "Aplikasi serbaguna",
      "Mudah dipasang",
      "Harga kompetitif",
    ],
    image: "/images/Detail/Baja Ringan/Hollow.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Baja Ringan.webp",
    whatsapp_text:
      "Halo, saya mencari Hollow galvanis untuk konstruksi. Mohon info ukuran yang tersedia dan harga per batang.",
  },
  {
    id: 6,
    name: "Kanal C-Canal 75 X 0.65 X 6 MTR Antik Truss (Super)",
    description:
      "Kanal C-Canal 75x0.65x6 meter dari Antik Truss tipe Super. Profil canal C premium dengan kualitas terbaik untuk konstruksi yang membutuhkan kekuatan ekstra.",
    features: [
      "Dimensi 75x0.65x6 meter",
      "Tipe Super premium",
      "Brand Antik Truss",
      "Kualitas terbaik",
      "Galvanis super grade",
      "Kekuatan ekstra",
      "Presisi tinggi",
      "Untuk konstruksi premium",
    ],
    image: "/images/Detail/Baja Ringan/Kanal C-Canal 75 X 0.65 X 6 MTR Antik Truss (Super).webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Baja Ringan.webp",
    whatsapp_text:
      "Selamat pagi, saya tertarik dengan Kanal C-Canal 75 X 0.65 X 6 MTR Antik Truss (Super). Mohon info harga dan keunggulan produk.",
  },
  {
    id: 7,
    name: "Kanal C-Canal 75x0.75x6 MTR Antik Truss (ECO)",
    description:
      "Kanal C-Canal 75x0.75x6 meter dari Antik Truss tipe ECO. Profil canal C dengan ketebalan 0.75mm yang memberikan keseimbangan optimal antara kualitas dan harga.",
    features: [
      "Dimensi 75x0.75x6 meter",
      "Ketebalan 0.75mm",
      "Tipe ECO ekonomis",
      "Brand Antik Truss",
      "Galvanis berkualitas",
      "Kekuatan memadai",
      "Efisiensi biaya",
      "Instalasi mudah",
    ],
    image: "/images/Detail/Baja Ringan/Kanal C-Canal 75x0.75x6 MTR Antik Truss (ECO).webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Baja Ringan.webp",
    whatsapp_text:
      "Halo, saya membutuhkan Kanal C-Canal 75x0.75x6 MTR Antik Truss (ECO). Bisa minta info harga dan minimum order?",
  },
  {
    id: 8,
    name: "Wall Angle",
    description:
      "Wall Angle baja galvanis untuk aplikasi dinding dan struktur pendukung. Profil L berkualitas tinggi dengan finishing galvanis untuk ketahanan maksimal terhadap korosi.",
    features: [
      "Profil L (angle)",
      "Material galvanis",
      "Untuk aplikasi dinding",
      "Struktur pendukung",
      "Anti karat",
      "Berbagai ukuran",
      "Mudah instalasi",
      "Harga terjangkau",
    ],
    image: "/images/Detail/Baja Ringan/Wall Angle.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Baja Ringan.webp",
    whatsapp_text:
      "Selamat siang, saya tertarik dengan Wall Angle untuk struktur dinding. Mohon info ukuran dan harga yang tersedia.",
  },
];

export default function BajaRinganPage() {
  return (
    <CategoryPage
      categoryName="Baja Ringan"
      categoryIcon="🏗️"
      categoryDescription="Koleksi lengkap baja ringan dan canal C berkualitas tinggi. Dari reng CBM K-STEEL, canal C Antik Truss ECO & Super, CNP black steel, hollow galvanis, hingga wall angle untuk semua kebutuhan konstruksi modern."
      products={bajaRinganProducts}
    />
  );
}
