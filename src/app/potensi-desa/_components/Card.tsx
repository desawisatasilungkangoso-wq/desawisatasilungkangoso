'use client';

import Image from 'next/image';
import styles from './Card.module.css';

interface CardProps {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

export default function Card({ title, description, imageSrc }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={styles.cardImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={styles.imageOverlay}></div>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}
