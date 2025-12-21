import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white backdrop-blur-sm relative z-50" style={{ boxShadow: '0 20px 25px -5px rgba(164, 88, 90, 0.3), 0 10px 10px -5px rgba(164, 88, 90, 0.2)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between h-36" style={{ overflow: 'visible' }}>
          {/* Left Menu - Ana Sayfa, Şubelerimiz, Galeri */}
          <div className="flex items-center space-x-6 relative" style={{ overflow: 'visible' }}>
            <Link
              to="/"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                isActive('/') 
                  ? 'text-white bg-gradient-to-r from-primary to-primary-700 shadow-lg' 
                  : 'text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary-50'
              }`}
            >
              Ana Sayfa
            </Link>
            <Link
              to="/subelerimiz"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                isActive('/subelerimiz')
                  ? 'text-white bg-gradient-to-r from-primary to-primary-700 shadow-lg' 
                  : 'text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary-50'
              }`}
            >
              Şubelerimiz
            </Link>
            <Link
              to="/galeri"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                isActive('/galeri') 
                  ? 'text-white bg-gradient-to-r from-primary to-primary-700 shadow-lg' 
                  : 'text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary-50'
              }`}
            >
              Galeri
            </Link>
          </div>

          {/* Center Logo */}
          <div className="flex items-center justify-center flex-1 h-36 overflow-hidden">
            <Link to="/" className="block flex items-start">
              <OptimizedImage
                src="/logo.png.png"
                alt="Rose Wedding Hall"
                className="w-auto object-contain"
                priority={true}
                loading="eager"
                objectFit="contain"
                style={{ background: 'transparent', height: '15rem' }}
              />
            </Link>
          </div>
          
          {/* Right Menu - İş Birlikleri, Yorumlar, Hakkımızda, İletişim */}
          <div className="flex items-center space-x-6">
            <Link
              to="/is-birlikleri"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                isActive('/is-birlikleri') 
                  ? 'text-white bg-gradient-to-r from-primary-600 to-primary-800 shadow-lg' 
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-primary-100 hover:to-primary-50'
              }`}
            >
              İş Birlikleri
            </Link>
            <Link
              to="/yorumlar"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                isActive('/yorumlar') 
                  ? 'text-white bg-gradient-to-r from-primary to-primary-700 shadow-lg' 
                  : 'text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary-50'
              }`}
            >
              Yorumlar
            </Link>
            <Link
              to="/hakkimizda"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                isActive('/hakkimizda') 
                  ? 'text-white bg-gradient-to-r from-secondary to-secondary-700 shadow-lg' 
                  : 'text-gray-700 hover:text-secondary hover:bg-gradient-to-r hover:from-secondary/10 hover:to-secondary-50'
              }`}
            >
              Hakkımızda
            </Link>
            <Link
              to="/iletisim"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                isActive('/iletisim') 
                  ? 'text-white bg-gradient-to-r from-secondary-600 to-secondary-800 shadow-lg' 
                  : 'text-gray-700 hover:text-secondary-600 hover:bg-gradient-to-r hover:from-secondary-100 hover:to-secondary-50'
              }`}
            >
              İletişim
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between h-36 sm:h-40 relative z-50 overflow-hidden">
          {/* Mobile menu button */}
          <div className="flex items-center z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary p-2 -ml-2"
              aria-label="Menüyü aç/kapat"
              type="button"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Center Logo */}
          <div className="flex-1 flex justify-center overflow-hidden h-full">
            <Link to="/" className="flex-shrink-0 h-full flex items-center">
              <OptimizedImage
                src="/logo.png.png"
                alt="Rose Wedding Hall"
                className="h-full max-h-40 sm:max-h-44 w-auto object-contain object-top"
                priority={true}
                loading="eager"
                objectFit="contain"
                style={{ background: 'transparent' }}
              />
            </Link>
          </div>

          {/* Spacer for balance */}
          <div className="w-6"></div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-36 sm:top-40 bg-white border-t border-gray-200 shadow-lg z-50 max-h-[calc(100vh-9rem)] sm:max-h-[calc(100vh-10rem)] overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                to="/subelerimiz"
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive('/subelerimiz') 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Şubelerimiz
              </Link>
              <Link
                to="/galeri"
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive('/galeri') 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Galeri
              </Link>
              <Link
                to="/is-birlikleri"
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive('/is-birlikleri') 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                İş Birlikleri
              </Link>
              <Link
                to="/yorumlar"
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive('/yorumlar') 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Yorumlar
              </Link>
              <Link
                to="/hakkimizda"
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive('/hakkimizda') 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                to="/iletisim"
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive('/iletisim') 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
