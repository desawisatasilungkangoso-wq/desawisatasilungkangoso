'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../_components/LanguageProvider';
import LanguageToggle from '../_components/LanguageToggle';
import Footer from '../_components/Footer';

export default function ProfilDesa() {
  const { lang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activePage, setActivePage] = useState('Profil Desa');
  const [songketIndex, setSongketIndex] = useState(0);

  // Data foto songket
  const songketImages = [
    '/image/product/Tenun Silungkang...png',
    '/image/product/Songket Silungkang 1.webp',
    '/image/product/Songket Silungkang.webp'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-slide songket images setiap 4 detik
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSongketIndex((prev) => (prev + 1) % songketImages.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [songketImages.length]);

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
    <div className="min-h-screen bg-gray-50">
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
                className="p-2 rounded-lg text-white transition-colors duration-300 hover:bg-white/10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
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
          src="/image/herobanner/image1.JPG"
          alt={String(lang) === 'id' ? 'Profil Desa Silungkang Oso' : 'Silungkang Oso Village Profile'}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              {String(lang) === 'id' ? 'Profil Desa' : 'Village Profile'}
            </h1>
            <p className="text-lg md:text-xl font-poppins opacity-90 max-w-2xl mx-auto">
              {String(lang) === 'id' 
                ? 'Mengenal lebih dekat Desa Wisata Silungkang Oso, kekayaan alam, budaya, dan masyarakatnya'
                : 'Get to know Silungkang Oso Tourism Village closer, its natural wealth, culture, and community'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Tentang Desa Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins mb-6">
              {String(lang) === 'id' ? 'Tentang Desa' : 'About the Village'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ffd704] to-[#ffed4e] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Text & Data */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 font-poppins mb-6">
                {String(lang) === 'id' ? 'Desa Wisata Silungkang Oso' : 'Silungkang Oso Tourism Village'}
              </h3>
              
              <div className="prose prose-lg max-w-none text-gray-700 font-poppins leading-relaxed">
                  {String(lang) === 'id' ? (
                    <>
                      <p className="mb-4">
                        Desa Silungkang Oso terletak di Kecamatan Silungkang, Kota Sawahlunto, Sumatera Barat, dengan luas wilayah sekitar 6,57 km². Desa ini berjarak sekitar 78 km dari Kota Padang dengan waktu tempuh sekitar 2 jam menggunakan kendaraan roda empat. Desa ini terletak pada ketinggian antara 267 hingga 710 meter di atas permukaan laut, dengan suhu udara tahunan sekitar 22°C, sehingga memiliki iklim yang sejuk dan nyaman.
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
            
            {/* Right Column - Foto Kepala Desa */}
            <div>
          
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image 
                  src="/image/peta/kepala-desa.png" 
                  alt={String(lang) === 'id' ? 'Kepala Desa Silungkang Oso' : 'Silungkang Oso Village Head'}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              
            </div>
            </div>
          </div>
      </section>

      {/* Sejarah & Budaya Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins mb-6">
              {String(lang) === 'id' ? 'Sejarah dan Budaya Silungkang Oso' : 'History and Culture of Silungkang Oso'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ffd704] to-[#ffed4e] rounded-full mx-auto"></div>
          </div>
          
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
            
            {/* Right Column - Songket Section */}
            <div>
              {/* Songket Image Slider */}
              <div className="relative rounded-lg h-80 mb-6 overflow-hidden">
                {songketImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === songketIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Songket Silungkang ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ))}
                
                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {songketImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === songketIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    ></div>
                  ))}
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
      </section>

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

