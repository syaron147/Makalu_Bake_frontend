import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './hero.module.css';
import bgImage from '../assets/bakery-bg.jpeg';

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current)
        bgRef.current.style.transform = `translateY(${window.pageYOffset * 0.4}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={styles.hero}>
      <div ref={bgRef} className={styles.bg} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.eyebrow}>Est. 2024</span>
        <h1 className={styles.headline}>
          Artisanal Flavors,<br />Roasted with Love
        </h1>
        <div className={styles.actions}>
          <Link to="/menu" className={styles.btnPrimary}>View Menu</Link>
          <Link to="/about" className={styles.btnOutline}>Our Story</Link>
        </div>
      </div>

      <div
  ref={bgRef}
  className={styles.bg}
  style={{ backgroundImage: `url(${bgImage})` }}
  />

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot} />
      </div>
    </section>
  );
}