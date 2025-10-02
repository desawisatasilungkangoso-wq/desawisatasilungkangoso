'use client';

import { useLanguage } from './LanguageProvider';
import Link from 'next/link';

export default function ContactSuccess() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-[#fffcf9] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg 
            className="w-12 h-12 text-green-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins mb-4">
          {String(lang) === 'id' ? 'Pesan Anda Terkirim' : 'Your Message Has Been Sent'}
        </h1>
        
        <p className="text-lg text-gray-600 font-poppins mb-8 leading-relaxed">
          {String(lang) === 'id' 
            ? 'Kami akan menghubungi Anda dalam 24 jam' 
            : 'We will contact you within 24 hours'
          }
        </p>

        {/* Back to Home Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-[#ffd704] hover:bg-[#ffed4e] text-[#102467] font-semibold py-3 px-8 rounded-lg transition-colors duration-300 font-poppins shadow-md hover:shadow-lg hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          {String(lang) === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
        </Link>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-white rounded-xl shadow-md border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 font-poppins mb-3">
            {String(lang) === 'id' ? 'Informasi Tambahan' : 'Additional Information'}
          </h3>
          <p className="text-sm text-gray-600 font-poppins leading-relaxed">
            {String(lang) === 'id' 
              ? 'Jika Anda memiliki pertanyaan mendesak, silakan hubungi kami langsung di 081277849089 atau email pokdarwispanorama@gmail.com'
              : 'If you have urgent questions, please contact us directly at 081277849089 or email pokdarwispanorama@gmail.com'
            }
          </p>
        </div>
      </div>
    </div>
  );
}
