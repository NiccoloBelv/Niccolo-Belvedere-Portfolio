import React from 'react';
import styles from '@styles/Home.module.css';

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" className={styles.contactForm}>
        
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
