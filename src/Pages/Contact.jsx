import React, { useState } from 'react';
import styles from './Contact.module.css';

const SUBJECT_OPTIONS = [
  'General Inquiry',
  'Custom Cake Order',
  'Event Catering',
  'Wholesale Partnership',
  'Feedback',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: SUBJECT_OPTIONS[0],
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className={styles.contactPage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.subtitle}>GET IN TOUCH</p>
          <h1 className={styles.heading}>Let's Connect</h1>
          <p className={styles.heroText}>
            We'd love to hear from you. Visit our boutique bakery or reach out with your inquiries.
          </p>
        </div>
      </section>

      <section className={`container ${styles.contactContainer}`}>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <div className={styles.hoursCard}>
              <p className={styles.cardTitle}>Opening Hours</p>
              <div className={styles.hoursList}>
                <div className={styles.hourRow}>
                  <span className={styles.hourLabel}>Monday – Friday</span>
                  <span className={styles.hourSeparator} />
                  <span className={styles.hourValue}>07:00 – 19:00</span>
                </div>
                <div className={styles.hourRow}>
                  <span className={styles.hourLabel}>Saturday</span>
                  <span className={styles.hourSeparator} />
                  <span className={styles.hourValue}>08:00 – 20:00</span>
                </div>
                <div className={styles.hourRow}>
                  <span className={styles.hourLabel}>Sunday</span>
                  <span className={styles.hourSeparator} />
                  <span className={styles.hourValue}>09:00 – 17:00</span>
                </div>
              </div>
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoBlock}>
                <p className={styles.infoTitle}>OUR HOME</p>
                <address className={styles.infoText}>
                  123 Artisan Way<br />
                  Bakery District<br />
                  Kathmandu, Nepal
                </address>
              </div>
              <div className={styles.infoBlock}>
                <p className={styles.infoTitle}>INQUIRIES</p>
                <a href="mailto:hello@makalubakesip.com" className={styles.infoLink}>
                  hello@makalubakesip.com
                </a>
                <a href="tel:+977984286263" className={styles.infoLink}>
                  +977-98XXXXXXXX
                </a>
              </div>
            </div>

            <div className={styles.mapContainer}>
              <iframe
                title="Makalu Bake & Sip Location"
                className={styles.mapFrame}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3054693299065!2d85.32456771510239!3d27.713120482797525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190c3efd98a7%3A0x4f2278efa9e6bb7c!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1700000000000"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <p className={styles.formTitle}>Send an Inquiry</p>
              <p className={styles.formDescription}>
                Planning an event or just want to say hi? Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.inputLabel}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className={styles.inputField}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.inputLabel}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={styles.inputField}
                  placeholder="hello@youremail.com"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="subject" className={styles.inputLabel}>
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={styles.selectField}
                >
                  {SUBJECT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.inputLabel}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={styles.textareaField}
                  placeholder="Tell us more about your request"
                  rows="6"
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                SEND INQUIRY
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
