import React, { useEffect, useRef, useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface ScrollSalonCardProps {
  salon: {
    name: string;
    description: string;
    capacity: number;
    image?: string;
  };
  direction: 'left' | 'right';
  priority?: boolean;
}

const ScrollSalonCard: React.FC<ScrollSalonCardProps> = ({
  salon,
  direction,
  priority = false,
}) => {
  // Priority kartları hemen görünür yap
  const [isVisible, setIsVisible] = useState(priority);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Priority kartları hemen göster
    if (priority) {
      setIsVisible(true);
      return;
    }

    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px 0px -100px 0px' }
    );

    const currentRef = cardRef.current;
    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [priority]);

  // Priority kartlar için animasyon yok, hemen görünür
  const getTransformClass = () => {
    if (priority || isVisible) {
      return 'translate-x-0';
    }
    return direction === 'left' ? '-translate-x-full' : 'translate-x-full';
  };

  return (
    <div
      ref={cardRef}
      className={`group transition-all duration-1000 h-full flex-1 ${
        isVisible || priority ? 'opacity-100' : 'opacity-0'
      } ${getTransformClass()}`}
    >
      <div className="bg-white rounded-3xl shadow-2xl hover:shadow-primary/20 transition-all duration-700 transform hover:-translate-y-4 border border-primary/10 hover:border-primary/30 overflow-hidden flex flex-col h-full">
        {/* Büyük Görsel Bölümü - Yatay Format (16:9) */}
        <div className="relative w-full aspect-video overflow-hidden flex-shrink-0">
          {salon.image ? (
            <>
              <OptimizedImage
                src={salon.image}
                alt={`${salon.name} Salon`}
                className="w-full h-full group-hover:scale-110 transition-transform duration-1000"
                objectFit="cover"
                loading={priority ? 'eager' : 'lazy'}
                placeholder="blur"
                priority={priority}
              />
              {/* Lüks overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
              {/* Primary glow efekti */}
              <div className="absolute inset-0 shadow-inner shadow-primary/10 group-hover:shadow-primary/20 transition-shadow duration-500"></div>
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-black">
              <div className="text-center text-gray-400">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                </svg>
                <p className="text-lg font-medium">{salon.name} Salon Görseli</p>
              </div>
            </div>
          )}
          
        </div>

        {/* İçerik Bölümü - Lüks */}
        <div className="p-8 md:p-10 bg-white flex flex-col flex-grow min-h-[180px]">
          <p className="text-gray-600 leading-relaxed text-xs md:text-sm mb-6 font-light">
            {salon.description}
          </p>
          
          <button className="w-full bg-transparent border-2 border-primary/30 text-primary px-8 py-3 rounded-full text-base font-bold hover:bg-primary/80 hover:text-white hover:border-primary/50 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 mt-auto">
            Salonları İncele
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollSalonCard;

