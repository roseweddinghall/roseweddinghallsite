import React from 'react';
import IsoButton from '../components/IsoButton';

const Contact: React.FC = () => {
  const branches = [
    {
      id: 1,
      name: "Etimesgut Şubesi",
      address: "Yeşilova, 4016. Cad. B Blok No:2/2/13",
      city: "06796 Etimesgut/Ankara",
      phone: "+90 538 622 30 50",
      email: "roseweddinghall06@gmail.com",
      mapSrc: "https://www.google.com/maps?q=Rose+Wedding+Hall+Etimesgut&output=embed&zoom=17"
    },
    {
      id: 2,
      name: "Yenimahalle Şubesi",
      address: "İvedik OSB, 1439. Sk. No: 1 İç Kapı: 121",
      city: "06378 Yenimahalle/Ankara",
      phone: "+90 553 394 92 00",
      email: "roseweddingivedik@gmail.com",
      mapSrc: "https://www.google.com/maps?q=1439.+Sokak+Rose+Wedding+Hall+İvedik&output=embed&zoom=17"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-iso">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-gradient-to-br from-rose-50/50 via-white to-rose-50/30 border-b border-rose-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-gray-800 rounded-sm"></span>
              <span className="text-xs font-iso font-medium uppercase tracking-wider text-gray-600">
                İLETİŞİM
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-gradient leading-tight mb-6">
              Sizinle iletişime geçmek için sabırsızlanıyoruz.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Düğününüzle ilgili tüm sorularınız için bizimle iletişime geçebilir,
              randevu alabilir ve rezervasyon yapabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {branches.map((branch) => (
              <div key={branch.id} className="bg-white border border-iso-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Branch Info */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-primary rounded-sm shadow-sm"></span>
                    <span className="text-xs font-iso font-medium uppercase tracking-wider text-gray-600">
                      ŞUBE
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-display font-medium text-gray-900 mb-6">
                    {branch.name}
                  </h2>

                  <div className="space-y-4">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="text-gray-900">{branch.address}</p>
                        <p className="text-gray-500 text-sm">{branch.city}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.5 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.5a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="text-gray-900 hover:text-gray-600 transition-colors">
                        {branch.phone}
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${branch.email}`} className="text-gray-900 hover:text-gray-600 transition-colors break-all">
                        {branch.email}
                      </a>
                    </div>
                  </div>

                  <div className="mt-6">
                    <IsoButton to="/rezervasyon" size="sm" className="btn-white-gradient text-gradient">
                      RANDEVU AL
                    </IsoButton>
                  </div>
                </div>

                {/* Map */}
                <div className="h-56 lg:h-64 border-t border-iso-border">
                  <iframe
                    src={branch.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${branch.name} Konumu`}
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
