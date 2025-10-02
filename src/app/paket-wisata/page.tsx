'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LanguageToggle from '../_components/LanguageToggle';
import Footer from '../_components/Footer';
import { useLanguage } from '../_components/LanguageProvider';

export default function PaketWisata() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePage, setActivePage] = useState('Paket Wisata');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { lang } = useLanguage();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    title_id: 'Paket Wisata',
    title_en: 'Tour Package',
    subtitle_id: 'Jelajahi berbagai paket wisata menarik di Desa Wisata Silungkang Oso',
    subtitle_en: 'Explore various exciting tour packages at Silungkang Oso Tourism Village'
  };

  const tourPackages = [
    {
      id: 1,
      name_id: 'Paket Batu Runciang',
      name_en: 'Batu Runciang Package',
      image: '/image/paket-wisata/batu-runciang.png',
      description_id: 'Nikmati keindahan alam Batu Runciang dengan pemandangan yang menakjubkan',
      description_en: 'Enjoy the beauty of Batu Runciang with amazing natural scenery',
      price_id: 'Rp 5.000',
      price_en: 'IDR 5,000'
    },
    {
      id: 2,
      name_id: 'Paket Camping Ground',
      name_en: 'Camping Ground Package',
      image: '/image/paket-wisata/camping-ground.png',
      description_id: 'Pengalaman camping yang tak terlupakan di alam terbuka',
      description_en: 'Unforgettable camping experience in the great outdoors',
      price_id: 'Rp 35.000',
      price_en: 'IDR 35,000'
    },
    {
      id: 3,
      name_id: 'Paket Goa Kelambu',
      name_en: 'Goa Kelambu Package',
      image: '/image/paket-wisata/goa-kelambu.png',
      description_id: 'Petualangan menelusuri gua dengan keindahan stalaktit dan stalagmit',
      description_en: 'Cave exploration adventure with beautiful stalactites and stalagmites',
      price_id: 'Rp 10.000',
      price_en: 'IDR 10,000'
    },
    {
      id: 4,
      name_id: 'Paket Kolam Renang',
      name_en: 'Swimming Pool Package',
      image: '/image/paket-wisata/kolam-renang.png',
      description_id: 'Berenang dan bersantai di kolam renang alami yang segar',
      description_en: 'Swim and relax in fresh natural swimming pools',
      price_id: 'Rp 8.000',
      price_en: 'IDR 8,000'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fffcf9]">
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
                  className="object-contain h-[4.75rem] w-auto md:h-[4.5rem]"
                />
              </Link>
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
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/image/herobanner/Foto1.jpg"
          alt={String(lang) === 'id' ? 'Paket Wisata - Desa Wisata Silungkang Oso' : 'Tour Packages - Silungkang Oso Tourism Village'}
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

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Tour Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {tourPackages.map((pkg) => (
              <a
                key={pkg.id}
                href="/kontak"
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-64">
                  <Image
                    src={pkg.image}
                    alt={lang === 'id' ? pkg.name_id : pkg.name_en}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-colors duration-300"></div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-[#ffd704] text-[#102467] px-3 py-1 rounded-full text-sm font-bold font-poppins">
                      {lang === 'id' ? pkg.price_id : pkg.price_en}
                    </div>
                  </div>
                  
                  {/* Order Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 text-[#102467] px-3 py-1 rounded-full text-sm font-semibold font-poppins">
                      {lang === 'id' ? 'Klik untuk Pesan' : 'Click for Order'}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white font-poppins mb-2 drop-shadow-lg">
                      {lang === 'id' ? pkg.name_id : pkg.name_en}
                    </h3>
                    <p className="text-white font-poppins text-sm drop-shadow-md leading-relaxed">
                      {lang === 'id' ? pkg.description_id : pkg.description_en}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#102467] to-[#1e3a8a] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold font-poppins mb-4">
                {lang === 'id' ? 'Siap untuk Petualangan?' : 'Ready for Adventure?'}
              </h3>
              <p className="text-lg font-poppins mb-6 opacity-90">
                {lang === 'id' 
                  ? 'Hubungi kami untuk informasi lebih lanjut dan reservasi paket wisata'
                  : 'Contact us for more information and tour package reservations'
                }
              </p>
              <a
                href="/kontak"
                className="inline-flex items-center bg-[#ffd704] text-[#102467] px-8 py-3 rounded-full font-semibold font-poppins hover:bg-[#ffed4e] transition-colors duration-300"
              >
                {lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

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
