'use client';

import { useEffect, useRef } from 'react';

interface PotensiCardProps {
  image: string;
  title: string;
  description: string;
  delay: number;
}

const PotensiCard = ({ image, title, description, delay }: PotensiCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in-up');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-2xl shadow-lg overflow-hidden opacity-0 transform translate-y-8 transition-all duration-700 hover:shadow-2xl hover:scale-105 group"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-4">
          {description}
        </p>
        
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

const PotensiCards = () => {
  const potensiData = [
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
      title: "Kerajinan Anyaman",
      description: "Karya seni anyaman tradisional yang dibuat dengan tangan terampil warga desa, menggunakan bahan alami berkualitas tinggi dan teknik turun-temurun."
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Wisata Air Terjun",
      description: "Air terjun yang memukau dengan pemandangan alam yang masih asri, menawarkan pengalaman berwisata yang menyegarkan dan menenangkan jiwa."
    },
    {
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Pertanian Organik",
      description: "Sistem pertanian ramah lingkungan yang menghasilkan produk berkualitas tinggi tanpa menggunakan bahan kimia berbahaya."
    }
  ];

  return (
    <section id="potensi-unggulan" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Potensi Unggulan Desa
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Menampilkan kekayaan alam dan budaya yang menjadi kebanggaan desa kami, 
            siap untuk dieksplorasi dan dinikmati oleh setiap pengunjung.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {potensiData.map((potensi, index) => (
            <PotensiCard
              key={index}
              image={potensi.image}
              title={potensi.title}
              description={potensi.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PotensiCards;
