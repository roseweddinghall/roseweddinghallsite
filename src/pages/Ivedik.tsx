import React, { useState } from 'react';
import OptimizedImage from '../components/OptimizedImage';

const galleryImages = [
  { id: 1, src: '/images/amore1.JPG', alt: 'Yenimahalle salonu görseli 1' },
  { id: 2, src: '/images/amore2.JPG', alt: 'Yenimahalle salonu görseli 2' },
  { id: 3, src: '/images/amore3.JPG', alt: 'Yenimahalle salonu görseli 3' },
  { id: 4, src: '/images/amore4.JPG', alt: 'Yenimahalle salonu görseli 4' },
  { id: 5, src: '/images/IMG_5499.JPG', alt: 'Yenimahalle salonu görseli 5' },
  { id: 6, src: '/images/IMG_5500.JPG', alt: 'Yenimahalle salonu görseli 6' },
  { id: 7, src: '/images/IMG_5501.JPG', alt: 'Yenimahalle salonu görseli 7' },
  { id: 8, src: '/images/IMG_5502.JPG', alt: 'Yenimahalle salonu görseli 8' },
  { id: 9, src: '/images/IMG_5503.JPG', alt: 'Yenimahalle salonu görseli 9' },
  { id: 10, src: '/images/IMG_5504.JPG', alt: 'Yenimahalle salonu görseli 10' },
  { id: 11, src: '/images/IMG_5505.JPG', alt: 'Yenimahalle salonu görseli 11' },
  { id: 12, src: '/images/5A6A0527.JPG', alt: 'Yenimahalle salonu görseli 12' }
];

const Yenimahalle: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
        {/* Soft gradient in bottom right corner */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-mint-softest/40 via-mint-light/20 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-gray-800 rounded-sm"></span>
              <span className="text-xs font-iso font-medium uppercase tracking-wider text-gray-600">
                ŞUBELERİMİZ
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-gradient leading-tight mb-6">
              Yenimahalle Şubesi
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              <span className="font-medium text-gray-900">Geniş pisti ve özel girişiyle </span>
              düğününüzün en özel anlarını yaşayacağınız Yenimahalle şubemiz.
            </p>
          </div>
        </div>
      </section>

      {/* Şube Detayları */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Sol Taraf - Bilgiler */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">Yenimahalle Şubesi</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-7 md:mb-8">
                Yenimahalle şubemiz, geniş pisti ve özel girişiyle düğün organizasyonlarınız için ideal bir mekan sunar.
                Kolonsuz mimarisi ve geniş alanı sayesinde konforlu bir atmosfer yaratır.
              </p>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Adres</h3>
                    <p className="text-sm sm:text-base text-gray-600 break-words">İvedik OSB, 1439. Sk. No: 1 İç Kapı: 121, 06378 Yenimahalle/Ankara</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Telefon</h3>
                    <p className="text-sm sm:text-base text-gray-600 break-all">+90 546 624 25 95</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">E-posta</h3>
                    <p className="text-sm sm:text-base text-gray-600 break-all">roseweddingivedik@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Maksimum Kapasite</h3>
                    <p className="text-sm sm:text-base text-gray-600">800 kişi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Taraf - Özellikler */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">Özellikler</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">Özel Giriş</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">Kolonsuz Mimari</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">Geniş Pist</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">Bride Odası</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">Çocuk Oyun Alanı</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Hizmetlerimiz</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-sm text-gray-600">• Düğün Organizasyonu</div>
                  <div className="text-sm text-gray-600">• Nikah Töreni</div>
                  <div className="text-sm text-gray-600">• Sünnet Düğünü</div>
                  <div className="text-sm text-gray-600">• Doğum Günü</div>
                  <div className="text-sm text-gray-600">• Kurumsal Etkinlik</div>
                  <div className="text-sm text-gray-600">• Toplantı & Seminer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salon Galerisi */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Yenimahalle Şubesi Galerisi</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
            {galleryImages.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedImage(image.src)}
                className="relative group aspect-square rounded-3xl overflow-hidden transition-all duration-700 bg-gradient-to-br from-primary-softest/30 via-primary-softer/20 to-primary-soft/30"
                style={{
                  boxShadow: '0 8px 30px -8px rgba(164, 88, 90, 0.15), 0 4px 12px -4px rgba(164, 88, 90, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 16px 50px -12px rgba(164, 88, 90, 0.25), 0 8px 20px -8px rgba(164, 88, 90, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 30px -8px rgba(164, 88, 90, 0.15), 0 4px 12px -4px rgba(164, 88, 90, 0.1)';
                }}
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  objectFit="cover"
                  loading="lazy"
                  placeholder="empty"
                />
                {/* Isomorphic Labs tarzı yumuşak gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(164, 88, 90, 0.08) 0%, transparent 60%)',
                  }}
                ></div>
                {/* Alt kısımda soluk fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                {/* Kenarlarda soluk glow */}
                <div className="absolute inset-0 ring-1 ring-primary/5 group-hover:ring-primary/20 transition-all duration-700 rounded-3xl"></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Konum ve İletişim - Yan Yana */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Konumumuz ve İletişim</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">Yenimahalle şubemizin konumunu haritada görüntüleyebilir ve bizimle iletişime geçebilirsiniz</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Harita Bölümü */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden" style={{ boxShadow: '0 8px 30px -8px rgba(164, 88, 90, 0.12), 0 4px 12px -4px rgba(164, 88, 90, 0.08)' }}>
              <div className="h-64 sm:h-80 md:h-96">
                <iframe
                  src="https://www.google.com/maps?q=1439.+Sokak+Rose+Wedding+Hall+İvedik&output=embed&zoom=17&markers=color:red|Rose+Wedding+Hall+İvedik"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="İvedik Şubesi Konumu"
                ></iframe>
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Yenimahalle Şubesi</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 break-words">İvedik OSB, 1439. Sk. No: 1 İç Kapı: 121, 06378 Yenimahalle/Ankara</p>
                <a
                  href="https://share.google/UXXnXgOAlStYZRLgc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-primary-700 transition-colors duration-300"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Google Maps'te Gör
                </a>
              </div>
            </div>

            {/* İletişim Bölümü */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 text-center">İletişim Bilgileri</h3>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="text-center">
                  <div className="bg-primary/10 p-4 sm:p-5 md:p-6 rounded-full w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Telefon</h4>
                  <a href="tel:+905466242595" className="text-sm sm:text-base text-gray-600 hover:text-primary transition-colors break-all">
                    +90 546 624 25 95
                  </a>
                </div>

                <div className="text-center">
                  <div className="bg-primary/10 p-4 sm:p-5 md:p-6 rounded-full w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">E-posta</h4>
                  <a href="mailto:roseweddingivedik@gmail.com" className="text-sm sm:text-base text-gray-600 hover:text-primary transition-colors break-all">
                    roseweddingivedik@gmail.com
                  </a>
                </div>

                <div className="text-center">
                  <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Adres</h4>
                  <p className="text-gray-600">İvedik OSB, 1439. Sk. No: 1 İç Kapı: 121, 06378 Yenimahalle/Ankara</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
              aria-label="Kapat"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <OptimizedImage
              src={selectedImage}
              alt="Yenimahalle salon görseli"
              className="w-full h-full rounded-3xl shadow-2xl"
              objectFit="contain"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Yenimahalle;
