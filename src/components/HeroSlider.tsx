import React, { useState, useEffect } from 'react';
import OptimizedImage from './OptimizedImage';

interface Slide {
  image: string;
  title: string;
  subtitle?: string;
}

interface HeroSliderProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  autoPlayInterval = 5000
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [preloadedSlides, setPreloadedSlides] = useState<Set<number>>(new Set([0]));

  // Preload only first few slides to avoid network congestion
  useEffect(() => {
    if (slides.length === 0) return;

    // Sadece ilk 2 görseli hemen preload et
    slides.slice(0, 2).forEach((slide, index) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = slide.image;
      if ('fetchPriority' in link) {
        (link as any).fetchPriority = 'high';
      }
      document.head.appendChild(link);

      const img = new Image();
      img.src = slide.image;
      if ('fetchPriority' in img) {
        (img as any).fetchPriority = 'high';
      }
      img.decode().catch(() => { });
    });

    setPreloadedSlides(new Set([0, 1]));
  }, [slides]);

  useEffect(() => {
    if (slides.length <= 1) return;

    const nextSlideIndex = (currentSlide + 1) % slides.length;
    if (!preloadedSlides.has(nextSlideIndex)) {
      const img = new Image();
      img.src = slides[nextSlideIndex].image;
      setPreloadedSlides((prev) => {
        const newSet = new Set(Array.from(prev));
        newSet.add(nextSlideIndex);
        return newSet;
      });
    }
  }, [currentSlide, slides, preloadedSlides]);

  useEffect(() => {
    if (!isAutoPlaying || slides.length <= 1 || autoPlayInterval <= 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  if (slides.length === 0) return null;

  return (
    <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-lg border border-iso-border">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          {/* Background Image */}
          <OptimizedImage
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full z-0"
            objectFit="cover"
            priority={true}
            loading="eager"
            placeholder="empty"
            style={{
              objectPosition: 'center',
            }}
          />

          {/* Subtle overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)',
            }}
          ></div>

          {/* Slide Content */}
          {slide.title && (
            <div className="absolute top-8 left-8 right-8 z-[2] text-right">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-white mb-1">
                {slide.title}
              </h2>
              {slide.subtitle && (
                <p className="text-lg font-iso text-white/80">
                  {slide.subtitle}
                </p>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-full transition-all duration-300"
            aria-label="Önceki slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-full transition-all duration-300"
            aria-label="Sonraki slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 right-4 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 transition-all duration-300 ${index === currentSlide
                ? 'w-6 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
                }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSlider;
