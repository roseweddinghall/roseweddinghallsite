import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hakkımızda</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            8 yılı aşkın sektör deneyimimizle, hayallerinizdeki düğünü Rose Wedding Hall markası altında gerçeğe dönüştürüyoruz.
          </p>
        </div>
      </section>

      {/* Ana İçerik */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hikayemiz</h2>
              <p className="text-gray-600 mb-4">
                8 yılı aşkın sektör deneyimi ve binlerce mutlu çiftin anılarıyla inşa ettiğimiz tecrübemizi, Rose Wedding Hall markası altında birleştirdik. Kuruluşumuzdan bu yana temel amacımız, her düğünü gerçekten eşsiz ve unutulmaz bir deneyime dönüştürmektir.
              </p>
              <p className="text-gray-600 mb-4">
                Bugün, 2 farklı şehirde konumlanan şubelerimizde, her biri özenle tasarlanmış 4 farklı konseptteki salonumuzla hizmet veriyoruz. Bu çeşitlilik, hayal ettiğiniz atmosfere mükemmel uyumu yakalamanızı sağlar.
              </p>
              <p className="text-gray-600">
                Organizasyonun her aşamasında görev alan profesyonel ve deneyimli ekibimiz, en ince detayı bile büyük bir titizlik ve samimiyetle ele alır. Yüksek kalite standartları ve detaylara verdiğimiz bu büyük özen sayesinde, düğününüzün beklentilerinizin ötesinde, tam anlamıyla eşsiz bir şekilde gerçekleşmesini garanti ediyoruz. Rose Wedding Hall olarak, hayatınızın en önemli "evet"ine şahitlik etmekten mutluluk duyuyoruz.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Düğün</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">8+</div>
                  <div className="text-gray-600">Yıl Deneyim</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <div className="text-gray-600">Şehir</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">Çalışan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Çalışmalarımızın temelini oluşturan değerlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kalite</h3>
              <p className="text-gray-600">
                Her detayda yüksek kalite standartlarımızı koruyor, mükemmellik için çalışıyoruz.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Güven</h3>
              <p className="text-gray-600">
                Müşterilerimizle kurduğumuz güven ilişkisi, başarımızın temel taşıdır.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">İnovasyon</h3>
              <p className="text-gray-600">
                Sürekli gelişim ve yenilik anlayışımızla sektörde öncü olmaya devam ediyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-8 bg-primary text-white rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
              <p className="text-primary-100">
                Her düğünün eşsiz olduğuna inanarak, çiftlerin hayallerindeki düğünü 
                gerçekleştirmeleri için gerekli tüm hizmetleri kaliteli, güvenilir ve 
                profesyonel bir şekilde sunmak.
              </p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h3>
              <p className="text-gray-600">
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
