'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import LanguageToggle from '../_components/LanguageToggle';
import Footer from '../_components/Footer';
import { useLanguage } from '../_components/LanguageProvider';

export default function Kontak() {
  const [activePage, setActivePage] = useState('Kontak Kami');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  const texts = {
    title_id: 'Hubungi Kami',
    title_en: 'Contact Us',
    subtitle_id: 'Siap untuk pengalaman tak terlupakan di Desa Wisata Silungkang Oso? Hubungi kami untuk informasi lebih lanjut atau reservasi.',
    subtitle_en: 'Ready for an unforgettable experience at Silungkang Oso Tourism Village? Contact us for more information or reservations.',
    description_id: 'Kami siap membantu Anda untuk mendapatkan informasi lebih lanjut tentang Desa Wisata Silungkang Oso. Jangan ragu untuk menghubungi kami.',
    description_en: 'We are ready to help you get more information about Silungkang Oso Tourism Village. Feel free to contact us.'
  };

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
          alt={String(lang) === 'id' ? 'Hubungi Kami - Desa Wisata Silungkang Oso' : 'Contact Us - Silungkang Oso Tourism Village'}
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
              {lang === 'id' ? texts.description_id : texts.description_en}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins mb-4">
              {lang === 'id' ? 'Informasi Kontak' : 'Contact Information'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Informasi Kontak */}
            <div className="space-y-6 flex flex-col justify-start">
              <h3 className="text-2xl font-bold text-gray-800 font-poppins mb-6">
                {String(lang) === 'id' ? 'Informasi Kontak' : 'Contact Information'}
              </h3>
              
              {/* Alamat */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#ffd704]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 font-poppins mb-2">
                    {String(lang) === 'id' ? 'Alamat' : 'Address'}
                  </h4>
                  <p className="text-gray-600 font-poppins leading-relaxed">
                    Desa Silungkang Oso Kec. Silungkang,<br />
                    Kota Sawahlunto Sumatera Barat 27416
                  </p>
                </div>
              </div>

              {/* Telepon */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#ffd704]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 font-poppins mb-2">
                    {String(lang) === 'id' ? 'Telepon' : 'Phone'}
                  </h4>
                  <p className="text-gray-600 font-poppins">
                    081277849089
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#ffd704]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 font-poppins mb-2">
                    {String(lang) === 'id' ? 'Email' : 'Email'}
                  </h4>
                  <p className="text-gray-600 font-poppins">
                    pokdarwispanorama@gmail.com
                  </p>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#ffd704]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 font-poppins mb-2">
                    {String(lang) === 'id' ? 'Jam Operasional' : 'Operating Hours'}
                  </h4>
                  <div className="text-gray-600 font-poppins space-y-1">
                    <p>{String(lang) === 'id' ? 'Senin - Jumat: 08.00 - 17.00 WIB' : 'Monday - Friday: 08:00 - 17:00 WIB'}</p>
                    <p>{String(lang) === 'id' ? 'Sabtu - Minggu: 07.00 - 18.00 WIB' : 'Saturday - Sunday: 07:00 - 18:00 WIB'}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      *{String(lang) === 'id' ? 'Aktivitas wisata tersedia 24 jam' : 'Tourist activities available 24 hours'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Kontak */}
            <div className="space-y-6 flex flex-col justify-start">
              <h3 className="text-2xl font-bold text-gray-800 font-poppins mb-6">
                {String(lang) === 'id' ? 'Kirim Pesan' : 'Send Message'}
              </h3>
              
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <p className="text-gray-600 font-poppins mb-6">
                  {String(lang) === 'id' 
                    ? 'Isi form di bawah ini dan kami akan menghubungi Anda dalam 24 jam.'
                    : 'Fill out the form below and we will contact you within 24 hours.'
                  }
                </p>

              <form className="space-y-4">
                {/* Nama Lengkap dan No. Telepon dalam 1 baris */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 font-poppins mb-2">
                      {String(lang) === 'id' ? 'Nama Lengkap' : 'Full Name'} *
                    </label>
                    <input 
                      type="text" 
                      placeholder={String(lang) === 'id' ? 'Masukkan nama lengkap' : 'Enter full name'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd704] focus:border-transparent font-poppins"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 font-poppins mb-2">
                      {String(lang) === 'id' ? 'No. Telepon' : 'Phone No.'} *
                    </label>
                    <input 
                      type="tel" 
                      placeholder="08XXXXXXXXXX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd704] focus:border-transparent font-poppins"
                    />
                  </div>
                </div>
                
                {/* Email full width */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 font-poppins mb-2">
                    {String(lang) === 'id' ? 'Email' : 'Email'} *
                  </label>
                  <input 
                    type="email" 
                    placeholder="nama@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd704] focus:border-transparent font-poppins"
                  />
                </div>
                
                {/* Jumlah Pengunjung dan Tanggal Kunjungan dalam 1 baris */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 font-poppins mb-2">
                      {String(lang) === 'id' ? 'Jumlah Pengunjung' : 'Number of Visitors'}
                    </label>
                    <input 
                      type="number" 
                      placeholder={String(lang) === 'id' ? 'Contoh: 5' : 'Example: 5'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd704] focus:border-transparent font-poppins"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 font-poppins mb-2">
                      {String(lang) === 'id' ? 'Tanggal Kunjungan' : 'Visit Date'}
                    </label>
                    <div className="relative">
                      <input 
                        type="date" 
                        placeholder={String(lang) === 'id' ? 'hh/bb/tttt' : 'dd/mm/yyyy'}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd704] focus:border-transparent font-poppins"
                      />
                      <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Subjek full width */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 font-poppins mb-2">
                    {String(lang) === 'id' ? 'Subjek' : 'Subject'} *
                  </label>
                  <input 
                    type="text" 
                    placeholder={String(lang) === 'id' ? 'Reservasi / Informasi / Keluhan' : 'Reservation / Information / Complaint'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd704] focus:border-transparent font-poppins"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#ffd704] hover:bg-[#ffed4e] text-[#102467] font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 font-poppins shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>{String(lang) === 'id' ? 'Kirim Pesan' : 'Send Message'}</span>
                </button>
                
                <p className="text-xs text-gray-500 font-poppins text-center leading-relaxed">
                  {String(lang) === 'id' 
                    ? 'Dengan mengirim pesan ini, Anda menyetujui bahwa data pribadi Anda akan digunakan untuk keperluan komunikasi terkait layanan wisata kami.'
                    : 'By sending this message, you agree that your personal data will be used for communication purposes related to our tourism services.'
                  }
                </p>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
