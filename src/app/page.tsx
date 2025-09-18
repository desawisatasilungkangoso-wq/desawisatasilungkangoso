'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from './_components/LanguageProvider';
import LanguageToggle from './_components/LanguageToggle';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePage, setActivePage] = useState('Beranda');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [destinationIndex, setDestinationIndex] = useState(0);
  const [isAutoSlidePaused, setIsAutoSlidePaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { lang } = useLanguage();

  const slides = [
    {
      image: '/image/herobanner/image1.JPG',
      title_id: 'Selamat Datang di Desa Wisata Silungkang Oso',
      title_en: 'Welcome to Silungkang Oso Tourism Village',
      desc_id: 'Bergerak Bersama, Tumbuh Bersama, Maju Bersama.',
      desc_en: 'Move Together, Grow Together, Move Forward Together.',
    },
    {
      image: '/image/herobanner/image2.JPG',
      title_id: 'Eksplor Desa Silungkang Oso',
      title_en: 'Explore Silungkang Oso Village',
      desc_id: 'Nikmati keindahan alam, budaya lokal, dan pengalaman tak terlupakan.',
      desc_en: 'Enjoy nature, local culture, and unforgettable experiences.',
    },
    {
      image: '/image/herobanner/image3.JPG',
      title_id: 'Dukung Produk Lokal',
      title_en: 'Support Local Products',
      desc_id: 'Belanja produk UMKM dan rasakan cita rasa khas masyarakat setempat.',
      desc_en: 'Shop MSME products and savor the authentic local flavors.',
    },
    {
      image: '/image/herobanner/image4.JPG',
      title_id: 'Dukung Produk Lokal',
      title_en: 'Support Local Products',
      desc_id: 'Belanja produk UMKM dan rasakan cita rasa khas masyarakat setempat.',
      desc_en: 'Shop MSME products and savor the authentic local flavors.',
    },
  ];

  const destinations = [
    {
      id: 1,
      image: '/image/destinasi-wisata/kolam-renang-mudiak-lugha.JPG',
      title_id: 'Kolam Renang Mudiak Lugha',
      title_en: 'Mudiak Lugha Swimming Pool',
      description_id: 'Kolam renang alami dengan air jernih dan suasana sejuk di tengah hutan',
      description_en: 'Natural swimming pool with clear water and cool atmosphere in the middle of the forest',
      distance: '900m',
      travelTime: '3 menit dari gerbang utama',
      ticketPrice: 'Rp 5.000',
      facilities_id: ['Gazebo', 'Toilet', 'Parkir', 'Warung'],
      facilities_en: ['Gazebo', 'Toilet', 'Parking', 'Stall'],
      qrRoute: 'https://maps.app.goo.gl/uqupHTqHB2sCQJku9',
      detailLink: '/potensi-desa#kolam-renang',
      rating: 4.5
    },
    {
      id: 2,
      image: '/image/destinasi-wisata/camping-ground.JPG',
      title_id: 'Camping Ground Guak Kumbuah',
      title_en: 'Guak Kumbuah Camping Ground',
      description_id: 'Area camping dengan pemandangan pegunungan dan spot terbaik untuk melihat sunrise',
      description_en: 'Camping area with mountain views and the best spot to see the sunrise',
      distance: '2,1 km',
      travelTime: '5 menit dari gerbang utama',
      ticketPrice: 'Rp 10.000',
      facilities_id: ['Tenda Sewa', 'Api Unggun', 'Toilet', 'Spot Foto'],
      facilities_en: ['Tent Rental', 'Bonfire', 'Toilet', 'Photo Spot'],
      qrRoute: 'https://maps.app.goo.gl/oBapivwZExF6z1JF9',
      detailLink: '/potensi-desa#camping',
      rating: 4.7
    },
    {
      id: 3,
      image: '/image/destinasi-wisata/goa-kelambu.JPG',
      title_id: 'Goa Kelambu',
      title_en: 'Kelambu Cave',
      description_id: 'Gua alami dengan stalaktit dan stalagmit yang menawan, cocok untuk petualangan',
      description_en: 'Natural cave with charming stalactites and stalagmites, suitable for adventure',
      distance: '2,9 km',
      travelTime: '7 menit dari gerbang utama',
      ticketPrice: 'Rp 7.500',
      facilities_id: ['Guide', 'Papan informasi & petunjuk arah', 'Alat safety', 'Spot foto'],
      facilities_en: ['Guide', 'Information board & directions', 'Safety equipment', 'Photo spot'],
      qrRoute: 'https://maps.app.goo.gl/NwbXtZRYxi7XyvpXA',
      detailLink: '/potensi-desa#goa',
      rating: 4.3
    },
    {
      id: 4,
      image: '/image/destinasi-wisata/kolam-renang-mudiak-lugha.JPG', // Placeholder - will need actual image
      title_id: 'Batu Runciang',
      title_en: 'Batu Runciang',
      description_id: 'Batu besar dengan pemandangan alam yang menakjubkan dan spot foto yang instagramable',
      description_en: 'Large rock with amazing natural views and instagramable photo spots',
      distance: '4 km',
      travelTime: '11 menit dari gerbang utama',
      ticketPrice: 'Rp 8.000',
      facilities_id: ['Area parkir', 'Toilet umum', 'Mushola', 'Pusat informasi', 'Warung'],
      facilities_en: ['Parking area', 'Public toilet', 'Prayer room', 'Information center', 'Stall'],
      qrRoute: 'https://maps.app.goo.gl/GP3CEqjcCt2tdkNaA',
      detailLink: '/potensi-desa#batu-runciang',
      rating: 4.6
    }
  ];

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const nextDestination = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDestinationIndex((prev) => (prev + 1) % destinations.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevDestination = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDestinationIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate slides setiap 7 detik
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(intervalId);
  }, [slides.length]);

  // Auto-slide destinations setiap 3 detik untuk continuous effect
  useEffect(() => {
    if (isAutoSlidePaused || isTransitioning) return;
    
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setDestinationIndex((prev) => (prev + 1) % destinations.length);
      setTimeout(() => setIsTransitioning(false), 600);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [destinations.length, isAutoSlidePaused, isTransitioning]);

  // Language is handled by global provider

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
        { name: 'Beranda', href: '/' },
        { name: 'Profil Desa', href: '/profil-desa' },
        { name: 'Potensi Desa', href: '/potensi-desa' },
        { name: 'BUMDes', href: '/bumdes' },
        { name: 'Paket Wisata', href: '/paket-wisata' },
        { name: 'Galeri', href: '/galeri' },
        { name: 'Kontak Kami', href: '/kontak' },
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
        <div className="relative w-screen h-screen overflow-hidden mb-16">
              {/* Slides */}
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 bg-cover bg-center bg-no-repeat slide-transition ${
                    index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                  style={{ backgroundImage: `url('${slide.image}')` }}
                >
                </div>
              ))}

              {/* Overlay shape untuk tulisan */}
              <div className="absolute inset-0 bg-black/40 slide-transition"></div>

              {/* Hero Content (title + description berubah sesuai slide) */}
              <div className="relative z-10 h-full flex items-center justify-center px-4">
                <div className="text-center max-w-4xl mx-auto px-5 md:px-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white font-poppins drop-shadow-2xl text-transition">
                    {String(lang) === 'id' ? slides[activeIndex].title_id : slides[activeIndex].title_en}
                  </h1>
                  <p className="text-base md:text-xl font-medium leading-relaxed text-white font-poppins drop-shadow-2xl text-transition">
                    {String(lang) === 'id' ? slides[activeIndex].desc_id : slides[activeIndex].desc_en}
                  </p>
                  <div className="mt-6">
                    <a
                      href="/potensi-desa"
                      className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#ffd704] hover:bg-[#ffd704]/90 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 ease-out backdrop-blur-sm font-poppins font-semibold hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 outline-none before:absolute before:inset-0 before:-translate-x-full group-hover:before:translate-x-0 before:bg-gradient-to-r before:from-white/0 before:via-white/25 before:to-white/0 before:transition-transform before:duration-500 before:pointer-events-none"
                    >
                      {String(lang) === 'id' ? 'Kunjungi\u00a0\u00a0\u00a0Sekarang' : 'Visit\u00a0\u00a0\u00a0Now'}
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Tentang Desa Silungkang Oso */}
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 font-poppins">
                {String(lang) === 'id' ? 'Tentang Desa Silungkang Oso' : 'About Silungkang Oso Village'}
              </h2>
              
              {/* Deskripsi Utama dengan Video Profil */}
              <div className="mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Kolom Kiri - Deskripsi */}
                  <div className="flex justify-center">
                    <div className="prose prose-lg max-w-none text-gray-700 font-poppins leading-relaxed text-justify">
                      {String(lang) === 'id' ? (
                        <>
                          <p className="mb-4">
                          Desa Silungkang Oso terletak di Kecamatan Silungkang, Kota Sawahlunto, Sumatera Barat, dengan luas wilayah sekitar 6,57 km². Desa ini berjarak sekitar 78 km dari Kota Padang dengan waktu tempuh sekitar 2 jam menggunakan kendaraan roda empat. Desa ini berada pada ketinggian antara 267 hingga 710 meter di atas permukaan laut, dengan suhu udara tahunan sekitar 22°C, sehingga memiliki iklim yang sejuk dan nyaman.
                          </p>
                          
                          {/* Kondisi Geografis */}
                          <div className="mb-6">
                            <h4 className="text-lg font-bold mb-4 text-gray-800 font-poppins text-center">
                              {String(lang) === 'id' ? 'Kondisi Geografis' : 'Geographic Conditions'}
                            </h4>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {/* Lokasi */}
                              <div className="text-center">
                                <div className="flex justify-center mb-2">
                                  <svg className="w-8 h-8 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                </div>
                                <h5 className="text-sm font-bold mb-2 text-gray-800 font-poppins">
                                  {String(lang) === 'id' ? 'Lokasi' : 'Location'}
                                </h5>
                                <div className="space-y-1 text-gray-600 font-poppins text-xs">
                                  <div>{String(lang) === 'id' ? 'Kecamatan Silungkang' : 'Silungkang District'}</div>
                                  <div>{String(lang) === 'id' ? 'Kota Sawahlunto' : 'Sawahlunto City'}</div>
                                  <div>{String(lang) === 'id' ? 'Sumatera Barat' : 'West Sumatra'}</div>
                                </div>
                              </div>

                              {/* Luas Wilayah */}
                              <div className="text-center">
                                <div className="flex justify-center mb-2">
                                  <svg className="w-8 h-8 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                  </svg>
                                </div>
                                <h5 className="text-sm font-bold mb-2 text-gray-800 font-poppins">
                                  {String(lang) === 'id' ? 'Luas Wilayah' : 'Area'}
                                </h5>
                                <div className="space-y-1 text-gray-600 font-poppins text-xs">
                                  <div>6,57 km²</div>
                                </div>
                              </div>

                              {/* Ketinggian */}
                              <div className="text-center">
                                <div className="flex justify-center mb-2">
                                  <svg className="w-8 h-8 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                  </svg>
                                </div>
                                <h5 className="text-sm font-bold mb-2 text-gray-800 font-poppins">
                                  {String(lang) === 'id' ? 'Ketinggian' : 'Altitude'}
                                </h5>
                                <div className="space-y-1 text-gray-600 font-poppins text-xs">
                                  <div>267-710 mdpl</div>
                                  <div>{String(lang) === 'id' ? 'iklim sejuk' : 'cool climate'}</div>
                                  <div>{String(lang) === 'id' ? 'suhu 22°C' : 'temperature 22°C'}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <p className="mb-6">
                          Penduduk Desa Silungkang Oso berjumlah sekitar 1.574 jiwa, terdiri dari laki-laki dan perempuan. Desa ini terdiri dari empat dusun utama: Lubuk Kubang, Sungai Cacang, Sawah Darek, dan Kebun Jeruk. Mata pencaharian utama masyarakatnya meliputi pertanian, bertenun (songket), dan berdagang. Di bidang pertanian, mereka menanam berbagai tanaman seperti kemiri, kulit manis, kakao, jagung, padi, bawang, dan ubi. Sedangkan di bidang bertenun, kegiatan tersebut telah dilakukan secara turun-temurun dan merupakan bagian penting dari budaya desa.
                        </p>
                          
                          {/* Data Stats */}
                          <div className="grid grid-cols-2 gap-6">
                            {/* History Stats */}
                            <div className="text-center">
                              <div className="flex justify-center mb-3">
                                <svg className="w-8 h-8 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <div className="text-3xl font-bold text-gray-800 font-poppins mb-2">4</div>
                              <div className="text-sm text-gray-600 font-poppins">
                                {String(lang) === 'id' ? 'Dusun' : 'Hamlets'}
                              </div>
                            </div>
                            
                            {/* Population Stats */}
                            <div className="text-center">
                              <div className="flex justify-center mb-3">
                                <svg className="w-8 h-8 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div className="text-3xl font-bold text-gray-800 font-poppins mb-2">1.574</div>
                            <div className="text-sm text-gray-600 font-poppins">
                              {String(lang) === 'id' ? 'Jiwa Penduduk' : 'Population'}
                            </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <p className="mb-4">
                            Silungkang Oso Village is located in Silungkang District, Sawahlunto City, West Sumatra, with an area of approximately 6.57 km². The village is about 78 km from Padang City with a travel time of about 2 hours by four-wheeled vehicle. The village is located at an altitude between 267 to 710 meters above sea level, with an annual air temperature of around 22°C, making it have a cool and comfortable climate.
                          </p>
                          
                          {/* Kondisi Geografis */}
                          <div className="mb-6">
                            <h4 className="text-lg font-bold mb-4 text-gray-800 font-poppins text-center">
                              {String(lang) === 'id' ? 'Kondisi Geografis' : 'Geographic Conditions'}
                            </h4>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {/* Lokasi */}
                              <div className="text-center">
                                <div className="flex justify-center mb-2">
                                  <svg className="w-8 h-8 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                </div>
                                <h5 className="text-sm font-bold mb-2 text-gray-800 font-poppins">
                                  {String(lang) === 'id' ? 'Lokasi' : 'Location'}
                                </h5>
                                <div className="space-y-1 text-gray-600 font-poppins text-xs">
                                  <div>{String(lang) === 'id' ? 'Kecamatan Silungkang' : 'Silungkang District'}</div>
                                  <div>{String(lang) === 'id' ? 'Kota Sawahlunto' : 'Sawahlunto City'}</div>
                                  <div>{String(lang) === 'id' ? 'Sumatera Barat' : 'West Sumatra'}</div>
                                </div>
                              </div>

                              {/* Luas Wilayah */}
                              <div className="text-center">
                                <div className="flex justify-center mb-2">
                                  <svg className="w-8 h-8 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                  </svg>
                                </div>
                                <h5 className="text-sm font-bold mb-2 text-gray-800 font-poppins">
                                  {String(lang) === 'id' ? 'Luas Wilayah' : 'Area'}
                                </h5>
                                <div className="space-y-1 text-gray-600 font-poppins text-xs">
                                  <div>6,57 km²</div>
                                </div>
                              </div>

                              {/* Ketinggian */}
                              <div className="text-center">
                                <div className="flex justify-center mb-2">
                                  <svg className="w-8 h-8 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                  </svg>
                                </div>
                                <h5 className="text-sm font-bold mb-2 text-gray-800 font-poppins">
                                  {String(lang) === 'id' ? 'Ketinggian' : 'Altitude'}
                                </h5>
                                <div className="space-y-1 text-gray-600 font-poppins text-xs">
                                  <div>267-710 mdpl</div>
                                  <div>{String(lang) === 'id' ? 'iklim sejuk' : 'cool climate'}</div>
                                  <div>{String(lang) === 'id' ? 'suhu 22°C' : 'temperature 22°C'}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <p className="mb-6">
                            The population of Silungkang Oso Village is about 1,574 people, consisting of men and women. The village consists of four main hamlets: Lubuk Kubang, Sungai Cacang, Sawah Darek, and Kebun Jeruk. The main livelihoods of the community include agriculture, weaving (songket), and trading. In agriculture, they grow various crops such as candlenut, cinnamon, cocoa, corn, rice, onions, and sweet potatoes. Meanwhile, in weaving, this activity has been carried out from generation to generation and is an important part of the village culture.
                          </p>
                          
                          {/* Data Stats */}
                          <div className="grid grid-cols-2 gap-6">
                            {/* History Stats */}
                            <div className="text-center">
                              <div className="flex justify-center mb-3">
                                <svg className="w-8 h-8 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <div className="text-3xl font-bold text-gray-800 font-poppins mb-2">4</div>
                              <div className="text-sm text-gray-600 font-poppins">
                                {String(lang) === 'id' ? 'Dusun' : 'Hamlets'}
                              </div>
                            </div>
                            
                            {/* Population Stats */}
                            <div className="text-center">
                              <div className="flex justify-center mb-3">
                                <svg className="w-8 h-8 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div className="text-3xl font-bold text-gray-800 font-poppins mb-2">1.574</div>
                            <div className="text-sm text-gray-600 font-poppins">
                              {String(lang) === 'id' ? 'Jiwa Penduduk' : 'Population'}
                            </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  
                  {/* Kolom Kanan - Video Profil */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 font-poppins">
                      {String(lang) === 'id' ? 'Video Profil Desa' : 'Village Profile Video'}
                    </h3>
                    <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                      {/* Video Placeholder */}
                      <div className="aspect-video bg-gray-200 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-sm font-medium">
                            {String(lang) === 'id' ? 'Video Profil Akan Segera Hadir' : 'Profile Video Coming Soon'}
                          </p>
                          <p className="text-xs mt-1 opacity-75">
                            {String(lang) === 'id' ? 'Tempat untuk video profil desa' : 'Place for village profile video'}
                          </p>
                        </div>
                      </div>
                      
                      {/* Video Controls Placeholder */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-3">
                        <div className="flex items-center space-x-3">
                          <button className="text-white hover:text-gray-300 transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </button>
                          <div className="flex-1 bg-gray-600 rounded-full h-1">
                            <div className="bg-white h-1 rounded-full w-0"></div>
                          </div>
                          <span className="text-white text-xs">0:00</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Video Description */}
                    <div className="mt-4 text-sm text-gray-600 font-poppins">
                      {String(lang) === 'id' ? (
                        <p>
                          Video profil ini akan menampilkan keindahan alam, kekayaan budaya, dan kehidupan masyarakat Desa Silungkang Oso yang penuh dengan tradisi dan kearifan lokal.
                        </p>
                      ) : (
                        <p>
                          This profile video will showcase the natural beauty, cultural richness, and community life of Silungkang Oso Village filled with traditions and local wisdom.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              
              {/* Sejarah & Budaya Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-8 text-gray-800 font-poppins">
                  {String(lang) === 'id' ? 'Sejarah dan Budaya Silungkang Oso' : 'History and Culture of Silungkang Oso'}
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Column - Text & Data */}
                  <div>
                    {/* Scrollable Content Container */}
                    <div className="max-h-80 overflow-y-auto p-4 mb-8">
                      <div className="prose prose-lg max-w-none text-gray-700 font-poppins leading-relaxed text-justify">
                      {String(lang) === 'id' ? (
                        <>
                          <p className="mb-4">
                              Desa Silungkang Oso merupakan bagian dari <strong>Kecamatan Silungkang, Kota Sawahlunto, Sumatera Barat</strong>. Kawasan ini memiliki sejarah panjang yang erat kaitannya dengan perjuangan rakyat. Pada <strong>1 Januari 1927</strong>, terjadi sebuah peristiwa besar yang dikenal dengan <strong>Pemberontakan Silungkang</strong>, yaitu perlawanan buruh dan masyarakat terhadap pemerintahan kolonial Belanda. Pemberontakan ini menjadi salah satu tonggak penting dalam sejarah perjuangan kemerdekaan Indonesia, karena menegaskan semangat perlawanan kaum buruh tambang dan masyarakat setempat.
                            </p>
                            <p className="mb-4">
                              Asal-usul nama <strong>Silungkang</strong> sendiri masih menjadi perdebatan. Beberapa sumber menyebutkan nama ini berasal dari seorang tokoh atau lurah bernama <strong>Lungkang</strong>, sementara pendapat lain mengaitkannya dengan istilah lokal dalam bahasa <strong>Minangkabau</strong>. Selain sejarah perjuangan, kawasan Silungkang juga menyimpan jejak peninggalan kolonial, seperti rumah-rumah bergaya <strong>Belanda</strong> serta infrastruktur bersejarah, termasuk <strong>jembatan gantung tanpa tiang penyangga</strong> yang hingga kini masih digunakan masyarakat.
                            </p>
                            <h4 className="text-xl font-bold mb-3 text-gray-800 font-poppins">
                              Budaya dan Kearifan Lokal
                            </h4>
                            <p className="mb-4">
                              Masyarakat Desa Silungkang Oso dikenal memiliki budaya yang kuat dan terjaga. Salah satu warisan budaya paling terkenal adalah <strong>tenun songket Silungkang</strong>, yang sudah diwariskan secara turun-temurun sejak ratusan tahun lalu. Songket Silungkang memiliki keindahan dan kualitas yang setara dengan songket Pandai Sikek, bahkan menjadi salah satu identitas budaya penting Kota Sawahlunto.
                          </p>
                          <p>
                              Selain itu, masyarakat masih memelihara berbagai tradisi adat, seperti <strong>pidato adat, taktumbin, turun mandi, bakau, dan manjalang mintuo</strong>. Dalam bidang kesenian, Silungkang Oso dikenal dengan <strong>randai</strong> serta <strong>talempong botuang</strong>, yang telah ditetapkan sebagai <strong>Warisan Budaya Takbenda Indonesia</strong> oleh Kementerian Pendidikan dan Kebudayaan.
                            </p>
                            <p className="mt-4">
                              Kearifan lokal yang terjaga ini tidak hanya memperkuat identitas budaya masyarakat, tetapi juga memberikan daya tarik tersendiri bagi wisatawan yang berkunjung, sehingga menjadikan Silungkang Oso sebagai salah satu destinasi budaya dan sejarah yang penting di Sumatera Barat.
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="mb-4">
                              Silungkang Oso Village is part of <strong>Silungkang District, Sawahlunto City, West Sumatra</strong>. This area has a long history closely related to the people&apos;s struggle. On <strong>January 1, 1927</strong>, a major event known as the <strong>Silungkang Rebellion</strong> occurred, which was a resistance by workers and the community against the Dutch colonial government. This rebellion became one of the important milestones in the history of Indonesia&apos;s independence struggle, as it affirmed the spirit of resistance of the mining workers and local community.
                            </p>
                            <p className="mb-4">
                              The origin of the name <strong>Silungkang</strong> itself is still debated. Some sources mention that this name comes from a figure or village head named <strong>Lungkang</strong>, while other opinions associate it with local terms in the <strong>Minangkabau</strong> language. Besides the history of struggle, the Silungkang area also preserves traces of colonial heritage, such as <strong>Dutch-style houses</strong> and historical infrastructure, including a <strong>suspension bridge without support pillars</strong> that is still used by the community today.
                            </p>
                            <h4 className="text-xl font-bold mb-3 text-gray-800 font-poppins">
                              Culture and Local Wisdom
                            </h4>
                            <p className="mb-4">
                              The people of Silungkang Oso Village are known for their strong and well-preserved culture. One of the most famous cultural heritages is <strong>Silungkang songket weaving</strong>, which has been passed down from generation to generation for hundreds of years. Silungkang songket has beauty and quality equivalent to Pandai Sikek songket, even becoming one of the important cultural identities of Sawahlunto City.
                          </p>
                          <p>
                              In addition, the community still maintains various traditional customs, such as <strong>traditional speeches, taktumbin, turun mandi, bakau, and manjalang mintuo</strong>. In the field of arts, Silungkang Oso is known for <strong>randai</strong> and <strong>talempong botuang</strong>, which have been designated as <strong>Indonesian Intangible Cultural Heritage</strong> by the Ministry of Education and Culture.
                            </p>
                            <p className="mt-4">
                              This preserved local wisdom not only strengthens the cultural identity of the community, but also provides its own attraction for visiting tourists, making Silungkang Oso one of the important cultural and historical destinations in West Sumatra.
                          </p>
                        </>
                      )}
                      </div>
                    </div>
                    

                  </div>
                  
                  {/* Right Column - Image & Songket Info */}
                  <div>
                    {/* Image Placeholder */}
                    <div className="bg-gray-100 rounded-lg h-80 mb-6 flex items-center justify-center border-2 border-dashed border-gray-300">
                      <div className="text-center text-gray-500">
                        <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">
                          {String(lang) === 'id' ? 'Gambar/Video' : 'Image/Video'}
                        </p>
                      </div>
                    </div>
                    
                    {/* Songket Info */}
                    <div className="border-l-4 border-[#ffd704] pl-6">
                      <h4 className="text-xl font-bold mb-3 text-gray-800 font-poppins">
                        {String(lang) === 'id' ? 'Songket Silungkang' : 'Silungkang Songket'}
                      </h4>
                      <p className="text-gray-600 font-poppins leading-relaxed">
                        {String(lang) === 'id' 
                          ? 'Kerajinan songket dengan motif khas yang menjadi warisan budaya tak ternilai'
                          : 'Songket craft with distinctive motifs that is an invaluable cultural heritage'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sub-sections */}
              <div className="space-y-12">



                {/* Peta Wisata */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 font-poppins text-center">
                    {String(lang) === 'id' ? 'Peta Wisata' : 'Tourism Map'}
                  </h3>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image 
                      src="/image/peta/map-silungkang-oso.jpg" 
                      alt={String(lang) === 'id' ? 'Peta Wisata Desa Silungkang Oso' : 'Silungkang Oso Tourism Map'}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Struktur Pokdarwis */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 font-poppins">
                    {String(lang) === 'id' ? 'Struktur Pokdarwis' : 'Pokdarwis Structure'}
                  </h3>
                  <div className="text-gray-600">
                    {String(lang) === 'id' ? 'Konten menyusul.' : 'Content coming soon.'}
                  </div>
                </div>

                {/* Visi Misi */}
                <div className="bg-gradient-to-r from-[#102467] to-[#102467]/80 rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-center mb-8 text-white font-poppins">
                    {String(lang) === 'id' ? 'Visi & Misi Desa Wisata' : 'Tourism Village Vision & Mission'}
                  </h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Visi */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                      <h4 className="text-xl font-bold mb-4 text-white font-poppins">
                        {String(lang) === 'id' ? 'Visi' : 'Vision'}
                      </h4>
                        <p className="text-white text-sm leading-relaxed font-poppins">
                          {String(lang) === 'id' 
                           ? 'Menjadikan Silungkang Oso sebagai desa wisata yang unggul, berbudaya, dan berkelanjutan, memberikan manfaat ekonomi serta melestarikan alam dan kearifan lokal.'
                           : 'Making Silungkang Oso an excellent, cultured, and sustainable tourism village, providing economic benefits while preserving nature and local wisdom.'
                          }
                        </p>
                    </div>

                    {/* Misi */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                      <h4 className="text-xl font-bold mb-4 text-white font-poppins">
                        {String(lang) === 'id' ? 'Misi' : 'Mission'}
                      </h4>
                        <ul className="text-white text-sm space-y-2 font-poppins">
                          <li className="flex items-start">
                            <span className="text-white mr-2">1.</span>
                            <span>
                              {String(lang) === 'id' 
                                ? 'Meningkatkan kualitas sumber daya manusia pariwisata di desa.'
                                : 'Improve the quality of tourism human resources in the village.'
                              }
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-white mr-2">2.</span>
                            <span>
                              {String(lang) === 'id' 
                                ? 'Mengembangkan potensi wisata alam, budaya, dan buatan secara inovatif.'
                                : 'Develop natural, cultural, and artificial tourism potential innovatively.'
                              }
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-white mr-2">3.</span>
                            <span>
                              {String(lang) === 'id' 
                                ? 'Memperkuat sinergi antara seluruh pemangku kepentingan pariwisata desa.'
                                : 'Strengthen synergy between all village tourism stakeholders.'
                              }
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-white mr-2">4.</span>
                            <span>
                              {String(lang) === 'id' 
                                ? 'Membangun citra dan promosi desa wisata yang konsisten dan efektif.'
                                : 'Build consistent and effective tourism village image and promotion.'
                              }
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-white mr-2">5.</span>
                            <span>
                              {String(lang) === 'id' 
                                ? 'Mewujudkan tata kelola pariwisata desa yang profesional dan berkelanjutan.'
                                : 'Realize professional and sustainable village tourism governance.'
                              }
                            </span>
                          </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Destinasi Wisata */}
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 font-poppins">
                  {String(lang) === 'id' ? 'Destinasi Wisata' : 'Tourist Destinations'}
                </h2>
                <p className="text-gray-600 font-poppins max-w-3xl mx-auto leading-relaxed">
                  {String(lang) === 'id' 
                    ? 'Jelajahi keindahan alam Desa Silungkang Oso melalui berbagai destinasi wisata yang menawarkan pengalaman tak terlupakan'
                    : 'Explore the natural beauty of Silungkang Oso Village through various tourist destinations that offer unforgettable experiences'
                  }
                </p>
              </div>

              {/* Destination Cards with Navigation */}
              <div 
                className="relative"
                onMouseEnter={() => setIsAutoSlidePaused(true)}
                onMouseLeave={() => setIsAutoSlidePaused(false)}
              >
                {/* Navigation Buttons */}
                <button
                  onClick={prevDestination}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
                  aria-label="Previous destination"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextDestination}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
                  aria-label="Next destination"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Cards Grid with Animation */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                  {[0, 1, 2].map((offset) => {
                    const index = (destinationIndex + offset) % destinations.length;
                    const destination = destinations[index];
                    return (
                    <div 
                      key={`${destination.id}-${destinationIndex}-${offset}`} 
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 ease-out"
                      style={{
                        animation: 'fadeInUp 0.6s ease-out forwards',
                        animationDelay: `${offset * 100}ms`,
                        opacity: 0
                      }}
                    >
                      <div className="relative">
                        <div className="aspect-video relative overflow-hidden">
                          <Image 
                            src={destination.image} 
                            alt={String(lang) === 'id' ? destination.title_id : destination.title_en}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                          {destination.rating}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 font-poppins mb-3">
                          {String(lang) === 'id' ? destination.title_id : destination.title_en}
                        </h3>
                        <p className="text-gray-600 font-poppins text-sm mb-4 leading-relaxed">
                          {String(lang) === 'id' ? destination.description_id : destination.description_en}
                        </p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-2 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="font-poppins">{String(lang) === 'id' ? 'Jarak:' : 'Distance:'} {destination.distance}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-2 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-poppins">{String(lang) === 'id' ? 'Waktu tempuh:' : 'Travel time:'} {destination.travelTime}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-2 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                            <span className="font-poppins">{String(lang) === 'id' ? 'Tiket Masuk:' : 'Entrance Fee:'} {destination.ticketPrice}</span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-700 mb-2 font-poppins">
                            {String(lang) === 'id' ? 'Fasilitas:' : 'Facilities:'}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {(String(lang) === 'id' ? destination.facilities_id : destination.facilities_en).map((facility, index) => (
                              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-poppins">
                                {facility}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <a
                            href={destination.qrRoute}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium font-poppins transition-colors duration-200 flex items-center justify-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                            </svg>
                            {String(lang) === 'id' ? 'QR Rute' : 'QR Route'}
                          </a>
                          <a
                            href={destination.detailLink}
                            className="flex-1 bg-[#ffd704] hover:bg-[#ffd704]/90 text-white px-4 py-2 rounded-lg text-sm font-medium font-poppins transition-colors duration-200 text-center"
                          >
                            {String(lang) === 'id' ? 'Detail' : 'Details'}
                          </a>
                        </div>
                      </div>
                    </div>
                    );
                  })}
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-6 space-x-2">
                  {destinations.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setDestinationIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-500 ease-out ${
                        destinationIndex === index
                          ? 'bg-[#ffd704] scale-125 shadow-lg' 
                          : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                      }`}
                      aria-label={`Go to destination ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Budaya dan Tradisi */}
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 font-poppins">
                {String(lang) === 'id' ? 'Budaya dan Tradisi' : 'Culture and Traditions'}
              </h2>
              <div className="text-center text-gray-600">
                {String(lang) === 'id' ? 'Konten menyusul.' : 'Content coming soon.'}
              </div>
            </div>
          </section>

          {/* Section 4: Souvenir */}
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 font-poppins">
                {String(lang) === 'id' ? 'Souvenir' : 'Souvenirs'}
              </h2>
              <div className="text-center text-gray-600">
                {String(lang) === 'id' ? 'Konten menyusul.' : 'Content coming soon.'}
              </div>
            </div>
          </section>

          {/* Section 5: Galeri */}
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 font-poppins">
                {String(lang) === 'id' ? 'Galeri' : 'Gallery'}
              </h2>
              <div className="text-center text-gray-600">
                {String(lang) === 'id' ? 'Konten menyusul.' : 'Content coming soon.'}
              </div>
            </div>
          </section>

          {/* Section 6: Kontak Informasi */}
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 font-poppins">
                {String(lang) === 'id' ? 'Kontak Informasi' : 'Contact Information'}
              </h2>
              <div className="text-center text-gray-600">
                {String(lang) === 'id' ? 'Konten menyusul.' : 'Content coming soon.'}
              </div>
            </div>
          </section>

          <section className="px-4 sm:px-6 lg:px-8 mb-24">
            <div className="max-w-7xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl p-8 md:p-14 bg-[#fffcf9]/70 backdrop-blur-md shadow-xl">
                {/* Accent blurs: yellow and navy (placed behind content) */}
                <div className="pointer-events-none absolute -top-32 -left-32 h-64 w-64 md:h-[22rem] md:w-[22rem] rounded-full bg-yellow-300/40 blur-2xl -z-10"></div>
                <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 md:h-[22rem] md:w-[22rem] rounded-full bg-[#102467]/40 blur-2xl -z-10"></div>

                <h2 className="relative z-10 text-center text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-poppins leading-tight tracking-tight">
                  Ayo Kunjungi<br/>Desa Wisata Silungkang Oso
                </h2>

                <div className="mt-8 flex justify-center relative z-10">
                  <a
                    href="/paket-wisata"
                    className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#ffd704] hover:bg-[#ffd704]/90 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 ease-out backdrop-blur-sm font-poppins font-semibold hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 outline-none before:absolute before:inset-0 before:-translate-x-full group-hover:before:translate-x-0 before:bg-gradient-to-r before:from-white/0 before:via-white/25 before:to-white/0 before:transition-transform before:duration-500 before:pointer-events-none"
                  >
                    {String(lang) === 'id' ? 'Reservasi\u00a0\u00a0\u00a0Sekarang' : 'Reserve\u00a0\u00a0\u00a0Now'}
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-[#102467] text-white">
            {/* Top accent line */}
            <div className="h-1 bg-[#ffd704]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Left Column - Brand & Contact */}
                <div className="lg:col-span-1">
                  <h3 className="text-2xl font-bold text-[#ffd704] mb-4 font-poppins">
                    {String(lang) === 'id' ? 'Desa Wisata Silungkang Oso' : 'Silungkang Oso Tourism Village'}
                  </h3>

                  
                  {/* Contact Info */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-[#ffd704] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <a 
                        href="https://maps.app.goo.gl/CuMxFdY1tEyyZQAF8?g_st=iw" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins"
                      >
                        Desa Silungkang Oso Kec. Silungkang,<br />
                        Kota Sawahlunto Sumatera Barat 27416
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-[#ffd704] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a 
                        href="https://wa.me/6281277849089" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins"
                      >
                        081277849089
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-[#ffd704] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a 
                        href="mailto:pokdarwispanorama@gmail.com"
                        className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins"
                      >
                        pokdarwispanorama@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Tentang Desa */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 font-poppins">
                    {String(lang) === 'id' ? 'Tentang Desa' : 'About Village'}
                  </h4>
                  <ul className="space-y-2">
                    <li><a href="/profil-desa" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{String(lang) === 'id' ? 'Profil Desa Silungkang Oso' : 'Silungkang Oso Village Profile'}</a></li>
                    <li><a href="#visi-misi" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{String(lang) === 'id' ? 'Visi & Misi' : 'Vision & Mission'}</a></li>
                    <li><a href="#sejarah" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{String(lang) === 'id' ? 'Sejarah & Budaya' : 'History & Culture'}</a></li>
                    <li><a href="#struktur" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{String(lang) === 'id' ? 'Struktur Pokdarwis' : 'Pokdarwis Structure'}</a></li>
                  </ul>
                </div>

                {/* Wisata */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 font-poppins">
                    {String(lang) === 'id' ? 'Wisata' : 'Tourism'}
                  </h4>
                  <ul className="space-y-2">
                    <li><a href="/potensi-desa" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{String(lang) === 'id' ? 'Destinasi Wisata' : 'Tourist Destinations'}</a></li>
                    <li><a href="/paket-wisata" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{String(lang) === 'id' ? 'Paket Wisata' : 'Tour Packages'}</a></li>
                    <li><a href="/galeri" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{String(lang) === 'id' ? 'Galeri Foto & Video' : 'Photo & Video Gallery'}</a></li>
                    <li><a href="#budaya" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{String(lang) === 'id' ? 'Budaya & Tradisi' : 'Culture & Tradition'}</a></li>
                  </ul>
                </div>

                {/* Layanan */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 font-poppins">
                    {String(lang) === 'id' ? 'Layanan' : 'Services'}
                  </h4>
                  <ul className="space-y-2">
                    <li><a href="/pembelian-tiket" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{String(lang) === 'id' ? 'Pemesanan Tiket' : 'Ticket Booking'}</a></li>
                    <li><a href="/produk-lokal" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{String(lang) === 'id' ? 'UMKM & Souvenir' : 'MSMEs & Souvenirs'}</a></li>
                    <li><a href="#kuliner" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{String(lang) === 'id' ? 'Kuliner Khas' : 'Local Cuisine'}</a></li>

                  </ul>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="border-t border-gray-600 mt-8 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="text-gray-300 text-sm font-poppins mb-4 md:mb-0">
                    © 2025 {String(lang) === 'id' ? 'Desa Wisata Silungkang Oso.' : 'Silungkang Oso Tourism Village. All rights reserved. Managed by Pokdarwis Silungkang Oso Village'}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-300 text-sm font-poppins">{String(lang) === 'id' ? 'Ikuti Kami:' : 'Follow Us:'}</span>
                    <div className="flex space-x-3">
                      <a href="https://www.facebook.com/share/1GrwJ7mndi/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-[#ffd704] transition-colors">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/desawisatasilungkangoso?igsh=eG9yNnQ3OGJ6b2tw" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-[#ffd704] transition-colors">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a href="https://youtube.com/@desawisatasilungkangoso?si=fHzM3BAPYYXU7hfv" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-[#ffd704] transition-colors">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
      </div>
  );
}
