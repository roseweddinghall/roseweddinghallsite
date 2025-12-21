import React, { useState, useEffect, useRef } from 'react';
import { acquireImageSlot } from '../utils/imageQueue';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  priority?: boolean; // Kritik görseller için
  placeholder?: 'blur' | 'empty';
  onLoad?: () => void;
  onError?: () => void;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  renderError?: () => React.ReactNode; // Özel error fallback
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  style,
  loading = 'lazy',
  priority = false,
  placeholder = 'blur',
  onLoad,
  onError,
  objectFit = 'cover',
  renderError,
}) => {
  const shouldLoadImmediately = priority || loading === 'eager';
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(shouldLoadImmediately); // Priority görseller hemen yüklenir
  const [canStartLoading, setCanStartLoading] = useState(shouldLoadImmediately);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const releaseSlotRef = useRef<(() => void) | null>(null);
  const hasStartedLoadingRef = useRef(false);

  useEffect(() => {
    // src değiştiğinde state'i sıfırla
    setIsLoaded(false);
    setHasError(false);
    setIsInView(shouldLoadImmediately);
    setCanStartLoading(shouldLoadImmediately);
    hasStartedLoadingRef.current = false;
    if (releaseSlotRef.current) {
      releaseSlotRef.current();
      releaseSlotRef.current = null;
    }
  }, [src, shouldLoadImmediately]);

  // Intersection Observer ile görsel viewport'a girdiğinde yükle
  useEffect(() => {
    if (shouldLoadImmediately) {
      setIsInView(true);
      setCanStartLoading(true);
      return;
    }

    if (!containerRef.current) return;

    // Intersection Observer oluştur - daha erken yükleme için rootMargin artırıldı
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.disconnect();
          }
        });
      },
      {
        rootMargin: '200px 0px', // Viewport'tan 200px önce yüklemeye başla (daha erken)
        threshold: 0.01,
      }
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [shouldLoadImmediately]);

  // Preload kritik görseller - hemen yükle
  useEffect(() => {
    if (priority && !isLoaded) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      // fetchPriority özelliği bazı tarayıcılarda destekleniyor
      if ('fetchPriority' in link) {
        (link as any).fetchPriority = 'high';
      }
      document.head.appendChild(link);

      // Hemen yüklemeyi başlat
      const img = new Image();
      img.src = src;
      img.decode().catch(() => {
        // Decode hatası olsa bile devam et
      });

      return () => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      };
    }
  }, [priority, src, isLoaded]);

  useEffect(() => {
    // Priority görseller için slot'a gerek yok, hemen yükle
    if (shouldLoadImmediately) {
      hasStartedLoadingRef.current = true;
      setCanStartLoading(true);
      return;
    }

    if (!isInView || canStartLoading) {
      return;
    }

    releaseSlotRef.current = acquireImageSlot(() => {
      hasStartedLoadingRef.current = true;
      setCanStartLoading(true);
    });

    return () => {
      if (!hasStartedLoadingRef.current && releaseSlotRef.current) {
        releaseSlotRef.current();
        releaseSlotRef.current = null;
      }
    };
  }, [isInView, canStartLoading, shouldLoadImmediately]);

  const releaseSlot = () => {
    if (releaseSlotRef.current) {
      releaseSlotRef.current();
      releaseSlotRef.current = null;
    }
    hasStartedLoadingRef.current = false;
  };

  const handleLoad = () => {
    setIsLoaded(true);
    releaseSlot();
    onLoad?.();
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    releaseSlot();
    onError?.();
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      {/* Placeholder - Daha görünür ve renkli gradient */}
      {!isLoaded && !hasError && placeholder === 'blur' && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-gray-100 animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary/40"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Actual Image */}
      {isInView && canStartLoading && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : loading}
          decoding="async"
          className={`w-full h-full transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            objectFit,
            ...style,
          }}
          onLoad={handleLoad}
          onError={handleError}
          fetchPriority={priority ? 'high' : 'auto'}
        />
      )}

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          {renderError ? (
            renderError()
          ) : (
            <div className="text-center text-gray-400">
              <svg
                className="w-16 h-16 mx-auto mb-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
              </svg>
              <p className="text-sm font-medium">Görsel yüklenemedi</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;

