# Görsel Yükleme Rehberi - Ana Sayfa Galeri Bölümü

## 📁 Görsel Yükleme Klasörü

Ana sayfadaki **"Görsel Galeri"** bölümünde gösterilecek görselleri aşağıdaki klasöre yükleyin:

### ⚠️ ÖNEMLİ: Klasör Yolu
```
public/images/
```

**Tam Yol Örneği:**
```
C:\Users\syare\OneDrive\Masaüstü\ros\public\images\
```

### ✅ Mevcut Görseller (Zaten Yüklü)
Ana sayfada şu anda şu görseller gösteriliyor (20 adet):
- `/images/Angel0.jpg` ✅
- `/images/Angel1.jpg` ✅
- `/images/Angel2.jpg` ✅
- `/images/Angel3.jpg` ✅
- `/images/Angel4.jpg` ✅
- `/images/Angel5.jpg` ✅
- `/images/amore1.JPG` ✅
- `/images/amore2.JPG` ✅
- `/images/amore3.JPG` ✅
- `/images/amore4.JPG` ✅
- `/images/IMG_5499.JPG` ✅
- `/images/IMG_5500.JPG` ✅
- `/images/IMG_5501.JPG` ✅
- `/images/IMG_5502.JPG` ✅
- `/images/5A6A0494.JPG` ✅
- `/images/5A6A0498.JPG` ✅
- `/images/5A6A0527.JPG` ✅
- `/images/5A6A0654.JPG` ✅
- `/images/5A6A0702.JPG` ✅
- `/images/5A6A0881.JPG` ✅

**Not:** Tüm bu görseller zaten `public/images/` klasöründe mevcut!

### Yeni Görsel Ekleme

1. Görsellerinizi `public/images/` klasörüne yükleyin
2. Görsel adlarını `src/pages/Home.tsx` dosyasındaki `galleryImages` array'ine ekleyin:

```typescript
const galleryImages = [
  "/images/Angel0.jpg",
  "/images/Angel1.jpg",
  "/images/Angel2.jpg",
  "/images/amore1.JPG",
  "/images/amore2.JPG",
  "/images/IMG_5499.JPG",
  "/images/IMG_5500.JPG",
  "/images/5A6A0494.JPG",
  "/images/YENI_GORSEL_ADI.jpg", // Yeni görsel buraya eklenir
];
```

### Öneriler

- **Görsel Formatı**: JPG, PNG, WebP
- **Görsel Boyutu**: Büyük görseller önerilir (en az 1920px genişlik)
- **Dosya Adlandırma**: Türkçe karakter ve boşluk kullanmadan, küçük harf ile adlandırın
- **Optimizasyon**: Görselleri optimize edin (büyük dosyalar yavaş yüklenebilir)

### Görsel Yolu Formatı

Görseller `public` klasöründe olduğu için yol `/images/` ile başlamalı:
- ✅ Doğru: `/images/salon-gorsel-1.jpg`
- ❌ Yanlış: `images/salon-gorsel-1.jpg` veya `./images/salon-gorsel-1.jpg`

### Not

Görseller yüklendikten sonra React uygulaması otomatik olarak yenilenecek. Eğer görünmüyorsa:
1. Tarayıcıyı yenileyin (Ctrl+F5 veya Cmd+Shift+R)
2. Görsel yolunun doğru olduğundan emin olun
3. Görsel dosyasının `public/images/` klasöründe olduğunu kontrol edin

