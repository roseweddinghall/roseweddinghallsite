import React, { useState } from 'react';

interface Partnership {
  id: number;
  name: string;
  category: string;
  description: string;
  phone: string;
  website: string;
  instagram: string | null;
  logo?: string;
}

const Partnerships: React.FC = () => {
  const [logoErrors, setLogoErrors] = useState<Record<number, boolean>>({});

  const handleLogoError = (partnerId: number) => {
    setLogoErrors(prev => ({ ...prev, [partnerId]: true }));
  };

  const partnerships: Partnership[] = [
    {
      id: 1,
      name: "Duygu Gelinlik",
      category: "Gelinlik",
      description: "Özel tasarım gelinlik koleksiyonları ile düğününüze eşsiz bir dokunuş.",
      phone: "03124419224",
      website: "",
      instagram: "@duygugelinlikmodaevi",
      logo: "/images/partners/duygugelinlik.jpg.jpg"
    },
    {
      id: 2,
      name: "Altınyıldız Classics",
      category: "Damatlık",
      description: "Hayatınızın en özel anına, en şık başlangıç: Damatlığın en doğru adresi!",
      phone: "0 (850) 455 56 57",
      website: "",
      instagram: "@altinyildizclassics",
      logo: "/images/partners/altinyildiz.jpg.jpg"
    },
    {
      id: 3,
      name: "Bloom Flower",
      category: "Çiçek & Dekorasyon",
      description: "Benzersiz gelin buketlerinden, hayalleri aşan araç ve nişan süslemelerine... Aşkınızı sanata dönüştüren çiçek atelieriniz.",
      phone: "0539 435 69 37",
      website: "",
      instagram: "@bloomflowers.ankara",
      logo: "/images/partners/bloomflower.jpg.jpg"
    },
    {
      id: 4,
      name: "Şeyda Çakır Gelinlik",
      category: "Gelinlik",
      description: "Özel atölyede hassas işçilik ile düğün seremoninize kişisel bir manifesto katın. Sadece size ısmarlanmış bir zarafet...",
      phone: "0543 762 41 62",
      website: "",
      instagram: "@seydacakir.gelinlik",
      logo: "/images/partners/seydacakir.jpg.jpg"
    },
    {
      id: 5,
      name: "Buket Kuzey Studio",
      category: "Saç / Makyaj",
      description: "Sadece bir makyaj ve saç değil; size özel tasarlanmış bir dönüşüm hikayesi. Hayatınızın en özel gününde, uzman ellerimizle içinizdeki ışıltıyı yüzeye çıkarın.",
      phone: "0 505 870 06 06",
      website: "",
      instagram: "@buketkuzeystudio",
      logo: "/images/partners/buketkuzey.jpg.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-10 overflow-hidden">
        {/* Soft gradient in bottom right corner */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#a4585a]/10 via-pink-50/5 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in text-gray-900">İş Birlikleri</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-gray-700 font-light leading-relaxed tracking-wide animate-slide-up">
              Düğününüz için ihtiyaç duyabileceğiniz tüm hizmetlerde 
              <span className="font-medium text-[#a4585a]"> güvendiğimiz iş ortaklarımızla </span>
              çalışıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* İş Birliği Kategorileri */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerships.map((partner) => (
              <div 
                key={partner.id} 
                className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group"
                style={{
                  boxShadow: '0 10px 15px -3px rgba(164, 88, 90, 0.1), 0 4px 6px -2px rgba(164, 88, 90, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(164, 88, 90, 0.4), 0 10px 20px -5px rgba(164, 88, 90, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(164, 88, 90, 0.1), 0 4px 6px -2px rgba(164, 88, 90, 0.05)';
                }}
              >
                {/* Logo */}
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-gray-100 border-2 border-primary/20 overflow-hidden flex items-center justify-center relative">
                    {partner.logo && !logoErrors[partner.id] ? (
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="w-full h-full object-cover"
                        onError={() => handleLogoError(partner.id)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                        <span className="text-2xl font-bold text-primary">{partner.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-4 text-center">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {partner.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{partner.name}</h3>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${partner.phone}`} className="hover:text-primary transition-colors">{partner.phone}</a>
                  </div>
                  {partner.instagram && (
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <a href={partner.instagram.startsWith('http') ? partner.instagram : `https://www.instagram.com/${partner.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        {partner.instagram}
                      </a>
                    </div>
                  )}
                </div>
                
                {/* İncele Butonu */}
                {partner.instagram && (
                  <a
                    href={partner.instagram.startsWith('http') ? partner.instagram : `https://www.instagram.com/${partner.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-300/60 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 text-center block"
                  >
                    İncele
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Olmak İsteyenler */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Bizimle İş Ortağı Olmak İster misiniz?
                </h2>
                <p className="text-gray-600 mb-6">
                  Kaliteli hizmet anlayışınız ve müşteri memnuniyetine verdiğiniz önem varsa, 
                  sizleri de iş ortağı ağımıza dahil etmekten memnuniyet duyarız.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Kaliteli Hizmet</h4>
                      <p className="text-gray-600 text-sm">Sektörde deneyimli ve kaliteli hizmet anlayışınız olmalı</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Güvenilirlik</h4>
                      <p className="text-gray-600 text-sm">Zamanında teslim ve müşteri memnuniyeti odaklı yaklaşım</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fiyat Uygunluğu</h4>
                      <p className="text-gray-600 text-sm">Rekabetçi fiyatlandırma ve esnek ödeme seçenekleri</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Başvuru Formu</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Şirket Adı</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hizmet Kategorisi</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>Gelinlik / Damatlık</option>
                      <option>Kuaför</option>
                      <option>Çiçek / Dekorasyon</option>
                      <option>Fotoğraf / Video</option>
                      <option>Güzellik / Bakım</option>
                      <option>Diğer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">İletişim</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="E-posta adresiniz" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                  <button type="submit" className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    Başvuru Gönder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;
