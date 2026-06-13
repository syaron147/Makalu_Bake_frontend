import React from 'react';
import { Link } from 'react-router-dom';
import styles from './about.module.css';
import useReveal from '../hooks/useReveal';

export default function About() {
  const textRef = useReveal();
  const imgRef  = useReveal();
  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div ref={textRef} className={`${styles.text} reveal`}>
          <h2 className={styles.title}>The Philosophy of 'Bake &amp; Sip'</h2>
          <blockquote className={styles.quote}>
            "We believe that the best moments are found in the slow drip of coffee and the patient
            rise of dough. Makalu is not just a bakery; it is a sanctuary for the senses, where
            time honours tradition and every crumb tells a story of the mountains."
          </blockquote>
          <p className={styles.body}>
            Inspired by the rugged purity of the Himalayas and the refined techniques of
            old-world boulangeries, we source our grains from small-scale farmers and roast
            our beans in micro-batches to ensure every sip is as profound as the last.
          </p>
          <Link to="/about" className={styles.readMore}>
            Read Our Full Journey
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
          </Link>
        </div>
        <div ref={imgRef} className={`${styles.imageCol} reveal`} style={{ transitionDelay: '120ms' }}>
          <div className={styles.circle}>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF9548_GBLnjmyQVTHHAVneqlz8i6CDXbcovj7Xxiyndlojyt7zzwOmyPcxrv1nrt-Gz7-ziYL8SrRX_yopNixw0-kuyFBK4xFtjGASf_EPc9LrC8NeOowEOXgG4rKl3CV7dZ8fOyNMOLy2J1w-3F8vS09V6-dqZ38njQCWTTkznXXlLRbL8FCa9qgxWDrJctotr8xVjoq7hqM9-fDnECKJx7By6bRCsE81YUgDzUXVs9cinGovzcqCDz4w5ZhhacjO9WE3MOqBMo"
              alt="Barista" className={styles.circleImg} loading="lazy"
            />
          </div>
          <div className={`${styles.floatCard} glass-card`}>
            <p className={styles.floatLabel}>Daily Fresh</p>
            <p className={styles.floatBody}>Bread comes out of the oven at exactly 7:00 AM every single morning.</p>
          </div>
        </div>
      </div>
    </section>
  );
}