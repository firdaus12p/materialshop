import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bahanbangunanstore.com"),
  title:
    "Bahan Bangunan Store - Jual Material Bangunan Terlengkap & Terpercaya",
  description:
    "Toko bahan bangunan online terpercaya melayani seluruh Indonesia. Jual papan kayu, baja ringan, genteng, pipa PVC, plafon gypsum, paku baut dengan harga terbaik. Order via WhatsApp!",
  keywords: [
    "bahan bangunan store",
    "jual bahan bangunan",
    "material bangunan",
    "toko bahan bangunan online",
    "papan kayu",
    "baja ringan",
    "genteng metal",
    "pipa PVC",
    "plafon gypsum",
    "paku baut",
    "sanitary",
    "bahan konstruksi",
    "supplier bahan bangunan",
    "distributor material bangunan",
    "bahan bangunan murah",
    "material konstruksi berkualitas",
  ],
  authors: [{ name: "Bahan Bangunan Store" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Bahan Bangunan Store - Jual Material Bangunan Terlengkap & Terpercaya",
    description:
      "Toko bahan bangunan online terpercaya melayani seluruh Indonesia. Jual papan kayu, baja ringan, genteng, pipa PVC, plafon gypsum dengan harga terbaik.",
    url: "https://bahanbangunanstore.com",
    siteName: "Bahan Bangunan Store",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bahan Bangunan Store - Supplier Material Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bahan Bangunan Store - Jual Material Bangunan Terlengkap",
    description:
      "Toko bahan bangunan online terpercaya dengan material berkualitas harga terbaik",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://bahanbangunanstore.com",
  },
  category: "Business",
};

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    themeColor: "#0070f3",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="Bahan Bangunan Store"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
