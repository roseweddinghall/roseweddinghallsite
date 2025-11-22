import React from 'react';

const Branches: React.FC = () => {
  const branches = [
    {
      id: 1,
      name: "Etimesgut Şubesi",
      address: "Yeşilova, 4016. Cad. B Blok No:2/2/13, 06796 Etimesgut/Ankara",
      phone: "+90 538 622 30 50",
      email: "roseweddinghall06@gmail.com",
      capacity: "660",
      features: ["Yüksek Tavan", "Kolonsuz Mimari", "Açık / Kapalı Otopark"],
      image: "/api/placeholder/400/300",
      link: "/eryaman"
    },
    {
      id: 2,
      name: "Yenimahalle Şubesi",
      address: "İvedik OSB, 1439. Sk. No: 1 İç Kapı: 121, 06378 Yenimahalle/Ankara",
      phone: "+90 546 624 25 95",
      email: "roseweddingivedik@gmail.com",
      capacity: "800",
      features: ["Özel Giriş", "Kolonsuz Mimari", "Geniş Pist", "Bride Odası", "Çocuk Oyun Alanı"],
      image: "/api/placeholder/400/300",
      link: "/ivedik"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-10 overflow-hidden">
        {/* Soft gradient in bottom right corner */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#a4585a]/10 via-pink-50/5 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in text-gray-900">Şubelerimiz</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-gray-700 font-light leading-relaxed tracking-wide animate-slide-up">
              Ankara'da 
              <span className="font-medium text-[#a4585a]"> 2 farklı lokasyonda </span>
              modern ve şık salonlarımızla hizmetinizdeyiz.
            </p>
          </div>
        </div>
      </section>

      {/* Şubeler Listesi */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {branches.map((branch) => (
              <div key={branch.id} className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm">Salon Görseli</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-classic font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-600 to-primary-700 drop-shadow-[0_3px_10px_rgba(164,88,90,0.35)]">
                    {branch.name}
                  </h3>
                  <p className="text-gray-600">
                    <span className="block">{branch.address}</span>
                  </p>
                  <p>
                    <a href={`tel:${branch.phone}`} className="text-gray-600 hover:text-primary transition-colors">
                      {branch.phone}
                    </a>
                  </p>
                  <p>
                    <a href={`mailto:${branch.email}`} className="text-gray-600 hover:text-primary transition-colors">
                      {branch.email}
                    </a>
                  </p>
                  <p className="text-gray-600">Maksimum Kapasite: {branch.capacity} kişi</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Özellikler:</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {branch.features.map((feature, index) => (
                        <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={branch.link}
                    className="w-full inline-flex items-center justify-center bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    İncele →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branches;
