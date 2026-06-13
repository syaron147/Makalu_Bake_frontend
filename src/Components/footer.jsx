import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import styles from './footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={`${styles.footerCol} ${styles.brandCol}`}>
            <p className={styles.logo}>Makalu Bake &amp; Sip</p>
            <p className={styles.tagline}>Crafting the finest pastries and specialty coffee with mountain soul and urban grace.</p>
          </div>

          {/* Links Column */}
          <div className={styles.footerCol}>
            <h4 className={styles.navHead}>Links</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="https://www.facebook.com/share/1ETL7kAh3K/" className={styles.linkItem}>
                  <FaFacebookF className={styles.linkIcon} />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/makalubakesip?igsh=MWJ5Y2gxZWQxN3ljNQ==" className={styles.linkItem}>
                  <FaInstagram className={styles.linkIcon} />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div className={`${styles.footerCol} ${styles.hoursCol}`}>
            <h4 className={styles.navHead}>Hours</h4>
            <ul className={styles.hoursText}>
              <li><span>Monday – Friday</span><span>7:00 AM – 6:00 PM</span></li>
              <li><span>Saturday</span><span>8:00 AM – 7:00 PM</span></li>
              <li><span>Sunday</span><span>9:00 AM – 5:00 PM</span></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.footerCol}>
            <h4 className={styles.navHead}>Get In Touch</h4>
            <p className={styles.address}>
              sankhashabha<br />
              khadbari, Nepal
            </p>
            <a href="tel:+12125551234" className={styles.contact}> +977 984286263</a>
            <a href="mailto:hello@makalu.cafe" className={styles.contact}>@makalubake.com</a>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Footer Bottom */}
        <div className={styles.bottom}>
          <p>© {currentYear} Makalu Bake &amp; Sip. All rights reserved.</p>
          <div className={styles.links}>
            <a href="#" className={styles.bottomLink}>Privacy</a>
            <a href="#" className={styles.bottomLink}>Terms</a>
            <a href="#" className={styles.bottomLink}>Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}