export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bahan Bangunan Store",
    image: "https://bahanbangunanstore.com/logo.jpg",
    description:
      "Toko bahan bangunan online terpercaya melayani seluruh Indonesia. Jual atap spandek, baja ringan, genteng, pipa PVC, plafon gypsum dengan harga terbaik.",
    url: "https://bahanbangunanstore.com",
    telephone: "+62-882-4242-3267",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressRegion: "Indonesia",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.2,
      longitude: 106.816666,
    },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    servesCuisine: [],
    areaServed: "Indonesia",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Produk Bahan Bangunan",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Atap Spandek",
            description:
              "Berbagai jenis atap spandek CBM berkualitas untuk konstruksi",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Baja Ringan",
            description:
              "Baja ringan anti karat untuk rangka atap dan konstruksi",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Genteng",
            description:
              "Genteng metal dan keramik berkualitas untuk atap rumah",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Pipa PVC",
            description: "Pipa PVC untuk instalasi air bersih dan sanitasi",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Plafon Gypsum",
            description:
              "Plafon gypsum berkualitas untuk interior rumah dan kantor",
          },
        },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-882-4242-3267",
      contactType: "customer service",
      availableLanguage: "Indonesian",
    },
    sameAs: ["https://wa.me/6288242423267"],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bahan Bangunan Store",
    url: "https://bahanbangunanstore.com",
    description:
      "Toko bahan bangunan online terpercaya dengan material berkualitas harga terbaik",
    publisher: {
      "@type": "Organization",
      name: "Bahan Bangunan Store",
    },
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  category: string;
  features: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: "Bahan Bangunan Store",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Bahan Bangunan Store",
      },
    },
    additionalProperty: product.features.map((feature) => ({
      "@type": "PropertyValue",
      name: "Feature",
      value: feature,
    })),
  };
}
