import React from 'react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "Ayşe & Mehmet",
      branch: "Eryaman Şubesi",
      rating: 5,
      date: "15 Aralık 2024",
      comment: "Hayalimizdeki düğünü Rose Wedding Hall'da gerçekleştirdik. Mükemmel organizasyon ve harika hizmet! Ekibiniz gerçekten çok profesyonel. Her detayı düşünmüşler. Kesinlikle tavsiye ederim.",
      avatar: "A"
    },
    {
      id: 2,
      name: "Fatma & Ali",
      branch: "İvedik Şubesi",
      rating: 5,
      date: "8 Aralık 2024",
      comment: "Profesyonel ekibi ve muhteşem salonlarıyla unutulmaz bir düğün yaşadık. Özellikle ses ve ışık sistemi harikaydı. Misafirlerimiz de çok beğendi. Teşekkürler Rose Wedding Hall!",
      avatar: "F"
    },
    {
      id: 3,
      name: "Zeynep & Can",
      branch: "Eryaman Şubesi",
      rating: 5,
      date: "2 Aralık 2024",
      comment: "Her detayı düşünülmüş, kaliteli hizmet anlayışı. Düğünümüz mükemmeldi! Organizasyon ekibi çok yardımcı oldu. Salonlarımız çok şık ve modern. Mutlaka tekrar tercih ederiz.",
      avatar: "Z"
    },
    {
      id: 4,
      name: "Elif & Burak",
      branch: "İvedik Şubesi",
      rating: 5,
      date: "25 Kasım 2024",
      comment: "Rose Wedding Hall ile çalışmak harika bir deneyimdi. Ekibiniz çok samimi ve yardımcı. Salonlarımız çok ferah ve aydınlık. Düğünümüz tam istediğimiz gibiydi. Çok teşekkürler!",
      avatar: "E"
    },
    {
      id: 5,
      name: "Selin & Emre",
      branch: "Eryaman Şubesi",
      rating: 5,
      date: "18 Kasım 2024",
      comment: "Mükemmel bir organizasyon! Her şey planlandığı gibi gitti. Salonlarımız çok şık, yemekler harikaydı. Misafirlerimiz de çok memnun kaldı. Rose Wedding Hall'a teşekkürler!",
      avatar: "S"
    },
    {
      id: 6,
      name: "Deniz & Oğuz",
      branch: "İvedik Şubesi",
      rating: 5,
      date: "10 Kasım 2024",
      comment: "Çok profesyonel bir ekiple çalıştık. Her detayı düşünmüşler. Salonlarımız çok modern ve şık. Düğünümüz unutulmazdı. Kesinlikle tavsiye ederim. Teşekkürler!",
      avatar: "D"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Müşteri Yorumları</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Mutlu çiftlerimizin deneyimlerini ve Rose Wedding Hall hakkındaki görüşlerini keşfedin.
          </p>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="text-gray-600">Google Puanı</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-gray-600">Yorum</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Memnuniyet</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Mutlu Düğün</div>
            </div>
          </div>
        </div>
      </section>

      {/* Yorumlar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Müşterilerimiz Ne Diyor?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Düğünlerimizde yaşadıkları deneyimleri paylaşan mutlu çiftlerimizin yorumları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">Google</span>
                </div>
                
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{review.comment}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold text-lg">{review.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.branch}</p>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Link */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Daha Fazla Yorum Görün
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Google'da tüm yorumlarımızı inceleyin ve deneyimlerimizi keşfedin.
          </p>
          <a 
            href="https://share.google/gFFiCt1KwUuGM2kRo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google'da Tüm Yorumları Gör
          </a>
        </div>
      </section>
    </div>
  );
};

export default Reviews;

