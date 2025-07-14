import CategoryPage from "../../../components/CategoryPage";

const atapProducts = [
  {
    id: 1,
    name: "Genteng Metal Berpasir",
    description:
      "Genteng metal berkualitas premium dengan lapisan pasir untuk ketahanan dan estetika yang superior. Tahan karat dan cuaca ekstrem.",
    features: [
      "Material metal berkualitas tinggi",
      "Lapisan pasir anti slip",
      "Tahan karat dan korosi",
      "Insulasi panas yang baik",
      "Pemasangan mudah dan cepat",
      "Garansi 10 tahun",
    ],
    image: "/images/genteng-metal.jpg",
    whatsapp_text:
      "Halo, saya tertarik dengan Genteng Metal Berpasir. Mohon info harga dan spesifikasi lengkap produk. Terima kasih.",
  },
  {
    id: 2,
    name: "Genteng Keramik Premium",
    description:
      "Genteng keramik berkualitas tinggi dengan berbagai pilihan warna dan model. Tahan lama dan memberikan kesan elegan pada bangunan.",
    features: [
      "Bahan keramik berkualitas premium",
      "Tahan cuaca dan perubahan suhu",
      "Berbagai pilihan warna",
      "Tidak mudah pecah",
      "Sistem interlock yang kuat",
      "Maintenance minimal",
    ],
    image: "/images/genteng-keramik.jpg",
    whatsapp_text:
      "Selamat siang, saya ingin menanyakan tentang Genteng Keramik Premium. Bisa tolong kirim katalog warna dan harga?",
  },
  {
    id: 3,
    name: "Genteng Beton",
    description:
      "Genteng beton dengan kekuatan struktural tinggi dan daya tahan luar biasa. Cocok untuk bangunan dengan beban atap yang berat.",
    features: [
      "Material beton berkualitas tinggi",
      "Kekuatan struktural maksimal",
      "Tahan terhadap angin kencang",
      "Kedap air sempurna",
      "Harga ekonomis",
      "Mudah dalam perawatan",
    ],
    image: "/images/genteng-beton.jpg",
    whatsapp_text:
      "Halo, saya membutuhkan Genteng Beton untuk proyek rumah. Mohon informasi harga per meter persegi dan cara pemesanan.",
  },
  {
    id: 4,
    name: "Seng Gelombang",
    description:
      "Seng gelombang berkualitas dengan profil yang kuat dan tahan lama. Solusi ekonomis untuk atap gudang, workshop, dan bangunan komersial.",
    features: [
      "Galvanis berkualitas tinggi",
      "Profil gelombang yang kuat",
      "Tahan karat dan korosi",
      "Pemasangan cepat dan mudah",
      "Harga sangat ekonomis",
      "Tersedia berbagai ukuran",
    ],
    image: "/images/seng-gelombang.jpg",
    whatsapp_text:
      "Selamat pagi, saya mencari Seng Gelombang untuk atap gudang. Bisa minta info harga dan ukuran yang tersedia?",
  },
];

export default function AtapPage() {
  return (
    <CategoryPage
      categoryName="Atap"
      categoryIcon="🏠"
      categoryDescription="Berbagai jenis material atap berkualitas untuk melindungi bangunan Anda. Dari genteng metal, keramik, hingga sistem atap modern dengan daya tahan maksimal."
      products={atapProducts}
    />
  );
}

export const metadata = {
  title: "Atap - Bahan Bangunan Store",
  description:
    "Jual berbagai jenis atap berkualitas: genteng metal, keramik, asbes gelombang, spandek dengan harga terbaik. Tahan cuaca dan anti bocor.",
  keywords:
    "genteng metal, genteng keramik, asbes gelombang, spandek, atap galvalum, atap bitumen, material atap",
};
