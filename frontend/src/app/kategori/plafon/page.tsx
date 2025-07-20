import { Metadata } from "next";
import CategoryPage from "../../../components/CategoryPage";

export const metadata: Metadata = {
  title: "Plafon Gypsum & PVC Berkualitas - Bahan Bangunan Store",
  description:
    "Jual plafon berkualitas tinggi: Cornice Gipsum A Plus, Gypsum Jayaboard, Plafon GRC, Shunda PVC Ceiling berbagai ukuran untuk interior modern.",
  keywords: [
    "plafon gypsum",
    "plafon PVC",
    "cornice gipsum",
    "gypsum jayaboard",
    "plafon GRC",
    "shunda PVC ceiling",
    "plafon 8mm",
    "ceiling material",
    "interior plafon",
    "bahan plafon berkualitas",
  ],
  openGraph: {
    title: "Plafon Gypsum & PVC Berkualitas Tinggi - Bahan Bangunan Store",
    description:
      "Jual plafon gypsum, PVC, dan GRC berkualitas tinggi. Shunda PVC Ceiling, Cornice Gipsum A Plus untuk interior modern.",
  },
};

const plafonProducts = [
  {
    id: 1,
    name: "Cornice Gipsum A Plus",
    description:
      "Cornice Gipsum A Plus berkualitas premium untuk dekorasi plafon dan dinding. Material gipsum halus dengan finishing yang elegant untuk memberikan sentuhan mewah pada interior.",
    features: [
      "Material gipsum premium",
      "Design elegant dan mewah",
      "Permukaan halus dan rata",
      "Mudah dipasang dan dicat",
      "Tahan lama dan awet",
      "Cocok untuk berbagai gaya interior",
    ],
    image: "/images/Detail/Plafon/Cornice Gipsum A Plus.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Plafon.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Cornice Gipsum A Plus. Mohon info harga dan ketersediaan stok.",
  },
  {
    id: 2,
    name: "Gypsum Jayaboard 1200 X 2400 X 9mm",
    description:
      "Gypsum Jayaboard ukuran 1200 X 2400 X 9mm untuk plafon dan partisi. Kualitas premium dengan permukaan halus dan ketebalan standar 9mm yang memberikan kekuatan optimal.",
    features: [
      "Dimensi 1200 X 2400 X 9mm",
      "Material gypsum berkualitas tinggi",
      "Permukaan halus siap finishing",
      "Anti rayap dan jamur",
      "Ringan dan mudah dipasang",
      "Standar industri konstruksi",
    ],
    image: "/images/Detail/Plafon/Gypsum Jayaboard 1200 X 2400 X 9mm.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Plafon.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Gypsum Jayaboard 1200 X 2400 X 9mm. Mohon info harga per lembar dan ketersediaan stok.",
  },
  {
    id: 3,
    name: "Plafon GRC",
    description:
      "Plafon GRC (Glass Reinforced Concrete) untuk aplikasi interior dan eksterior. Material inovatif yang menggabungkan kekuatan beton dengan fleksibilitas serat kaca.",
    features: [
      "Material GRC berkualitas premium",
      "Tahan cuaca ekstrem",
      "Ringan namun sangat kuat",
      "Design variatif dan modern",
      "Cocok interior dan eksterior",
      "Tahan api dan anti rayap",
    ],
    image: "/images/Detail/Plafon/Plafon GRC.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Plafon.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Plafon GRC. Mohon info harga, ukuran yang tersedia dan spesifikasi lengkap.",
  },
  {
    id: 4,
    name: "Shunda Plafon PVC Ceiling 8mm X 30cm X 3m",
    description:
      "Shunda Plafon PVC Ceiling ukuran 8mm X 30cm X 3m untuk plafon modern. Material PVC berkualitas tinggi yang tahan air dan mudah perawatan.",
    features: [
      "Dimensi 8mm X 30cm X 3m",
      "Material PVC berkualitas tinggi",
      "100% anti air dan kelembaban",
      "Mudah dibersihkan",
      "Instalasi cepat dan praktis",
      "Tersedia berbagai motif",
    ],
    image:
      "/images/Detail/Plafon/Shunda Plafon PVC Ceiling 8mm X 30cm X 3m.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Plafon.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Shunda Plafon PVC Ceiling 8mm X 30cm X 3m. Mohon info harga per batang dan motif yang tersedia.",
  },
  {
    id: 5,
    name: "Shunda Plafon PVC Ceiling 8mm X 30cm X 4m",
    description:
      "Shunda Plafon PVC Ceiling ukuran 8mm X 30cm X 4m untuk plafon modern dengan panjang standar. Mengurangi sambungan untuk hasil yang lebih rapi dan professional.",
    features: [
      "Dimensi 8mm X 30cm X 4m",
      "Material PVC premium quality",
      "Anti air dan anti jamur",
      "Sambungan lebih sedikit",
      "Pemasangan lebih efisien",
      "Finishing yang rapi",
    ],
    image:
      "/images/Detail/Plafon/Shunda Plafon PVC Ceiling 8mm X 30cm X 4m.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Plafon.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Shunda Plafon PVC Ceiling 8mm X 30cm X 4m. Mohon info harga dan ketersediaan stok.",
  },
  {
    id: 6,
    name: "Shunda Plafon PVC Ceiling 8mm X 30cm X 5m",
    description:
      "Shunda Plafon PVC Ceiling ukuran 8mm X 30cm X 5m untuk plafon modern dengan panjang maksimal. Ideal untuk ruangan besar dengan sambungan minimal.",
    features: [
      "Dimensi 8mm X 30cm X 5m",
      "Material PVC tahan lama",
      "Panjang maksimal 5 meter",
      "Sambungan minimal",
      "Cocok untuk ruangan besar",
      "Hasil finishing sempurna",
    ],
    image:
      "/images/Detail/Plafon/Shunda Plafon PVC Ceiling 8mm X 30cm X 5m.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Plafon.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Shunda Plafon PVC Ceiling 8mm X 30cm X 5m. Mohon info harga per batang dan minimum order.",
  },
];

export default function PlafonPage() {
  return (
    <CategoryPage
      categoryName="Plafon"
      categoryIcon="📋"
      categoryDescription="Koleksi lengkap material plafon berkualitas tinggi untuk berbagai kebutuhan interior. Dari gypsum premium, PVC anti air, hingga GRC dengan berbagai ukuran dan finishing modern."
      products={plafonProducts}
    />
  );
}
