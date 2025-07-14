import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Beranda - Bahan Bangunan Store | Material Konstruksi Terlengkap",
  description:
    "Jual bahan material bangunan terlengkap dengan harga terbaik. Papan kayu, plafon gypsum, baja ringan, genteng, pipa PVC, paku baut, dan sanitary. Melayani seluruh Indonesia.",
  keywords: [
    "toko bahan bangunan online",
    "jual material konstruksi",
    "supplier bahan bangunan",
    "papan kayu berkualitas",
    "baja ringan murah",
    "genteng metal terbaik",
    "pipa PVC SNI",
    "plafon gypsum",
    "paku baut tahan karat",
    "sanitary modern",
    "material bangunan Indonesia",
  ],
  openGraph: {
    title: "Bahan Bangunan Store - Supplier Material Konstruksi Terpercaya",
    description:
      "Jual bahan material bangunan terlengkap dengan harga terbaik melayani seluruh Indonesia. Order mudah via WhatsApp!",
    type: "website",
    url: "https://bahanbangunanstore.com",
  },
  alternates: {
    canonical: "https://bahanbangunanstore.com",
  },
};

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedProducts />
      </main>
      <Footer />
    </>
  );
}
