import React from 'react';
import styles from './about.module.css';

const values = [
  {
    title: 'Fresh Daily',
    description: 'Every loaf, pastry, and coffee blend is crafted from scratch each morning with the finest natural ingredients.',
  },
  {
    title: 'Premium Ingredients',
    description: 'We source artisanal flour, single-origin beans, and seasonal produce to ensure exceptional flavour in every bite.',
  },
  {
    title: 'Community First',
    description: 'Makalu Bake & Sip is a neighborhood gathering place built around warmth, generosity, and shared moments.',
  },
];

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '50K+', label: 'Happy Customers' },
  { value: '100%', label: 'Handcrafted Products' },
  { value: '365', label: 'Days of Fresh Baking' },
];

const team = [
  {
    name: 'Anika Sherpa',
    role: 'Founder',
    description: 'Visionary behind Makalu Bake & Sip, blending Himalayan heritage with modern café culture.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Liam Caden',
    role: 'Head Baker',
    description: 'Specializes in slow-fermented breads and pastry artistry that balances texture, aroma, and comfort.',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Mira Ko',
    role: 'Coffee Specialist',
    description: 'Crafts signature espresso blends and seasonal brews with precision, warmth, and a refined finish.',
    image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=600&q=80',
  },
];

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.label}>OUR STORY</span>
          <h1 className={styles.heading}>Crafted with Passion, Inspired by the Himalayas</h1>
          <p className={styles.intro}>
            At Makalu Bake & Sip, we pair handcrafted pastries and artisan bread with specialty coffee in a warm, refined space inspired by mountain serenity.
          </p>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={styles.storyGrid}>
          <div className={styles.storyImage} />
          <div className={styles.storyText}>
            <span className={styles.label}>WHO WE ARE</span>
            <h2 className={styles.storyHeading}>More Than a Bakery</h2>
            <p>
              Makalu Bake & Sip is where every recipe celebrates patience, tradition, and the joy of shared moments. Our team carefully handcrafts each loaf, tart, and cup of coffee to create a soulful, elevated experience.
            </p>
            <p>
              We draw inspiration from the crisp mountain air and artisanal bakers of the Himalayas, using long fermentation, artful technique, and thoughtfully sourced ingredients to shape a calm, elegant café ritual.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.sectionInner}>
          <div className={styles.valuesGrid}>
            {values.map((item) => (
              <article key={item.title} className={styles.valueCard}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.sectionInner}>
          <div className={styles.statsGrid}>
            {stats.map((item) => (
              <div key={item.label} className={styles.statCard}>
                <p className={styles.statValue}>{item.value}</p>
                <p className={styles.statLabel}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.label}>OUR TEAM</span>
          <h2 className={styles.teamHeading}>The makers behind every moment</h2>
        </div>
        <div className={styles.teamGrid}>
          {team.map((member) => (
            <article key={member.name} className={styles.teamCard}>
              <div className={styles.avatarWrapper}>
                <img src={member.image} alt={member.name} className={styles.avatar} loading="lazy" />
              </div>
              <h3>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p>{member.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div>
            <h2>Visit Makalu Bake & Sip Today</h2>
            <p>
              Experience handcrafted baking, thoughtful coffee, and an inviting atmosphere where every detail is made to feel luxurious and personal.
            </p>
          </div>
          <a href="/menu" className={styles.ctaButton}>Explore Our Menu</a>
        </div>
      </section>
    </main>
  );
}
