'use client';

import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Pemandangan Desa"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div
        ref={heroRef}
        className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto opacity-0 transform translate-y-8 transition-all duration-1000"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Potensi Desa{' '}
          <span className="text-green-400">Silungkang Oso</span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-green-200">
          Sentra Kerajinan Tenun Tradisional & Ekowisata Alam
        </h2>
        
        <p className="text-lg sm:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
          Menjelajahi keindahan alam yang memukau, kerajinan tangan yang memesona, 
          dan warisan budaya yang kaya. Desa Silungkang Oso menawarkan pengalaman 
          wisata yang autentik dan berkesan.
        </p>
        
        <button
          onClick={() => {
            document.getElementById('potensi-unggulan')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Jelajahi Potensi
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
