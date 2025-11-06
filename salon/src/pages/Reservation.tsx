import React, { useState } from 'react';

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    branch: '',
    salon: '',
    eventType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Rezervasyon formu gönderildi:', formData);
    alert('Rezervasyon talebiniz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Rezervasyon</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Hayalinizdeki düğün için rezervasyon yapın. Size özel paketler ve hizmetlerimiz hakkında detaylı bilgi alın.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl shadow-pink-200/50 overflow-hidden">
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-2">Rezervasyon Talebi</h2>
            <p className="text-pink-100">
              Aşağıdaki formu doldurarak rezervasyon talebinizi oluşturun. Detaylarınızı aldıktan sonra sizinle iletişime geçeceğiz.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Kişisel Bilgiler */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-posta *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
            </div>

            {/* Etkinlik Detayları */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Etkinlik Detayları</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Etkinlik Tarihi *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                    Etkinlik Türü *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Seçiniz</option>
                    <option value="dugun">Düğün</option>
                    <option value="soz">Söz</option>
                    <option value="nisan">Nişan</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-2">
                    Şube Seçimi *
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    required
                    value={formData.branch}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Şube Seçiniz</option>
                    <option value="eryaman">Eryaman Şubesi</option>
                    <option value="ivedik">İvedik Şubesi</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="salon" className="block text-sm font-medium text-gray-700 mb-2">
                    Salon Seçimi *
                  </label>
                  <select
                    id="salon"
                    name="salon"
                    required
                    value={formData.salon}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Önce şube seçiniz</option>
                    {formData.branch === 'eryaman' && (
                      <>
                        <option value="angel-eryaman">Angel Salon (660 kişi)</option>
                        <option value="amore-eryaman">Amore Salon (220 kişi)</option>
                      </>
                    )}
                    {formData.branch === 'ivedik' && (
                      <>
                        <option value="angel-ivedik">Angel Salon (800 kişi)</option>
                        <option value="amore-ivedik">Amore Salon (600 kişi)</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-2">
                  Misafir Sayısı *
                </label>
                <select
                  id="guestCount"
                  name="guestCount"
                  required
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                >
                  <option value="">Misafir sayısını seçiniz</option>
                  <option value="50-100">50-100 kişi</option>
                  <option value="100-200">100-200 kişi</option>
                  <option value="200-300">200-300 kişi</option>
                  <option value="300-500">300-500 kişi</option>
                  <option value="500-800">500-800 kişi</option>
                  <option value="800+">800+ kişi</option>
                </select>
              </div>
            </div>

            {/* Mesaj */}
            <div className="border-t pt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Ek Bilgiler ve Özel İstekleriniz
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Düğününüz hakkında eklemek istediğiniz detayları, özel isteklerinizi yazabilirsiniz..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-300/60 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
              >
                Rezervasyon Talebi Gönder
              </button>
            </div>
          </form>
        </div>

        {/* İletişim Bilgileri */}
        <div className="mt-12 bg-gradient-to-r from-gray-50 to-pink-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Hızlı İletişim</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Eryaman Şubesi</h4>
              <p className="text-gray-600">+90 538 622 30 50</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">İvedik Şubesi</h4>
              <p className="text-gray-600">+90 546 624 25 95</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
