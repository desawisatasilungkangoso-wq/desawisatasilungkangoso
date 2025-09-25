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

      {/* Social Media Section */}
      <div className="py-16 bg-[#fffcf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins mb-4">
              {String(lang) === 'id' ? 'Ikuti Kami di Media Sosial' : 'Follow Us on Social Media'}
            </h2>
            <p className="text-lg text-gray-600 font-poppins max-w-2xl mx-auto">
              {String(lang) === 'id' 
                ? 'Tetap terhubung dengan kami untuk mendapatkan update terbaru tentang Desa Wisata Silungkang Oso'
                : 'Stay connected with us to get the latest updates about Silungkang Oso Tourism Village'
              }
            </p>
            <div className="w-24 h-1 bg-[#ffd704] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {/* Email */}
              <a 
                href="mailto:pokdarwispanorama@gmail.com"
                className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-4 group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-700 font-poppins group-hover:text-[#102467] transition-colors">
                  Email
                </span>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/desawisatasilungkangoso?igsh=eG9yNnQ3OGJ6b2tw"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:from-pink-600 group-hover:to-purple-700 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-700 font-poppins group-hover:text-[#102467] transition-colors">
                  Instagram
                </span>
              </a>

              {/* TikTok */}
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:from-gray-800 group-hover:to-black transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-700 font-poppins group-hover:text-[#102467] transition-colors">
                  TikTok
                </span>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com/@desawisatasilungkangoso?si=fHzM3BAPYYXU7hfv"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-4 group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-700 font-poppins group-hover:text-[#102467] transition-colors">
                  YouTube
                </span>
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/share/1GrwJ7mndi/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4 group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-700 font-poppins group-hover:text-[#102467] transition-colors">
                  Facebook
                </span>
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
