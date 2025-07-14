import CategoryPage from "../../../components/CategoryPage";

const papanProducts = [
  {
    id: 1,
    name: "Papan Kayu Mahoni",
    description:
      "Papan kayu mahoni berkualitas tinggi dengan serat kayu yang indah dan tahan lama. Cocok untuk furniture, panel dinding, dan berbagai proyek woodworking.",
    features: [
      "Kayu mahoni asli berkualitas tinggi",
      "Tahan rayap dan kelembaban",
      "Serat kayu yang indah dan alami",
      "Mudah dibentuk dan dipoles",
      "Ukuran tersedia berbagai dimensi",
      "Finishing halus siap pakai",
    ],
    image: "/images/papan-mahoni.jpg",
    whatsapp_text:
      "Halo, saya tertarik dengan Papan Kayu Mahoni. Bisakah Anda memberikan informasi harga dan ketersediaan stok? Terima kasih.",
  },
  {
    id: 2,
    name: "Papan Kayu Jati",
    description:
      "Papan kayu jati premium dengan kualitas grade A. Memiliki ketahanan yang sangat baik terhadap cuaca dan serangga, ideal untuk furniture mewah.",
    features: [
      "Kayu jati grade A premium",
      "Tahan cuaca ekstrem",
      "Anti rayap alami",
      "Durabilitas tinggi",
      "Cocok untuk indoor/outdoor",
      "Nilai investasi tinggi",
    ],
    image: "/images/papan-jati.jpg",
    whatsapp_text:
      "Halo, saya ingin menanyakan tentang Papan Kayu Jati. Mohon info harga per meter dan spesifikasi yang tersedia.",
  },
  {
    id: 3,
    name: "Papan MDF (Medium Density Fiberboard)",
    description:
      "Papan MDF berkualitas tinggi dengan permukaan halus dan rata. Sangat cocok untuk furniture, lemari, dan aplikasi interior.",
    features: [
      "Permukaan sangat halus dan rata",
      "Tidak memiliki serat kayu yang terlihat",
      "Mudah dipotong dan dibentuk",
      "Harga ekonomis",
      "Tersedia berbagai ketebalan",
      "Cocok untuk cat dan finishing",
    ],
    image: "/images/papan-mdf.jpg",
    whatsapp_text:
      "Selamat siang, saya membutuhkan Papan MDF untuk proyek furniture. Bisa tolong infokan harga dan ukuran yang tersedia?",
  },
  {
    id: 4,
    name: "Papan Multiplek",
    description:
      "Papan multiplek (plywood) berkualitas baik dengan beberapa lapisan kayu yang direkatkan. Kuat dan tahan lama untuk berbagai aplikasi konstruksi.",
    features: [
      "Multiple layer kayu berkualitas",
      "Kekuatan struktural tinggi",
      "Tahan bengkok dan melengkung",
      "Tersedia berbagai grade",
      "Cocok untuk struktural dan furniture",
      "Harga kompetitif",
    ],
    image: "/images/papan-multiplek.jpg",
    whatsapp_text:
      "Halo, saya mencari Papan Multiplek untuk kebutuhan konstruksi. Mohon informasi harga dan spesifikasi produk.",
  },
  {
    id: 5,
    name: "Papan OSB (Oriented Strand Board)",
    description:
      "Papan OSB dengan struktur strand kayu yang berorientasi untuk kekuatan optimal. Ekonomis dan praktis untuk berbagai aplikasi konstruksi.",
    features: [
      "Struktur strand berorientasi",
      "Kekuatan struktural baik",
      "Harga ekonomis",
      "Mudah dipasang",
      "Tahan kelembaban sedang",
      "Cocok untuk subflooring dan wall sheathing",
    ],
    image: "/images/papan-osb.jpg",
    whatsapp_text:
      "Selamat pagi, saya tertarik dengan Papan OSB. Bisa minta info lengkap mengenai ukuran dan harga yang tersedia?",
  },
];

export default function PapanPage() {
  return (
    <CategoryPage
      categoryName="Papan"
      categoryIcon="🪵"
      categoryDescription="Berbagai jenis papan kayu dan panel wood berkualitas untuk konstruksi, furniture, dan kebutuhan bangunan. Dari papan solid hingga engineered wood dengan berbagai grade dan ukuran."
      products={papanProducts}
    />
  );
}

export const metadata = {
  title: "Papan - Bahan Bangunan Store",
  description:
    "Jual berbagai jenis papan kayu berkualitas: mahoni, jati, multiplek, MDF, OSB, blockboard dengan harga terbaik. Cocok untuk furniture dan konstruksi.",
  keywords:
    "papan kayu, multiplek, MDF, OSB, blockboard, papan mahoni, papan jati, bahan bangunan",
};
