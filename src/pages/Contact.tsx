import React from 'react';

const Contact: React.FC = () => {
 
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-10 overflow-hidden">
        {/* Soft gradient in bottom right corner */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#a4585a]/10 via-pink-50/5 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in text-gray-900">İletişim</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-gray-700 font-light leading-relaxed tracking-wide animate-slide-up">
              Düğününüzle ilgili tüm sorularınız için 
              <span className="font-medium text-[#a4585a]"> bizimle iletişime geçebilir</span>, 
              <span className="font-medium text-[#a4585a]"> randevu alabilir </span>
              ve rezervasyon yapabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Etimesgut Şubesi */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
            <div className="p-8 space-y-4">
              <h2 className="text-3xl font-classic font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-600 to-primary-700 drop-shadow-[0_3px_10px_rgba(164,88,90,0.35)]">
                Etimesgut Şubesi
              </h2>
              <div className="flex flex-col items-center space-y-3 text-gray-600">
                <div className="flex items-start justify-center gap-3">
                  <svg className="w-5 h-5 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm sm:text-base leading-relaxed text-left">
                    Yeşilova, 4016. Cad. B Blok No:2/2/13<br />
                    06796 Etimesgut/Ankara
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.5 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.5a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+905386223050" className="text-gray-600 hover:text-primary transition-colors">
                    +90 538 622 30 50
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:etimesgut@roseweddinghall.com" className="text-gray-600 hover:text-primary transition-colors">
                    etimesgut@roseweddinghall.com
                  </a>
                </div>
              </div>
            </div>
            <div className="h-64">
              <iframe
                src="https://www.google.com/maps?q=Yeşilova,+4016.+Cad.+B+Blok+No:2/2/13,+06796+Etimesgut/Ankara&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Etimesgut Şubesi Konumu"
              ></iframe>
            </div>
          </div>

          {/* Yenimahalle Şubesi */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
            <div className="p-8 space-y-4">
              <h2 className="text-3xl font-classic font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-600 to-primary-700 drop-shadow-[0_3px_10px_rgba(164,88,90,0.35)]">
                Yenimahalle Şubesi
              </h2>
              <div className="flex flex-col items-center space-y-3 text-gray-600">
                <div className="flex items-start justify-center gap-3">
                  <svg className="w-5 h-5 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm sm:text-base leading-relaxed text-left">
                    İvedik OSB, 1439. Sk. No: 1 İç Kapı: 121<br />
                    06378 Yenimahalle/Ankara
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.5 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.5a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+905466242595" className="text-gray-600 hover:text-primary transition-colors">
                    +90 546 624 25 95
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:roseweddingivedik@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                    roseweddingivedik@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="h-64">
              <iframe
                src="https://www.google.com/maps?q=İvedik+OSB,+1439.+Sk.+No:+1+İç+Kapı:+121,+06378+Yenimahalle/Ankara&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Yenimahalle Şubesi Konumu"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
 
      {/* Harita bölümü artık her şube kartının içinde yer alıyor */}
    </div>
  );
};

export default Contact;
