import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqData = [
    {
      question: "Salon kapasiteniz nedir?",
      answer: "4 farklı konseptteki salonlarımızda, 300 kişiden başlayarak 800 kişiye kadar misafir ağırlama kapasitesine sahibiz."
    },
    {
      question: "Menü seçenekleriniz neler?",
      answer: "Misafirlerinize özel olarak hazırlanan Kokteyl, Özel (Special), Beyaz Et ve Kırmızı Et olmak üzere zengin menü alternatifleri sunmaktayız. Düğün menünüzü kararlaştırmadan önce ücretsiz menü tadımı yapabilirsiniz."
    },
    {
      question: "Rezervasyon için ne kadar önceden başvurmalıyız?",
      answer: "Özellikle yoğun yaz dönemleri için en az 6 ay öncesinden rezervasyon yapmanızı öneririz. Ancak, düğün tarihinize yakın bir zamanda bile size en uygun alternatifleri sunmak için her zaman buradayız."
    },
    {
      question: "Otopark veya ulaşım kolaylığı var mı?",
      answer: "Evet, misafirleriniz için geniş ve ücretsiz otopark alanımız mevcuttur. Salonlarımıza tüm toplu taşıma araçlarıyla kolaylıkla ve rahatça ulaşım sağlanmaktadır."
    },
    {
      question: "Ses, ışık ve havalandırma sistemleri ne durumdadır?",
      answer: "Salonlarımızda en yeni teknolojiye sahip profesyonel ses ve ışık sistemleri ile tam kapasiteli modern bir havalandırma sistemi mevcuttur. Düğün boyunca konforlu bir ortam garanti edilmektedir."
    },
    {
      question: "Düğün günü organizasyon yöneticisi hizmeti veriyor musunuz?",
      answer: "Evet, hazırlık sürecinde ve düğün gününüz boyunca organizasyonun tüm akışını yönetecek, size özel bir düğün koçu görev almaktadır."
    },
    {
      question: "Mevsimsel avantajlar veya indirimler sunuyor musunuz?",
      answer: "Yoğun olmayan sezonlar (genellikle kış veya hafta içi günler) için özel paketler ve indirimli fiyat seçeneklerimiz mevcuttur. Güncel kampanyalarımız için lütfen bizimle iletişime geçin."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const salonData = [
    {
      branch: "Eryaman Şubesi",
      salons: [
        {
          name: "Angel",
          description: "Modern tasarımın güçlü çizgileriyle dikkat çeken ferah ve aydınlık bir salon. Büyük davetleriniz için şık, konforlu ve unutulmaz bir deneyim sunar.",
          capacity: 660,
          image: "/images/salon-angel-eryaman.jpg"
        },
        {
          name: "Amore", 
          description: "Geleneksel sıcaklık, modern estetikle buluştu. En yakınlarınızla, en özel anlarınızı yaşayacağınız şık ve butik bir atmosfer.",
          capacity: 220,
          image: "/images/salon-amore-eryaman.jpg"
        }
      ]
    },
    {
      branch: "İvedik Şubesi",
      salons: [
        {
          name: "Angel",
          description: "Antik ve modern tasarımın buluştuğu detaylar ile 800 kişiye kadar eşsiz deneyim. Zarafetin özgünlük ile harmanı...",
          capacity: 800,
          image: "/images/salon-angel-ivedik.jpg"
        },
        {
          name: "Amore",
          description: "Bohem şıklığı ve sıcak dokunuşlarıyla 600 kişilik samimi bir ortam. Klasiğin şıklık ile buluşması...",
          capacity: 600,
          image: "/images/salon-amore-ivedik.jpg"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 py-20 lg:py-32 overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent/30 rounded-full animate-pulse-slow"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <div className="animate-slow-gentle">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Hayalinizdeki Düğün
                </span>
              </div>
              <div className="animate-slow-gentle" style={{animationDelay: '0.5s'}}>
                <span className="block text-primary animate-pulse-slow">Burada Başlıyor</span>
              </div>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto animate-slide-up">
              Size özel tasarlanmış modern salonlarımızda, unutulmaz anlar yaşayın.<br/>
              Farklı konsept seçeneklerimiz ve profesyonel ekibimizle düğününüzü mükemmel bir organizasyona dönüştürüyoruz!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link to="/subelerimiz" className="bg-gradient-to-r from-primary to-primary-700 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                Salonları İncele
              </Link>
              <Link to="/rezervasyon" className="border-2 border-primary/80 bg-white/10 text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                Rezervasyon Yap
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Salonlar Bölümü */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Salonlarımız
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Her biri özel tasarım ve konseptle hazırlanmış salonlarımızda, hayalinizdeki düğünü gerçekleştirin.
            </p>
          </div>

          <div className="space-y-16">
            {salonData.map((branch, branchIndex) => (
              <div key={branchIndex}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{branch.branch}</h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {branch.salons.map((salon, salonIndex) => (
                    <div key={salonIndex} className="group">
                      <div className="bg-white rounded-2xl shadow-lg shadow-pink-200/50 hover:shadow-2xl hover:shadow-pink-300/60 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 overflow-hidden">
                        {/* Görsel Bölümü */}
                        <div className="relative h-64 bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 group-hover:from-pink-200 group-hover:via-purple-100 group-hover:to-rose-200 transition-all duration-700">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                              <svg className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                              </svg>
                              <p className="text-sm font-medium">{salon.name} Salon Görseli</p>
                            </div>
                          </div>
                          {/* Kapasite Etiketi */}
                          <div className="absolute top-4 right-4">
                            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-pink-300/50 hover:shadow-pink-400/60 transition-all duration-300 hover:scale-105">
                              {salon.capacity} kişi
                            </span>
                          </div>
                          {/* Salon İsmi */}
                          <div className="absolute bottom-4 left-4">
                            <h4 className="text-white text-xl font-bold bg-black/50 px-3 py-1 rounded-lg backdrop-blur-sm">
                              {salon.name}
                            </h4>
                          </div>
                        </div>

                        {/* İçerik Bölümü */}
                        <div className="p-6">
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {salon.description}
                          </p>
                          
                          <div className="mt-6 flex justify-between items-center">
                            <div className="flex items-center text-primary">
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              <span className="text-sm font-medium">Kapasite: {salon.capacity} kişi</span>
                            </div>
                            <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-pink-300/60 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5">
                              Detayları Gör
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Özellikler */}
      <section className="py-16 bg-gradient-to-br from-secondary-50 via-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Neden Biz?
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Düğün stresini bir kenara bırakın. Hayatınızın bu en özel gününde, her detayı sizin için düşündük ve size en iyi deneyimi sunmaya hazırız!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-lg shadow-pink-200/30 hover:shadow-2xl hover:shadow-pink-300/50 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 animate-slide-up group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-700 transition-colors duration-300">Modern Salonlar</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                Çağdaş mimari ve ileri teknoloji altyapımızla, düğününüze yakışan, hem estetik hem de konforlu, unutulmaz bir atmosfer yaratıyoruz.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg shadow-purple-200/30 hover:shadow-2xl hover:shadow-purple-300/50 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 animate-slide-up group" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" style={{animationDelay: '0.5s'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">Uzman Ekip</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                Deneyimli ve işine tutkuyla bağlı profesyonel ekibimiz, organizasyonunuzun her aşamasında yanınızda. Hayalinizdeki düğünü gerçeğe dönüştürmek için titizlikle çalışıyoruz.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-white to-rose-50 rounded-2xl shadow-lg shadow-rose-200/30 hover:shadow-2xl hover:shadow-rose-300/50 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 animate-slide-up group" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 via-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" style={{animationDelay: '1s'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-rose-700 transition-colors duration-300">Kalite Garantisi</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                Kurumsal standartlarımızdan ödün vermiyoruz. Sunduğumuz yüksek hizmet kalitesi ile düğününüzün en küçük aksaklık olmadan, kusursuz ve pürüzsüz geçmesini garanti altına alıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-16 bg-gradient-to-r from-primary via-secondary to-accent text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-bounce-gentle"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-pulse-slow">500+</div>
              <div className="text-primary-100 font-medium">Mutlu Düğün</div>
            </div>
            <div className="animate-fade-in transform hover:scale-110 transition-all duration-300" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-pulse-slow">2</div>
              <div className="text-secondary-100 font-medium">Şube</div>
            </div>
            <div className="animate-fade-in transform hover:scale-110 transition-all duration-300" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-pulse-slow">8+</div>
              <div className="text-accent-100 font-medium">Yıllık Deneyim</div>
            </div>
            <div className="animate-fade-in transform hover:scale-110 transition-all duration-300" style={{animationDelay: '0.6s'}}>
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-pulse-slow">98%</div>
              <div className="text-primary-100 font-medium">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Bölümü */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                💍 Düğününüze Dair Merak Ettikleriniz
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Salonlarımız hakkında en sık sorulan soruları yanıtladık.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-pink-100 rounded-xl transition-all duration-500 transform hover:-translate-y-1 hover:border-pink-200"
                  style={{
                    boxShadow: '0 10px 15px -3px rgba(164, 88, 74, 0.4), 0 4px 6px -2px rgba(164, 88, 74, 0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(164, 88, 74, 0.5), 0 10px 20px -5px rgba(164, 88, 74, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(164, 88, 74, 0.4), 0 4px 6px -2px rgba(164, 88, 74, 0.05)';
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300 group"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-gray-800 transition-colors duration-300">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-5 h-5 text-pink-500 transition-all duration-500 ${
                          openFAQ === index ? 'rotate-180 scale-110' : 'group-hover:scale-110'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <div className="border-t border-pink-100 pt-4">
                        <p className="text-gray-600 leading-relaxed transition-colors duration-300">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Bölümü */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Instagram'da Bizi Takip Edin
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Düğünlerimizden, salonlarımızdan ve özel anlarımızdan kareleri Instagram hesabımızda paylaşıyoruz. 
              Hayalini kurduğunuz düğününüz için ilham alın!
            </p>
            <a 
              href="https://www.instagram.com/rose_weddinghall" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram'da Takip Et
            </a>
          </div>
          
          {/* Instagram Feed Simülasyonu */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <p className="text-sm">@rose_weddinghall</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              Gerçek Instagram gönderilerimizi görmek için hesabımızı ziyaret edin
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
