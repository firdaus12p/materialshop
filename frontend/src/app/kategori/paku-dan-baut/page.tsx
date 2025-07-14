import CategoryPage from "../../../components/CategoryPage";

const pakuDanBautProducts = [
  {
    id: 1,
    name: "Baut Roofing 12x80",
    description:
      "Baut roofing premium dengan kepala hex dan washer karet. Khusus untuk pemasangan atap metal dan seng gelombang yang tahan bocor.",
    features: [
      "Kepala hex anti slip",
      "Washer karet berkualitas tinggi",
      "Galvanis tahan karat",
      "Khusus untuk atap metal",
      "Seal sempurna anti bocor",
      "Mudah dalam pemasangan",
    ],
    image: "/images/baut-roofing.jpg",
    whatsapp_text:
      "Halo, saya membutuhkan Baut Roofing 12x80 untuk pemasangan atap. Mohon info harga per kotak dan minimal order.",
  },
  {
    id: 2,
    name: "Paku Beton",
    description:
      "Paku beton berkualitas tinggi untuk sambungan kayu ke beton atau tembok. Material baja karbon dengan coating anti karat.",
    features: [
      "Material baja karbon premium",
      "Coating anti karat",
      "Ujung lancip untuk penetrasi",
      "Berbagai ukuran tersedia",
      "Kekuatan cengkeram tinggi",
      "Cocok untuk sambungan permanen",
    ],
    image: "/images/paku-beton.jpg",
    whatsapp_text:
      "Selamat siang, saya tertarik dengan Paku Beton. Bisa tolong kirim daftar ukuran dan harga yang tersedia?",
  },
  {
    id: 3,
    name: "Sekrup Gypsum",
    description:
      "Sekrup khusus untuk pemasangan plafon gypsum ke rangka metal. Ulir halus dengan ujung self drilling untuk hasil maksimal.",
    features: [
      "Ulir halus khusus gypsum",
      "Ujung self drilling",
      "Kepala countersunk",
      "Phosphate coating",
      "Tidak merusak gypsum",
      "Pemasangan cepat dan presisi",
    ],
    image: "/images/sekrup-gypsum.jpg",
    whatsapp_text:
      "Halo, saya membutuhkan Sekrup Gypsum untuk proyek plafon. Mohon info harga dan ukuran yang tersedia.",
  },
  {
    id: 4,
    name: "Fischer (Anchor Bolt)",
    description:
      "Fischer anchor bolt berkualitas Eropa untuk sambungan berat ke dinding beton. Kekuatan cengkeram maksimal dan instalasi mudah.",
    features: [
      "Kualitas standar Eropa",
      "Cengkeram maksimal di beton",
      "Material stainless steel",
      "Cocok untuk beban berat",
      "Mudah dalam instalasi",
      "Berbagai ukuran tersedia",
    ],
    image: "/images/fischer-anchor.jpg",
    whatsapp_text:
      "Selamat pagi, saya mencari Fischer Anchor Bolt untuk sambungan struktur. Bisa minta info lengkap ukuran dan spek?",
  },
  {
    id: 5,
    name: "Mur Baut Galvanis",
    description:
      "Set mur baut galvanis lengkap dengan ring untuk berbagai keperluan konstruksi. Galvanis hot dip tahan karat.",
    features: [
      "Galvanis hot dip premium",
      "Set lengkap dengan ring",
      "Berbagai ukuran standar",
      "Ulir presisi tinggi",
      "Tahan karat dan korosi",
      "Aplikasi serbaguna",
    ],
    image: "/images/mur-baut-galvanis.jpg",
    whatsapp_text:
      "Halo, saya butuh Mur Baut Galvanis untuk konstruksi. Mohon informasi paket ukuran dan harga per set.",
  },
];

export default function PakuDanBautPage() {
  return (
    <CategoryPage
      categoryName="Paku & Baut"
      categoryIcon="🔩"
      categoryDescription="Koleksi lengkap hardware berkualitas untuk sambungan konstruksi. Dari paku, baut, sekrup, hingga aksesoris pendukung dengan berbagai ukuran dan material."
      products={pakuDanBautProducts}
    />
  );
}

export const metadata = {
  title: "Paku & Baut - Bahan Bangunan Store",
  description:
    "Jual berbagai jenis paku dan baut berkualitas: paku beton, baut L, sekrup gypsum, bracket dengan harga terbaik. Galvanis anti karat.",
  keywords:
    "paku beton, baut L, sekrup gypsum, bracket, paku kayu, baut hex, galvanis, hardware konstruksi",
};
