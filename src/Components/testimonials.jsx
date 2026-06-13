import React from 'react';
import styles from './testimonials.module.css';
import useReveal from '../hooks/useReveal';

const reviews = [
  { id: 1, quote: "The sourdough here is life-changing. It reminds me of the bakeries in rural France, but with a local soul I can't find anywhere else.", name: 'Julian Pierce', role: 'Local Architect', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAJlRlskNY7vomtG8fYkLSmCjxKBAr1Bl8cHDcQihbgzcdteKDAOl6Z5fiI8tzo7VUvjSUGBU0awls1Mx-7D4m4wX9GOcZXhXZ4gqpO8xJJG-Qlx6PRAm2p5Vyz3Jibb_kcAzRy5_LEBnlm0yT4D4HPNSjJJ9n1XfquH9QUl5Jfjjg93_irU3cQJ-UL7rRYq4NAa9b67wMqBmLLka_c6Ook7ZCIvo4Te566e8ixttQcAyYNpJ-RzRu0E508hBRbsmJcbRJO0jgOUI' },
  { id: 2, quote: "Makalu has become my morning ritual. Their Velvet Roast is the only thing that gets my day started right. Pure, liquid luxury.", name: 'Elena Rossi', role: 'Art Historian', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9G-7NNTupMAf30NkxoPwoV3y2glL8LZDmmMSUeDMeOvhAc_YnXD6P4TA-loZiiPox8ybf86y13KM6aloR2E2FWU0OljklSrbJ1s7wpgdBRjkvlEiHfhoJMCgFu3j6Q-C3AUCP9bIY8zXYvyMcBiQ2W_CgatpG-eE7r2gWsDn_LvCq08t-86GeTQzhWAlfOIcIPGPO5eZUoSpLf8Ki4qSPvcxMR6A3OUh1ltjVxRe01iUT4_u4BsdIcg8r14pIw77EQ2322ezIASk' },
  { id: 3, quote: "I bring my kids here every Saturday. It's warm, welcoming, and the cinnamon rolls are absolutely out of this world.", name: 'Marcus Thorne', role: 'Creative Director', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaEaPQhztJ97Fct8UC0n6C7Zm7-dgyXCU5ZujfND6ZsZ7hUsxEIN8mSTWF8rE0CEpKhdZT3xfETR6uT14aEYk2ZonIN_TQwYgvXJ6I19OhncYAOdcne1ayTgNTO08inZgAZTK5qOHIiiUxZ1LHwZoO9Na0jqtus_eNrEaH_zh1YxyRCOf0EnZR3Q_ay0wlb_yG15LIJdbK3AVU74bvVC-Xwk7fmtCFCycczf2O9iidDhJfrXqCf0xWS3eSm6LQaRBe50348PMAlYU' },
];

function Card({ r, delay }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`${styles.card} reveal`} style={{ transitionDelay: `${delay}ms` }}>
      <span className={`material-symbols-outlined ${styles.icon}`}>format_quote</span>
      <p className={styles.quote}>{r.quote}</p>
      <div className={styles.author}>
        <img src={r.img} alt={r.name} className={styles.avatar} loading="lazy" />
        <div>
          <p className={styles.name}>{r.name}</p>
          <p className={styles.role}>{r.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const titleRef = useReveal();
  return (
    <section className={styles.section}>
      <div className="container">
        <div ref={titleRef} className={`${styles.titleWrap} reveal`}>
          <h2 className={styles.title}>Voices of the Neighborhood</h2>
        </div>
        <div className={styles.grid}>
          {reviews.map((r, i) => <Card key={r.id} r={r} delay={i * 100} />)}
        </div>
      </div>
    </section>
  );
}