'use client';

import Image from 'next/image';
import { useLanguage } from './LanguageProvider';

interface SouvenirSectionProps {
  showMarketplace?: boolean;
  className?: string;
}

export default function SouvenirSection({ showMarketplace = true, className = "" }: SouvenirSectionProps) {
  const { lang } = useLanguage();

  const products = [
    {
      id: 1,
      name: 'Songket Silungkang',
      image: '/image/product/Songket Silungkang.webp',
      description: 'Tenun tradisional elegan dari Sawahlunto dengan motif khas dan benang emas, simbol keanggunan serta warisan budaya Minangkabau. Cocok untuk acara istimewa dan koleksi eksklusif Anda.',
      price: 'Rp 600.000 - Rp 2.000.000',
      category: 'Tekstil Tradisional',
      tags: ['Handmade', 'Stok Tersedia']
    },
    {
      id: 2,
      name: 'Gantungan Kunci Perca Songket',
      image: '/image/product/gantungan-kunci-perca-songket.png',
      description: 'Souvenir unik yang memadukan keindahan kain songket dengan sentuhan modern. Dibuat dari potongan perca songket pilihan, setiap gantungan kunci menghadirkan motif khas Minangkabau yang elegan sekaligus ramah lingkungan. Cocok sebagai oleh-oleh khas Silungkang yang praktis, bernilai budaya, dan penuh makna.',
      price: 'Rp 12.999',
      category: 'Aksesoris',
      tags: ['Handmade', 'Stok Tersedia']
    },
    {
      id: 3,
      name: 'Pin Perca Songket',
      image: '/image/product/pin-perca-songket.png',
      description: 'Aksesori kecil dengan sentuhan elegan khas tenun tradisional. Terbuat dari potongan perca songket yang bermotif indah, pin ini cocok digunakan pada pakaian, hijab, tas, atau sebagai cenderamata khas Minangkabau. Ringkas, unik, dan sarat nilai budaya, menjadikannya pilihan souvenir eksklusif namun tetap terjangkau.',
      price: 'Rp 7.000',
      category: 'Aksesoris',
      tags: ['Stok Tersedia']
    },
    {
      id: 4,
      name: 'Tote Bag Perca Songket',
      image: '/image/product/tote-bag-perca-songket.png',
      description: 'Perpaduan antara gaya modern dan tradisi. Dibuat dari perca songket khas Silungkang, tote bag ini menghadirkan sentuhan etnik yang elegan namun tetap praktis untuk penggunaan sehari-hari. Ringan, ramah lingkungan, dan sarat nilai budaya, tote bag ini sangat cocok dijadikan oleh-oleh khas maupun pelengkap gaya Anda.',
      price: 'Rp 86.000',
      category: 'Aksesoris',
      tags: ['Handmade', 'Stok Tersedia']
    },
    {
      id: 5,
      name: 'Salempang Songket Silungkang',
      image: '/image/product/salempang-songket-silungkang.png',
      description: 'Aksesori anggun yang melambangkan kehormatan dan budaya Minangkabau. Terbuat dari tenun songket asli Silungkang dengan motif tradisional penuh filosofi, salempang ini biasanya digunakan pada acara adat, wisuda, pernikahan, maupun seremoni resmi. Elegan, berkelas, dan sarat makna, salempang songket menjadi pilihan tepat sebagai simbol kebanggaan dan identitas budaya.',
      price: 'Rp 150.000',
      category: 'Tekstil Tradisional',
      tags: ['Handmade', 'Stok Tersedia']
    },
    {
      id: 6,
      name: 'Deta Songket Silungkang',
      image: '/image/product/deta-songket-silungkang.png',
      description: 'Ikat kepala khas Minangkabau yang dibuat dari tenun songket asli Silungkang. Deta tidak hanya berfungsi sebagai penutup kepala, tetapi juga simbol kewibawaan, kehormatan, dan identitas budaya. Dengan motif songket yang elegan, deta ini sangat cocok digunakan dalam acara adat, pertunjukan budaya, maupun koleksi fashion etnik yang penuh makna.',
      price: 'Rp 150.000',
      category: 'Tekstil Tradisional',
      tags: ['Handmade', 'Stok Tersedia']
    },
    {
      id: 7,
      name: 'Lanyard Songket Silungkang',
      image: '/image/product/lanyard-songket-silungkang.png',
      description: 'Lanyard elegan dengan sentuhan khas tenun songket Silungkang. Cocok digunakan untuk kartu identitas, kartu kerja, maupun kartu pelajar, ID card ini memadukan fungsi praktis dengan nilai budaya. Motif songket yang khas membuatnya tampil unik, eksklusif, sekaligus menjadi souvenir modern bernuansa tradisional Minangkabau.',
      price: 'Rp 45.000',
      category: 'Aksesoris',
      tags: ['Stok Tersedia']
    },
    {
      id: 8,
      name: 'Bubuk Kulit Manis',
      image: '/image/product/bubuk-kulit manis.png',
      description: 'Bubuk kulit manis adalah hasil olahan alami dari kulit batang pohon kayu manis pilihan yang dikeringkan dan digiling halus. Memiliki aroma khas yang manis, hangat, dan sedikit pedas, bubuk kulit manis sering digunakan sebagai bumbu dapur, bahan tambahan minuman, serta campuran dalam kue, roti, dan berbagai olahan kuliner.',
      price: 'Rp 9.999',
      category: 'Produk Olahan',
      tags: ['Alami', 'Stok Tersedia']
    },
    {
      id: 9,
      name: 'Sirup Kulit Manis',
      image: '/image/product/sirup-kulit manis.png',
      description: 'Sirup kulit manis adalah olahan alami dari ekstrak kulit kayu manis pilihan yang dipadukan dengan gula berkualitas, menghasilkan minuman manis dengan aroma hangat khas rempah. Teksturnya kental, rasa manis berpadu sedikit pedas-aromatik, sangat cocok sebagai pemanis alami dan penambah cita rasa pada berbagai minuman maupun makanan.',
      price: 'Rp 15.000',
      category: 'Produk Olahan',
      tags: ['Alami', 'Stok Tersedia']
    },
    {
      id: 10,
      name: 'Aroma Terapi Kulit Manis',
      image: '/image/product/aroma-terapi-kulit-manis.png',
      description: 'Aromaterapi kulit manis terbuat dari ekstrak alami kulit kayu manis yang diproses menjadi minyak esensial dengan aroma hangat, manis, dan menenangkan. Aromanya khas rempah yang dapat memberikan rasa nyaman, meningkatkan fokus, sekaligus menciptakan suasana rileks.',
      price: 'Rp 25.999',
      category: 'Produk Olahan',
      tags: ['Alami', 'Stok Tersedia']
    }
  ];

  return (
    <section className={`px-4 sm:px-6 lg:px-8 mb-16 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 font-poppins">
          {String(lang) === 'id' ? 'Souvenir' : 'Souvenirs'}
        </h2>
        <p className="text-lg text-gray-600 text-center mb-6 font-poppins max-w-3xl mx-auto leading-relaxed">
          {String(lang) === 'id' 
            ? 'Dukung ekonomi lokal dengan membeli produk-produk berkualitas dari UMKM Silungkang Oso'
            : 'Support local economy by purchasing quality products from Silungkang Oso MSMEs'
          }
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#ffd704] to-[#ffed4e] rounded-full mx-auto mb-12"></div>
        
        {/* Modern Souvenir Section */}
        <div className="space-y-12">
          {/* Marketplace Section */}
          {showMarketplace && (
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-800 font-poppins mb-8">
                {String(lang) === 'id' ? 'Belanja Online di Marketplace' : 'Shop Online on Marketplace'}
              </h4>
              <div className="flex flex-wrap justify-center gap-6">
                {/* Shopee */}
                <a 
                  href="https://shopee.co.id/osorancakmart" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 border-2 border-gray-200 hover:border-orange-500 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 group-hover:bg-white rounded-xl flex items-center justify-center p-2">
                      <Image
                        src="/image/logo/logo-shopee.png"
                        alt="Shopee Logo"
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-gray-700 group-hover:text-white font-semibold font-poppins">Shopee</span>
                  </div>
                </a>

                {/* Tokopedia */}
                <a 
                  href="https://shop-id.tokopedia.com/view/product/1732646056699200808?encode_params=MIIBPwQMBLeRsDeDSyGw5EI6BIIBG9pJpovV_3kPfqrr_35EkynV9twSAiUVN_DyU7SsaxvGSJNIGbu_PPmZAKtF4l-UCcN3wgSOSu8_hCRGNTVexpFR3o4CXyUfAZhpZLT_3zaohbOi84NgbfA7cmCQzaLuMd3JtYst-kBDosyV1jv89awpqoXKCZs6V_Ie5kORUL6TkxqiQiepm3QmNSY29j6gbDfTl7PENhI-wfbK9soQ-rJbc3Q4p2vDiIjKAiak6Y3zoJ_sCZd_MGuqkoVPh6Nt6X3li1LT2qr4lHHIFOUdwqnyFSZWFdDu3JEC9Ag8oYC1Z3YjgIYkr9BegOavO7oeEn-QmDaXNZZaELO0UcJ2S5zk903MwmAG5QvDOrpz74kdxpWiDY6uHJUI7dAEEPifihpIInfwJAKGCREYX9k%3D" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 border-2 border-gray-200 hover:border-green-500 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 group-hover:bg-white rounded-xl flex items-center justify-center p-2">
                      <Image
                        src="/image/logo/logo-toko-pedia.jpg"
                        alt="Tokopedia Logo"
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-gray-700 group-hover:text-white font-semibold font-poppins">Tokopedia</span>
                  </div>
                </a>

                {/* Instagram Shop */}
                <a 
                  href="https://www.instagram.com/sigekart?igsh=NndzN3g3MXN3Nms2" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 border-2 border-gray-200 hover:border-pink-500 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-100 group-hover:bg-white rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 group-hover:text-white font-semibold font-poppins">Instagram Shop</span>
                  </div>
                </a>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-[500px] flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 space-y-2">
                    {product.tags.map((tag, index) => (
                      <span key={index} className={`text-white px-2 py-1 rounded-full text-xs font-medium block ${
                        tag === 'Handmade' ? 'bg-green-500' : 'bg-blue-500'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h5 className="text-lg font-bold text-gray-800 font-poppins mb-2">{product.name}</h5>
                  <p className="text-gray-600 font-poppins text-sm leading-relaxed mb-3 flex-1">
                    {product.description}
                  </p>
                  <div className="text-orange-500 font-semibold text-sm">
                    Harga: {product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
