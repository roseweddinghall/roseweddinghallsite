import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import ScrollSalonCard from '../components/ScrollSalonCard';
import CreativeGallery from '../components/CreativeGallery';

const Home: React.FC = () => {
  // Scroll animation için ref'ler
  const salonSectionRef = useRef<HTMLDivElement>(null);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const instagramSectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer ile scroll animasyonları
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const createObserver = (ref: React.RefObject<HTMLDivElement | null>, animationClass: string) => {
      const element = ref.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(animationClass);
              entry.target.classList.remove('opacity-0');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      observer.observe(element);
      observers.push(observer);
    };

    createObserver(salonSectionRef, 'animate-slide-in-left');
    createObserver(statsSectionRef, 'animate-fade-in-up');
    createObserver(instagramSectionRef, 'animate-fade-in-up');

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);


  const heroSlides = [
    {
      image: "/images/hero/hero-slide-1.jpg.JPG",
      title: "Hayalinizdeki Düğün",
      subtitle: "Burada Başlıyor"
    },
    {
      image: "/images/hero/hero-slide-2.jpg.JPG",
      title: "Unutulmaz Anların Mimari",
      subtitle: "Profesyonel Ekibimiz"
    },
    {
      image: "/images/hero/hero-slide-3.jpg.jpg",
      title: "Farklı Konseptler",
      subtitle: "Modern Salonlar"
    }
  ];

  const salonData = [
    {
      branch: "Etimesgut",
      salons: [
        {
          name: "Etimesgut Salon",
          description: "Modern tasarımın güçlü çizgileriyle dikkat çeken ferah ve aydınlık salonlarımız, geleneksel sıcaklığı kaybetmeden sizlere şık, konforlu ve unutulmaz bir deneyim sunar.",
          capacity: 600,
          image: "/images/angel.JPG"
        }
      ]
    },
    {
      branch: "Yenimahalle",
      salons: [
        {
          name: "Yenimahalle Salon",
          description: "Modern, antik ve bohem tarzların bir araya geldiği konseptlerimiz ile zarafetin özgünlük ile harmanı...",
          capacity: 800,
          image: "/images/salon-angel-ivedik.jpg.JPG"
        }
      ]
    }
  ];

  // Galeri görselleri - 3 satır: 2 yatay, 3 kare, 2 yatay
  const galleryImages = [
    // İlk satır: 2 yatay görsel
    { src: "/images/images1.jpg.JPG", alt: "Düğün görseli 1", layout: 'wide' as const, overlap: 'none' as const },
    { src: "/images/images2.jpg.JPG", alt: "Düğün görseli 2", layout: 'wide' as const, overlap: 'none' as const },
    // İkinci satır: 3 küçük kare
    { src: "/images/images5.jpg.PNG", alt: "Düğün görseli 5", layout: 'small' as const, overlap: 'none' as const },
    { src: "/images/images6.jpg.PNG", alt: "Düğün görseli 6", layout: 'small' as const, overlap: 'none' as const },
    { src: "/images/images7.jpg.PNG", alt: "Düğün görseli 7", layout: 'small' as const, overlap: 'none' as const },
    // Üçüncü satır: 2 yatay görsel
    { src: "/images/images3.jpg.jpg", alt: "Düğün görseli 3", layout: 'wide' as const, overlap: 'none' as const },
    { src: "/images/images4.jpg.png", alt: "Düğün görseli 4", layout: 'wide' as const, overlap: 'none' as const },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Slider */}
      <section className="relative py-8 lg:py-12 overflow-hidden z-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Slider */}
          <HeroSlider slides={heroSlides} autoPlayInterval={5000} />
          
          {/* Call to Action Buttons - Lüks tasarım */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 sm:mt-12 animate-fade-in-up px-4">
            <Link 
              to="/subelerimiz" 
              className="group relative bg-transparent border-2 border-primary/30 text-primary px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-primary/80 hover:text-white hover:border-primary/50 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-primary/30 w-full sm:w-auto text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
              Salonları İncele
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link 
              to="/rezervasyon" 
              className="group relative bg-primary text-white px-8 sm:px-16 py-3 rounded-full font-bold text-base sm:text-lg shadow-md w-full sm:w-auto sm:min-w-[280px] text-center"
            >
              <span className="relative z-10 flex flex-col items-center justify-center gap-1">
                <span className="text-xs sm:text-sm font-medium">Fiyat Teklifi için</span>
                <span>Size Ulaşalım</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Yaratıcı Görsel Galeri Bölümü */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-10 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Yaratıcı Grid Galeri - 4 Sütunlu, Farklı Boyutlar */}
          {galleryImages.length > 0 ? (
            <CreativeGallery images={galleryImages} />
          ) : (
            <div className="text-center py-12 sm:py-16 md:py-20">
              <p className="text-gray-500 text-base sm:text-lg mb-4">Görseller yükleniyor...</p>
              <p className="text-gray-400 text-xs sm:text-sm">
                Görselleri <code className="bg-gray-100 px-2 py-1 rounded">public/images/</code> klasörüne yükleyin
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Salonlar Bölümü - Lüks Tasarım */}
      <section ref={salonSectionRef} className="pt-8 sm:pt-12 pb-10 sm:pb-12 md:pb-16 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Dekoratif elementler */}
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-classic font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-600 to-primary-700">
                Salonlarımız
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-3 sm:mb-4"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-light px-4">
              Her biri özel tasarım ve konseptle hazırlanmış salonlarımızda, hayalinizdeki düğünü gerçekleştirin.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 lg:items-stretch">
            {salonData.map((branch, branchIndex) => (
              <div key={branchIndex} className="flex flex-col">
                <div className="text-center mb-8 sm:mb-10 md:mb-12 flex-shrink-0">
                  <h3 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-classic font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-700 mb-3 sm:mb-4"
                    style={{
                      filter: 'drop-shadow(0 2px 4px rgba(164, 88, 90, 0.3)) drop-shadow(0 4px 8px rgba(164, 88, 90, 0.2))',
                    }}
                  >
                    {branch.branch}
                  </h3>
                  <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary/50 to-primary/80 mx-auto"></div>
                </div>
                
                <div className="flex-1 flex">
                  {branch.salons.map((salon, salonIndex) => {
                    const isLeft = salonIndex % 2 === 0;
                    return (
                      <ScrollSalonCard
                        key={salonIndex}
                        salon={salon}
                        direction={isLeft ? 'left' : 'right'}
                        priority={true}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İstatistikler - Lüks */}
      <section ref={statsSectionRef} className="py-8 sm:py-10 md:py-12 bg-gradient-to-r from-primary/5 via-primary/8 to-primary/5 relative overflow-hidden opacity-0">
        {/* Animasyonlu Yuvarlaklar/Baloncuklar */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Büyük yuvarlaklar - farklı hızlarda yükselen */}
          <div className="absolute w-32 h-32 rounded-full bg-primary/20 blur-xl animate-bubble-rise-1 left-[10%]" style={{ animationDelay: '0s' }}></div>
          <div className="absolute w-40 h-40 rounded-full bg-primary/15 blur-2xl animate-bubble-rise-2 left-[25%]" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute w-28 h-28 rounded-full bg-primary/25 blur-xl animate-bubble-rise-3 left-[45%]" style={{ animationDelay: '3s' }}></div>
          <div className="absolute w-36 h-36 rounded-full bg-primary/18 blur-2xl animate-bubble-rise-4 left-[60%]" style={{ animationDelay: '2s' }}></div>
          <div className="absolute w-24 h-24 rounded-full bg-primary/22 blur-xl animate-bubble-rise-5 left-[75%]" style={{ animationDelay: '4s' }}></div>
          <div className="absolute w-44 h-44 rounded-full bg-primary/12 blur-2xl animate-bubble-rise-6 left-[85%]" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Orta boy yuvarlaklar */}
          <div className="absolute w-20 h-20 rounded-full bg-primary/20 blur-lg animate-bubble-rise-2 left-[15%]" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute w-16 h-16 rounded-full bg-primary/25 blur-lg animate-bubble-rise-4 left-[35%]" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-22 h-22 rounded-full bg-primary/18 blur-lg animate-bubble-rise-1 left-[55%]" style={{ animationDelay: '3.5s' }}></div>
          <div className="absolute w-18 h-18 rounded-full bg-primary/22 blur-lg animate-bubble-rise-3 left-[70%]" style={{ animationDelay: '1.8s' }}></div>
          <div className="absolute w-26 h-26 rounded-full bg-primary/15 blur-lg animate-bubble-rise-5 left-[80%]" style={{ animationDelay: '0.8s' }}></div>
          
          {/* Küçük yuvarlaklar - daha hızlı */}
          <div className="absolute w-12 h-12 rounded-full bg-primary/30 blur-md animate-bubble-rise-6 left-[20%]" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute w-10 h-10 rounded-full bg-primary/28 blur-md animate-bubble-rise-3 left-[40%]" style={{ animationDelay: '2.2s' }}></div>
          <div className="absolute w-14 h-14 rounded-full bg-primary/25 blur-md animate-bubble-rise-1 left-[50%]" style={{ animationDelay: '1.3s' }}></div>
          <div className="absolute w-8 h-8 rounded-full bg-primary/32 blur-md animate-bubble-rise-4 left-[65%]" style={{ animationDelay: '3.2s' }}></div>
          <div className="absolute w-16 h-16 rounded-full bg-primary/20 blur-md animate-bubble-rise-2 left-[90%]" style={{ animationDelay: '0.7s' }}></div>
          
          {/* Ekstra küçük detaylar */}
          <div className="absolute w-6 h-6 rounded-full bg-primary/35 blur-sm animate-bubble-rise-5 left-[30%]" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute w-7 h-7 rounded-full bg-primary/30 blur-sm animate-bubble-rise-3 left-[65%]" style={{ animationDelay: '2.8s' }}></div>
          <div className="absolute w-5 h-5 rounded-full bg-primary/40 blur-sm animate-bubble-rise-1 left-[50%]" style={{ animationDelay: '0.4s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {[
              { number: "300+", label: "Mutlu Düğün" },
              { number: "2", label: "Şube" },
              { number: "8+", label: "Yıllık Deneyim" },
              { number: "92%", label: "Müşteri Memnuniyeti" }
            ].map((stat, index) => (
              <div key={index} className="transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-elegant font-bold mb-2 sm:mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-600 to-primary-700 animate-pulse-slow">
                  {stat.number}
            </div>
                <div className="text-primary font-medium text-sm sm:text-base md:text-lg">{stat.label}</div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ve Instagram Bölümü - Yan Yana */}
      <section ref={instagramSectionRef} className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-gray-50 to-white opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 lg:items-stretch">
            {/* FAQ Bölümü - Sol Taraf */}
            <div className="text-center flex flex-col">
              <h2 className="text-xl md:text-2xl font-classic font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-600 to-primary-700 whitespace-nowrap">
                💍 Düğününüze Dair Merak Ettikleriniz
            </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-4"></div>
              <p className="text-lg text-gray-700 mb-6 font-light">
                Salonlarımız ve organizasyon süreciniz hakkında en sık sorulan soruları sizler için yanıtladık.
              </p>
              <Link
                to="/sikca-sorulan-sorular"
                className="inline-flex items-center justify-center bg-transparent border-2 border-primary/30 text-primary px-8 py-4 rounded-full font-bold text-base hover:bg-primary/80 hover:text-white hover:border-primary/50 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-primary/30 mx-auto mt-auto"
              >
                <span>Tüm Soruları Görüntüle</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
              </Link>
            </div>

            {/* Instagram Bölümü - Sağ Taraf */}
            <div className="text-center flex flex-col">
              <h2 className="text-xl md:text-2xl font-classic font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-600 to-primary-700 whitespace-nowrap">
                Instagram'da Bizi Takip Edin
            </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-4"></div>
              <p className="text-base text-gray-700 mb-6 font-light">
                Düğünlerimizden, salonlarımızdan ve özel anlarımızdan kareleri Instagram hesabımızda paylaşıyoruz. Hayalini kurduğunuz düğününüz için ilham alın!
            </p>
            <a 
              href="https://www.instagram.com/rose_weddinghall" 
              target="_blank" 
              rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-base hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-pink-500/50 mx-auto mt-auto"
            >
                <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram'da Takip Et
            </a>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
