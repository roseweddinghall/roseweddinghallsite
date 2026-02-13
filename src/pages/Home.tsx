import React, { useEffect, useRef } from 'react';

import HeroSlider from '../components/HeroSlider';
import IsoButton from '../components/IsoButton';
import IsoCard from '../components/IsoCard';
import CreativeGallery from '../components/CreativeGallery';

const Home: React.FC = () => {
  const salonSectionRef = useRef<HTMLDivElement>(null);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const cardsSectionRef = useRef<HTMLDivElement>(null);

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

    createObserver(salonSectionRef, 'animate-fade-in-up');
    createObserver(statsSectionRef, 'animate-fade-in-up');
    createObserver(cardsSectionRef, 'animate-fade-in-up');

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const heroSlides = [
    {
      image: "/images/hero/hero-slide-1.jpg.JPG",
      title: "Sizin Hikayeniz,",
      subtitle: "Bizim Sahnemiz"
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

  const galleryImages = [
    { src: "/images/images1.jpg.JPG", alt: "Düğün görseli 1", layout: 'wide' as const, overlap: 'none' as const },
    { src: "/images/images2.jpg.JPG", alt: "Düğün görseli 2", layout: 'wide' as const, overlap: 'none' as const },
    { src: "/images/images5.jpg.PNG", alt: "Düğün görseli 5", layout: 'small' as const, overlap: 'none' as const },
    { src: "/images/images6.jpg.PNG", alt: "Düğün görseli 6", layout: 'small' as const, overlap: 'none' as const },
    { src: "/images/images7.jpg.PNG", alt: "Düğün görseli 7", layout: 'small' as const, overlap: 'none' as const },
    { src: "/images/images3.jpg.jpeg", alt: "Düğün görseli 3", layout: 'wide' as const, overlap: 'none' as const },
    { src: "/images/images4.jpg.png", alt: "Düğün görseli 4", layout: 'wide' as const, overlap: 'none' as const },
  ];

  const stats = [
    { number: "300+", label: "MUTLU DÜĞÜN" },
    { number: "2", label: "ŞUBE" },
    { number: "8+", label: "YILLIK DENEYİM" },
    { number: "92%", label: "MÜŞTERİ MEMNUNİYETİ" }
  ];

  return (
    <div className="min-h-screen bg-white font-iso">
      {/* Hero Section - Isomorphic Labs Style */}
      <section className="relative bg-gradient-to-br from-rose-50/50 via-white to-rose-50/30 border-b border-rose-100/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 pt-32 pb-16 lg:pt-48 lg:pb-24">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-display font-medium leading-tight mb-6 text-gradient">
                Hayalinizdeki Düğün
                <br />
                Burada Başlıyor
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Modern estetiği geleneksel misafirperverlikle harmanladık; bu eşsiz atmosferde mutluluğunuza eşlik ediyoruz.
              </p>
            </div>

            {/* Right - Hero Slider */}
            <div className="lg:col-span-7 relative lg:h-[450px] xl:h-[550px]">
              <HeroSlider slides={heroSlides} autoPlayInterval={0} />
            </div>
          </div>
        </div>
      </section>


      {/* Gallery Section */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-gradient">
              Özel Anlardan Kareler
            </h2>
          </div>

          {galleryImages.length > 0 ? (
            <CreativeGallery images={galleryImages} />
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg mb-4">Görseller yükleniyor...</p>
            </div>
          )}
        </div>
      </section>

      {/* Salons Section */}
      <section ref={salonSectionRef} className="py-4 lg:py-8 bg-white opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium mb-4 text-gradient">
              Salonlarımız
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Her biri özel tasarım ve konseptle hazırlanmış salonlarımızda,
              <br />
              hayalinizdeki düğünü gerçekleştirin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Etimesgut Salon */}
            <div className="group relative overflow-hidden rounded-lg border border-iso-border bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/angel.JPG"
                  alt="Etimesgut Salon"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-mint-400 rounded-sm"></span>
                  <span className="text-xs font-iso font-medium uppercase tracking-wider text-gray-600">
                    ERYAMAN
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-medium mb-3 text-gradient transition-all duration-300">
                  Etimesgut
                </h3>
                <p className="text-gray-600 mb-4">
                  Modern tasarımın güçlü çizgileriyle dikkat çeken ferah ve aydınlık salonlarımız,
                  geleneksel sıcaklığı kaybetmeden sizlere şık, konforlu ve unutulmaz bir deneyim sunar.
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                  <span className="text-sm font-iso text-gray-500">Maksimum Kapasite: 600 kişi</span>
                  <IsoButton to="/eryaman" size="sm" className="btn-ghost-gradient text-gradient font-bold">
                    DETAYLAR
                  </IsoButton>
                </div>
              </div>
            </div>

            {/* Yenimahalle Salon */}
            <div className="group relative overflow-hidden rounded-lg border border-iso-border bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/salon-angel-ivedik.jpg.JPG"
                  alt="Yenimahalle Salon"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-mint-400 rounded-sm"></span>
                  <span className="text-xs font-iso font-medium uppercase tracking-wider text-gray-600">
                    İVEDİK
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-medium mb-3 text-gradient transition-all duration-300">
                  Yenimahalle
                </h3>
                <p className="text-gray-600 mb-4">
                  Modern, antik ve bohem tarzların bir araya geldiği konseptlerimiz ile
                  zarafetin özgünlük ile harmanı...
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                  <span className="text-sm font-iso text-gray-500">Maksimum Kapasite: 800 kişi</span>
                  <IsoButton to="/ivedik" size="sm" className="btn-ghost-gradient text-gradient font-bold">
                    DETAYLAR
                  </IsoButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards - Isomorphic Labs Style */}
      <section ref={cardsSectionRef} className="py-8 lg:py-12 bg-white opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <IsoCard
              label="YORUMLAR"
              gradientBorder={true}
              className="hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium mb-6 text-gradient">
                Mutluluğa 'Evet' diyen çiftlerimizin deneyimleri.
              </h3>
              <IsoButton to="/yorumlar" size="sm" className="btn-solid-gradient">
                TÜM YORUMLAR
              </IsoButton>
            </IsoCard>

            <IsoCard
              label="GALERİ"
              gradientBorder={true}
              className="hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium mb-6 text-gradient">
                Düğünlerimizden unutulmaz kareler ve anılar.
              </h3>
              <IsoButton to="/galeri" size="sm" className="btn-solid-gradient">
                GALERİ
              </IsoButton>
            </IsoCard>

            <IsoCard
              label="İŞ BİRLİKLERİ"
              gradientBorder={true}
              className="hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium mb-6 text-gradient">
                Özel gün partnerlerimizle tanışın.
              </h3>
              <IsoButton to="/is-birlikleri" size="sm" className="btn-solid-gradient">
                PARTNERLER
              </IsoButton>
            </IsoCard>
          </div>
        </div>
      </section>

      {/* Stats Section - Animated Bubbles */}
      <section ref={statsSectionRef} className="py-10 lg:py-16 bg-white relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-rose-100/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-mint-100/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-10%] left-1/2 w-72 h-72 bg-rose-100/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md transition-all duration-500 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium mb-2 transition-transform duration-300 group-hover:scale-110 text-gradient">
                  {stat.number}
                </div>
                <div className="text-sm font-iso font-medium uppercase tracking-wider text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Cards Section */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* FAQ Card */}
            <IsoCard
              label="SSS"
              gradientBorder={true}
              className="lg:p-12"
            >
              <h3 className="text-2xl lg:text-3xl font-display font-medium mb-4 text-gradient">
                Düğününüze dair merak ettikleriniz
              </h3>
              <p className="text-gray-600 mb-6">
                Salonlarımız ve organizasyon süreciniz hakkında en sık sorulan soruları sizler için yanıtladık.
              </p>
              <IsoButton to="/sikca-sorulan-sorular" className="btn-solid-gradient">
                TÜM SORULAR
              </IsoButton>
            </IsoCard>

            {/* Instagram Card */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 border border-iso-border rounded-lg p-8 lg:p-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-pink-500 rounded-sm"></span>
                <span className="text-xs font-iso font-medium uppercase tracking-wider text-gray-600">
                  INSTAGRAM
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-display font-medium text-gray-900 mb-4">
                Bizi takip edin
              </h3>
              <p className="text-gray-600 mb-6">
                Düğünlerimizden, salonlarımızdan ve özel anlarımızdan kareleri Instagram hesabımızda paylaşıyoruz.
              </p>
              <a
                href="https://www.instagram.com/rose_weddinghall"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-iso font-medium uppercase tracking-wider hover:from-pink-600 hover:to-purple-700 transition-all duration-300 rounded-full"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                TAKİP ET
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
