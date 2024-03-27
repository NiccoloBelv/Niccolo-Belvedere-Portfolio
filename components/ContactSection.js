import React from 'react';
import styles from '@styles/Home.module.css'; // Make sure the path is correct for your CSS

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Additional handling here if necessary
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactInfo}>
      </div>
      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
      <form name="contact" onSubmit={handleSubmit} className={styles.contactForm} data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" required></textarea>
        </p>
        <p>
          <button type="submit" className={styles.sendButton}>Send Message</button>
        </p>
      </form>
    </section>
  );
};

export default ContactSection;
