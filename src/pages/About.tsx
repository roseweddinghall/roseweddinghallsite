import React from 'react';
import OptimizedImage from '../components/OptimizedImage';

const About: React.FC = () => {
  const whyUsFeatures = [
    {
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      title: "Modern Salonlar",
      description: "Çağdaş mimariyi sıcak detaylarla buluşturuyor, her konseptte şık ve konforlu atmosferler sunuyoruz."
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Uzman Ekip",
      description: "Deneyimli koordinasyon ekibimiz düğününüzün her anını titizlikle planlar, siz sadece anın tadını çıkarırsınız."
    },
    {
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      title: "Güven",
      description: "Müşterilerimizle kurduğumuz güven ilişkisi, başarımızın temel taşıdır."
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Kalite",
      description: "Her detayda yüksek kalite standartlarımızı koruyor, mükemmellik için çalışıyoruz."
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "İnovasyon",
      description: "Sürekli gelişim ve yenilik anlayışımızla sektörde öncü olmaya devam ediyoruz."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-8 overflow-hidden">
        {/* Soft gradient in bottom right corner */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#a4585a]/10 via-pink-50/5 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in text-gray-900">Hakkımızda</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-gray-700 font-light leading-relaxed tracking-wide animate-slide-up">
              <span className="font-medium text-[#a4585a]">8 yılı aşkın sektör deneyimimizle</span>, hayallerinizdeki düğünü 
              <span className="font-medium text-[#a4585a]"> Rose Wedding Hall </span>
              markası altında gerçeğe dönüştürüyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Ana İçerik */}
      <section className="py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Hikayemiz</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                8 yılı aşkın sektör deneyimi ve binlerce mutlu çiftin anılarıyla inşa ettiğimiz tecrübemizi, Rose Wedding Hall markası altında birleştirdik. Kuruluşumuzdan bu yana temel amacımız, her düğünü gerçekten eşsiz ve unutulmaz bir deneyime dönüştürmektir.
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Bugün, 2 farklı ilçede konumlanan şubelerimizde, her biri özenle tasarlanmış 4 farklı konseptteki salonumuzla hizmet veriyoruz. Bu çeşitlilik, hayal ettiğiniz atmosfere mükemmel uyumu yakalamanızı sağlar.
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Organizasyonun her aşamasında görev alan profesyonel ve deneyimli ekibimiz, en ince detayı bile büyük bir titizlik ve samimiyetle ele alır. Yüksek kalite standartları ve detaylara verdiğimiz bu büyük özen sayesinde, düğününüzün beklentilerinizin ötesinde, tam anlamıyla eşsiz bir şekilde gerçekleşmesini garanti ediyoruz. Rose Wedding Hall olarak, hayatınızın en önemli "evet"ine şahitlik etmekten mutluluk duyuyoruz.
              </p>
            </div>
            <div className="relative order-1 lg:order-2">
              {/* Görsel Container - Soluklaşma efekti */}
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
                {/* Ana görsel */}
                <OptimizedImage
                  src="/images/about-story.jpg.JPG"
                  alt="Hikayemiz"
                  className="w-full h-full"
                  objectFit="cover"
                  loading="lazy"
                  placeholder="blur"
                />
                
                {/* Sol üst köşeden soluklaşma - Beyaz gradient */}
                <div 
                  className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
                  style={{
                    background: 'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.5) 25%, rgba(255,255,255,0.2) 40%, transparent 60%)'
                  }}
                ></div>
                
                {/* Sağ alt köşeden soluklaşma - Pembe tonlu gradient */}
                <div 
                  className="absolute bottom-0 right-0 w-full h-full pointer-events-none z-10"
                  style={{
                    background: 'radial-gradient(circle at 100% 100%, rgba(164,88,90,0.4) 0%, rgba(164,88,90,0.25) 20%, rgba(164,88,90,0.1) 35%, transparent 55%)'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="py-6 sm:py-8 md:py-10 bg-gradient-to-b from-white via-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-classic font-bold text-primary mb-2 sm:mb-3">Neden Biz?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Hayalinizdeki düğünü gerçeğe dönüştürmek için, estetik detaylardan organizasyon akışına kadar her adımı özenle planlıyoruz.
            </p>
          </div>

          {/* İlk 3 Kart */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6">
            {whyUsFeatures.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="group h-full rounded-2xl sm:rounded-3xl border border-primary/10 bg-white/90 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500"
              >
                <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/15">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-classic font-semibold text-primary mb-2 sm:mb-3 text-center group-hover:text-primary-700 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow text-center">
                    {feature.description}
                  </p>

                  <div className="mt-4 sm:mt-5 md:mt-6 h-1 w-16 sm:w-20 mx-auto rounded-full bg-gradient-to-r from-primary/30 via-primary to-primary/50 transition-all duration-500 group-hover:w-20 sm:group-hover:w-24"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Son 2 Kart - Ortalanmış */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {whyUsFeatures.slice(3, 5).map((feature, index) => (
              <div
                key={index + 3}
                className="group h-full rounded-2xl sm:rounded-3xl border border-primary/10 bg-white/90 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 flex-1 max-w-md"
              >
                <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/15">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-classic font-semibold text-primary mb-2 sm:mb-3 text-center group-hover:text-primary-700 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow text-center">
                    {feature.description}
                  </p>

                  <div className="mt-4 sm:mt-5 md:mt-6 h-1 w-16 sm:w-20 mx-auto rounded-full bg-gradient-to-r from-primary/30 via-primary to-primary/50 transition-all duration-500 group-hover:w-20 sm:group-hover:w-24"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="group p-8 bg-primary/5 border border-primary/10 rounded-2xl hover:bg-primary/8 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2">
              <h3 className="text-2xl font-classic font-bold text-primary mb-4 group-hover:text-primary-700 transition-colors duration-300">Misyonumuz</h3>
              <p className="text-gray-700 leading-relaxed">
                Her düğünün eşsiz olduğuna inanarak, çiftlerin hayallerindeki düğünü 
                gerçekleştirmeleri için gerekli tüm hizmetleri kaliteli, güvenilir ve 
                profesyonel bir şekilde sunmak.
              </p>
            </div>
            <div className="group p-8 bg-primary/5 border border-primary/10 rounded-2xl hover:bg-primary/8 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2">
              <h3 className="text-2xl font-classic font-bold text-primary mb-4 group-hover:text-primary-700 transition-colors duration-300">Vizyonumuz</h3>
              <p className="text-gray-700 leading-relaxed">
                Türkiye'nin düğün organizasyonu alanındaki lider markası olmak, 
                müşteri memnuniyetinde sektör standardlarını yükseltmek ve 
                unutulmaz anılar yaratmaya devam etmek.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
