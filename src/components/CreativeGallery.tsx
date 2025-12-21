import React, { useEffect, useRef, useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface GalleryImage {
  src: string;
  alt: string;
  layout?: 'small' | 'medium' | 'large' | 'wide' | 'tall';
  overlap?: 'none' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  rotation?: number;
}

interface CreativeGalleryProps {
  images: GalleryImage[];
}

const CreativeGallery: React.FC<CreativeGalleryProps> = ({ images }) => {
  // İlk 12 görseli hemen görünür yap (daha fazla görsel hızlı yüklensin)
  const [visibleImages, setVisibleImages] = useState<Set<number>>(
    new Set(images.slice(0, 12).map((_, i) => i))
  );
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // İlk görselleri agresif şekilde preload et
  useEffect(() => {
    images.slice(0, 12).forEach((image) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = image.src;
      if ('fetchPriority' in link) {
        (link as any).fetchPriority = 'high';
      }
      document.head.appendChild(link);
    });
  }, [images]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    imageRefs.current.forEach((ref, index) => {
      if (!ref) return;
      // İlk 12 görsel zaten görünür, observer'a gerek yok
      if (index < 12) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleImages((prev) => new Set([...Array.from(prev), index]));
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '100px 0px' }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [images]);

  const getLayoutClasses = (layout: string = 'small', index: number): string => {
    const baseClasses = 'relative group cursor-pointer transition-all duration-700';
    
    switch (layout) {
      case 'small':
        // 2 sütun - küçük kare (6 sütunlu grid'de 3 tane yan yana)
        return `${baseClasses} col-span-2`;
      case 'medium':
        // 2 sütun - orta boyut kare
        return `${baseClasses} col-span-2`;
      case 'large':
        // 2 sütun - büyük kare
        return `${baseClasses} col-span-2`;
      case 'wide':
        // 3 sütun genişlik (6 sütunlu grid'de 2 tane yan yana)
        return `${baseClasses} col-span-3`;
      case 'tall':
        // 1 sütun genişlik, 2 satır yükseklik
        return `${baseClasses} col-span-1 row-span-2`;
      default:
        return `${baseClasses} col-span-2`;
    }
  };

  const getAspectRatio = (layout: string = 'small'): string => {
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

  const getOverlapStyle = (overlap: string = 'none', index: number): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {};
    
    switch (overlap) {
      case 'top-left':
        return { ...baseStyle, marginTop: '-25px', marginLeft: '-15px', zIndex: 10 + index };
      case 'top-right':
        return { ...baseStyle, marginTop: '-25px', marginRight: '-15px', zIndex: 10 + index };
      case 'bottom-left':
        return { ...baseStyle, marginBottom: '-25px', marginLeft: '-15px', zIndex: 10 + index };
      case 'bottom-right':
        return { ...baseStyle, marginBottom: '-25px', marginRight: '-15px', zIndex: 10 + index };
      default:
        return { ...baseStyle, zIndex: 1 };
    }
  };

  const getRotation = (rotation: number | undefined, index: number): number => {
    if (rotation !== undefined) return rotation;
    // Rastgele hafif rotasyonlar (sadece bazı görsellerde)
    const rotations = [0, 0, 0, 0, -2, 2, -1.5, 1.5, 0, 0];
    return rotations[index % rotations.length];
  };

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
      <div 
        className="grid grid-cols-2 md:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6"
        style={{
          gridAutoRows: 'minmax(150px, auto)',
        }}
      >
        {images.map((image, index) => {
          const isVisible = visibleImages.has(index);
          const rotation = getRotation(image.rotation, index);
          const overlapStyle = getOverlapStyle(image.overlap, index);
          const layoutClasses = getLayoutClasses(image.layout, index);
          const aspectRatio = getAspectRatio(image.layout);

          return (
            <div
              key={index}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className={`${layoutClasses} ${aspectRatio}`}
              style={{
                transform: isVisible 
                  ? `translateY(0) rotate(${rotation}deg)` 
                  : `translateY(40px) rotate(${rotation}deg)`,
                opacity: isVisible ? 1 : 0,
                transition: `transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s, opacity 0.8s ease-out ${index * 0.05}s`,
                ...overlapStyle,
              }}
            >
              <div 
                className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 bg-gray-100 border-2 border-primary/20 hover:border-primary/60 group-hover:scale-[1.02] group-hover:-translate-y-1"
                style={{
                  boxShadow: '0 10px 25px -5px rgba(164, 88, 90, 0.4), 0 8px 10px -6px rgba(164, 88, 90, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px -5px rgba(164, 88, 90, 0.6), 0 15px 15px -6px rgba(164, 88, 90, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(164, 88, 90, 0.4), 0 8px 10px -6px rgba(164, 88, 90, 0.3)';
                }}
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  objectFit="cover"
                  loading={index < 16 ? 'eager' : 'lazy'} // Daha fazla görseli eager yükle
                  priority={index < 16} // İlk 16 görseli priority yap
                  placeholder="blur"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Primary glow on hover */}
                <div className="absolute inset-0 ring-2 ring-primary/0 group-hover:ring-primary/50 transition-all duration-500 rounded-xl md:rounded-2xl"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreativeGallery;

