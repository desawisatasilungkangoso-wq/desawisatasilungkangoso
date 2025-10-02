'use client';

import { useEffect, useRef, useState } from 'react';
import Card from './Card';
import styles from './CardsSection.module.css';

interface PotensiData {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const potensiData: PotensiData[] = [
  {
    id: 1,
    title: "Wisata Alam Batu Runciang",
    description: "Nikmati keindahan alam yang memukau dengan formasi batu unik dan pemandangan yang menakjubkan. Tempat yang sempurna untuk fotografi dan rekreasi keluarga.",
    imageSrc: "/image/destinasi-wisata/batu-runciang.jpg"
  },
  {
    id: 2,
    title: "Camping Ground",
    description: "Rasakan pengalaman berkemah yang tak terlupakan di tengah alam yang asri. Dilengkapi dengan fasilitas lengkap untuk kenyamanan pengunjung.",
    imageSrc: "/image/destinasi-wisata/camping-ground.JPG"
  },
  {
    id: 3,
    title: "Goa Kelambu",
    description: "Jelajahi keindahan goa dengan stalaktit dan stalagmit yang menawan. Pengalaman petualangan bawah tanah yang mendebarkan dan edukatif.",
    imageSrc: "/image/destinasi-wisata/goa-kelambu.jpg?v=2"
  },
  {
    id: 4,
    title: "Kolam Renang Mudiak Lugha",
    description: "Segarkan diri di kolam renang alami dengan air yang jernih dan sejuk. Tempat yang ideal untuk relaksasi dan bermain air bersama keluarga.",
    imageSrc: "/image/destinasi-wisata/kolam-renang.jpg"
  },
  {
    id: 5,
    title: "Pertanian Organik",
    description: "Pelajari teknik pertanian organik modern yang ramah lingkungan. Nikmati hasil panen segar langsung dari kebun organik desa.",
    imageSrc: "/image/herobanner/image2.JPG"
  },
  {
    id: 6,
    title: "Kerajinan Tangan Lokal",
    description: "Koleksi kerajinan tangan unik yang dibuat oleh pengrajin lokal. Setiap produk memiliki nilai seni dan budaya yang tinggi.",
    imageSrc: "/image/herobanner/image3.jpg"
  }
];

export default function CardsSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-card-id') || '0');
            setVisibleCards(prev => new Set([...prev, cardId]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.cardsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Potensi Unggulan Desa</h2>
          <p className={styles.sectionSubtitle}>
            Temukan berbagai keunggulan dan potensi yang dimiliki desa kami
          </p>
        </div>
        
        <div className={styles.cardsGrid}>
          {potensiData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => { cardRefs.current[index] = el; }}
              data-card-id={item.id}
              className={`${styles.cardWrapper} ${
                visibleCards.has(item.id) ? styles.visible : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card
                id={item.id}
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
