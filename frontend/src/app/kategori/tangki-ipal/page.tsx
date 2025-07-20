import { Metadata } from "next";
import CategoryPage from "../../../components/CategoryPage";

export const metadata: Metadata = {
  title: "Tangki IPAL Biofilter & Komunal - Bahan Bangunan Store",
  description:
    "Jual tangki IPAL biofilter anaerob aerob FRP, tangki IPAL komunal berbagai kapasitas: 600L, 800L, 3M3, 5M3. Sistem pengolahan limbah modern dan ramah lingkungan.",
  keywords: [
    "tangki ipal biofilter",
    "tangki ipal anaerob aerob",
    "tangki ipal frp",
    "tangki ipal komunal",
    "tangki ipal 600 liter",
    "tangki ipal 800 liter",
    "tangki ipal 3m3",
    "tangki ipal 5m3",
    "sistem pengolahan limbah",
    "wastewater treatment",
    "biofilter septic tank",
    "ipal domestik",
  ],
  openGraph: {
    title: "Tangki IPAL Biofilter & Komunal Terlengkap - Bahan Bangunan Store",
    description:
      "Jual tangki IPAL biofilter anaerob aerob FRP dan IPAL komunal berbagai kapasitas. Sistem pengolahan limbah modern, efisien, dan ramah lingkungan.",
  },
};

const tangkiIpalProducts = [
  {
    id: 1,
    name: "Tangki Biofilter Anaerob Aerob FRP KAP 5 M3",
    description:
      "Tangki IPAL biofilter anaerob aerob dari bahan FRP (Fiber Reinforced Plastic) dengan kapasitas 5 m3. Sistem pengolahan limbah terdepan dengan teknologi biofilter untuk hasil optimal.",
    features: [
      "Kapasitas 5 m3 (5000 liter)",
      "Sistem biofilter anaerob aerob",
      "Material FRP berkualitas tinggi",
      "Efisiensi pengolahan tinggi",
      "Ramah lingkungan",
      "Tahan korosi dan awet",
      "Sistem otomatis",
      "Cocok untuk komunal besar",
    ],
    image:
      "/images/Detail/Tangki Ipal/Tangki Biofilter Anaerob Aerob FRP KAP 5 M3.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Tangki Ipal.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Tangki Biofilter Anaerob Aerob FRP KAP 5 M3. Mohon info harga dan spesifikasi lengkap.",
  },
  {
    id: 2,
    name: "Tangki Ipal 600 Liter",
    description:
      "Tangki IPAL kapasitas 600 liter untuk pengolahan limbah domestik rumah tangga kecil. Dilengkapi sistem biofilter yang efektif untuk mengolah air limbah menjadi air bersih.",
    features: [
      "Kapasitas 600 liter",
      "Sistem biofilter terintegrasi",
      "Material fiberglass berkualitas",
      "Compact dan space-saving",
      "Mudah instalasi",
      "Maintenance minimal",
      "Cocok untuk 2-4 orang",
      "Ramah lingkungan",
    ],
    image: "/images/Detail/Tangki Ipal/Tangki Ipal 600 Liter.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Tangki Ipal.webp",
    whatsapp_text:
      "Selamat pagi, saya membutuhkan Tangki Ipal 600 Liter untuk rumah. Bisa minta info harga dan cara pemasangan?",
  },
  {
    id: 3,
    name: "Tangki Ipal 800 Liter",
    description:
      "Tangki IPAL kapasitas 800 liter untuk kebutuhan rumah tangga menengah. Sistem pengolahan limbah yang efisien dengan teknologi biofilter modern.",
    features: [
      "Kapasitas 800 liter",
      "Teknologi biofilter modern",
      "Material tahan lama",
      "Proses pengolahan optimal",
      "Hemat energi",
      "Anti bocor",
      "Cocok untuk 4-6 orang",
      "Hasil air jernih",
    ],
    image: "/images/Detail/Tangki Ipal/Tangki Ipal 800 Liter.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Tangki Ipal.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Tangki Ipal 800 Liter. Mohon info harga dan ketersediaan stok.",
  },
  {
    id: 4,
    name: "Tangki Ipal Komunal UK 3 M3",
    description:
      "Tangki IPAL komunal ukuran 3 m3 untuk melayani beberapa rumah atau bangunan komersial kecil. Sistem pengolahan limbah skala komunal yang efisien dan ekonomis.",
    features: [
      "Kapasitas 3 m3 (3000 liter)",
      "Untuk penggunaan komunal",
      "Sistem otomatis",
      "Efisiensi tinggi",
      "Maintenance mudah",
      "Konstruksi kokoh",
      "Cocok untuk 15-20 orang",
      "Operasional ekonomis",
    ],
    image: "/images/Detail/Tangki Ipal/Tangki Ipal Komunal UK 3 M3.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Tangki Ipal.webp",
    whatsapp_text:
      "Selamat siang, saya membutuhkan Tangki Ipal Komunal UK 3 M3 untuk perumahan. Bisa kirim penawaran harga?",
  },
  {
    id: 5,
    name: "Tangki Ipal Komunal UK 5 M3",
    description:
      "Tangki IPAL komunal ukuran 5 m3 untuk melayani komunitas besar atau komplek perumahan. Sistem pengolahan limbah skala besar dengan teknologi terdepan.",
    features: [
      "Kapasitas 5 m3 (5000 liter)",
      "Untuk komunitas besar",
      "Teknologi terdepan",
      "Operasi otomatis",
      "Monitoring system",
      "Daya tahan maksimal",
      "Cocok untuk 25-35 orang",
      "ROI yang baik",
    ],
    image: "/images/Detail/Tangki Ipal/Tangki Ipal Komunal UK 5 M3.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Tangki Ipal.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Tangki Ipal Komunal UK 5 M3 untuk komplek. Mohon info harga dan spesifikasi teknis.",
  },
];

export default function TangkiIpalPage() {
  return (
    <CategoryPage
      categoryName="Tangki IPAL"
      categoryIcon="🏭"
      categoryDescription="Koleksi lengkap tangki IPAL biofilter anaerob aerob dan komunal berbagai kapasitas. Sistem pengolahan limbah modern dengan teknologi terdepan untuk rumah tangga hingga komunitas besar."
      products={tangkiIpalProducts}
    />
  );
}
