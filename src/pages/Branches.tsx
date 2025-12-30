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
      features: ["Yüksek Tavan", "Kolonsuz Mimari", "Açık / Kapalı Otopark", "Gelişmiş İklimlendirme Sistemi"],
      link: "/eryaman"
    },
    {
      id: 2,
      name: "Yenimahalle Şubesi",
      address: "İvedik OSB, 1439. Sk. No: 1 İç Kapı: 121, 06378 Yenimahalle/Ankara",
      phone: "+90 546 624 25 95",
      email: "roseweddingivedik@gmail.com",
      capacity: "800",
      features: ["Özel Giriş Yolu", "7 Metre Tavan Yüksekliği", "Kolonsuz Mimari", "Geniş Pist", "Bride Odası", "Çocuk Oyun Alanı", "Gelişmiş İklimlendirme Sistemi"],
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
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {branches.map((branch) => (
              <div key={branch.id} className="space-y-6 sm:space-y-8">
                {/* Şube Bilgileri Kartı */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-classic font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-600 to-primary-700 drop-shadow-[0_3px_10px_rgba(164,88,90,0.35)] leading-normal pb-1 overflow-visible px-2">
                      {branch.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      <span className="block">{branch.address}</span>
                    </p>
                    <p className="text-sm sm:text-base">
                      <a href={`tel:${branch.phone}`} className="text-gray-600 hover:text-primary transition-colors break-all">
                        {branch.phone}
                      </a>
                    </p>
                    <p className="text-sm sm:text-base">
                      <a href={`mailto:${branch.email}`} className="text-gray-600 hover:text-primary transition-colors break-all">
                        {branch.email}
                      </a>
                    </p>
                    <p className="text-sm sm:text-base text-gray-600">Maksimum Kapasite: {branch.capacity} kişi</p>

                    <div className="mb-2 sm:mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Özellikler:</h4>
                      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                        {branch.features.map((feature, index) => (
                          <span key={index} className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Ayırıcı Şerit */}
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-4"></div>
                </div>

                {/* Harita - Her şubenin hemen altında */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-4">
                  <div className="h-48 sm:h-56 md:h-64">
                    <iframe
                      src={branch.id === 1 
                        ? "https://www.google.com/maps?q=Rose+Wedding+Hall+Etimesgut&output=embed&zoom=17&markers=color:red|Rose+Wedding+Hall+Etimesgut"
                        : "https://www.google.com/maps?q=1439.+Sokak+Rose+Wedding+Hall+İvedik&output=embed&zoom=17"
                      }
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${branch.name} Konumu`}
                    ></iframe>
                  </div>
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
