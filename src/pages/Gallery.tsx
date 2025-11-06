import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryData = [
    {
      id: 1,
      category: 'salon',
      title: 'Angel Salon - Eryaman',
      type: 'image',
      src: '/images/gallery/angel-eryaman-1.jpg'
    },
    {
      id: 2,
      category: 'salon',
      title: 'Amore Salon - Eryaman',
      type: 'image',
      src: '/images/gallery/amore-eryaman-1.jpg'
    },
    {
      id: 3,
      category: 'salon',
      title: 'Angel Salon - İvedik',
      type: 'image',
      src: '/images/gallery/angel-ivedik-1.jpg'
    },
    {
      id: 4,
      category: 'salon',
      title: 'Amore Salon - İvedik',
      type: 'image',
      src: '/images/gallery/amore-ivedik-1.jpg'
    },
    {
      id: 5,
      category: 'dugun',
      title: 'Düğün Töreni',
      type: 'video',
      src: '/videos/gallery/dugun-toreni.mp4'
    },
    {
      id: 6,
      category: 'dugun',
      title: 'Gelin Damat',
      type: 'image',
      src: '/images/gallery/gelin-damat-1.jpg'
    },
    {
      id: 7,
      category: 'dugun',
      title: 'Nişan Töreni',
      type: 'image',
      src: '/images/gallery/nisan-toreni-1.jpg'
    },
    {
      id: 8,
      category: 'dugun',
      title: 'Söz Töreni',
      type: 'image',
      src: '/images/gallery/soz-toreni-1.jpg'
    },
    {
      id: 9,
      category: 'detay',
      title: 'Masa Düzenlemesi',
      type: 'image',
      src: '/images/gallery/masa-duzenlemesi-1.jpg'
    },
    {
      id: 10,
      category: 'detay',
      title: 'Çiçek Dekorasyonu',
      type: 'image',
      src: '/images/gallery/cicek-dekorasyonu-1.jpg'
    },
    {
      id: 11,
      category: 'detay',
      title: 'Işık Gösterisi',
      type: 'video',
      src: '/videos/gallery/isik-gosterisi.mp4'
    },
    {
      id: 12,
      category: 'detay',
      title: 'Pasta Kesimi',
      type: 'image',
      src: '/images/gallery/pasta-kesimi-1.jpg'
    }
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
                  <div className="relative h-64 bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 group-hover:from-pink-200 group-hover:via-purple-100 group-hover:to-rose-200 transition-all duration-700">
                    {item.type === 'image' ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                          <svg className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                          </svg>
                          <p className="text-sm font-medium">{item.title} Görseli</p>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                          <svg className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                          <p className="text-sm font-medium">{item.title} Videosu</p>
                        </div>
                      </div>
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
