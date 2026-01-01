import React, { useState } from 'react';
import OptimizedImage from '../components/OptimizedImage';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  branch: string;
  salon: string;
  layout?: 'small' | 'medium' | 'large' | 'wide' | 'tall';
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Galeri görselleri - Buraya görsellerinizi ekleyebilirsiniz
  const galleryImages: GalleryImage[] = [
    // Örnek: Görsellerinizi buraya ekleyin
    // { id: 1, src: '/images/Gallery/etimesgutangel1.jpg', alt: 'Etimesgut Angel Salon', branch: 'Etimesgut', salon: 'Angel', layout: 'large' },
  ];

  const getLayoutClasses = (layout: string = 'medium'): string => {
    switch (layout) {
      case 'small': return 'col-span-1';
      case 'medium': return 'col-span-1 md:col-span-2';
      case 'large': return 'col-span-1 md:col-span-3';
      case 'wide': return 'col-span-1 md:col-span-3';
      case 'tall': return 'col-span-1 md:col-span-2 md:row-span-2';
      default: return 'col-span-1 md:col-span-2';
    }
  };

  const getAspectRatio = (layout: string = 'medium'): string => {
    switch (layout) {
      case 'small': return 'aspect-square';
      case 'wide': return 'aspect-[2/1]';
      case 'tall': return 'aspect-[1/2]';
      default: return 'aspect-square';
    }
  };

  return (
    <div className="min-h-screen bg-white font-iso">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-gradient-to-br from-mint-softest via-mint-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-gray-800 rounded-sm"></span>
              <span className="text-xs font-iso font-medium uppercase tracking-wider text-gray-600">
                GALERİ
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-gray-900 leading-tight mb-6">
              Unutulmaz anlardan öne çıkan kareler.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Salonlarımız, düğünlerimiz ve özel anlarımızdan görsellerle hayalinizdeki düğün için ilham alın.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-4 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {galleryImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {galleryImages.map((image) => {
                const layoutClasses = getLayoutClasses(image.layout);
                const aspectRatio = getAspectRatio(image.layout);

                return (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={`${layoutClasses} ${aspectRatio} relative group rounded-lg overflow-hidden border border-iso-border hover:border-gray-300 transition-all duration-500 hover:shadow-xl`}
                  >
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      objectFit="cover"
                      loading="lazy"
                      placeholder="empty"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white text-sm font-iso font-medium">
                        {image.branch} / {image.salon}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-6 lg:py-10 animate-fade-in">
              <div className="bg-iso-light border border-iso-border rounded-lg p-12 lg:p-16 max-w-2xl mx-auto flex flex-col items-center">
                <div className="w-20 h-20 mb-8 relative">
                  <div className="absolute inset-0 bg-mint-300 rounded-full opacity-20 animate-ping"></div>
                  <div className="relative w-full h-full bg-white border border-iso-border rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 border-2 border-mint-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                </div>
                <h2 className="text-2xl lg:text-3xl font-display font-medium text-gradient mb-4">
                  Galeri Görselleri Hazırlanıyor
                </h2>
                <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
                  En özel anlardan derlediğimiz seçkimiz çok yakında tüm detaylarıyla burada olacak.
                </p>
                <div className="mt-8 flex gap-2">
                  <div className="w-1.5 h-1.5 bg-mint-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-1.5 h-1.5 bg-mint-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1.5 h-1.5 bg-mint-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-colors"
              aria-label="Kapat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="rounded-lg overflow-hidden">
              <OptimizedImage
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain max-h-[85vh]"
                objectFit="contain"
                loading="eager"
                placeholder="empty"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-lg font-iso font-medium">
                  {selectedImage.branch} / {selectedImage.salon}
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
