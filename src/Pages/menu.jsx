import React, { useState } from 'react';
import styles from './menu.module.css';
import useReveal from '../hooks/useReveal';

// Import all product images
import blackforestCake from '../assets/blackforest-cake.jpeg';
import whiteforestCake from '../assets/whiteforest-cake.jpeg';
import milkCake from '../assets/milk-cake.jpeg';
import cupcakes from '../assets/cupcakes.jpeg';
import carrotCake from '../assets/carrot-cake.jpeg';
import vanillaCake from '../assets/vanilla-cake.jpg';
import brownies from '../assets/brownies.jpeg';
import chocolateCake from '../assets/chocolate-cake.jpeg';
import pastries from '../assets/pastries.jpeg';
import normalDonut from '../assets/normal-donut.jpg';
import chocolateDonut from '../assets/chocolate-donut.jpg';
import butterCookie from '../assets/butter-cookie.jpeg';
import bread from '../assets/bread.jpeg';

const CATEGORIES = ['All', 'Cakes', 'Pastries', 'Donuts', 'Cookies', 'Breads'];

const PRODUCTS = [
  // Cakes Category
  {
    id: 1,
    name: 'Black Forest Cake',
    price: '$48.00',
    description: 'Classic German chocolate cake with cherry filling and chocolate shavings.',
    category: 'Cakes',
    img: blackforestCake,
  },
  {
    id: 2,
    name: 'White Forest Cake',
    price: '$45.00',
    description: 'Elegant white chocolate cake with fresh berries and light cream.',
    category: 'Cakes',
    img: whiteforestCake,
  },
  {
    id: 3,
    name: 'Milk Cake',
    price: '$42.00',
    description: 'Creamy milk-based cake with smooth frosting and delicate flavors.',
    category: 'Cakes',
    img: milkCake,
  },
  {
    id: 4,
    name: 'Cupcake Delights',
    price: '$4.50',
    description: 'Mini individual cakes with premium frosting and sprinkles.',
    category: 'Cakes',
    img: cupcakes,
  },
  {
    id: 5,
    name: 'Carrot Cake',
    price: '$44.00',
    description: 'Moist carrot cake with cream cheese frosting and walnuts.',
    category: 'Cakes',
    img: carrotCake,
  },
  {
    id: 6,
    name: 'Vanilla Cake',
    price: '$40.00',
    description: 'Classic vanilla sponge cake with smooth buttercream frosting.',
    category: 'Cakes',
    img: vanillaCake,
  },
  {
    id: 7,
    name: 'Brownie Bliss',
    price: '$5.00',
    description: 'Rich chocolate brownie with fudgy center and crispy edges.',
    category: 'Cakes',
    img: brownies,
  },
  {
    id: 8,
    name: 'Chocolate Cake',
    price: '$46.00',
    description: 'Decadent dark chocolate cake with silky ganache frosting.',
    category: 'Cakes',
    img: chocolateCake,
  },
  // Pastries Category
  {
    id: 9,
    name: 'Butter Croissant',
    price: '$4.75',
    description: 'Flaky French butter croissant, 24-hour proofed to perfection.',
    category: 'Pastries',
    img: pastries,
  },
  {
    id: 10,
    name: 'Almond Croissant',
    price: '$5.50',
    description: 'Butter croissant filled with almond cream and toasted flakes.',
    category: 'Pastries',
    img: pastries,
  },
  {
    id: 11,
    name: 'Chocolate Pastry',
    price: '$5.25',
    description: 'Crispy pastry filled with premium dark chocolate and hazelnut spread.',
    category: 'Pastries',
    img: pastries,
  },
  {
    id: 12,
    name: 'Classic Pastry',
    price: '$4.50',
    description: 'Traditional laminated pastry with buttery layers and delicate texture.',
    category: 'Pastries',
    img: pastries,
  },
  // Donuts Category
  {
    id: 13,
    name: 'Classic Donut',
    price: '$3.50',
    description: 'Golden fried donut with sugar coating and light, airy texture.',
    category: 'Donuts',
    img: normalDonut,
  },
  {
    id: 14,
    name: 'Chocolate Donut',
    price: '$4.00',
    description: 'Soft donut with rich chocolate glaze and sprinkles.',
    category: 'Donuts',
    img: chocolateDonut,
  },
  // Cookies Category
  {
    id: 15,
    name: 'Butter Cookies',
    price: '$6.50',
    description: 'Crispy butter cookies with delicate flavor and beautiful presentation.',
    category: 'Cookies',
    img: butterCookie,
  },
  // Breads Category
  {
    id: 16,
    name: 'Fresh Bread',
    price: '$8.00',
    description: 'Artisan bread with crispy crust and soft, fluffy interior.',
    category: 'Breads',
    img: bread,
  },
];

function ProductCard({ product, delay }) {
  const ref = useReveal(100);

  return (
    <article ref={ref} className={`${styles.card} reveal`} style={{ transitionDelay: `${delay}ms` }}>
      <div className={styles.imageWrap}>
        <img src={product.img} alt={product.name} className={styles.image} loading="lazy" />
        <span className={styles.categoryBadge}>{product.category}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.nameRow}>
          <h3 className={styles.name}>{product.name}</h3>
          <span className={styles.price}>{product.price}</span>
        </div>

        <p className={styles.description}>{product.description}</p>
      </div>
    </article>
  );
}

export default function MenuPage() {
  const [active, setActive] = useState('All');
  const titleRef = useReveal();

  const filtered = active === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((product) => product.category === active);

  return (
    <main className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.blobTL} aria-hidden="true" />
        <div className={styles.blobBR} aria-hidden="true" />

        <div ref={titleRef} className={`${styles.heroInner} reveal`}>
          <span className={styles.eyebrow}>Handcrafted Selection</span>
          <h1 className={styles.headline}>Our Menu</h1>
          <p className={styles.subline}>
            A premium collection of artisanal cakes, pastries, and baked goods, crafted fresh daily with the finest ingredients and traditional techniques.
          </p>
        </div>
      </section>

      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterBar}>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                className={`${styles.pill} ${active === category ? styles.pillActive : ''}`}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.menuSection}>
        <div className="container">
          {filtered.length === 0 ? (
            <p className={styles.empty}>No items found.</p>
          ) : (
            <div className={styles.grid}>
              {filtered.map((product, index) => (
                <ProductCard key={product.id} product={product} delay={index * 70} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
