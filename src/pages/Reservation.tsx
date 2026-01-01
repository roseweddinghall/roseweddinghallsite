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

    const emailAddress = formData.branch === 'eryaman'
      ? 'roseweddinghall06@gmail.com'
      : 'roseweddingivedik@gmail.com';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const inputClasses = "w-full px-4 py-3 bg-white border border-iso-border rounded text-gray-900 font-iso text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all";
  const labelClasses = "block text-xs font-iso font-medium uppercase tracking-wider text-gray-600 mb-2";

  return (
    <div className="min-h-screen bg-white font-iso">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-gradient-to-br from-mint-softest via-mint-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-gray-800 rounded-sm"></span>
              <span className="text-xs font-iso font-medium uppercase tracking-wider text-gray-600">
                REZERVASYON
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-gray-900 leading-tight mb-6">
              Hayalinizdeki düğün için ilk adımı atın.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Aşağıdaki formu doldurarak rezervasyon talebinizi oluşturun.
              Detaylarınızı aldıktan sonra sizinle iletişime geçeceğiz.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-iso-border rounded-lg p-6 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div>
                <h2 className="text-lg font-display font-medium text-gray-900 mb-6 pb-4 border-b border-iso-border">
                  Kişisel Bilgiler
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={labelClasses}>Ad Soyad *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClasses}>Telefon *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="email" className={labelClasses}>E-posta *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Event Details */}
              <div>
                <h2 className="text-lg font-display font-medium text-gray-900 mb-6 pb-4 border-b border-iso-border">
                  Etkinlik Detayları
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventDate" className={labelClasses}>Etkinlik Tarihi *</label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      required
                      value={formData.eventDate}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className={labelClasses}>Etkinlik Türü *</label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">Seçiniz</option>
                      <option value="dugun">Düğün</option>
                      <option value="nisan">Nişan</option>
                      <option value="kina">Kına</option>
                      <option value="sunnet">Sünnet</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="branch" className={labelClasses}>Şube Seçimi *</label>
                    <select
                      id="branch"
                      name="branch"
                      required
                      value={formData.branch}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">Şube Seçiniz</option>
                      <option value="eryaman">Eryaman Şubesi</option>
                      <option value="ivedik">İvedik Şubesi</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="salon" className={labelClasses}>Salon Seçimi *</label>
                    <select
                      id="salon"
                      name="salon"
                      required
                      value={formData.salon}
                      onChange={handleChange}
                      className={inputClasses}
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
                  <label htmlFor="guestCount" className={labelClasses}>Misafir Sayısı *</label>
                  <select
                    id="guestCount"
                    name="guestCount"
                    required
                    value={formData.guestCount}
                    onChange={handleChange}
                    className={inputClasses}
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

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClasses}>Ek Bilgiler ve Özel İstekleriniz</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Düğününüz hakkında eklemek istediğiniz detayları yazabilirsiniz..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white text-sm font-iso font-medium uppercase tracking-wider rounded-full hover:bg-black transition-colors duration-300"
              >
                <span>Rezervasyon Talebi Gönder</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

          {/* Quick Contact */}
          <div className="mt-8 bg-iso-light border border-iso-border rounded-lg p-6 lg:p-8">
            <h3 className="text-sm font-iso font-medium uppercase tracking-wider text-gray-600 mb-4 text-center">
              HIZLI İLETİŞİM
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-gray-900 font-medium mb-1">Eryaman Şubesi</p>
                <a href="tel:+905386223050" className="text-gray-600 hover:text-gray-900 transition-colors">
                  +90 538 622 30 50
                </a>
              </div>
              <div>
                <p className="text-gray-900 font-medium mb-1">İvedik Şubesi</p>
                <a href="tel:+905466242595" className="text-gray-600 hover:text-gray-900 transition-colors">
                  +90 546 624 25 95
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
