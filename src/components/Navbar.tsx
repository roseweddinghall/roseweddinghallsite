import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logo preload
  useEffect(() => {
    const logoPath = '/logo.png';
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = logoPath;
    document.head.appendChild(link);

    const img = new Image();
    img.src = logoPath;
    img.decode().catch(() => { });

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  // Sol taraftaki linkler
  const leftLinks = [
    { path: '/', label: 'ANA SAYFA' },
    { path: '/subelerimiz', label: 'ŞUBELERİMİZ' },
    { path: '/galeri', label: 'GALERİ' },
  ];

  // Sağ taraftaki linkler
  const rightLinks = [
    { path: '/is-birlikleri', label: 'İŞ BİRLİKLERİ' },
    { path: '/yorumlar', label: 'YORUMLAR' },
    { path: '/hakkimizda', label: 'HAKKIMIZDA' },
    { path: '/iletisim', label: 'İLETİŞİM' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  const getLinkClasses = (path: string) => `
    px-4 py-2 text-xs font-iso font-medium tracking-wider
    border rounded-full transition-all duration-300 font-bold
    ${isScrolled
      ? 'bg-transparent btn-ghost-gradient text-gradient btn-ghost-scrolled'
      : isActive(path)
        ? 'btn-solid-gradient'
        : 'bg-transparent btn-ghost-gradient text-gradient btn-ghost-simple'
    }
  `;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout - Logo ortada, linkler sağda ve solda */}
        <div className="hidden lg:flex items-center justify-between py-6">
          {/* Sol Taraftaki Linkler */}
          <div className="flex items-center gap-2">
            {leftLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={getLinkClasses(link.path)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Ortada Logo - 2x büyük */}
          <Link to="/" className="flex items-center justify-center mx-8 overflow-hidden">
            <img
              src="/logo.png"
              alt="Rose Wedding Hall"
              className="h-32 w-auto object-contain transition-all duration-300 transform scale-[1.6]"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
          </Link>

          {/* Sağ Taraftaki Linkler */}
          <div className="flex items-center gap-2">
            {rightLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={getLinkClasses(link.path)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 focus:outline-none transition-colors ${isScrolled ? 'text-[#a4585a]' : 'text-[#a4585a]'
              }`}
            aria-label="Menüyü aç/kapat"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Center Logo */}
          <Link to="/" className="flex items-center overflow-hidden">
            <img
              src="/logo.png"
              alt="Rose Wedding Hall"
              className="h-20 w-auto object-contain transform scale-[1.4]"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
          </Link>

          {/* Spacer for balance */}
          <div className="w-10"></div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'
            } bg-white/95 backdrop-blur-md`}
        >
          <div className="flex flex-col gap-3 py-6 px-4">
            {allLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  px-4 py-3 text-xs font-iso font-bold uppercase tracking-widest text-center
                  rounded-full transition-all duration-300
                  ${isActive(link.path)
                    ? 'btn-solid-gradient'
                    : 'bg-white gradient-border text-gradient shadow-sm shadow-pink-50'
                  }
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
