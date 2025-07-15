import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artikel & Tips Konstruksi - Bahan Bangunan Store",
  description:
    "Kumpulan artikel, tips, dan panduan lengkap seputar material bangunan, konstruksi, dan renovasi rumah dari para ahli.",
  keywords:
    "artikel bangunan, tips konstruksi, tutorial renovasi, edukasi material, perbandingan bahan bangunan",
  openGraph: {
    title: "Artikel & Tips Konstruksi - Bahan Bangunan Store",
    description:
      "Kumpulan artikel, tips, dan panduan lengkap seputar material bangunan, konstruksi, dan renovasi rumah dari para ahli.",
    type: "website",
  },
};

export default function ArtikelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
