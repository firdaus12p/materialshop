import CategoryPage from "../../../components/CategoryPage";

const bajaRinganProducts = [
  {
    id: 1,
    name: "Baja Ringan C75",
    description:
      "Profil baja ringan C75 dengan ketebalan 0.75mm, ideal untuk rangka atap rumah tinggal dan bangunan kecil. Galvanis berkualitas tinggi.",
    features: [
      "Ketebalan 0.75mm premium",
      "Galvanis hot dip berkualitas",
      "Tahan karat dan korosi",
      "Mudah dipasang dan dipotong",
      "Bobot ringan namun kuat",
      "Sesuai standar SNI",
    ],
    image: "/images/baja-ringan-c75.jpg",
    whatsapp_text:
      "Halo, saya tertarik dengan Baja Ringan C75. Mohon info harga per batang dan ketersediaan stok. Terima kasih.",
  },
  {
    id: 2,
    name: "Baja Ringan Reng",
    description:
      "Profil reng baja ringan untuk struktur sekunder atap. Memberikan kekuatan optimal untuk pemasangan genteng dengan jarak yang tepat.",
    features: [
      "Profil khusus untuk reng",
      "Dimensi presisi tinggi",
      "Galvanis tahan lama",
      "Mudah dalam pemasangan",
      "Hemat material dan waktu",
      "Kualitas terjamin",
    ],
    image: "/images/baja-ringan-reng.jpg",
    whatsapp_text:
      "Selamat siang, saya membutuhkan Baja Ringan Reng untuk proyek atap. Bisa tolong kirim harga dan spesifikasi lengkap?",
  },
  {
    id: 3,
    name: "Hollow Galvanis",
    description:
      "Hollow galvanis berkualitas tinggi untuk berbagai keperluan konstruksi. Tersedia berbagai ukuran dengan finishing galvanis yang sempurna.",
    features: [
      "Material galvanis premium",
      "Berbagai ukuran tersedia",
      "Kekuatan struktural tinggi",
      "Finishing galvanis sempurna",
      "Aplikasi serbaguna",
      "Harga kompetitif",
    ],
    image: "/images/hollow-galvanis.jpg",
    whatsapp_text:
      "Halo, saya mencari Hollow Galvanis untuk konstruksi. Mohon informasi ukuran dan harga yang tersedia.",
  },
  {
    id: 4,
    name: "Siku Galvanis",
    description:
      "Profil siku galvanis untuk penguat struktur dan sambungan. Kualitas galvanis terbaik dengan berbagai ukuran standar industri.",
    features: [
      "Profil siku presisi tinggi",
      "Galvanis berkualitas premium",
      "Berbagai ukuran standar",
      "Cocok untuk penguat struktur",
      "Mudah disambung dan dipasang",
      "Tahan terhadap cuaca",
    ],
    image: "/images/siku-galvanis.jpg",
    whatsapp_text:
      "Selamat pagi, saya tertarik dengan Siku Galvanis. Bisa minta info lengkap ukuran dan harga per batang?",
  },
];

export default function BajaRinganPage() {
  return (
    <CategoryPage
      categoryName="Baja Ringan"
      categoryIcon="🏗️"
      categoryDescription="Koleksi lengkap baja ringan berkualitas tinggi untuk konstruksi modern. Tersedia berbagai profil, ukuran, dan aksesoris pendukung dengan standar SNI."
      products={bajaRinganProducts}
    />
  );
}

export const metadata = {
  title: "Baja Ringan - Bahan Bangunan Store",
  description:
    "Jual baja ringan berkualitas: profil C, reng, sekrup, bracket dengan harga terbaik. Galvanis anti karat untuk rangka atap dan konstruksi ringan.",
  keywords:
    "baja ringan, profil C, reng baja, sekrup baja ringan, bracket, galvanis, rangka atap, konstruksi ringan",
};
