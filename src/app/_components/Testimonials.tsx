'use client';

import { useEffect, useRef } from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  testimonial: string;
  delay: number;
}

const TestimonialCard = ({ name, role, image, testimonial, delay }: TestimonialCardProps) => {
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
      className="bg-white rounded-2xl shadow-lg p-8 opacity-0 transform translate-y-8 transition-all duration-700 hover:shadow-2xl hover:scale-105"
    >
      {/* Quote Icon */}
      <div className="text-green-600 mb-4">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
        &ldquo;{testimonial}&rdquo;
      </p>

      {/* Profile */}
      <div className="flex items-center">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-600 rounded-full border-2 border-white"></div>
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Budi Santoso",
      role: "Pengunjung dari Jakarta",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      testimonial: "Pengalaman yang luar biasa! Pemandangan alamnya sangat memukau dan kerajinan tangan warga desa benar-benar berkualitas tinggi. Pasti akan kembali lagi."
    },
    {
      name: "Sari Indah",
      role: "Wisatawan dari Bandung",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      testimonial: "Desa yang sangat asri dan warga yang ramah. Produk pertanian organiknya segar dan lezat. Sangat cocok untuk liburan keluarga yang menenangkan."
    },
    {
      name: "Ahmad Wijaya",
      role: "Warga Desa",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      testimonial: "Sebagai warga desa, saya bangga dengan potensi yang dimiliki desa kami. Wisata alam dan kerajinan tangan kami sudah dikenal luas dan diminati banyak orang."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Testimoni & Pengalaman
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dengarkan pengalaman dan kesan dari pengunjung yang telah merasakan 
            keindahan dan keunikan desa kami.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
              testimonial={testimonial.testimonial}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Pengunjung Bulanan</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-600">Tahun Pengalaman</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Tingkat Kepuasan</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Produk Kerajinan</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
