import React, { useEffect, useRef, useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface ScrollImageProps {
  src: string;
  alt: string;
  direction?: 'left' | 'right';
  priority?: boolean;
  className?: string;
  height?: string;
}

const ScrollImage: React.FC<ScrollImageProps> = ({
  src,
  alt,
  direction = 'left',
  priority = false,
  className = '',
  height = 'h-[500px] md:h-[700px] lg:h-[900px]',
}) => {
  // Priority görselleri hemen görünür yap
  const [isVisible, setIsVisible] = useState(priority);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Priority görselleri hemen göster, observer'a gerek yok
    if (priority) {
      setIsVisible(true);
      return;
    }

    if (!imageRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px 0px -100px 0px' } // Daha erken tetikleme
    );

    const currentRef = imageRef.current;
    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [priority]);

  const paddingClass = direction === 'left' ? 'pl-0 pr-8 md:pr-16' : 'pl-8 md:pl-16 pr-0';
  
  // Transform değeri - scroll animasyonu için
  const getTransform = (): string => {
    if (priority || isVisible) {
      return 'translateX(0)';
    }
    return direction === 'left' ? 'translateX(-80px)' : 'translateX(80px)';
  };

  const getOpacity = (): number => {
    if (priority || isVisible) {
      return 1;
    }
    return 0.4; // Görseller görünür ama soluk
  };

  return (
    <div
      ref={imageRef}
      className={`group relative w-full ${paddingClass}`}
      style={{
        transform: getTransform(),
        opacity: getOpacity(),
        transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease-out'
      }}
    >
      <div
        className={`relative ${height} overflow-hidden rounded-3xl shadow-2xl border-4 border-luxury-gold/10 group-hover:border-luxury-gold/40 transition-all duration-500 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200`}
      >
        <OptimizedImage
          src={src}
          alt={alt}
          className="w-full h-full group-hover:scale-110 transition-transform duration-700"
          objectFit="cover"
          loading="lazy"
          placeholder="empty"
          priority={priority}
        />
        {/* Minimal overlay - açık arka plan için */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/5 transition-all duration-500"></div>
        {/* Altın glow efekti */}
        <div className="absolute inset-0 shadow-inner shadow-luxury-gold/10 group-hover:shadow-luxury-gold/30 transition-all duration-500 rounded-3xl"></div>
      </div>
    </div>
  );
};

export default ScrollImage;

