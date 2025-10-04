'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LanguageToggle from '../_components/LanguageToggle';
import Footer from '../_components/Footer';
import { useLanguage } from '../_components/LanguageProvider';
import GallerySection from '../_components/GallerySection'; // Added import for GallerySection

export default function Galeri() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePage, setActivePage] = useState('Galeri');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { lang } = useLanguage();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = String(lang) === 'id'
    ? [
        { name: 'Beranda', href: '/' },
        { name: 'Profil Desa', href: '/profil-desa' },
        { name: 'Potensi Desa', href: '/potensi-desa' },
        { name: 'BUMDes', href: '/bumdes' },
        { name: 'Paket Wisata', href: '/paket-wisata' },
        { name: 'Galeri', href: '/galeri' },
        { name: 'Kontak Kami', href: '/kontak' },
      ]
    : [
        { name: 'Home', href: '/' },
        { name: 'Village Profile', href: '/profil-desa' },
        { name: 'Village Potential', href: '/potensi-desa' },
        { name: 'BUMDes', href: '/bumdes' },
        { name: 'Tour Package', href: '/paket-wisata' },
        { name: 'Gallery', href: '/galeri' },
        { name: 'Contact Us', href: '/kontak' },
      ];

  const texts = {
    title_id: 'Galeri',
    title_en: 'Gallery',
    subtitle_id: 'Jelajahi keindahan dan keunikan Desa Wisata Silungkang Oso melalui dokumentasi visual yang menampilkan kekayaan alam, budaya, dan kehidupan masyarakat setempat.',
    subtitle_en: 'Explore the beauty and uniqueness of Silungkang Oso Tourism Village through visual documentation showcasing the richness of nature, culture, and local community life.'
  };

  return (
    <div className="bg-[#fffcf9]">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg ${
        isScrolled 
          ? 'bg-[#102467]/95 backdrop-blur-md' 
          : 'bg-[#fffcf9]/10 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/image/logo/logo-desa-wisata.png"
                  alt="Desa Wisata Silungkang Oso"
                  width={80}
                  height={40}
                  className="object-contain h-[10rem] w-auto md:h-[9.5rem] lg:h-[10rem]"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  onClick={() => setActivePage(item.name)}
                  className={`font-poppins font-medium transition-all duration-300 hover:scale-105 relative ${
                    activePage === item.name 
                      ? 'text-[#ffd704]' 
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {item.name}
                  {activePage === item.name && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ffd704] rounded-full"></div>
                  )}
                </a>
              ))}

              {/* Language Toggle (desktop) */}
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
        {/* Mobile menu panel */}
        {isMobileOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#102467]/95 backdrop-blur-md">
            <div className="px-4 py-3 space-y-2">
              {/* Language Toggle (mobile) */}
              <LanguageToggle />
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => { setActivePage(item.name); setIsMobileOpen(false); }}
                  className={`block rounded-lg px-3 py-2 font-poppins font-medium transition-colors duration-200 ${
                    activePage === item.name ? 'bg-white/10 text-[#ffd704]' : 'text-gray-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <Image
            src="/image/budaya/rabana.jpg"
            alt={String(lang) === 'id' ? 'Galeri - Desa Wisata Silungkang Oso' : 'Gallery - Silungkang Oso Tourism Village'}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 font-poppins">
                {lang === 'id' ? texts.title_id : texts.title_en}
              </h1>
              <p className="text-lg font-poppins opacity-90 max-w-3xl mx-auto">
                {lang === 'id' ? texts.subtitle_id : texts.subtitle_en}
              </p>
            </div>
          </div>
        </div>

      {/* Main Content - Reused from homepage with limited images, hide internal header */}
      <GallerySection imageLimit={6} showHeader={false} />

      <Footer />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/6281277849089"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-110 group"
          aria-label="Chat via WhatsApp"
        >
          <img 
            src="https://1.bp.blogspot.com/-tN6DCkDTyT4/XyJoQz9yGcI/AAAAAAAAAF4/aBZwjuwwmb4iG3ZWEPKOZOi59_E4sXS5wCLcBGAsYHQ/s2048/logo%2Bwa%2Bpng%2Byogiancreative.png" 
            alt="WhatsApp" 
            className="w-12 h-12"
          />
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-poppins opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {String(lang) === 'id' ? 'Chat via WhatsApp' : 'Chat via WhatsApp'}
          </div>
        </a>
      </div>
    </div>
  );
}
