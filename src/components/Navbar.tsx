import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubelerDropdownOpen, setIsSubelerDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 shadow-xl backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between h-36">
          {/* Left Menu - Ana Sayfa, Şubelerimiz, Galeri */}
          <div className="flex items-center space-x-6">
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
            <div className="relative">
              <button
                onClick={() => setIsSubelerDropdownOpen(!isSubelerDropdownOpen)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive('/subelerimiz') || isActive('/eryaman') || isActive('/ivedik')
                    ? 'text-white bg-gradient-to-r from-primary to-primary-700 shadow-lg' 
                    : 'text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary-50'
                }`}
              >
                Şubelerimiz
                <svg className="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isSubelerDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-[9999] min-w-[120px]">
                  <Link
                    to="/eryaman"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors rounded-t-lg"
                    onClick={() => setIsSubelerDropdownOpen(false)}
                  >
                    Eryaman
                  </Link>
                  <Link
                    to="/ivedik"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors rounded-b-lg"
                    onClick={() => setIsSubelerDropdownOpen(false)}
                  >
                    İvedik
                  </Link>
                </div>
              )}
            </div>
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
          <div className="flex items-center justify-center flex-1">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/images/logo.svg" 
                alt="Rose Wedding Hall" 
                className="h-28 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div style={{display: 'none'}} className="h-28 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary" style={{fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontStyle: 'italic'}}>Rose Wedding Hall</span>
              </div>
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
        <div className="md:hidden flex items-center justify-between h-28">
          {/* Mobile menu button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Center Logo */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/images/logo.svg" 
                alt="Rose Wedding Hall" 
                className="h-20 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div style={{display: 'none'}} className="h-20 flex items-center justify-center">
                <span className="text-lg font-bold text-primary" style={{fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontStyle: 'italic'}}>Rose Wedding Hall</span>
              </div>
            </Link>
          </div>

          {/* Spacer for balance */}
          <div className="w-6"></div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <div className="px-3 py-2">
                <button
                  onClick={() => setIsSubelerDropdownOpen(!isSubelerDropdownOpen)}
                  className={`flex items-center justify-between w-full text-base font-medium transition-colors ${
                    isActive('/subelerimiz') || isActive('/eryaman') || isActive('/ivedik')
                      ? 'text-primary bg-primary/10' 
                      : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                  }`}
                >
                  Şubelerimiz
                  <svg className={`w-4 h-4 transition-transform ${isSubelerDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isSubelerDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link
                      to="/eryaman"
                      className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive('/eryaman') 
                          ? 'text-primary bg-primary/10' 
                          : 'text-gray-600 hover:text-primary hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsSubelerDropdownOpen(false);
                      }}
                    >
                      Eryaman
                    </Link>
                    <Link
                      to="/ivedik"
                      className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive('/ivedik') 
                          ? 'text-primary bg-primary/10' 
                          : 'text-gray-600 hover:text-primary hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsSubelerDropdownOpen(false);
                      }}
                    >
                      İvedik
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/galeri"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
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
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
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
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
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
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
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
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
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
