# Struktur Gambar Produk - Bahan Bangunan Store

## Dual Image System

Website ini menggunakan sistem **dual image** untuk optimasi performa dan user experience:

### 1. Thumbnail Images (Grid View)

- **Path**: `/images/Thumbnail/`
- **Format**: WebP (optimal untuk web)
- **Size**: Kecil, dioptimasi untuk loading cepat
- **Penggunaan**: Ditampilkan di grid produk utama
- **Ratio**: Square (1:1) atau landscape (4:3)
- **Ukuran Target**: 300x300px atau 400x300px

### 2. Detail Images (Modal View)

- **Path**: `/images/Detail/{kategori}/`
- **Format**: WebP atau JPG
- **Size**: High resolution untuk detail viewing
- **Penggunaan**: Ditampilkan di modal detail produk
- **Ratio**: Landscape (16:9 atau 4:3)
- **Ukuran Target**: 800x600px hingga 1200x900px

## Struktur Direktori yang Ada

```
public/images/
├── Thumbnail/                          # Gambar kecil untuk grid
│   ├── Thumbnail-Kategori-Atap.webp
│   ├── Thumbnail-Kategori-Baja Ringan.webp
│   ├── Thumbnail-Kategori-Paku dan Baut.webp
│   ├── Thumbnail-Kategori-Pipa.webp
│   ├── Thumbnail-Kategori-Plafon.webp
│   ├── Thumbnail-Kategori-Sanitary.webp
│   ├── Thumbnail-Kategori-Tangki Air.webp
│   └── Thumbnail-Kategori-Tangki Ipal.webp
└── Detail/                             # Gambar detail untuk modal
    ├── Atap/
    │   └── Atap Spandek CBM 0.30mm X 1m X 4m - AZ 70.webp
    ├── Baja Ringan/
    ├── Paku & Baut/
    ├── Pipa/
    ├── Plafon/
    ├── Sanitary/
    ├── Tangki Air/
    └── Tangki Ipal/
```

## Data Structure Produk

```typescript
interface Product {
  name: string;
  description: string;
  image: string; // Path ke detail image
  thumbnail?: string; // Path ke thumbnail image (optional)
  features: string[];
  specifications: Array<{
    label: string;
    value: string;
  }>;
}
```

## Implementasi dalam Kode

### Grid View (menggunakan thumbnail)

```jsx
{
  product.thumbnail ? (
    <img
      src={product.thumbnail}
      alt={product.name}
      className="w-full h-full object-cover"
      onError={handleImageError}
    />
  ) : (
    <div className="fallback-icon">
      <span className="text-4xl">{categoryIcon}</span>
    </div>
  );
}
```

### Modal View (menggunakan detail image)

```jsx
{
  selectedProduct.image ? (
    <img
      src={selectedProduct.image}
      alt={selectedProduct.name}
      className="w-full h-64 object-cover rounded-t-lg"
      onError={handleImageError}
    />
  ) : (
    <div className="fallback-icon">
      <span className="text-8xl">{categoryIcon}</span>
    </div>
  );
}
```

## Fallback System

Jika gambar tidak tersedia atau gagal dimuat:

1. **Grid View**: Menampilkan icon kategori berukuran sedang
2. **Modal View**: Menampilkan icon kategori berukuran besar
3. **Icon Mapping**: Setiap kategori memiliki emoji/icon unik

## Rekomendasi Gambar untuk Setiap Kategori

### 1. Atap 🏠

- **Thumbnail**: Gambar genteng/atap dari atas
- **Detail**: Close-up texture, instalasi, atau profil samping
- **Contoh**: Genteng metal, spandek, asbes, dll

### 2. Baja Ringan 🏗️

- **Thumbnail**: Profil baja ringan tunggal
- **Detail**: Rangka baja ringan terpasang atau detail sambungan
- **Contoh**: C-channel, hollow, reng baja

### 3. Paku & Baut 🔩

- **Thumbnail**: Koleksi paku/baut tertata rapi
- **Detail**: Close-up detail ulir, kepala baut, atau aplikasi
- **Contoh**: Sekrup baja ringan, paku reng, baut hex

### 4. Pipa 🚰

- **Thumbnail**: Pipa tunggal atau sambungan
- **Detail**: Sistem perpipaan atau detail fitting
- **Contoh**: PVC, PPR, galvanis, copper

### 5. Plafon 🏢

- **Thumbnail**: Sample panel plafon
- **Detail**: Plafon terpasang atau detail sambungan
- **Contoh**: Gypsum, PVC, metal ceiling

### 6. Sanitary 🚿

- **Thumbnail**: Produk sanitair tunggal
- **Detail**: Instalasi atau detail fitur
- **Contoh**: Toilet, wastafel, shower, faucet

### 7. Tangki Air 💧

- **Thumbnail**: Tangki dari sudut terbaik
- **Detail**: Instalasi atau detail inlet/outlet
- **Contoh**: Tangki PE, fiberglass, stainless

### 8. Tangki IPAL 🌱

- **Thumbnail**: Tangki biofilter atau septic tank
- **Detail**: Sistem IPAL lengkap atau komponen internal
- **Contoh**: Biofilter, grease trap, septic tank

## Optimasi Performa

1. **Lazy Loading**: Gambar dimuat saat diperlukan
2. **WebP Format**: Format modern dengan kompresi terbaik
3. **Responsive Images**: Menyesuaikan dengan ukuran layar
4. **Fallback Graceful**: Icon kategori jika gambar gagal
5. **Caching**: Browser akan cache gambar untuk akses berikutnya

## Panduan Upload Gambar Baru

1. **Untuk Thumbnail**:

   - Resize ke 400x300px
   - Compress ke WebP
   - Simpan di `/public/images/Thumbnail/`
   - Naming: `{nama-produk}-thumbnail.webp`

2. **Untuk Detail**:

   - Resize ke 1200x900px (atau maintain aspect ratio)
   - Compress ke WebP/JPG
   - Simpan di `/public/images/Detail/{kategori}/`
   - Naming: `{nama-produk-lengkap}.webp`

3. **Update Data Produk**:
   ```javascript
   {
     name: "Nama Produk",
     thumbnail: "/images/Thumbnail/nama-produk-thumbnail.webp",
     image: "/images/Detail/kategori/nama-produk-lengkap.webp",
     // ... data lainnya
   }
   ```

## Status Implementasi

✅ **Completed**:

- Dual image system structure
- TypeScript interface updated
- Error handling untuk gambar
- Fallback icon system
- Example implementation di plafon kategori

⏳ **Next Steps**:

- Implementasi di semua kategori
- Upload gambar produk aktual
- Optimasi gambar yang ada
- Testing performa loading

## Testing

Untuk testing sistem gambar:

1. Jalankan `npm run dev`
2. Buka kategori plafon (sudah diimplementasi)
3. Test dengan gambar valid dan invalid
4. Verifikasi fallback system bekerja
5. Check responsive behavior
