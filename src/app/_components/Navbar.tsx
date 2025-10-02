'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from './LanguageProvider';

interface NavbarProps {
  activePage?: string;
}

const Navbar = ({ activePage = 'Beranda' }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
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
        { name: 'Tour Packages', href: '/paket-wisata' },
        { name: 'Gallery', href: '/galeri' },
        { name: 'Contact Us', href: '/kontak' },
      ];

  return (
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
              <img
                src="/image/logo/logo-desa-wisata.png"
                alt="Desa Wisata Silungkang Oso"
                className="object-contain h-[4.75rem] w-auto md:h-[4.5rem]"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  const nextElement = target.nextElementSibling as HTMLElement;
                  if (nextElement) {
                    target.style.display = 'none';
                    nextElement.style.display = 'block';
                  }
                }}
              />
              <span className="text-white font-bold text-lg hidden">
                Desa Wisata Silungkang Oso
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
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
              </Link>
            ))}

            {/* Language Toggle (desktop) */}
            <LanguageToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              aria-label="Buka menu"
              onClick={() => setIsMobileOpen((v) => !v)}
              className="p-2 rounded-lg text-white transition-colors duration-300 hover:bg-white/10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#102467]/95 backdrop-blur-md">
            <div className="px-4 py-3 space-y-2">
              {/* Language Toggle (mobile) */}
              <LanguageToggle />
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`block rounded-lg px-3 py-2 font-poppins font-medium transition-colors duration-200 ${
                    activePage === item.name ? 'bg-white/10 text-[#ffd704]' : 'text-gray-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
