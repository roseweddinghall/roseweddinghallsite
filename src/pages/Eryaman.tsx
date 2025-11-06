import React from 'react';

const Eryaman: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Eryaman Şubesi</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Modern mimarisi ve geniş alanıyla düğününüzün en özel anlarını yaşayacağınız Eryaman şubemiz.
          </p>
        </div>
      </section>

      {/* Şube Detayları */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Sol Taraf - Bilgiler */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Eryaman Şubesi</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Eryaman şubemiz, modern mimarisi ve geniş alanıyla düğün organizasyonlarınız için ideal bir mekan sunar. 
                Yüksek tavanı ve kolonsuz mimarisi sayesinde ferah bir atmosfer yaratır.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Adres</h3>
                    <p className="text-gray-600">Yeşilova, 4016. Cad. B Blok No:2/2/13, 06796 Etimesgut/Ankara</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefon</h3>
                    <p className="text-gray-600">+90 538 622 30 50</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">E-posta</h3>
                    <p className="text-gray-600">eryaman@roseweddinghall.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Kapasite</h3>
                    <p className="text-gray-600">660 kişi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Taraf - Özellikler */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Özellikler</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Yüksek Tavan</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Kolonsuz Mimari</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Açık / Kapalı Otopark</span>
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

      {/* Harita */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Konumumuz</h2>
            <p className="text-xl text-gray-600">Eryaman şubemizin konumunu haritada görüntüleyebilirsiniz</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps?q=Yeşilova,+4016.+Cad.+B+Blok+No:2/2/13,+06796+Etimesgut/Ankara&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eryaman Şubesi Konumu"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Eryaman Şubesi</h3>
              <p className="text-gray-600 mb-4">Yeşilova, 4016. Cad. B Blok No:2/2/13, 06796 Etimesgut/Ankara</p>
              <a 
                href="https://share.google/s73VdxD4h4IF37TVJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google Maps'te Gör
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">İletişime Geçin</h2>
            <p className="text-xl text-gray-600">Eryaman şubemiz hakkında detaylı bilgi almak için bizimle iletişime geçin</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefon</h3>
              <p className="text-gray-600">+90 538 622 30 50</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">E-posta</h3>
              <p className="text-gray-600">eryaman@roseweddinghall.com</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Adres</h3>
              <p className="text-gray-600">Yeşilova, 4016. Cad. B Blok No:2/2/13, 06796 Etimesgut/Ankara</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Eryaman;
