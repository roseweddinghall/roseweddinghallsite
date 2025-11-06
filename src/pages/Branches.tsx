import React from 'react';

const Branches: React.FC = () => {
  const branches = [
    {
      id: 1,
      name: "Eryaman Şubesi",
      address: "Yeşilova, 4016. Cad. B Blok No:2/2/13, 06796 Etimesgut/Ankara",
      phone: "+90 538 622 30 50",
      email: "eryaman@roseweddinghall.com",
      capacity: "660",
      features: ["Yüksek Tavan", "Kolonsuz Mimari", "Açık / Kapalı Otopark"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      name: "İvedik Şubesi",
      address: "İvedik OSB, 1439. Sk. No: 1 İç Kapı: 121, 06378 Yenimahalle/Ankara",
      phone: "+90 546 624 25 95",
      email: "roseweddingivedik@gmail.com",
      capacity: "800",
      features: ["Özel Giriş", "Kolonsuz Mimari", "Geniş Pist", "Bride Odası", "Çocuk Oyun Alanı"],
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Şubelerimiz</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Ankara'da 2 farklı lokasyonda modern ve şık salonlarımızla hizmetinizdeyiz.
          </p>
        </div>
      </section>

      {/* Şubeler Listesi */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {branches.map((branch) => (
              <div key={branch.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm">Salon Görseli</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{branch.name}</h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {branch.address}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {branch.phone}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {branch.email}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Kapasite: {branch.capacity} kişi
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Özellikler:</h4>
                    <div className="flex flex-wrap gap-2">
                      {branch.features.map((feature, index) => (
                        <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    Rezervasyon Yap
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Harita Bölümü */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Konumlarımız</h2>
            <p className="text-xl text-gray-600">
              Ankara'nın iki farklı bölgesinde hizmet veriyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Eryaman Şubesi Harita */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64">
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

            {/* İvedik Şubesi Harita */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64">
                <iframe
                  src="https://www.google.com/maps?q=İvedik+OSB,+1439.+Sk.+No:+1+İç+Kapı:+121,+06378+Yenimahalle/Ankara&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="İvedik Şubesi Konumu"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">İvedik Şubesi</h3>
                <p className="text-gray-600 mb-4">İvedik OSB, 1439. Sk. No: 1 İç Kapı: 121, 06378 Yenimahalle/Ankara</p>
                <a 
                  href="https://share.google/UXXnXgOAlStYZRLgc" 
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
        </div>
      </section>
    </div>
  );
};

export default Branches;
