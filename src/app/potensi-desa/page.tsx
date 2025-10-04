'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LanguageToggle from '../_components/LanguageToggle';
import Footer from '../_components/Footer';
import { useLanguage } from '../_components/LanguageProvider';

// Komponen untuk animasi sederhana
const ScrollRevealText = ({ 
  children,
  isTransitioning = false,
  className = ""
}: {
  children: React.ReactNode;
  isTransitioning?: boolean;
  className?: string;
}) => {
  return (
    <div 
      className={`transition-all duration-1000 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'} ${className}`}
    >
      {children}
    </div>
  );
};


// Data potensi desa dengan multi language
const potensiData = [
  {
    id: 1,
    title_id: "Kolam Renang Mudiak Lugha",
    title_en: "Mudiak Lugha Swimming Pool",
    subtitle_id: "Destinasi Wisata Unggulan",
    subtitle_en: "Leading Tourist Destination",
    description_id: "Kolam Renang Mudiak Lugha merupakan salah satu destinasi wisata unggulan di Desa Wisata Silungkang Oso, Kota Sawahlunto. Berjarak sekitar 78 km dari Kota Padang atau dua jam perjalanan, pemandian ini menawarkan suasana sejuk khas perbukitan dengan suhu rata-rata 22°C. Kolam ini menggunakan air alami yang jernih dari sumber bukit sehingga segar dan bebas dari bahan kimia. Tersedia tiga kolam, yaitu satu kolam dewasa dengan kedalaman ±1,5 meter serta dua kolam anak-anak dengan kedalaman 80 cm dan 40 cm. Fasilitas pendukungnya meliputi ruang bilas, kamar mandi umum, musholla, gazebo, aula, serta area camping. Selain itu, di bagian atas kolam terdapat air terjun alami yang menambah keasrian panorama. Pengelolaan dilakukan oleh Kelompok Sadar Wisata (Pokdarwis) Panorama Desa Silungkang Oso dengan dukungan masyarakat setempat. Tiket masuk sangat terjangkau, hanya Rp8.000,- per orang. Kolam Renang Mudiak Lugha menjadi pilihan ideal untuk rekreasi keluarga, menikmati kesegaran air pegunungan, sekaligus merasakan keramahan wisata berbasis desa.",
    description_en: "Mudiak Lugha Swimming Pool is one of the leading tourist destinations in Silungkang Oso Tourism Village, Sawahlunto City. Located about 78 km from Padang City or a two-hour journey, this swimming pool offers a cool mountain atmosphere with an average temperature of 22°C. The pool uses clear natural water from mountain springs, making it fresh and free from chemicals. There are three pools available: one adult pool with a depth of ±1.5 meters and two children's pools with depths of 80 cm and 40 cm. Supporting facilities include changing rooms, public toilets, mosque, gazebo, hall, and camping area. In addition, there is a natural waterfall above the pool that adds to the natural beauty. Management is carried out by the Tourism Awareness Group (Pokdarwis) Panorama Silungkang Oso Village with the support of local communities. The entrance ticket is very affordable, only Rp8,000 per person. Mudiak Lugha Swimming Pool is an ideal choice for family recreation, enjoying the freshness of mountain water, while experiencing village-based tourism hospitality.",
    backgroundImage: "/image/destinasi-wisata/kolam-renang.jpg",
    cardImage: "/image/destinasi-wisata/kolam-renang.jpg"
  },
  {
    id: 2,
    title_id: "Camping Ground Guak Kumbuah Village",
    title_en: "Guak Kumbuah Village Camping Ground",
    subtitle_id: "Pengalaman Camping di Puncak Bukit",
    subtitle_en: "Camping Experience at Hilltop",
    description_id: "Camping Ground Guak Kumbuah Village terletak di kawasan Dusun Sungai Cacang, Desa Silungkang Oso, Kota Sawahlunto, Sumatera Barat, sekitar 2 km dari Kantor Desa Silungkang Oso dan dari Kolam Pemandian Mudiak Lugha. Lokasi ini berada di puncak bukit dengan tanah yang relatif datar dan luas, menawarkan panorama alam yang menawan: embun pagi yang menyegarkan, udara sejuk, dan pemandangan Nagori Silungkang di bawahnya. Pengunjung juga dapat menyaksikan matahari terbenam dari ketinggian, menjadikan pengalaman malam di alam semakin berkesan.",
    description_en: "Guak Kumbuah Village Camping Ground is located in the Sungai Cacang Hamlet area, Silungkang Oso Village, Sawahlunto City, West Sumatra, about 2 km from the Silungkang Oso Village Office and from the Mudiak Lugha Swimming Pool. This location is on a hilltop with relatively flat and wide land, offering stunning natural panoramas: refreshing morning dew, cool air, and views of Nagori Silungkang below. Visitors can also witness the sunset from the height, making the night experience in nature even more memorable.",
    backgroundImage: "/image/destinasi-wisata/camping.jpg",
    cardImage: "/image/destinasi-wisata/camping.jpg"
  },
  {
    id: 3,
    title_id: "Goa Kelambu",
    title_en: "Kelambu Cave",
    subtitle_id: "Keindahan Alam di Ketinggian 610 mdpl",
    subtitle_en: "Natural Beauty at 610 masl",
    description_id: "Goa Kelambu berada di kawasan hutan perbukitan Ngalau Kuning pada ketinggian sekitar ±610 mdpl. Perjalanan menuju lokasi akan disambut pemandangan alam yang asri, suara burung hutan, dan semilir angin yang sejuk. Goa Kelambu terbentuk dari batuan kapur (limestone) yang berumur jutaan tahun. Proses pelarutan batuan kapur oleh air hujan dan embun menciptakan rongga alamiah yang dihiasi stalaktit di langit-langit dan stalagmit di lantai goa. Bagi masyarakat setempat, Goa Kelambu telah lama menjadi tempat beristirahat dan mencari ketenangan ketika melintas di hutan Ngalau Kuning. Saat pagi hari, cahaya matahari yang menembus celah dedaunan dan kabut yang menggantung di mulut goa menciptakan pemandangan dramatis seperti gerbang menuju dunia lain.",
    description_en: "Kelambu Cave is located in the Ngalau Kuning mountain forest area at an altitude of about ±610 masl. The journey to the location will be greeted by beautiful natural scenery, forest bird sounds, and cool breezes. Kelambu Cave was formed from limestone rocks that are millions of years old. The process of dissolving limestone by rainwater and dew creates natural cavities decorated with stalactites on the ceiling and stalagmites on the cave floor. For local communities, Kelambu Cave has long been a place to rest and seek peace when passing through the Ngalau Kuning forest. In the morning, sunlight penetrating through the leaves and fog hanging at the cave mouth creates a dramatic view like a gateway to another world.",
    backgroundImage: "/image/destinasi-wisata/goa-kelambu.JPG?v=2",
    cardImage: "/image/destinasi-wisata/goa-kelambu.JPG?v=2"
  },
  {
    id: 4,
    title_id: "Batu Runciang",
    title_en: "Runciang Stone",
    subtitle_id: "Geosite Geopark di Ketinggian 700 mdpl",
    subtitle_en: "Geopark Geosite at 700 masl",
    description_id: "Batu Runciang adalah destinasi wisata alam menarik yang menjadi bagian dari Geosite Geopark di Desa Silungkang Oso, Kecamatan Silungkang, Kota Sawahlunto, Sumatera Barat. Terletak di puncak perbukitan dengan ketinggian ± 700 meter di atas permukaan laut, kawasan ini membentang seluas sekitar 4 hektar, dihiasi formasi bebatuan kapur yang runcing dan tajam, hasil proses geologi jutaan tahun yang lalu.",
    description_en: "Runciang Stone is an interesting natural tourism destination that is part of the Geopark Geosite in Silungkang Oso Village, Silungkang District, Sawahlunto City, West Sumatra. Located on a hilltop with an altitude of ± 700 meters above sea level, this area spans about 4 hectares, decorated with sharp and pointed limestone formations, the result of geological processes millions of years ago.",
    backgroundImage: "/image/destinasi-wisata/batu-runciang.jpg",
    cardImage: "/image/destinasi-wisata/batu-runciang.jpg"
  }
];

export default function PotensiDesa() {
  const [activePage, setActivePage] = useState('Potensi Desa');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);
  const { lang } = useLanguage();

  // Handle scroll untuk navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi untuk navigasi
  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % potensiData.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + potensiData.length) % potensiData.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  // Event handlers untuk touch/mouse
  const handleStart = (clientX: number) => {
    isDragging.current = true;
    startX.current = clientX;
    currentX.current = clientX;
  };

  const handleMove = (clientX: number) => {
    if (!isDragging.current) return;
    currentX.current = clientX;
  };

  const handleEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    
    const diff = startX.current - currentX.current;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      handleEnd();
    }
  };

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

  // Multi language texts
  const texts = {
    exploreLocation_id: "Jelajahi Lokasi",
    exploreLocation_en: "Explore Location",
    swipeInstruction_id: "Geser untuk melihat potensi lainnya",
    swipeInstruction_en: "Swipe to see other potentials"
  };

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
      <div className="relative min-h-[85vh] md:h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${potensiData[currentIndex].backgroundImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center pt-20 md:pt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="space-y-8">
              {/* Title Section - Full Width */}
              <div className="text-white">
                <ScrollRevealText 
                  isTransitioning={isTransitioning}
                  className="space-y-2"
                >
                  <h1 className="text-5xl md:text-7xl font-bold font-poppins leading-tight text-white">
                    {lang === 'id' ? potensiData[currentIndex].title_id : potensiData[currentIndex].title_en}
            </h1>
                  <h2 className="text-2xl md:text-3xl font-medium text-[#ffd704] font-poppins">
                    {lang === 'id' ? potensiData[currentIndex].subtitle_id : potensiData[currentIndex].subtitle_en}
                  </h2>
                </ScrollRevealText>
              </div>

              {/* Content Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                {/* Left Content */}
                <div className="text-white space-y-8 lg:col-span-2 order-2 lg:order-1">
                
                <ScrollRevealText 
                  isTransitioning={isTransitioning}
                >
                  <p className="text-lg md:text-xl leading-relaxed font-poppins max-w-4xl text-justify max-h-60 md:max-h-none overflow-y-auto pr-1">
                    {lang === 'id' ? potensiData[currentIndex].description_id : potensiData[currentIndex].description_en}
                  </p>
                </ScrollRevealText>

                <ScrollRevealText 
                  isTransitioning={isTransitioning}
                >
                  <div className="flex justify-center md:justify-start mt-2 mb-10 md:mb-4">
                    <Link href="/paket-wisata">
                      <button className="bg-[#ffd704] text-[#102467] px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold md:font-bold text-base md:text-lg font-poppins hover:bg-[#ffed4e] transition-all duration-300 shadow-md md:shadow-lg md:transform md:hover:scale-105">
                        {lang === 'id' ? texts.exploreLocation_id : texts.exploreLocation_en}
                      </button>
                    </Link>
                  </div>
                </ScrollRevealText>
                </div>

                {/* Right Content - Cards */}
                <div className="relative flex justify-center lg:justify-center order-1 lg:order-2 mt-6 lg:mt-0">
                <div className="relative w-80 h-96">
                  {/* Background Card */}
                  <div 
                    className="absolute top-8 right-8 w-64 h-80 rounded-2xl shadow-2xl bg-cover bg-center transition-all duration-1000 ease-in-out"
                    style={{
                      backgroundImage: `url(${potensiData[(currentIndex + 1) % potensiData.length].cardImage})`,
                    }}
                  ></div>
                  
                  {/* Main Card */}
                  <div 
                    ref={cardRef}
                    className="relative w-80 h-96 rounded-2xl shadow-2xl bg-cover bg-center cursor-grab active:cursor-grabbing transition-all duration-1000 ease-in-out"
                    style={{
                      backgroundImage: `url(${potensiData[currentIndex].cardImage})`,
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                    
                    {/* Swipe Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {potensiData.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-1000 ease-in-out ${
                            index === currentIndex ? 'bg-[#ffd704]' : 'bg-white/50'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Swipe Instruction */}
                  <div className="mt-4 text-center">
                    <p className="text-white/70 text-sm font-poppins">
                      {lang === 'id' ? texts.swipeInstruction_id : texts.swipeInstruction_en}
                    </p>
                  </div>
                </div>
                </div>
              </div>
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
