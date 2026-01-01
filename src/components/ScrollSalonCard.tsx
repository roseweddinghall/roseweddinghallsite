import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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
      { threshold: 0.01, rootMargin: '400px 0px -100px 0px' } // Daha erken yükleme
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
      className={`group transition-all duration-1000 h-full flex-1 ${isVisible || priority ? 'opacity-100' : 'opacity-0'
        } ${getTransformClass()}`}
    >
      <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 border border-primary/5 hover:border-primary/15 overflow-hidden flex flex-col h-full" style={{ boxShadow: '0 8px 30px -8px rgba(164, 88, 90, 0.12), 0 4px 12px -4px rgba(164, 88, 90, 0.08)' }}>
        {/* Büyük Görsel Bölümü - Yatay Format (16:9) */}
        <div className="relative w-full aspect-video overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary-softest/30 via-primary-softer/20 to-primary-soft/30 rounded-t-3xl">
          {salon.image ? (
            <>
              <OptimizedImage
                src={salon.image}
                alt={`${salon.name} Salon`}
                className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                objectFit="cover"
                loading={priority ? 'eager' : 'lazy'}
                placeholder="empty"
                priority={priority}
              />
              {/* Isomorphic Labs tarzı yumuşak gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(164, 88, 90, 0.06) 0%, transparent 65%)',
                }}
              ></div>
              {/* Alt kısımda soluk fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/6 via-transparent to-transparent"></div>
              {/* Kenarlarda soluk glow */}
              <div className="absolute inset-0 ring-1 ring-primary/5 group-hover:ring-primary/15 transition-all duration-700"></div>
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
        <div className="p-6 sm:p-8 md:p-10 bg-white flex flex-col flex-grow min-h-[160px] sm:min-h-[180px]">
          <p className="text-gray-600 leading-relaxed text-xs sm:text-sm mb-4 sm:mb-6 font-light">
            {salon.description}
          </p>

          <Link
            to="/subelerimiz"
            className="w-full bg-transparent border-2 border-primary/30 text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-bold hover:bg-gradient-to-r hover:from-[#a4585a] hover:to-[#f6b0b0] hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 mt-auto text-center block"
          >
            Salonları İncele
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScrollSalonCard;

