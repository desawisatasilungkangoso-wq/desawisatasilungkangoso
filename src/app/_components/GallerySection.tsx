'use client';

import { useState } from 'react';
import { useLanguage } from './LanguageProvider';

interface GallerySectionProps {
  imageLimit?: number;
  showHeader?: boolean;
}

const GallerySection = ({ imageLimit, showHeader = true }: GallerySectionProps) => {
  const { lang } = useLanguage();
  const [videoIndex, setVideoIndex] = useState(0);

  const videos = [
    {
      src: 'https://drive.google.com/file/d/102nBFe7t-YB8npZxNs_FPYoy78LlsmUB/preview',
      title: String(lang) === 'id' ? 'Video Dokumentasi 1' : 'Documentation Video 1',
      description: String(lang) === 'id' ? 'Panorama alam dan aktivitas masyarakat' : 'Nature panorama and community activities'
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

  const galleryImages = [
    // Hero Banner Images (excluding Foto3.jpg)
    {
      src: '/image/herobanner/Foto1.jpg',
      alt_id: 'Pemandangan Desa Wisata Silungkang Oso',
      alt_en: 'Silungkang Oso Tourism Village View'
    },
    {
      src: '/image/herobanner/Foto2.jpg',
      alt_id: 'Keindahan Alam Desa Wisata',
      alt_en: 'Natural Beauty of Tourism Village'
    },
    {
      src: '/image/herobanner/Foto4.jpg',
      alt_id: 'Budaya dan Tradisi Desa',
      alt_en: 'Village Culture and Traditions'
    },
    // Destinasi Wisata Images
    {
      src: '/image/destinasi-wisata/batu-runciang.jpg',
      alt_id: 'Batu Runciang',
      alt_en: 'Runciang Stone'
    },
    {
      src: '/image/destinasi-wisata/camping.jpg',
      alt_id: 'Camping Ground Guak Kumbuah',
      alt_en: 'Guak Kumbuah Camping Ground'
    },
    {
      src: '/image/destinasi-wisata/Goa-Kelambu (1).jpg',
      alt_id: 'Goa Kelambu',
      alt_en: 'Kelambu Cave'
    },
    {
      src: '/image/destinasi-wisata/goa-kelambu.JPG',
      alt_id: 'Goa Kelambu - Eksplorasi',
      alt_en: 'Kelambu Cave - Exploration'
    },
    {
      src: '/image/destinasi-wisata/kolam-renang.jpg',
      alt_id: 'Kolam Renang Mudiak Lugha',
      alt_en: 'Mudiak Lugha Swimming Pool'
    },
    // Budaya Images
    {
      src: '/image/budaya/pidato-adat.jpg',
      alt_id: 'Pidato Adat',
      alt_en: 'Traditional Speech'
    },
    {
      src: '/image/budaya/rabana.jpg',
      alt_id: 'Rabana',
      alt_en: 'Rabana Traditional Music'
    },
    {
      src: '/image/budaya/randai.jpg',
      alt_id: 'Randai',
      alt_en: 'Randai Traditional Performance'
    },
    {
      src: '/image/budaya/talempong-botuang.webp',
      alt_id: 'Talempong Botuang',
      alt_en: 'Botuang Talempong'
    },
    {
      src: '/image/budaya/tenun-songket-silungkang.png',
      alt_id: 'Tenun Songket Silungkang',
      alt_en: 'Silungkang Songket Weaving'
    }
  ];

  const imagesToRender = galleryImages.slice(0, imageLimit ?? galleryImages.length);

  return (
    <section className="px-4 sm:px-6 lg:px-8 mb-16">
      <div className="max-w-7xl mx-auto">
        {showHeader && (
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 font-poppins">
              {String(lang) === 'id' ? 'Galeri' : 'Gallery'}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-6 font-poppins max-w-3xl mx-auto leading-relaxed">
              {String(lang) === 'id' 
                ? 'Jelajahi keindahan dan keunikan Desa Wisata Silungkang Oso melalui dokumentasi visual yang menampilkan kekayaan alam, budaya, dan kehidupan masyarakat setempat.'
                : 'Explore the beauty and uniqueness of Silungkang Oso Tourism Village through visual documentation showcasing the richness of nature, culture, and local community life.'}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ffd704] to-[#ffed4e] rounded-full mx-auto mb-12"></div>
          </>
        )}

        <div className="space-y-12">
          {/* Video Section */}
          <div className="space-y-6">
            <h3 className={`text-2xl font-bold text-gray-800 font-poppins mb-6 text-center ${showHeader ? '' : 'mt-10 md:mt-16'}`}>
              {String(lang) === 'id' ? 'Video Dokumentasi' : 'Documentation Video'}
            </h3>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 max-w-4xl mx-auto">
              <div className="relative">
                <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <div className="absolute inset-0">
                    <iframe
                      key={videoIndex}
                      src={videos[videoIndex].src}
                      className="w-full h-full"
                      allow="autoplay"
                      allowFullScreen
                      title={videos[videoIndex].title}
                    ></iframe>
                  </div>
                </div>

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
              <div className="columns-2 md:columns-3 lg:columns-5 gap-3 space-y-3">
                {imagesToRender.map((img, idx) => (
                  <div className="break-inside-avoid" key={idx}>
                    <div className="relative group overflow-hidden rounded-lg">
                      <img 
                        src={img.src}
                        alt={String(lang) === 'id' ? img.alt_id : img.alt_en}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;


