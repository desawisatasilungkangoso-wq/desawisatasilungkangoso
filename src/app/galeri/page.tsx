'use client';

import { useState, useEffect } from 'react';
import LanguageToggle from '../_components/LanguageToggle';
import Footer from '../_components/Footer';
import { useLanguage } from '../_components/LanguageProvider';

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
              <div className="flex flex-col text-center">
                <span className="font-bold text-xl font-poppins text-white leading-tight">
                Desa Wisata
              </span>
                <span className="font-semibold text-lg font-poppins text-white/90 leading-tight">
                  Silungkang Oso
              </span>
              </div>
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

      {/* Main Content */}
      <div>
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#102467] to-[#1e3a8a] pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white font-poppins">
                {lang === 'id' ? texts.title_id : texts.title_en}
              </h1>
              <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-200 font-poppins max-w-4xl mx-auto">
                {lang === 'id' ? texts.subtitle_id : texts.subtitle_en}
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="w-24 h-1 bg-gradient-to-r from-[#ffd704] to-[#ffed4e] rounded-full mx-auto mb-12"></div>
            
            <div className="space-y-12">
              {/* Video Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 font-poppins mb-6 text-center">
                  {String(lang) === 'id' ? 'Video Dokumentasi' : 'Documentation Video'}
                </h3>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 max-w-4xl mx-auto">
                  <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                    {/* Video - Tampilkan 1 video dulu */}
                    <video
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                      muted
                      playsInline
                    >
                      <source src="/image/video/Kolam Renang Mudiak Lugha.mp4" type="video/mp4" />
                      Browser Anda tidak mendukung video.
                    </video>
                    
                  </div>
                  <div className="mt-4 text-center">
                    <h4 className="text-lg font-semibold text-gray-800 font-poppins mb-2">
                      {String(lang) === 'id' ? 'Desa Wisata Silungkang Oso' : 'Silungkang Oso Tourism Village'}
                    </h4>
                    <p className="text-gray-600 font-poppins text-sm">
                      {String(lang) === 'id' 
                        ? 'Video dokumentasi lengkap tentang keindahan alam, budaya, dan aktivitas wisata di Desa Silungkang Oso'
                        : 'Complete documentation video about the natural beauty, culture, and tourism activities in Silungkang Oso Village'
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Photo Gallery Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 font-poppins mb-6 text-center">
                  {String(lang) === 'id' ? 'Galeri Foto' : 'Photo Gallery'}
                </h3>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  {/* Masonry Grid */}
                  <div className="columns-2 md:columns-3 lg:columns-5 gap-3 space-y-3">
                    {/* Image 1 - Large */}
                    <div className="break-inside-avoid">
                      <div className="relative group overflow-hidden rounded-lg">
                        <img 
                          src="/image/destinasi-wisata/batu-runciang.jpg" 
                          alt={String(lang) === 'id' ? 'Batu Runciang' : 'Runciang Stone'}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Image 2 - Medium */}
                    <div className="break-inside-avoid">
                      <div className="relative group overflow-hidden rounded-lg">
                        <img 
                          src="/image/budaya/tenun-songket-silungkang.png" 
                          alt={String(lang) === 'id' ? 'Tenun Songket Silungkang' : 'Silungkang Songket Weaving'}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Image 3 - Small */}
                    <div className="break-inside-avoid">
                      <div className="relative group overflow-hidden rounded-lg">
                        <img 
                          src="/image/budaya/talempong-botuang.webp" 
                          alt={String(lang) === 'id' ? 'Talempong Botuang' : 'Botuang Talempong'}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Image 4 - Medium */}
                    <div className="break-inside-avoid">
                      <div className="relative group overflow-hidden rounded-lg">
                        <img 
                          src="/image/budaya/pidato-adat.jpg" 
                          alt={String(lang) === 'id' ? 'Pidato Adat' : 'Traditional Speech'}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Image 5 - Small */}
                    <div className="break-inside-avoid">
                      <div className="relative group overflow-hidden rounded-lg">
                        <img 
                          src="/image/budaya/rabana.jpg" 
                          alt={String(lang) === 'id' ? 'Rabana' : 'Rabana Traditional Music'}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Image 6 - Large */}
                    <div className="break-inside-avoid">
                      <div className="relative group overflow-hidden rounded-lg">
                        <img 
                          src="/image/product/Songket Silungkang 1.webp" 
                          alt={String(lang) === 'id' ? 'Songket Silungkang 1' : 'Silungkang Songket 1'}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Image 7 - Medium */}
                    <div className="break-inside-avoid">
                      <div className="relative group overflow-hidden rounded-lg">
                        <img 
                          src="/image/product/Songket Silungkang.webp" 
                          alt={String(lang) === 'id' ? 'Songket Silungkang' : 'Silungkang Songket'}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Image 8 - Small */}
                    <div className="break-inside-avoid">
                      <div className="relative group overflow-hidden rounded-lg">
                        <img 
                          src="/image/product/Tenun Silungkang...png" 
                          alt={String(lang) === 'id' ? 'Tenun Silungkang' : 'Silungkang Weaving'}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Image 9 - Additional for desktop */}
                    <div className="break-inside-avoid">
                      <div className="relative group overflow-hidden rounded-lg">
                        <img 
                          src="/image/destinasi-wisata/camping-ground.JPG" 
                          alt={String(lang) === 'id' ? 'Camping Ground Guak Kumbuah' : 'Guak Kumbuah Camping Ground'}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Image 10 - Additional for desktop */}
                    <div className="break-inside-avoid">
                      <div className="relative group overflow-hidden rounded-lg">
                        <img 
                          src="/image/destinasi-wisata/goa-kelambu.JPG" 
                          alt={String(lang) === 'id' ? 'Goa Kelambu' : 'Kelambu Cave'}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Image 11 - Additional for desktop */}
                    <div className="break-inside-avoid">
                      <div className="relative group overflow-hidden rounded-lg">
                        <img 
                          src="/image/destinasi-wisata/kolam-renang-mudiak-lugha.JPG" 
                          alt={String(lang) === 'id' ? 'Kolam Renang Mudiak Lugha' : 'Mudiak Lugha Swimming Pool'}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
