'use client';

import { useState } from 'react';
import LanguageToggle from '../_components/LanguageToggle';
import Footer from '../_components/Footer';
import { useLanguage } from '../_components/LanguageProvider';

export default function BUMDes() {
  const [activePage, setActivePage] = useState('BUMDes');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { lang } = useLanguage();

  const navItems = [
    { name_id: 'Beranda', name_en: 'Home', href: '/' },
    { name_id: 'Profil Desa', name_en: 'Village Profile', href: '/profil-desa' },
    { name_id: 'Potensi Desa', name_en: 'Village Potential', href: '/potensi-desa' },
    { name_id: 'BUMDes', name_en: 'BUMDes', href: '/bumdes' },
    { name_id: 'Paket Wisata', name_en: 'Tour Package', href: '/paket-wisata' },
    { name_id: 'Galeri', name_en: 'Gallery', href: '/galeri' },
    { name_id: 'Kontak Kami', name_en: 'Contact Us', href: '/kontak' },
  ];

  const texts = {
    title_id: 'BUMDes',
    title_en: 'BUMDes',
    subtitle_id: 'Halaman BUMDes - Coming Soon',
    subtitle_en: 'BUMDes Page - Coming Soon'
  };

  return (
    <div className="min-h-screen bg-[#fffcf9]">
      {/* Navbar */}
      <nav className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg bg-[#102467]"}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-[#102467] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl font-poppins">G</span>
              </div>
              <span className="font-bold text-2xl font-poppins text-white">
                Desa Wisata
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item.name_id}
                  href={item.href} 
                  className={`font-poppins font-medium transition-all duration-300 hover:scale-105 relative ${
                    activePage === item.name_id 
                      ? 'text-[#ffd704]' 
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {lang === 'id' ? item.name_id : item.name_en}
                  {activePage === item.name_id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ffd704] rounded-full"></div>
                  )}
                </a>
              ))}
              {/* Language Toggle */}
              <LanguageToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                aria-label="Buka menu"
                onClick={() => setIsMobileOpen((v) => !v)}
                className="p-2 rounded-lg text-white transition-colors duration-300 hover:bg-[#102467]"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMobileOpen && (
          <div className="md:hidden border-t border-[#fffcf9]/10 bg-[#102467]">
            <div className="px-4 py-3 space-y-2">
              <LanguageToggle />
              {navItems.map((item) => (
                <a
                  key={item.name_id}
                  href={item.href}
                  onClick={() => { setActivePage(item.name_id); setIsMobileOpen(false); }}
                  className={`block rounded-lg px-3 py-2 font-poppins font-medium transition-colors duration-200 ${
                    activePage === item.name_id ? 'bg-white/10 text-[#ffd704]' : 'text-gray-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {lang === 'id' ? item.name_id : item.name_en}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 font-poppins">
              {lang === 'id' ? texts.title_id : texts.title_en}
            </h1>
            <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-600 font-poppins max-w-4xl mx-auto">
              {lang === 'id' ? texts.subtitle_id : texts.subtitle_en}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
