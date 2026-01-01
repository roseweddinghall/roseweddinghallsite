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
    <div className="min-h-screen bg-white font-iso">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-gradient-to-br from-mint-softest via-mint-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-gray-800 rounded-sm"></span>
              <span className="text-xs font-iso font-medium uppercase tracking-wider text-gray-600">
                SSS
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-gray-900 leading-tight mb-6">
              Sık sorulan sorular
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Salonlarımız ve organizasyon süreciniz hakkında merak edilenleri yanıtladık.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-iso-border rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-iso-light transition-colors duration-200"
                >
                  <span className="text-base font-display font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-iso-border rounded-full">
                    <svg
                      className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''
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
                  className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-96' : 'max-h-0'
                    }`}
                >
                  <div className="px-6 pb-5">
                    <div className="border-t border-iso-border pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
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

export default FAQ;
