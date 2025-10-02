'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LanguageToggle from '../_components/LanguageToggle';
import Footer from '../_components/Footer';
import SouvenirSection from '../_components/SouvenirSection';
import { useLanguage } from '../_components/LanguageProvider';

export default function BUMDes() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePage, setActivePage] = useState('BUMDes');
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
    title_id: 'BUMDes Silungkang Oso',
    title_en: 'BUMDes Silungkang Oso',
    subtitle_id: 'Badan Usaha Milik Desa',
    subtitle_en: 'Village-Owned Enterprise',
    profile_title_id: 'Profil',
    profile_title_en: 'Profile',
    umkm_title_id: 'UMKM',
    umkm_title_en: 'MSME',
    profile_content_id: `Badan Usaha Milik Desa (BumDes) Silungkang Oso adalah lembaga usaha yang dimiliki dan dikelola oleh Pemerintah Desa Silungkang Oso untuk mengoptimalkan potensi ekonomi desa secara mandiri dan berkelanjutan. Fokus utama BumDes adalah mengembangkan sektor pariwisata dan usaha ekonomi kreatif sebagai sumber pendapatan dan peningkatan kesejahteraan warga.

Desa Silungkang Oso, yang terletak di Kecamatan Silungkang, Kota Sawahlunto, memiliki berbagai potensi unggulan seperti sektor pertanian (kemiri, kakao, kulit manis, jagung, padi, bawang merah, dan ubi jalar) serta kesenian tradisional berupa tenun songket khas Minangkabau. BumDes mengelola dan mempromosikan potensi-potensi ini sebagai bagian dari pengembangan ekonomi lokal.

Dalam pelaksanaannya, BumDes Silungkang Oso memanfaatkan dana Anggaran Pendapatan dan Belanja Desa (APBdes) untuk menjalankan unit-unit usaha, termasuk pengembangan wisata desa dengan pengelolaan fasilitas pemandian dan sarana pendukung wisata lainnya. Selain itu, BumDes menjalankan program pengembangan usaha mikro, kecil, dan menengah (UMKM) di desa untuk memperluas peluang pasar dan meningkatkan daya saing produk-produk lokal.

BumDes Silungkang Oso berkomitmen untuk mengelola aset desa secara profesional demi mendukung pembangunan ekonomi yang inklusif dan berkelanjutan, dengan tujuan meningkatkan kualitas hidup masyarakat Desa Silungkang Oso secara keseluruhan.`,
    profile_content_en: `The Village-Owned Enterprise (BumDes) Silungkang Oso is a business entity owned and managed by the Silungkang Oso Village Government to optimize the village's economic potential independently and sustainably. The main focus of BumDes is developing the tourism sector and creative economic enterprises as sources of income and improving community welfare.

Silungkang Oso Village, located in Silungkang District, Sawahlunto City, has various leading potentials such as the agricultural sector (candlenut, cocoa, cinnamon, corn, rice, shallots, and sweet potatoes) as well as traditional arts in the form of Minangkabau characteristic songket weaving. BumDes manages and promotes these potentials as part of local economic development.

In its implementation, BumDes Silungkang Oso utilizes Village Revenue and Expenditure Budget (APBdes) funds to run business units, including village tourism development with the management of bathing facilities and other tourism support facilities. In addition, BumDes runs micro, small, and medium enterprise (MSME) development programs in the village to expand market opportunities and improve the competitiveness of local products.

BumDes Silungkang Oso is committed to managing village assets professionally to support inclusive and sustainable economic development, with the goal of improving the quality of life of the Silungkang Oso Village community as a whole.`,
    umkm_songket_title_id: 'UMKM Songket & Kerajinan',
    umkm_songket_title_en: 'Songket & Craft MSME',
    umkm_songket_content_id: 'Produksi souvenir turunan: gantungan kunci, tote bag, pin, syal, salempang, id card berbahan songket.',
    umkm_songket_content_en: 'Production of derivative souvenirs: keychains, tote bags, pins, scarves, shawls, songket-based ID cards.',
    umkm_agriculture_title_id: 'Pertanian & Olahan Produk',
    umkm_agriculture_title_en: 'Agriculture & Processed Products',
    umkm_agriculture_content_id: [
      'Pengolahan kakao menjadi cokelat lokal.',
      'Kemasan rempah (kulit manis, kemiri, pala) dalam bentuk produk siap jual.',
      'Produk olahan ubi, jagung, dan bawang lokal.'
    ],
    umkm_agriculture_content_en: [
      'Processing cocoa into local chocolate.',
      'Spice packaging (cinnamon, candlenut, nutmeg) in ready-to-sell product form.',
      'Processed products from sweet potatoes, corn, and local shallots.'
    ]
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
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link 
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
        <div className="relative h-96 overflow-hidden">
          <Image
            src="/image/herobanner/Foto1.jpg"
            alt={String(lang) === 'id' ? 'BUMDes - Desa Wisata Silungkang Oso' : 'BUMDes - Silungkang Oso Tourism Village'}
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

        {/* Profile Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins mb-4">
                {lang === 'id' ? texts.profile_title_id : texts.profile_title_en}
              </h2>
              <div className="w-24 h-1 bg-[#ffd704] mx-auto rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <p className="text-gray-700 leading-relaxed text-lg font-poppins whitespace-pre-line">
                  {lang === 'id' ? texts.profile_content_id : texts.profile_content_en}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* UMKM Section */}
        <div className="py-16 bg-[#fffcf9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins mb-4">
                {lang === 'id' ? texts.umkm_title_id : texts.umkm_title_en}
              </h2>
              <div className="w-24 h-1 bg-[#ffd704] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Songket & Kerajinan */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#102467] to-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 font-poppins">
                    {lang === 'id' ? texts.umkm_songket_title_id : texts.umkm_songket_title_en}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed font-poppins">
                  {lang === 'id' ? texts.umkm_songket_content_id : texts.umkm_songket_content_en}
                </p>
              </div>

              {/* Pertanian & Olahan Produk */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#102467] to-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 font-poppins">
                    {lang === 'id' ? texts.umkm_agriculture_title_id : texts.umkm_agriculture_title_en}
                  </h3>
                </div>
                <ul className="text-gray-600 leading-relaxed font-poppins space-y-2">
                  {(lang === 'id' ? texts.umkm_agriculture_content_id : texts.umkm_agriculture_content_en).map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#102467] mr-3 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Souvenir Section */}
        <div id="umkm-souvenir" className="py-16 bg-white -mt-20">
          <SouvenirSection />
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
