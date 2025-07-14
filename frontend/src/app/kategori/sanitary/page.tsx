import CategoryPage from "../../../components/CategoryPage";

const sanitaryProducts = [
  {
    id: 1,
    name: "Closet Duduk TOTO",
    description:
      "Closet duduk TOTO dengan teknologi modern dan desain elegan. Dilengkapi dual flush untuk efisiensi air dan kemudahan perawatan.",
    features: [
      "Brand TOTO terpercaya",
      "Teknologi dual flush",
      "Desain modern dan elegan",
      "Mudah dibersihkan",
      "Hemat air dan ramah lingkungan",
      "Garansi resmi",
    ],
    image: "/images/closet-toto.jpg",
    whatsapp_text:
      "Halo, saya tertarik dengan Closet Duduk TOTO. Mohon info harga dan tipe yang tersedia. Terima kasih.",
  },
  {
    id: 2,
    name: "Wastafel Standing",
    description:
      "Wastafel standing dengan pedestal kokoh dan design minimalis. Material keramik berkualitas tinggi dengan finishing yang sempurna.",
    features: [
      "Material keramik premium",
      "Design minimalis modern",
      "Pedestal kokoh dan stabil",
      "Finishing glossy tahan noda",
      "Mudah dalam pemasangan",
      "Berbagai ukuran tersedia",
    ],
    image: "/images/wastafel-standing.jpg",
    whatsapp_text:
      "Selamat siang, saya membutuhkan Wastafel Standing untuk kamar mandi. Bisa tolong kirim pilihan model dan harga?",
  },
  {
    id: 3,
    name: "Shower Set Minimalis",
    description:
      "Set shower minimalis lengkap dengan hand shower, shower head, dan mixer. Material stainless steel berkualitas tinggi.",
    features: [
      "Set shower lengkap",
      "Material stainless steel",
      "Design minimalis modern",
      "Tekanan air optimal",
      "Mudah dalam perawatan",
      "Tahan karat dan korosi",
    ],
    image: "/images/shower-set.jpg",
    whatsapp_text:
      "Halo, saya mencari Shower Set Minimalis. Mohon informasi paket lengkap dan harga yang tersedia.",
  },
  {
    id: 4,
    name: "Kran Air Mixer",
    description:
      "Kran air mixer berkualitas tinggi untuk wastafel dan kitchen sink. Kontrol suhu yang presisi dengan desain yang ergonomis.",
    features: [
      "Mixer hot & cold water",
      "Kontrol suhu presisi",
      "Design ergonomis",
      "Material brass berkualitas",
      "Chrome finishing",
      "Awet dan tahan lama",
    ],
    image: "/images/kran-mixer.jpg",
    whatsapp_text:
      "Selamat pagi, saya butuh Kran Air Mixer untuk wastafel. Bisa minta info model dan harga yang tersedia?",
  },
];

export default function SanitaryPage() {
  return (
    <CategoryPage
      categoryName="Sanitary"
      categoryIcon="🚿"
      categoryDescription="Koleksi lengkap perlengkapan sanitari berkualitas untuk kamar mandi dan dapur. Dari closet, wastafel, hingga aksesoris dengan desain modern dan klasik."
      products={sanitaryProducts}
    />
  );
}

export const metadata = {
  title: "Sanitary - Bahan Bangunan Store",
  description:
    "Jual berbagai produk sanitari berkualitas: closet duduk/jongkok, wastafel, shower, kran dengan harga terbaik. Untuk kamar mandi dan dapur modern.",
  keywords:
    "closet duduk, closet jongkok, wastafel, shower, kran, sanitary ware, kamar mandi, aksesoris sanitasi",
};
