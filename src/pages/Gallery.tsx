import React, { useState } from 'react';

interface ImageWithLoading {
  loaded: boolean;
  error: boolean;
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [imageStates, setImageStates] = useState<Record<number, ImageWithLoading>>({});

  const galleryData = [
    // Angel Salon Görselleri
    { id: 1, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/angel.JPG' },
    { id: 2, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/Angel0.jpg' },
    { id: 3, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/Angel1.jpg' },
    { id: 4, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/Angel2.jpg' },
    { id: 5, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/Angel3.jpg' },
    { id: 6, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/Angel4.jpg' },
    { id: 7, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/Angel5.jpg' },
    { id: 8, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/Angel6.jpeg.jpg' },
    { id: 9, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/Angel7.jpg' },
    { id: 10, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/Angel8.jpg' },
    { id: 11, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/Angel9.jpg' },
    { id: 12, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/Angel10.jpg' },
    { id: 13, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/Angel11.jpg' },
    { id: 14, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/Angel12.jpg' },
    { id: 15, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/Angel13.jpg' },
    { id: 16, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/Angel14.jpg' },
    { id: 17, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/Angel15.jpg' },
    { id: 18, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/Angel16.jpg' },
    { id: 19, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/Angel17.jpg' },
    { id: 20, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/Angel18.jpg' },
    { id: 21, category: 'salon', title: 'Angel Salon', type: 'image', src: '/images/Angel19.jpg' },
    // Düğün Görselleri
    { id: 22, category: 'dugun', title: 'Düğün Anıları', type: 'image', src: '/images/IMG_5499.JPG' },
    { id: 23, category: 'dugun', title: 'Düğün Anıları', type: 'image', src: '/images/IMG_5500.JPG' },
    { id: 24, category: 'dugun', title: 'Düğün Anıları', type: 'image', src: '/images/IMG_5501.JPG' },
    { id: 25, category: 'dugun', title: 'Düğün Anıları', type: 'image', src: '/images/IMG_5502.JPG' },
    { id: 26, category: 'dugun', title: 'Düğün Anıları', type: 'image', src: '/images/IMG_5503.JPG' },
    { id: 27, category: 'dugun', title: 'Düğün Anıları', type: 'image', src: '/images/IMG_5504.JPG' },
    { id: 28, category: 'dugun', title: 'Düğün Anıları', type: 'image', src: '/images/IMG_5505.JPG' }
  ];

  const filteredGallery = selectedCategory === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === selectedCategory);

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'salon', name: 'Salonlar' },
    { id: 'dugun', name: 'Düğünler' },
    { id: 'detay', name: 'Detaylar' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Galeri</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Salonlarımız, düğünlerimiz ve unutulmaz anlarımızdan öne çıkan kareleri keşfedin. 
            Hayalinizdeki düğün için ilham alın.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 text-white shadow-lg shadow-pink-300/50'
                    : 'bg-white text-gray-700 border border-gray-200 hover:shadow-lg hover:shadow-pink-200/40'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((item) => (
              <div key={item.id} className="group">
                <div className="bg-white rounded-2xl shadow-lg shadow-pink-200/40 hover:shadow-2xl hover:shadow-pink-300/60 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                  {/* Media Content */}
                  <div className="relative h-64 bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 group-hover:from-pink-200 group-hover:via-purple-100 group-hover:to-rose-200 transition-all duration-700 overflow-hidden">
                    {item.type === 'image' ? (
                      <>
                        {/* Loading Placeholder */}
                        {!imageStates[item.id]?.loaded && !imageStates[item.id]?.error && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100">
                            <div className="animate-pulse">
                              <svg className="w-12 h-12 mx-auto text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                              </svg>
                            </div>
                          </div>
                        )}
                        {/* Actual Image */}
                        <img 
                          src={item.src} 
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                            imageStates[item.id]?.loaded ? 'opacity-100' : 'opacity-0'
                          }`}
                          onLoad={() => {
                            setImageStates(prev => ({
                              ...prev,
                              [item.id]: { loaded: true, error: false }
                            }));
                          }}
                          onError={(e) => {
                            setImageStates(prev => ({
                              ...prev,
                              [item.id]: { loaded: false, error: true }
                            }));
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        {/* Error Fallback */}
                        {imageStates[item.id]?.error && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-gray-500">
                              <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                              </svg>
                              <p className="text-sm font-medium">Görsel yüklenemedi</p>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <video 
                        src={item.src} 
                        className="w-full h-full object-cover"
                        controls
                        preload="none"
                        onError={(e) => {
                          const target = e.target as HTMLVideoElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                    )}
                    
                    {/* Media Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                        item.type === 'video' 
                          ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' 
                          : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                      }`}>
                        {item.type === 'video' ? 'VİDEO' : 'FOTOĞRAF'}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 capitalize">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </span>
                      <button className="text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors duration-300">
                        Büyüt →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hayalinizdeki Düğünü Planlamaya Başlayın
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Galerideki örneklerden ilham alın ve sizin için en uygun salonu keşfedin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/rezervasyon"
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Rezervasyon Yap
            </a>
            <a
              href="/subelerimiz"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105"
            >
              Salonları İncele
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
