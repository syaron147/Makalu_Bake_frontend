import React from 'react';
import styles from './cta.module.css';
import useReveal from '../hooks/useReveal';

export default function CTA() {
  const ref = useReveal();
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div ref={ref} className={`${styles.box} reveal`}>
          <div className={styles.dots} />
          <div className={styles.content}>
            <h2 className={styles.title}>Experience the Craft Firsthand</h2>
            <p className={styles.sub}>Join us for a morning of fresh aromas and artisanal perfection. We are open daily from 7:00 AM to 6:00 PM.</p>
            <div className={styles.actions}>
              <button className={styles.btnPrimary}>Find Us on the Map</button>
              <button className={styles.btnOutline}>Join Our Newsletter</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}