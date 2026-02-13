import React from 'react';
import OptimizedImage from '../components/OptimizedImage';


const About: React.FC = () => {
  const whyUsFeatures = [
    {
      title: "Modern Salonlar",
      description: "Çağdaş mimariyi sıcak detaylarla buluşturuyor, her konseptte şık ve konforlu atmosferler sunuyoruz."
    },
    {
      title: "Uzman Ekip",
      description: "Deneyimli koordinasyon ekibimiz düğününüzün her anını titizlikle planlar, siz sadece anın tadını çıkarırsınız."
    },
    {
      title: "Güven",
      description: "Müşterilerimizle kurduğumuz güven ilişkisi, başarımızın temel taşıdır."
    },
    {
      title: "Kalite",
      description: "Her detayda yüksek kalite standartlarımızı koruyor, mükemmellik için çalışıyoruz."
    },
    {
      title: "İnovasyon",
      description: "Sürekli gelişim ve yenilik anlayışımızla sektörde öncü olmaya devam ediyoruz."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-iso">
      {/* Hero Section */}
      <section className="pt-32 pb-4 lg:pt-48 lg:pb-6 bg-gradient-to-br from-rose-50/50 via-white to-rose-50/30 border-b border-rose-100/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-gray-800 rounded-sm"></span>
                <span className="text-xs font-iso font-medium uppercase tracking-wider text-gray-600">
                  HAKKIMIZDA
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-gradient leading-tight mb-8">
                Hikayemiz
              </h1>
              <div className="space-y-6 text-base text-gray-600 leading-relaxed max-w-xl">
                <p>
                  8 yılı aşkın sektör deneyimi ve binlerce mutlu çiftin anılarıyla inşa ettiğimiz
                  tecrübemizi, <span className="text-gray-900 font-medium">Rose Wedding Hall</span> markası altında birleştirdik.
                  Kuruluşumuzdan bu yana temel amacımız, her düğünü gerçekten eşsiz ve unutulmaz bir deneyime dönüştürmektir.
                </p>
                <p>
                  Bugün, 2 farklı ilçede konumlanan şubelerimizde, her biri özenle tasarlanmış
                  4 farklı konseptteki salonumuzla hizmet veriyoruz. Bu çeşitlilik, hayal ettiğiniz
                  atmosfere mükemmel uyumu yakalamanızı sağlar.
                </p>
                <p>
                  Organizasyonun her aşamasında görev alan profesyonel ve deneyimli ekibimiz,
                  en ince detayı bile büyük bir titizlik ve samimiyetle ele alır. Siz sadece anın tadını çıkarırken,
                  geriye kalan her şeyi biz sizin için planlıyoruz.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-iso-border shadow-xl">
                <OptimizedImage
                  src="/images/about-story.jpg.JPG"
                  alt="Hikayemiz"
                  className="w-full h-full"
                  objectFit="cover"
                  loading="lazy"
                  placeholder="empty"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-6 lg:py-10 bg-iso-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-2 h-2 bg-gray-800 rounded-sm"></span>
              <span className="text-xs font-iso font-medium uppercase tracking-wider text-gray-600">
                NEDEN BİZ?
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium leading-tight max-w-3xl mx-auto text-gray-900">
              Hayalinizdeki düğünü <span className="text-gradient">gerçeğe</span> dönüştürmek için
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyUsFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-iso-border rounded-lg p-6 lg:p-8 hover:-translate-y-2 hover:shadow-xl hover:border-gray-300 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 bg-[#a4585a] rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></span>
                  <h3 className="text-xl lg:text-2xl font-display font-medium text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-8 lg:p-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-primary rounded-sm shadow-sm"></span>
                <span className="text-xs font-iso font-semibold uppercase tracking-widest text-[#a4585a]">
                  MİSYONUMUZ
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-display font-medium text-gray-900 mb-4">
                Hayalleri <span className="text-gradient">gerçeğe</span> dönüştürmek
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Her düğünün eşsiz olduğuna inanarak, çiftlerin hayallerindeki düğünü
                gerçekleştirmeleri için gerekli tüm hizmetleri kaliteli, güvenilir ve
                profesyonel bir şekilde sunmak.
              </p>
            </div>
            <div className="bg-gray-100/50 border border-gray-100 rounded-lg p-8 lg:p-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-primary rounded-sm shadow-sm"></span>
                <span className="text-xs font-iso font-semibold uppercase tracking-widest text-[#a4585a]">
                  VİZYONUMUZ
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-display font-medium text-gray-900 mb-4">
                Sektörde <span className="text-gradient">lider</span> olmak
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Türkiye'nin düğün organizasyonu alanındaki lider markası olmak,
                müşteri memnuniyetinde sektör standartlarını yükseltmek ve
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
