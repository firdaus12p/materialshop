import CategoryPage from "../../../components/CategoryPage";

const lainnyaProducts = [
  {
    id: 1,
    name: "Cat Tembok Berkualitas Tinggi",
    description:
      "Cat tembok premium dengan daya tutup yang sempurna dan tahan lama. Tersedia dalam berbagai warna dan finishing untuk kebutuhan interior dan eksterior.",
    features: [
      "Daya tutup sempurna dan merata",
      "Tahan cuaca dan tidak mudah pudar",
      "Anti jamur dan bakteri",
      "Mudah dibersihkan",
      "Ramah lingkungan dan aman",
      "Tersedia 1000+ pilihan warna",
    ],
    image: "/images/cat-tembok.jpg",
    whatsapp_text:
      "Halo, saya tertarik dengan Cat Tembok Berkualitas Tinggi. Bisakah Anda memberikan informasi harga dan pilihan warna yang tersedia?",
  },
  {
    id: 2,
    name: "Lem Kayu Super Strong",
    description:
      "Lem kayu dengan daya rekat super kuat untuk berbagai jenis kayu. Tahan air dan cuaca, cocok untuk furniture dan konstruksi kayu.",
    features: [
      "Daya rekat super kuat",
      "Tahan air dan kelembaban",
      "Cepat kering dan mengeras",
      "Tidak beracun dan aman",
      "Cocok untuk semua jenis kayu",
      "Tahan suhu ekstrem",
    ],
    image: "/images/lem-kayu.jpg",
    whatsapp_text:
      "Halo, saya ingin menanyakan tentang Lem Kayu Super Strong. Mohon info harga dan ketersediaan stok.",
  },
  {
    id: 3,
    name: "Waterproofing Membrane",
    description:
      "Membran kedap air berkualitas tinggi untuk perlindungan bangunan dari rembesan air. Mudah dipasang dan tahan lama.",
    features: [
      "100% kedap air",
      "Fleksibel dan tidak mudah robek",
      "Tahan UV dan cuaca ekstrem",
      "Mudah dipasang",
      "Garansi 10 tahun",
      "Ramah lingkungan",
    ],
    image: "/images/waterproofing.jpg",
    whatsapp_text:
      "Halo, saya tertarik dengan Waterproofing Membrane. Bisakah Anda memberikan penawaran harga per meter?",
  },
  {
    id: 4,
    name: "Semen Portland Berkualitas",
    description:
      "Semen portland berkualitas tinggi untuk berbagai kebutuhan konstruksi. Memiliki kekuatan tekan tinggi dan setting time yang konsisten.",
    features: [
      "Kekuatan tekan tinggi",
      "Setting time konsisten",
      "Kualitas sesuai standar SNI",
      "Cocok untuk berbagai konstruksi",
      "Kemasan 40kg dan 50kg",
      "Harga kompetitif",
    ],
    image: "/images/semen-portland.jpg",
    whatsapp_text:
      "Halo, saya ingin menanyakan tentang Semen Portland. Mohon info harga per sak dan minimum order.",
  },
  {
    id: 5,
    name: "Keramik Lantai Premium",
    description:
      "Keramik lantai premium dengan motif modern dan kualitas terbaik. Anti slip dan mudah dibersihkan, cocok untuk semua ruangan.",
    features: [
      "Motif modern dan elegan",
      "Anti slip dan aman",
      "Mudah dibersihkan",
      "Tahan gores dan noda",
      "Tersedia berbagai ukuran",
      "Kualitas grade AAA",
    ],
    image: "/images/keramik-lantai.jpg",
    whatsapp_text:
      "Halo, saya tertarik dengan Keramik Lantai Premium. Bisakah Anda memberikan katalog motif dan harga?",
  },
];

export default function LainnyaPage() {
  return (
    <CategoryPage
      categoryName="Lainnya"
      categoryDescription="Material bangunan tambahan seperti cat, lem, waterproofing, semen, dan keramik untuk melengkapi kebutuhan konstruksi Anda"
      products={lainnyaProducts}
      categoryIcon="🎨"
    />
  );
}

export const metadata = {
  title: "Lainnya - Material Bangunan Tambahan | Bahan Bangunan Store",
  description:
    "Jual cat tembok, lem kayu, waterproofing, semen portland, dan keramik lantai berkualitas dengan harga terbaik. Melayani seluruh Indonesia.",
};
