import React from 'react';

const Gallery: React.FC = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-10 overflow-hidden">
        {/* Soft gradient in bottom right corner */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#a4585a]/10 via-pink-50/5 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in text-gray-900">Galeri</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-gray-700 font-light leading-relaxed tracking-wide animate-slide-up">
              Salonlarımız, düğünlerimiz ve 
              <span className="font-medium text-[#a4585a]"> unutulmaz anlarımızdan öne çıkan kareleri </span>
              keşfedin. Hayalinizdeki düğün için ilham alın.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="py-6 md:py-8 lg:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-lg border border-primary/20 animate-fade-in relative">
            {/* Köşe kalpleri */}
            <div className="absolute top-2 right-2 md:top-4 md:right-4 w-4 h-4 md:w-6 md:h-6 text-primary/40">
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div className="absolute top-2 left-2 md:top-4 md:left-4 w-4 h-4 md:w-6 md:h-6 text-primary/40">
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-4 h-4 md:w-6 md:h-6 text-primary/40">
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 w-4 h-4 md:w-6 md:h-6 text-primary/40">
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div className="mb-6 md:mb-8">
              {/* Animasyonlu Loading Spinner */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto">
                <div className="absolute inset-0 border-3 md:border-4 border-primary/20 rounded-full"></div>
                <div className="absolute inset-0 border-3 md:border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
                <div className="absolute inset-2 border-3 md:border-4 border-primary/10 rounded-full"></div>
                <div className="absolute inset-2 border-3 md:border-4 border-transparent border-t-primary/60 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                {/* Merkez ikon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary/50 mb-3 md:mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Galerimiz Hazırlanıyor...
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-primary/40 font-light animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Görsellerimiz Çok Yakında Burada
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Hayalinizdeki Düğünü Planlamaya Başlayın
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-100 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto px-2">
            Galerideki örneklerden ilham alın ve sizin için en uygun salonu keşfedin.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/rezervasyon"
              className="bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Rezervasyon Yap
            </a>
            <a
              href="/subelerimiz"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105"
            >
              Salonları İncele
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Gallery;
