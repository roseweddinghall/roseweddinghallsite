import React from 'react';
import IsoButton from '../components/IsoButton';

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
      link: "/eryaman",
      mapSrc: "https://www.google.com/maps?q=Rose+Wedding+Hall+Etimesgut&output=embed&zoom=17"
    },
    {
      id: 2,
      name: "Yenimahalle Şubesi",
      address: "İvedik OSB, 1439. Sk. No: 1 İç Kapı: 121, 06378 Yenimahalle/Ankara",
      phone: "+90 546 624 25 95",
      email: "roseweddingivedik@gmail.com",
      capacity: "800",
      features: ["Özel Giriş Yolu", "7 Metre Tavan Yüksekliği", "Kolonsuz Mimari", "Geniş Pist", "Bride Odası", "Çocuk Oyun Alanı", "Gelişmiş İklimlendirme Sistemi"],
      link: "/ivedik",
      mapSrc: "https://www.google.com/maps?q=1439.+Sokak+Rose+Wedding+Hall+İvedik&output=embed&zoom=17"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-iso">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-gradient-to-br from-mint-softest via-mint-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-gray-800 rounded-sm"></span>
              <span className="text-xs font-iso font-medium uppercase tracking-wider text-gray-600">
                ŞUBELERİMİZ
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-gray-900 leading-tight mb-6">
              Ankara'da 2 farklı lokasyonda hizmetinizdeyiz.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Modern ve şık salonlarımızda hayalinizdeki düğünü gerçekleştirin.
            </p>
          </div>
        </div>
      </section>

      {/* Branches List */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {branches.map((branch, index) => (
              <div key={branch.id} className={`grid lg:grid-cols-2 gap-8 items-stretch ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Branch Info Card */}
                <div className={`bg-white gradient-border rounded-lg p-8 lg:p-10 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-mint-400 rounded-sm"></span>
                    <span className="text-xs font-iso font-medium uppercase tracking-wider text-gray-600">
                      ŞUBE {branch.id}
                    </span>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-display font-medium text-gradient mb-6">
                    {branch.name}
                  </h2>

                  <div className="space-y-4 mb-6">
                    <p className="text-gray-600">{branch.address}</p>
                    <p className="text-gray-900 font-medium">
                      Kapasite: <span className="text-gray-600">{branch.capacity} kişi</span>
                    </p>
                    <div>
                      <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-gray-900 transition-colors">
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-sm font-iso font-medium uppercase tracking-wider text-gray-500 mb-3">
                      ÖZELLİKLER
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {branch.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 text-sm bg-mint-softest border border-mint-soft text-gray-700 rounded animate-feature"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <IsoButton to={branch.link} className="btn-white-gradient text-gradient">
                    DETAYLARI İNCELE
                  </IsoButton>
                </div>

                {/* Map */}
                <div className={`bg-white border border-iso-border rounded-lg overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <iframe
                    src={branch.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${branch.name} Konumu`}
                  ></iframe>
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
