import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const quickLinks = [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/hakkimizda', label: 'Hakkımızda' },
    { path: '/subelerimiz', label: 'Şubelerimiz' },
    { path: '/galeri', label: 'Galeri' },
    { path: '/yorumlar', label: 'Yorumlar' },
    { path: '/is-birlikleri', label: 'İş Birlikleri' },
    { path: '/iletisim', label: 'İletişim' },
  ];

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo ve Açıklama */}
          <div className="lg:col-span-2 text-center">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo.png.png"
                alt="Rose Wedding Hall"
                className="h-32 w-auto object-contain opacity-90 scale-125"
              />
            </Link>
            <p className="text-gray-600 font-iso text-sm leading-relaxed max-w-md mx-auto mt-4">
              Hayallerinizdeki düğünü, modern zarafetimizle taçlandırıyoruz.
              Unutulmaz anıların mimarı olmaya hazırız.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-xs font-iso font-medium uppercase tracking-wider text-gray-900 mb-6">
              HIZLI LİNKLER
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 font-iso text-sm hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-xs font-iso font-medium uppercase tracking-wider text-gray-900 mb-6">
              İLETİŞİM
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-gray-900 font-iso text-sm font-medium mb-2">Eryaman Şubesi</p>
                <p className="text-gray-600 font-iso text-sm leading-relaxed">
                  Yeşilova, 4016. Cad. B Blok No:2/2/13<br />
                  06796 Etimesgut/Ankara
                </p>
                <p className="text-gray-500 font-iso text-sm mt-2">+90 538 622 30 50</p>
              </div>
              <div>
                <p className="text-gray-900 font-iso text-sm font-medium mb-2">İvedik Şubesi</p>
                <p className="text-gray-600 font-iso text-sm leading-relaxed">
                  İvedik OSB, 1439. Sk. No: 1<br />
                  İç Kapı: 121, 06378 Yenimahalle/Ankara
                </p>
                <p className="text-gray-500 font-iso text-sm mt-2">+90 553 394 92 00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 font-iso text-xs">
              © 2025 Rose Wedding Hall. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/rose_weddinghall"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/61566570783906"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
