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
    
    // Form verilerini mailto linki için hazırla
    const subject = `Rezervasyon Talebi - ${formData.name}`;
    const body = `
Rezervasyon Talebi Detayları:

Kişisel Bilgiler:
- Ad Soyad: ${formData.name}
- E-posta: ${formData.email}
- Telefon: ${formData.phone}

Etkinlik Detayları:
- Etkinlik Tarihi: ${formData.eventDate}
- Etkinlik Türü: ${formData.eventType}
- Şube: ${formData.branch}
- Salon: ${formData.salon}
- Misafir Sayısı: ${formData.guestCount}

Ek Bilgiler:
${formData.message}

Bu rezervasyon talebi Rose Wedding Hall web sitesinden gönderilmiştir.
    `.trim();
    
    // Şube seçimine göre mail adresini belirle
    const emailAddress = formData.branch === 'eryaman' 
      ? 'roseweddinghall06@gmail.com' 
      : 'roseweddingivedik@gmail.com';
    
    // Mailto linki oluştur
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Mailto linkini aç
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl shadow-pink-200/50 overflow-hidden">
          <div className="p-4 sm:p-5 md:p-6 lg:p-8 text-white text-center" style={{ backgroundColor: '#a4585a' }}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Rezervasyon Talebi</h2>
            <p className="text-xs sm:text-sm md:text-base text-white/90 px-2">
              Aşağıdaki formu doldurarak rezervasyon talebinizi oluşturun. Detaylarınızı aldıktan sonra sizinle iletişime geçeceğiz.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
            {/* Kişisel Bilgiler */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                E-posta *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
              />
            </div>

            {/* Etkinlik Detayları */}
            <div className="border-t pt-3 sm:pt-4 md:pt-5 lg:pt-6">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4">Etkinlik Detayları</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div>
                  <label htmlFor="eventDate" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Etkinlik Tarihi *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="eventType" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Etkinlik Türü *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
                  >
                    <option value="">Seçiniz</option>
                    <option value="dugun">Düğün</option>
                    <option value="nisan">Nişan</option>
                    <option value="kina">Kına</option>
                    <option value="sunnet">Sünnet</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-3 sm:mt-4 md:mt-5 lg:mt-6">
                <div>
                  <label htmlFor="branch" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Şube Seçimi *
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    required
                    value={formData.branch}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
                  >
                    <option value="">Şube Seçiniz</option>
                    <option value="eryaman">Eryaman Şubesi</option>
                    <option value="ivedik">İvedik Şubesi</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="salon" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Salon Seçimi *
                  </label>
                  <select
                    id="salon"
                    name="salon"
                    required
                    value={formData.salon}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
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

              <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6">
                <label htmlFor="guestCount" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Misafir Sayısı *
                </label>
                <select
                  id="guestCount"
                  name="guestCount"
                  required
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
                >
                  <option value="">Misafir sayısını seçiniz</option>
                  <option value="200-ve-alti">200 ve altı</option>
                  <option value="300-400">300-400</option>
                  <option value="400-500">400-500</option>
                  <option value="500-600">500-600</option>
                  <option value="600-700">600-700</option>
                  <option value="700-800">700-800</option>
                </select>
              </div>
            </div>

            {/* Mesaj */}
            <div className="border-t pt-3 sm:pt-4 md:pt-5 lg:pt-6">
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Ek Bilgiler ve Özel İstekleriniz
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base resize-y"
                placeholder="Düğününüz hakkında eklemek istediğiniz detayları, özel isteklerinizi yazabilirsiniz..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-3 sm:pt-4 md:pt-5 lg:pt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 text-white py-2.5 sm:py-3 md:py-4 px-4 sm:px-5 md:px-6 rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-pink-300/60 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
              >
                Rezervasyon Talebi Gönder
              </button>
            </div>
          </form>
        </div>

        {/* İletişim Bilgileri */}
        <div className="mt-8 sm:mt-10 md:mt-12 bg-gradient-to-r from-gray-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">Hızlı İletişim</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 text-center">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Eryaman Şubesi</h4>
              <p className="text-sm sm:text-base text-gray-600 break-all">+90 538 622 30 50</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">İvedik Şubesi</h4>
              <p className="text-sm sm:text-base text-gray-600 break-all">+90 546 624 25 95</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
