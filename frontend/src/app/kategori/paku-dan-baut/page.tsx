import { Metadata } from "next";
import CategoryPage from "../../../components/CategoryPage";

export const metadata: Metadata = {
  title:
    "Paku dan Baut Berkualitas - Dynabolt, Paku Besi, Paku Beton - Bahan Bangunan Store",
  description:
    "Jual paku dan baut berkualitas tinggi: Dynabolt berbagai ukuran, Paku Besi, Paku Beton, Ruping Atap Spandek, Screw Calciboard untuk kebutuhan konstruksi.",
  keywords: [
    "paku dan baut",
    "dynabolt 10mm",
    "paku besi",
    "paku beton",
    "ruping atap spandek",
    "screw calciboard",
    "paku 4cm",
    "paku 5cm",
    "paku 7cm",
    "paku 10cm",
    "paku 12cm",
    "baut konstruksi",
  ],
  openGraph: {
    title: "Paku dan Baut Berkualitas Tinggi - Bahan Bangunan Store",
    description:
      "Jual paku dan baut lengkap: Dynabolt, Paku Besi, Paku Beton, Ruping Atap Spandek untuk kebutuhan konstruksi berkualitas.",
  },
};

const pakuDanBautProducts = [
  {
    id: 1,
    name: "Dynabolt 10mm X 4.8cm",
    description:
      "Dynabolt 10mm dengan panjang 4.8cm untuk sambungan struktural yang kuat. Baut ekspansi berkualitas tinggi dengan daya cengkeram maksimal pada beton dan tembok.",
    features: [
      "Diameter 10mm premium",
      "Panjang 4.8cm optimal",
      "Baut ekspansi berkualitas tinggi",
      "Daya cengkeram maksimal",
      "Material galvanis anti karat",
      "Cocok untuk sambungan struktural",
    ],
    image: "/images/Detail/Paku & Baut/Dynabolt 10mm X 4.8cm.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Paku dan Baut.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Dynabolt 10mm X 4.8cm. Mohon info harga per pcs dan ketersediaan stok.",
  },
  {
    id: 2,
    name: "Dynabolt 10mm X 6.0cm",
    description:
      "Dynabolt 10mm dengan panjang 6.0cm untuk aplikasi sambungan yang membutuhkan penetrasi lebih dalam. Ideal untuk struktur beton tebal dan beban berat.",
    features: [
      "Diameter 10mm standar",
      "Panjang 6.0cm untuk penetrasi dalam",
      "Untuk struktur beton tebal",
      "Tahan beban berat",
      "Galvanis coating superior",
      "Instalasi mudah dan cepat",
    ],
    image: "/images/Detail/Paku & Baut/Dynabolt 10mm X 6.0cm.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Paku dan Baut.webp",
    whatsapp_text:
      "Halo, saya membutuhkan Dynabolt 10mm X 6.0cm untuk proyek konstruksi. Mohon info harga dan minimum order.",
  },
  {
    id: 3,
    name: "Dynabolt 10mm X 8.0cm",
    description:
      "Dynabolt 10mm dengan panjang 8.0cm untuk sambungan struktural heavy duty. Cocok untuk aplikasi industri dan konstruksi yang membutuhkan kekuatan ekstra.",
    features: [
      "Diameter 10mm heavy duty",
      "Panjang 8.0cm maksimal",
      "Untuk aplikasi industri",
      "Kekuatan struktural tinggi",
      "Coating anti korosi premium",
      "Daya tahan jangka panjang",
    ],
    image: "/images/Detail/Paku & Baut/Dynabolt 10mm X 8.0cm.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Paku dan Baut.webp",
    whatsapp_text:
      "Selamat pagi, saya tertarik dengan Dynabolt 10mm X 8.0cm. Bisa minta info harga per box dan spesifikasi lengkap?",
  },
  {
    id: 4,
    name: "Paku Besi 4cm",
    description:
      "Paku besi berkualitas tinggi ukuran 4cm untuk kebutuhan konstruksi ringan. Material baja karbon dengan coating galvanis untuk ketahanan optimal.",
    features: [
      "Panjang 4cm praktis",
      "Material baja karbon berkualitas",
      "Coating galvanis anti karat",
      "Untuk konstruksi ringan",
      "Ujung lancip penetrasi baik",
      "Harga ekonomis",
    ],
    image: "/images/Detail/Paku & Baut/Paku Besi 4cm.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Paku dan Baut.webp",
    whatsapp_text:
      "Halo, saya membutuhkan Paku Besi 4cm untuk proyek. Mohon info harga per kg dan ketersediaan stok.",
  },
  {
    id: 5,
    name: "Paku Besi 5cm",
    description:
      "Paku besi ukuran 5cm untuk sambungan kayu dan material ringan. Kualitas premium dengan daya cengkeram yang kuat dan tahan lama.",
    features: [
      "Panjang 5cm standar",
      "Daya cengkeram kuat",
      "Material baja premium",
      "Galvanis coating tahan karat",
      "Cocok untuk sambungan kayu",
      "Mudah dalam pemasangan",
    ],
    image: "/images/Detail/Paku & Baut/Paku Besi 5cm.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Paku dan Baut.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Paku Besi 5cm. Bisa tolong kirim info harga per kg dan cara pemesanan?",
  },
  {
    id: 6,
    name: "Paku Besi 7cm",
    description:
      "Paku besi ukuran 7cm untuk konstruksi dengan penetrasi sedang. Ideal untuk sambungan papan kayu tebal dan material konstruksi menengah.",
    features: [
      "Panjang 7cm ideal",
      "Penetrasi sedang optimal",
      "Untuk papan kayu tebal",
      "Material baja berkualitas tinggi",
      "Anti karat galvanis",
      "Kekuatan cengkeram tinggi",
    ],
    image: "/images/Detail/Paku & Baut/Paku Besi 7cm.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Paku dan Baut.webp",
    whatsapp_text:
      "Selamat siang, saya membutuhkan Paku Besi 7cm untuk konstruksi. Mohon info harga dan minimum order.",
  },
  {
    id: 7,
    name: "Paku Besi 10cm",
    description:
      "Paku besi ukuran 10cm untuk konstruksi berat dan sambungan struktural. Memberikan penetrasi dalam dengan kekuatan cengkeram maksimal.",
    features: [
      "Panjang 10cm untuk konstruksi berat",
      "Penetrasi dalam maksimal",
      "Sambungan struktural kuat",
      "Material baja carbon steel",
      "Galvanis coating premium",
      "Tahan beban tinggi",
    ],
    image: "/images/Detail/Paku & Baut/Paku Besi 10cm.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Paku dan Baut.webp",
    whatsapp_text:
      "Halo, saya mencari Paku Besi 10cm untuk proyek bangunan. Mohon informasi harga per kg terbaru.",
  },
  {
    id: 8,
    name: "Paku Besi 12cm",
    description:
      "Paku besi ukuran 12cm untuk aplikasi konstruksi heavy duty. Panjang maksimal untuk sambungan kayu tebal dan struktur yang membutuhkan kekuatan ekstra.",
    features: [
      "Panjang 12cm maksimal",
      "Heavy duty construction",
      "Untuk kayu tebal dan struktur berat",
      "Kekuatan struktural tinggi",
      "Material premium grade",
      "Investasi jangka panjang",
    ],
    image: "/images/Detail/Paku & Baut/Paku Besi 12cm.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Paku dan Baut.webp",
    whatsapp_text:
      "Selamat pagi, saya tertarik dengan Paku Besi 12cm. Bisa minta info harga per kg dan spesifikasi detail?",
  },
  {
    id: 9,
    name: "Paku Beton 4cm",
    description:
      "Paku beton ukuran 4cm khusus untuk sambungan kayu ke beton atau tembok. Material hardened steel dengan ujung lancip untuk penetrasi optimal.",
    features: [
      "Panjang 4cm khusus beton",
      "Material hardened steel",
      "Ujung lancip penetrasi optimal",
      "Untuk sambungan kayu ke beton",
      "Anti slip head design",
      "Kekuatan cengkeram superior",
    ],
    image: "/images/Detail/Paku & Baut/Paku Beton 4cm.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Paku dan Baut.webp",
    whatsapp_text:
      "Halo, saya membutuhkan Paku Beton 4cm untuk pemasangan rangka. Mohon info harga per kg dan stok.",
  },
  {
    id: 10,
    name: "Paku Beton 5cm",
    description:
      "Paku beton ukuran 5cm untuk sambungan permanent ke beton dan tembok. Kualitas industrial grade dengan daya tahan maksimal terhadap beban.",
    features: [
      "Panjang 5cm industrial grade",
      "Sambungan permanent ke beton",
      "Daya tahan maksimal",
      "Tahan beban tinggi",
      "Material steel premium",
      "Anti corrosion coating",
    ],
    image: "/images/Detail/Paku & Baut/Paku Beton 5cm.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Paku dan Baut.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Paku Beton 5cm. Bisa tolong kirim daftar harga dan cara pemesanan?",
  },
  {
    id: 11,
    name: "Paku Beton 7cm",
    description:
      "Paku beton ukuran 7cm untuk aplikasi struktural sedang. Memberikan penetrasi dalam ke beton dengan kekuatan cengkeram yang reliable.",
    features: [
      "Panjang 7cm struktural",
      "Penetrasi dalam ke beton",
      "Kekuatan cengkeram reliable",
      "Untuk aplikasi sedang",
      "High carbon steel material",
      "Long lasting performance",
    ],
    image: "/images/Detail/Paku & Baut/Paku Beton 7cm.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Paku dan Baut.webp",
    whatsapp_text:
      "Selamat siang, saya membutuhkan Paku Beton 7cm untuk konstruksi. Mohon info harga dan ketersediaan.",
  },
  {
    id: 12,
    name: "Paku Beton 10cm",
    description:
      "Paku beton ukuran 10cm untuk konstruksi berat dan sambungan struktural ke beton. Heavy duty performance untuk aplikasi industrial dan komersial.",
    features: [
      "Panjang 10cm heavy duty",
      "Untuk konstruksi berat",
      "Sambungan struktural ke beton",
      "Industrial grade performance",
      "Maximum holding power",
      "Corrosion resistant",
    ],
    image: "/images/Detail/Paku & Baut/Paku Beton 10cm.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Paku dan Baut.webp",
    whatsapp_text:
      "Halo, saya mencari Paku Beton 10cm untuk proyek industri. Mohon informasi harga per kg dan minimum order.",
  },
  {
    id: 13,
    name: "Ruping Atap Spandek 2cm",
    description:
      "Ruping khusus untuk atap spandek ukuran 2cm. Sekrup self drilling dengan washer karet untuk pemasangan atap spandek yang tahan bocor dan kuat.",
    features: [
      "Panjang 2cm khusus spandek",
      "Self drilling point",
      "Washer karet anti bocor",
      "Hex head anti slip",
      "Galvanis coating premium",
      "Pemasangan cepat dan mudah",
    ],
    image: "/images/Detail/Paku & Baut/Ruping Atap Spandek 2cm.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Paku dan Baut.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Ruping Atap Spandek 2cm. Mohon info harga per box dan ketersediaan stok.",
  },
  {
    id: 14,
    name: "Ruping Atap Spandek 4.5cm",
    description:
      "Ruping atap spandek ukuran 4.5cm untuk pemasangan pada rangka kayu atau baja ringan. Dilengkapi washer karet berkualitas tinggi untuk seal sempurna.",
    features: [
      "Panjang 4.5cm optimal",
      "Untuk rangka kayu/baja ringan",
      "Washer karet berkualitas tinggi",
      "Seal sempurna anti bocor",
      "Self tapping thread",
      "Weather resistant coating",
    ],
    image: "/images/Detail/Paku & Baut/Ruping Atap Spandek 4.5cm.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Paku dan Baut.webp",
    whatsapp_text:
      "Halo, saya membutuhkan Ruping Atap Spandek 4.5cm untuk atap rumah. Mohon info harga per box dan cara order.",
  },
  {
    id: 15,
    name: "Ruping Atap Spandek 6cm",
    description:
      "Ruping atap spandek ukuran 6cm untuk struktur rangka yang lebih tebal. Memberikan penetrasi dalam dengan kekuatan cengkeram maksimal pada rangka.",
    features: [
      "Panjang 6cm untuk rangka tebal",
      "Penetrasi dalam maksimal",
      "Kekuatan cengkeram tinggi",
      "Double seal washer system",
      "Corrosion resistant finish",
      "Professional grade quality",
    ],
    image: "/images/Detail/Paku & Baut/Ruping Atap Spandek 6cm.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Paku dan Baut.webp",
    whatsapp_text:
      "Selamat pagi, saya tertarik dengan Ruping Atap Spandek 6cm. Bisa minta info harga per box dan minimum order?",
  },
  {
    id: 16,
    name: "Ruping Atap Spandek 7cm",
    description:
      "Ruping atap spandek ukuran 7cm untuk aplikasi rangka extra tebal. Heavy duty performance dengan daya tahan maksimal untuk struktur atap komersial.",
    features: [
      "Panjang 7cm heavy duty",
      "Untuk rangka extra tebal",
      "Struktur atap komersial",
      "Maximum durability",
      "Premium washer quality",
      "Long term reliability",
    ],
    image: "/images/Detail/Paku & Baut/Ruping Atap Spandek 7cm.webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Paku dan Baut.webp",
    whatsapp_text:
      "Halo, saya mencari Ruping Atap Spandek 7cm untuk gudang. Mohon informasi harga per box dan spesifikasi teknis.",
  },
  {
    id: 17,
    name: "Screw Calciboard 6 X 1 14 (3cm)",
    description:
      "Screw khusus untuk calciboard ukuran 6 x 1 1/4 (3cm). Sekrup fine thread dengan countersunk head untuk pemasangan calciboard yang rapi dan kuat.",
    features: [
      "Ukuran 6 x 1 1/4 (3cm)",
      "Fine thread khusus calciboard",
      "Countersunk head design",
      "Pemasangan rapi dan flush",
      "Anti corrosion coating",
      "Easy drive installation",
    ],
    image: "/images/Detail/Paku & Baut/Screw Calciboard 6 X 1 14 (3cm).webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Paku dan Baut.webp",
    whatsapp_text:
      "Halo, saya tertarik dengan Screw Calciboard 6 X 1 14 (3cm). Mohon info harga per box dan ketersediaan stok.",
  },
  {
    id: 18,
    name: "Screw Calciboard 6 X 34 (2cm)",
    description:
      "Screw calciboard ukuran 6 x 3/4 (2cm) untuk pemasangan calciboard tipis. Self tapping dengan ujung lancip untuk penetrasi mudah tanpa pre-drilling.",
    features: [
      "Ukuran 6 x 3/4 (2cm)",
      "Untuk calciboard tipis",
      "Self tapping design",
      "Tanpa perlu pre-drilling",
      "Sharp point penetration",
      "Smooth finish surface",
    ],
    image: "/images/Detail/Paku & Baut/Screw Calciboard 6 X 34 (2cm).webp",
    thumbnail: "/images/Thumbnail/Thumbnail-Kategori-Paku dan Baut.webp",
    whatsapp_text:
      "Halo, saya membutuhkan Screw Calciboard 6 X 34 (2cm) untuk plafon. Mohon info harga per box dan cara pemesanan.",
  },
];

export default function PakuDanBautPage() {
  return (
    <CategoryPage
      categoryName="Paku dan Baut"
      categoryIcon="🔩"
      categoryDescription="Koleksi lengkap paku dan baut berkualitas tinggi untuk kebutuhan konstruksi. Dynabolt, Paku Besi, Paku Beton, Ruping Atap Spandek, dan Screw Calciboard dengan berbagai ukuran dan spesifikasi."
      products={pakuDanBautProducts}
    />
  );
}
