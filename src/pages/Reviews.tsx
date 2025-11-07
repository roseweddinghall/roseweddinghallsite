import React, { useState, useEffect, useRef } from 'react';

interface Review {
  id: number | string;
  name: string;
  branch?: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
  profilePhoto?: string;
}

interface GoogleReviewsResponse {
  reviews: Review[];
  rating: number;
  totalReviews: number;
}

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState({
    rating: 0,
    reviews: 0,
    satisfaction: 0,
    weddings: 0
  });

  const statsRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Google yorumlarını çek
  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        setLoading(true);
        setError(null);

        // Netlify Function URL'si
        const functionUrl = '/.netlify/functions/fetch-google-reviews';
        const findPlaceUrl = '/.netlify/functions/find-place-id';
        
        // İki şube adresleri ve arama terimleri
        const branchSearches = [
          { 
            query: 'Rose Wedding Hall Eryaman',
            address: 'Yeşilova, 4016. Cad. B Blok No:2/2/13, 06796 Etimesgut/Ankara',
            name: 'Eryaman Şubesi'
          },
          { 
            query: 'Rose Wedding Hall İvedik',
            address: 'İvedik OSB, 1439. Sk. No: 1 İç Kapı: 121, 06378 Yenimahalle/Ankara',
            name: 'İvedik Şubesi'
          }
        ];

        // Place ID'leri bul veya environment variable'dan al
        let placeIds: string[] = [];

        // Önce environment variable'dan kontrol et
        const envPlaceIds = [
          process.env.REACT_APP_GOOGLE_PLACE_ID_ERYAMAN,
          process.env.REACT_APP_GOOGLE_PLACE_ID_IVEDIK
        ].filter(Boolean) as string[];

        if (envPlaceIds.length > 0) {
          placeIds = envPlaceIds;
        } else {
          // Environment variable yoksa, adreslerden Place ID bul
          try {
            const placeIdPromises = branchSearches.map(async (branch) => {
              try {
                // Önce işletme adı ile ara
                let response = await fetch(`${findPlaceUrl}?query=${encodeURIComponent(branch.query)}`);
                if (response.ok) {
                  const data = await response.json();
                  if (data.placeId) {
                    return { placeId: data.placeId, branchName: branch.name };
                  }
                }
                
                // Bulunamazsa adres ile ara
                response = await fetch(`${findPlaceUrl}?query=${encodeURIComponent(branch.address)}`);
                if (response.ok) {
                  const data = await response.json();
                  if (data.placeId) {
                    return { placeId: data.placeId, branchName: branch.name };
                  }
                }
                
                return null;
              } catch (err) {
                console.error(`Place ID bulunamadı: ${branch.name}`, err);
                return null;
              }
            });

            const foundPlaces = await Promise.all(placeIdPromises);
            const validPlaces = foundPlaces.filter(Boolean) as Array<{ placeId: string; branchName: string }>;
            placeIds = validPlaces.map(p => p.placeId);
            
            // Branch mapping'i sakla (daha sonra kullanmak için)
            if (validPlaces.length > 0) {
              // Place ID'leri branch isimleriyle eşleştir
              window.localStorage.setItem('branchMapping', JSON.stringify(
                validPlaces.reduce((acc, p) => {
                  acc[p.placeId] = p.branchName;
                  return acc;
                }, {} as Record<string, string>)
              ));
            }
          } catch (err) {
            console.error('Place ID bulma hatası:', err);
          }
        }

        if (placeIds.length === 0) {
          // Place ID bulunamadıysa, fallback olarak statik yorumları kullan
          console.warn('Google Place ID bulunamadı. Statik yorumlar kullanılıyor.');
          setReviews(fallbackReviews);
          setLoading(false);
          return;
        }

        // Branch mapping'i al (eğer varsa) veya oluştur
        let branchMapping: Record<string, string> = {};
        try {
          const savedMapping = window.localStorage.getItem('branchMapping');
          if (savedMapping) {
            branchMapping = JSON.parse(savedMapping);
          }
        } catch (e) {
          // Ignore
        }
        
        // Eğer mapping yoksa ve envPlaceIds varsa, branch isimlerini index'e göre ata
        if (Object.keys(branchMapping).length === 0 && placeIds.length > 0) {
          branchMapping = placeIds.reduce((acc, placeId, index) => {
            acc[placeId] = index === 0 ? 'Eryaman Şubesi' : 'İvedik Şubesi';
            return acc;
          }, {} as Record<string, string>);
        }

        // Tüm şubelerden yorumları çek
        const reviewPromises = placeIds.map(async (placeId, index) => {
          try {
            const response = await fetch(`${functionUrl}?placeId=${placeId}`);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: GoogleReviewsResponse = await response.json();
            
            // Branch bilgisini ekle (mapping'den veya index'e göre)
            const branchName = branchMapping[placeId] || (index === 0 ? 'Eryaman Şubesi' : 'İvedik Şubesi');
            return data.reviews.map(review => ({
              ...review,
              branch: branchName
            }));
          } catch (err) {
            console.error(`Place ID ${placeId} için yorum çekilemedi:`, err);
            return [];
          }
        });

        const allReviews = await Promise.all(reviewPromises);
        const mergedReviews = allReviews.flat();

        // Tarihe göre sırala (en yeni önce)
        mergedReviews.sort((a, b) => {
          const timeA = typeof a.id === 'number' ? a.id : 0;
          const timeB = typeof b.id === 'number' ? b.id : 0;
          return timeB - timeA;
        });

        // İlk 6 yorumu al
        setReviews(mergedReviews.slice(0, 6));

        // İstatistikleri güncelle
        if (mergedReviews.length > 0) {
          const avgRating = mergedReviews.reduce((sum, r) => sum + r.rating, 0) / mergedReviews.length;
          setStats(prev => ({
            ...prev,
            rating: Number(avgRating.toFixed(1)),
            reviews: mergedReviews.length
          }));
        }
      } catch (err) {
        console.error('Yorumlar çekilirken hata oluştu:', err);
        setError('Yorumlar yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
        // Hata durumunda fallback yorumları kullan
        setReviews(fallbackReviews);
      } finally {
        setLoading(false);
      }
    };

    fetchGoogleReviews();

    // Her 30 dakikada bir yenile (cache ile)
    const refreshInterval = setInterval(fetchGoogleReviews, 30 * 60 * 1000);

    return () => clearInterval(refreshInterval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsRef.current) {
          statsRef.current = true;
          
          // Animated counting
          const duration = 2000; // 2 seconds
          const steps = 60;
          const interval = duration / steps;

          let currentStep = 0;
          timerRef.current = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setStats({
              rating: Number((4.6 * progress).toFixed(1)),
              reviews: Math.floor(250 * progress),
              satisfaction: Math.floor(92 * progress),
              weddings: Math.floor(300 * progress)
            });

            if (currentStep >= steps) {
              if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
              }
              setStats({
                rating: 4.6,
                reviews: 250,
                satisfaction: 92,
                weddings: 300
              });
            }
          }, interval);
        }
      },
      { threshold: 0.3 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (statsElement) {
        observer.unobserve(statsElement);
      }
    };
  }, []);

  // Fallback yorumlar (API çalışmazsa veya Place ID yoksa)
  const fallbackReviews: Review[] = [
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
      <section className="relative bg-white py-10 overflow-hidden">
        {/* Soft gradient in bottom right corner */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#a4585a]/10 via-pink-50/5 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in text-gray-900">Müşteri Yorumları</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-gray-700 font-light leading-relaxed tracking-wide animate-slide-up">
              <span className="font-medium text-[#a4585a]">Mutlu çiftlerimizin deneyimlerini </span>
              ve Rose Wedding Hall hakkındaki görüşlerini keşfedin.
            </p>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section id="stats-section" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#a4585a] to-primary bg-clip-text text-transparent mb-3 transition-all duration-500">
                {stats.rating.toFixed(1)}
              </div>
              <div className="text-gray-600 font-medium">Puan</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#a4585a] to-primary bg-clip-text text-transparent mb-3 transition-all duration-500">
                {stats.reviews}+
              </div>
              <div className="text-gray-600 font-medium">Yorum</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#a4585a] to-primary bg-clip-text text-transparent mb-3 transition-all duration-500">
                %{stats.satisfaction}
              </div>
              <div className="text-gray-600 font-medium">Memnuniyet</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#a4585a] to-primary bg-clip-text text-transparent mb-3 transition-all duration-500">
                {stats.weddings}+
              </div>
              <div className="text-gray-600 font-medium">Mutlu Düğün</div>
            </div>
          </div>
        </div>
      </section>

      {/* Yorumlar */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#a4585a]"></div>
              <p className="mt-4 text-gray-600">Yorumlar yükleniyor...</p>
            </div>
          )}

          {error && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-yellow-800 text-sm">{error}</p>
            </div>
          )}

          {!loading && reviews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">Henüz yorum bulunmamaktadır.</p>
            </div>
          )}

          {!loading && reviews.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => {
              const gradientColors = [
                'from-pink-50 via-rose-50 to-pink-100',
                'from-purple-50 via-pink-50 to-rose-100',
                'from-rose-50 via-pink-50 to-purple-100',
                'from-pink-100 via-rose-50 to-pink-50',
                'from-rose-50 via-purple-50 to-pink-100',
                'from-pink-50 via-rose-100 to-pink-50'
              ];
              const borderColors = [
                'border-pink-200',
                'border-rose-200',
                'border-purple-200',
                'border-pink-300',
                'border-rose-300',
                'border-purple-300'
              ];
              
              return (
                <div 
                  key={review.id} 
                  className={`relative bg-gradient-to-br ${gradientColors[index % gradientColors.length]} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border-2 ${borderColors[index % borderColors.length]} group overflow-hidden`}
                >
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#a4585a]/10 to-transparent rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    <svg className="w-12 h-12 text-[#a4585a]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
          </div>

                  <div className="relative z-10">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                      <span className="text-xs font-medium text-gray-500 bg-white/50 px-2 py-1 rounded-full">Google</span>
                </div>
                
                    {/* Comment */}
                    <p className="text-gray-800 mb-6 leading-relaxed font-medium relative z-10">
                  "{review.comment}"
                </p>
                
                    {/* Author info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/50">
                      {review.profilePhoto ? (
                        <img 
                          src={review.profilePhoto} 
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover shadow-md group-hover:shadow-lg transition-shadow duration-300 ring-2 ring-white/50"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gradient-to-br from-[#a4585a] to-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow duration-300 ring-2 ring-white/50">
                          <span className="text-white font-bold text-lg">{review.avatar}</span>
                  </div>
                      )}
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                        {review.branch && (
                          <p className="text-xs text-gray-600 font-medium">{review.branch}</p>
                        )}
                    <p className="text-xs text-gray-400">{review.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
              </div>
          )}
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

