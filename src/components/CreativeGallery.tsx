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
  // İlk 8 görseli hemen görünür yap
  const [visibleImages, setVisibleImages] = useState<Set<number>>(
    new Set(images.slice(0, 8).map((_, i) => i))
  );
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    imageRefs.current.forEach((ref, index) => {
      if (!ref) return;
      // İlk 8 görsel zaten görünür, observer'a gerek yok
      if (index < 8) return;

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
        // 1 sütun - küçük kare
        return `${baseClasses} col-span-1`;
      case 'medium':
        // 2 sütun - orta boyut kare
        return `${baseClasses} col-span-2`;
      case 'large':
        // 2 sütun - büyük kare
        return `${baseClasses} col-span-2`;
      case 'wide':
        // 2 sütun genişlik
        return `${baseClasses} col-span-2`;
      case 'tall':
        // 1 sütun genişlik, 2 satır yükseklik
        return `${baseClasses} col-span-1 row-span-2`;
      default:
        return `${baseClasses} col-span-1`;
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        style={{
          gridAutoRows: 'minmax(200px, auto)',
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
              <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-100 border-2 border-luxury-gold/10 hover:border-luxury-gold/40 group-hover:scale-[1.02] group-hover:-translate-y-1">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  objectFit="cover"
                  loading={index < 8 ? 'eager' : 'lazy'}
                  priority={index < 4}
                  placeholder="blur"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Altın glow on hover */}
                <div className="absolute inset-0 ring-2 ring-luxury-gold/0 group-hover:ring-luxury-gold/30 transition-all duration-500 rounded-xl md:rounded-2xl"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreativeGallery;

