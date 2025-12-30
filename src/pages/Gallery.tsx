import React, { useState } from 'react';
import OptimizedImage from '../components/OptimizedImage';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  branch: string; // Şube adı (örn: "Etimesgut", "Yenimahalle")
  salon: string; // Salon adı (örn: "Angel", "Amore")
  layout?: 'small' | 'medium' | 'large' | 'wide' | 'tall';
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Galeri görselleri - Buraya görsellerinizi ekleyebilirsiniz
  // Görsellerinizi public/images/Gallery/ klasörüne yükleyin
  // Dosya isimleri: etimesgutangel1.jpg, etimesgutangel2.jpg, yenimahalleamore1.jpg, yenimahalleamore2.jpg gibi
  const galleryImages: GalleryImage[] = [
    // Örnek: Görsellerinizi buraya ekleyin
    // { id: 1, src: '/images/Gallery/etimesgutangel1.jpg', alt: 'Etimesgut Angel Salon görseli 1', branch: 'Etimesgut', salon: 'Angel', layout: 'large' },
    // { id: 2, src: '/images/Gallery/etimesgutangel2.jpg', alt: 'Etimesgut Angel Salon görseli 2', branch: 'Etimesgut', salon: 'Angel', layout: 'small' },
    // { id: 3, src: '/images/Gallery/yenimahalleamore1.jpg', alt: 'Yenimahalle Amore Salon görseli 1', branch: 'Yenimahalle', salon: 'Amore', layout: 'tall' },
    // ... yaklaşık 10 görsel
  ];

  const getLayoutClasses = (layout: string = 'medium'): string => {
    switch (layout) {
      case 'small':
        return 'col-span-1 md:col-span-1';
      case 'medium':
        return 'col-span-1 md:col-span-2';
      case 'large':
        return 'col-span-1 md:col-span-3';
      case 'wide':
        return 'col-span-1 md:col-span-3';
      case 'tall':
        return 'col-span-1 md:col-span-2 md:row-span-2';
      default:
        return 'col-span-1 md:col-span-2';
    }
  };

  const getAspectRatio = (layout: string = 'medium'): string => {
    switch (layout) {
      case 'small':
        return 'aspect-square';
      case 'medium':
        return 'aspect-square';
      case 'large':
        return 'aspect-square';
      case 'wide':
        return 'aspect-[2/1]';
      case 'tall':
        return 'aspect-[1/2]';
      default:
        return 'aspect-square';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-4 sm:py-6 overflow-hidden">
        {/* Soft gradient in bottom right corner */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#a4585a]/10 via-pink-50/5 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 sm:mb-3 animate-fade-in text-gray-900">Galeri</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-gray-700 font-light leading-relaxed tracking-wide animate-slide-up">
              Salonlarımız, düğünlerimiz ve 
              <span className="font-medium text-[#a4585a]"> unutulmaz anlarımızdan öne çıkan kareleri </span>
              keşfedin. Hayalinizdeki düğün için ilham alın.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {galleryImages.length > 0 ? (
            <div 
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
              style={{
                gridAutoRows: 'minmax(200px, auto)',
              }}
            >
              {galleryImages.map((image) => {
                const layoutClasses = getLayoutClasses(image.layout);
                const aspectRatio = getAspectRatio(image.layout);

                return (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={`${layoutClasses} ${aspectRatio} relative group rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200`}
                    style={{
                      boxShadow: '0 10px 25px -5px rgba(164, 88, 90, 0.4), 0 8px 10px -6px rgba(164, 88, 90, 0.3)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 20px 40px -5px rgba(164, 88, 90, 0.6), 0 15px 15px -6px rgba(164, 88, 90, 0.5)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(164, 88, 90, 0.4), 0 8px 10px -6px rgba(164, 88, 90, 0.3)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      objectFit="cover"
                      loading="lazy"
                      placeholder="empty"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {/* Şube ve Salon Bilgisi */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-sm sm:text-base font-semibold text-center">
                        {image.branch} / {image.salon} Salon
                      </p>
            </div>
                    {/* Primary glow on hover */}
                    <div className="absolute inset-0 ring-2 ring-[#a4585a]/0 group-hover:ring-[#a4585a]/50 transition-all duration-500 rounded-xl md:rounded-2xl"></div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16 md:py-20">
              <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-lg border border-primary/20">
            <div className="mb-6 md:mb-8">
              <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto">
                <div className="absolute inset-0 border-3 md:border-4 border-primary/20 rounded-full"></div>
                <div className="absolute inset-0 border-3 md:border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
                <div className="absolute inset-2 border-3 md:border-4 border-primary/10 rounded-full"></div>
                <div className="absolute inset-2 border-3 md:border-4 border-transparent border-t-primary/60 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary/50 mb-3 md:mb-4">
                  Galeri Görselleri Yükleniyor...
            </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-primary/40 font-light">
                  Görselleriniz Çok Yakında Burada
                </p>
          </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-[#a4585a] transition-colors z-10"
              aria-label="Kapat"
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-black/50" style={{ boxShadow: '0 25px 50px -12px rgba(164, 88, 90, 0.5)' }}>
              <OptimizedImage
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain max-h-[85vh]"
                objectFit="contain"
                loading="eager"
                placeholder="empty"
              />
              {/* Şube ve Salon Bilgisi - Lightbox'ta */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-white text-lg sm:text-xl font-semibold text-center">
                  {selectedImage.branch} / {selectedImage.salon} Salon
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
