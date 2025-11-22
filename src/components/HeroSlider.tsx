import React, { useState, useEffect } from 'react';
import OptimizedImage from './OptimizedImage';

interface Slide {
  image: string;
  title: string;
  subtitle?: string;
}

interface HeroSliderProps {
  slides: Slide[];
  autoPlayInterval?: number; // milliseconds
}

const HeroSlider: React.FC<HeroSliderProps> = ({ 
  slides, 
  autoPlayInterval = 5000 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [preloadedSlides, setPreloadedSlides] = useState<Set<number>>(new Set([0]));

  // İlk slide'ı ve bir sonraki slide'ı preload et
  useEffect(() => {
    if (slides.length === 0) return;

    // İlk slide'ı hemen preload et
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    // İlk slide'ı preload et
    if (slides[0]) {
      preloadImage(slides[0].image);
    }

    // Bir sonraki slide'ı preload et
    if (slides.length > 1 && slides[1]) {
      preloadImage(slides[1].image);
      setPreloadedSlides(new Set([0, 1]));
    }
  }, [slides]);

  // Mevcut slide değiştiğinde bir sonraki slide'ı preload et
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
    if (!isAutoPlaying || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
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
    <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden rounded-2xl shadow-2xl">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image - Optimized */}
          <OptimizedImage
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full z-0"
            objectFit="cover"
            priority={index === 0}
            loading={index === 0 ? 'eager' : 'lazy'}
            placeholder="blur"
            style={{
              objectPosition: 'center',
            }}
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 z-[1]"></div>

          {/* Slide Content - Text Overlay */}
          {slide.title && (
            <div className="absolute inset-0 z-[2] flex items-center justify-center">
              <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-classic font-bold text-white mb-4" style={{
                  textShadow: '1px 1px 4px rgba(164, 88, 90, 0.3), 0 0 12px rgba(164, 88, 90, 0.2)',
                }}>
                  {slide.title}
                </h2>
                {slide.subtitle && (
                  <p className="text-2xl md:text-3xl lg:text-4xl font-classic text-white font-semibold">
                    {slide.subtitle}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Önceki slide"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Sonraki slide"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                index === currentSlide
                  ? 'w-8 bg-white'
                  : 'w-3 bg-white/50 hover:bg-white/75'
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

