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

        // İlk 6 yorumu al ve yeniden sırala: 1, 3, 4, 2, 5, 6
        const firstSix = mergedReviews.slice(0, 6);
        if (firstSix.length >= 6) {
          const reordered = [
            firstSix[0], // 1
            firstSix[2], // 3
            firstSix[3], // 4
            firstSix[1], // 2
            firstSix[4], // 5
            firstSix[5]  // 6
          ];
          setReviews(reordered);
        } else {
          setReviews(firstSix);
        }

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
        // Hata durumunda fallback yorumları kullan ve yeniden sırala: 1, 3, 4, 2, 5, 6
        if (fallbackReviews.length >= 6) {
          const reordered = [
            fallbackReviews[0], // 1
            fallbackReviews[2], // 3
            fallbackReviews[3], // 4
            fallbackReviews[1], // 2
            fallbackReviews[4], // 5
            fallbackReviews[5]  // 6
          ];
          setReviews(reordered);
        } else {
          setReviews(fallbackReviews);
        }
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

  // Fallback yorumlar (API çalışmazsa veya Place ID yoksa) - Sıralama: 1, 3, 4, 2, 5, 6
  const fallbackReviews: Review[] = [
    {
      id: 1,
      name: "İrem Ar",
      rating: 5,
      date: "2 ay önce",
      comment:
        "10 Eylül kınası olan İrem ben :) Pimpirikli biri olarak o kadar çok daraldım ki hadi hadi diye her seferinde beni alttan alıp bütün soru işaretlerimi çözdüler. Başta Yunus Bey ve Buse Hanım hakkını ödeyemem. Buse Hanım benimle kına salonunu süslemek için masa altlarına bile girdi ilgi alaka o kadar güzel ki asla olmaz deyip hayallerinizi suya düşürmüyorlar. Ve Amore kızları ve ekibi danslarımızla uyumumuzla harikaydı. Ne istediysem iki dk sonra hepsini yaptılar. Şarkılarımız o kadar akıcıydı ki asla oturmadım :)) tam da hayal ettiğim gibiydi her şey. Hayallerimi yaşattığınız ve prenses gibi hissettirdiğiniz için teşekkür ederim ❤️",
      avatar: "İ"
    },
    {
      id: 3,
      name: "Beyza Kanık",
      rating: 5,
      date: "4 ay önce",
      comment:
        "18 Temmuz'da kınamızı Rose Wedding Hall'de yaptık. Özellikle belirtmek isterim ki Esra Hanım'ın ilgi alakası, her an her konuda yanımızda olması bizim için harika bir gece olmasını sağladı. Bir kez daha olsa yine Rose Wedding Hall'i tercih ederdik. Bize bu güzel geceyi yaşatan tüm ekibe teşekkür ediyoruz. İkramlar, gelin odamız, mekanın muazzam atmosferi, dekorasyonu; her bir detayıyla misafirlerimizden harika geri dönüşler aldık, mutlaka tavsiye ediyorum.",
      avatar: "B"
    },
    {
      id: 4,
      name: "Kerime Yağmur Ç.",
      rating: 5,
      date: "5 ay önce",
      comment:
        "20 Haziran kına, 22 Haziran düğünüm oldu. Kemal Bey ve düğün nedimem olan Esra Hanım'a ne kadar teşekkür etsem azdır. O kadar ilgililerdi ki hiç yalnız hissetmedim. Terlediğimde, susadığımda ben söylemeden hemen çözdüler. Her konuda yeterli bilgilendirme yaptılar. Kına organizasyonundan Sevda Hanım, Kemal Bey ve üzerimde en çok emeği geçen nedimem Esra Hanım; her anlamda herkese çok teşekkür ederim. Kesinlikle tavsiye ediyorum, gözünüz kapalı güvenebilirsiniz. Fotoğraf çekiminden taze ikramlıklara, düğün orkestrası şefi Musa Bey'den garsonlara kadar herkes gözümün içine bakıyorlardı. Hepinizin tekrar emeğine sağlık; tekrar düğün yapsam yine size gelirdim, düğün yapacak herkese de gönülden tavsiye ediyorum.",
      avatar: "K"
    },
    {
      id: 2,
      name: "Melek Şahin",
      rating: 5,
      date: "1 ay önce",
      comment:
        "05.09.2025 tarihindeki kınam için tutmuştuk. Her şey çok çok güzeldi; bizimle ilgilenmeleri, misafirlerimizle ilgilenmeleri, salonun görseli, efektleri, ambiyansı, ışıkları her şekliyle güzeldi. Bir gelin için bu günler tektir, özeldir; pişman oldum, eksik oldu dediğim hiçbir şey olmadı, çok içime sindi. Emeğiniz, ilgi alakanız için tekrar çok teşekkür ederim. Bir daha olsa bir daha sizinle, organizasyon ekibinizle çalışırım; hepinize ayrı ayrı çok teşekkür ederim.",
      avatar: "M"
    },
    {
      id: 5,
      name: "Furkan Baltat",
      rating: 5,
      date: "5 ay önce",
      comment:
        "18 Mayıs'ta düğünümüzü yaptık. Biz ve tüm misafirlerimiz salonun şıklığı ve zerafetini unutamadı. Kişi başı ordövr tabaklarından yaş pastaya kadar her şey çok lezzetliydi. Çalışanların güler yüzü ve ilgisi olmazsa olmazdı. Özellikle Yunus Bey'in sürecin en başından sonuna kadar ilgisi, samimiyeti, çift odaklı yaklaşımları harikaydı. Her şeyiniz harika olsun diyorsanız Yunus Bey ile tanışmalı; unutmayacağınız bir rüya yaşamak isterseniz Rose Wedding'te evlenmelisiniz :)",
      avatar: "F"
    },
    {
      id: 6,
      name: "Furkan Soyutürk",
      rating: 5,
      date: "5 gün önce",
      comment:
        "22 Kasım'da düğünümüzü yaptığımız yer. Öncelikle salon şık ve klas olmasının yanı sıra oldukça da genişti. Yanlış bilmiyorsam kapasite 650-700 kişilere kadar çıkıyor. Absürt ve yorucu dekorlardan kaçınılmış, sadelik çok güzel yansıtılmış. Klasik Helenistik motifler ve beyaz renk çok güzel işlenmiş. Çalışanların hepsi ilgili ve güler yüzlüydü, hepsi de işlerinde profesyonel gözüküyor. Nedimelerden saz ekibine, kameramandan garsona tüm çalışanlardan memnun kaldık; herkesin emeğine sağlık.",
      avatar: "F"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-gradient-to-br from-rose-50/50 via-white to-rose-50/30 border-b border-rose-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-primary rounded-sm shadow-sm"></span>
              <span className="text-xs font-iso font-semibold uppercase tracking-widest text-[#a4585a]">
                MÜŞTERİ DENEYİMLERİ
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-gradient leading-tight mb-6">
              Bizimle 'Evet' diyenlerin hikayelerini keşfedin.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Rose Wedding Hall'da unutulmaz bir deneyim yaşayan çiftlerimizin samimi görüşleri ve puanları.
            </p>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section id="stats-section" className="py-16 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col items-center justify-center transform hover:-translate-y-2 animate-float">
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                {stats.rating.toFixed(1)}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">PUANLAMA</div>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col items-center justify-center transform hover:-translate-y-2 animate-float animation-delay-2000">
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                {stats.reviews}+
              </div>
              <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">GERÇEK YORUM</div>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col items-center justify-center transform hover:-translate-y-2 animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                %{stats.satisfaction}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">MEMNUNİYET</div>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col items-center justify-center transform hover:-translate-y-2 animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                {stats.weddings}+
              </div>
              <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">MUTLU DÜĞÜN</div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => {
                return (
                  <div
                    key={review.id}
                    className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary/20 flex flex-col h-full"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full transition-all duration-500 group-hover:scale-110"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Rating */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < review.rating ? 'text-[#a4585a]' : 'text-gray-200'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-[10px] font-iso font-bold uppercase tracking-widest text-gray-400 bg-gray-50 px-2 py-1 rounded">Google</span>
                      </div>

                      <p className="text-gray-700 font-iso leading-relaxed mb-8 flex-grow text-sm italic">
                        "{review.comment}"
                      </p>

                      <div className="flex items-center gap-4 pt-6 mt-auto border-t border-gray-50">
                        {review.profilePhoto ? (
                          <img
                            src={review.profilePhoto}
                            alt={review.name}
                            className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-gray-100 text-primary rounded-full flex items-center justify-center font-display font-bold text-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                            {review.avatar}
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="font-display font-semibold text-gray-900 text-sm truncate uppercase tracking-wide">{review.name}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            {review.branch && (
                              <p className="text-[10px] text-primary font-bold uppercase tracking-widest">{review.branch}</p>
                            )}
                            <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest">{review.date}</p>
                          </div>
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

      {/* More Reviews CTA */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-white shadow-sm border border-gray-100 rounded-full text-[10px] font-iso font-bold tracking-[0.2em] text-[#a4585a] mb-12 uppercase">
            DENEYİMLERİNİZ BİZE IŞIK TUTUYOR
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-gray-900 mb-8">
            Daha Fazla Yorum Görün
          </h2>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Google'ın şeffaf ve gerçek kullanıcı deneyimleriyle tüm yorumlarımızı inceleyin,
            mutluluğumuza ortak olan yüzlerce çiftin hikayesini keşfedin.
          </p>

          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#a4585a] to-[#f6b0b0] rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <a
              href="https://share.google/gFFiCt1KwUuGM2kRo"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center bg-white text-gray-900 px-10 py-5 rounded-full font-display font-medium text-lg hover:text-[#a4585a] transition-all duration-300 transform"
            >
              <div className="mr-4 p-2 bg-gray-50 rounded-full group-hover:bg-rose-50 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>
              Google'da Tüm Yorumları Gör
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;

