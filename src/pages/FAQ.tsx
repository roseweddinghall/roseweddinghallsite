import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 via-transparent to-primary/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-classic font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-primary to-secondary">
            💍 Düğününüze Dair Merak Ettikleriniz
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
            Salonlarımız hakkında en sık sorulan soruları yanıtladık.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-luxury-gold/20 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 hover:border-luxury-gold/60 hover:shadow-2xl hover:shadow-luxury-gold/20"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 rounded-2xl hover:bg-luxury-gold/5 transition-all duration-300 group"
                  >
                    <span className="text-lg font-semibold text-primary pr-4 group-hover:text-luxury-gold transition-colors duration-300">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-6 h-6 text-luxury-gold transition-all duration-500 ${
                          openFAQ === index ? 'rotate-180 scale-110' : 'group-hover:scale-110'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-8 pb-6">
                      <div className="border-t border-luxury-gold/20 pt-4">
                        <p className="text-gray-600 leading-relaxed transition-colors duration-300 font-light">
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
    </div>
  );
};

export default FAQ;

