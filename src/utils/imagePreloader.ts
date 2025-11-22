/**
 * Kritik görselleri sayfa yüklendiğinde hemen preload eden utility
 */

type ImageSource = string;

interface PreloadOptions {
  priority?: 'high' | 'low';
  onLoad?: (src: string) => void;
  onError?: (src: string) => void;
}

/**
 * Tek bir görseli preload eder
 */
function preloadImage(src: ImageSource, options: PreloadOptions = {}): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      options.onLoad?.(src);
      resolve();
    };
    
    img.onerror = () => {
      options.onError?.(src);
      reject(new Error(`Failed to load image: ${src}`));
    };
    
    // Fetch priority için link tag'i ekle
    if (options.priority === 'high') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      // fetchPriority özelliği bazı tarayıcılarda destekleniyor
      if ('fetchPriority' in link) {
        (link as any).fetchPriority = 'high';
      }
      document.head.appendChild(link);
    }
    
    img.src = src;
  });
}

/**
 * Birden fazla görseli paralel olarak preload eder
 */
export async function preloadImages(
  sources: ImageSource[],
  options: PreloadOptions = {}
): Promise<void> {
  // Duplikasyonları temizle
  const uniqueSources = Array.from(new Set(sources));
  
  // Tüm görselleri paralel olarak preload et
  const promises = uniqueSources.map((src) =>
    preloadImage(src, options).catch((error) => {
      // Hata olsa bile devam et, sadece konsola log
      console.warn('Image preload failed:', error);
    })
  );
  
  await Promise.allSettled(promises);
}

/**
 * Kritik görselleri hemen preload eder (sayfa yüklenir yüklenmez)
 */
export function preloadCriticalImages(): void {
  // Ana sayfa hero slide görselleri
  const heroImages = [
    '/images/hero/hero-slide-1.jpg.JPG',
    '/images/hero/hero-slide-2.jpg.JPG',
    '/images/hero/hero-slide-3.jpg.jpg',
  ];

  // Ana sayfa salon görselleri
  const salonImages = [
    '/images/angel.JPG',
    '/images/salon-angel-ivedik.jpg',
  ];

  // Ana sayfa galeri görselleri (ilk 12 görsel - üstte görünenler)
  const galleryImages = [
    '/images/Angel0.jpg',
    '/images/Angel1.jpg',
    '/images/Angel2.jpg',
    '/images/Angel3.jpg',
    '/images/amore1.JPG',
    '/images/amore2.JPG',
    '/images/IMG_5499.JPG',
    '/images/IMG_5500.JPG',
    '/images/IMG_5501.JPG',
    '/images/IMG_5502.JPG',
    '/images/5A6A0494.JPG',
    '/images/5A6A0498.JPG',
  ];

  // Tüm kritik görselleri birleştir
  const criticalImages = [
    ...heroImages,
    ...salonImages,
    ...galleryImages,
  ];

  // Yüksek öncelikle preload et
  preloadImages(criticalImages, {
    priority: 'high',
    onLoad: (src) => {
      console.log('✓ Preloaded:', src);
    },
    onError: (src) => {
      console.warn('✗ Failed to preload:', src);
    },
  });
}

/**
 * Sayfa yüklendiğinde otomatik olarak kritik görselleri preload eder
 */
export function initImagePreloader(): void {
  // DOM hazır olduğunda başlat
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadCriticalImages);
  } else {
    // DOM zaten hazır, hemen başlat
    preloadCriticalImages();
  }

  // Ayrıca window load event'inde de başlat (yedek)
  window.addEventListener('load', () => {
    // Eğer hala yüklenmemiş görseller varsa onları da yükle
    preloadCriticalImages();
  });
}
