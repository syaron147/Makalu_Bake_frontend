import React from 'react';
import styles from './featureditems.module.css';
import useReveal from '../hooks/useReveal';
import milkcakeImg from '../assets/milk-cake.jpeg';
import chocolatecakeImg from '../assets/chocolate-cake.jpeg';
import chocolatedonutImg from '../assets/chocolate-donut.jpg';
const products = [
  {
    id: 1, name: 'milk cake', price: 'rs. 350', tags: ['French Butter', '24h Rise'],
    img: milkcakeImg,
  },
  {
    id: 2, name: 'chocolate cake', price: 'rs. 700', tags: ['Single Origin', 'House Syrup'],
    img: chocolatecakeImg,
  },
  {
    id: 3, name: 'chocolate donuts', price: 'rs. 100', tags: ['Ancient Grains', '72h Ferment'],
    img: chocolatedonutImg,
  },

];

function ProductCard({ product, delay }) {
  const ref = useReveal();
  return (
    <article ref={ref} className={`${styles.card} reveal`} style={{ transitionDelay: `${delay}ms` }}>
      <div className={styles.imageWrap}>
        <img src={product.img} alt={product.name} className={styles.image} loading="lazy" />
      </div>
      <div className={styles.meta}>
        <h3 className={styles.name}>{product.name}</h3>
        <span className={styles.price}>{product.price}</span>
      </div>
      <div className={styles.tags}>
        {product.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>
    </article>
  );
}

export default function FeaturedItems() {
  const headRef = useReveal();
  return (
    <section id="menu" className={styles.section}>
      <div className="container">
        <div ref={headRef} className={`${styles.header} reveal`}>
          <div>
            <h2 className={styles.sectionTitle}>Signature Creations</h2>
            <p className={styles.sectionSub}>Each piece is a testament to our commitment to slow fermentation and ethical sourcing. Experience the crunch of history.</p>
          </div>
          <a href="#menu" className={styles.seeAll}>See the full menu</a>
        </div>
        <div className={styles.grid}>
          {products.map((p, i) => <ProductCard key={p.id} product={p} delay={i * 80} />)}
        </div>
      </div>
    </section>
  );
}