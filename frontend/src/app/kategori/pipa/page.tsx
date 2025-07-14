import CategoryPage from "../../../components/CategoryPage";

const pipaProducts = [
  {
    id: 1,
    name: "Pipa PVC 4 inch",
    description:
      "Pipa PVC berkualitas tinggi diameter 4 inch untuk instalasi air bersih dan drainase. Material virgin PVC dengan ketahanan maksimal.",
    features: [
      "Material virgin PVC berkualitas",
      "Diameter 4 inch presisi",
      "Tahan tekanan tinggi",
      "Tidak mudah pecah atau retak",
      "Mudah dalam instalasi",
      "Tersedia panjang 4 meter",
    ],
    image: "/images/pipa-pvc-4inch.jpg",
    whatsapp_text:
      "Halo, saya membutuhkan Pipa PVC 4 inch untuk instalasi drainase. Mohon info harga per batang dan ketersediaan stok.",
  },
  {
    id: 2,
    name: "Pipa PPR",
    description:
      "Pipa PPR (Polypropylene Random) untuk instalasi air panas dan dingin. Teknologi modern dengan daya tahan jangka panjang.",
    features: [
      "Material PPR berkualitas tinggi",
      "Tahan air panas hingga 95°C",
      "Tidak berkarat dan tidak beracun",
      "Koneksi fusion welding",
      "Garansi jangka panjang",
      "Berbagai diameter tersedia",
    ],
    image: "/images/pipa-ppr.jpg",
    whatsapp_text:
      "Selamat siang, saya tertarik dengan Pipa PPR untuk instalasi air panas. Bisa tolong kirim katalog ukuran dan harga?",
  },
  {
    id: 3,
    name: "Pipa Galvanis",
    description:
      "Pipa galvanis berkualitas tinggi untuk instalasi air dan gas. Coating galvanis memberikan perlindungan optimal terhadap korosi.",
    features: [
      "Material galvanis premium",
      "Tahan karat dan korosi",
      "Kekuatan struktural tinggi",
      "Cocok untuk air dan gas",
      "Ulir presisi untuk sambungan",
      "Standar SNI dan internasional",
    ],
    image: "/images/pipa-galvanis.jpg",
    whatsapp_text:
      "Halo, saya mencari Pipa Galvanis untuk instalasi air. Mohon informasi ukuran dan harga yang tersedia.",
  },
  {
    id: 4,
    name: "Fitting PVC Lengkap",
    description:
      "Set fitting PVC lengkap untuk sambungan pipa. Termasuk elbow, tee, reducer, dan socket dengan kualitas presisi tinggi.",
    features: [
      "Set fitting lengkap",
      "Material PVC berkualitas",
      "Presisi tinggi untuk sambungan",
      "Berbagai jenis dan ukuran",
      "Mudah dalam pemasangan",
      "Harga paket ekonomis",
    ],
    image: "/images/fitting-pvc.jpg",
    whatsapp_text:
      "Selamat pagi, saya butuh Fitting PVC Lengkap untuk proyek instalasi. Bisa minta info paket dan harga?",
  },
];

export default function PipaPage() {
  return (
    <CategoryPage
      categoryName="Pipa"
      categoryIcon="🚰"
      categoryDescription="Koleksi lengkap pipa dan fitting berkualitas untuk instalasi air, drainase, dan sanitasi. Tersedia berbagai jenis, ukuran, dan spesifikasi sesuai kebutuhan."
      products={pipaProducts}
    />
  );
}

export const metadata = {
  title: "Pipa - Bahan Bangunan Store",
  description:
    "Jual berbagai jenis pipa berkualitas: PVC, galvanis, PPR, HDPE dengan fitting lengkap. Untuk instalasi air bersih, drainase, dan sanitasi.",
  keywords:
    "pipa PVC, pipa galvanis, pipa PPR, pipa HDPE, fitting pipa, instalasi air, drainase, sanitasi",
};
