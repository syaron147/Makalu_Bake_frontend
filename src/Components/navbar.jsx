import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './navbar.module.css';
import logoImage from '../assets/Makalu-logo.png';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`container ${styles.nav}`}>
        <Link to="/" className={styles.brand}>
          <img src={logoImage} alt="Makalu Bake & Sip Logo" className={styles.brandLogo} />
          <span className={styles.brandText}>Makalu Bake &amp; Sip</span>
        </Link>

        <ul className={styles.links}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`${styles.link} ${isActive ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link to="/menu" className={styles.cta}>
          View Menu
        </Link>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.b1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.b2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.b3 : ''}`} />
        </button>
      </nav>

      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <ul className={styles.drawerLinks}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`${styles.drawerLink} ${isActive ? styles.drawerActive : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}

          <li>
            <Link
              to="/menu"
              className={styles.drawerCta}
              onClick={() => setMenuOpen(false)}
            >
              View Menu
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}