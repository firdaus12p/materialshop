"use client";

interface ArticleImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ArticleImage({ src, alt, className }: ArticleImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        // Generate a simple placeholder using data URI with SVG
        const placeholderSvg = `data:image/svg+xml;base64,${btoa(`
          <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#f3f4f6"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
                  font-family="Arial, sans-serif" font-size="16" fill="#6b7280">
              Gambar Artikel
            </text>
          </svg>
        `)}`;
        (e.target as HTMLImageElement).src = placeholderSvg;
      }}
    />
  );
}
