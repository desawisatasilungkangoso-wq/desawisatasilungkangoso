'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './_components/LanguageProvider';
import Navbar from './_components/Navbar';
import SouvenirSection from './_components/SouvenirSection';
import GallerySection from './_components/GallerySection';
import ContactSection from './_components/ContactSection';
import Footer from './_components/Footer';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePage, setActivePage] = useState('Beranda');
  const [destinationIndex, setDestinationIndex] = useState(0);
  const [isAutoSlidePaused, setIsAutoSlidePaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cultureIndex, setCultureIndex] = useState(0);
  const [songketIndex, setSongketIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isInVideoSection, setIsInVideoSection] = useState(true);
  const [heroVideoRef, setHeroVideoRef] = useState<HTMLVideoElement | null>(null);
  const [videoHasPlayed, setVideoHasPlayed] = useState(false);
  const { lang } = useLanguage();

  // Data foto songket
  const songketImages = [
    '/image/product/Tenun Silungkang...png',
    '/image/product/Songket Silungkang 1.webp',
    '/image/product/Songket Silungkang.webp'
  ];

  // Data video dokumentasi
  const videos = [
    {
      src: 'https://drive.google.com/file/d/102nBFe7t-YB8npZxNs_FPYoy78LlsmUB/preview',
      title: String(lang) === 'id' ? 'Video Dokumentasi 1' : 'Documentation Video 1',
      description: String(lang) === 'id' ? 'Keindahan alam dan budaya Desa Silungkang Oso' : 'Natural beauty and culture of Silungkang Oso Village'
    },
    {
      src: 'https://drive.google.com/file/d/1l1A7Sc9184u5emgUYpySF7jgM8AOuMQf/preview',
      title: String(lang) === 'id' ? 'Video Dokumentasi 2' : 'Documentation Video 2',
      description: String(lang) === 'id' ? 'Aktivitas wisata dan kehidupan masyarakat' : 'Tourism activities and community life'
    },
    {
      src: 'https://drive.google.com/file/d/1dfqbbMYYLrmPxqEDRGOREpX3D3XRPwjI/preview',
      title: String(lang) === 'id' ? 'Video Dokumentasi 3' : 'Documentation Video 3',
      description: String(lang) === 'id' ? 'Destinasi wisata unggulan dan atraksi' : 'Featured tourist destinations and attractions'
    },
    {
      src: 'https://drive.google.com/file/d/1o5vASqTddFRXgdWk6ZE6WWxm99FNea8K/preview',
      title: String(lang) === 'id' ? 'Video Dokumentasi 4' : 'Documentation Video 4',
      description: String(lang) === 'id' ? 'Tradisi dan kearifan lokal masyarakat' : 'Traditions and local wisdom of the community'
    }
  ];


  const slides = [
    {
      image: '/image/herobanner/Foto1.jpg',
      title_id: 'Selamat Datang di\nDesa Wisata Silungkang Oso',
      title_en: 'Welcome to\nSilungkang Oso Tourism Village',
      desc_id: 'Silungkang Oso – Menyulam Alam, Menenun Budaya',
      desc_en: 'Silungkang Oso – Embroidering Nature, Weaving Culture.',
    },
    {
      image: '/image/herobanner/Foto2.jpg',
      title_id: 'Eksplor Pesona Alam\nDesa Wisata Silungkang Oso.',
      title_en: 'Explore Natural Charm\nSilungkang Oso Tourism Village.',
      desc_id: 'Nikmati keindahan alam, budaya lokal, dan pengalaman tak terlupakan.',
      desc_en: 'Enjoy nature, local culture, and unforgettable experiences.',
    },
    {
      image: '/image/herobanner/Foto3.jpg',
      title_id: 'Dukung Produk Lokal',
      title_en: 'Support Local Products',
      desc_id: 'Belanja produk UMKM dan rasakan cita rasa khas masyarakat setempat.',
      desc_en: 'Shop MSME products and savor the authentic local flavors.',
    },
    {
      image: '/image/herobanner/Foto4.jpg',
      title_id: 'Lestarikan\nBudaya & Tradisi',
      title_en: 'Preserve\nCulture & Traditions',
      desc_id: 'Kenali keindahan warisan budaya Silungkang Oso, dari tenun songket, kuliner khas, hingga tradisi masyarakat yang penuh makna.',
      desc_en: 'Discover the beauty of Silungkang Oso cultural heritage, from songket weaving, local cuisine, to meaningful community traditions.',
    },
  ];

  const destinations = [
    {
      id: 1,
      image: '/image/destinasi-wisata/camping.jpg',
      title_id: 'Camping Ground',
      title_en: 'Camping Ground',
      description_id: 'Area camping dengan pemandangan pegunungan dan spot terbaik untuk melihat sunrise',
      description_en: 'Camping area with mountain views and the best spot to see the sunrise',
      distance: '2,1 km',
      travelTime: '5 menit dari gerbang utama',
      ticketPrice: 'Rp 25.000',
      facilities_id: ['Tenda Sewa', 'Api Unggun', 'Toilet', 'Spot Foto'],
      facilities_en: ['Tent Rental', 'Bonfire', 'Toilet', 'Photo Spot'],
      qrRoute: 'https://maps.app.goo.gl/oBapivwZExF6z1JF9',
      detailLink: '/potensi-desa#camping'
    },
    {
      id: 2,
      image: '/image/destinasi-wisata/goa-kelambu.jpg',
      title_id: 'Goa Kelambu',
      title_en: 'Kelambu Cave',
      description_id: 'Gua alami dengan stalaktit dan stalagmit yang menawan, cocok untuk petualangan',
      description_en: 'Natural cave with charming stalactites and stalagmites, suitable for adventure',
      distance: '2,9 km',
      travelTime: '7 menit dari gerbang utama',
      ticketPrice: 'Rp 20.000',
      facilities_id: ['Guide', 'Papan informasi & petunjuk arah', 'Alat safety', 'Spot foto'],
      facilities_en: ['Guide', 'Information board & directions', 'Safety equipment', 'Photo spot'],
      qrRoute: 'https://maps.app.goo.gl/NwbXtZRYxi7XyvpXA',
      detailLink: '/potensi-desa#goa'
    },
    {
      id: 3,
      image: '/image/destinasi-wisata/kolam-renang.jpg',
      title_id: 'Kolam Renang',
      title_en: 'Swimming Pool',
      description_id: 'Kolam renang alami dengan air jernih dan suasana sejuk di tengah hutan',
      description_en: 'Natural swimming pool with clear water and cool atmosphere in the middle of the forest',
      distance: '900m',
      travelTime: '3 menit dari gerbang utama',
      ticketPrice: 'Rp 8.000',
      facilities_id: ['Gazebo', 'Toilet', 'Parkir', 'Warung'],
      facilities_en: ['Gazebo', 'Toilet', 'Parking', 'Stall'],
      qrRoute: 'https://maps.app.goo.gl/uqupHTqHB2sCQJku9',
      detailLink: '/potensi-desa#kolam-renang'
    },
    {
      id: 4,
      image: '/image/destinasi-wisata/batu-runciang.jpg',
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
      detailLink: '/potensi-desa#batu-runciang'
    }
  ];

  const cultures = [
    {
      id: 1,
      image: '/image/budaya/tenun-songket-silungkang.png',
      title_id: 'Tenun Songket Silungkang',
      title_en: 'Silungkang Songket Weaving',
      description_id: 'Tenun Songket Silungkang adalah seni tenun tradisional dari daerah Silungkang, Kota Sawahlunto, Sumatera Barat, yang merupakan bagian dari warisan budaya Minangkabau dan salah satu songket tertua di Indonesia. Dikenal dengan motifnya yang khas dan sederhana serta penggunaan benang emas atau perak untuk motifnya, songket ini ditenun secara manual menggunakan Alat Tenun Bukan Mesin (ATBM).',
      description_en: 'Silungkang Songket Weaving is a traditional weaving art from Silungkang area, Sawahlunto City, West Sumatra, which is part of Minangkabau cultural heritage and one of the oldest songket in Indonesia. Known for its distinctive and simple motifs and the use of gold or silver threads for its patterns, this songket is woven manually using Non-Machine Weaving Tools (ATBM).',
      motifs: ['Bada Mudiak (ikan teri hidup di hulu sungai)', 'Balah Kacang (belahan kacang)', 'Saluak Laka (alas periuk) yang mewakili nilai-nilai kebersamaan, kerukunan, dan persatuan']
    },
    {
      id: 2,
      image: '/image/budaya/randai.jpg',
      title_id: 'Randai',
      title_en: 'Randai',
      description_id: 'Randai adalah salah satu permainan tradisional di Minangkabau yang dimainkan secara berkelompok dengan membentuk lingkaran, kemudian melangkahkan kaki secara perlahan, sambil menyampaikan cerita dalam bentuk nyanyian secara berganti-gantian. Randai menggabungkan seni lagu, musik, tari, drama dan silat menjadi satu.',
      description_en: 'Randai is one of the traditional games in Minangkabau that is played in groups by forming a circle, then stepping slowly while telling stories in the form of songs alternately. Randai combines the arts of song, music, dance, drama and martial arts into one.',
      functions: ['Dipimpin oleh panggoreh yang mengatur tempo gerakan', 'Mengeluarkan teriakan khas seperti "hep tah tih"', 'Menentukan cepat atau lambatnya tempo gerakan', 'Satu cerita Randai bisa menghabiskan 1 hingga 5 jam bahkan lebih']
    },
    {
      id: 3,
      image: '/image/budaya/talempong-botuang.webp',
      title_id: 'Talempong Botuang',
      title_en: 'Talempong Botuang',
      description_id: 'Talempong Batuang, juga dikenal dengan sebutan lokal Calempong Botuang, adalah alat musik perkusi tradisional yang berasal dari Nagari Silungkang, Kota Sawahlunto, Provinsi Sumatera Barat, Indonesia. Berbeda dengan Talempong Basi (alat musik logam khas Minangkabau), Talempong Batuang dibuat dari bambu (batuang dalam bahasa Minangkabau) dan menghasilkan nada melodis melalui teknik petikan atau pukulan pada senar sembilu (kulit bambu).',
      description_en: 'Talempong Batuang, also known by the local name Calempong Botuang, is a traditional percussion instrument from Nagari Silungkang, Sawahlunto City, West Sumatra Province, Indonesia. Unlike Talempong Basi (traditional Minangkabau metal instrument), Talempong Batuang is made from bamboo (batuang in Minangkabau language) and produces melodic tones through plucking or striking techniques on bamboo skin strings.',
      heritage: 'Warisan Budaya Tak Benda Indonesia (WBTBI) tahun 2023 oleh Kemendikbudristek Republik Indonesia'
    },
    {
      id: 4,
      image: '/image/budaya/pidato-adat.jpg',
      title_id: 'Pidato Adat',
      title_en: 'Traditional Speech',
      description_id: 'Pidato Adat adalah bagian dari upacara adat atau acara budaya formal yang diadakan masyarakat Silungkang Oso. Biasanya pidato ini disampaikan oleh tokoh adat (misalnya penghulu adat, ninik mamak, datuak), pejabat desa, atau orang yang dituakan dalam struktur adat setempat.',
      description_en: 'Traditional Speech is part of traditional ceremonies or formal cultural events held by the Silungkang Oso community. Usually this speech is delivered by traditional leaders (such as traditional chiefs, ninik mamak, datuak), village officials, or respected elders in the local traditional structure.',
      functions: [
        'Menyampaikan salam dan penghormatan kepada para hadirin, tokoh-tokoh adat, ulama, ninik mamak, pemerintah, dan masyarakat',
        'Memberikan konteks acara, misalnya tujuan upacara, latar belakang sejarah adat, aturan-aturan adat yang berlaku',
        'Menguatkan identitas budaya, menegaskan kembali nilai-nilai adat, hukum adat, serta pentingnya menjaga tradisi',
        'Memotivasi dan mengajak partisipasi masyarakat dalam melestarikan adat dan budaya lokal'
      ]
    },
    {
      id: 5,
      image: '/image/budaya/rabana.jpg',
      title_id: 'Rabana',
      title_en: 'Rabana',
      description_id: 'Rabana atau Rebana, yang dalam masyarakat Silungkang lebih dikenal dengan sebutan Tak Tum Bin, merupakan salah satu kesenian tradisional yang masih hidup dan berkembang hingga kini. Kesenian ini biasanya dimainkan dalam prosesi adat, terutama saat mengiringi pengantin pria (Marapulai) menuju rumah pengantin wanita (Anak Daro).',
      description_en: 'Rabana or Rebana, which in Silungkang society is better known as Tak Tum Bin, is one of the traditional arts that is still alive and developing today. This art is usually performed in traditional processions, especially when accompanying the groom (Marapulai) to the bride\'s house (Anak Daro).',
      functions: [
        'Mengiringi pengantin pria (Marapulai) menuju rumah pengantin wanita (Anak Daro)',
        'Menjadi simbol kegembiraan dan kebersamaan masyarakat Silungkang',
        'Diwariskan secara turun-temurun dan dijaga kelestariannya oleh masyarakat lokal',
        'Menjadi bagian dari atraksi wisata budaya di Desa Silungkang Oso'
      ]
    }
  ];


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


  // Auto-rotate slides setiap 7 detik (hanya saat tidak di video section)
  useEffect(() => {
    if (isInVideoSection) return;
    
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(intervalId);
  }, [slides.length, isInVideoSection]);

  // Video duration check - switch to slideshow after video ends
  useEffect(() => {
    if (heroVideoRef && isInVideoSection) {
      const handleVideoEnd = () => {
        console.log('Video ended, switching to slideshow');
        setIsInVideoSection(false);
        setVideoHasPlayed(true);
      };

      heroVideoRef.addEventListener('ended', handleVideoEnd);
      return () => heroVideoRef.removeEventListener('ended', handleVideoEnd);
    }
  }, [heroVideoRef, isInVideoSection]);

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

  // Auto-slide songket images setiap 4 detik
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSongketIndex((prev) => (prev + 1) % songketImages.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [songketImages.length]);

  // Hero video and slideshow logic
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const isVisible = rect.top >= -100 && rect.bottom <= window.innerHeight + 100;
        // Hanya pause video jika scroll keluar, tapi jangan ubah isInVideoSection
        if (!isVisible && heroVideoRef && isVideoPlaying) {
          heroVideoRef.pause();
          setIsVideoPlaying(false);
        } else if (isVisible && heroVideoRef && !isVideoPlaying && isInVideoSection) {
          heroVideoRef.play().catch(e => {
            console.error('Video play failed:', e);
          });
          setIsVideoPlaying(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroVideoRef, isVideoPlaying]);

  // Loop logic: when slideshow reaches end, go back to video
  useEffect(() => {
    if (!isInVideoSection && activeIndex === slides.length - 1) {
      const timer = setTimeout(() => {
        console.log('Slideshow ended, switching back to video');
        setIsInVideoSection(true);
        setActiveIndex(0);
        setVideoHasPlayed(false);
        if (heroVideoRef) {
          heroVideoRef.currentTime = 0;
          heroVideoRef.play().catch(e => {
            console.error('Video play failed in loop:', e);
            // Tetap di slideshow jika video gagal
            setIsInVideoSection(false);
          });
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, slides.length, isInVideoSection, heroVideoRef]);

  // Handle video load error
  const handleVideoError = () => {
    console.log('Video failed to load, switching to slideshow');
    setIsInVideoSection(false);
  };

  // Handle video load success
  const handleVideoCanPlay = () => {
    console.log('Video loaded successfully');
    setIsVideoPlaying(true);
  };

  // Timeout untuk video loading
  useEffect(() => {
    if (isInVideoSection) {
      const timeout = setTimeout(() => {
        if (!isVideoPlaying) {
          console.log('Video loading timeout, switching to slideshow');
          setIsInVideoSection(false);
        }
      }, 10000); // 10 detik timeout

      return () => clearTimeout(timeout);
    }
  }, [isInVideoSection, isVideoPlaying]);

  // Video auto slide dihapus - hanya tampilkan 1 video dulu

  // Language is handled by global provider


  return (
    <div className="bg-[#fffcf9]">
      {/* Navbar */}
      <Navbar activePage={activePage} />

      {/* Main Content */}
      <div>
        {/* Hero Section */}
        <div id="hero-section" className="relative w-full h-[100vh] overflow-hidden mb-16">
          {/* Video Background */}
          {isInVideoSection ? (
            <div className="absolute inset-0">
              <video
                ref={setHeroVideoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                playsInline
                onError={handleVideoError}
                onCanPlay={handleVideoCanPlay}
                onLoadStart={() => console.log('Video loading started')}
                preload="metadata"
              >
                <source src="/image/video/Video Opening.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Overlay untuk video */}
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          ) : (
            <>
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
            </>
          )}

          {/* Hero Content (title + description berubah sesuai slide) */}
          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <div className="text-center max-w-4xl mx-auto px-5 md:px-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white font-poppins drop-shadow-2xl text-transition">
                {isInVideoSection 
                  ? (String(lang) === 'id' ? 'Selamat Datang di Desa Wisata Silungkang Oso' : 'Welcome to Silungkang Oso Tourism Village')
                  : (String(lang) === 'id' ? slides[activeIndex].title_id : slides[activeIndex].title_en)
                }
              </h1>
              <p className="text-base md:text-xl font-medium leading-relaxed text-white font-poppins drop-shadow-2xl text-transition">
                {isInVideoSection 
                  ? (String(lang) === 'id' ? 'Nikmati keindahan alam, budaya, dan pengalaman tak terlupakan di Desa Silungkang Oso' : 'Enjoy the natural beauty, culture, and unforgettable experiences at Silungkang Oso Village')
                  : (String(lang) === 'id' ? slides[activeIndex].desc_id : slides[activeIndex].desc_en)
                }
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
                <h3 id="sejarah" className="text-2xl font-bold mb-8 text-gray-800 font-poppins pt-24">
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
                  <h3 id="struktur" className="text-xl font-semibold mb-4 text-gray-800 font-poppins text-center pt-24">
                    {String(lang) === 'id' ? 'Struktur Pokdarwis' : 'Pokdarwis Structure'}
                  </h3>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image 
                      src="/image/peta/struktur-pokdarwis.png" 
                      alt={String(lang) === 'id' ? 'Struktur Organisasi Pokdarwis Silungkang Oso' : 'Pokdarwis Silungkang Oso Organization Structure'}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-6">
                    <Image 
                      src="/image/peta/struktur-pokdarwis-panoramapng.jpg" 
                      alt={String(lang) === 'id' ? 'Struktur Pokdarwis Panoramik' : 'Pokdarwis Structure Panorama'}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Modern Visi Misi */}
                <div className="relative overflow-hidden rounded-3xl p-8 lg:p-12">
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="text-center mb-12">
                      <h3 id="visi-misi" className="text-3xl lg:text-4xl font-bold text-gray-800 font-poppins mb-4 pt-24">
                        {String(lang) === 'id' ? (
                          <>
                            Visi & Misi<br />
                            Desa Wisata Silungkang Oso
                          </>
                        ) : (
                          <>
                            Vision & Mission<br />
                            Silungkang Oso Tourism Village
                          </>
                        )}
                  </h3>
                      <div className="w-24 h-1 bg-gradient-to-r from-[#ffd704] to-[#ffed4e] rounded-full mx-auto"></div>
                    </div>
                    
                    <div className="space-y-8">
                      {/* Visi Card */}
                      <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 hover:bg-white/90 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl max-w-4xl mx-auto">
                          <div className="text-center mb-6">
                            <h4 className="text-2xl font-bold text-gray-800 font-poppins">
                        {String(lang) === 'id' ? 'Visi' : 'Vision'}
                      </h4>
                          </div>
                          <div className="text-center">
                            <p className="text-gray-700 text-lg leading-relaxed font-poppins">
                          {String(lang) === 'id' 
                           ? 'Menjadikan Silungkang Oso sebagai desa wisata yang unggul, berbudaya, dan berkelanjutan, memberikan manfaat ekonomi serta melestarikan alam dan kearifan lokal.'
                           : 'Making Silungkang Oso an excellent, cultured, and sustainable tourism village, providing economic benefits while preserving nature and local wisdom.'
                          }
                        </p>
                          </div>
                        </div>
                    </div>

                      {/* Misi Card */}
                      <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 hover:bg-white/90 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl max-w-4xl mx-auto">
                          <div className="text-center mb-6">
                            <h4 className="text-2xl font-bold text-gray-800 font-poppins">
                        {String(lang) === 'id' ? 'Misi' : 'Mission'}
                      </h4>
                          </div>
                          <div className="space-y-4">
                            {[
                              String(lang) === 'id' 
                                ? 'Meningkatkan kualitas sumber daya manusia pariwisata di desa.'
                                : 'Improve the quality of tourism human resources in the village.',
                              String(lang) === 'id' 
                                ? 'Mengembangkan potensi wisata alam, budaya, dan buatan secara inovatif.'
                                : 'Develop natural, cultural, and artificial tourism potential innovatively.',
                              String(lang) === 'id' 
                                ? 'Memperkuat sinergi antara seluruh pemangku kepentingan pariwisata desa.'
                                : 'Strengthen synergy between all village tourism stakeholders.',
                              String(lang) === 'id' 
                                ? 'Membangun citra dan promosi desa wisata yang konsisten dan efektif.'
                                : 'Build consistent and effective tourism village image and promotion.',
                              String(lang) === 'id' 
                                ? 'Mewujudkan tata kelola pariwisata desa yang profesional dan berkelanjutan.'
                                : 'Realize professional and sustainable village tourism governance.'
                            ].map((mission, index) => (
                              <div key={index} className="flex items-start group/item">
                                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#ffd704] to-[#ffed4e] rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                                  <span className="text-[#102467] font-bold text-sm font-poppins">{index + 1}</span>
                    </div>
                                <p className="text-gray-700 text-lg leading-relaxed font-poppins group-hover/item:text-[#ffd704] transition-colors duration-300">
                                  {mission}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
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

              {/* Destination Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 max-w-4xl mx-auto">
                {destinations.map((destination, index) => {
                  return (
                  <div
                    key={`${destination.id}-${index}`}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 ease-out"
                    style={{
                      animation: 'fadeInUp 0.6s ease-out forwards',
                      animationDelay: `${index * 100}ms`,
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
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 font-poppins mb-3">
                        {String(lang) === 'id' ? destination.title_id : destination.title_en}
                      </h3>
                      <p className="text-gray-600 font-poppins leading-relaxed mb-4 flex-1">
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
                          <span className="font-poppins">{String(lang) === 'id' ? 'Waktu Tempuh:' : 'Travel Time:'} {destination.travelTime}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 mr-2 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14V9m0 0l-3 3m3-3l3 3m6 7h.01M19 10h.01M19 14h.01M19 18h.01M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z" />
                          </svg>
                          <span className="font-poppins">{String(lang) === 'id' ? 'Harga Tiket:' : 'Ticket Price:'} {destination.ticketPrice}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
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
                          className="flex-1 bg-[#ffd704] hover:bg-[#ffed4e] text-[#102467] px-4 py-2 rounded-lg text-sm font-medium font-poppins transition-colors duration-200 text-center"
                        >
                          {String(lang) === 'id' ? 'Lihat Detail' : 'View Details'}
                        </a>
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Section 3: Budaya dan Tradisi */}
          <section id="budaya-tradisi" className="px-4 sm:px-6 lg:px-8 mt-20 mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 font-poppins">
                {String(lang) === 'id' ? 'Budaya dan Tradisi' : 'Culture and Traditions'}
              </h2>
              
              {/* Modern Timeline Culture Slides */}
              <div className="space-y-8">
                {/* Main Content Area */}
                <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#102467] via-transparent to-[#ffd704]"></div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px]">
                    {/* Image Section with Modern Layout */}
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#102467]/90 to-[#102467]/70"></div>
                      <div className="relative h-full">
                        <Image
                          key={cultureIndex}
                          src={cultures[cultureIndex].image}
                          alt={String(lang) === 'id' ? cultures[cultureIndex].title_id : cultures[cultureIndex].title_en}
                          fill
                          className="object-cover object-center transition-all duration-1000 ease-in-out transform"
                          style={{
                            animation: 'fadeInScale 1s ease-in-out'
                          }}
                        />
                      </div>
                      
                      {/* Floating Badge */}
                      <div 
                        key={`badge-${cultureIndex}`}
                        className="absolute top-6 left-6 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 transition-all duration-700 ease-out"
                        style={{
                          animation: 'slideInFromLeft 0.8s ease-out'
                        }}
                      >
                        <span className="text-white font-semibold text-sm font-poppins">
                          {cultureIndex + 1} / {cultures.length}
                        </span>
                      </div>
                      
                      {/* Content Overlay */}
                      <div 
                        key={`overlay-${cultureIndex}`}
                        className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent transition-all duration-700 ease-out"
                        style={{
                          animation: 'slideInFromBottom 0.8s ease-out'
                        }}
                      >
                        <h3 className="text-2xl lg:text-3xl font-bold text-white font-poppins mb-2">
                          {String(lang) === 'id' ? cultures[cultureIndex].title_id : cultures[cultureIndex].title_en}
                        </h3>
                        <div className="w-16 h-1 bg-[#ffd704] rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Content Section with Glassmorphism */}
                    <div className="p-8 lg:p-12 flex flex-col justify-start pt-2 lg:pt-4 bg-white/80 backdrop-blur-sm">
                      <div 
                        key={`content-${cultureIndex}`}
                        className="space-y-6 transition-all duration-700 ease-out"
                        style={{
                          animation: 'fadeInUpContent 0.8s ease-out'
                        }}
                      >
                        <div className="prose prose-lg max-w-none text-gray-700 font-poppins leading-relaxed">
                          <p className="text-lg">
                            {String(lang) === 'id' ? cultures[cultureIndex].description_id : cultures[cultureIndex].description_en}
                          </p>
                        </div>
                        
                        {cultures[cultureIndex].motifs && (
                          <div className="bg-gradient-to-r from-[#ffd704]/10 to-[#ffd704]/5 rounded-2xl p-6 border border-[#ffd704]/20">
                            <h4 className="text-xl font-bold text-gray-800 mb-4 font-poppins flex items-center">
                              <div className="w-2 h-2 bg-[#ffd704] rounded-full mr-3"></div>
                              {String(lang) === 'id' ? 'Motif Khas' : 'Distinctive Motifs'}
                            </h4>
                            <ul className="space-y-2">
                              {cultures[cultureIndex].motifs.map((motif, index) => (
                                <li key={index} className="flex items-start font-poppins text-gray-700">
                                  <span className="w-1.5 h-1.5 bg-[#ffd704] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  {motif}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {cultures[cultureIndex].functions && (
                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                            <h4 className="text-xl font-bold text-gray-800 mb-4 font-poppins flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                              {String(lang) === 'id' ? 'Fungsi & Peran' : 'Functions & Roles'}
                            </h4>
                            <ul className="space-y-2">
                              {cultures[cultureIndex].functions.map((func, index) => (
                                <li key={index} className="flex items-start font-poppins text-gray-700">
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  {func}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {cultures[cultureIndex].heritage && (
                          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                            <div className="flex items-start">
                              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="text-lg font-bold text-gray-800 mb-2 font-poppins">
                                  {String(lang) === 'id' ? 'Warisan Budaya' : 'Cultural Heritage'}
                                </h4>
                                <p className="text-gray-700 font-poppins">
                                  {cultures[cultureIndex].heritage}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modern Timeline Navigation */}
                <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
                  {/* Navigation Arrows */}
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setCultureIndex((prev) => (prev - 1 + cultures.length) % cultures.length)}
                      className="group bg-white hover:bg-[#102467] border-2 border-gray-200 hover:border-[#102467] rounded-full p-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                      aria-label="Previous culture"
                    >
                      <svg className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => setCultureIndex((prev) => (prev + 1) % cultures.length)}
                      className="group bg-white hover:bg-[#102467] border-2 border-gray-200 hover:border-[#102467] rounded-full p-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                      aria-label="Next culture"
                    >
                      <svg className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Thumbnail Timeline */}
                  <div className="flex items-center space-x-3 pb-2">
                    {cultures.map((culture, index) => (
                      <button
                        key={index}
                        onClick={() => setCultureIndex(index)}
                        className={`group relative flex-shrink-0 transition-all duration-300 ${
                          cultureIndex === index 
                            ? 'transform scale-110' 
                            : 'hover:transform hover:scale-105'
                        }`}
                      >
                        {/* Thumbnail Image */}
                        <div className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          cultureIndex === index 
                            ? 'border-[#ffd704] shadow-lg' 
                            : 'border-gray-200 group-hover:border-gray-300'
                        }`}>
                          <Image
                            src={culture.image}
                            alt={culture.title_id}
                            fill
                            className="object-cover"
                          />
                          {cultureIndex === index && (
                            <div className="absolute inset-0 bg-[#ffd704]/20"></div>
                          )}
                        </div>
                        
                        {/* Active Indicator */}
                        {cultureIndex === index && (
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#ffd704] rounded-full"></div>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Progress Indicator */}
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500 font-poppins">
                      {cultureIndex + 1} / {cultures.length}
                    </span>
                    <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#102467] to-[#ffd704] rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${((cultureIndex + 1) / cultures.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Souvenir */}
          <SouvenirSection />

          {/* Section 5: Galeri */}
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 font-poppins">
                {String(lang) === 'id' ? 'Galeri' : 'Gallery'}
              </h2>
              <p className="text-lg text-gray-600 text-center mb-6 font-poppins max-w-3xl mx-auto leading-relaxed">
                {String(lang) === 'id' 
                  ? 'Jelajahi keindahan dan keunikan Desa Wisata Silungkang Oso melalui dokumentasi visual yang menampilkan kekayaan alam, budaya, dan kehidupan masyarakat setempat.'
                  : 'Explore the beauty and uniqueness of Silungkang Oso Tourism Village through visual documentation showcasing the richness of nature, culture, and local community life.'
                }
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#ffd704] to-[#ffed4e] rounded-full mx-auto mb-12"></div>
              
              <div className="space-y-12">
                {/* Video Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 font-poppins mb-6 text-center">
                    {String(lang) === 'id' ? 'Video Dokumentasi' : 'Documentation Video'}
                  </h3>
                  
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 max-w-4xl mx-auto">
                    {/* Video Slider Container */}
                    <div className="relative">
                      {/* Video Display */}
                      <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                        <div className="absolute inset-0">
                          <iframe
                            key={videoIndex} // Key untuk memaksa re-render iframe
                            src={videos[videoIndex].src}
                            className="w-full h-full"
                            allow="autoplay"
                            allowFullScreen
                            title={videos[videoIndex].title}
                          ></iframe>
                        </div>
                      </div>
                      
                      {/* Navigation Arrows */}
                      <button
                        onClick={() => setVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                        aria-label="Previous video"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      <button
                        onClick={() => setVideoIndex((prev) => (prev + 1) % videos.length)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                        aria-label="Next video"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                    
                    
                    {/* Video Indicators */}
                    <div className="flex justify-center space-x-2 mt-4">
                      {videos.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setVideoIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === videoIndex ? 'bg-[#ffd704]' : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                          aria-label={`Go to video ${index + 1}`}
                        ></button>
                      ))}
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
                            src="/image/destinasi-wisata/goa-kelambu.jpg?v=2" 
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
                            src="/image/destinasi-wisata/kolam-renang.jpg" 
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

                      {/* Image 12 - Additional for desktop */}
                      <div className="break-inside-avoid">
                        <div className="relative group overflow-hidden rounded-lg">
                          <img 
                            src="/image/budaya/tenun-songket-silungkang.png" 
                            alt={String(lang) === 'id' ? 'Kerajinan Tenun Songket' : 'Songket Weaving Craft'}
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

                      {/* Image 13 - Fill empty space */}
                      <div className="break-inside-avoid">
                        <div className="relative group overflow-hidden rounded-lg">
                          <img 
                            src="/image/budaya/talempong-botuang.webp" 
                            alt={String(lang) === 'id' ? 'Musik Tradisional Talempong' : 'Traditional Talempong Music'}
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

                      {/* Image 14 - Fill empty space */}
                      <div className="break-inside-avoid">
                        <div className="relative group overflow-hidden rounded-lg">
                          <img 
                            src="/image/budaya/pidato-adat.jpg" 
                            alt={String(lang) === 'id' ? 'Budaya Pidato Adat' : 'Traditional Speech Culture'}
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

                      {/* Image 15 - Fill empty space */}
                      <div className="break-inside-avoid">
                        <div className="relative group overflow-hidden rounded-lg">
                          <img 
                            src="/image/budaya/rabana.jpg" 
                            alt={String(lang) === 'id' ? 'Seni Musik Rabana' : 'Rabana Musical Art'}
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

                      {/* Image 16 - Fill empty space */}
                      <div className="break-inside-avoid">
                        <div className="relative group overflow-hidden rounded-lg">
                          <img 
                            src="/image/product/Songket Silungkang 1.webp" 
                            alt={String(lang) === 'id' ? 'Produk Songket Khas' : 'Unique Songket Product'}
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

                      {/* Image 17 - Fill empty space */}
                      <div className="break-inside-avoid">
                        <div className="relative group overflow-hidden rounded-lg">
                          <img 
                            src="/image/product/Songket Silungkang.webp" 
                            alt={String(lang) === 'id' ? 'Kerajinan Songket Tradisional' : 'Traditional Songket Craft'}
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

                      {/* Image 18 - Fill empty space */}
                      <div className="break-inside-avoid">
                        <div className="relative group overflow-hidden rounded-lg">
                          <img 
                            src="/image/product/Tenun Silungkang...png" 
                            alt={String(lang) === 'id' ? 'Warisan Budaya Tenun' : 'Weaving Cultural Heritage'}
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

          {/* Section 6: Kontak Informasi */}
          <ContactSection />

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
